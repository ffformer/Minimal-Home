/* ========================================
   Product Data
   ======================================== */
const PRODUCTS = [
  { id: 1, title: 'Minimal Chair',  price: '$129', tag: 'New',  image: 'https://picsum.photos/400/400?1' },
  { id: 2, title: 'Wood Desk',      price: '$299', tag: 'Hot',  image: 'https://picsum.photos/400/400?2' },
  { id: 3, title: 'Modern Lamp',    price: '$89',  tag: 'New',  image: 'https://picsum.photos/400/400?3' },
  { id: 4, title: 'Simple Sofa',    price: '$599', tag: 'Sale', image: 'https://picsum.photos/400/400?4' },
  { id: 5, title: 'Coffee Table',   price: '$199', tag: 'Hot',  image: 'https://picsum.photos/400/400?5' },
  { id: 6, title: 'Floor Light',    price: '$159', tag: 'New',  image: 'https://picsum.photos/400/400?6' },
];

/* ========================================
   Page Content (Mock Data)
   ======================================== */
const PAGE_CONTENT = {
  about: {
    title: '关于 Minimal Home',
    content: `
      <h3>我们的故事</h3>
      <p>Minimal Home 创立于 2018 年，源于一个简单的信念：好的家具不需要复杂的装饰。我们走遍全球，寻找那些在工艺、材质和设计之间找到完美平衡的单品。</p>
      <p>每一件进入我们目录的家具，都经过了严格筛选——不仅是外观，更是触感、耐用度，以及它在一个真实家庭中存在的意义。</p>
      <div class="modal__highlight">
        <p><strong>200+</strong> 精选品牌合作</p>
        <p><strong>15,000+</strong> 满意客户</p>
        <p><strong>30天</strong> 无忧退换</p>
      </div>
      <h3>我们的理念</h3>
      <p>我们不追逐潮流。我们相信空间是生活方式的延伸，好的家具能陪伴你十年以上。</p>
    `,
  },
  contact: {
    title: '联系我们',
    content: `
      <h3>客户服务</h3>
      <p>我们随时为你提供帮助。无论是产品咨询、订单追踪，还是售后需求，都可以通过以下方式联系我们。</p>
      <div class="modal__highlight">
        <p><strong>📧 邮箱：</strong>hello@minimalhome.com</p>
        <p><strong>📞 电话：</strong>400-888-1234</p>
        <p><strong>🕐 工作时间：</strong>周一至周五 9:00 - 18:00</p>
      </div>
      <h3>线下展厅</h3>
      <p>上海市静安区南京西路 1788 号 3F · 每日 10:00 - 21:00</p>
      <p>北京市朝阳区三里屯太古里 B1 · 每日 10:00 - 22:00</p>
    `,
  },
  privacy: {
    title: '隐私政策',
    content: `
      <h3>信息收集</h3>
      <p>我们仅收集完成订单所必需的信息：姓名、联系电话、收货地址和支付信息。我们不会将你的个人信息出售或分享给第三方用于营销目的。</p>
      <h3>信息使用</h3>
      <p>你的信息仅用于：处理订单与配送、提供客户支持、发送订单状态更新通知。我们会通过加密技术保护你的个人数据。</p>
      <h3>Cookie 政策</h3>
      <p>我们使用必要的 Cookie 来维持网站功能。分析和广告类 Cookie 需要你的明确同意。</p>
      <h3>你的权利</h3>
      <p>你有权访问、更正或删除我们持有的你的个人信息。我们将在 15 个工作日内回应你的请求。</p>
    `,
  },
  terms: {
    title: '服务条款',
    content: `
      <h3>概述</h3>
      <p>欢迎使用 Minimal Home。使用本网站即表示你同意遵守以下服务条款。</p>
      <h3>订单与支付</h3>
      <p>所有订单以最终确认为准。我们接受信用卡、借记卡和主流移动支付。价格以结算页面显示为准，不含运费（大件家具运费另计）。</p>
      <h3>配送与退换</h3>
      <p>标准配送 3-7 个工作日，大件家具 7-15 个工作日。自签收之日起 30 天内，产品保持原包装未使用状态可申请退换。定制商品不支持退换。</p>
      <h3>保修</h3>
      <p>所有家具产品享有 2 年质量保修，覆盖材料和制造缺陷。正常使用磨损、不当使用或自行改装不在保修范围内。</p>
    `,
  },
};

