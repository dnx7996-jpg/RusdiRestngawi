<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Rusdi Restaurant — Meja, Api, Cerita</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Work+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root{
    --ink:#1C1A17;
    --cream:#F3ECDD;
    --burgundy:#6B1E23;
    --burgundy-light:#8C3A3F;
    --brass:#B8863B;
    --pine:#2F3B2C;
    --ivory:#EDE6D6;
    --line: rgba(237,230,214,0.16);
    --line-dark: rgba(28,26,23,0.14);
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{
    background:var(--cream);
    color:var(--ink);
    font-family:'Work Sans', sans-serif;
    -webkit-font-smoothing:antialiased;
  }
  @media (prefers-reduced-motion: reduce){
    *{animation-duration:0.001ms !important; animation-iteration-count:1 !important; transition-duration:0.001ms !important; scroll-behavior:auto !important;}
  }
  a{color:inherit; text-decoration:none;}
  .wrap{max-width:1180px; margin:0 auto; padding:0 32px;}
  h1,h2,h3{font-family:'Fraunces', serif; font-weight:600; letter-spacing:-0.01em;}
  .eyebrow{
    font-family:'IBM Plex Mono', monospace;
    font-size:12px;
    letter-spacing:0.16em;
    text-transform:uppercase;
    color:var(--brass);
  }
  ::selection{background:var(--brass); color:var(--ink);}
  :focus-visible{outline:2px solid var(--brass); outline-offset:3px;}

  /* NAV */
  header.nav{
    position:fixed; top:0; left:0; right:0; z-index:50;
    background:rgba(28,26,23,0.0);
    transition:background .35s ease, box-shadow .35s ease, padding .35s ease;
    padding:26px 0;
  }
  header.nav.scrolled{
    background:rgba(28,26,23,0.94);
    backdrop-filter:blur(6px);
    padding:14px 0;
    box-shadow:0 8px 24px rgba(0,0,0,0.18);
  }
  .nav-inner{display:flex; align-items:center; justify-content:space-between;}
  .brand{
    font-family:'Fraunces', serif;
    font-size:19px;
    font-weight:600;
    color:var(--ivory);
    letter-spacing:0.02em;
    display:flex; align-items:baseline; gap:8px;
  }
  .brand .dot{color:var(--brass);}
  nav.links{display:flex; gap:34px;}
  nav.links a{
    font-size:13px;
    color:var(--ivory);
    opacity:0.82;
    letter-spacing:0.03em;
    text-transform:uppercase;
    font-family:'IBM Plex Mono', monospace;
    font-size:11.5px;
    transition:opacity .2s;
  }
  nav.links a:hover{opacity:1;}
  .nav-cta{
    border:1px solid var(--brass);
    color:var(--brass);
    padding:9px 18px;
    font-family:'IBM Plex Mono', monospace;
    font-size:11.5px;
    letter-spacing:0.05em;
    text-transform:uppercase;
    transition:background .2s, color .2s;
  }
  .nav-cta:hover{background:var(--brass); color:var(--ink);}
  .burger{display:none; flex-direction:column; gap:5px; background:none; border:none; cursor:pointer; padding:6px; z-index:60; position:relative;}
  .burger span{width:22px; height:2px; background:var(--ivory); transition:transform .25s, opacity .25s;}
  .burger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
  .burger.open span:nth-child(2){opacity:0;}
  .burger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
  .mobile-menu{
    display:none;
    position:fixed; inset:0; z-index:45;
    background:rgba(20,18,15,0.98);
    flex-direction:column; align-items:center; justify-content:center; gap:28px;
    opacity:0; pointer-events:none; transition:opacity .3s ease;
  }
  .mobile-menu.open{opacity:1; pointer-events:auto;}
  .mobile-menu a{
    font-family:'Fraunces', serif; font-size:30px; color:var(--ivory);
  }
  .mobile-menu a:hover{color:var(--brass);}
  @media(max-width:920px){ .mobile-menu{display:flex;} }

  /* HERO */
  .hero{
    position:relative;
    min-height:100vh;
    display:flex;
    align-items:flex-end;
    background:
      radial-gradient(ellipse 90% 60% at 30% 0%, rgba(107,30,35,0.55), transparent 60%),
      linear-gradient(180deg, #14120F 0%, #1C1A17 55%, #221E19 100%);
    overflow:hidden;
    padding-bottom:100px;
  }
  .hero::before{
    content:"";
    position:absolute; inset:0;
    background-image:
      repeating-linear-gradient(115deg, rgba(184,134,59,0.05) 0px, rgba(184,134,59,0.05) 1px, transparent 1px, transparent 64px),
      repeating-linear-gradient(25deg, rgba(237,230,214,0.03) 0px, rgba(237,230,214,0.03) 1px, transparent 1px, transparent 46px);
    pointer-events:none;
  }
  .hero-ring{
    position:absolute;
    right:-180px; top:-160px;
    width:640px; height:640px;
    border-radius:50%;
    border:1px solid rgba(184,134,59,0.22);
  }
  .hero-ring::after{
    content:"";
    position:absolute; inset:60px;
    border-radius:50%;
    border:1px solid rgba(184,134,59,0.15);
  }
  .hero-inner{position:relative; z-index:2; width:100%;}
  .hero .eyebrow{color:var(--brass); margin-bottom:22px; display:flex; align-items:center; gap:12px;}
  .hero .eyebrow::before{content:""; width:34px; height:1px; background:var(--brass); display:inline-block;}
  .hero h1{
    color:var(--ivory);
    font-size:clamp(48px, 8vw, 104px);
    line-height:0.98;
    max-width:920px;
  }
  .hero h1 em{
    font-style:italic;
    font-weight:500;
    color:var(--brass);
  }
  .hero-sub{
    color:rgba(237,230,214,0.72);
    font-size:17px;
    max-width:460px;
    margin-top:26px;
    line-height:1.6;
  }
  .hero-actions{display:flex; gap:16px; margin-top:44px; flex-wrap:wrap; align-items:center;}
  .btn-solid{
    background:var(--brass); color:var(--ink);
    padding:15px 30px;
    font-family:'IBM Plex Mono', monospace;
    font-size:12.5px; letter-spacing:0.05em; text-transform:uppercase;
    border:1px solid var(--brass);
    transition:transform .2s, background .2s;
    display:inline-block;
  }
  .btn-solid:hover{background:#cf9a49; transform:translateY(-2px);}
  .btn-ghost{
    color:var(--ivory);
    padding:15px 6px;
    font-family:'IBM Plex Mono', monospace;
    font-size:12.5px; letter-spacing:0.05em; text-transform:uppercase;
    border-bottom:1px solid rgba(237,230,214,0.4);
    transition:border-color .2s;
  }
  .btn-ghost:hover{border-color:var(--brass); color:var(--brass);}
  .hero-meta{
    position:absolute; right:32px; bottom:44px; z-index:2;
    text-align:right; color:rgba(237,230,214,0.55);
    font-family:'IBM Plex Mono', monospace; font-size:11px;
    display:none;
  }
  @media(min-width:900px){.hero-meta{display:block;}}

  /* MARQUEE STRIP */
  .strip{
    background:var(--ink);
    border-top:1px solid var(--line);
    border-bottom:1px solid var(--line);
    overflow:hidden;
    padding:16px 0;
  }
  .strip-track{
    display:flex; gap:48px; white-space:nowrap;
    animation:marquee 28s linear infinite;
    width:max-content;
  }
  @keyframes marquee{from{transform:translateX(0);} to{transform:translateX(-50%);}}
  .strip-track span{
    font-family:'Fraunces', serif; font-style:italic;
    font-size:15px; color:rgba(237,230,214,0.55);
    display:flex; align-items:center; gap:48px;
  }
  .strip-track span b{color:var(--brass); font-style:normal; font-family:'IBM Plex Mono', monospace; font-size:11px; letter-spacing:0.1em;}

  section{padding:120px 0;}
  .section-head{
    display:grid; grid-template-columns:1fr 1fr; gap:40px;
    margin-bottom:64px; align-items:end;
  }
  .section-head h2{font-size:clamp(32px, 4vw, 48px); line-height:1.05;}
  .section-head p{color:#4a463e; font-size:15px; line-height:1.7; max-width:380px;}

  /* ABOUT */
  .about{background:var(--cream);}
  .about-grid{display:grid; grid-template-columns:0.9fr 1.1fr; gap:64px; align-items:center;}
  .about-visual{
    position:relative; aspect-ratio:4/5;
    background:var(--pine);
    border-radius:2px;
    display:flex; align-items:center; justify-content:center;
    overflow:hidden;
  }
  .about-visual::before{
    content:""; position:absolute; inset:0;
    background:
      repeating-linear-gradient(45deg, rgba(184,134,59,0.10) 0 2px, transparent 2px 26px);
  }
  .about-visual .glyph{
    font-family:'Fraunces', serif; font-style:italic; font-weight:500;
    color:rgba(237,230,214,0.9); font-size:26px; text-align:center;
    line-height:1.5; position:relative; z-index:1; padding:40px;
  }
  .about-visual .glyph .big{
    display:block; font-size:80px; font-style:normal; color:var(--brass); line-height:1;
    margin-bottom:14px;
  }
  .about-text p{font-size:16.5px; line-height:1.8; color:#3a362f; margin-bottom:20px; max-width:520px;}
  .about-stats{display:flex; gap:40px; margin-top:40px; border-top:1px solid var(--line-dark); padding-top:32px;}
  .about-stats div b{font-family:'Fraunces', serif; font-size:34px; display:block; color:var(--burgundy);}
  .about-stats div span{font-family:'IBM Plex Mono', monospace; font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:#6b665a;}

  /* MENU */
  .menu{background:var(--ink); color:var(--ivory);}
  .menu .eyebrow{color:var(--brass);}
  .menu .section-head p{color:rgba(237,230,214,0.6);}
  .menu-tabs{display:flex; gap:10px; margin-bottom:48px; flex-wrap:wrap;}
  .menu-tab{
    font-family:'IBM Plex Mono', monospace; font-size:11.5px; text-transform:uppercase; letter-spacing:0.05em;
    padding:9px 16px; border:1px solid var(--line); color:rgba(237,230,214,0.6);
    background:none; cursor:pointer; transition:background .2s, color .2s, border-color .2s;
  }
  .menu-tab:hover{color:var(--ivory); border-color:rgba(237,230,214,0.4);}
  .menu-tab.active{border-color:var(--brass); color:var(--brass);}
  .menu-grid{display:block;}
  .menu-panel{
    display:grid; grid-template-columns:1fr 1fr; gap:0 64px;
    animation:fadeIn .35s ease;
  }
  .menu-panel[hidden]{display:none;}
  @keyframes fadeIn{from{opacity:0; transform:translateY(6px);} to{opacity:1; transform:translateY(0);}}
  .menu-panel .ticket:nth-child(odd){grid-column:1;}
  .menu-panel .ticket:nth-child(even){grid-column:2;}
  @media(max-width:920px){
    .menu-panel{grid-template-columns:1fr;}
    .menu-panel .ticket:nth-child(odd),.menu-panel .ticket:nth-child(even){grid-column:1;}
  }
  .ticket{
    display:flex; justify-content:space-between; gap:20px;
    padding:22px 0;
    border-bottom:1px dashed var(--line);
    position:relative;
  }
  .ticket-name{font-family:'Fraunces', serif; font-size:19px; margin-bottom:6px;}
  .ticket-desc{font-size:13.5px; color:rgba(237,230,214,0.5); line-height:1.5; max-width:320px;}
  .ticket-price{
    font-family:'IBM Plex Mono', monospace; font-size:15px; color:var(--brass);
    white-space:nowrap; padding-top:2px;
  }

  /* EXPERIENCE / FACILITIES */
  .experience{background:var(--cream);}
  .exp-grid{display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:var(--line-dark); border:1px solid var(--line-dark);}
  .exp-card{background:var(--cream); padding:38px 26px; transition:background .25s;}
  .exp-card:hover{background:#eae2d0;}
  .exp-num{font-family:'IBM Plex Mono', monospace; font-size:11px; color:var(--brass); letter-spacing:0.08em;}
  .exp-card h3{font-size:20px; margin:18px 0 10px; line-height:1.2;}
  .exp-card p{font-size:13.5px; color:#5a564c; line-height:1.6;}

  /* GALLERY / MOSAIC */
  .mosaic{background:var(--ink);}
  .mosaic-grid{
    display:grid;
    grid-template-columns:repeat(6, 1fr);
    grid-template-rows:140px 140px;
    gap:2px;
  }
  .tile{
    position:relative; overflow:hidden;
    display:flex; align-items:flex-end; padding:16px;
    font-family:'IBM Plex Mono', monospace; font-size:10.5px; letter-spacing:0.05em; text-transform:uppercase;
    color:rgba(237,230,214,0.55);
  }
  .tile span{position:relative; z-index:1;}
  .tile::before{content:""; position:absolute; inset:0; opacity:0.9;}
  .t1{grid-column:span 2; grid-row:span 2;}
  .t1::before{background:linear-gradient(155deg, var(--burgundy), #3a1013);}
  .t2{grid-column:span 2;}
  .t2::before{background:repeating-linear-gradient(45deg, var(--pine), var(--pine) 10px, #263322 10px, #263322 20px);}
  .t3{grid-column:span 2;}
  .t3::before{background:linear-gradient(200deg, var(--brass), #7a5626);}
  .t4{grid-column:span 3;}
  .t4::before{background:linear-gradient(20deg, #2a2723, #14120F);}
  .t5{grid-column:span 1;}
  .t5::before{background:var(--burgundy-light);}

  /* TESTIMONIALS */
  .voices{background:var(--cream);}
  .voices-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:30px;}
  .voice-card{
    border:1px solid var(--line-dark);
    padding:34px 28px;
    background:#faf6ec;
  }
  .voice-card .quote-mark{font-family:'Fraunces', serif; font-size:48px; color:var(--brass); line-height:0.5; display:block; margin-bottom:14px;}
  .voice-card p{font-size:15px; line-height:1.7; color:#3a362f; margin-bottom:20px; font-style:italic; font-family:'Fraunces', serif;}
  .voice-name{font-family:'IBM Plex Mono', monospace; font-size:11.5px; text-transform:uppercase; letter-spacing:0.04em; color:#6b665a;}

  /* RESERVE / CONTACT */
  .reserve{background:var(--pine); color:var(--ivory);}
  .reserve-grid{display:grid; grid-template-columns:1fr 1fr; gap:70px;}
  .reserve h2{color:var(--ivory); font-size:clamp(32px,4vw,46px); margin-bottom:22px;}
  .reserve p.lead{color:rgba(237,230,214,0.7); line-height:1.7; max-width:420px; margin-bottom:38px;}
  .info-row{display:flex; gap:18px; padding:18px 0; border-top:1px solid rgba(237,230,214,0.14);}
  .info-row:last-child{border-bottom:1px solid rgba(237,230,214,0.14);}
  .info-row .label{font-family:'IBM Plex Mono', monospace; font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--brass); width:110px; flex-shrink:0; padding-top:2px;}
  .info-row .val{font-size:15px; line-height:1.6; color:rgba(237,230,214,0.88);}
  .hours-table{width:100%; border-collapse:collapse; font-size:14px;}
  .hours-table td{padding:11px 0; border-top:1px solid rgba(237,230,214,0.14);}
  .hours-table td:first-child{font-family:'IBM Plex Mono', monospace; font-size:11.5px; text-transform:uppercase; letter-spacing:0.05em; color:rgba(237,230,214,0.6);}
  .hours-table td:last-child{text-align:right; color:var(--ivory);}
  .map-box{
    margin-top:34px; height:200px; position:relative; overflow:hidden;
    border:1px solid rgba(237,230,214,0.16);
    background:
      linear-gradient(135deg, #263322 25%, transparent 25%) 0 0/24px 24px,
      linear-gradient(225deg, #263322 25%, transparent 25%) 0 0/24px 24px,
      #202a1d;
  }
  .map-box .pin{
    position:absolute; top:50%; left:50%; transform:translate(-50%,-100%);
    width:14px; height:14px; background:var(--brass); border-radius:50% 50% 50% 0; transform-origin:bottom;
    rotate:-45deg;
  }
  .map-box .cap{
    position:absolute; bottom:14px; left:14px;
    font-family:'IBM Plex Mono', monospace; font-size:10.5px; color:rgba(237,230,214,0.55); letter-spacing:0.05em;
  }

  /* FOOTER */
  footer{background:var(--ink); color:rgba(237,230,214,0.55); padding:60px 0 30px;}
  .footer-top{display:flex; justify-content:space-between; align-items:flex-start; padding-bottom:44px; border-bottom:1px solid var(--line); flex-wrap:wrap; gap:30px;}
  .footer-brand{font-family:'Fraunces', serif; font-size:26px; color:var(--ivory);}
  .footer-cols{display:flex; gap:64px; flex-wrap:wrap;}
  .footer-col h4{font-family:'IBM Plex Mono', monospace; font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--brass); margin-bottom:16px;}
  .footer-col a, .footer-col p{display:block; font-size:13.5px; margin-bottom:10px; color:rgba(237,230,214,0.62);}
  .footer-col a:hover{color:var(--ivory);}
  .footer-bottom{display:flex; justify-content:space-between; padding-top:26px; font-size:12px; flex-wrap:wrap; gap:10px;}

  @media(max-width:920px){
    nav.links{display:none;}
    .burger{display:flex;}
    .about-grid, .reserve-grid{grid-template-columns:1fr;}
    .section-head{grid-template-columns:1fr;}
    .exp-grid{grid-template-columns:repeat(2,1fr);}
    .menu-grid{grid-template-columns:1fr;}
    .voices-grid{grid-template-columns:1fr;}
    .mosaic-grid{grid-template-columns:repeat(3,1fr); grid-template-rows:110px 110px 110px;}
    .t1{grid-column:span 3; grid-row:span 1;}
    .t4{grid-column:span 3;}
    section{padding:80px 0;}
  }
</style>
</head>
<body>

<header class="nav" id="siteNav">
  <div class="wrap nav-inner">
    <a href="#top" class="brand">RUSDI<span class="dot">·</span>RESTAURANT</a>
    <nav class="links">
      <a href="#about">Tentang</a>
      <a href="#menu">Menu</a>
      <a href="#experience">Suasana</a>
      <a href="#gallery">Galeri</a>
      <a href="#reserve">Kontak</a>
    </nav>
    <a href="#reserve" class="nav-cta">Pesan Meja</a>
    <button class="burger" id="burgerBtn" aria-label="Buka menu" aria-expanded="false"><span></span><span></span><span></span></button>
  </div>
</header>

<div class="mobile-menu" id="mobileMenu">
  <a href="#about">Tentang</a>
  <a href="#menu">Menu</a>
  <a href="#experience">Suasana</a>
  <a href="#gallery">Galeri</a>
  <a href="#reserve">Kontak</a>
</div>

<section class="hero" id="top">
  <div class="hero-ring" aria-hidden="true"></div>
  <div class="wrap hero-inner">
    <div class="eyebrow">Restoran &amp; Lounge — Sejak Dapur Keluarga</div>
    <h1>Api kecil,<br>cerita <em>panjang</em>.</h1>
    <p class="hero-sub">Rusdi Restaurant menyatukan resep rumahan dan meja panjang untuk berkumpul — tempat makan malam yang santai berubah jadi obrolan sampai larut.</p>
    <div class="hero-actions">
      <a href="#reserve" class="btn-solid">Pesan Meja Malam Ini</a>
      <a href="#menu" class="btn-ghost">Lihat Menu →</a>
    </div>
  </div>
  <div class="hero-meta">Jakarta Barat<br>Buka Setiap Hari — 11.00–24.00</div>
</section>

<div class="strip" aria-hidden="true">
  <div class="strip-track">
    <span><b>01</b> Makan Malam Panjang</span>
    <span><b>02</b> Live Sport Night</span>
    <span><b>03</b> Meja Billiard &amp; Dart</span>
    <span><b>04</b> Menu Musiman</span>
    <span><b>01</b> Makan Malam Panjang</span>
    <span><b>02</b> Live Sport Night</span>
    <span><b>03</b> Meja Billiard &amp; Dart</span>
    <span><b>04</b> Menu Musiman</span>
  </div>
</div>

<section class="about" id="about">
  <div class="wrap about-grid">
    <div class="about-visual">
      <div class="glyph"><span class="big">R.</span>Sejak dapur kecil<br>jadi meja panjang</div>
    </div>
    <div class="about-text">
      <div class="eyebrow" style="color:var(--burgundy); margin-bottom:18px;">Tentang Kami</div>
      <h2 style="font-size:clamp(28px,3.6vw,40px); margin-bottom:22px; max-width:480px;">Dibangun dari resep keluarga, dibesarkan oleh tamu yang betah berlama-lama.</h2>
      <p>Rusdi Restaurant berawal dari dapur rumah yang selalu ramai tamu tak diundang. Kini, konsep itu dituangkan ke ruang yang lebih besar — kayu tua, lampu hangat, dan meja yang sengaja dibuat panjang supaya obrolan tak cepat selesai.</p>
      <p>Menunya berpijak pada masakan Nusantara dengan sentuhan Barat yang bersahaja: dipanggang pelan, disajikan tanpa basa-basi.</p>
      <div class="about-stats">
        <div><b>03</b><span>Tahun Berdiri</span></div>
        <div><b>120+</b><span>Kursi &amp; Booth</span></div>
        <div><b>40</b><span>Menu Andalan</span></div>
      </div>
    </div>
  </div>
</section>

<section class="menu" id="menu">
  <div class="wrap">
    <div class="section-head">
      <div>
        <div class="eyebrow">Menu Pilihan</div>
        <h2>Dari dapur ke meja,<br>tanpa jalan memutar.</h2>
      </div>
      <p>Sebagian kecil dari menu kami — berubah mengikuti musim dan hasil pasar pagi.</p>
    </div>
    <div class="menu-tabs" role="tablist">
      <button class="menu-tab active" role="tab" aria-selected="true" data-cat="mains">Hidangan Utama</button>
      <button class="menu-tab" role="tab" aria-selected="false" data-cat="starters">Pembuka</button>
      <button class="menu-tab" role="tab" aria-selected="false" data-cat="drinks">Minuman</button>
      <button class="menu-tab" role="tab" aria-selected="false" data-cat="dessert">Penutup</button>
    </div>
    <div class="menu-grid">
      <div class="menu-panel" data-panel="mains">
        <div class="ticket">
          <div><div class="ticket-name">Rendang Panggang Rusdi</div><div class="ticket-desc">Daging sapi lokal, bumbu rendang 8 jam, disajikan setengah kering di atas batu panas.</div></div>
          <div class="ticket-price">Rp 89K</div>
        </div>
        <div class="ticket">
          <div><div class="ticket-name">Iga Bakar Kecap Kayu Manis</div><div class="ticket-desc">Iga sapi empuk, glaze kecap dan kayu manis, sambal matah segar.</div></div>
          <div class="ticket-price">Rp 96K</div>
        </div>
        <div class="ticket">
          <div><div class="ticket-name">Ayam Betutu Setengah Ekor</div><div class="ticket-desc">Bumbu Bali utuh, dibungkus daun pisang, dipanggang perlahan.</div></div>
          <div class="ticket-price">Rp 78K</div>
        </div>
        <div class="ticket">
          <div><div class="ticket-name">Fish &amp; Chips Kunyit</div><div class="ticket-desc">Ikan dori berbalut adonan kunyit renyah, saus tartar rumahan.</div></div>
          <div class="ticket-price">Rp 68K</div>
        </div>
        <div class="ticket">
          <div><div class="ticket-name">Soto Betawi Rusdi</div><div class="ticket-desc">Kuah santan susu, jeroan pilihan, emping dan acar segar.</div></div>
          <div class="ticket-price">Rp 52K</div>
        </div>
        <div class="ticket">
          <div><div class="ticket-name">Gorgonzola Sourdough Pizza</div><div class="ticket-desc">Keju gorgonzola, madu lokal, daun rosemary panggang.</div></div>
          <div class="ticket-price">Rp 82K</div>
        </div>
      </div>
      <div class="menu-panel" data-panel="starters" hidden>
        <div class="ticket">
          <div><div class="ticket-name">Tahu Goreng Kipas</div><div class="ticket-desc">Tahu isi sayur dan ayam, balutan tepung renyah, sambal kecap.</div></div>
          <div class="ticket-price">Rp 32K</div>
        </div>
        <div class="ticket">
          <div><div class="ticket-name">French Fries Rumahan</div><div class="ticket-desc">Kentang potong tebal, digoreng dua kali, saus sambal &amp; mayo.</div></div>
          <div class="ticket-price">Rp 28K</div>
        </div>
        <div class="ticket">
          <div><div class="ticket-name">Croquette Daging Truffle Mayo</div><div class="ticket-desc">Isian daging dan keju mozzarella, saus truffle mayo.</div></div>
          <div class="ticket-price">Rp 42K</div>
        </div>
        <div class="ticket">
          <div><div class="ticket-name">Sate Ayam Bumbu Kacang</div><div class="ticket-desc">Sate ayam bakar arang, sambal kacang khas dapur Rusdi.</div></div>
          <div class="ticket-price">Rp 36K</div>
        </div>
      </div>
      <div class="menu-panel" data-panel="drinks" hidden>
        <div class="ticket">
          <div><div class="ticket-name">Kopi Susu Gula Aren</div><div class="ticket-desc">Espresso rumahan, gula aren asli, susu segar.</div></div>
          <div class="ticket-price">Rp 28K</div>
        </div>
        <div class="ticket">
          <div><div class="ticket-name">Es Teh Tarik Rusdi</div><div class="ticket-desc">Teh susu ditarik, disajikan dingin dengan gula aren cair.</div></div>
          <div class="ticket-price">Rp 24K</div>
        </div>
        <div class="ticket">
          <div><div class="ticket-name">Twist Cocktail</div><div class="ticket-desc">Racikan rumahan berganti tiap bulan — tanya bartender kami.</div></div>
          <div class="ticket-price">Rp 78K</div>
        </div>
        <div class="ticket">
          <div><div class="ticket-name">Jus Alpukat Kocok</div><div class="ticket-desc">Alpukat segar, susu kental manis, cokelat leleh.</div></div>
          <div class="ticket-price">Rp 30K</div>
        </div>
      </div>
      <div class="menu-panel" data-panel="dessert" hidden>
        <div class="ticket">
          <div><div class="ticket-name">Es Krim Pandan Gula Merah</div><div class="ticket-desc">Dibuat harian, taburan kacang sangrai dan gula merah cair.</div></div>
          <div class="ticket-price">Rp 34K</div>
        </div>
        <div class="ticket">
          <div><div class="ticket-name">Pisang Goreng Karamel</div><div class="ticket-desc">Pisang kepok goreng renyah, saus karamel gula aren, es krim vanila.</div></div>
          <div class="ticket-price">Rp 32K</div>
        </div>
        <div class="ticket">
          <div><div class="ticket-name">Kue Lapis Legit Panggang</div><div class="ticket-desc">Resep rumahan, disajikan hangat dengan saus vanila.</div></div>
          <div class="ticket-price">Rp 26K</div>
        </div>
        <div class="ticket">
          <div><div class="ticket-name">Puding Roti Kayu Manis</div><div class="ticket-desc">Roti panggang lembut, saus karamel dan kayu manis.</div></div>
          <div class="ticket-price">Rp 30K</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="experience" id="experience">
  <div class="wrap">
    <div class="section-head">
      <div>
        <div class="eyebrow" style="color:var(--burgundy);">Suasana</div>
        <h2>Bukan cuma makan,<br>tapi tempat menetap sebentar.</h2>
      </div>
      <p>Fasilitas yang bikin tamu betah dari makan siang sampai nonton bareng malam hari.</p>
    </div>
    <div class="exp-grid">
      <div class="exp-card">
        <div class="exp-num">FASILITAS 01</div>
        <h3>Meja Billiard</h3>
        <p>Dua meja billiard standar turnamen, terbuka untuk tamu setiap hari tanpa biaya tambahan di jam sepi.</p>
      </div>
      <div class="exp-card">
        <div class="exp-num">FASILITAS 02</div>
        <h3>Sudut Dartboard</h3>
        <p>Area dart santai untuk mengisi waktu sambil menunggu pesanan atau menemani obrolan panjang.</p>
      </div>
      <div class="exp-card">
        <div class="exp-num">FASILITAS 03</div>
        <h3>Nonton Bareng</h3>
        <p>Layar besar untuk pertandingan besar — pesan meja lebih awal saat jadwal big match.</p>
      </div>
      <div class="exp-card">
        <div class="exp-num">FASILITAS 04</div>
        <h3>Permainan Meja</h3>
        <p>Catur, Uno, dan Othello tersedia gratis di meja kasir untuk menemani sore yang santai.</p>
      </div>
    </div>
  </div>
</section>

<section class="mosaic" id="gallery">
  <div class="wrap">
    <div class="section-head" style="margin-bottom:44px;">
      <div>
        <div class="eyebrow">Galeri Suasana</div>
        <h2 style="color:var(--ivory);">Sepotong momen<br>dari ruang kami.</h2>
      </div>
      <p style="color:rgba(237,230,214,0.6);">Warna dan tekstur ruang — dari sudut bar hingga meja panjang utama.</p>
    </div>
  </div>
  <div class="mosaic-grid">
    <div class="tile t1"><span>Meja Panjang Utama</span></div>
    <div class="tile t2"><span>Sudut Billiard</span></div>
    <div class="tile t3"><span>Bar &amp; Minuman</span></div>
    <div class="tile t4"><span>Dapur Terbuka</span></div>
    <div class="tile t5"><span>Teras Malam</span></div>
  </div>
</section>

<section class="voices">
  <div class="wrap">
    <div class="section-head">
      <div>
        <div class="eyebrow" style="color:var(--burgundy);">Kata Tamu</div>
        <h2>Cerita dari meja<br>sebelah.</h2>
      </div>
      <p>Sebagian catatan tamu yang datang lagi, dan lagi.</p>
    </div>
    <div class="voices-grid">
      <div class="voice-card">
        <span class="quote-mark">“</span>
        <p>Rendang panggangnya juara, dan meja panjangnya bikin acara keluarga jadi lebih akrab.</p>
        <div class="voice-name">— Dian, Kembangan</div>
      </div>
      <div class="voice-card">
        <span class="quote-mark">“</span>
        <p>Tempat favorit nonton bola bareng teman kantor. Meja billiardnya bonus banget.</p>
        <div class="voice-name">— Yoga, Puri Indah</div>
      </div>
      <div class="voice-card">
        <span class="quote-mark">“</span>
        <p>Soto Betawinya mengingatkan masakan rumah. Pelayanannya juga hangat sekali.</p>
        <div class="voice-name">— Sri, Kebon Jeruk</div>
      </div>
    </div>
  </div>
</section>

<section class="reserve" id="reserve">
  <div class="wrap reserve-grid">
    <div>
      <div class="eyebrow">Kunjungi Kami</div>
      <h2>Meja Anda<br>sudah kami siapkan.</h2>
      <p class="lead">Datang langsung atau hubungi kami untuk reservasi grup, acara nonton bareng, atau perayaan kecil.</p>
      <div class="info-row"><div class="label">Alamat</div><div class="val">Jl. Lingkar Luar, Kembangan, Jakarta Barat</div></div>
      <div class="info-row"><div class="label">Telepon</div><div class="val">+62 811-9700-6060</div></div>
      <div class="info-row"><div class="label">Email</div><div class="val">halo@rusdirestaurant.id</div></div>
      <div class="info-row"><div class="label">Instagram</div><div class="val">@rusdirestaurant</div></div>
    </div>
    <div>
      <table class="hours-table">
        <tr><td>Senin – Kamis</td><td>11.00 – 23.00</td></tr>
        <tr><td>Jumat – Sabtu</td><td>11.00 – 01.00</td></tr>
        <tr><td>Minggu</td><td>10.00 – 23.00</td></tr>
        <tr><td>Happy Hour</td><td>16.00 – 19.00</td></tr>
      </table>
      <div class="map-box">
        <div class="pin"></div>
        <div class="cap">JAKARTA BARAT · PETA LOKASI</div>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="footer-top">
      <div class="footer-brand">Rusdi Restaurant</div>
      <div class="footer-cols">
        <div class="footer-col">
          <h4>Jelajah</h4>
          <a href="#about">Tentang</a>
          <a href="#menu">Menu</a>
          <a href="#experience">Suasana</a>
          <a href="#gallery">Galeri</a>
        </div>
        <div class="footer-col">
          <h4>Kontak</h4>
          <p>+62 811-9700-6060</p>
          <p>halo@rusdirestaurant.id</p>
        </div>
        <div class="footer-col">
          <h4>Ikuti</h4>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">WhatsApp</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Rusdi Restaurant. Seluruh hak cipta dilindungi.</span>
      <span>Dibuat dengan meja panjang &amp; api kecil.</span>
    </div>
  </div>
</footer>

<script>
  const nav = document.getElementById('siteNav');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 40){ nav.classList.add('scrolled'); }
    else{ nav.classList.remove('scrolled'); }
  });

  // Menu tabs
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
</script>
</body>
</html>

