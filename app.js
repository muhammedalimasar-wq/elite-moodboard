{
/* ================= i18n ================= */
let LANG='ar';try{LANG=localStorage.getItem('elite_lang')||'ar'}catch(e){}
const EN={
'بياناتك':'Your details','مكونات الوحدة':'Your home','الطراز':'Style','اختيار الصور':'Pick images','الموود بورد':'Mood board',
'طلبات العملاء':'Client requests','إدارة الفراغات':'Manage spaces','جاري التحميل...':'Loading...',
'اختار التصميم اللي يشبهك':'Choose the design that feels like you',
'تصفّح نماذج من أعمال Elite السابقة، واختار اللي عاجبك في كل غرفة. في الآخر هيطلع لك موود بورد خاص بيك، فيه الألوان والخامات اللي بتميل لها.':'Browse samples of Elite\'s past projects and pick what you like in every room. At the end you get your own mood board with the colours and materials you lean towards.',
'كود العميل':'Client code','الاسم':'Name','رقم الموبايل':'Mobile number','نوع الوحدة':'Unit type','شقة':'Apartment','دوبلكس':'Duplex','فيلا':'Villa',
'البلان هترفعه في الخطوة الجاية':'You will upload the plan in the next step','، بلان لكل دور':', one plan per floor','التالي':'Next','رجوع':'Back',
'جاري تحويل أول صفحة في الـ PDF لصورة...':'Converting the first PDF page to an image...',
'الملف اتحفظ، بس مقدرناش نعرضه كصورة. لو عايز تحدد الغرف على البلان، ارفعه كصورة (JPG أو PNG).':'The file was kept, but we could not show it as an image. To mark rooms on the plan, upload it as JPG or PNG.',
'حمامات ضيوف / عامة':'Guest / shared bathrooms','حذف الدور':'Remove floor','بلان الدور':'Floor plan','البلان':'Plan','(صورة أو PDF)، اختياري':'(image or PDF), optional',
'تم إرفاق: ':'Attached: ','، اضغط للتغيير':', click to change','اضغط هنا أو اسحب ملف البلان':'Click here or drop the plan file','اقرأ البلان بالذكاء الاصطناعي':'Read the plan with AI',
'الغرف':'Rooms','الغرف اللي ليها حمام خاص':'Rooms with a private bathroom','الفراغات الموجودة':'Spaces included',' في الدور':' on this floor','مكونات الشقة':'Apartment layout',
'مكونات':'Layout of the','ضيف الأدوار، وارفع بلان كل دور، وحدد فراغاته. الغرف بتترقم بكود الدور: B بدروم، G أرضي، F1 وF2 للأدوار، R روف.':'Add the floors, upload each floor plan and set its spaces. Rooms are numbered by floor code: B basement, G ground, F1/F2 upper floors, R roof.',
'حدد عدد الغرف والفراغات الموجودة. هنعرض لك صور الفراغات دي بس، وكل غرفة متكررة ليها اختيار لوحدها.':'Set the number of rooms and the spaces you have. We will only show images for these spaces, and each repeated room gets its own choice.',
'الأدوار':'Floors','دور باسم تاني':'Floor with another name','مثلاً: الميزانين':'e.g. Mezzanine','كوده':'Its code','إضافة الدور':'Add floor',' اكتب اسم الدور وكوده.':' Enter the floor name and code.',' الكود ده محجوز لدور تاني.':' This code is used by another floor.',
'السلم والخارج':'Stairs and outdoors','السلم الداخلي (في الدور الأرضي)':'Internal stairs (on the ground floor)',' جاري قراءة البلان...':' Reading the plan...',
'تم. باقي غرف النوم اتحطت كغرف أولاد، غيّر منها حسب الحالة. ':'Done. Other bedrooms were set as boys\' rooms; change them as needed. ',' مقدرناش نقرا البلان دلوقتي. حدد العدد يدوي.':' Could not read the plan now. Please set the numbers manually.',
'نوع الديكور اللي بتميل له':'The decor style you lean towards','اختار طراز أو أكتر، والصور هتتفلتر عليه. غرف الأطفال ليها طرازها الخاص وبتظهر كاملة.':'Pick one or more styles and the images will be filtered. Kids\' rooms have their own style and always show in full.',
'اعرض الكل':'Show all','مودرن كلاسيك: خطوط مودرن مع كرانيش وتجاليد. مودرن داكن: ألوان غامقة وخشب جوز ورخام أسود.':'Modern Classic: modern lines with mouldings and wall panels. Dark Modern: deep tones, walnut and black marble.','ابدأ الاختيار':'Start picking',
'اختار اللي عاجبك':'Pick what you like','اضغط على أي صورة عشان تختارها، وتقدر تختار أكتر من صورة في كل غرفة. اخترت لحد دلوقتي':'Tap any image to pick it; you can pick several per room. Picked so far:','صورة':'images',
'مفيش فراغات. ارجع وحدد مكونات الوحدة.':'No spaces yet. Go back and set up your home.','نماذج من أعمالنا':'From our projects','، الطراز: ':', style: ',
'عدّل مكانها على البلان':'Edit its place on the plan','حدد مكان الغرفة على البلان':'Mark the room on the plan','صور الفراغ ده هتتضاف قريب.':'Images for this space are coming soon.',
'صور استلهام':'Inspiration images','صور مرجعية من مصادر خارجية لتوضيح الأفكار، وليست من تنفيذ Elite.':'Reference images from outside sources to illustrate ideas; not built by Elite.',
'الغرفة اللي بعدها':'Next room','اعرض الموود بورد':'Show mood board','المشروع':'Project','كل المشاريع':'All projects','اعرض المشروع كله':'View whole project',
'المشروع ده ما فيهوش صور للفراغ ده.':'This project has no images for this space.','المشاريع دي ما فيهاش صور للفراغ ده.':'The selected projects have no images for this space.','اعرض المشاريع المختارة':'View selected projects','مشاريع مختارة':'projects selected','المشاريع المختارة':'Selected projects','صورة استلهام، ليست من تنفيذ Elite':'Inspiration image, not built by Elite',
'السابقة':'Previous','التالية':'Next','إغلاق':'Close','اختار الصورة دي':'Pick this image','إلغاء الاختيار':'Unpick',
'حدد مكان: ':'Mark: ','اسحب بالماوس أو بصباعك مستطيل على مكان الغرفة في البلان.':'Drag a rectangle over the room on the plan.','إلغاء':'Cancel','مسح التحديد':'Clear','حفظ':'Save',
'الموود بورد الخاص بـ ':'Mood board for ','صورة مختارة':'images picked','من أعمالنا':'from our projects','باليتة الألوان':'Colour palette','الألوان الأكتر تكراراً في الصور اللي اخترتها.':'The most frequent colours in the images you picked.',
'درجة الإضاءة والألوان':'Lightness and tone','الخامات اللي بتتكرر في اختياراتك':'Materials that recur in your picks','إضاءة مخفية':'Hidden lighting','اقتراحات الخامات والتشطيبات':'Suggested materials and finishes',
'ملخص المصمم':'Designer\'s summary','اكتب ملخص لذوقي':'Write a summary of my taste','ملخص مكتوب بالذكاء الاصطناعي من الصور اللي اخترتها.':'An AI-written summary based on the images you picked.',
'اختياراتك حسب الغرفة':'Your picks by room','رجوع للاختيار':'Back to picking','نسخ الأكواد':'Copy codes','تحميل PDF':'Download PDF','إرسال الاختيارات لـ Elite':'Send picks to Elite',
'لو الإرسال مش متاح عندك، انسخ الأكواد وابعتها لينا واتساب.':'If sending is not available, copy the codes and send them to us on WhatsApp.','اختيارات ':'Picks of ','اتنسخت الأكواد.':'Codes copied.',
'النسخ مش متاح هنا. الأكواد:':'Copying is not available here. Codes:','جاري الكتابة...':'Writing...','مقدرناش نكتب الملخص دلوقتي.':'Could not write the summary now.','جاري الإرسال...':'Sending...',
'تم إرسال اختياراتك لـ Elite. هنتواصل معاك قريب.':'Your picks were sent to Elite. We will contact you soon.','الإرسال مش متاح من حسابك. انسخ الأكواد وابعتها لينا واتساب.':'Sending is not available from your account. Copy the codes and send them on WhatsApp.',
'جاري تجهيز الملف...':'Preparing the file...','تم تجهيز الملف: ':'File ready: ','تحميل الملف مش متاح أو اتلغى.':'Download is unavailable or was cancelled.',
'تحليل الذوق':'Taste analysis','درجة الإضاءة':'Lightness','الخامات المتكررة':'Recurring materials','نماذج مختارة':'picks','موقع الفراغ على البلان':'Location on the plan','من أعمال Elite':'Elite project',
'ملخص الاختيارات':'Summary of picks','الفراغ':'Space','الأكواد':'Codes','شكراً لاختياركم Elite':'Thank you for choosing Elite','الخارج':'Outdoors',
'عميل أرسل اختياراته.':'clients sent their picks.','لينك لعميل جديد بكود: لينك الصفحة + #الكود، مثلاً …#EL-001.':'Link for a new client with a code: page link + #code, e.g. …#EL-001.','العميل':'Client','الكود':'Code','الوحدة':'Unit','الاختيارات':'Picks',
'فتح':'Open','بدون كود':'No code','التحميل أخد وقت طويل.':'Loading is taking long.','مقدرناش نقرا الطلبات.':'Could not read the requests.','حفظ الكود':'Save code','الاختيارات ومكان كل فراغ على البلان':'Picks and the location of each space on the plan',
'حدد المكان':'Mark location','العميل ما رفعش بلان كصورة.':'The client did not upload a plan image.','رجوع للطلبات':'Back to requests','مقدرناش نحفظ.':'Could not save.',
'ضيف فراغ جديد، أو ارفع صور لأي فراغ. اللي تضيفه بيظهر لكل العملاء على طول.':'Add a new space or upload images to any space. What you add shows to all clients right away.','فراغ جديد':'New space','اسم الفراغ بالعربي':'Space name (Arabic)','اسم الفراغ بالإنجليزي':'Space name (English)',
'كود الفراغ (حروف إنجليزي)':'Space code (English letters)','يظهر في':'Shows in','الشقة والفيلا':'Apartment, duplex and villa','الفيلا والدوبلكس بس':'Villa and duplex only','الشقة بس':'Apartment only',
'النوع':'Kind','فراغ واحد':'Single space','غرفة ممكن تتكرر':'Room that can repeat','غرفة نوم (تتكرر وممكن ليها حمام خاص)':'Bedroom (repeats, may have private bath)','إضافة الفراغ':'Add space',
'رفع صور':'Upload images','نوع الصور':'Image type','صور استلهام ':'Inspiration','الخامات الظاهرة في الصور':'Materials visible in the images',
'الألوان والدرجة اللونية بيتحسبوا لوحدهم من كل صورة، والكود بيتولّد تلقائي.':'Colours and tone are computed from each image; the code is generated automatically.','اختار الصور وارفعها':'Choose and upload images',
'الصور اللي اتضافت':'Added images','حذف':'Delete','الكود لازم يكون 3 حروف أو أكتر.':'The code must be 3 letters or more.','الكود ده مستخدم قبل كده.':'This code is already used.',
'مقدرناش نضيف الفراغ.':'Could not add the space.','مقدرناش نحذف.':'Could not delete.','بدون مشروع':'No project','المشاريع':'Projects','الاسم بالعربي':'Arabic name','الاسم بالإنجليزي':'English name','مخفي':'Hidden','حفظ المشاريع':'Save projects','مشروع جديد':'New project',
'اتحفظت المشاريع.':'Projects saved.','الأسماء دي اللي العملاء بيشوفوها في فلتر المشاريع. خليها محايدة من غير أسماء العملاء.':'These names appear in the project filter. Keep them neutral, without client names.',
'مقدرناش نحمّل الصور.':'Could not load the images.','صور مرجعية من العميل':'Client reference images','لو عندك صورة لطلب معين، ارفعها أو انسخها من النت والزقها هنا بـ Ctrl+V. لينكات الصور مش بتشتغل، لازم الصورة نفسها.':'Have a picture of something specific? Upload it, or copy it from the web and paste it here with Ctrl+V. Image links do not work; the image itself is needed.','إضافة صورة مرجعية':'Add reference image','ملاحظات الغرفة':'Room notes','مثلاً: الدولاب لحد السقف، والسقف زي الصورة من غير النجفة':'e.g. wardrobe up to the ceiling; ceiling like the image but without the chandelier','ملاحظات على الصور المختارة':'Notes on picked images','إيه اللي عاجبك في الصورة دي؟':'What do you like in this image?','ترقيم على البلان':'Number points on the plan','حط أرقام على بلان الغرفة، واربط كل رقم بصورة أو ملاحظة، عشان المهندس يعرف كل نقطة عايزة إيه.':'Put numbers on the room plan and link each one to an image or a note, so the engineer knows what every point needs.','حدد مكان الغرفة على البلان الأول (الصورة الصغيرة اللي فوق)، وبعدها تقدر ترقّم عليه.':'Mark the room on the plan first (the small image above), then you can number points on it.','دوس على البلان عشان تحط رقم جديد، واسحب الرقم عشان تحركه.':'Click the plan to add a number; drag a number to move it.','بدون صورة':'No image','ملاحظة على النقطة دي':'Note for this point','مفيش أرقام لسه. دوس على البلان.':'No numbers yet. Click the plan.','صورة من العميل':'Client image','تفاصيل الغرفة':'Room details','ملاحظات وصور مرجعية وترقيم':'Notes, reference images and numbering','الكود ده بيظهر في الموود بورد والـ PDF واسم الملف وصفحة الطلبات.':'This code shows on the mood board, the PDF, the file name and the requests page.','رفع مشروع جديد':'Upload a new project','ارفع PDF المشروع، والصفحة تطلّع الصور وتقص الإطار، والذكاء الاصطناعي يقترح الفراغ والطراز والخامات لكل صورة. بعدها تراجع وتنشر.':'Upload the project PDF; the page extracts the images, trims the frame, and AI suggests the space, style and materials for each image. Then you review and publish.','اختار ملف الـ PDF أو الصور':'Choose the PDF or images','مراجعة الصور':'Review images','اقتراح بالذكاء الاصطناعي':'Suggest with AI','نشر الصور المختارة':'Publish selected images','صفحات البلان والغلاف والـ Thank You متشالة من الاختيار تلقائي. راجع الفراغ والطراز والخامات لكل صورة قبل النشر.':'Plan, cover and Thank-You pages are unticked automatically. Check the space, style and materials of each image before publishing.','الصورة':'Image','الخامات':'Materials','صفحة':'Page','بلان':'plan','غلاف / فاضية':'cover / blank','خامة':'material','إلغاء المشروع ده':'Discard this project','جاري تجهيز الصفحات...':'Preparing pages...','مقدرناش نفتح الملف. جرّب ملف تاني أو ارفع الصور نفسها.':'Could not open the file. Try another file or upload the images themselves.','الذكاء الاصطناعي بيصنّف الصور...':'AI is classifying the images...','الذكاء الاصطناعي وقف مؤقتاً. كمّل التصنيف يدوي أو جرّب تاني بعد شوية.':'AI paused. Continue manually or try again shortly.','خلص التصنيف. راجع الاقتراحات قبل النشر.':'Classification done. Review the suggestions before publishing.','جاري النشر...':'Publishing...'};
const t=s=>LANG==='en'?(EN[s]??s):s;
const SPEN={ENT:'Entrance & corridors',REC:'Reception',DIN:'Dining room',KIT:'Kitchen',LIV:'Family living',MST:'Master bedroom',BOY:'Boys\' bedroom',GRL:'Girls\' bedroom',KID:'Kids\' room',DRS:'Dressing room',BTH:'Guest bathroom',LOB:'Floor lobby',BAL:'Balcony',STR:'Internal stairs',GRD:'Garden & landscape',FAC:'Exterior facade'};
const STEN={'مودرن':'Modern','مودرن كلاسيك':'Modern Classic','مودرن داكن':'Dark Modern','أطفال مبهج':'Playful Kids','لاندسكيب مودرن':'Modern Landscape'};
const TOEN={'فاتح':'Light','دافي':'Warm','داكن':'Dark'};
const MAEN={'رخام':'Marble','رخام بعروق':'Veined marble','رخام فاتح':'Light marble','رخام أسود':'Black marble','بانوهات خشب':'Wood panels','بانوهات خشب طبيعي':'Natural wood panels','شرائح خشب':'Wood slats','خشب فاتح':'Light wood','خشب دافي':'Warm wood','كرانيش وتجاليد':'Mouldings & wall panels','تجاليد حوائط':'Wall cladding','معدن ذهبي':'Gold metal','مرايا':'Mirrors','قماش/تنجيد':'Upholstery','خلفية سرير مُنجدة':'Upholstered headboard','ورق حائط/رسومات':'Wallpaper / murals','دواليب مط':'Matte cabinets','فاترينات زجاج':'Glass display units','بورسلين/رخام':'Porcelain / marble','زجاج شاور':'Glass shower','إضاءة مخفية':'Hidden lighting','نباتات':'Plants','ستائر':'Curtains','سجاد':'Rugs','ترابيزة رخام/خشب':'Marble/wood table','كراسي قماش':'Fabric chairs','نجفة معلقة':'Pendant chandelier','أرضيات رخام/بورسلين':'Marble/porcelain floors','حائط تلفزيون':'TV wall','كونترتوب رخام/كوارتز':'Marble/quartz countertop','أجهزة بلت إن':'Built-in appliances','مرآة بإضاءة':'Lit mirror','إضاءة رفوف':'Shelf lighting','خشب':'Wood','درج خشب/رخام':'Wood/marble treads','درابزين زجاج/معدن':'Glass/metal railing','نجيل':'Grass','خشب ديك':'Deck wood','سواتر ألومنيوم':'Aluminium screens','أرضية خشب':'Wood floor','دهان/حجر':'Paint/stone','إضاءة واجهات':'Facade lighting','دواليب كحلي':'Navy cabinets','دواليب أخضر غامق':'Dark green cabinets','قاطوع أرابيسك معدن':'Metal arabesque partition','ورق حائط':'Wallpaper','ززراعة داخلية':'Indoor planting','زراعة داخلية':'Indoor planting','ورق حائط فضاء':'Space wallpaper','ألوان باستيل':'Pastel colours'};
const stN=s=>LANG==='en'?(STEN[s]||s):s,toN=s=>LANG==='en'?(TOEN[s]||s):s,maN=s=>LANG==='en'?(MAEN[s]||s):s;
const tyN=s=>t(s);
function applyLang(){document.documentElement.lang=LANG;document.documentElement.dir=LANG==='en'?'ltr':'rtl';const b=document.getElementById('langBtn');b.textContent=LANG==='en'?'عربي':'English';
 document.getElementById('ownerBtn').textContent=t('طلبات العملاء');document.getElementById('adminBtn').textContent=t('إدارة الفراغات')}
document.getElementById('langBtn').onclick=()=>{LANG=LANG==='en'?'ar':'en';try{localStorage.setItem('elite_lang',LANG)}catch(e){}applyLang();(VIEW||render)()};
let VIEW=null;
/* ================= spaces & floors ================= */
const BASE=[
 {k:'ENT',name:'المدخل والطرقات',sc:'both',def:1},{k:'REC',name:'الصالة (ريسبشن)',sc:'both',def:1},{k:'DIN',name:'غرفة الطعام',sc:'both',def:1},
 {k:'KIT',name:'المطبخ',sc:'both',def:1},{k:'LIV',name:'المعيشة',sc:'both',def:1},
 {k:'MST',name:'غرفة ماستر',multi:1,bed:1,sc:'both',def:1},{k:'BOY',name:'غرفة أولاد',multi:1,bed:1,sc:'both',def:1},
 {k:'GRL',name:'غرفة بنات',multi:1,bed:1,sc:'both',def:0},{k:'KID',name:'غرفة أطفال',multi:1,bed:1,sc:'both',def:0},
 {k:'DRS',name:'غرفة الملابس',sc:'both',def:1},{k:'BTH',name:'حمام ضيوف',multi:1,sc:'both',def:1},
 {k:'LOB',name:'لوبي الدور',sc:'multi',def:0},{k:'BAL',name:'البلكونة',sc:'multi',def:0},
 {k:'STR',name:'السلم الداخلي',lvl:'house'},{k:'GRD',name:'الحديقة واللاندسكيب',lvl:'out'},{k:'FAC',name:'الواجهة الخارجية',lvl:'out'}].map(s=>({...s,en:SPEN[s.k]}));
let SPACES=BASE.map(x=>({...x}));
const spN=s=>LANG==='en'?(s.en||s.name):s.name;
const FLOORS=[{id:'B',name:'البدروم',en:'Basement'},{id:'G',name:'الدور الأرضي',en:'Ground floor'},{id:'F1',name:'الدور الأول',en:'First floor'},{id:'F2',name:'الدور التاني',en:'Second floor'},{id:'F3',name:'الدور التالت',en:'Third floor'},{id:'R',name:'الروف',en:'Roof'}];
const fN=f=>{if(!f)return '';if(f.id==='')return t('الخارج');const p=FLOORS.find(x=>x.id===f.id);return LANG==='en'?(p?p.en:(f.en||f.name)):(p?p.name:f.name)};
const FDEF={G:{ENT:1,REC:1,DIN:1,KIT:1,LIV:1,BTH:1},F1:{MST:1,BOY:1,DRS:1,LOB:1},F2:{BOY:1,GRL:1,LOB:1},F3:{BOY:1},B:{LIV:1,BTH:1},R:{BAL:1}};
const STYLES=['مودرن','مودرن كلاسيك','مودرن داكن'];
const MATS=['رخام','رخام بعروق','رخام فاتح','رخام أسود','بانوهات خشب','بانوهات خشب طبيعي','شرائح خشب','خشب فاتح','خشب دافي','كرانيش وتجاليد','تجاليد حوائط','معدن ذهبي','مرايا','قماش/تنجيد','خلفية سرير مُنجدة','ورق حائط/رسومات','دواليب مط','فاترينات زجاج','بورسلين/رخام','زجاج شاور','إضاءة مخفية','نباتات'];
const STEPS=['بياناتك','مكونات الوحدة','الطراز','اختيار الصور','الموود بورد'];
const TYPES=['شقة','دوبلكس','فيلا'];
const hashCode=decodeURIComponent((location.hash||'').slice(1)).replace(/[^A-Za-z0-9-]/g,'');
function newFloor(id,name){const n=id==='A'?Object.fromEntries(BASE.filter(s=>s.sc==='both').map(s=>[s.k,s.def])):{...(FDEF[id]||{})};return{id,name,n,ens:(id==='A'||id==='F1')?{MST1:1}:{},plan:null,planImg:'',planBlob:null,planId:''}}
function floorsFor(ty){return ty==='شقة'?[newFloor('A','')]:ty==='دوبلكس'?[newFloor('G','الدور الأرضي'),newFloor('F1','الدور الأول')]:[newFloor('G','الدور الأرضي'),newFloor('F1','الدور الأول'),newFloor('F2','الدور التاني')]}
const S={step:0,name:'',phone:'',code:hashCode,type:'شقة',floors:floorsFor('شقة'),str:1,out:{GRD:1,FAC:1},styles:[],projs:[],room:null,sel:{},kp:{},notes:{},inotes:{},cimgs:{},pins:{},ai:'',msg:''};
let D=[],PROJ=[],cap={},EXTRA=[],CUSTOM=[];
const app=document.getElementById('app'),mod=document.getElementById('mod');
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const heart='<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 3.2 4.5 6.9 4.5c2.1 0 3.6 1.1 5.1 3 1.5-1.9 3-3 5.1-3 3.7 0 6 3.7 4.5 7.2C19.5 16.4 12 21 12 21z"/></svg>';
const zoomI='<svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21M10.5 7.5v6M7.5 10.5h6"/></svg>';
const spOf=k=>SPACES.find(s=>s.k===k);const prOf=id=>PROJ.find(p=>p.id===id);const prN=p=>p?(LANG==='en'?(p.en||p.ar):p.ar):'';
const isMulti=st=>st.type!=='شقة';
const floorSpaces=multi=>SPACES.filter(s=>(!s.lvl||s.lvl==='f')&&!(s.sc==='multi'&&!multi)&&!(s.sc==='apt'&&multi));
function roomsFor(st){const multi=isMulti(st),r=[];const strF=multi&&st.str?(st.floors.find(x=>x.id==='G')||st.floors[0]||{}).id:null;const bath=LANG==='en'?'Bath · ':'حمام ';
 for(const f of st.floors||[]){const pre=multi?f.id+' · ':'',pid=multi?f.id+'-':'',fn=fN(f);
  for(const s of floorSpaces(multi)){const n=(f.n||{})[s.k]||0;
   if(s.multi){for(let i=1;i<=n;i++){const b=s.k+i,nm=spN(s)+(n>1?' '+i:'');r.push({id:pid+b,sp:s.img||s.k,name:nm,label:pre+nm,floor:f.id,fname:fn});
     if(s.bed&&(f.ens||{})[b])r.push({id:'E'+pid+b,sp:'BTH',name:bath+nm,label:pre+bath+nm,sub:1,floor:f.id,fname:fn})}}
   else if(n)r.push({id:pid+s.k,sp:s.img||s.k,name:spN(s),label:pre+spN(s),floor:f.id,fname:fn})}
  if(strF===f.id){const s=spOf('STR');r.push({id:'STR',sp:'STR',name:spN(s),label:pre+spN(s),floor:f.id,fname:fn})}}
 if(multi)for(const s of SPACES)if(s.lvl==='out'&&(st.out||{})[s.k])r.push({id:s.k,sp:s.k,name:spN(s),label:t('الخارج')+' · '+spN(s),floor:'',fname:t('الخارج')});
 return r}
const rooms=()=>roomsFor(S);
const planFor=r=>((S.floors.find(f=>f.id===r.floor)||{}).planImg)||'';
function imgs(sp,kind){let a=D.filter(d=>d.s===sp&&d.k===kind);if(kind==='o'){if(S.projs.length)return a.filter(d=>S.projs.includes(d.pr));if(S.styles.length&&sp!=='KID'&&sp!=='GRD'){const f=a.filter(d=>S.styles.includes(d.st));if(f.length)a=f}}return a}
const selCodes=sel=>Object.entries(sel).flatMap(([rid,cs])=>cs.map(c=>({rid,c})));
function steps(){document.getElementById('steps').innerHTML=STEPS.map((s,i)=>`<span class="${i===S.step&&!VIEW?'on':''}">${t(s)}</span>`).join('')}
function go(n){S.step=n;S.msg='';render();window.scrollTo(0,0)}
function render(){VIEW=null;document.onpaste=null;steps();[v0,v1,v2,v3,v4][S.step]()}
/* ================= step 0 ================= */
function v0(){app.innerHTML=`<h1>${t('اختار التصميم اللي يشبهك')}</h1><p class="lead">${t('تصفّح نماذج من أعمال Elite السابقة، واختار اللي عاجبك في كل غرفة. في الآخر هيطلع لك موود بورد خاص بيك، فيه الألوان والخامات اللي بتميل لها.')}</p>
<div class="panel">${cap.owner?`<div style="margin:0 0 16px;max-width:360px"><label for="cc">${t('كود العميل')}</label><input type="text" id="cc" dir="ltr" value="${esc(S.code)}" placeholder="EL-001" maxlength="24"><p class="note">${t('الكود ده بيظهر في الموود بورد والـ PDF واسم الملف وصفحة الطلبات.')}</p></div>`:S.code?`<p style="margin:0 0 14px">${t('كود العميل')}: <span class="code">${esc(S.code)}</span></p>`:''}<div class="row"><div><label for="nm">${t('الاسم')}</label><input type="text" id="nm" value="${esc(S.name)}" autocomplete="name"></div><div><label for="ph">${t('رقم الموبايل')}</label><input type="tel" id="ph" value="${esc(S.phone)}" dir="ltr" autocomplete="tel"></div></div>
<div style="margin-top:18px"><label>${t('نوع الوحدة')}</label><div class="seg">${TYPES.map(x=>`<button class="chip ${S.type===x?'on':''}" data-t="${x}">${tyN(x)}</button>`).join('')}</div><p class="note">${t('البلان هترفعه في الخطوة الجاية')}${S.type==='شقة'?'':t('، بلان لكل دور')}.</p></div></div>
<div class="nav"><span></span><button class="btn" id="nx" ${S.name.trim()?'':'disabled'}>${t('التالي')}</button></div>`;
 app.querySelector('#nm').oninput=e=>{S.name=e.target.value;app.querySelector('#nx').disabled=!S.name.trim()};app.querySelector('#ph').oninput=e=>S.phone=e.target.value;
 const cc=app.querySelector('#cc');if(cc)cc.oninput=()=>{const v=cc.value.toUpperCase().replace(/[^A-Z0-9-]/g,'');if(v!==cc.value)cc.value=v;S.code=v};
 app.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{if(S.type!==b.dataset.t){S.type=b.dataset.t;S.floors=floorsFor(S.type);S.kp={};S.sel={};S.out=S.type==='فيلا'?{GRD:1,FAC:1}:{GRD:0,FAC:0}}v0()});
 app.querySelector('#nx').onclick=()=>go(1)}
