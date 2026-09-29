const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ===== DATOS ===== */
const G = [
  { n: 'The Legend of Zelda', t: 'Aventura', d: 'Explora Hyrule, resuelve santuarios y empuña la Espada Maestra.', p: 79.99, img: 'img/videogame/zelda-tp.webp', k: '12.4k' },
  { n: 'Super Smash Bros.', t: 'Lucha', d: 'Combate de plataformas con leyendas de Nintendo.', p: 59.99, img: 'img/videogame/smash-bros.webp', k: '9.8k' },
  { n: 'R.E.P.O.', t: 'Cooperativo', d: 'Recupera objetos con tu equipo sin despertar a los monstruos.', p: 4.99, img: 'img/videogame/repo.webp', k: '9.1k' },
  { n: 'Super Mario', t: 'Plataformas', d: 'Saltos clásicos y mundos llenos de color.', p: 69.99, img: 'img/videogame/super-mario.webp', k: '6.3k' },
  { n: 'kirby y la tierra olvidada', t: 'Aventura', d: 'Kirby explora un mundo abandonado y devora lo que encuentre.', p: 59.99, img: 'img/videogame/kirby.webp', k: '5.2k' },
  { n: 'League of Legends', t: 'MOBA', d: 'Batallas 5 contra 5 con más de 160 campeones.', p: 0, img: 'img/videogame/lol.webp', k: '15.7k' },
  { n: 'Hollow Knight', t: 'Metroidvania', d: 'Desciende a un reino de insectos en ruinas y descubre sus secretos.', p: 14.99, img: 'img/videogame/hollow.webp', k: '8.6k' },
  { n: 'Celeste', t: 'Plataformas', d: 'Escala una montaña dura y enfrenta a tus propios miedos.', p: 19.99, img: 'img/videogame/celeste.webp', k: '7.4k' },
  { n: 'Hades', t: 'Roguelike', d: 'Escapa del inframundo en combates rápidos que nunca se repiten.', p: 24.99, img: 'img/videogame/hades.webp', k: '10.2k' },
  { n: 'Stardew Valley', t: 'Simulación', d: 'Cultiva, pesca y construye la granja de tus sueños.', p: 14.99, img: 'img/videogame/stardew.webp', k: '11.3k' }
];

const S = [
  { t: 'Hatreck', img: 'img/im-gil.webp', p: 'Portador de la marca dorada. El último cruzado de una orden olvidada, Con la marca triangular brillando en su frente y una prótesis dorada que cubre su ojo derecho, este guerrero de melena oscura y mirada implacable avanza sin retroceder.' },
  { t: 'Rayne', img: 'img/im-nahun.webp', p: 'Portador del timón carmesí. El capitán de una tripulación maldita. Con su brazo derecho hecho de cristal rojo y marcas cibernéticas surcando su rostro, este pirata de sonrisa pícara y sombrero emplumado navega mares que no aparecen en ningún mapa. ' },
  { t: 'DarkCenys', img: 'img/im-cindy.webp', p: 'Cazadora de cristales, con sus manos de cristal de Moonstone y las hortensias que adornan su cabello, canaliza la "Cristalización Cuántica": la habilidad de convertir cualquier ataque, enemigo o emoción en cristal puro.' },
  { t: 'Yarizua', img: 'img/im-yari.webp', p: 'Portadora de la energía azul. La exploradora de un mundo lleno de anomalías. Con gafas de alta tecnología, un cuerpo surcado por circuitos de energía azul y una rana cibernética como única compañera, esta investigadora de mirada curiosa no teme adentrarse en lo prohibido.' },
  { t: 'Mazino', img: 'img/im-jona.webp', p: 'Portador del fragmento Cianita. Explorador de un mundo en ruinas, con marcas cibernéticas verdes recorriendo su rostro y una mirada tan afilada como el acero, este viajero de piel oscura carga una espada colosal al hombro y una mochila llena de secretos.' }
];

const C = [
  { n: 'Nintendo Switch', d: 'Híbrida: en la tele o en tus manos.', img: 'img/consola/nintendo.webp' },
  { n: 'PlayStation 5', d: '4K, SSD ultrarrápido y DualSense.', img: 'img/consola/ps5.webp' },
  { n: 'Xbox Series X', d: 'Potencia bruta y Game Pass.', img: 'img/consola/xbox.webp' },
  { n: 'PC Gamer', d: 'Sin límites: mods, Steam y más.', img: 'img/consola/pc-gm.webp' }
];

