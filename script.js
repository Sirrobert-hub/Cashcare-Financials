*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

:root{
  --green:#1A3C34;
  --gold:#C9963B;
  --cream:#F8F5EF;
  --text:#1c1c1a;
}

html{
  scroll-behavior:smooth;
}

body{
  font-family:'DM Sans',sans-serif;
  background:var(--cream);
  color:var(--text);
  line-height:1.7;
}

#scroll-progress{
  position:fixed;
  top:0;
  left:0;
  height:4px;
  width:0%;
  background:var(--gold);
  z-index:99999;
}

.navbar{
  position:fixed;
  top:0;
  width:100%;
  padding:20px 6%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  background:rgba(26,60,52,0.92);
  backdrop-filter:blur(10px);
  z-index:999;
}

.logo h2{
  color:white;
  font-family:'Playfair Display',serif;
}

.logo span{
  color:#cfcfcf;
  font-size:12px;
}

.nav-links{
  display:flex;
  gap:30px;
  list-style:none;
}

.nav-links a{
  color:white;
  text-decoration:none;
}

.nav-btn{
  background:var(--gold);
  color:white;
  text-decoration:none;
  padding:12px 22px;
  border-radius:6px;
  font-weight:600;
}

.hero{
  min-height:100vh;
  display:flex;
  align-items:center;
  padding:120px 6%;
  background:
  radial-gradient(circle at top right,
  rgba(201,150,59,0.12),
  transparent 30%),
  linear-gradient(135deg,
  #102823 0%,
  #17362f 45%,
  #1A3C34 100%);
}

.hero-content{
  max-width:700px;
}

.hero-label{
  color:var(--gold);
  text-transform:uppercase;
  letter-spacing:2px;
  font-size:12px;
}

.hero h1{
  color:white;
  font-size:72px;
  line-height:1.05;
  margin:20px 0;
  font-family:'Playfair Display',serif;
}

.hero h1 em{
  color:var(--gold);
  font-style:italic;
}

.hero p{
  color:#d7d7d7;
  font-size:18px;
  max-width:540px;
}

.hero-buttons{
  margin-top:40px;
  display:flex;
  gap:18px;
  flex-wrap:wrap;
}

.primary-btn{
  background:var(--gold);
  color:white;
  padding:16px 28px;
  text-decoration:none;
  border-radius:6px;
  font-weight:600;
}

.secondary-btn{
  border:1px solid rgba(255,255,255,0.3);
  color:white;
  padding:16px 28px;
  text-decoration:none;
  border-radius:6px;
}

.stats{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
  padding:80px 6%;
  background:white;
}

.stat-card{
  background:var(--cream);
  padding:40px;
  border-radius:12px;
  text-align:center;
}

.stat-card h2{
  color:var(--gold);
  font-size:52px;
  font-family:'Playfair Display',serif;
}

.services,
.about,
.contact{
  padding:100px 6%;
}

.section-title span{
  color:var(--gold);
  text-transform:uppercase;
  font-size:12px;
  letter-spacing:2px;
}

.section-title h2{
  font-size:48px;
  margin-top:12px;
  margin-bottom:20px;
  font-family:'Playfair Display',serif;
}

.service-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:24px;
  margin-top:50px;
}

.service-card{
  background:white;
  padding:40px;
  border-radius:12px;
  transition:0.3s;
  border-left:4px solid var(--gold);
}

.service-card:hover{
  transform:translateY(-6px);
  box-shadow:0 14px 40px rgba(0,0,0,0.08);
}

.service-card h3{
  margin-bottom:14px;
}

.about{
  background:#ede8df;
}

blockquote{
  margin-top:30px;
  font-size:28px;
  line-height:1.4;
  font-family:'Playfair Display',serif;
  color:var(--green);
}

.contact-form{
  max-width:700px;
  display:flex;
  flex-direction:column;
  gap:18px;
  margin-top:40px;
}

.contact-form input,
.contact-form select,
.contact-form textarea{
  padding:16px;
  border:none;
  border-radius:8px;
  font-family:inherit;
  font-size:16px;
}

.contact-form textarea{
  min-height:140px;
}

.contact-form button{
  background:var(--green);
  color:white;
  padding:18px;
  border:none;
  border-radius:8px;
  font-size:16px;
  font-weight:700;
  cursor:pointer;
}

footer{
  background:#121212;
  color:white;
  padding:70px 6%;
}

.footer-content{
  max-width:1200px;
  margin:auto;
}

.footer-links{
  display:flex;
  gap:20px;
  margin:20px 0;
}

.footer-links a{
  color:#bdbdbd;
  text-decoration:none;
}

.whatsapp-btn{
  position:fixed;
  bottom:20px;
  right:20px;
  background:#25D366;
  color:white;
  padding:16px 24px;
  border-radius:50px;
  text-decoration:none;
  font-weight:700;
  z-index:9999;
}

@media(max-width:900px){

  .service-grid{
    grid-template-columns:1fr;
  }

  .stats{
    grid-template-columns:1fr;
  }

  .hero h1{
    font-size:52px;
  }

  .nav-links{
    display:none;
  }

}

@media(max-width:600px){

  .hero h1{
    font-size:42px;
  }

  .section-title h2{
    font-size:36px;
  }

}