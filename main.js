const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
/* ===== DATOS · pon tus imágenes en estas rutas ===== */
const G = [
  { n: 'The Legend of Zelda', t: 'Aventura', d: 'Explora Hyrule, resuelve santuarios y empuña la Espada Maestra.', p: 79.99, img: 'img/videogame/zelda-tp.webp', k: '12.4k' },
  { n: 'Super Smash Bros.', t: 'Lucha', d: 'Combate de plataformas con leyendas de Nintendo.', p: 59.99, img: 'img/videogame/smash-bros.webp', k: '9.8k' },
  { n: 'R.E.P.O.', t: 'Cooperativo', d: 'Recupera objetos con tu equipo sin despertar a los monstruos.', p: 4.99, img: 'img/videogame/repo.webp', k: '9.1k' },
  { n: 'Super Mario', t: 'Plataformas ', d: 'Saltos clásicos y mundos llenos de color.', p: 69.99, img: 'img/videogame/super-mario.webp', k: '6.3k' },
  { n: 'kirby y la tierra olvidada', t: 'Aventura', d: 'Kirby explora un mundo abandonado y devora lo que encuentre.', p: 59.99, img: 'img/videogame/kirby.webp', k: '5.2k' },
  { n: 'League of Legends', t: 'MOBA', d: 'Batallas 5 contra 5 con más de 160 campeones.', p: 0, img: 'img/videogame/lol.webp', k: '15.7k' },
  { n: 'Hollow Knight', t: 'Metroidvania', d: 'Desciende a un reino de insectos en ruinas y descubre sus secretos.', p: 14.99, img: 'img/videogame/hollow.webp', k: '8.6k' },
  { n: 'Celeste', t: 'Plataformas', d: 'Escala una montaña dura y enfrenta a tus propios miedos.', p: 19.99, img: 'img/videogame/celeste.webp', k: '7.4k' },
  { n: 'Hades', t: 'Roguelike', d: 'Escapa del inframundo en combates rápidos que nunca se repiten.', p: 24.99, img: 'img/videogame/hades.webp', k: '10.2k' },
  { n: 'Stardew Valley', t: 'Simulación', d: 'Cultiva, pesca y construye la granja de tus sueños.', p: 14.99, img: 'img/videogame/stardew.webp', k: '11.3k' }];
const S = [
  { t: 'Hatreck', img: 'img/im-gil.webp', p: 'Portador de la marca dorada. Es el último cruzado de una orden olvidada. Con la marca triangular brillando en su frente y una prótesis dorada que cubre su ojo derecho, este guerrero de melena oscura y mirada implacable avanza sin retroceder. ' },
  { t: 'Rayne', img: 'img/im-nahun.webp', p: 'Portador del timón carmesí. El capitán de una tripulación maldita. Con su brazo derecho hecho de cristal rojo y marcas cibernéticas surcando su rostro, este pirata de sonrisa pícara y sombrero emplumado navega mares que no aparecen en ningún mapa.' },
  { t: 'DarkCenys', img: 'img/im-cindy.webp', p: 'Cazadora de cristales Con sus manos de Moonstone y las hortensias que adornan su cabello, canaliza la "Cristalización Cuántica": la habilidad de convertir cualquier ataque, enemigo o emoción en cristal puro. Fría, calculadora y letalmente protectora, no lucha por gloria, sino por contener una amenaza que podría quebrar la realidad misma' },
  { t: 'Yarizua', img: 'img/im-yari.webp', p: 'Portadora de la energía azul. Es la exploradora de un mundo lleno de anomalías. Con gafas de alta tecnología, un cuerpo surcado por circuitos de energía azul y una rana cibernética como única compañera, esta investigadora de mirada curiosa no teme adentrarse en lo prohibido.' },
  { t: 'Mazino', img: 'img/im-jona.webp', p: 'Portador del fragmento Cianita. Explorador de un mundo en ruinas. Con marcas cibernéticas verdes recorriendo su rostro y una mirada tan afilada como el acero, este viajero de piel oscura carga una espada colosal al hombro y una mochila llena de secretos.  ' }];
