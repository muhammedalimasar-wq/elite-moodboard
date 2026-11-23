// Firebase backend for the Elite mood board website.
// Exposes the same small interface the app already used (db, user, assets, downloads).
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7HE7OukuvjtxoXrcZBiW2mELls9qVLLw",
  authDomain: "elite-moodboard.firebaseapp.com",
  projectId: "elite-moodboard",
  storageBucket: "elite-moodboard.firebasestorage.app",
  messagingSenderId: "348070218774",
  appId: "1:348070218774:web:0c0311b3642050d52cf937"
};
const ADMIN = "muhammed.ali.masar@gmail.com";

const app = initializeApp(firebaseConfig);
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

const caps = { db, user, assets, downloads, sample: null };
window.__fb = {
  blobURL,
  setUpCtx: c => { upCtx = c || "x"; },
  login: (e, p) => signInWithEmailAndPassword(auth, e, p),
  logout: () => signOut(auth),
  email: async () => { const u = await authReady; return u ? u.email : ""; },
};
window.__fbResolve({ use: async n => { if (!(n in caps) || !caps[n]) throw new Error("na"); return caps[n]; } });
