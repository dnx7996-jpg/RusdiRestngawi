  const nav = document.getElementById('siteNav');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 40){ nav.classList.add('scrolled'); }
    else{ nav.classList.remove('scrolled'); }
  });

  // Menu tabs (hanya ada di halaman yang punya menu)
  const tabs = document.querySelectorAll('.menu-tab');
  const panels = document.querySelectorAll('.menu-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected','true');
      const cat = tab.dataset.cat;
      panels.forEach(p => { p.hidden = p.dataset.panel !== cat; });
    });
  });

  // Gallery lightbox (hanya ada di halaman yang punya galeri)
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const tiles = document.querySelectorAll('.mosaic-grid .tile');

  function openLightbox(tile){
    const before = window.getComputedStyle(tile, '::before');
    let bgImage = before.backgroundImage;
    lightboxImg.src = bgImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
    lightboxCaption.textContent = tile.dataset.caption || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(){
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
  if(lightbox){
    tiles.forEach(tile => {
      tile.addEventListener('click', () => openLightbox(tile));
    });
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if(e.target === lightbox){ closeLightbox(); } });
    document.addEventListener('keydown', (e) => { if(e.key === 'Escape'){ closeLightbox(); } });
  }

  // Mobile menu toggle
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  burgerBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    burgerBtn.classList.toggle('open', isOpen);
    burgerBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      burgerBtn.classList.remove('open');
      burgerBtn.setAttribute('aria-expanded','false');
      document.body.style.overflow = '';
    });
  });

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 500){ backToTop.classList.add('show'); }
    else{ backToTop.classList.remove('show'); }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