const C = [
  { n: 'Nintendo Switch', d: 'Híbrida: en la tele o en tus manos.', img: 'img/consola/nintendo.webp' },
  { n: 'PlayStation 5', d: '4K, SSD ultrarrápido y DualSense.', img: 'img/consola/ps5.webp' },
  { n: 'Xbox Series X', d: 'Potencia bruta y Game Pass.', img: 'img/consola/xbox.webp' },
  { n: 'PC Gamer', d: 'Sin límites: mods, Steam y más.', img: 'img/consola/pc-gm.webp' }];
const IC = {
  dl: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0-4-4m4 4 4-4M4 20h16"/></svg>',
  cart: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.5L21 7H6"/></svg>'
};
const money = p => p ? '$' + p.toFixed(2) : 'Gratis';
function toast(m) { let t = $('.toast') || document.body.appendChild(Object.assign(document.createElement('div'), { className: 'toast' })); t.textContent = m; t.classList.add('show'); clearTimeout(t.h); t.h = setTimeout(() => t.classList.remove('show'), 2200) }
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: .12 });
const reveal = () => $$('.rv:not(.in)').forEach(e => io.observe(e));

/* ===== Tienda: compra individual (solo en videojuegos.html) ===== */
let openShop = () => { };
const store = {
  get() { try { return JSON.parse(localStorage.getItem('compras')) || [] } catch (e) { return [] } },
  set(v) { try { localStorage.setItem('compras', JSON.stringify(v)) } catch (e) { } }
};

function shopModal() {
  if (document.body.dataset.p != 'list') return;
  const m = document.body.appendChild(Object.assign(document.createElement('div'), {
    className: 'modal', innerHTML:
      `<div class="panel" role="dialog" aria-modal="true" aria-label="Tienda">
  <header><span class="tag"><i>01</i><b>TIENDA</b></span><button class="x" aria-label="Cerrar">✕</button></header>
  <section class="item">
    <div class="ph"><i class="sw"></i></div>
    <div class="meta"><small class="gen"></small><h2 class="nm"></h2><p class="ds"></p></div>
    <div class="row"><b class="sum"></b><div class="acts"><button class="buy cancel">Volver</button><button class="buy pay"></button></div></div>
  </section>
  <section class="cart">
    <div class="ch"><span>COMPRAS</span><span class="cnt"></span></div>
    <ul class="list"></ul>
    <div class="tot"><span>TOTAL</span><b class="total"></b></div>
  </section>
</div>`}));
  const cartBtn = $('.cartbtn'), badge = cartBtn.appendChild(Object.assign(document.createElement('i'), { className: 'badge' }));
  const owned = () => store.get().map(n => G.find(g => g.n == n)).filter(Boolean);
  let cur = null, last = null;

  const render = () => {
    const L = owned(), n = L.length;
    $('.list', m).innerHTML = n ? L.map((g, i) =>
      `<li class="${g.n == last ? 'hl' : ''}"><em>${String(i + 1).padStart(2, '0')}</em><span>${g.n}<small>${g.t}</small></span><b>${money(g.p)}</b><button data-n="${g.n}" aria-label="Quitar ${g.n}">✕</button></li>`).join('')
      : '<li class="empty">Sin compras todavía</li>';
    $('.cnt', m).textContent = String(n).padStart(2, '0');
    $('.total', m).textContent = money(L.reduce((a, g) => a + g.p, 0)) == 'Gratis' && !n ? '$0.00' : '$' + L.reduce((a, g) => a + g.p, 0).toFixed(2);
    badge.textContent = n; badge.classList.toggle('show', n > 0);
    $$('.list button', m).forEach(b => b.onclick = () => { store.set(store.get().filter(x => x != b.dataset.n)); last = null; render(); paintPay() });
  };
  const paintPay = () => {
    if (!cur) return;
    const pay = $('.pay', m), has = store.get().includes(cur.n);
    pay.textContent = has ? '✓ En compras' : (cur.p ? 'Comprar' : 'Obtener'); pay.disabled = has;
  };
  const close = () => { m.classList.remove('open'); document.body.style.overflow = '' };
  const open = g => {
    cur = g; m.classList.toggle('noitem', !g);
    if (g) {
      $('.sum', m).textContent = money(g.p); $('.gen', m).textContent = g.t;
      $('.sw', m).style.backgroundImage = `url('${g.img}')`; $('.nm', m).textContent = g.n; $('.ds', m).textContent = g.d;
      paintPay()
    }
    last = null; render(); m.classList.add('open'); document.body.style.overflow = 'hidden'
  };
  $('.pay', m).onclick = () => {
    if (!cur || store.get().includes(cur.n)) return;
    store.set([...store.get(), cur.n]); last = cur.n; toast(cur.n + ' añadido a tus compras'); render(); paintPay();
    $('.cart', m).scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  };
  $('.x', m).onclick = close; $('.cancel', m).onclick = close; m.onclick = e => { if (e.target == m) close() };
  document.addEventListener('keydown', e => e.key == 'Escape' && close());
  cartBtn.onclick = e => { e.preventDefault(); open(null) };
  openShop = open; render()
}



