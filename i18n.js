(() => {
const greek = {
'Skip to content':'Μετάβαση στο περιεχόμενο','The collection':'Η συλλογή','Our roots':'Οι ρίζες μας','THE ESSENCE OF GREECE':'Η ΟΥΣΙΑ ΤΗΣ ΕΛΛΑΔΑΣ','Get in touch':'Επικοινωνία','Shop':'Κατάστημα',
'ANCIENT TENEA · PELOPONNESE':'ΑΡΧΑΙΑ ΤΕΝΕΑ · ΠΕΛΟΠΟΝΝΗΣΟΣ','Rooted in Greece.':'Ρίζες στην Ελλάδα.','Crafted':'Φτιαγμένο','for life.':'για τη ζωή.',"Exceptional olive oil. A family's devotion.":'Εξαιρετικό ελαιόλαδο. Η αφοσίωση μιας οικογένειας.','A little of our land, at your table.':'Λίγη από τη γη μας, στο τραπέζι σας.','Explore the collection':'Ανακαλύψτε τη συλλογή','THE ELIXIR OF LIFE':'ΤΟ ΕΛΙΞΙΡΙΟ ΤΗΣ ΖΩΗΣ','01 — THE PREMIUM SELECTION':'01 — Η ΣΕΙΡΑ PREMIUM','GREEK SOUL. EXTRA VIRGIN.':'ΕΛΛΗΝΙΚΗ ΨΥΧΗ. ΕΞΑΙΡΕΤΙΚΑ ΠΑΡΘΕΝΟ.','Discover TENÉA':'Ανακαλύψτε την TENÉA','FROM OUR FAMILY TO YOUR TABLE':'ΑΠΟ ΤΗΝ ΟΙΚΟΓΕΝΕΙΑ ΜΑΣ ΣΤΟ ΤΡΑΠΕΖΙ ΣΑΣ',
'01 / THE COLLECTION':'01 / Η ΣΥΛΛΟΓΗ','Goodness,':'Αγνότητα,','in its purest form.':'στην πιο αυθεντική μορφή της.','From the first pour to the last olive.':'Από την πρώτη σταγόνα μέχρι την τελευταία ελιά.','Find your own taste of Greece.':'Ανακαλύψτε τη δική σας γεύση Ελλάδας.','Extra virgin olive oils':'Εξαιρετικά παρθένα ελαιόλαδα','Greek olives':'Ελληνικές ελιές','01 / REGULAR LINE':'01 / ΚΛΑΣΙΚΗ ΣΕΙΡΑ','The everyday essential':'Η καθημερινή απόλαυση','Extra Virgin Olive Oil':'Εξαιρετικά Παρθένο Ελαιόλαδο','02 / PREMIUM SELECTION':'02 / ΣΕΙΡΑ PREMIUM','A little extraordinary':'Κάτι το ξεχωριστό','Premium Extra Virgin Olive Oil':'Εξαιρετικά Παρθένο Ελαιόλαδο Premium','100 ml · 250 ml · 500 ml · Gift box':'100 ml · 250 ml · 500 ml · Συσκευασία δώρου','03 / ORGANIC LINE':'03 / ΒΙΟΛΟΓΙΚΗ ΣΕΙΡΑ','Nature, uninterrupted':'Η φύση, αγνή','Organic Extra Virgin Olive Oil':'Βιολογικό Εξαιρετικά Παρθένο Ελαιόλαδο','01 / CHALKIDIKI OLIVES':'01 / ΕΛΙΕΣ ΧΑΛΚΙΔΙΚΗΣ','A taste of the sun':'Μια γεύση από ήλιο','Chalkidiki Olives · Pitted':'Ελιές Χαλκιδικής · Χωρίς κουκούτσι','02 / KALAMON OLIVES':'02 / ΕΛΙΕΣ ΚΑΛΑΜΩΝ','The Greek classic':'Η ελληνική παράδοση','Kalamon Olives · Pitted':'Ελιές Καλαμών · Χωρίς κουκούτσι','Made to be enjoyed. Even better when shared.':'Για να τις απολαμβάνετε. Ακόμα καλύτερα, μαζί.','Orders & stockist enquiries':'Παραγγελίες & συνεργασίες','Visit the online shop':'Επισκεφθείτε το κατάστημα',
'ONE LAND. A LIFETIME OF DEVOTION.':'ΕΝΑΣ ΤΟΠΟΣ. ΜΙΑ ΖΩΗ ΑΦΟΣΙΩΣΗΣ.','You can taste':'Η γεύση μαρτυρά','where we come from.':'τον τόπο μας.','ANCIENT TENEA, GREECE — 340 M ABOVE THE SEA':'ΑΡΧΑΙΑ ΤΕΝΕΑ, ΕΛΛΑΔΑ — ΥΨΟΜΕΤΡΟ 340 Μ.','02 / OUR ROOTS':'02 / ΟΙ ΡΙΖΕΣ ΜΑΣ','Some things':'Κάποια πράγματα','are in':'είναι στη','our nature.':'φύση μας.',
'In the hills of Corinth, among the olive groves of Ancient Tenea, our family has always felt at home.':'Στους λόφους της Κορινθίας, ανάμεσα στους ελαιώνες της Αρχαίας Τενέας, η οικογένειά μας νιώθει πάντα σαν στο σπίτι της.',
'Knowledge passes from one generation to the next. The hands change; the care remains. Founded by Athina Kordosi, TENÉA brings this family tradition to tables beyond Greece.':'Η γνώση περνά από γενιά σε γενιά. Τα χέρια αλλάζουν, η φροντίδα παραμένει. Με ιδρύτρια την Αθηνά Κορδώση, η TENÉA φέρνει αυτή την οικογενειακή παράδοση σε τραπέζια πέρα από την Ελλάδα.',
"Our land's soil and climate nurture the Manaki olive variety. It is here, in the Peloponnese, that our story begins.":'Το έδαφος και το κλίμα του τόπου μας ευνοούν την καλλιέργεια της ποικιλίας Μανάκι. Εδώ, στην Πελοπόννησο, ξεκινά η ιστορία μας.',
'Meet the spirit behind TENÉA':'Γνωρίστε την ψυχή της TENÉA','Different generations. The same love for the land.':'Διαφορετικές γενιές. Η ίδια αγάπη για τη γη.','Rooted in tradition.':'Με ρίζες στην παράδοση.','Made to be part of your everyday.':'Για να γίνει μέρος της καθημερινότητάς σας.','RECOGNISED BEYOND OUR GROVES':'ΑΝΑΓΝΩΡΙΣΗ ΠΕΡΑ ΑΠΟ ΤΟΥΣ ΕΛΑΙΩΝΕΣ ΜΑΣ','Greek soul.':'Ελληνική ψυχή.','International acclaim.':'Διεθνής αναγνώριση.','Gold · Taste & Packaging':'Χρυσό · Γεύση & Συσκευασία','Gold · Taste':'Χρυσό · Γεύση','Silver · Taste':'Αργυρό · Γεύση',
'A THOUGHTFUL GESTURE':'ΕΝΑ ΔΩΡΟ ΜΕ ΝΟΗΜΑ','Give a little':'Χαρίστε λίγη','of Greece.':'Ελλάδα.','For a generous host. A shared celebration.':'Για έναν φιλόξενο οικοδεσπότη. Μια γιορτή μαζί.','Or simply someone with very good taste.':'Ή απλώς για κάποιον με εξαιρετικό γούστο.','Premium Selection · 500 ml · Gift box':'Σειρά Premium · 500 ml · Συσκευασία δώρου','Discover the gift box':'Ανακαλύψτε τη συσκευασία δώρου',"03 / LET'S CONNECT":'03 / ΕΠΙΚΟΙΝΩΝΙΑ','From our family':'Από την οικογένειά μας','to':'στο','your table.':'τραπέζι σας.','For orders, thoughtful gifts or a new partnership,':'Για παραγγελίες, ξεχωριστά δώρα ή μια νέα συνεργασία,','we would love to hear from you.':'θα χαρούμε να επικοινωνήσετε μαζί μας.','Chiliomodi, 20008 · Corinth, Greece':'Χιλιομόδι, 20008 · Κορινθία, Ελλάδα','© 2026 TENÉA Olive Oil':'© 2026 TENÉA Ελαιόλαδο','Back to the top':'Επιστροφή στην κορυφή',
'Open menu':'Άνοιγμα μενού','Close menu':'Κλείσιμο μενού','Close product details':'Κλείσιμο λεπτομερειών προϊόντος','Main navigation':'Κύρια πλοήγηση','Mobile navigation':'Πλοήγηση κινητού','Product collections':'Συλλογές προϊόντων','TENÉA home':'Αρχική TENÉA','Back to TENÉA homepage':'Επιστροφή στην αρχική TENÉA','Our land in Ancient Tenea':'Ο τόπος μας στην Αρχαία Τενέα','TENÉA COLLECTION':'Η ΣΥΛΛΟΓΗ TENÉA','Premium Selection':'Σειρά Premium','Enquire about this product':'Πληροφορίες για το προϊόν','Contact our family for availability and ordering.':'Επικοινωνήστε μαζί μας για διαθεσιμότητα και παραγγελίες.',
'Origin':'Προέλευση','Greece':'Ελλάδα','Category':'Κατηγορία','Sizes':'Μεγέθη','Preparation':'Επεξεργασία','Presentation':'Συσκευασία','The Regular Line':'Η Κλασική Σειρά','EXTRA VIRGIN OLIVE OIL':'ΕΞΑΙΡΕΤΙΚΑ ΠΑΡΘΕΝΟ ΕΛΑΙΟΛΑΔΟ','THE PREMIUM LINE':'Η ΣΕΙΡΑ PREMIUM','The Organic Line':'Η Βιολογική Σειρά','ORGANIC EXTRA VIRGIN OLIVE OIL':'ΒΙΟΛΟΓΙΚΟ ΕΞΑΙΡΕΤΙΚΑ ΠΑΡΘΕΝΟ ΕΛΑΙΟΛΑΔΟ','Chalkidiki Olives':'Ελιές Χαλκιδικής','Kalamon Olives':'Ελιές Καλαμών','GREEK OLIVES':'ΕΛΛΗΝΙΚΕΣ ΕΛΙΕΣ','A Gift from Greece':'Ένα δώρο από την Ελλάδα','PREMIUM SELECTION · GIFT BOX':'ΣΕΙΡΑ PREMIUM · ΣΥΣΚΕΥΑΣΙΑ ΔΩΡΟΥ','Extra virgin olive oil':'Εξαιρετικά παρθένο ελαιόλαδο','Organic extra virgin olive oil':'Βιολογικό εξαιρετικά παρθένο ελαιόλαδο','Chalkidiki olives':'Ελιές Χαλκιδικής','Kalamon olives':'Ελιές Καλαμών','Pitted':'Χωρίς κουκούτσι','500 ml gift box available':'Διατίθεται συσκευασία δώρου 500 ml','Bottle with gift box':'Φιάλη με συσκευασία δώρου',
'A place at your everyday table. TENÉA extra virgin olive oil, presented in its signature silver-labelled glass bottle.':'Μια θέση στο καθημερινό σας τραπέζι. Εξαιρετικά παρθένο ελαιόλαδο TENÉA στη χαρακτηριστική γυάλινη φιάλη με ασημένια ετικέτα.',
'A distinctive expression of TENÉA. Extra virgin olive oil in a matte black bottle, finished with the gold details of our Premium Selection.':'Μια ξεχωριστή έκφραση της TENÉA. Εξαιρετικά παρθένο ελαιόλαδο σε μαύρη ματ φιάλη, με τις χρυσές λεπτομέρειες της σειράς Premium.',
'The organic expression of our collection. Extra virgin olive oil in a white bottle with gold lettering and a natural wooden stopper.':'Η βιολογική έκφραση της συλλογής μας. Εξαιρετικά παρθένο ελαιόλαδο σε λευκή φιάλη με χρυσά γράμματα και φυσικό ξύλινο πώμα.',
'Pitted green Chalkidiki olives. Bring a little Greek hospitality to the table — ready to serve alongside your favourite dishes.':'Πράσινες ελιές Χαλκιδικής χωρίς κουκούτσι. Λίγη ελληνική φιλοξενία στο τραπέζι σας, έτοιμες να συνοδεύσουν τα αγαπημένα σας πιάτα.',
'Pitted Kalamon olives from the TENÉA collection. A familiar part of the Greek table, made for sharing.':'Ελιές Καλαμών χωρίς κουκούτσι από τη συλλογή TENÉA. Μια αγαπημένη γεύση του ελληνικού τραπεζιού, για να τη μοιράζεστε.',
'Our Premium Selection in its matching cylindrical gift box. A thoughtful way to share TENÉA with someone special.':'Η σειρά Premium στην αντίστοιχη κυλινδρική συσκευασία δώρου. Ένας ξεχωριστός τρόπος να μοιραστείτε την TENÉA με κάποιον αγαπημένο.',
'Buy 500 ml in the shop':'Αγορά 500 ml στο κατάστημα','Buy 250 ml in the shop':'Αγορά 250 ml στο κατάστημα','Buy 330 g in the shop':'Αγορά 330 g στο κατάστημα','Browse the shop':'Περιηγηθείτε στο κατάστημα','Ordering and payment take place at tenea.shop.':'Η παραγγελία και η πληρωμή γίνονται στο tenea.shop.','Browse the current shop range. For this product, please enquire directly.':'Δείτε τη διαθέσιμη συλλογή του καταστήματος. Για αυτό το προϊόν, επικοινωνήστε απευθείας μαζί μας.'
};

const productNames = {regular:'της Κλασικής Σειράς',premium:'της σειράς Premium',organic:'της Βιολογικής Σειράς',chalkidiki:'των ελιών Χαλκιδικής',kalamon:'των ελιών Καλαμών',gift:'της συσκευασίας δώρου'};
document.querySelectorAll('[data-product][aria-label]').forEach(button => { greek[button.getAttribute('aria-label')] = 'Προβολή ' + productNames[button.dataset.product]; });
const imageDescriptions = {
 'premium.jpg':'Εξαιρετικά παρθένο ελαιόλαδο TENÉA Premium σε μαύρη φιάλη με χρυσά γράμματα',
 'regular.png':'Ελαιόλαδο TENÉA σε γυάλινη φιάλη με ασημένια ετικέτα',
 'organic.jpg':'Βιολογικό ελαιόλαδο TENÉA σε λευκή φιάλη με ξύλινο πώμα',
 'chalkidiki.jpg':'Πράσινες ελιές Χαλκιδικής TENÉA χωρίς κουκούτσι σε γυάλινο βάζο',
 'kalamon.jpg':'Ελιές Καλαμών TENÉA χωρίς κουκούτσι σε γυάλινο βάζο',
 'gift.jpg':'Φιάλη TENÉA Premium με κυλινδρική συσκευασία δώρου',
 'land.jpg':'Το τοπίο με τους ελαιώνες της Αρχαίας Τενέας στην Πελοπόννησο',
 'grove.jpg':'Γενιές της οικογένειας TENÉA μαζί στη συγκομιδή της ελιάς',
 'organic-life.jpg':'Φιάλες TENÉA Premium και Organic κάτω από μια ελιά'
};
document.querySelectorAll('img[alt]').forEach(img => { const description=imageDescriptions[img.getAttribute('src').split('/').pop()]; if(description) greek[img.alt]=description; });

let currentLanguage = 'en';
const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
 const node = walker.currentNode;
 if (!node.parentElement.closest('script,style,#dialog-title,#dialog-description,#dialog-specs,#dialog-label,#shop-label,#shop-note') && greek[node.textContent.trim()]) textNodes.push([node,node.textContent]);
}
const attributes = [];
document.querySelectorAll('[aria-label],[alt]').forEach(el => {
 if (el.id === 'dialog-image') return;
 for (const name of ['aria-label','alt']) if (el.hasAttribute(name)) attributes.push([el,name,el.getAttribute(name)]);
});
function t(value) { return currentLanguage === 'el' ? (greek[value] || value) : value; }
function setLanguage(language, remember = true) {
 currentLanguage = language === 'el' ? 'el' : 'en';
 document.documentElement.lang = currentLanguage;
 textNodes.forEach(([node,original]) => { node.textContent = original.replace(original.trim(),t(original.trim())); });
 attributes.forEach(([el,name,value]) => el.setAttribute(name,t(value)));
 document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.language === currentLanguage)));
 document.title = currentLanguage === 'el' ? 'TENÉA — Ρίζες στην Ελλάδα. Φτιαγμένο για τη ζωή.' : 'TENÉA — Rooted in Greece. Crafted for life.';
 document.querySelector('meta[name="description"]').content = currentLanguage === 'el' ? 'Ανακαλύψτε τα εξαιρετικά παρθένα ελαιόλαδα και τις ελληνικές ελιές TENÉA. Μια οικογενειακή παράδοση από την Αρχαία Τενέα της Πελοποννήσου.' : 'Discover TENÉA extra virgin olive oil and Greek olives. A family tradition from Ancient Tenea, in the heart of the Peloponnese.';
 if (remember) { try { localStorage.setItem('tenea-language',currentLanguage); } catch {} try { const url=new URL(location.href);url.searchParams.set('lang',currentLanguage);history.replaceState(null,'',url); } catch {} }
 window.dispatchEvent(new Event('tenea:language'));
}
window.teneaI18n = {t, setLanguage, get language(){return currentLanguage;}};
document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click',()=>setLanguage(button.dataset.language)));
let initialLanguage = new URL(location.href).searchParams.get('lang');
if (!initialLanguage) { try { initialLanguage=localStorage.getItem('tenea-language'); } catch {} }
setLanguage(initialLanguage, false);

})();