function loadScript(src){return new Promise((ok,no)=>{const s=document.createElement('script');s.src=src;s.onload=ok;s.onerror=no;document.head.appendChild(s)})}
let PDFJS=null;async function pdfjs(){if(PDFJS)return PDFJS;try{const m=await import(new URL('lib/pdf.min.js',location.href).href);m.GlobalWorkerOptions.workerSrc=new URL('lib/pdf.worker.min.js',location.href).href;PDFJS=m}
 catch(e){const V='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/';await loadScript(V+'pdf.min.js');await loadScript(V+'pdf.worker.min.js');PDFJS=window.pdfjsLib}return PDFJS}
async function openPdf(file){const lib=await pdfjs();return await lib.getDocument({data:new Uint8Array(await file.arrayBuffer())}).promise}
async function renderPage(pdf,n,maxPx){const pg=await pdf.getPage(n);const vp0=pg.getViewport({scale:1});const vp=pg.getViewport({scale:Math.min(4,maxPx/Math.max(vp0.width,vp0.height))});
 const c=document.createElement('canvas');c.width=Math.round(vp.width);c.height=Math.round(vp.height);const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);await pg.render({canvasContext:x,viewport:vp}).promise;return c}
async function pdfToImage(file){const pdf=await openPdf(file);const c=await renderPage(pdf,1,2400);return await new Promise(r=>c.toBlob(r,'image/png'))}
async function setPlan(fi,file){const f=S.floors[fi];f.plan=file;f.planId='';if(f.planImg)URL.revokeObjectURL(f.planImg);f.planImg='';f.planBlob=null;f.pm='';
 rooms().filter(r=>r.floor===f.id).forEach(r=>delete S.kp[r.id]);if(file.type==='application/pdf'){f.pm='جاري تحويل أول صفحة في الـ PDF لصورة...';v1()}
 try{const b=file.type==='application/pdf'?await pdfToImage(file):file;f.planBlob=b;f.planImg=URL.createObjectURL(b);f.pm=''}
 catch(e){f.pm='الملف اتحفظ، بس مقدرناش نعرضه كصورة. لو عايز تحدد الغرف على البلان، ارفعه كصورة (JPG أو PNG).'}v1()}