function shell() {
  const p = document.body.dataset.p, cur = t => (p == 'home' && t == 'Inicio') || (p == 'list' && t == 'Videojuegos') ? ' aria-current="page"' : '';
  const L = p == 'home' ? [['#inicio', 'Inicio'], ['#juegos', 'Videojuegos'], ['#consolas', 'Consolas']] : [['index.html', 'Inicio'], ['videojuegos.html', 'Videojuegos'], ['index.html#consolas', 'Consolas']];
  $('.tabL').innerHTML = L.map(([h, t]) => `<a href="${h}"${cur(t)}>${t}</a>`).join('');
  $('.tabR').innerHTML = `<button class="dl"><span>Descarga VIDEOJUEGO</span></button>`;
  $('.dl').onclick = e => {
    const b = e.currentTarget, l = $('span', b); if (b.classList.contains('busy')) return; b.classList.add('busy'); let v = 0;
    const h = setInterval(() => {
      v = Math.min(100, v + Math.random() * 9 + 2); b.style.setProperty('--p', v / 100); l.textContent = 'Descargando ' + Math.floor(v) + '%';
      if (v >= 100) { clearInterval(h); l.textContent = 'Completado'; toast('Descarga completada (demo)'); setTimeout(() => { b.classList.remove('busy'); l.textContent = 'Descarga VIDEOJUEGO' }, 1400) }
    }, 110)
  };
  $('.cut').innerHTML = `<a class="cartbtn" href="videojuegos.html" data-tip="Tienda" aria-label="Tienda">${IC.cart}</a>`;
  $('footer').textContent = '© 2026 VIDEOJUEGO · Proyecto de demostración'; shopModal()
}
function tilt(el) { el.onmousemove = e => { const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height, s = el.style; s.setProperty('--ry', (x - .5) * 12 + 'deg'); s.setProperty('--rx', (.5 - y) * 12 + 'deg') }; el.onmouseleave = () => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg') } }
function cards(box, list) {
  box.innerHTML = list.map((g, i) => `<div class="card rv" tabindex="0" style="--i:${i}"><div class="face"><img src="${g.img}" alt="${g.n}" loading="lazy" ><b class="ttl">${g.n}</b><div class="info"><p>${g.d}</p><span class="price">${money(g.p)}</span></div></div></div>`).join('') || '<p>No hay resultados. Prueba con otro nombre.</p>';
  const go = g => document.body.dataset.p == 'home' ? location.href = 'videojuegos.html?q=' + encodeURIComponent(g.n) : openShop(g);
  $$('.card', box).forEach((c, i) => { tilt(c); c.onclick = () => go(list[i]); c.onkeydown = e => e.key == 'Enter' && go(list[i]) }); reveal()
}

/* ===== Home + carousel (5 imágenes, sin orbes) ===== */
function home() {
  $('.imgs').innerHTML = S.map(s => `<div class="sl"><img src="${s.img}" alt="${s.t}"></div>`).join('');
  $('.txts').innerHTML = S.map(s => `<article class="txt"><h2>${s.t}</h2><p>${s.p}</p><a class="more" href="videojuegos.html">Leer más</a></article>`).join('');
  $('.dots').innerHTML = S.map(s => `<button class="dot" aria-label="${s.t}"><i></i></button>`).join('');
  const SL = $$('.sl'), T = $$('.txt'), B = $$('.dot'), hero = $('.hero'), D = 6000; let cur = 0, t = 0, hov = false, last = performance.now();
  function go(n) { cur = (n + S.length) % S.length; t = 0;[SL, T].forEach(a => a.forEach((e, k) => e.classList.toggle('on', k == cur))); B.forEach((d, k) => { d.classList.toggle('on', k == cur); d.firstChild.style.setProperty('--p', k < cur ? 1 : 0) }) }
  B.forEach((d, k) => d.onclick = () => go(k));
  hero.onmouseenter = () => hov = true; hero.onmouseleave = () => { hov = false; hero.style.setProperty('--px', 0); hero.style.setProperty('--py', 0) };
  hero.onmousemove = e => { const r = hero.getBoundingClientRect(); hero.style.setProperty('--px', (e.clientX - r.left) / r.width - .5); hero.style.setProperty('--py', (e.clientY - r.top) / r.height - .5) };
  document.addEventListener('keydown', e => { if (e.key == 'ArrowRight') go(cur + 1); if (e.key == 'ArrowLeft') go(cur - 1) });
  (function loop(now) { const dt = Math.min(now - last, 100); last = now; if (!hov) { t += dt; if (t >= D) go(cur + 1); B[cur].firstChild.style.setProperty('--p', Math.min(t / D, 1)) } requestAnimationFrame(loop) })(last);
  go(0); cards($('.grid'), G.slice(0, 6));
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
  $$('.recent li').forEach(li => li.onclick = () => location.href = 'videojuegos.html?q=' + encodeURIComponent(li.dataset.q));
  $('.cons').innerHTML = C.map((c, i) => `<div class="con rv" style="--i:${i}"><img src="${c.img}" alt="${c.n}" onerror="this.remove()"><h3>${c.n}</h3><p>${c.d}</p></div>`).join('');
  reveal();
  const so = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && $$('.tabL a').forEach(a => a.toggleAttribute('aria-current', a.getAttribute('href') == '#' + e.target.id))), { rootMargin: '-40% 0px -55% 0px' });
  ['inicio', 'juegos', 'consolas'].forEach(id => so.observe($('#' + id)))
}
function list() {
  const q = new URLSearchParams(location.search).get('q') || '', inp = $('.search'), T = ['Todos', ...new Set(G.map(g => g.t))]; let f = 'Todos';;
  $('.chips').innerHTML = T.map(t => `<button class="chip ${t == f ? 'on' : ''}">${t}</button>`).join('');
  const draw = () => cards($('.grid'), G.filter(g => (f == 'Todos' || g.t == f) && g.n.toLowerCase().includes(inp.value.toLowerCase())));
  $$('.chip').forEach(b => b.onclick = () => { f = b.textContent; $$('.chip').forEach(x => x.classList.toggle('on', x == b)); draw() });
  inp.oninput = draw; draw()
}
shell(); ({ home, list })[document.body.dataset.p]();