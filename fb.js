// Firebase backend for the Elite mood board website.
// Exposes the same small interface the app already used (db, user, assets, downloads).
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app-check.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7HE7OukuvjtxoXrcZBiW2mELls9qVLLw",
  authDomain: "elite-moodboard.firebaseapp.com",
  projectId: "elite-moodboard",
  storageBucket: "elite-moodboard.firebasestorage.app",
  messagingSenderId: "348070218774",
  appId: "1:348070218774:web:0c0311b3642050d52cf937"
};
const ADMIN = "muhammed.ali.masar@gmail.com";

const RECAPTCHA_KEY = "6Lf3zS4uAAAAAACVJhJHtrV9DSHt2eseiFgIJi6-";   // reCAPTCHA (Fraud Defense) site key for App Check — public
const app = initializeApp(firebaseConfig);
if (RECAPTCHA_KEY) initializeAppCheck(app, { provider: new ReCaptchaEnterpriseProvider(RECAPTCHA_KEY), isTokenAutoRefreshEnabled: true });
const fs = getFirestore(app);
const auth = getAuth(app);
const authReady = new Promise(r => { const u = onAuthStateChanged(auth, x => { u(); r(x); }); });

const rid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 10);

// ---- db: doc(path).get/set/update/delete, collection(path).get ----
const db = {
  doc: p => ({
    get: async () => { const s = await getDoc(doc(fs, p)); return s.exists() ? s.data() : null; },
    set: d => setDoc(doc(fs, p), d),
    update: d => updateDoc(doc(fs, p), d),
    delete: () => deleteDoc(doc(fs, p)),
  }),
  collection: p => ({ get: () => getDocs(collection(fs, p)) }),
};

// ---- files: stored as base64 strings in Firestore docs (each < 1 MB) ----
// id format: "s~<submission>~<file>"  or  "x~<file>" (public extra images)
let upCtx = "x";            // "x" for owner/public images, or a submission id
const blobToDataURL = b => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = rej; r.readAsDataURL(b); });
async function shrink(blob) {
  if (!(blob.type || "").startsWith("image/")) return blobToDataURL(blob);
  let bmp; try { bmp = await createImageBitmap(blob); } catch (e) { return blobToDataURL(blob); }
  let max = 2000, q = 0.86, out = "";
  for (let i = 0; i < 8; i++) {
    const s = Math.min(1, max / Math.max(bmp.width, bmp.height));
    const c = document.createElement("canvas"); c.width = Math.round(bmp.width * s); c.height = Math.round(bmp.height * s);
    const g = c.getContext("2d"); g.fillStyle = "#fff"; g.fillRect(0, 0, c.width, c.height); g.drawImage(bmp, 0, 0, c.width, c.height);
    out = c.toDataURL("image/jpeg", q);
    if (out.length < 900000) return out;
    q = Math.max(0.55, q - 0.1); max = Math.round(max * 0.82);
  }
  return out;
}
const pathOf = id => { const p = String(id).split("~"); return p[0] === "s" ? `submissions/${p[1]}/files/${p[2]}` : `extra_files/${p[1] || p[0]}`; };
const cache = {};
async function blobURL(id) {
  if (!id) return "";
  if (cache[id]) return cache[id];
  return cache[id] = (async () => {
    const s = await getDoc(doc(fs, pathOf(id)));
    if (!s.exists()) return "";
    const b = await (await fetch(s.data().data)).blob();
    return URL.createObjectURL(b);
  })().catch(() => "");
}
const assets = {
  upload: async blob => {
    const fid = rid(), data = await shrink(blob);
    const id = upCtx === "x" ? `x~${fid}` : `s~${upCtx}~${fid}`;
    await setDoc(doc(fs, pathOf(id)), { data, at: Date.now() });
    return { id };
  },
  delete: id => deleteDoc(doc(fs, pathOf(id))),
};


// ---- AI (Gemini via Firebase AI Logic) — owner only ----
const MODELS = ["gemini-3.8-flash", "gemini-flash-latest", "gemini-flash-lite-latest"];
let aiMod = null; const dead = new Set();
async function gen(parts) {
  if (!aiMod) aiMod = await import("https://www.gstatic.com/firebasejs/12.10.0/firebase-ai.js");
  const ai = aiMod.getAI(app, { backend: new aiMod.GoogleAIBackend() });
  let last, limited = false;
  for (let round = 0; round < 3; round++) {
    for (const name of MODELS) {
      if (dead.has(name)) continue;
      try { const r = await aiMod.getGenerativeModel(ai, { model: name }).generateContent(parts); return r.response.text(); }
      catch (e) {
        last = e; const m = String(e && (e.message || e));
        if (/\[404|no longer available|not found/i.test(m)) { dead.add(name); continue; }
        if (/\[429|RESOURCE_EXHAUSTED|quota/i.test(m)) { limited = true; continue; }
        if (/\[50[03]|high demand|unavailable/i.test(m)) continue;
        throw e;
      }
    }
    await new Promise(r => setTimeout(r, limited ? 20000 : 4000));
  }
  const err = new Error("AI unavailable"); err.code = limited ? "rate_limited" : "unavailable"; err.cause = last; throw err;
}
async function imgPart(b) {
  let data;
  try {
    const bmp = await createImageBitmap(b); const s = Math.min(1, 1600 / Math.max(bmp.width, bmp.height));
    const c = document.createElement("canvas"); c.width = Math.round(bmp.width * s); c.height = Math.round(bmp.height * s);
    const g = c.getContext("2d"); g.fillStyle = "#fff"; g.fillRect(0, 0, c.width, c.height); g.drawImage(bmp, 0, 0, c.width, c.height);
    data = c.toDataURL("image/jpeg", 0.85);
  } catch (e) { data = await blobToDataURL(b); }
  const [h, d] = data.split(","); return { inlineData: { data: d, mimeType: h.slice(5).split(";")[0] } };
}
async function buildParts(prompt, o) { const parts = [prompt]; for (const b of (o && o.images) || []) parts.push(await imgPart(b)); return parts; }
const sample = async (prompt, o) => { const text = (await gen(await buildParts(prompt, o))).replace(/\*\*|__|^#+\s*/gm, "").trim(); if (o && o.onText) o.onText({ text }); return { text }; };
sample.json = async (prompt, o) => {
  const t = await gen(await buildParts(prompt + "\nReturn only valid JSON, no markdown.", o));
  const m = t.match(/\{[\s\S]*\}/); return m ? JSON.parse(m[0]) : null;
};
sample.limits = async () => ({ images: true });

// ---- user ----
const user = {
  id: async () => { const id = rid(); upCtx = id; return id; },
  isOwner: async () => { const u = await authReady; return !!(u && u.email === ADMIN); },
};

// ---- downloads ----
const downloads = {
  save: async ({ filename, data }) => {
    const u = URL.createObjectURL(data instanceof Blob ? data : new Blob([data]));
    const a = document.createElement("a"); a.href = u; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(u), 60000);
  },
};

const caps = { db, user, assets, downloads };
window.__fb = {
  blobURL,
  setUpCtx: c => { upCtx = c || "x"; },
  login: (e, p) => signInWithEmailAndPassword(auth, e, p),
  logout: () => signOut(auth),
  email: async () => { const u = await authReady; return u ? u.email : ""; },
};
window.__fbResolve({ use: async n => {
  if (n === "sample") { if (await user.isOwner()) return sample; throw new Error("owner only"); }
  if (!(n in caps) || !caps[n]) throw new Error("na"); return caps[n];
} });