const IC = {
  dl: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0-4-4m4 4 4-4M4 20h16"/></svg>',
  cart: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.5L21 7H6"/></svg>'
};

const money = p => p ? '$' + p.toFixed(2) : 'Gratis';

function toast(m) {
  let t = $('.toast') || document.body.appendChild(
    Object.assign(document.createElement('div'), { className: 'toast' })
  );
  t.textContent = m;
  t.classList.add('show');
  clearTimeout(t.h);
  t.h = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ===== Animaciones ===== */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 });
const reveal = () => $$('.rv:not(.in)').forEach(e => io.observe(e));

/* ===== Store — TODO defensivo ===== */
const store = {
  _read(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null || raw === undefined) return fallback;
      const parsed = JSON.parse(raw);
      return parsed === null ? fallback : parsed;
    } catch { return fallback; }
  },
  _write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { }
  },

  /* ---- Carrito ---- */
  cart() { const v = this._read('carrito', []); return Array.isArray(v) ? v : []; },
  owned() { const v = this._read('compras', []); return Array.isArray(v) ? v : []; },

  addCart(name) {
    const c = this.cart();
    if (c.includes(name)) return false;
    this._write('carrito', [...c, name]);
    return true;
  },
  removeCart(name) {
    this._write('carrito', this.cart().filter(x => x !== name));
  },
  addOwned(name) {
    const o = this.owned();
    if (o.includes(name)) return false;
    this._write('compras', [...o, name]);
    return true;
  },
  buyCart() {
    const c = this.cart();

    if (!c.length) {
      return {
        ok: false,
        reason: 'empty'
      };
    }

    const games = c
      .map(n => G.find(g => g.n === n))
      .filter(Boolean);

    const pendientes = games.filter(g => !this.isOwned(g.n));
    const total = pendientes.reduce((sum, g) => sum + g.p, 0);

    // Verificar saldo ANTES de modificar cualquier cosa
    if (!this.puedePagar(total)) {
      return {
        ok: false,
        reason: 'nofunds',
        total
      };
    }

    // Descontar dinero únicamente al realizar la compra
    this.gastar(total);

    // Pasar los juegos a comprados
    pendientes.forEach(g => this.addOwned(g.n));

    // Vaciar carrito
    this._write('carrito', []);

    return {
      ok: true,
      total,
      games: pendientes
    };
  },
  isOwned(name) { return this.owned().includes(name); },
  inCart(name) { return this.cart().includes(name); },

  /* ---- Saldo ---- */
  SALDO_INICIAL: 1000,
  saldo() {
    const raw = localStorage.getItem('saldo');
    if (raw === null || raw === undefined || raw === 'null') {
      this._write('saldo', this.SALDO_INICIAL);
      return this.SALDO_INICIAL;
    }
    try {
      const n = JSON.parse(raw);
      return (typeof n === 'number' && isFinite(n)) ? n : this.SALDO_INICIAL;
    } catch { return this.SALDO_INICIAL; }
  },
  setSaldo(v) {
    const n = Math.max(0, Math.round(v * 100) / 100);
    this._write('saldo', n);
    return n;
  },
  gastar(monto) {
    const s = this.saldo();
    if (monto > s) return false;
    this.setSaldo(s - monto);
    return true;
  },
  puedePagar(monto) { return this.saldo() >= monto; },
  resetSaldo() { this.setSaldo(this.SALDO_INICIAL); },

  /* ---- Descargas ---- */
  downloaded() { const v = this._read('descargas', []); return Array.isArray(v) ? v : []; },
  isDownloaded(name) { return this.downloaded().includes(name); },
  addDownloaded(name) {
    const d = this.downloaded();
    if (d.includes(name)) return false;
    this._write('descargas', [...d, name]);
    return true;
  }
};

/* ===== Helpers globales ===== */
window.__refreshGame = () => { };
window.__refreshCart = () => { };
window.__refreshSaldo = () => { };
let openGame = () => { };
let openCart = () => { };