/* ================= step 1 ================= */
function floorCard(f,fi,multi){const vis=floorSpaces(multi);
 const ctr=vis.filter(s=>s.multi).map(s=>`<div class="ct"><span>${s.k==='BTH'?t('حمامات ضيوف / عامة'):spN(s)}</span><span class="pm"><button data-f="${fi}" data-m="${s.k}" aria-label="-">−</button><b>${f.n[s.k]||0}</b><button data-f="${fi}" data-p="${s.k}" aria-label="+">+</button></span></div>`).join('');
 const beds=[];vis.filter(s=>s.bed).forEach(s=>{const n=f.n[s.k]||0;for(let i=1;i<=n;i++)beds.push([s.k+i,spN(s)+(n>1?' '+i:'')])});
 return `<div class="panel fl"><div class="rh" style="margin-bottom:6px"><h2>${multi?`${esc(fN(f))} <span class="code">${f.id}</span>`:t('مكونات الشقة')}</h2>${multi&&S.floors.length>1?`<button class="btn ghost sm" data-rmf="${fi}">${t('حذف الدور')}</button>`:''}</div>
<label style="margin-top:6px">${multi?t('بلان الدور'):t('البلان')} ${t('(صورة أو PDF)، اختياري')}</label><div class="drop ${f.plan?'has':''}" data-drop="${fi}" tabindex="0">${f.plan?t('تم إرفاق: ')+esc(f.plan.name)+t('، اضغط للتغيير'):t('اضغط هنا أو اسحب ملف البلان')}</div><input type="file" data-pf="${fi}" accept="image/*,application/pdf" class="hide">
${f.planImg?`<img class="plan" src="${f.planImg}" alt="${t('البلان')}">`:''}${f.pm?`<p class="note">${esc(t(f.pm))}${f.pmx?esc(f.pmx):''}</p>`:''}${f.planBlob&&cap.sample?`<div style="margin-top:8px"><button class="btn ghost sm" data-rd="${fi}">${t('اقرأ البلان بالذكاء الاصطناعي')}</button><span class="note" data-rdm="${fi}"></span></div>`:''}
<h3 style="margin-top:18px">${t('الغرف')}</h3><div class="cnt">${ctr}</div>
${beds.length?`<h3 style="margin-top:18px">${t('الغرف اللي ليها حمام خاص')}</h3><div class="seg">${beds.map(([id,l])=>`<button class="chip sm ${f.ens[id]?'on':''}" data-f="${fi}" data-e="${id}">${l}</button>`).join('')}</div>`:''}
<h3 style="margin-top:18px">${t('الفراغات الموجودة')}${multi?t(' في الدور'):''}</h3><div class="seg">${vis.filter(s=>!s.multi).map(s=>`<button class="chip sm ${f.n[s.k]?'on':''}" data-f="${fi}" data-h="${s.k}">${spN(s)}</button>`).join('')}</div></div>`}
function v1(){const multi=isMulti(S);const free=FLOORS.filter(p=>!S.floors.some(f=>f.id===p.id));
 app.innerHTML=`<h1>${LANG==='en'?`${tyN(S.type)} layout`:`مكونات ${S.type==='فيلا'?'الفيلا':S.type==='دوبلكس'?'الدوبلكس':'الشقة'}`}</h1><p class="lead">${multi?t('ضيف الأدوار، وارفع بلان كل دور، وحدد فراغاته. الغرف بتترقم بكود الدور: B بدروم، G أرضي، F1 وF2 للأدوار، R روف.'):t('حدد عدد الغرف والفراغات الموجودة. هنعرض لك صور الفراغات دي بس، وكل غرفة متكررة ليها اختيار لوحدها.')}</p>
${multi?`<div class="panel"><h3>${t('الأدوار')}</h3><div class="seg">${free.map(p=>`<button class="chip sm" data-af="${p.id}">+ ${fN(p)} (${p.id})</button>`).join('')}</div>
<div class="row" style="margin-top:12px;max-width:640px"><div><label for="cfn">${t('دور باسم تاني')}</label><input type="text" id="cfn" placeholder="${t('مثلاً: الميزانين')}"></div><div><label for="cfc">${t('كوده')}</label><input type="text" id="cfc" dir="ltr" maxlength="3" placeholder="M"></div></div><button class="btn ghost sm" id="acf" style="margin-top:10px">${t('إضافة الدور')}</button><span class="note" id="cfm"></span></div>`:''}
${S.floors.map((f,i)=>floorCard(f,i,multi)).join('')}
${multi?`<div class="panel"><h3>${t('السلم والخارج')}</h3><div class="seg"><button class="chip sm ${S.str?'on':''}" id="tstr">${t('السلم الداخلي (في الدور الأرضي)')}</button>${SPACES.filter(s=>s.lvl==='out').map(s=>`<button class="chip sm ${S.out[s.k]?'on':''}" data-o="${s.k}">${spN(s)}</button>`).join('')}</div></div>`:''}
<div class="nav"><button class="btn ghost" id="bk">${t('رجوع')}</button><button class="btn" id="nx">${t('التالي')}</button></div>`;
 const F=b=>S.floors[+b.dataset.f];
 app.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>{const f=F(b);f.n[b.dataset.p]=Math.min(8,(f.n[b.dataset.p]||0)+1);v1()});
 app.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{const f=F(b);f.n[b.dataset.m]=Math.max(0,(f.n[b.dataset.m]||0)-1);v1()});
 app.querySelectorAll('[data-h]').forEach(b=>b.onclick=()=>{const f=F(b);f.n[b.dataset.h]=f.n[b.dataset.h]?0:1;v1()});
 app.querySelectorAll('[data-e]').forEach(b=>b.onclick=()=>{const f=F(b);f.ens[b.dataset.e]=f.ens[b.dataset.e]?0:1;v1()});
 app.querySelectorAll('[data-drop]').forEach(d=>{const i=+d.dataset.drop,pf=app.querySelector(`[data-pf="${i}"]`);d.onclick=()=>pf.click();d.onkeydown=e=>{if(e.key==='Enter')pf.click()};d.ondragover=e=>e.preventDefault();d.ondrop=e=>{e.preventDefault();if(e.dataTransfer.files[0])setPlan(i,e.dataTransfer.files[0])};pf.onchange=()=>{if(pf.files[0])setPlan(i,pf.files[0])}});
 app.querySelectorAll('[data-rd]').forEach(b=>b.onclick=()=>readPlan(+b.dataset.rd));
 app.querySelectorAll('[data-rmf]').forEach(b=>b.onclick=()=>{const f=S.floors[+b.dataset.rmf];rooms().filter(r=>r.floor===f.id).forEach(r=>{delete S.sel[r.id];delete S.kp[r.id]});S.floors.splice(+b.dataset.rmf,1);v1()});
 const ord=id=>{const i=FLOORS.findIndex(p=>p.id===id);return i<0?99:i};const sortF=()=>S.floors.sort((a,b)=>ord(a.id)-ord(b.id));
 app.querySelectorAll('[data-af]').forEach(b=>b.onclick=()=>{const p=FLOORS.find(x=>x.id===b.dataset.af);S.floors.push(newFloor(p.id,p.name));sortF();v1()});
 const acf=app.querySelector('#acf');if(acf)acf.onclick=()=>{const nm=app.querySelector('#cfn').value.trim(),cd=app.querySelector('#cfc').value.toUpperCase().replace(/[^A-Z0-9]/g,'');const m=app.querySelector('#cfm');
  if(!nm||!cd){m.textContent=t(' اكتب اسم الدور وكوده.');return}if(S.floors.some(f=>f.id===cd)||FLOORS.some(f=>f.id===cd)){m.textContent=t(' الكود ده محجوز لدور تاني.');return}const nf=newFloor(cd,nm);nf.en=nm;S.floors.push(nf);sortF();v1()};
 const ts=app.querySelector('#tstr');if(ts)ts.onclick=()=>{S.str=S.str?0:1;v1()};app.querySelectorAll('[data-o]').forEach(b=>b.onclick=()=>{S.out[b.dataset.o]=S.out[b.dataset.o]?0:1;v1()});
 app.querySelector('#bk').onclick=()=>go(0);app.querySelector('#nx').onclick=()=>go(2)}
async function readPlan(fi){const f=S.floors[fi],m=app.querySelector(`[data-rdm="${fi}"]`);m.textContent=t(' جاري قراءة البلان...');
 try{const r=await cap.sample.json(`This is a residential floor plan (${f.name||S.type}). Count the spaces and return JSON only: {"MST":number of master bedrooms,"BEDS":number of other bedrooms,"ENSUITE":number of bedrooms with a private bathroom,"BTH":number of bathrooms not attached to a bedroom,"ENT":true/false,"REC":true/false,"DIN":true/false,"KIT":true/false,"LIV":true/false,"DRS":true/false,"BAL":true/false,"note":"short note in ${LANG==='en'?'English':'Egyptian Arabic'}"}`,{images:[f.planBlob],modelTier:'default'});
  if(r){if(r.MST!=null)f.n.MST=+r.MST;if(r.BEDS!=null){f.n.BOY=+r.BEDS;f.n.GRL=0;f.n.KID=0}if(r.BTH!=null)f.n.BTH=+r.BTH;['ENT','REC','DIN','KIT','LIV','DRS','BAL'].forEach(k=>{if(r[k]!=null)f.n[k]=r[k]?1:0});
   f.ens={};let e=+r.ENSUITE||0;['MST','BOY'].forEach(k=>{for(let i=1;i<=(f.n[k]||0)&&e>0;i++){f.ens[k+i]=1;e--}});f.pm='تم. باقي غرف النوم اتحطت كغرف أولاد، غيّر منها حسب الحالة. ';f.pmx=r.note||'';v1()}}
 catch(e){m.textContent=t(' مقدرناش نقرا البلان دلوقتي. حدد العدد يدوي.')}}
/* ================= step 2 ================= */
function v2(){app.innerHTML=`<h1>${t('نوع الديكور اللي بتميل له')}</h1><p class="lead">${t('اختار طراز أو أكتر، والصور هتتفلتر عليه. غرف الأطفال ليها طرازها الخاص وبتظهر كاملة.')}</p>
<div class="panel"><div class="seg">${STYLES.map(s=>`<button class="chip ${S.styles.includes(s)?'on':''}" data-s="${s}">${stN(s)}</button>`).join('')}<button class="chip ${S.styles.length?'':'on'}" data-s="">${t('اعرض الكل')}</button></div>
<p class="note">${t('مودرن كلاسيك: خطوط مودرن مع كرانيش وتجاليد. مودرن داكن: ألوان غامقة وخشب جوز ورخام أسود.')}</p></div>
<div class="nav"><button class="btn ghost" id="bk">${t('رجوع')}</button><button class="btn" id="nx">${t('ابدأ الاختيار')}</button></div>`;
 app.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{const s=b.dataset.s;S.styles=!s?[]:S.styles.includes(s)?S.styles.filter(x=>x!==s):[...S.styles,s];v2()});
 app.querySelector('#bk').onclick=()=>go(1);app.querySelector('#nx').onclick=()=>{const r=rooms();if(!r.find(x=>x.id===S.room))S.room=(r.find(x=>D.some(d=>d.s===x.sp))||r[0]||{}).id;go(3)}}
/* ================= step 3 ================= */
function tile(d,rid){const on=(S.sel[rid]||[]).includes(d.c);return `<button class="tile ${on?'sel':''}" data-c="${d.c}" aria-pressed="${on}"><img src="${d.f}" alt="${d.c}" loading="lazy"><span class="cd">${d.c}</span><span class="hr">${heart}</span><span class="zm" data-z="${d.c}" role="button" tabindex="0" aria-label="zoom">${zoomI}</span>${d.k==='o'?`<div class="st">${esc(stN(d.st))}${d.pr&&S.projs.length!==1&&prOf(d.pr)&&!prOf(d.pr).hidden?' · '+esc(prN(prOf(d.pr))):''}</div>`:''}</button>`}
function kpThumb(img,r,attrs=''){return `<button class="kpt" ${attrs}><img src="${img}" alt="${t('البلان')}">${r?`<span class="kpr" style="right:${(1-r[0]-r[2])*100}%;top:${r[1]*100}%;width:${r[2]*100}%;height:${r[3]*100}%"></span>`:''}</button>`}
function v3(){const R=rooms();const cur=R.find(r=>r.id===S.room)||R[0];if(!cur){app.innerHTML=`<p class="empty">${t('مفيش فراغات. ارجع وحدد مكونات الوحدة.')}</p>`;return}S.room=cur.id;
 const has=D.some(d=>d.s===cur.sp);const o=imgs(cur.sp,'o'),ins=imgs(cur.sp,'i');const total=selCodes(S.sel).length+Object.values(S.cimgs).flat().length;const vp=PROJ.filter(p=>!p.hidden&&D.some(d=>d.pr===p.id));
 app.innerHTML=`<h1>${t('اختار اللي عاجبك')}</h1><p class="lead">${t('اضغط على أي صورة عشان تختارها، وتقدر تختار أكتر من صورة في كل غرفة. اخترت لحد دلوقتي')} <b>${total}</b> ${t('صورة')}.</p>
<div class="lay"><nav class="rooms">${R.map((r,i)=>`${isMulti(S)&&(i===0||R[i-1].floor!==r.floor)?`<div class="fh">${esc(r.fname)}${r.floor?' ('+r.floor+')':''}</div>`:''}<button class="${r.id===cur.id?'on':''} ${D.some(d=>d.s===r.sp)?'':'na'} ${r.sub?'sub':''}" data-r="${r.id}"><span>${esc(isMulti(S)?r.name:r.label)}</span>${(S.sel[r.id]||[]).length?`<i>${S.sel[r.id].length}</i>`:''}</button>`).join('')}</nav>
<section><div class="rh"><div><h2>${esc(cur.label)}</h2><p class="note" style="margin:0">${t('نماذج من أعمالنا')}${S.styles.length&&!S.projs.length?t('، الطراز: ')+S.styles.map(stN).join('، '):''}</p></div>
${planFor(cur)?`<div style="text-align:center">${kpThumb(planFor(cur),S.kp[cur.id],`id="kpb" aria-label="${t('حدد مكان الغرفة على البلان')}"`)}<div class="note" style="margin:4px 0 0">${S.kp[cur.id]?t('عدّل مكانها على البلان'):t('حدد مكان الغرفة على البلان')}</div></div>`:''}</div>
${vp.length?`<div class="pf"><b>${t('المشاريع')}</b><div class="dd"><button class="ddb" id="ddb" aria-haspopup="true" aria-expanded="${S.dd?'true':'false'}"><span>${!S.projs.length?t('كل المشاريع'):S.projs.length===1?esc(prN(prOf(S.projs[0]))):S.projs.length+' '+t('مشاريع مختارة')}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>
<div class="ddm ${S.dd?'':'hide'}" id="ddm" role="menu"><label class="ddi"><input type="checkbox" data-pj="" ${S.projs.length?'':'checked'}> ${t('كل المشاريع')}</label>${vp.map(p=>`<label class="ddi"><input type="checkbox" data-pj="${p.id}" ${S.projs.includes(p.id)?'checked':''}> ${esc(prN(p))}</label>`).join('')}</div></div>${S.projs.length?`<button class="btn ghost sm" id="vpj">${t('اعرض المشاريع المختارة')}</button>`:''}</div>`:''}
${!has?`<div class="empty">${t('صور الفراغ ده هتتضاف قريب.')}</div>`:`${o.length?`<div class="grid">${o.map(d=>tile(d,cur.id)).join('')}</div>`:`<div class="empty">${t(S.projs.length>1?'المشاريع دي ما فيهاش صور للفراغ ده.':'المشروع ده ما فيهوش صور للفراغ ده.')}</div>`}
${ins.length?`<div class="insp"><h3>${t('صور استلهام')}</h3><p class="note" style="margin:0 0 12px">${t('صور مرجعية من مصادر خارجية لتوضيح الأفكار، وليست من تنفيذ Elite.')}</p><div class="grid">${ins.map(d=>tile(d,cur.id)).join('')}</div></div>`:''}`}
<div id="detw">${detailsHTML(S,cur,!!planFor(cur))}</div>
<div class="nav"><button class="btn ghost" id="bk">${t('رجوع')}</button><span style="display:flex;gap:10px;flex-wrap:wrap">${R.indexOf(cur)<R.length-1?`<button class="btn ghost" id="nr">${t('الغرفة اللي بعدها')}</button>`:''}<button class="btn" id="nx" ${total?'':'disabled'}>${t('اعرض الموود بورد')}</button></span></div></section></div>`;
 app.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{S.room=b.dataset.r;v3();window.scrollTo(0,0)});
 const toggle=c=>{const a=S.sel[cur.id]||[];S.sel[cur.id]=a.includes(c)?a.filter(x=>x!==c):[...a,c];if(!S.sel[cur.id].length)delete S.sel[cur.id]};
 const list=[...o,...ins];
 app.querySelectorAll('.tile').forEach(b=>b.onclick=e=>{const z=e.target.closest('[data-z]');if(z){lightbox(list,list.findIndex(d=>d.c===z.dataset.z),toggle,()=>cur&&(S.sel[cur.id]||[]));return}toggle(b.dataset.c);const y=window.scrollY;v3();window.scrollTo(0,y)});
 app.querySelectorAll('[data-z]').forEach(z=>z.onkeydown=e=>{if(e.key==='Enter'){e.stopPropagation();e.preventDefault();z.click()}});
 app.querySelectorAll('[data-pj]').forEach(b=>b.onchange=()=>{const p=b.dataset.pj;S.projs=!p?[]:S.projs.includes(p)?S.projs.filter(x=>x!==p):[...S.projs,p];S.dd=1;const y=window.scrollY;v3();window.scrollTo(0,y)});
 const ddb=app.querySelector('#ddb');if(ddb){ddb.onclick=e=>{e.stopPropagation();S.dd=S.dd?0:1;const m=app.querySelector('#ddm');m.classList.toggle('hide',!S.dd);ddb.setAttribute('aria-expanded',S.dd?'true':'false')};
  app.querySelector('#ddm').onclick=e=>e.stopPropagation();document.onclick=()=>{if(S.dd){S.dd=0;const m=app.querySelector('#ddm');if(m)m.classList.add('hide');const b2=app.querySelector('#ddb');if(b2)b2.setAttribute('aria-expanded','false')}};
  ddb.onkeydown=e=>{if(e.key==='Escape'&&S.dd)ddb.click()}}const vpj=app.querySelector('#vpj');if(vpj)vpj.onclick=()=>projectView(S.projs);
 const kb=app.querySelector('#kpb');if(kb)kb.onclick=()=>drawKp(planFor(cur),cur.label,S.kp[cur.id],r=>{if(r)S.kp[cur.id]=r;else delete S.kp[cur.id];v3()});
 bindDetails(app.querySelector('#detw'),S,cur,planFor(cur),()=>{const y=window.scrollY;v3();window.scrollTo(0,y)},false,null);
 app.querySelector('#bk').onclick=()=>go(2);const nr=app.querySelector('#nr');if(nr)nr.onclick=()=>{S.room=R[R.indexOf(cur)+1].id;v3();window.scrollTo(0,0)};app.querySelector('#nx').onclick=()=>go(4)}
function projectView(ids){const all=D.filter(d=>ids.includes(d.pr));
 mod.innerHTML=`<div class="modal" role="dialog"><div class="box"><div class="rh"><h2>${t('المشاريع المختارة')}</h2><button class="btn ghost sm" id="cl">${t('إغلاق')}</button></div>${ids.map(pid=>{const items=all.filter(d=>d.pr===pid);const groups=SPACES.filter(s=>items.some(d=>d.s===s.k));
  return `<div class="panel" style="margin-top:12px"><h2>${esc(prN(prOf(pid)))}</h2>${groups.map(s=>`<h3 style="margin-top:12px">${esc(spN(s))}</h3><div class="mini">${items.filter(d=>d.s===s.k).map(d=>`<figure><img src="${d.f}" alt="${d.c}" data-zz="${d.c}" style="cursor:zoom-in">${d.c}</figure>`).join('')}</div>`).join('')}</div>`}).join('')}</div></div>`;
 mod.querySelector('#cl').onclick=()=>mod.innerHTML='';mod.querySelectorAll('[data-zz]').forEach(i=>i.onclick=()=>lightbox(all,all.findIndex(d=>d.c===i.dataset.zz),null,null,()=>projectView(ids)))}