/* ========================================
   Application State
   ======================================== */
const state = {
  currentFilter: 'all',
  menuOpen: false,
  cartOpen: false,
  modalOpen: false,
  cart: [],
};

/* ========================================
   DOM References (lazy getters)
   ======================================== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const DOM = {
  get grid()           { return $('#product-grid'); },
  get template()       { return $('#product-card-template'); },
  get hamburger()      { return $('#hamburger-btn'); },
  get nav()            { return $('#main-nav'); },
  get body()           { return document.body; },

  // Cart
  get cartPage()       { return $('#cart-page'); },
  get cartItems()      { return $('#cart-items'); },
  get cartEmpty()      { return $('#cart-empty'); },
  get cartCount()      { return $('#cart-count'); },
  get cartTotal()      { return $('#cart-total'); },
  get cartBadge()      { return $('#cart-badge'); },
  get cartCheckout()   { return $('#cart-checkout'); },
  get cartFooter()     { return $('#cart-footer'); },
  get cartSelectAll()  { return $('#cart-select-all'); },
  get cartBackdrop()   { return $('#cart-backdrop'); },

  // Modal
  get modal()          { return $('#modal'); },
  get modalBackdrop()  { return $('#modal-backdrop'); },
  get modalTitle()     { return $('#modal-title'); },
  get modalBody()      { return $('#modal-body'); },

  // Back to top
  get backToTop()      { return $('#back-to-top'); },

  get toastContainer() { return $('#toast-container'); },
};

/* ========================================
   Helpers
   ======================================== */
const getPrice = (str) => parseFloat(str.replace('$', ''));
const cartTotalQty = () => state.cart.reduce((s, i) => s + i.quantity, 0);
const cartCheckedTotal = () => state.cart.filter(i => i.checked).reduce((s, i) => s + getPrice(i.price) * i.quantity, 0);
const cartCheckedCount = () => state.cart.filter(i => i.checked).length;
const allChecked = () => state.cart.length > 0 && state.cart.every(i => i.checked);

/* ========================================
   Product Cards Render
   ======================================== */
function createProductCard(product) {
  const clone = DOM.template.content.cloneNode(true);
  clone.querySelector('.product-card').setAttribute('data-product-id', product.id);
  clone.querySelector('.product-card__image').src = product.image;
  clone.querySelector('.product-card__image').alt = product.title;
  clone.querySelector('.product-card__title').textContent = product.title;
  clone.querySelector('.product-card__price').textContent = product.price;
  const tag = clone.querySelector('.product-card__tag');
  tag.classList.add('tag--' + product.tag.toLowerCase());
  tag.textContent = product.tag;
  return clone;
}

function renderProductGrid(filter = 'all') {
  const filtered = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.tag.toLowerCase() === filter.toLowerCase());
  DOM.grid.innerHTML = '';

  if (filtered.length === 0) {
    DOM.grid.innerHTML = `
      <div class="products__empty">
        <div class="products__empty-icon">🔍</div>
        <p class="products__empty-text">该分类暂无商品</p>
        <button class="products__empty-reset" id="empty-reset-btn">查看全部商品</button>
      </div>`;
    $('#empty-reset-btn').addEventListener('click', () => {
      renderProductGrid('all');
      updateFilterButtons('all');
      state.currentFilter = 'all';
    });
    return;
  }

  const fragment = document.createDocumentFragment();
  filtered.forEach(p => fragment.appendChild(createProductCard(p)));
  DOM.grid.appendChild(fragment);
}

/* ========================================
   Filter
   ======================================== */