/* ===== Descargar — ÚNICA puerta de entrada ===== */
function downloadGame(g) {
  if (!g) return;

  /* 🔒 Verificación dura: si es de pago y NO está comprado, no descargar */
  if (g.p > 0 && !store.isOwned(g.n)) {
    toast('Debes comprar ' + g.n + ' primero');
    return;
  }

  /* 🔒 Si ya está descargado, no hacer nada */
  if (store.isDownloaded(g.n)) {
    toast(g.n + ' ya está descargado');
    return;
  }

  toast('Descargando ' + g.n + '...');
  setTimeout(() => {
    store.addDownloaded(g.n);
    toast(g.n + ' descargado correctamente');
    window.__refreshGame();
  }, 1800);
}

/* ============================================================
   MODAL 1 · DETALLE DEL JUEGO
   ============================================================ */
function gameModal() {

  const m = document.body.appendChild(
    Object.assign(document.createElement('div'), {
      className: 'modal game',
      innerHTML: `
        <div class="panel" role="dialog" aria-modal="true" aria-label="Detalle del juego">

          <header>
            <span class="tag"><i>02</i><b>JUEGO</b></span>
            <button class="x" aria-label="Cerrar">✕</button>
          </header>

          <section class="gdetail">
            <div class="gcover">
              <i class="gimg"></i>
            </div>

            <div class="ginfo">
              <small class="ggen"></small>
              <h2 class="gnm"></h2>
              <p class="gds"></p>
              <b class="gprice"></b>
            </div>
          </section>

          <div class="gacts">

            <button class="buy gback" type="button">
              Volver
            </button>

            <button class="buy gcart" type="button">
              + Agregar al carrito
            </button>

            <button class="buy gpay" type="button">
            </button>

          </div>

        </div>
      `
    })
  );

  const btnCart = $('.gcart', m);
  const btnPay = $('.gpay', m);

  let cur = null;

  /* ============================================================
     PINTAR ESTADO ACTUAL DEL JUEGO
     ============================================================ */

  const paint = () => {

    if (!cur) return;

    /* --------------------------------------------
       LIMPIAR ESTADO ANTERIOR
    -------------------------------------------- */

    btnCart.disabled = false;
    btnCart.textContent = '+ Agregar al carrito';
    btnCart.style.display = '';

    btnPay.disabled = false;
    btnPay.textContent = '';
    btnPay.style.display = 'none';
    btnPay.removeAttribute('data-mode');

    /* --------------------------------------------
       ESTADO ACTUAL
    -------------------------------------------- */

    const gratis = cur.p === 0;
    const owned = store.isOwned(cur.n);
    const inCart = store.inCart(cur.n);
    const downloaded = store.isDownloaded(cur.n);

    /* ============================================================
       1. JUEGO GRATIS
       ============================================================ */

    if (gratis) {

      btnCart.style.display = 'none';
      btnPay.style.display = '';

      if (downloaded) {

        btnPay.textContent = '✓ Descargado';
        btnPay.disabled = true;
        btnPay.dataset.mode = 'done';

      } else {

        btnPay.textContent = '↓ Descargar gratis';
        btnPay.disabled = false;
        btnPay.dataset.mode = 'download';

      }

      return;
    }

    /* ============================================================
       2. JUEGO YA COMPRADO
       ============================================================ */

    if (owned) {

      btnCart.style.display = 'none';
      btnPay.style.display = '';

      if (downloaded) {

        btnPay.textContent = '✓ Descargado';
        btnPay.disabled = true;
        btnPay.dataset.mode = 'done';

      } else {

        btnPay.textContent = '↓ Descargar';
        btnPay.disabled = false;
        btnPay.dataset.mode = 'download';

      }

      return;
    }

    /* ============================================================
       3. JUEGO NO COMPRADO
       ============================================================ */

    btnPay.style.display = 'none';

    /* Está en carrito */
    if (inCart) {

      btnCart.textContent = '✓ En carrito';
      btnCart.disabled = true;

      return;
    }

    /* No está en carrito */
    btnCart.textContent = '+ Agregar al carrito';
    btnCart.disabled = false;
  };


  /* ============================================================
     CERRAR MODAL
     ============================================================ */

  const close = () => {

    m.classList.remove('open');
    document.body.style.overflow = '';

  };


  /* ============================================================
     ABRIR JUEGO
     ============================================================ */

  const open = g => {

    cur = g;

    if (!g) return;

    $('.gimg', m).style.backgroundImage =
      `url('${g.img}')`;

    $('.ggen', m).textContent = g.t;
    $('.gnm', m).textContent = g.n;
    $('.gds', m).textContent = g.d;
    $('.gprice', m).textContent = money(g.p);

    paint();

    m.classList.add('open');
    document.body.style.overflow = 'hidden';
  };


  /* ============================================================
     BOTÓN DESCARGAR / DESCARGAR GRATIS
     ============================================================ */

  btnPay.onclick = () => {

    if (!cur) return;

    const mode = btnPay.dataset.mode;

    /* --------------------------------------------
       DESCARGAR
    -------------------------------------------- */

    if (mode === 'download') {

      /* Juego de pago: debe estar comprado */
      if (cur.p > 0 && !store.isOwned(cur.n)) {

        toast('Debes comprar ' + cur.n + ' primero');

        paint();

        return;
      }

      /* Ya descargado */
      if (store.isDownloaded(cur.n)) {

        toast(cur.n + ' ya está descargado');

        paint();

        return;
      }

      downloadGame(cur);

      return;
    }

    /* --------------------------------------------
       YA DESCARGADO
    -------------------------------------------- */

    if (mode === 'done') {
      return;
    }

  };


  /* ============================================================
     AGREGAR AL CARRITO
     ============================================================ */

  btnCart.onclick = () => {

    if (!cur) return;

    /* --------------------------------------------
       SEGURIDAD:
       si ya está comprado, no puede volver al carrito
    -------------------------------------------- */

    if (store.isOwned(cur.n)) {

      paint();

      return;
    }

    /* --------------------------------------------
       SI YA ESTÁ EN CARRITO
    -------------------------------------------- */

    if (store.inCart(cur.n)) {

      toast(cur.n + ' ya está en el carrito');

      paint();

      return;
    }

    /* --------------------------------------------
       AGREGAR
       NO SE DESCUENTA SALDO AQUÍ
    -------------------------------------------- */

    store.addCart(cur.n);

    toast(cur.n + ' añadido al carrito');

    paint();

    window.__refreshCart();
  };


  /* ============================================================
     CERRAR
     ============================================================ */

  $('.gback', m).onclick = close;

  $('.x', m).onclick = close;

  m.onclick = e => {

    if (e.target === m) {
      close();
    }

  };


  document.addEventListener('keydown', e => {

    if (
      e.key === 'Escape' &&
      m.classList.contains('open')
    ) {
      close();
    }

  });


  /* ============================================================
     EXPONER
     ============================================================ */

  openGame = open;

  window.__refreshGame = paint;
}