function lightbox(list,i,toggle,getSel,onClose){const show=()=>{const d=list[i];const on=getSel?(getSel()||[]).includes(d.c):false;
 mod.innerHTML=`<div class="modal lb" role="dialog" aria-label="${d.c}"><div class="lbx"><img src="${d.F||d.f}" alt="${d.c}"><div class="lbb"><span class="code">${d.c}</span><span class="note" style="margin:0;color:#C9BFB2">${d.k==='i'?t('صورة استلهام، ليست من تنفيذ Elite'):esc(stN(d.st))}</span>
 <span style="display:flex;gap:8px;margin-inline-start:auto"><button class="btn ghost sm lbn" id="pv">${t('السابقة')}</button>${toggle?`<button class="btn sm" id="tg">${on?t('إلغاء الاختيار'):t('اختار الصورة دي')}</button>`:''}<button class="btn ghost sm lbn" id="nx2">${t('التالية')}</button><button class="btn ghost sm lbn" id="cl">${t('إغلاق')}</button></span></div></div></div>`;
 const close=()=>{mod.innerHTML='';document.onkeydown=null;if(onClose)onClose();else{const y=window.scrollY;v3();window.scrollTo(0,y)}};
 mod.querySelector('#cl').onclick=close;mod.querySelector('.lb').onclick=e=>{if(e.target.classList.contains('lb'))close()};
 mod.querySelector('#pv').onclick=()=>{i=(i-1+list.length)%list.length;show()};mod.querySelector('#nx2').onclick=()=>{i=(i+1)%list.length;show()};
 const tg=mod.querySelector('#tg');if(tg)tg.onclick=()=>{toggle(d.c);show()};
 const fwd=LANG==='en'?'ArrowRight':'ArrowLeft';document.onkeydown=e=>{if(e.key==='Escape')close();if(e.key===fwd)mod.querySelector('#nx2').click();else if(e.key.startsWith('Arrow')&&(e.key==='ArrowLeft'||e.key==='ArrowRight'))mod.querySelector('#pv').click()}};show()}
function drawKp(img,label,init,done){mod.innerHTML=`<div class="modal" role="dialog"><div class="box"><h3>${t('حدد مكان: ')}${esc(label)}</h3><p class="note" style="margin:0 0 10px">${t('اسحب بالماوس أو بصباعك مستطيل على مكان الغرفة في البلان.')}</p>
<div class="draw" id="dw" dir="ltr"><img src="${img}" alt="${t('البلان')}"><span class="kpr" id="rc" style="display:none"></span></div>
<div class="nav"><button class="btn ghost" id="cl">${t('إلغاء')}</button><span style="display:flex;gap:8px"><button class="btn ghost" id="rm">${t('مسح التحديد')}</button><button class="btn" id="ok">${t('حفظ')}</button></span></div></div></div>`;
 const dw=mod.querySelector('#dw'),rc=mod.querySelector('#rc');let r=init?init.slice():null,st=null;
 const show=()=>{if(!r){rc.style.display='none';return}Object.assign(rc.style,{display:'block',left:r[0]*100+'%',top:r[1]*100+'%',width:r[2]*100+'%',height:r[3]*100+'%',right:'auto'})};show();
 const pt=e=>{const b=dw.getBoundingClientRect();return[Math.min(1,Math.max(0,(e.clientX-b.left)/b.width)),Math.min(1,Math.max(0,(e.clientY-b.top)/b.height))]};
 dw.onpointerdown=e=>{st=pt(e);dw.setPointerCapture(e.pointerId)};dw.onpointermove=e=>{if(!st)return;const p=pt(e);r=[Math.min(st[0],p[0]),Math.min(st[1],p[1]),Math.abs(p[0]-st[0]),Math.abs(p[1]-st[1])];show()};
 dw.onpointerup=()=>{st=null;if(r&&(r[2]<.01||r[3]<.01))r=null;show()};
 const close=()=>mod.innerHTML='';mod.querySelector('#cl').onclick=close;mod.querySelector('#rm').onclick=()=>{r=null;show()};mod.querySelector('#ok').onclick=()=>{close();done(r)}}
/* ================= room details: client images, notes, pins ================= */
const cimgsOf=(st,rid)=>((st.cimgs||{})[rid]||[]);
function getImg(c,st){return D.find(d=>d.c===c)||Object.values((st&&st.cimgs)||{}).flat().find(x=>x.c===c)}
const roomCodes=(st,rid)=>[...((st.sel||{})[rid]||[]),...cimgsOf(st,rid).map(x=>x.c)];
function nextCC(st,sp){const all=Object.values(st.cimgs||{}).flat().filter(x=>x.s===sp).map(x=>+x.c.split('-C')[1]||0);return `${sp}-C${(all.length?Math.max(...all):0)+1}`}
async function addClientImgs(st,files,rid,sp,upload){st.cimgs=st.cimgs||{};for(const f of files){if(!f||!(f.type||'').startsWith('image/'))continue;const th=await thumbOf(f)||f;const it={c:nextCC(st,sp),s:sp,k:'c',blob:f,thBlob:th,f:URL.createObjectURL(th),F:URL.createObjectURL(f)};
  if(upload&&cap.assets){try{it.id=(await cap.assets.upload(f)).id;it.tid=th!==f?(await cap.assets.upload(th)).id:it.id}catch(e){}}(st.cimgs[rid]=st.cimgs[rid]||[]).push(it)}}
function detailsHTML(st,r,hasPlan){const ci=cimgsOf(st,r.id),codes=roomCodes(st,r.id),pins=((st.pins||{})[r.id]||[]),kp=(st.kp||{})[r.id];
 return `<div class="panel det"><h3>${t('صور مرجعية من العميل')}</h3><p class="note" style="margin:0 0 10px">${t('لو عندك صورة لطلب معين، ارفعها أو انسخها من النت والزقها هنا بـ Ctrl+V. لينكات الصور مش بتشتغل، لازم الصورة نفسها.')}</p>
${ci.length?`<div class="mini" style="margin-bottom:10px">${ci.map(x=>`<figure><img src="${x.f}" alt="${x.c}"><span class="code" style="font-size:12px">${x.c}</span> <button class="btn ghost sm" style="min-height:28px;padding:0 8px" data-dci="${x.c}">${t('حذف')}</button></figure>`).join('')}</div>`:''}
<input type="file" class="hide" data-cif accept="image/*" multiple><button class="btn ghost sm" data-aci>+ ${t('إضافة صورة مرجعية')}</button>
<h3 style="margin-top:20px">${t('ملاحظات الغرفة')}</h3><textarea data-rn rows="3" placeholder="${t('مثلاً: الدولاب لحد السقف، والسقف زي الصورة من غير النجفة')}">${esc((st.notes||{})[r.id]||'')}</textarea>
${codes.length?`<h3 style="margin-top:20px">${t('ملاحظات على الصور المختارة')}</h3>${codes.map(c=>{const d=getImg(c,st);return d?`<div class="inr"><img src="${d.f}" alt="${c}"><span class="code">${c}</span><input type="text" data-in="${c}" value="${esc(((st.inotes||{})[r.id]||{})[c]||'')}" placeholder="${t('إيه اللي عاجبك في الصورة دي؟')}"></div>`:''}).join('')}`:''}
<h3 style="margin-top:20px">${t('ترقيم على البلان')}</h3><p class="note" style="margin:0 0 10px">${hasPlan&&kp?t('حط أرقام على بلان الغرفة، واربط كل رقم بصورة أو ملاحظة، عشان المهندس يعرف كل نقطة عايزة إيه.'):t('حدد مكان الغرفة على البلان الأول (الصورة الصغيرة اللي فوق)، وبعدها تقدر ترقّم عليه.')}</p>
<button class="btn ghost sm" data-pins ${hasPlan&&kp?'':'disabled'}>${t('ترقيم على البلان')}${pins.length?` (${pins.length})`:''}</button>
${pins.length?`<ol class="pl">${pins.map(p=>`<li>${p.c?`<span class="code">${esc(p.c)}</span> `:''}${esc(p.n||'')}</li>`).join('')}</ol>`:''}</div>`}
function bindDetails(root,st,r,planUrl,rerender,upload,onSave){const q=s=>root.querySelector(s);
 const fi=q('[data-cif]');q('[data-aci]').onclick=()=>fi.click();fi.onchange=async()=>{await addClientImgs(st,[...fi.files],r.id,r.sp,upload);onSave&&onSave();rerender()};
 root.querySelectorAll('[data-dci]').forEach(b=>b.onclick=()=>{st.cimgs[r.id]=cimgsOf(st,r.id).filter(x=>x.c!==b.dataset.dci);if(st.inotes&&st.inotes[r.id])delete st.inotes[r.id][b.dataset.dci];onSave&&onSave();rerender()});
 q('[data-rn]').oninput=e=>{st.notes=st.notes||{};st.notes[r.id]=e.target.value};q('[data-rn]').onchange=()=>onSave&&onSave();
 root.querySelectorAll('[data-in]').forEach(i=>{i.oninput=()=>{st.inotes=st.inotes||{};(st.inotes[r.id]=st.inotes[r.id]||{})[i.dataset.in]=i.value};i.onchange=()=>onSave&&onSave()});
 const pb=q('[data-pins]');if(pb)pb.onclick=()=>pinEditor(planUrl,st.kp[r.id],r.label,((st.pins||{})[r.id]||[]).map(p=>({...p})),roomCodes(st,r.id).map(c=>getImg(c,st)).filter(Boolean),pins=>{st.pins=st.pins||{};st.pins[r.id]=pins;onSave&&onSave();rerender()});
 document.onpaste=async e=>{if(!root.isConnected)return;const fs=[...(e.clipboardData&&e.clipboardData.files||[])].filter(f=>f.type.startsWith('image/'));if(!fs.length)return;e.preventDefault();await addClientImgs(st,fs,r.id,r.sp,upload);onSave&&onSave();rerender()}}
const cropOf=kp=>{const cx=Math.max(0,kp[0]-kp[2]*.15),cy=Math.max(0,kp[1]-kp[3]*.15);return[cx,cy,Math.min(1-cx,kp[2]*1.3),Math.min(1-cy,kp[3]*1.3)]};
async function pinEditor(planUrl,kp,label,pins,opts,done){let img;try{img=await loadImg(planUrl)}catch(e){return}const cr=cropOf(kp);
 const cw=Math.round(cr[2]*img.width),ch=Math.round(cr[3]*img.height),sc=Math.min(3,1400/Math.max(cw,ch));const cvs=document.createElement('canvas');cvs.width=Math.round(cw*sc);cvs.height=Math.round(ch*sc);
 const cx=cvs.getContext('2d');cx.fillStyle='#fff';cx.fillRect(0,0,cvs.width,cvs.height);cx.drawImage(img,cr[0]*img.width,cr[1]*img.height,cw,ch,0,0,cvs.width,cvs.height);const bg=cvs.toDataURL('image/jpeg',.9);let sel=pins.length-1;
 const toP=p=>[(p.x-cr[0])/cr[2]*100,(p.y-cr[1])/cr[3]*100];
 const show=()=>{mod.innerHTML=`<div class="modal" role="dialog"><div class="box pinbox"><div class="rh"><h3>${t('ترقيم على البلان')}: ${esc(label)}</h3><span class="note" style="margin:0">${t('دوس على البلان عشان تحط رقم جديد، واسحب الرقم عشان تحركه.')}</span></div>
<div class="pinlay"><div class="draw" id="pz" dir="ltr" style="cursor:crosshair"><img src="${bg}" alt="${t('البلان')}">${pins.map((p,i)=>{const[l,tp]=toP(p);return `<span class="pin ${i===sel?'on':''}" data-p="${i}" style="left:${l}%;top:${tp}%">${i+1}</span>`}).join('')}</div>
<div class="pinlist">${pins.length?pins.map((p,i)=>`<div class="pinrow ${i===sel?'on':''}" data-row="${i}"><span class="pin st">${i+1}</span><div style="flex:1"><select data-pc="${i}"><option value="">${t('بدون صورة')}</option>${opts.map(o=>`<option value="${o.c}" ${p.c===o.c?'selected':''}>${o.c}</option>`).join('')}</select>
<input type="text" data-pn="${i}" value="${esc(p.n||'')}" placeholder="${t('ملاحظة على النقطة دي')}"></div><button class="btn ghost sm" data-pd="${i}" aria-label="${t('حذف')}">×</button></div>`).join(''):`<p class="note">${t('مفيش أرقام لسه. دوس على البلان.')}</p>`}</div></div>
<div class="nav"><button class="btn ghost" id="cl">${t('إلغاء')}</button><button class="btn" id="ok">${t('حفظ')}</button></div></div></div>`;
  const pz=mod.querySelector('#pz');let drag=null,moved=false;const pt=e=>{const b=pz.getBoundingClientRect();return[cr[0]+Math.min(1,Math.max(0,(e.clientX-b.left)/b.width))*cr[2],cr[1]+Math.min(1,Math.max(0,(e.clientY-b.top)/b.height))*cr[3]]};
  pz.onpointerdown=e=>{const pe=e.target.closest('[data-p]');if(pe){drag=+pe.dataset.p;moved=false;sel=drag;pz.setPointerCapture(e.pointerId);e.preventDefault()}};
  pz.onpointermove=e=>{if(drag===null)return;const[x,y]=pt(e);pins[drag].x=x;pins[drag].y=y;moved=true;const el=pz.querySelector(`[data-p="${drag}"]`);const[l,tp]=toP(pins[drag]);el.style.left=l+'%';el.style.top=tp+'%'};
  pz.onpointerup=e=>{if(drag!==null){drag=null;show();return}const[x,y]=pt(e);pins.push({x,y,c:'',n:''});sel=pins.length-1;show()};
  mod.querySelectorAll('[data-pc]').forEach(s=>s.onchange=()=>{pins[+s.dataset.pc].c=s.value});mod.querySelectorAll('[data-pn]').forEach(s=>s.oninput=()=>{pins[+s.dataset.pn].n=s.value});
  mod.querySelectorAll('[data-pd]').forEach(b=>b.onclick=()=>{pins.splice(+b.dataset.pd,1);sel=Math.min(sel,pins.length-1);show()});
  mod.querySelectorAll('[data-row]').forEach(r=>r.onfocusin=()=>{sel=+r.dataset.row;mod.querySelectorAll('.pin').forEach(p=>p.classList.toggle('on',p.dataset.p==String(sel)))});
  mod.querySelector('#cl').onclick=()=>mod.innerHTML='';mod.querySelector('#ok').onclick=()=>{mod.innerHTML='';done(pins.map(p=>({x:+p.x.toFixed(4),y:+p.y.toFixed(4),c:p.c||'',n:(p.n||'').trim()})))};
  const fr=mod.querySelector(`[data-pn="${sel}"]`);if(fr&&!pins[sel].n)fr.focus()};show()}
/* ================= analysis ================= */
const hex2rgb=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));const lum=h=>{const[r,g,b]=hex2rgb(h);return .299*r+.587*g+.114*b};
function analyse(sel){const items=selCodes(sel).map(x=>({...x,d:D.find(d=>d.c===x.c)})).filter(x=>x.d);const n=items.length||1;
 const cnt=f=>{const m={};items.forEach(x=>[].concat(f(x.d)).forEach(v=>m[v]=(m[v]||0)+1));return Object.entries(m).sort((a,b)=>b[1]-a[1])};
 const styles=cnt(d=>d.st),tones=cnt(d=>d.t),mats=cnt(d=>(d.m||[]).filter(m=>m!=='إضاءة مخفية')),hidden=items.filter(x=>(x.d.m||[]).includes('إضاءة مخفية')).length;
 const cl=[];items.forEach(x=>(x.d.p||[]).forEach((h,i)=>{const w=5-i,c=hex2rgb(h);const e=cl.find(k=>Math.hypot(k.c[0]-c[0],k.c[1]-c[1],k.c[2]-c[2])<38);if(e){e.w+=w;e.c=e.c.map((v,j)=>(v*(e.w-w)+c[j]*w)/e.w)}else cl.push({c,w})}));
 const pal=cl.sort((a,b)=>b.w-a.w).slice(0,6).map(k=>'#'+k.c.map(v=>Math.round(v).toString(16).padStart(2,'0')).join('').toUpperCase());
 return{items,n,styles,tones,mats,hidden,pal,ours:items.filter(x=>x.d.k==='o').length}}