function updateFilterButtons(active) {
  $$('.filter-btn').forEach(btn => {
    btn.classList.toggle('filter-btn--active', btn.dataset.filter.toLowerCase() === active.toLowerCase());
  });
}

function setupFilters() {
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.currentFilter = btn.dataset.filter;
      renderProductGrid(btn.dataset.filter);
      updateFilterButtons(btn.dataset.filter);
    });
  });
}

/* ========================================
   Cart: Render
   ======================================== */
function renderCart() {
  const totalQty = cartTotalQty();
  const isEmpty = state.cart.length === 0;

  DOM.cartBadge.textContent = totalQty;
  DOM.cartBadge.classList.toggle('header__cart-badge--visible', totalQty > 0);
  DOM.cartCount.textContent = totalQty;
  DOM.cartEmpty.style.display = isEmpty ? 'flex' : 'none';
  DOM.cartItems.style.display = isEmpty ? 'none' : 'block';
  DOM.cartFooter.style.display = isEmpty ? 'none' : 'flex';

  if (!isEmpty) {
    DOM.cartItems.innerHTML = '';
    const fragment = document.createDocumentFragment();
    state.cart.forEach(item => fragment.appendChild(buildCartItem(item)));
    DOM.cartItems.appendChild(fragment);
  }

  if (DOM.cartSelectAll) {
    DOM.cartSelectAll.checked = allChecked();
    DOM.cartSelectAll.indeterminate = state.cart.some(i => i.checked) && !allChecked();
  }

  const total = cartCheckedTotal();
  const checked = cartCheckedCount();
  DOM.cartTotal.textContent = '$' + total.toFixed(0);
  DOM.cartCheckout.disabled = checked === 0;
  DOM.cartCheckout.textContent = checked > 0 ? `去结算 (${checked})` : '去结算';
}

function buildCartItem(item) {
  const div = document.createElement('div');
  div.className = 'cart-item';
  div.innerHTML = `
    <input type="checkbox" class="cart-item__checkbox" ${item.checked ? 'checked' : ''} data-id="${item.id}">
    <img class="cart-item__image" src="${item.image}" alt="${item.title}" loading="lazy">
    <div class="cart-item__info">
      <p class="cart-item__title">${item.title}</p>
      <p class="cart-item__price">单价 ${item.price}</p>
      <p class="cart-item__subtotal">小计 $${(getPrice(item.price) * item.quantity).toFixed(0)}</p>
      <div class="cart-item__actions">
        <div class="cart-item__qty">
          <button class="cart-item__qty-btn" data-action="decrease" data-id="${item.id}" ${item.quantity <= 1 ? 'disabled' : ''}>−</button>
          <span class="cart-item__qty-value">${item.quantity}</span>
          <button class="cart-item__qty-btn" data-action="increase" data-id="${item.id}">+</button>
        </div>
        <button class="cart-item__remove" data-action="remove" data-id="${item.id}">删除</button>
      </div>
    </div>`;
  return div;
}

/* ========================================
   Cart: Actions
   ======================================== */
function addToCart(product) {
  const existing = state.cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
    showToast(`购物车中已有 ${existing.quantity} 件`, product.title);
  } else {
    state.cart.push({ id: product.id, title: product.title, price: product.price, image: product.image, quantity: 1, checked: true });
    showToast('已加入购物车', product.title);
  }
  renderCart();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(item => item.id !== id);
  renderCart();
}

function updateQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.quantity = Math.max(0, item.quantity + delta);
  item.quantity === 0 ? removeFromCart(id) : renderCart();
}

function toggleCheck(id) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.checked = !item.checked;
  renderCart();
}

function toggleSelectAll() {
  const checked = DOM.cartSelectAll.checked;
  state.cart.forEach(item => { item.checked = checked; });
  renderCart();
}

/* ========================================
   Cart: Events
   ======================================== */