/* ============================================================
   MODAL 2 · CARRITO
   ============================================================ */
function cartModal() {

  const m = document.body.appendChild(
    Object.assign(document.createElement('div'), {
      className: 'modal shop',
      innerHTML: `
        <div class="panel" role="dialog" aria-modal="true" aria-label="Carrito">
          <header>
            <span class="tag"><i>01</i><b>TIENDA</b></span>
            <button class="x" aria-label="Cerrar">✕</button>
          </header>

          <section class="cart">
            <div class="ch">
              <span>CARRITO</span>
              <span class="cnt">00</span>
            </div>

            <ul class="list"></ul>

            <div class="tot">
              <span>TOTAL</span>
              <b class="total">$0.00</b>
            </div>

            <button class="buy checkout" type="button">Comprar carrito</button>
          </section>
        </div>
      `
    })
  );

  const cartBtn = $('.cartbtn');
  const badge = cartBtn.appendChild(
    Object.assign(document.createElement('i'), { className: 'badge' })
  );

  /* --- Saldo --- */
  const saldoBox = document.createElement('span');
  saldoBox.className = 'saldo';
  saldoBox.innerHTML = `<b>${money(store.saldo())}</b>`;
  cartBtn.parentElement.insertBefore(saldoBox, cartBtn);

  const paintSaldo = () => {
    $('b', saldoBox).textContent = money(store.saldo());
  };
  window.__refreshSaldo = paintSaldo;

  /* --- Render lista carrito --- */
  const render = () => {
    const cart = store.cart();
    const games = cart.map(n => G.find(g => g.n === n)).filter(Boolean);

    $('.list', m).innerHTML = games.length
      ? games.map((g, i) => `
          <li>
            <em>${String(i + 1).padStart(2, '0')}</em>
            <span>${g.n}<small>${g.t}</small></span>
            <b>${money(g.p)}</b>
            <button data-n="${g.n}" aria-label="Quitar ${g.n}" type="button">✕</button>
          </li>
        `).join('')
      : `<li class="empty">Sin juegos en el carrito</li>`;

    $('.cnt', m).textContent = String(games.length).padStart(2, '0');

    const total = games.reduce((a, g) => a + g.p, 0);
    $('.total', m).textContent = '$' + total.toFixed(2);

    badge.textContent = games.length;
    badge.classList.toggle('show', games.length > 0);

    $$('.list button', m).forEach(b => {
      b.onclick = () => {
        store.removeCart(b.dataset.n);
        render();
        window.__refreshGame();
      };
    });

    $('.checkout', m).disabled = games.length === 0;

    paintSaldo();
  };

  const close = () => {
    m.classList.remove('open');
    document.body.style.overflow = '';
  };

  const open = () => {
    render();
    m.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  /* --- Checkout --- */
  $('.checkout', m).onclick = () => {

    const cart = store.cart();

    if (!cart.length) {
      toast('El carrito está vacío');
      return;
    }

    const result = store.buyCart();

    // Saldo insuficiente
    if (!result.ok) {

      if (result.reason === 'nofunds') {
        toast(
          'Saldo insuficiente · Total: ' +
          money(result.total) +
          ' · Saldo: ' +
          money(store.saldo())
        );
      }

      return;
    }

    // Compra realizada correctamente
    render();

    toast(
      'Compra realizada · Saldo: ' +
      money(store.saldo())
    );

    window.__refreshGame();
    window.__refreshSaldo();
  };

  $('.x', m).onclick = close;
  m.onclick = e => { if (e.target === m) close(); };
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && m.classList.contains('open')) close();
  });

  cartBtn.onclick = e => {
    e.preventDefault();
    open();
  };

  openCart = open;
  window.__refreshCart = render;
  render();
}