const SUG={'رخام':['أرضيات رخام كرارة أو بورسلين بتأثير رخام مقاس كبير 120×60 أو 120×120.','Carrara marble floors, or large-format marble-look porcelain (120×60 or 120×120).'],
'رخام بعروق':['رخام أبيض بعروق رمادي (كالكتا) للحوائط المميزة وترابيزات الطعام.','White marble with grey veining (Calacatta) for feature walls and dining tables.'],
'رخام فاتح':['رخام أو بورسلين بيج فاتح مط للأرضيات.','Light beige matte marble or porcelain floors.'],
'رخام أسود':['رخام أسود ماركينا أو نيرو للكونترات وحوائط الحمامات.','Nero Marquina black marble for counters and bathroom walls.'],
'بانوهات خشب':['بانوهات قشرة خشب جوز أو أرو، أو HPL بتأثير خشب للتوفير.','Walnut or ash veneer panels, or wood-look HPL to save cost.'],
'بانوهات خشب طبيعي':['قشرة خشب أوك طبيعي للحوائط والدواليب.','Natural oak veneer for walls and joinery.'],
'شرائح خشب':['شرائح خشب رأسية (Fluted panels) خلف السرير أو حائط التلفزيون.','Vertical fluted wood panels behind the bed or the TV wall.'],
'كرانيش وتجاليد':['كرانيش جبس أو فوم وبرواز تجاليد بدهان مط بنفس لون الحائط.','Plaster or foam cornices and wall mouldings painted matte in the wall colour.'],
'تجاليد حوائط':['تجاليد حوائط بسيطة مع إضاءة مخفية في المداخل والطرقات.','Simple wall cladding with hidden lighting in entrances and corridors.'],
'معدن ذهبي':['لمسات ستانلس ذهبي مط في الكونسولات والإكسسوارات ووحدات الإضاءة.','Brushed gold stainless accents in consoles, accessories and light fittings.'],
'مرايا':['مرايا برونز أو فضي في الكونسولات لتوسيع الفراغ.','Bronze or silver mirrors on consoles to open up the space.'],
'خشب فاتح':['باركيه أو بورسلين بتأثير خشب فاتح للغرف.','Light wood parquet or wood-look porcelain for bedrooms.'],
'دواليب كحلي':['دواليب مطبخ لاكيه مط كحلي مع رخام أسود.','Navy matte lacquer kitchen cabinets with black marble.'],
'دواليب مط':['دواليب مطبخ مط بدون مقابض (Gola) بلون محايد.','Handle-less (Gola) matte kitchen cabinets in a neutral colour.'],
'قماش/تنجيد':['أقمشة بوكليه وكتان بدرجات البيج والرمادي للكنب.','Bouclé and linen upholstery in beige and grey tones.'],
'خلفية سرير مُنجدة':['خلفية سرير منجدة قماش بعرض الحائط.','A full-width upholstered headboard wall.'],
'ورق حائط/رسومات':['ورق حائط برسومات هادية للأطفال مع ألوان باستيل.','Calm illustrated wallpaper for kids with pastel colours.'],
'فاترينات زجاج':['فاترينات زجاج فيميه مع إضاءة LED داخلية لغرفة الملابس.','Tinted glass wardrobe fronts with internal LED lighting.'],
'بورسلين/رخام':['بورسلين مط مقاس كبير للحمامات بأقل عدد فواصل.','Large matte porcelain slabs in bathrooms with minimal joints.'],
'زجاج شاور':['كابينة شاور زجاج سيكوريت بإطار أسود رفيع.','Tempered glass shower enclosure with a slim black frame.']};
const L=i=>LANG==='en'?1:0;
function suggestions(A){const s=[];A.mats.forEach(([m])=>{if(SUG[m]&&s.length<6)s.push(SUG[m][L()])});
 if(A.hidden/A.n>.5)s.push(['إضاءة مخفية LED بدرجة 3000K في الأسقف والفواصل، مع سبوتات مغناطيسية.','3000K hidden LED lighting in ceilings and recesses, with magnetic track spots.'][L()]);
 const tn=(A.tones[0]||[])[0];s.push((tn==='داكن'?['دهانات رمادي فحمي وبني موكا، مع خشب جوز.','Charcoal grey and mocha paints with walnut wood.']:tn==='فاتح'?['دهانات أوف وايت وبيج فاتح، مع خشب أوك فاتح.','Off-white and light beige paints with light oak.']:['دهانات بيج دافي وتوب (Taupe)، مع خشب متوسط الدرجة.','Warm beige and taupe paints with mid-tone wood.'])[L()]);return s}
const bars=(list,n,fn)=>list.slice(0,5).map(([k,v])=>`<div class="bar"><span>${esc(fn(k))}</span><span><i style="width:${Math.round(v/n*100)}%"></i></span><span>${Math.round(v/n*100)}%</span></div>`).join('');
/* ================= step 4 ================= */
function v4(){const A=analyse(S.sel),R=rooms(),date=new Date().toLocaleDateString(LANG==='en'?'en-GB':'ar-EG');
 const byRoom=R.filter(r=>roomCodes(S,r.id).length||(S.notes[r.id]||'').trim()).map(r=>{const pins=S.pins[r.id]||[],inn=S.inotes[r.id]||{};return `<div style="margin-bottom:18px"><div class="rh" style="margin-bottom:6px"><h3>${esc(r.label)}</h3>${planFor(r)&&S.kp[r.id]?kpThumb(planFor(r),S.kp[r.id],'tabindex="-1"'):''}</div>${(S.notes[r.id]||'').trim()?`<p class="msg" style="margin:0 0 8px">${esc(S.notes[r.id])}</p>`:''}<div class="coll">${roomCodes(S,r.id).map(c=>{const d=getImg(c,S);return d?`<figure><img src="${d.f}" alt="${c}"><figcaption>${c}${d.k==='i'?' · '+t('صور استلهام '):d.k==='c'?' · '+t('صورة من العميل'):''}${inn[c]?'<br>'+esc(inn[c]):''}</figcaption></figure>`:''}).join('')}</div>${pins.length?`<ol class="pl">${pins.map(p=>`<li>${p.c?`<span class="code">${esc(p.c)}</span> `:''}${esc(p.n||'')}</li>`).join('')}</ol>`:''}</div>`}).join('');
 app.innerHTML=`<div class="board"><div class="hd"><img src="img/logo_w.png" alt="Elite"><div><h1 style="color:#EFE9E0">${t('الموود بورد الخاص بـ ')}${esc(S.name)}</h1><p>${tyN(S.type)} · ${date} · ${A.n} ${t('صورة مختارة')} (${A.ours} ${t('من أعمالنا')})${S.code?` · ${t('كود العميل')} <span dir="ltr">${esc(S.code)}</span>`:''}</p></div></div>
<div class="panel" style="margin-top:18px"><h2>${t('باليتة الألوان')}</h2><p class="note" style="margin:0 0 12px">${t('الألوان الأكتر تكراراً في الصور اللي اخترتها.')}</p><div class="pal">${A.pal.map(h=>`<div style="background:${h};color:${lum(h)<140?'#fff':'#1C1A18'}" dir="ltr">${h}</div>`).join('')}</div></div>
<div class="row"><div class="panel"><h2>${t('الطراز')}</h2>${bars(A.styles,A.n,stN)}</div><div class="panel"><h2>${t('درجة الإضاءة والألوان')}</h2>${bars(A.tones,A.n,toN)}</div></div>
<div class="panel"><h2>${t('الخامات اللي بتتكرر في اختياراتك')}</h2><div class="tags">${A.mats.slice(0,10).map(([m,v])=>`<span>${esc(maN(m))} · ${v}</span>`).join('')}${A.hidden?`<span>${t('إضاءة مخفية')} · ${A.hidden}</span>`:''}</div></div>
<div class="panel"><h2>${t('اقتراحات الخامات والتشطيبات')}</h2><ul class="sug">${suggestions(A).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
<div class="panel ${cap.sample?'':'hide'}" id="aip"><h2>${t('ملخص المصمم')}</h2><div class="ai" id="ai">${S.ai?esc(S.ai):`<button class="btn ghost" id="aib">${t('اكتب ملخص لذوقي')}</button><p class="note">${t('ملخص مكتوب بالذكاء الاصطناعي من الصور اللي اخترتها.')}</p>`}</div></div>
<div class="panel"><h2>${t('اختياراتك حسب الغرفة')}</h2>${byRoom}</div></div>
<div class="panel"><div class="nav" style="margin:0"><button class="btn ghost" id="bk">${t('رجوع للاختيار')}</button><span style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn ghost" id="cp">${t('نسخ الأكواد')}</button><button class="btn ${cap.dl?'ghost':'hide'}" id="pdf">${t('تحميل PDF')}</button><button class="btn ${cap.db?'':'hide'}" id="snd">${t('إرسال الاختيارات لـ Elite')}</button></span></div>${S.msg?`<p class="msg">${S.msg}</p>`:''}${cap.db?'':`<p class="note">${t('لو الإرسال مش متاح عندك، انسخ الأكواد وابعتها لينا واتساب.')}</p>`}</div>`;
 app.querySelector('#bk').onclick=()=>go(3);app.querySelector('#pdf').onclick=e=>makePdf(cur(),e.target);app.querySelector('#cp').onclick=copyCodes;
 app.querySelector('#snd').onclick=()=>send(A);const ab=app.querySelector('#aib');if(ab)ab.onclick=()=>aiSummary(A)}
const cur=()=>({name:S.name,code:S.code,phone:S.phone,type:S.type,floors:S.floors,str:S.str,out:S.out,sel:S.sel,kp:S.kp,notes:S.notes,inotes:S.inotes,cimgs:S.cimgs,pins:S.pins,ai:S.ai,plans:Object.fromEntries(S.floors.map(f=>[f.id,f.planImg]))});
const codesText=st=>roomsFor(st).filter(r=>roomCodes(st,r.id).length).map(r=>r.label+': '+roomCodes(st,r.id).join(', ')+((st.notes||{})[r.id]?' — '+st.notes[r.id]:'')).join('\n');
async function copyCodes(){const tx0=`${t('اختيارات ')}${S.name}${S.code?' ('+S.code+')':''}\n`+codesText(S);try{await navigator.clipboard.writeText(tx0);S.msg=t('اتنسخت الأكواد.')}catch(e){S.msg=t('النسخ مش متاح هنا. الأكواد:')+'<br>'+esc(tx0).replace(/\n/g,'<br>')}v4()}
async function aiSummary(A){const box=app.querySelector('#ai');box.textContent=t('جاري الكتابة...');
 try{const blobs=[];for(const x of A.items.slice(0,6)){try{blobs.push(await (await fetch(x.d.f)).blob())}catch(e){}}
  const lim=await cap.sample.limits().catch(()=>({}));
  const stats=`styles ${A.styles.map(x=>(STEN[x[0]]||x[0])+' '+x[1]).join(', ')}; tones ${A.tones.map(x=>(TOEN[x[0]]||x[0])+' '+x[1]).join(', ')}; materials ${A.mats.slice(0,8).map(x=>MAEN[x[0]]||x[0]).join(', ')}; colours ${A.pal.join(' ')}`;
  const prompt=LANG==='en'?`You are an interior designer at Elite. A client named ${S.name} picked images for a ${STEN[S.type]||tyN(S.type)}. Stats of the picks: ${stats}. Write in polished English one paragraph of 4-5 sentences describing their taste (overall feel, colours, materials, lighting), then 3 short execution tips on lines starting with "•". No intro, no headings, no prices.`
   :`إنت مصمم ديكور داخلي في شركة Elite. عميل اسمه ${S.name} اختار صور لـ ${S.type}. إحصائيات اختياراته: ${stats}. اكتب بالعربي المصري المهذب فقرة من 4-5 جمل بتوصف ذوقه (الإحساس العام، الألوان، الخامات، الإضاءة)، وبعدها 3 نصايح قصيرة للتنفيذ في سطور تبدأ بـ "•". من غير مقدمات ولا عناوين ولا أسعار.`;
  const o={modelTier:'default',onText:({text})=>box.textContent=text};if(lim&&lim.images&&blobs.length)o.images=blobs;
  const r=await cap.sample(prompt,o);S.ai=r.text;box.textContent=r.text}catch(e){box.textContent=t('مقدرناش نكتب الملخص دلوقتي.');if(e&&e.code==='not_granted')app.querySelector('#aip').classList.add('hide')}}
async function send(A){const b=app.querySelector('#snd');b.disabled=true;b.textContent=t('جاري الإرسال...');
 try{const id=await cap.user.id();
  for(const f of S.floors)if(f.planBlob&&!f.planId&&cap.assets){try{f.planId=(await cap.assets.upload(f.planBlob)).id}catch(e){}}
  const floors=S.floors.map(f=>({id:f.id,name:f.name,en:f.en||'',n:f.n,ens:f.ens,plan:f.planId||'',planName:f.plan?f.plan.name:''}));
  const ci={};for(const [rid,list] of Object.entries(S.cimgs)){ci[rid]=[];for(const it of list){if(!it.id&&cap.assets){try{it.id=(await cap.assets.upload(it.blob)).id;it.tid=it.thBlob&&it.thBlob!==it.blob?(await cap.assets.upload(it.thBlob)).id:it.id}catch(e){}}ci[rid].push({c:it.c,s:it.s,k:'c',id:it.id||'',tid:it.tid||it.id||''})}}
  await cap.db.doc('submissions/'+id).set({name:S.name,phone:S.phone,code:S.code||'',type:S.type,lang:LANG,floors,str:S.str,out:S.out,styles:S.styles,sel:S.sel,kp:S.kp,notes:S.notes,inotes:S.inotes,pins:S.pins,cimgs:ci,pal:A.pal,styleMix:A.styles,tones:A.tones,mats:A.mats.slice(0,10),ai:S.ai||'',at:Date.now()});
  S.msg=t('تم إرسال اختياراتك لـ Elite. هنتواصل معاك قريب.')}catch(e){S.msg=t('الإرسال مش متاح من حسابك. انسخ الأكواد وابعتها لينا واتساب.')}v4()}
/* ================= PDF: canvas pages 1920×1080 at 2×, mirrored for English ================= */
const W=1920,H=1080,GOLD='#C9A23A',DK='#1C1A18',LT='#F4F0EA',INK='#2A2724',MU='#6B645C',PX=2;
const RTL=()=>LANG!=='en';const MX=(X,w=0)=>RTL()?X:W-X-w;const AL=a=>RTL()||a==='center'?a:(a==='right'?'left':'right');
const imgCache={};function loadImg(src){return imgCache[src]||(imgCache[src]=new Promise((ok,no)=>{const i=new Image();i.onload=()=>ok(i);i.onerror=no;i.src=src}))}
function cv(bg){const c=document.createElement('canvas');c.width=W*PX;c.height=H*PX;const x=c.getContext('2d');x.scale(PX,PX);x.imageSmoothingQuality='high';x.fillStyle=bg;x.fillRect(0,0,W,H);x.textBaseline='alphabetic';return[c,x]}
/* tx: X is given in RTL layout; it is mirrored for English */
function tx(x,s,X,Y,{size=32,w=400,col=INK,al='right',dir}={}){x.font=`${w} ${size}px Cairo, Tahoma, sans-serif`;x.fillStyle=col;x.textAlign=AL(al);x.direction=dir||(RTL()?'rtl':'ltr');x.fillText(s,al==='center'?X:MX(X),Y)}
function rect(x,col,X,Y,w,h){x.fillStyle=col;x.fillRect(MX(X,w),Y,w,h)}
function wrap(x,s,X,Y,maxW,lh,o={}){x.font=`${o.w||400} ${o.size||28}px Cairo, Tahoma, sans-serif`;const words=String(s).split(/\s+/);let line='',y=Y;
 for(const w of words){const tt=line?line+' '+w:w;if(x.measureText(tt).width>maxW&&line){tx(x,line,X,y,o);line=w;y+=lh}else line=tt}if(line){tx(x,line,X,y,o);y+=lh}return y}