function setupCartEvents() {
  DOM.cartItems.addEventListener('click', (e) => {
    const id = parseInt(e.target.dataset.id, 10);
    if (!id) return;
    if (e.target.dataset.action === 'remove')      removeFromCart(id);
    else if (e.target.dataset.action === 'increase') updateQty(id, 1);
    else if (e.target.dataset.action === 'decrease') updateQty(id, -1);
  });

  DOM.cartItems.addEventListener('change', (e) => {
    if (e.target.classList.contains('cart-item__checkbox')) {
      toggleCheck(parseInt(e.target.dataset.id, 10));
    }
  });

  DOM.cartSelectAll.addEventListener('change', toggleSelectAll);

  DOM.cartCheckout.addEventListener('click', () => {
    const checked = state.cart.filter(i => i.checked);
    if (checked.length === 0) return;
    const total = cartCheckedTotal();
    const totalQty = checked.reduce((s, i) => s + i.quantity, 0);
    state.cart = state.cart.filter(i => !i.checked);
    renderCart(); // Update badge immediately
    showToast(`已下单 ${totalQty} 件商品，共 $${total.toFixed(0)}`, '');
    closeCart();
  });

  $('#cart-empty-shop').addEventListener('click', closeCart);

  // Cart backdrop — click outside to close (desktop only via CSS)
  DOM.cartBackdrop.addEventListener('click', closeCart);
}

/* ========================================
   Cart: Open / Close
   ======================================== */
function openCart() {
  DOM.cartPage.classList.add('cart-page--open');
  DOM.cartBackdrop.classList.add('cart-backdrop--open');
  DOM.body.classList.add('no-scroll');
  state.cartOpen = true;
  renderCart();
}

function closeCart() {
  DOM.cartPage.classList.remove('cart-page--open');
  DOM.cartBackdrop.classList.remove('cart-backdrop--open');
  state.cartOpen = false;
  if (!state.modalOpen) {
    DOM.body.classList.remove('no-scroll');
  }
}

function setupCartToggle() {
  $('#cart-toggle').addEventListener('click', () => {
    state.cartOpen ? closeCart() : openCart();
  });
  $('#cart-back').addEventListener('click', closeCart);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.cartOpen && !state.modalOpen) closeCart();
  });
}

/* ========================================
   Add-to-Cart on Product Grid
   ======================================== */
function setupAddToCart() {
  DOM.grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.product-card__btn');
    if (!btn) return;
    const card = btn.closest('.product-card');
    if (!card) return;
    const product = PRODUCTS.find(p => p.id === parseInt(card.dataset.productId, 10));
    if (!product) return;

    addToCart(product);

    const original = btn.textContent;
    btn.textContent = '✓ 已添加';
    btn.style.background = 'var(--color-accent)';
    btn.style.color = 'var(--color-white)';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.style.color = '';
    }, 1000);
  });
}

/* ========================================
   Toast Notification
   ======================================== */
function showToast(message, title) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  // When title is empty, just show message
  toast.innerHTML = title
    ? `<span class="toast__icon">✓</span><span class="toast__text">${title} ${message}</span>`
    : `<span class="toast__icon">✓</span><span class="toast__text">${message}</span>`;
  DOM.toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('toast--visible'));
  });

  setTimeout(() => {
    toast.classList.remove('toast--visible');
    toast.addEventListener('transitionend', () => toast.remove());
  }, 2800);
}

/* ========================================
   Modal
   ======================================== */
function openModal(key) {
  const data = PAGE_CONTENT[key];
  if (!data) return;
  DOM.modalTitle.textContent = data.title;
  DOM.modalBody.innerHTML = data.content;
  DOM.modal.classList.add('modal--open');
  DOM.modalBackdrop.classList.add('modal-backdrop--open');
  DOM.body.classList.add('no-scroll');
  DOM.modal.setAttribute('aria-label', data.title);
  state.modalOpen = true;
}

function closeModal() {
  DOM.modal.classList.remove('modal--open');
  DOM.modalBackdrop.classList.remove('modal-backdrop--open');
  state.modalOpen = false;
  if (!state.cartOpen) DOM.body.classList.remove('no-scroll');
}