/* ===== Shell ===== */
function shell() {
  const p = document.body.dataset.p;
  const cur = t => (p == 'home' && t == 'Inicio') || (p == 'list' && t == 'Videojuegos')
    ? ' aria-current="page"' : '';
  const L = p == 'home'
    ? [['#inicio', 'Inicio'], ['#juegos', 'Videojuegos'], ['#consolas', 'Consolas']]
    : [['index.html', 'Inicio'], ['videojuegos.html', 'Videojuegos'], ['index.html#consolas', 'Consolas']];

  $('.tabL').innerHTML = L.map(([h, t]) => `<a href="${h}"${cur(t)}>${t}</a>`).join('');
  $('.tabR').innerHTML = `<button class="dl" type="button"><span>Descarga VIDEOJUEGO</span></button>`;

  $('.dl').onclick = e => {
    const b = e.currentTarget, l = $('span', b);
    if (b.classList.contains('busy')) return;
    b.classList.add('busy');
    let v = 0;
    const h = setInterval(() => {
      v = Math.min(100, v + Math.random() * 9 + 2);
      b.style.setProperty('--p', v / 100);
      l.textContent = 'Descargando ' + Math.floor(v) + '%';
      if (v >= 100) {
        clearInterval(h);
        l.textContent = 'Completado';
        toast('Descarga completada (demo)');
        setTimeout(() => {
          b.classList.remove('busy');
          l.textContent = 'Descarga VIDEOJUEGO';
        }, 1400);
      }
    }, 110);
  };

  /* ⚠️ Inyectar botón carrito ANTES de inicializar modales */
  $('.cut').innerHTML =
    `<button class="cartbtn" type="button" data-tip="Tienda" aria-label="Tienda">${IC.cart}</button>`;

  $('footer').textContent = '© 2026 VIDEOJUEGO · Proyecto de demostración';

  cartModal();
  gameModal();
}

/* ===== Tilt ===== */
function tilt(el) {
  el.onmousemove = e => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const s = el.style;
    s.setProperty('--ry', (x - .5) * 12 + 'deg');
    s.setProperty('--rx', (.5 - y) * 12 + 'deg');
  };
  el.onmouseleave = () => {
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };
}

/* ===== Cards ===== */
function cards(box, list) {
  box.innerHTML = list.map((g, i) => `
    <div class="card rv" tabindex="0" style="--i:${i}">
      <div class="face">
        <img src="${g.img}" alt="${g.n}" loading="lazy">
        <b class="ttl">${g.n}</b>
        <div class="info">
          <p>${g.d}</p>
          <span class="price">${money(g.p)}</span>
        </div>
      </div>
    </div>
  `).join('') || '<p>No hay resultados. Prueba con otro nombre.</p>';

  $$('.card', box).forEach((c, i) => {
    tilt(c);
    c.onclick = () => openGame(list[i]);
    c.onkeydown = e => { if (e.key === 'Enter') openGame(list[i]); };
  });

  reveal();
}