function cover(x,img,X,Y,w,h){const r=Math.max(w/img.width,h/img.height),sw=w/r,sh=h/r;x.drawImage(img,(img.width-sw)/2,(img.height-sh)/2,sw,sh,MX(X,w),Y,w,h)}
function contain(x,img,X,Y,w,h){const r=Math.min(w/img.width,h/img.height),dw=img.width*r,dh=img.height*r,X0=MX(X,w);x.drawImage(img,X0+(w-dw)/2,Y+(h-dh)/2,dw,dh);return[X0+(w-dw)/2,Y+(h-dh)/2,dw,dh]}
function chip(x,s,Xr,Y,insp){x.font='700 30px Cairo, Tahoma, sans-serif';const w=x.measureText(s).width+36;rect(x,insp?'#FFFFFFE8':DK,Xr-w,Y,w,50);x.fillStyle=insp?'#7A5C14':GOLD;x.textAlign='left';x.direction='ltr';x.fillText(s,MX(Xr-w,w)+18,Y+36)}
async function foot(x,st,no){try{const l=await loadImg('img/logo.png');contain(x,l,128,H-82,110,56)}catch(e){}tx(x,(st.code?st.code+'  ·  ':'')+no,W-128,H-44,{size:24,col:MU,dir:'ltr'})}
function header(x,s,sub){tx(x,s,W-128,150,{size:58,w:700});if(sub)tx(x,sub,128,150,{size:28,col:MU,al:'left'});rect(x,GOLD,128,178,W-256,4)}
async function buildPages(st){await document.fonts.load('700 40px Cairo').catch(()=>{});await document.fonts.load('400 30px Cairo').catch(()=>{});
 const P=[],A=analyse(st.sel),R=roomsFor(st).filter(r=>roomCodes(st,r.id).length),date=new Date().toLocaleDateString(LANG==='en'?'en-GB':'ar-EG');let no=1;
 const plans={};for(const [k,v] of Object.entries(st.plans||{}))if(v)plans[k]=await loadImg(v).catch(()=>null);
 {const[c,x]=cv(DK);try{contain(x,await loadImg('img/logo_w.png'),W/2-300,150,600,380)}catch(e){}x.fillStyle=GOLD;x.fillRect(W/2-60,580,120,5);
  tx(x,t('الموود بورد الخاص بـ ')+st.name,W/2,710,{size:84,w:800,col:LT,al:'center'});tx(x,`${tyN(st.type)} · ${date}`,W/2,790,{size:38,col:GOLD,al:'center'});
  if(st.code)tx(x,t('كود العميل')+': '+st.code,W/2,860,{size:34,col:'#B8AFA3',al:'center'});P.push(c)}
 {const[c,x]=cv(LT);header(x,t('تحليل الذوق'),`${A.n} ${t('صورة مختارة')}`);no++;
  tx(x,t('باليتة الألوان'),W-128,260,{size:36,w:700});const sw=(W-256-5*16)/6;A.pal.forEach((h,i)=>{const X=W-128-(i+1)*sw-i*16;rect(x,h,X,290,sw,170);x.fillStyle=lum(h)<140?'#fff':'#1C1A18';x.font='400 24px Cairo, Tahoma';x.textAlign='left';x.direction='ltr';x.fillText(h,MX(X,sw)+16,440)});
  const col=(ti,list,X,Y,fn)=>{tx(x,ti,X,Y,{size:36,w:700});list.slice(0,4).forEach(([k,v],i)=>{const y=Y+60+i*58,p=Math.round(v/A.n*100);tx(x,fn(k),X,y,{size:28});rect(x,'#DDD5CA',X-560,y-22,300,16);rect(x,GOLD,X-260-300*p/100,y-22,300*p/100,16);tx(x,p+'%',X-580,y,{size:26,col:MU,dir:'ltr'})})};
  col(t('الطراز'),A.styles,W-128,540,stN);col(t('درجة الإضاءة'),A.tones,W-128-830,540,toN);
  tx(x,t('الخامات المتكررة'),W-128,850,{size:36,w:700});wrap(x,A.mats.slice(0,9).map(m=>maN(m[0])).join('  ·  ')+(A.hidden?'  ·  '+t('إضاءة مخفية'):''),W-128,905,W-256,46,{size:28,col:MU});
  await foot(x,st,no);P.push(c)}
 {const[c,x]=cv(LT);header(x,t('اقتراحات الخامات والتشطيبات'));no++;let y=270;for(const s of suggestions(A)){rect(x,GOLD,W-140,y-20,12,12);y=wrap(x,s,W-160,y,W-300,50,{size:32})+18}
  if(st.ai){y+=20;tx(x,t('ملخص المصمم'),W-128,y,{size:36,w:700});y+=60;wrap(x,st.ai.replace(/\n+/g,' '),W-128,y,W-256,48,{size:28,col:MU})}await foot(x,st,no);P.push(c)}
 let ri=0;for(const r of R){ri++;const codes=roomCodes(st,r.id),inn=(st.inotes||{})[r.id]||{};
  {const[c,x]=cv(DK);no++;const plan=plans[r.floor];tx(x,String(ri).padStart(2,'0'),W-128,300,{size:150,w:800,col:GOLD,dir:'ltr'});if(isMulti(st))tx(x,r.floor?`${r.fname} (${r.floor})`:r.fname,W-128,380,{size:38,w:600,col:GOLD});
   tx(x,r.name,W-128,470,{size:r.name.length>16?72:92,w:800,col:LT});rect(x,GOLD,W-248,520,120,5);
   tx(x,codes.length+' '+t('نماذج مختارة'),W-128,600,{size:36,col:'#E8E2D8'});wrap(x,codes.join('  ·  '),W-128,660,700,48,{size:30,col:'#B8AFA3',dir:'ltr'});
   const kp=st.kp&&st.kp[r.id];
   if(plan&&kp){rect(x,'#fff',80,80,1000,920);const[px,py,pw,ph]=contain(x,plan,110,110,940,860);x.fillStyle='#C9A23A66';x.fillRect(px+kp[0]*pw,py+kp[1]*ph,kp[2]*pw,kp[3]*ph);x.strokeStyle=GOLD;x.lineWidth=6;x.strokeRect(px+kp[0]*pw,py+kp[1]*ph,kp[2]*pw,kp[3]*ph);tx(x,t('موقع الفراغ على البلان'),RTL()?580:W-580,1050,{size:24,col:'#B8AFA3',al:'center'})}
   else{const d=getImg(codes[0],st);if(d)try{cover(x,await loadImg(d.F||d.f),0,0,1060,H)}catch(e){}}P.push(c)}
  for(const pg of await detailPages(st,r,plans[r.floor],()=>++no))P.push(pg);
  for(let i=0;i<codes.length;i+=2){const pair=codes.slice(i,i+2);const[c,x]=cv(LT);no++;header(x,r.label,codes.length>2?`${Math.floor(i/2)+1} / ${Math.ceil(codes.length/2)}`:'');
   const one=pair.length===1,w=one?1664:820,h=one?690:600,top=one?220:250;
   for(let j=0;j<pair.length;j++){const d=getImg(pair[j],st);if(!d)continue;const X=W-128-(j+1)*w-j*24;try{cover(x,await loadImg(d.F||d.f),X,top,w,h)}catch(e){}chip(x,d.c,X+w-20,top+20,d.k==='i');
    tx(x,d.k==='i'?t('صورة استلهام، ليست من تنفيذ Elite'):d.k==='c'?t('صورة من العميل'):t('من أعمال Elite')+(d.st?' · '+stN(d.st):''),X+w,top+h+44,{size:26,col:MU});if(inn[d.c]){x.save();x.beginPath();x.rect(MX(X,w),top+h+52,w,40);x.clip();tx(x,'«'+inn[d.c]+'»',X+w,top+h+84,{size:24,col:INK});x.restore()}}
   await foot(x,st,no);P.push(c)}}
 {const[c,x]=cv(LT);header(x,t('ملخص الاختيارات'));no++;const rows=R.map(r=>[r.label,roomCodes(st,r.id).join(', ')]);const half=Math.ceil(rows.length/2),cw=(W-256-40)/2;
  [rows.slice(0,half),rows.slice(half)].forEach((list,k)=>{const X=W-128-k*(cw+40);rect(x,DK,X-cw,215,cw,56);tx(x,t('الفراغ'),X-20,254,{size:26,w:700,col:GOLD});tx(x,t('الأكواد'),X-cw*.42,254,{size:26,w:700,col:GOLD});
   list.forEach(([a,b],i)=>{const y=271+i*58;rect(x,'#fff',X-cw,y,cw,56);rect(x,'#D8D0C4',X-cw,y+55,cw,1);tx(x,a,X-20,y+38,{size:24});x.save();x.beginPath();x.rect(MX(X-cw+10,cw*.58-10),y,cw*.58-10,56);x.clip();tx(x,b,X-cw*.42-24,y+38,{size:22,col:MU,dir:'ltr'});x.restore()})});
  await foot(x,st,no);P.push(c)}
 {const[c,x]=cv(DK);try{contain(x,await loadImg('img/logo_w.png'),W/2-230,250,460,290)}catch(e){}tx(x,t('شكراً لاختياركم Elite'),W/2,700,{size:80,w:800,col:LT,al:'center'});tx(x,'Elite Construction & Decoration',W/2,780,{size:34,col:GOLD,al:'center',dir:'ltr'});P.push(c)}
 return P}
async function detailPages(st,r,plan,nextNo){const pins=((st.pins||{})[r.id]||[]),note=((st.notes||{})[r.id]||'').trim(),kp=(st.kp||{})[r.id];if(!pins.length&&!note)return[];
 const out=[];const per=6;const chunks=[];if(!pins.length)chunks.push([]);for(let i=0;i<pins.length;i+=per)chunks.push(pins.slice(i,i+per).map((p,j)=>({...p,i:i+j})));
 for(let k=0;k<chunks.length;k++){const[c,x]=cv(LT);const no=nextNo();header(x,r.label+' · '+t('تفاصيل الغرفة'),chunks.length>1?`${k+1} / ${chunks.length}`:'');
  const hasPlan=plan&&kp&&pins.length;const colX=W-128,colW=hasPlan?760:W-256;let y=250;
  if(note&&k===0){tx(x,t('ملاحظات الغرفة'),colX,y,{size:32,w:700});y=wrap(x,note,colX,y+50,colW,44,{size:28,col:INK})+20}
  if(hasPlan){const cr=cropOf(kp),sx=cr[0]*plan.width,sy=cr[1]*plan.height,sw=cr[2]*plan.width,sh=cr[3]*plan.height;const bx=128,by=220,bw=840,bh=760;rect(x,'#fff',bx,by,bw,bh);
   const s2=Math.min((bw-40)/sw,(bh-40)/sh),dw=sw*s2,dh=sh*s2,X0=MX(bx,bw)+(bw-dw)/2,Y0=by+(bh-dh)/2;x.drawImage(plan,sx,sy,sw,sh,X0,Y0,dw,dh);
   pins.forEach((p,i)=>{const px=X0+(p.x-cr[0])/cr[2]*dw,py=Y0+(p.y-cr[1])/cr[3]*dh;x.beginPath();x.arc(px,py,24,0,7);x.fillStyle=GOLD;x.fill();x.lineWidth=4;x.strokeStyle='#fff';x.stroke();x.fillStyle=DK;x.font='800 26px Cairo, Tahoma';x.textAlign='center';x.direction='ltr';x.fillText(String(i+1),px,py+9)})}
  for(const p of chunks[k]){const d=p.c?getImg(p.c,st):null;const rowH=110;if(y+rowH>990)break;
   const cX=RTL()?colX-24:W-colX+24;x.beginPath();x.arc(cX,y+30,24,0,7);x.fillStyle=GOLD;x.fill();x.fillStyle=DK;x.font='800 26px Cairo, Tahoma';x.textAlign='center';x.direction='ltr';x.fillText(String(p.i+1),cX,y+39);
   let tX=colX-70;if(d){try{cover(x,await loadImg(d.f),colX-70-140,y,140,96)}catch(e){}tX=colX-230;tx(x,d.c,tX,y+30,{size:26,w:700,dir:'ltr'})}
   wrap(x,p.n||'',tX,y+(d?72:38),colW-(colX-tX)-10,36,{size:24,col:MU});y+=rowH+10}
  await foot(x,st,no);out.push(c)}
 return out}
async function pdfBytes(pages){const enc=new TextEncoder(),parts=[],off=[];let len=0;const push=b=>{const u=typeof b==='string'?enc.encode(b):b;parts.push(u);len+=u.length};
 const ims=[];for(const c of pages){const b=await new Promise(r=>c.toBlob(r,'image/jpeg',.92));ims.push(new Uint8Array(await b.arrayBuffer()))}
 const n=pages.length,obj=i=>{off[i]=len};push('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n');
 obj(1);push('1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n');
 obj(2);push(`2 0 obj<</Type/Pages/Count ${n}/Kids[${pages.map((_,i)=>(3+i*3)+' 0 R').join(' ')}]>>endobj\n`);
 pages.forEach((c,i)=>{const p=3+i*3,cs=`q 960 0 0 540 0 0 cm /I Do Q`;obj(p);push(`${p} 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 960 540]/Resources<</XObject<</I ${p+2} 0 R>>>>/Contents ${p+1} 0 R>>endobj\n`);
  obj(p+1);push(`${p+1} 0 obj<</Length ${cs.length}>>stream\n${cs}\nendstream endobj\n`);obj(p+2);push(`${p+2} 0 obj<</Type/XObject/Subtype/Image/Width ${W*PX}/Height ${H*PX}/ColorSpace/DeviceRGB/BitsPerComponent 8/Filter/DCTDecode/Length ${ims[i].length}>>stream\n`);push(ims[i]);push('\nendstream endobj\n')});
 const total=3+n*3,x0=len;let xr=`xref\n0 ${total}\n0000000000 65535 f \n`;for(let i=1;i<total;i++)xr+=String(off[i]).padStart(10,'0')+' 00000 n \n';push(xr+`trailer<</Size ${total}/Root 1 0 R>>\nstartxref\n${x0}\n%%EOF`);
 return new Blob(parts,{type:'application/pdf'})}
async function makePdf(st,btn){const old=btn.textContent;btn.disabled=true;btn.textContent=t('جاري تجهيز الملف...');let m;
 try{const blob=await pdfBytes(await buildPages(st));const fn=`Elite-MoodBoard-${(st.code||'').trim()?st.code.trim()+'-':''}${(st.name||'client').trim().replace(/[\\/:*?"<>|]/g,'')}.pdf`;
  await cap.dl.save({filename:fn,data:blob});m=t('تم تجهيز الملف: ')+fn}catch(e){m=t('تحميل الملف مش متاح أو اتلغى.')}
 btn.disabled=false;btn.textContent=old;const p=btn.closest('.panel')||app;let el=p.querySelector('.msg');if(!el){el=document.createElement('p');el.className='msg';p.appendChild(el)}el.textContent=m}
/* ================= owner: requests ================= */
const rowsOf=snap=>{const a=(snap&&snap.docs)||snap||[];return a.map(d=>typeof d.data==='function'?{id:d.id,...d.data()}:d)};
async function owner(){VIEW=owner;steps();app.innerHTML=`<h1>${t('طلبات العملاء')}</h1><p class="lead">${t('جاري التحميل...')}</p>`;
 try{const tm=setTimeout(()=>{const l=app.querySelector('.lead');if(l)l.textContent=t('التحميل أخد وقت طويل.')},10000);const rows=rowsOf(await cap.db.collection('submissions').get()).sort((a,b)=>b.at-a.at);clearTimeout(tm);
  app.innerHTML=`<h1>${t('طلبات العملاء')}</h1><p class="lead">${rows.length} ${t('عميل أرسل اختياراته.')} ${t('لينك لعميل جديد بكود: لينك الصفحة + #الكود، مثلاً …#EL-001.')}</p>
<div class="panel"><table class="stack"><tr><th>${t('العميل')}</th><th>${t('الكود')}</th><th>${t('الوحدة')}</th><th>${t('الاختيارات')}</th><th></th></tr>${rows.map((r,i)=>`<tr><td><b>${esc(r.name)}</b><br><span dir="ltr">${esc(r.phone)}</span><br><span class="note">${new Date(r.at).toLocaleString(LANG==='en'?'en-GB':'ar-EG')}</span></td><td>${r.code?`<span class="code">${esc(r.code)}</span>`:`<span class="note">${t('بدون كود')}</span>`}</td><td>${esc(tyN(r.type))}</td><td>${selCodes(r.sel||{}).length} ${t('صورة')}</td><td><button class="btn sm" data-i="${i}">${t('فتح')}</button></td></tr>`).join('')}</table></div><div class="nav"><button class="btn ghost" id="bk">${t('رجوع')}</button></div>`;
  app.querySelector('#bk').onclick=()=>render();app.querySelectorAll('[data-i]').forEach(b=>b.onclick=async()=>{const r=rows[+b.dataset.i];b.disabled=true;b.textContent=t('جاري التحميل...');const bu=window.__fb.blobURL;await Promise.all([...(r.floors||[]).map(async f=>{if(f.plan&&!f.planURL)f.planURL=await bu(f.plan)}),...Object.values(r.cimgs||{}).flat().map(async it=>{if(it.id&&!it.f){it.f=await bu(it.tid||it.id);it.F=await bu(it.id)}})]);subView(r)})}catch(e){app.innerHTML=`<p class="empty">${t('مقدرناش نقرا الطلبات.')}</p>`}}
