// shop.js - controle simples do catálogo e carrinho (localStorage)
// Conteúdo em português para facilitar manutenção

document.addEventListener('DOMContentLoaded', () => {
  const products = [
    {
      id: 'p1',
      name: 'Sementes de Soja - 10kg',
      price: 129.90,
      image: 'https://picsum.photos/seed/soja/600/400',
      desc: 'Sementes de alta produtividade, certificadas para plantio.',
      category: 'Sementes'
    },
    {
      id: 'p2',
      name: 'Fertilizante NPK 10-30-10 - 20kg',
      price: 189.50,
      image: 'https://picsum.photos/seed/fert/600/400',
      desc: 'Nutrição balanceada para suporte ao desenvolvimento vegetativo.',
      category: 'Insumos'
    },
    {
      id: 'p3',
      name: 'Pulverizador Costal Elétrico',
      price: 799.00,
      image: 'https://picsum.photos/seed/pulv/600/400',
      desc: 'Pulverizador leve e eficiente para pequenas e médias propriedades.',
      category: 'Equipamentos'
    },
    {
      id: 'p4',
      name: 'Ração Bovinos Proteica - 25kg',
      price: 232.00,
      image: 'https://picsum.photos/seed/racao/600/400',
      desc: 'Ração com suplementação proteica para ganho de peso.',
      category: 'Pecuária'
    },
    {
      id: 'p5',
      name: 'Ferramentas Agrícolas - Kit',
      price: 149.99,
      image: 'https://picsum.photos/seed/kit/600/400',
      desc: 'Kit com enxada, ancinho e pá com cabo reforçado.',
      category: 'Ferramentas'
    },
    {
      id: 'p6',
      name: 'Sensor de Umidade de Solo',
      price: 299.90,
      image: 'https://picsum.photos/seed/sensor/600/400',
      desc: 'Monitoramento de umidade em tempo real via app (simulação).',
      category: 'Tecnologia'
    }
  ];

  // Elementos
  const productsGrid = document.getElementById('products-grid');
  const productModal = document.getElementById('product-modal');
  const modalContent = document.getElementById('modal-content');
  const closeModalBtn = document.getElementById('close-modal');
  const cartCountEl = document.getElementById('cart-count');
  const cartDrawer = document.getElementById('cart-drawer');
  const openCartBtn = document.getElementById('open-cart');
  const closeCartBtn = document.getElementById('close-cart');
  const cartItemsEl = document.getElementById('cart-items');
  const cartTotalEl = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('checkout-btn');
  const clearCartBtn = document.getElementById('clear-cart');

  // Carrinho em localStorage
  let cart = JSON.parse(localStorage.getItem('agro_cart') || '[]');

  // Funções
  function saveCart(){
    localStorage.setItem('agro_cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
  }

  function updateCartCount(){
    const count = cart.reduce((s, it) => s + it.qty, 0);
    cartCountEl.textContent = count;
  }

  function formatCurrency(v){ return v.toFixed(2).replace('.',','); }

  function renderProducts(){
    productsGrid.innerHTML = '';
    products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p class="muted">${p.category}</p>
        <p>R$ ${formatCurrency(p.price)}</p>
        <div class="product-actions">
          <button class="btn" data-id="${p.id}" data-action="view">Ver</button>
          <button class="btn primary" data-id="${p.id}" data-action="add">Adicionar</button>
        </div>
      `;
      productsGrid.appendChild(card);
    });
  }

  function openProductModal(prod){
    modalContent.innerHTML = `
      <div style="display:flex;flex-wrap:wrap;gap:1rem">
        <img src="${prod.image}" alt="${prod.name}" style="width:320px;height:220px;object-fit:cover;border-radius:6px">
        <div style="flex:1;min-width:220px">
          <h3>${prod.name}</h3>
          <p style="color:var(--muted)">${prod.category}</p>
          <p>${prod.desc}</p>
          <p style="font-weight:600">R$ ${formatCurrency(prod.price)}</p>
          <div style="display:flex;gap:0.5rem;margin-top:0.5rem">
            <button class="btn primary" id="modal-add" data-id="${prod.id}">Adicionar ao carrinho</button>
            <button class="btn" id="modal-close-aux">Fechar</button>
          </div>
        </div>
      </div>
    `;
    try { productModal.showModal(); } catch(e){ /* fallback */ productModal.style.display='block' }
  }

  function addToCart(productId, qty = 1){
    const prod = products.find(p => p.id === productId);
    if(!prod) return;
    const existing = cart.find(c => c.id === productId);
    if(existing) existing.qty += qty;
    else cart.push({ id: prod.id, name: prod.name, price: prod.price, image: prod.image, qty });
    saveCart();
  }

  function removeFromCart(productId){
    cart = cart.filter(c => c.id !== productId);
    saveCart();
  }

  function changeQty(productId, newQty){
    const it = cart.find(c => c.id === productId);
    if(!it) return;
    it.qty = Math.max(0, newQty);
    if(it.qty === 0) removeFromCart(productId);
    else saveCart();
  }

  function renderCart(){
    cartItemsEl.innerHTML = '';
    if(cart.length === 0){
      cartItemsEl.innerHTML = '<p style="color:var(--muted)">Seu carrinho está vazio.</p>';
      cartTotalEl.textContent = '0.00';
      return;
    }
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.qty;
      const el = document.createElement('div');
      el.className = 'cart-item';
      el.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div style="flex:1;">
          <h5>${item.name}</h5>
          <small>R$ ${formatCurrency(item.price)} × <input type="number" min="1" value="${item.qty}" data-id="${item.id}" class="qty-input" style="width:64px;margin-left:6px"></small>
        </div>
        <div>
          <div style="text-align:right;font-weight:600">R$ ${formatCurrency(item.price * item.qty)}</div>
          <button class="btn" data-id="${item.id}" data-action="remove">Remover</button>
        </div>
      `;
      cartItemsEl.appendChild(el);
    });
    cartTotalEl.textContent = formatCurrency(total);
  }

  function openCart(){
    cartDrawer.classList.add('open');
    cartDrawer.setAttribute('aria-hidden','false');
  }

  function closeCart(){
    cartDrawer.classList.remove('open');
    cartDrawer.setAttribute('aria-hidden','true');
  }

  // Event delegations
  productsGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if(!btn) return;
    const id = btn.dataset.id;
    const action = btn.dataset.action;
    if(action === 'view'){
      const prod = products.find(p => p.id === id);
      openProductModal(prod);
    } else if(action === 'add'){
      addToCart(id, 1);
      openCart();
    }
  });

  // Modal events
  closeModalBtn?.addEventListener('click', () => {
    productModal.close?.();
  });

  modalContent.addEventListener('click', (e) => {
    const btn = e.target.closest('#modal-add');
    if(btn){
      const id = btn.dataset.id;
      addToCart(id, 1);
      productModal.close?.();
      openCart();
    }
    const closeAux = e.target.closest('#modal-close-aux');
    if(closeAux) productModal.close?.();
  });

  // Cart buttons
  openCartBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);

  cartItemsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if(!btn) return;
    const action = btn.dataset.action;
    const id = btn.dataset.id;
    if(action === 'remove') removeFromCart(id);
  });

  // Quantity change
  cartItemsEl.addEventListener('change', (e) => {
    const input = e.target.closest('.qty-input');
    if(!input) return;
    const id = input.dataset.id;
    const val = parseInt(input.value || '1', 10);
    changeQty(id, val);
  });

  clearCartBtn.addEventListener('click', () => {
    cart = [];
    saveCart();
  });

  checkoutBtn.addEventListener('click', () => {
    if(cart.length === 0){
      alert('Seu carrinho está vazio.');
      return;
    }
    // Simulação de checkout
    const name = prompt('Nome para o pedido:');
    if(!name) return;
    // Exibir resumo e limpar carrinho (simulado)
    let summary = `Pedido de ${name}\n\nItens:\n`;
    cart.forEach(it => summary += `${it.qty} x ${it.name} — R$ ${formatCurrency(it.price * it.qty)}\n`);
    summary += `\nTotal: R$ ${cartTotalEl.textContent}\n\n(Compra simulada — integrar gateway de pagamento para pedido real)`;
    alert(summary);
    cart = [];
    saveCart();
    closeCart();
  });

  // Contact form simple handler
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada (simulado). Obrigado pelo contato!');
    contactForm.reset();
  });

  // Inicialização
  renderProducts();
  renderCart();
  updateCartCount();

  // Data-binding para botões que aparecem dinamicamente (ex.: modal)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-id][data-action="add"]');
    if(btn && btn.dataset.id) addToCart(btn.dataset.id, 1);
  });

  // footer year
  document.getElementById('year').textContent = new Date().getFullYear();
});