/* ===== Home ===== */
function home() {
  $('.imgs').innerHTML = S.map(s => `<div class="sl"><img src="${s.img}" alt="${s.t}"></div>`).join('');
  $('.txts').innerHTML = S.map(s => `<article class="txt"><h2>${s.t}</h2><p>${s.p}</p><a class="more" href="videojuegos.html">Leer más</a></article>`).join('');
  $('.dots').innerHTML = S.map(s => `<button class="dot" aria-label="${s.t}" type="button"><i></i></button>`).join('');

  const SL = $$('.sl'), T = $$('.txt'), B = $$('.dot'), hero = $('.hero'), D = 6000;
  let cur = 0, t = 0, hov = false, last = performance.now();

  function go(n) {
    cur = (n + S.length) % S.length;
    t = 0;
    [SL, T].forEach(a => a.forEach((e, k) => e.classList.toggle('on', k == cur)));
    B.forEach((d, k) => {
      d.classList.toggle('on', k == cur);
      d.firstChild.style.setProperty('--p', k < cur ? 1 : 0);
    });
  }

  B.forEach((d, k) => d.onclick = () => go(k));
  hero.onmouseenter = () => hov = true;
  hero.onmouseleave = () => {
    hov = false;
    hero.style.setProperty('--px', 0);
    hero.style.setProperty('--py', 0);
  };
  hero.onmousemove = e => {
    const r = hero.getBoundingClientRect();
    hero.style.setProperty('--px', (e.clientX - r.left) / r.width - .5);
    hero.style.setProperty('--py', (e.clientY - r.top) / r.height - .5);
  };
  document.addEventListener('keydown', e => {
    if (e.key == 'ArrowRight') go(cur + 1);
    if (e.key == 'ArrowLeft') go(cur - 1);
  });

  (function loop(now) {
    const dt = Math.min(now - last, 100);
    last = now;
    if (!hov) {
      t += dt;
      if (t >= D) go(cur + 1);
      B[cur].firstChild.style.setProperty('--p', Math.min(t / D, 1));
    }
    requestAnimationFrame(loop);
  })(last);

  go(0);
  cards($('.grid'), G.slice(0, 6));

  $('.recent').innerHTML = [...G]
    .sort((a, b) => parseFloat(b.k) - parseFloat(a.k))
    .map(g => `
      <li tabindex="0" data-q="${g.n}">
        <img src="${g.img}" alt="${g.n}">
        <div class="recent-info">
          <b>${g.n}</b>
          <small>${g.k}</small>
        </div>
      </li>
    `).join('');

  $$('.recent li').forEach(li => {
    li.onclick = () => {
      const g = G.find(x => x.n === li.dataset.q);
      if (g) openGame(g);
    };
  });

  $('.cons').innerHTML = C.map((c, i) =>
    `<div class="con rv" style="--i:${i}"><img src="${c.img}" alt="${c.n}" onerror="this.remove()"><h3>${c.n}</h3><p>${c.d}</p></div>`
  ).join('');

  reveal();

  const so = new IntersectionObserver(es => es.forEach(e => e.isIntersecting &&
    $$('.tabL a').forEach(a => a.toggleAttribute('aria-current', a.getAttribute('href') == '#' + e.target.id))
  ), { rootMargin: '-40% 0px -55% 0px' });

  ['inicio', 'juegos', 'consolas'].forEach(id => so.observe($('#' + id)));
}

/* ===== Lista ===== */
function list() {
  const inp = $('.search');
  const T = ['Todos', ...new Set(G.map(g => g.t))];
  let f = 'Todos';

  $('.chips').innerHTML = T.map(t => `<button class="chip ${t == f ? 'on' : ''}" type="button">${t}</button>`).join('');

  const draw = () => cards($('.grid'), G.filter(g =>
    (f == 'Todos' || g.t == f) &&
    g.n.toLowerCase().includes(inp.value.toLowerCase())
  ));

  $$('.chip').forEach(b => b.onclick = () => {
    f = b.textContent;
    $$('.chip').forEach(x => x.classList.toggle('on', x == b));
    draw();
  });

  inp.oninput = draw;
  draw();
}

/* ===== Init ===== */
shell();
({ home, list })[document.body.dataset.p]();