function subView(r){VIEW=()=>subView(r);window.__fb&&window.__fb.setUpCtx(r.id);r.kp=r.kp||{};if(!r.floors)r.floors=[{id:'A',name:'',n:r.n||{},ens:r.ens||{},plan:r.plan||''}];
 const st={...r,plans:Object.fromEntries(r.floors.map(f=>[f.id,f.plan?(f.planURL||'/_blob/'+f.plan):'']))};const pl=x=>st.plans[x.floor]||'';r.cimgs=r.cimgs||{};for(const list of Object.values(r.cimgs))for(const it of list){if(!it.f&&it.id){it.f='/_blob/'+(it.tid||it.id);it.F='/_blob/'+it.id}}st.cimgs=r.cimgs;st.notes=r.notes=r.notes||{};st.inotes=r.inotes=r.inotes||{};st.pins=r.pins=r.pins||{};st.kp=r.kp;
 const R=roomsFor(st).filter(x=>roomCodes(st,x.id).length||(r.notes[x.id]||'').trim());
 app.innerHTML=`<h1>${esc(r.name)}</h1><p class="lead">${esc(tyN(r.type))} · <span dir="ltr">${esc(r.phone)}</span>${r.floors.length>1?' · '+r.floors.map(f=>esc(fN(f))+' ('+f.id+')').join('، '):''}</p>
<div class="panel"><label for="cd">${t('كود العميل')}</label><div style="display:flex;gap:10px"><input type="text" id="cd" dir="ltr" value="${esc(r.code)}" style="max-width:260px"><button class="btn sm" id="sv">${t('حفظ الكود')}</button></div></div>
<div class="panel"><h3>${t('الاختيارات ومكان كل فراغ على البلان')}</h3>${R.map(x=>`<div style="margin:14px 0"><div class="rh" style="margin-bottom:6px"><b>${esc(x.label)}</b>${pl(x)?kpThumb(pl(x),r.kp[x.id],`data-k="${x.id}" aria-label="${t('حدد المكان')}"`):''}</div><div class="mini">${roomCodes(st,x.id).map(c=>{const d=getImg(c,st);return d?`<figure><img src="${d.f}" alt="${c}">${c}</figure>`:c}).join('')}</div><details style="margin-top:8px"><summary>${t('ملاحظات وصور مرجعية وترقيم')}</summary><div data-dw="${x.id}">${detailsHTML(st,x,!!pl(x))}</div></details></div>`).join('')}${r.floors.some(f=>f.plan)?'':`<p class="note">${t('العميل ما رفعش بلان كصورة.')}</p>`}</div>
<div class="panel"><div class="nav" style="margin:0"><button class="btn ghost" id="bk">${t('رجوع للطلبات')}</button><button class="btn ${cap.dl?'':'hide'}" id="pdf">${t('تحميل PDF')}</button></div></div>`;
 const strip=()=>Object.fromEntries(Object.entries(r.cimgs).map(([k,l])=>[k,l.map(it=>({c:it.c,s:it.s,k:'c',id:it.id||'',tid:it.tid||it.id||''}))]));
 const save=async()=>{try{await cap.db.doc('submissions/'+r.id).update({code:r.code||'',kp:r.kp,notes:r.notes,inotes:r.inotes,pins:r.pins,cimgs:strip()})}catch(e){alertMsg(t('مقدرناش نحفظ.'))}};
 app.querySelectorAll('[data-dw]').forEach(w=>{const x=R.find(q=>q.id===w.dataset.dw);bindDetails(w,st,x,pl(x),()=>subView(r),true,save)});
 app.querySelector('#sv').onclick=async()=>{r.code=app.querySelector('#cd').value.replace(/[^A-Za-z0-9-]/g,'');await save();subView(r)};
 app.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{const x=R.find(q=>q.id===b.dataset.k);drawKp(pl(x),x.label,r.kp[x.id],async v=>{if(v)r.kp[x.id]=v;else delete r.kp[x.id];await save();subView(r)})});
 app.querySelector('#bk').onclick=owner;app.querySelector('#pdf').onclick=e=>makePdf({...st,code:r.code},e.target)}
function alertMsg(s){const p=document.createElement('p');p.className='msg';p.textContent=s;app.prepend(p)}
/* ================= owner: spaces, projects, images ================= */
const lev=(a,b)=>{const m=[...Array(b.length+1).keys()];for(let i=1;i<=a.length;i++){let p=m[0];m[0]=i;for(let j=1;j<=b.length;j++){const q=m[j];m[j]=Math.min(m[j]+1,m[j-1]+1,p+(a[i-1]===b[j-1]?0:1));p=q}}return m[b.length]};
async function imgStats(file){const bmp=await createImageBitmap(file);const c=document.createElement('canvas');const s=Math.min(1,160/Math.max(bmp.width,bmp.height));c.width=Math.round(bmp.width*s);c.height=Math.round(bmp.height*s);const x=c.getContext('2d');x.drawImage(bmp,0,0,c.width,c.height);
 const d=x.getImageData(0,0,c.width,c.height).data;let Lm=0;const bk={};for(let i=0;i<d.length;i+=4){const r=d[i],g=d[i+1],b=d[i+2];Lm+=.299*r+.587*g+.114*b;const k=(r>>4)+','+(g>>4)+','+(b>>4);const e=bk[k]||(bk[k]={n:0,r:0,g:0,b:0});e.n++;e.r+=r;e.g+=g;e.b+=b}
 Lm/=d.length/4;const cl=[];Object.values(bk).sort((a,b)=>b.n-a.n).forEach(e=>{const c=[e.r/e.n,e.g/e.n,e.b/e.n];const f=cl.find(k=>Math.hypot(k.c[0]-c[0],k.c[1]-c[1],k.c[2]-c[2])<40);if(f)f.n+=e.n;else cl.push({c,n:e.n})});
 const p=cl.sort((a,b)=>b.n-a.n).slice(0,5).map(k=>'#'+k.c.map(v=>Math.round(v).toString(16).padStart(2,'0')).join('').toUpperCase());return{p,t:Lm>=135?'فاتح':Lm<108?'داكن':'دافي'}}
async function thumbOf(file){try{const b=await createImageBitmap(file);const s=Math.min(1,800/Math.max(b.width,b.height));const c=document.createElement('canvas');c.width=Math.round(b.width*s);c.height=Math.round(b.height*s);c.getContext('2d').drawImage(b,0,0,c.width,c.height);return await new Promise(r=>c.toBlob(r,'image/jpeg',.82))}catch(e){return null}}
function nextCode(sp,k){const ex=D.filter(d=>d.s===sp&&d.k===k).map(d=>+(d.c.split(k==='o'?'-':'-I')[1]||0)).filter(n=>!isNaN(n));const n=(ex.length?Math.max(...ex):0)+1;return k==='o'?`${sp}-${String(n).padStart(2,'0')}`:`${sp}-I${n}`}
function admin(msg){VIEW=()=>admin();window.__fb&&window.__fb.setUpCtx('x');steps();
 app.innerHTML=`<h1>${t('إدارة الفراغات')}</h1><p class="lead">${t('ضيف فراغ جديد، أو ارفع صور لأي فراغ. اللي تضيفه بيظهر لكل العملاء على طول.')}</p>${msg?`<p class="msg">${esc(msg)}</p>`:''}
<div class="panel"><h3>${t('المشاريع')}</h3><p class="note" style="margin:0 0 10px">${t('الأسماء دي اللي العملاء بيشوفوها في فلتر المشاريع. خليها محايدة من غير أسماء العملاء.')}</p>
<table><tr><th>${t('الكود')}</th><th>${t('الاسم بالعربي')}</th><th>${t('الاسم بالإنجليزي')}</th><th>${t('مخفي')}</th></tr>${PROJ.map(p=>`<tr><td><span class="code">${p.id}</span></td><td><input type="text" data-pa="${p.id}" value="${esc(p.ar)}"></td><td><input type="text" data-pe="${p.id}" dir="ltr" value="${esc(p.en)}"></td><td><input type="checkbox" data-ph="${p.id}" ${p.hidden?'checked':''} style="width:22px;height:22px"></td></tr>`).join('')}</table>
<div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap"><button class="btn sm" id="svp">${t('حفظ المشاريع')}</button><button class="btn ghost sm" id="adp">+ ${t('مشروع جديد')}</button></div></div>
<div class="panel"><div class="rh" style="margin:0"><div><h3>${t('رفع مشروع جديد')}</h3><p class="note" style="margin:0">${t('ارفع PDF المشروع، والصفحة تطلّع الصور وتقص الإطار، والذكاء الاصطناعي يقترح الفراغ والطراز والخامات لكل صورة. بعدها تراجع وتنشر.')}</p></div><button class="btn" id="npb">${t('رفع مشروع جديد')}</button></div></div>
<div class="panel"><h3>${t('فراغ جديد')}</h3><div class="row"><div><label for="sn">${t('اسم الفراغ بالعربي')}</label><input type="text" id="sn" placeholder="غرفة مكتب"></div><div><label for="se">${t('اسم الفراغ بالإنجليزي')}</label><input type="text" id="se" dir="ltr" placeholder="Home office"></div><div><label for="sk">${t('كود الفراغ (حروف إنجليزي)')}</label><input type="text" id="sk" dir="ltr" maxlength="5" placeholder="OFC"></div>
<div><label for="ss">${t('يظهر في')}</label><select id="ss"><option value="both">${t('الشقة والفيلا')}</option><option value="multi">${t('الفيلا والدوبلكس بس')}</option><option value="apt">${t('الشقة بس')}</option></select></div><div><label for="sm">${t('النوع')}</label><select id="sm"><option value="0">${t('فراغ واحد')}</option><option value="1">${t('غرفة ممكن تتكرر')}</option><option value="2">${t('غرفة نوم (تتكرر وممكن ليها حمام خاص)')}</option></select></div></div>
<p class="note" id="skm"></p><button class="btn" id="add" style="margin-top:10px">${t('إضافة الفراغ')}</button></div>
<div class="panel"><h3>${t('رفع صور')}</h3><div class="row"><div><label for="is">${t('الفراغ')}</label><select id="is">${SPACES.map(s=>`<option value="${s.k}">${esc(spN(s))} (${s.k})</option>`).join('')}</select></div>
<div><label for="ik">${t('نوع الصور')}</label><select id="ik"><option value="o">${t('من أعمالنا')}</option><option value="i">${t('صور استلهام ')}</option></select></div><div><label for="ip">${t('المشروع')}</label><select id="ip"><option value="">${t('بدون مشروع')}</option>${PROJ.map(p=>`<option value="${p.id}">${esc(prN(p))}</option>`).join('')}</select></div><div><label for="ist">${t('الطراز')}</label><select id="ist">${[...STYLES,'أطفال مبهج'].map(s=>`<option value="${s}">${stN(s)}</option>`).join('')}</select></div></div>
<label style="margin-top:14px">${t('الخامات الظاهرة في الصور')}</label><div class="seg" id="im">${MATS.map(m=>`<button class="chip sm" data-m="${m}">${maN(m)}</button>`).join('')}</div>
<p class="note">${t('الألوان والدرجة اللونية بيتحسبوا لوحدهم من كل صورة، والكود بيتولّد تلقائي.')}</p><input type="file" id="if" accept="image/*" multiple class="hide"><button class="btn" id="up" style="margin-top:10px" ${cap.assets?'':'disabled'}>${t('اختار الصور وارفعها')}</button><div id="upm"></div></div>
${EXTRA.length?`<div class="panel"><h3>${t('الصور اللي اتضافت')} (${EXTRA.length})</h3><div class="mini">${EXTRA.map(e=>`<figure><img src="${e.f}" alt="${e.c}">${e.c}<br><button class="btn ghost sm" data-del="${e.c}">${t('حذف')}</button></figure>`).join('')}</div></div>`:''}
<div class="nav"><button class="btn ghost" id="bk">${t('رجوع')}</button></div>`;
 app.querySelector('#npb').onclick=()=>newProject();
 app.querySelector('#svp').onclick=async()=>{try{for(const p of PROJ){p.ar=app.querySelector(`[data-pa="${p.id}"]`).value.trim()||p.ar;p.en=app.querySelector(`[data-pe="${p.id}"]`).value.trim()||p.en;p.hidden=app.querySelector(`[data-ph="${p.id}"]`).checked?1:0;await cap.db.doc('projects/'+p.id).set({id:p.id,ar:p.ar,en:p.en,hidden:p.hidden})}admin(t('اتحفظت المشاريع.'))}catch(e){admin(t('مقدرناش نحفظ.'))}};
 app.querySelector('#adp').onclick=()=>{const n=Math.max(0,...PROJ.map(p=>+p.id.slice(1)||0))+1;const id='P'+String(n).padStart(2,'0');PROJ.push({id,ar:'مشروع '+String(n).padStart(2,'0'),en:'Project '+String(n).padStart(2,'0'),hidden:0});admin()};
 const sk=app.querySelector('#sk'),skm=app.querySelector('#skm');const chk=()=>{const k=sk.value.toUpperCase().replace(/[^A-Z]/g,'');sk.value=k;let m='';
  if(k.length&&k.length<3)m=t('الكود لازم يكون 3 حروف أو أكتر.');else if(SPACES.some(s=>s.k===k))m=t('الكود ده مستخدم قبل كده.');else{const sim=SPACES.find(s=>lev(s.k,k)<=1);if(sim)m=LANG==='en'?`Too close to ${sim.k} (${spN(sim)}). Add a letter, e.g. ${k}X.`:`الكود قريب من ${sim.k} (${sim.name}) وممكن يتلخبط. زوّد حرف، مثلاً ${k}X.`}skm.textContent=m;return k&&!m};sk.oninput=chk;
 app.querySelector('#add').onclick=async()=>{const name=app.querySelector('#sn').value.trim(),en=app.querySelector('#se').value.trim();if(!name||!chk())return;const mt=+app.querySelector('#sm').value;
  const doc={k:sk.value,name,en:en||name,sc:app.querySelector('#ss').value,multi:mt>0?1:0,bed:mt===2?1:0,at:Date.now()};
  try{await cap.db.doc('spaces/'+doc.k).set(doc);CUSTOM.push(doc);SPACES.push({...doc,def:0});admin(LANG==='en'?`Space ${doc.en} added. Upload its images below.`:`اتضاف الفراغ ${name}. ارفع له صور من تحت.`)}catch(e){admin(t('مقدرناش نضيف الفراغ.'))}};
 const ms=new Set();app.querySelectorAll('#im [data-m]').forEach(b=>b.onclick=()=>{const m=b.dataset.m;ms.has(m)?ms.delete(m):ms.add(m);b.classList.toggle('on')});
 const fi=app.querySelector('#if');app.querySelector('#up').onclick=()=>fi.click();
 fi.onchange=async()=>{const sp=app.querySelector('#is').value,k=app.querySelector('#ik').value,st=app.querySelector('#ist').value,pr=k==='o'?app.querySelector('#ip').value:'',um=app.querySelector('#upm');let ok=0;
  for(const f of fi.files){um.innerHTML=`<p class="note">${ok+1} / ${fi.files.length}...</p>`;try{const s=await imgStats(f);const a=await cap.assets.upload(f);const th=await thumbOf(f);const at=th?await cap.assets.upload(th):a;const c=nextCode(sp,k);
   const doc={c,s:sp,k,pr,st:k==='o'?st:'مودرن',t:s.t,m:[...ms],p:s.p,f:'/_blob/'+at.id,F:'/_blob/'+a.id,a:a.id,at2:at.id,at:Date.now()};await cap.db.doc('extra/'+c).set(doc);doc.f=URL.createObjectURL(th||f);doc.F=URL.createObjectURL(f);D.push(doc);EXTRA.push(doc);ok++}catch(e){}}
  admin(LANG==='en'?`${ok} images uploaded to ${spN(spOf(sp))}.`:`اترفعت ${ok} صورة على ${spOf(sp).name}.`)};
 app.querySelectorAll('[data-del]').forEach(b=>b.onclick=async()=>{const e=EXTRA.find(x=>x.c===b.dataset.del);if(!e)return;try{await cap.db.doc('extra/'+e.c).delete();if(e.a&&cap.assets)await cap.assets.delete(e.a).catch(()=>{});if(e.at2&&e.at2!==e.a&&cap.assets)await cap.assets.delete(e.at2).catch(()=>{});EXTRA=EXTRA.filter(x=>x!==e);D=D.filter(x=>x!==e);admin(e.c)}catch(err){admin(t('مقدرناش نحذف.'))}});
 app.querySelector('#bk').onclick=()=>render()}
/* ================= owner: new project from PDF ================= */
let NP=null;
function autoCrop(c){const s=Math.min(1,400/c.width),w=Math.max(1,Math.round(c.width*s)),h=Math.max(1,Math.round(c.height*s));const t0=document.createElement('canvas');t0.width=w;t0.height=h;const x=t0.getContext('2d');x.drawImage(c,0,0,w,h);const d=x.getImageData(0,0,w,h).data;
 const px=(i,j)=>{const k=(j*w+i)*4;return[d[k],d[k+1],d[k+2]]};const cs=[px(1,1),px(w-2,1),px(1,h-2),px(w-2,h-2)];const bg=[0,1,2].map(k=>cs.map(q=>q[k]).sort((a,b)=>a-b)[1]);
 const diff=(i,j)=>{const p=px(i,j);return Math.abs(p[0]-bg[0])+Math.abs(p[1]-bg[1])+Math.abs(p[2]-bg[2])>60};
 const rowOn=j=>{let n=0;for(let i=0;i<w;i++)if(diff(i,j))n++;return n>w*.05},colOn=i=>{let n=0;for(let j=0;j<h;j++)if(diff(i,j))n++;return n>h*.05};
 let t=0,b=h-1,l=0,r=w-1;while(t<b&&!rowOn(t))t++;while(b>t&&!rowOn(b))b--;while(l<r&&!colOn(l))l++;while(r>l&&!colOn(r))r--;
 const area=((b-t+1)*(r-l+1))/(w*h);const X=Math.floor(l/s)+2,Y=Math.floor(t/s)+2,W2=Math.max(10,Math.floor((r-l+1)/s)-4),H2=Math.max(10,Math.floor((b-t+1)/s)-4);
 const o=document.createElement('canvas');const sc=Math.min(1,2500/Math.max(W2,H2));o.width=Math.round(W2*sc);o.height=Math.round(H2*sc);o.getContext('2d').drawImage(c,X,Y,W2,H2,0,0,o.width,o.height);
 const od=o.getContext('2d').getImageData(0,0,o.width,o.height).data;let Lm=0,sat=0,n=0;for(let k=0;k<od.length;k+=40){const R=od[k],G=od[k+1],B=od[k+2];Lm+=.299*R+.587*G+.114*B;sat+=Math.max(R,G,B)-Math.min(R,G,B);n++}Lm/=n;sat/=n;
 const guess=area<.12?'other':(Lm>200&&sat<18?'plan':'render');return{canvas:o,guess}}
