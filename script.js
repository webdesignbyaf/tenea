const { t } = window.teneaI18n;
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() { menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', t('Open menu')); mobileNav.hidden = true; document.body.classList.remove('menu-open'); }
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', t(open ? 'Close menu' : 'Open menu')); mobileNav.hidden = !open; document.body.classList.toggle('menu-open', open); });
mobileNav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); } });
window.matchMedia('(min-width: 701px)').addEventListener('change', e => { if (e.matches) closeMenu(); });

const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    selectTab(tabs[next]); tabs[next].focus();
  });
});

const assetRoot = new URL('assets/', document.currentScript.src);
const products = {
  regular: {title:'The Regular Line', label:'EXTRA VIRGIN OLIVE OIL', image:'regular.png', description:'A place at your everyday table. TENÉA extra virgin olive oil, presented in its signature silver-labelled glass bottle.', category:'Extra virgin olive oil', sizes:'100 ml · 250 ml · 500 ml · 750 ml'},
  premium: {title:'Premium Selection', label:'THE PREMIUM LINE', image:'premium.jpg', description:'A distinctive expression of TENÉA. Extra virgin olive oil in a matte black bottle, finished with the gold details of our Premium Selection.', category:'Extra virgin olive oil', sizes:'100 ml · 250 ml · 500 ml', extra:'500 ml gift box available'},
  organic: {title:'The Organic Line', label:'ORGANIC EXTRA VIRGIN OLIVE OIL', image:'organic.jpg', description:'The organic expression of our collection. Extra virgin olive oil in a white bottle with gold lettering and a natural wooden stopper.', category:'Organic extra virgin olive oil', sizes:'100 ml · 250 ml'},
  chalkidiki: {title:'Chalkidiki Olives', label:'GREEK OLIVES', image:'chalkidiki.jpg', description:'Pitted green Chalkidiki olives. Bring a little Greek hospitality to the table — ready to serve alongside your favourite dishes.', category:'Chalkidiki olives', preparation:'Pitted'},
  kalamon: {title:'Kalamon Olives', label:'GREEK OLIVES', image:'kalamon.jpg', description:'Pitted Kalamon olives from the TENÉA collection. A familiar part of the Greek table, made for sharing.', category:'Kalamon olives', preparation:'Pitted'},
  gift: {title:'A Gift from Greece', label:'PREMIUM SELECTION · GIFT BOX', image:'gift.jpg', description:'Our Premium Selection in its matching cylindrical gift box. A thoughtful way to share TENÉA with someone special.', category:'Extra virgin olive oil', sizes:'500 ml', extra:'Bottle with gift box'}
};
const dialog = document.getElementById('product-dialog');
let productTrigger;
let activeProduct;
const shopLinks = {
 premium: ['https://www.tenea.shop/webshop/Tenea-500ml-Premium-Selection-p420059568', 'Buy 500 ml in the shop'],
 organic: ['https://www.tenea.shop/webshop/Tenea-250ml-Organic-p592375511', 'Buy 250 ml in the shop'],
 chalkidiki: ['https://www.tenea.shop/webshop/Tenea-330gr-Green-Chalkidiki-Olives-p805163080', 'Buy 330 g in the shop'],
 kalamon: ['https://www.tenea.shop/webshop/Tenea-330gr-Black-Kalamon-Olives-p805166566', 'Buy 330 g in the shop']
};
function renderProduct(key) {
  const source = products[key];
  const product = Object.fromEntries(Object.entries(source).map(([name, value]) => [name, name === 'image' ? value : t(value)]));
  document.getElementById('dialog-title').textContent = product.title;
  document.getElementById('dialog-label').textContent = product.label;
  document.getElementById('dialog-description').textContent = product.description;
  const photo = document.getElementById('dialog-image');
  photo.src = new URL(product.image, assetRoot).href;
  photo.alt = 'TENÉA ' + product.title;
  const specifications = document.getElementById('dialog-specs');
  specifications.replaceChildren();
  const rows = [['Origin', 'Greece'], ['Category', product.category], ['Sizes', product.sizes], ['Preparation', product.preparation], ['Presentation', product.extra]];
  rows.filter(([, value]) => value).forEach(([label, value]) => {
    const row = document.createElement('div');
    const term = document.createElement('dt'); term.textContent = t(label);
    const description = document.createElement('dd'); description.textContent = t(value);
    row.append(term, description); specifications.append(row);
  });
  const isGreek = window.teneaI18n.language === 'el';
  const subject = (isGreek ? 'Ερώτηση για προϊόν — TENÉA ' : 'Product enquiry — TENÉA ') + product.title;
  const body = isGreek ? `Γεια σας TENÉA,\n\nΘα ήθελα περισσότερες πληροφορίες για ${product.title}, τη διαθεσιμότητα και την παραγγελία.\n\nΕυχαριστώ.` : `Hello TENÉA,\n\nI would like to know more about ${product.title}, including availability and ordering.\n\nThank you.`;
  document.getElementById('dialog-enquire').href = 'mailto:teneaoliveoil@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  const shop = shopLinks[key];
  document.getElementById('dialog-shop').href = shop ? shop[0] : 'https://www.tenea.shop/webshop';
  document.getElementById('shop-label').textContent = t(shop ? shop[1] : 'Browse the shop');
  document.getElementById('shop-note').textContent = t(shop ? 'Ordering and payment take place at tenea.shop.' : 'Browse the current shop range. For this product, please enquire directly.');
}
document.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click', () => {
  activeProduct = button.dataset.product;
  productTrigger = button;
  renderProduct(activeProduct);
  dialog.showModal();
}));
window.addEventListener('tenea:language', () => {
  menuButton.setAttribute('aria-label', t(mobileNav.hidden ? 'Open menu' : 'Close menu'));
  if (activeProduct) renderProduct(activeProduct);
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
dialog.addEventListener('close', () => productTrigger?.focus());
document.addEventListener('keydown', event => {
  if (event.key !== 'Tab' || mobileNav.hidden) return;
  const stops = [...document.querySelectorAll('[data-language]'), menuButton, ...mobileNav.querySelectorAll('a')];
  if (event.shiftKey && document.activeElement === stops[0]) { event.preventDefault(); stops.at(-1).focus(); }
  else if (!event.shiftKey && document.activeElement === stops.at(-1)) { event.preventDefault(); stops[0].focus(); }
});