function setupModal() {
  $('#modal-close').addEventListener('click', closeModal);
  DOM.modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.modalOpen) closeModal();
  });
}

/* ========================================
   Mobile Menu — consolidated single-handler approach
   ======================================== */
let navBackdrop = null;

function createBackdrop() {
  if (navBackdrop) return;
  navBackdrop = document.createElement('div');
  navBackdrop.id = 'nav-backdrop';
  navBackdrop.className = 'header__nav-backdrop';
  document.body.appendChild(navBackdrop);
  navBackdrop.addEventListener('click', closeMenu);
}

function removeBackdrop() {
  if (!navBackdrop) return;
  navBackdrop.removeEventListener('click', closeMenu);
  navBackdrop.remove();
  navBackdrop = null;
}

function openMenu() {
  DOM.nav.classList.add('header__nav--open');
  DOM.hamburger.classList.add('header__hamburger--open');
  DOM.hamburger.setAttribute('aria-expanded', 'true');
  DOM.body.classList.add('no-scroll');
  createBackdrop();
  state.menuOpen = true;
}

function closeMenu() {
  DOM.nav.classList.remove('header__nav--open');
  DOM.hamburger.classList.remove('header__hamburger--open');
  DOM.hamburger.setAttribute('aria-expanded', 'false');
  removeBackdrop();
  if (!state.cartOpen && !state.modalOpen) {
    DOM.body.classList.remove('no-scroll');
  }
  state.menuOpen = false;
}

/**
 * Handle a nav link click — ONE entry point for all nav behavior.
 * Called directly from each link's click handler.
 */
function handleNavLinkClick(link, e) {
  e.preventDefault(); // Stop href="#" / href="#products" default

  const pageKey = link.dataset.page;
  const href = link.getAttribute('href');

  // Close the mobile menu first (no-op if already closed)
  closeMenu();

  if (pageKey && PAGE_CONTENT[pageKey]) {
    // Data-page links: open modal after menu close animation
    setTimeout(() => openModal(pageKey), 300);
  } else if (href && href.startsWith('#') && href !== '#') {
    // Anchor links: smooth scroll after menu close animation
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 60 - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 300);
  }
}

function setupMobileMenu() {
  // Hamburger toggle
  DOM.hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    state.menuOpen ? closeMenu() : openMenu();
  });

  // Bind handleNavLinkClick to EVERY nav link, regardless of screen size.
  // On desktop, state.menuOpen is false so closeMenu() is a no-op,
  // and the link behavior (modal / smooth-scroll) works normally.
  $$('.header__nav-link').forEach(link => {
    link.addEventListener('click', (e) => handleNavLinkClick(link, e));
  });

  // Footer data-page links also need to work
  $$('.footer__link[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const key = link.dataset.page;
      if (PAGE_CONTENT[key]) openModal(key);
    });
  });

  // Escape key to close menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.menuOpen) {
      closeMenu();
      DOM.hamburger.focus();
    }
  });

  // Auto-close on desktop resize
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && state.menuOpen) closeMenu();
  });
}

/* ========================================
   Back to Top Button
   ======================================== */
function setupBackToTop() {
  const btn = DOM.backToTop;

  // Show/hide on scroll
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        btn.classList.toggle('back-to-top--visible', window.scrollY > 400);
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });

  // Scroll to top on click
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ========================================
   Active Nav Link on Scroll
   ======================================== */
function setupActiveNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = $$('.header__nav-link[href^="#"]');
  if (sections.length === 0 || navLinks.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('header__nav-link--active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ========================================
   Init
   ======================================== */
function init() {
  renderProductGrid('all');
  setupFilters();
  setupAddToCart();
  setupCartToggle();
  setupCartEvents();
  setupMobileMenu();
  setupModal();
  setupBackToTop();
  setupActiveNavOnScroll();
  renderCart();
}

document.addEventListener('DOMContentLoaded', init);