const blobOf=(c,q=.9)=>new Promise(r=>c.toBlob(r,'image/jpeg',q));
function thumbCanvas(c,max=800){const s=Math.min(1,max/Math.max(c.width,c.height));const o=document.createElement('canvas');o.width=Math.round(c.width*s);o.height=Math.round(c.height*s);o.getContext('2d').drawImage(c,0,0,o.width,o.height);return o}
function newProject(){VIEW=()=>newProject();window.__fb&&window.__fb.setUpCtx('x');steps();if(!NP){const n=Math.max(0,...PROJ.map(p=>+p.id.slice(1)||0))+1,nn=String(n).padStart(2,'0');NP={id:'P'+nn,ar:'مشروع '+nn,en:'Project '+nn,type:'شقة',pages:[],busy:'',done:''}}
 const R=NP.pages;const inc=R.filter(p=>p.inc).length;
 app.innerHTML=`<h1>${t('رفع مشروع جديد')}</h1><p class="lead">${t('ارفع PDF المشروع، والصفحة تطلّع الصور وتقص الإطار، والذكاء الاصطناعي يقترح الفراغ والطراز والخامات لكل صورة. بعدها تراجع وتنشر.')}</p>
<div class="panel"><div class="row"><div><label>${t('الكود')}</label><span class="code">${NP.id}</span></div><div><label for="npa">${t('الاسم بالعربي')}</label><input type="text" id="npa" value="${esc(NP.ar)}"></div><div><label for="npe">${t('الاسم بالإنجليزي')}</label><input type="text" id="npe" dir="ltr" value="${esc(NP.en)}"></div>
<div><label for="npt">${t('نوع الوحدة')}</label><select id="npt">${TYPES.map(x=>`<option value="${x}" ${NP.type===x?'selected':''}>${tyN(x)}</option>`).join('')}</select></div></div>
<p class="note">${t('الأسماء دي اللي العملاء بيشوفوها في فلتر المشاريع. خليها محايدة من غير أسماء العملاء.')}</p>
<input type="file" id="npf" accept="application/pdf,image/*" multiple class="hide"><button class="btn" id="npu" style="margin-top:10px" ${NP.busy?'disabled':''}>${t('اختار ملف الـ PDF أو الصور')}</button>
${NP.busy?`<p class="msg">${esc(NP.busy)}</p>`:''}${NP.done?`<p class="msg">${esc(NP.done)}</p>`:''}</div>
${R.length?`<div class="panel"><div class="rh"><h3>${t('مراجعة الصور')} (${inc} / ${R.length})</h3><span style="display:flex;gap:8px;flex-wrap:wrap">${cap.sample?`<button class="btn ghost sm" id="npai" ${NP.busy?'disabled':''}>${t('اقتراح بالذكاء الاصطناعي')}</button>`:''}<button class="btn sm" id="nppub" ${NP.busy||!inc||!cap.assets?'disabled':''}>${t('نشر الصور المختارة')}</button></span></div>
<p class="note" style="margin:0 0 10px">${t('صفحات البلان والغلاف والـ Thank You متشالة من الاختيار تلقائي. راجع الفراغ والطراز والخامات لكل صورة قبل النشر.')}</p>
<table class="stack"><tr><th></th><th>${t('الصورة')}</th><th>${t('الفراغ')}</th><th>${t('الطراز')}</th><th>${t('نوع الصور')}</th><th>${t('الخامات')}</th></tr>
${R.map((p,i)=>`<tr style="${p.inc?'':'opacity:.5'}"><td><input type="checkbox" data-inc="${i}" ${p.inc?'checked':''} style="width:22px;height:22px" aria-label="include"></td><td style="width:180px"><img src="${p.thumb}" alt="" data-big="${i}" style="width:170px;border-radius:6px;cursor:zoom-in"><div class="note" style="margin:2px 0 0">${t('صفحة')} ${p.page}${p.guess!=='render'?' · '+t(p.guess==='plan'?'بلان':'غلاف / فاضية'):''}${p.ai?' · AI':''}</div></td>
<td><select data-sp="${i}">${SPACES.map(s=>`<option value="${s.k}" ${p.sp===s.k?'selected':''}>${esc(spN(s))}</option>`).join('')}</select></td>
<td><select data-st="${i}">${[...STYLES,'أطفال مبهج','لاندسكيب مودرن'].map(s=>`<option value="${s}" ${p.st===s?'selected':''}>${stN(s)}</option>`).join('')}</select></td>
<td><select data-k="${i}"><option value="o" ${p.k==='o'?'selected':''}>${t('من أعمالنا')}</option><option value="i" ${p.k==='i'?'selected':''}>${t('صور استلهام ')}</option></select></td>
<td><div class="tags">${p.m.map(m=>`<span>${esc(maN(m))} <button class="btn ghost sm" style="min-height:24px;padding:0 6px" data-rmm="${i}" data-mm="${m}" aria-label="remove">×</button></span>`).join('')}</div><select data-addm="${i}" style="margin-top:6px;height:36px"><option value="">+ ${t('خامة')}</option>${MATS.filter(m=>!p.m.includes(m)).map(m=>`<option value="${m}">${maN(m)}</option>`).join('')}</select></td></tr>`).join('')}</table></div>`:''}
<div class="nav"><button class="btn ghost" id="bk">${t('رجوع')}</button>${R.length?`<button class="btn ghost" id="npc">${t('إلغاء المشروع ده')}</button>`:''}</div>`;
 const sync=()=>{NP.ar=app.querySelector('#npa').value;NP.en=app.querySelector('#npe').value;NP.type=app.querySelector('#npt').value};['#npa','#npe','#npt'].forEach(q=>app.querySelector(q).onchange=sync);
 const f=app.querySelector('#npf');app.querySelector('#npu').onclick=()=>{sync();f.click()};f.onchange=()=>{if(f.files.length)ingest([...f.files])};
 app.querySelectorAll('[data-inc]').forEach(b=>b.onchange=()=>{R[+b.dataset.inc].inc=b.checked;newProject()});
 app.querySelectorAll('[data-sp]').forEach(b=>b.onchange=()=>{const p=R[+b.dataset.sp];p.sp=b.value;if(b.value==='KID')p.st='أطفال مبهج';if(b.value==='GRD')p.st='لاندسكيب مودرن';newProject()});
 app.querySelectorAll('[data-st]').forEach(b=>b.onchange=()=>R[+b.dataset.st].st=b.value);app.querySelectorAll('[data-k]').forEach(b=>b.onchange=()=>R[+b.dataset.k].k=b.value);
 app.querySelectorAll('[data-rmm]').forEach(b=>b.onclick=()=>{const p=R[+b.dataset.rmm];p.m=p.m.filter(x=>x!==b.dataset.mm);newProject()});
 app.querySelectorAll('[data-addm]').forEach(b=>b.onchange=()=>{if(b.value){R[+b.dataset.addm].m.push(b.value);newProject()}});
 app.querySelectorAll('[data-big]').forEach(im=>im.onclick=()=>{const list=R.map(p=>({c:t('صفحة')+' '+p.page,f:p.thumb,F:p.fullUrl,k:'o',st:p.st}));lightbox(list,+im.dataset.big,null,null,()=>newProject())});
 const ai=app.querySelector('#npai');if(ai)ai.onclick=aiClassify;const pb=app.querySelector('#nppub');if(pb)pb.onclick=publishProject;
 const npc=app.querySelector('#npc');if(npc)npc.onclick=()=>{NP.pages.forEach(p=>{URL.revokeObjectURL(p.thumb);URL.revokeObjectURL(p.fullUrl)});NP=null;newProject()};
 app.querySelector('#bk').onclick=()=>admin()}
async function ingest(files){NP.busy=t('جاري تجهيز الصفحات...');NP.done='';newProject();
 try{for(const file of files){const list=[];if(file.type==='application/pdf'){const pdf=await openPdf(file);for(let n=1;n<=pdf.numPages;n++){NP.busy=`${t('جاري تجهيز الصفحات...')} ${n} / ${pdf.numPages}`;newProject();list.push([n,await renderPage(pdf,n,3200)])}}
   else{const bmp=await createImageBitmap(file);const c=document.createElement('canvas');c.width=bmp.width;c.height=bmp.height;c.getContext('2d').drawImage(bmp,0,0);list.push([NP.pages.length+1,c])}
   for(const [n,c] of list){const {canvas,guess}=file.type==='application/pdf'?autoCrop(c):{canvas:c,guess:'render'};const full=await blobOf(canvas,.9),th=thumbCanvas(canvas);const thumb=URL.createObjectURL(await blobOf(th,.82));
    const st=await imgStats(full);NP.pages.push({page:n,full,fullUrl:URL.createObjectURL(full),thumb,thumbBlob:await blobOf(th,.82),guess,inc:guess==='render',sp:'LIV',st:'مودرن',k:'o',m:[],t:st.t,p:st.p})}}
  NP.busy='';NP.done=LANG==='en'?`${NP.pages.length} pages ready. ${cap.sample?'Press "Suggest with AI" to classify them.':'Set the space for each image.'}`:`اتجهزت ${NP.pages.length} صفحة. ${cap.sample?'دوس "اقتراح بالذكاء الاصطناعي" عشان يصنّفها.':'حدد الفراغ لكل صورة.'}`}
 catch(e){NP.busy='';NP.done=t('مقدرناش نفتح الملف. جرّب ملف تاني أو ارفع الصور نفسها.')}newProject()}
async function aiClassify(){const todo=NP.pages.filter(p=>p.guess==='render'||p.inc);let i=0;const spList=SPACES.map(s=>`${s.k}=${s.en||s.name}`).join(', ');const mEn=MATS.map(m=>MAEN[m]||m);
 for(const p of todo){i++;NP.busy=`${t('الذكاء الاصطناعي بيصنّف الصور...')} ${i} / ${todo.length}`;newProject();
  try{const r=await cap.sample.json(`You classify images from an interior design firm's project presentation. Return JSON only: {"kind":"render"|"plan"|"other","space":one code from [${spList}],"style":"Modern"|"Modern Classic"|"Dark Modern"|"Playful Kids"|"Modern Landscape","materials":[up to 6 items chosen only from: ${mEn.join(', ')}]}. "plan" = a 2D floor plan or drawing; "other" = cover, title, text or blank page. Twin beds with neutral colours = BOY unless clearly girly (GRL); themed children rooms = KID; bedroom with en-suite feel or largest bedroom = MST.`,{images:[p.thumbBlob],modelTier:'default'});
   if(r){p.ai=1;if(r.kind&&r.kind!=='render'){p.guess=r.kind;p.inc=false}else{p.guess='render';p.inc=true}if(r.space&&spOf(r.space))p.sp=r.space;const sk=Object.keys(STEN).find(k=>STEN[k]===r.style);if(sk)p.st=sk;
    if(Array.isArray(r.materials))p.m=r.materials.map(e=>MATS.find(m=>(MAEN[m]||m)===e)).filter(Boolean)}}
  catch(e){if(e&&(e.code==='rate_limited'||e.code==='not_granted')){NP.busy='';NP.done=t('الذكاء الاصطناعي وقف مؤقتاً. كمّل التصنيف يدوي أو جرّب تاني بعد شوية.');newProject();return}}}
 NP.busy='';NP.done=t('خلص التصنيف. راجع الاقتراحات قبل النشر.');newProject()}
async function publishProject(){const sel=NP.pages.filter(p=>p.inc);let ok=0;
 try{const pr={id:NP.id,ar:NP.ar.trim()||NP.id,en:NP.en.trim()||NP.id,hidden:0,type:NP.type};await cap.db.doc('projects/'+pr.id).set(pr);const e=PROJ.find(x=>x.id===pr.id);if(e)Object.assign(e,pr);else PROJ.push(pr)}catch(e){NP.done=t('مقدرناش نحفظ.');newProject();return}
 for(const p of sel){NP.busy=`${t('جاري النشر...')} ${ok+1} / ${sel.length}`;newProject();
  try{const a=await cap.assets.upload(p.full);const at=await cap.assets.upload(p.thumbBlob);const c=nextCode(p.sp,p.k);
   const doc={c,s:p.sp,k:p.k,pr:p.k==='o'?NP.id:'',st:p.k==='o'?p.st:'مودرن',t:p.t,m:p.m,p:p.p,f:'/_blob/'+at.id,F:'/_blob/'+a.id,a:a.id,at2:at.id,at:Date.now()};
   await cap.db.doc('extra/'+c).set(doc);doc.f=URL.createObjectURL(p.thumbBlob);doc.F=URL.createObjectURL(p.full);D.push(doc);EXTRA.push(doc);p.inc=false;p.pub=c;ok++}catch(e){}}
 NP.busy='';const left=NP.pages.filter(p=>p.inc).length;NP.done=LANG==='en'?`${ok} images published to ${NP.en}.${left?` ${left} failed, try again.`:''}`:`اتنشرت ${ok} صورة على ${NP.ar}.${left?` ${left} ما اتنشرتش، جرّب تاني.`:''}`;newProject()}
/* ================= boot ================= */
async function loadExtra(){if(!cap.db)return;try{rowsOf(await cap.db.collection('spaces').get()).forEach(s=>{if(!SPACES.some(x=>x.k===s.k)){CUSTOM.push(s);SPACES.push({...s,sc:s.sc==='villa'?'multi':s.sc,def:0})}})}catch(e){}
 try{rowsOf(await cap.db.collection('projects').get()).forEach(p=>{const e=PROJ.find(x=>x.id===p.id);if(e)Object.assign(e,p);else PROJ.push(p)})}catch(e){}
 try{EXTRA=rowsOf(await cap.db.collection('extra').get()).sort((a,b)=>a.at-b.at);await Promise.all(EXTRA.map(async e=>{const bu=x=>x&&x.startsWith('/_blob/')?window.__fb.blobURL(x.slice(7)):x;e.f=await bu(e.f);e.F=await bu(e.F)}));EXTRA.forEach(e=>{if(!D.some(d=>d.c===e.c))D.push(e)})}catch(e){}}
applyLang();
const dataP=fetch('data.json').then(r=>r.json()).then(d=>{const pj=d.projects||[];pj.forEach(p=>{if(!PROJ.some(x=>x.id===p.id))PROJ.push(p)});D=(d.images||d).concat(EXTRA.filter(e=>!(d.images||d).some(x=>x.c===e.c)));render()}).catch(()=>{app.innerHTML=`<p class="empty">${t('مقدرناش نحمّل الصور.')}</p>`});
(async()=>{const c=await window.__fbReady;if(!c||!c.use)return;const [db,user,sample,assets,dl]=await Promise.all(['db','user','sample','assets','downloads'].map(n=>c.use(n).catch(()=>null)));window.__cap=1;
 cap={db,user,sample,assets,dl};await dataP;await loadExtra();
 if(user){try{if(await user.isOwner()){cap.owner=1;document.getElementById('ob').classList.remove('hide');document.getElementById('loBtn').classList.remove('hide');document.getElementById('loBtn').onclick=async()=>{await window.__fb.logout();location.href=location.pathname};document.getElementById('ownerBtn').onclick=owner;document.getElementById('adminBtn').onclick=()=>admin()}}catch(e){}}
 if(new URLSearchParams(location.search).has('admin')&&!cap.owner){loginView();return}
 if(cap.owner&&new URLSearchParams(location.search).has('admin')){owner();return}
 if(D.length)(VIEW||render)()})();
function loginView(){VIEW=loginView;steps();const en=LANG==='en';
 app.innerHTML=`<h1>${en?'Owner sign-in':'دخول المدير'}</h1><p class="lead">${en?'Sign in to see client requests and manage spaces.':'سجّل دخولك عشان تشوف طلبات العملاء وتدير الفراغات.'}</p>
<div class="panel" style="max-width:420px"><label for="le">${en?'Email':'الإيميل'}</label><input type="email" id="le" dir="ltr" autocomplete="username"><label for="lp" style="margin-top:12px">${en?'Password':'الباسورد'}</label><input type="password" id="lp" dir="ltr" autocomplete="current-password"><div class="nav"><button class="btn" id="lb">${en?'Sign in':'دخول'}</button></div><p class="msg" id="lm"></p></div>`;
 const go=async()=>{const m=app.querySelector('#lm');m.textContent=en?'Signing in...':'جاري الدخول...';try{await window.__fb.login(app.querySelector('#le').value.trim(),app.querySelector('#lp').value);location.href=location.pathname}catch(e){m.textContent=en?'Wrong email or password.':'الإيميل أو الباسورد غلط.'}};
 app.querySelector('#lb').onclick=go;app.querySelector('#lp').onkeydown=e=>{if(e.key==='Enter')go()}}

window.__test={S,cur,buildPages,pdfBytes,newProject:()=>newProject(),subView:r=>subView(r),setCap:c=>cap=c,setLang:l=>{LANG=l;applyLang();render()}};
}
