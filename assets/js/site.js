/* ════════════════════════════════════════════════════════════════
   CONFIGURAÇÃO EDITÁVEL — troque pelos dados reais do Leandro / MCD
════════════════════════════════════════════════════════════════ */
const MCD = {
  whatsapp: "5521971448387",                 // ← DDI+DDD+número (só dígitos)
  email:    "contato@mcdsolucoeseletricas.com.br",
  regiao:   "Rio de Janeiro · RJ",
  msgPadrao:"Olá! Vim pelo site da MCD Soluções Elétricas e gostaria de solicitar um orçamento."
};

/* monta todos os links de WhatsApp da página */
function waLink(extra){
  const txt = encodeURIComponent(extra ? MCD.msgPadrao + " Serviço: " + extra + "." : MCD.msgPadrao);
  return `https://wa.me/${MCD.whatsapp}?text=${txt}`;
}
document.querySelectorAll('[data-cta="whatsapp"]').forEach(el=>{
  el.setAttribute('href', waLink());
  el.setAttribute('target','_blank');
  el.setAttribute('rel','noopener');
});

/* ano atual no rodapé */
const anoEl = document.getElementById('ano');
if(anoEl) anoEl.textContent = new Date().getFullYear();

/* header sticky ao rolar */
const head = document.querySelector('header');
if(head){
  const onScroll = ()=> head.classList.toggle('scrolled', window.scrollY > 20);
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});
}

/* menu mobile */
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if(menuBtn && navLinks){
  menuBtn.addEventListener('click', ()=>{
    const open = navLinks.classList.toggle('show');
    menuBtn.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=>{
    navLinks.classList.remove('show'); menuBtn.setAttribute('aria-expanded','false');
  }));
}

/* reveal no scroll (com fallback de segurança) */
const reveals = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); }});
  }, {threshold:.12, rootMargin:'0px 0px -8% 0px'});
  reveals.forEach(r=> io.observe(r));
  // fallback: garante visibilidade após carregamento
  window.addEventListener('load', ()=> setTimeout(()=> reveals.forEach(r=> r.classList.add('is-visible')), 2500));
} else {
  reveals.forEach(r=> r.classList.add('is-visible'));
}

/* FAQ: abre uma de cada vez */
const faqs = document.querySelectorAll('.faq');
faqs.forEach(f=> f.addEventListener('toggle', ()=>{
  if(f.open) faqs.forEach(o=>{ if(o!==f) o.open=false; });
}));

/* chatbot */
const chatbot = document.getElementById('chatbot');
const fabWrap = document.querySelector('.fab');
const chatWa = document.getElementById('chatWa');
if(chatbot && fabWrap){
  function openChat(){ chatbot.classList.add('open'); fabWrap.style.display='none'; }
  function closeChat(){ chatbot.classList.remove('open'); fabWrap.style.display='flex'; }
  document.getElementById('chatOpen').addEventListener('click', openChat);
  document.getElementById('chatClose').addEventListener('click', closeChat);
  document.getElementById('chatOpts').addEventListener('click', e=>{
    const b = e.target.closest('.chat-opt'); if(!b) return;
    const servico = b.textContent.trim();
    const body = document.getElementById('chatBody');
    const u = document.createElement('div'); u.className='chat-msg'; u.style.cssText='align-self:flex-end;background:rgba(0,87,184,.22);border-top-left-radius:14px;border-top-right-radius:4px'; u.textContent = servico;
    const r = document.createElement('div'); r.className='chat-msg'; r.textContent = `Perfeito! Já preparei seu pedido de orçamento para "${servico}". É só continuar no WhatsApp que a equipe da MCD faz a avaliação técnica.`;
    body.appendChild(u); body.appendChild(r); body.scrollTop = body.scrollHeight;
    chatWa.setAttribute('href', waLink(servico));
  });
  /* ESC fecha chatbot */
  document.addEventListener('keydown', e=>{ if(e.key==='Escape' && chatbot.classList.contains('open')) closeChat(); });
}

/* lightbox da galeria de obras (inclui antes/depois) */
(function(){
  const figs = [...document.querySelectorAll('#obras .g-item')];
  if(!figs.length) return;
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCap = document.getElementById('lbCap');
  const lbCount = document.getElementById('lbCount');
  let idx = 0;
  const items = figs.map(f=>{
    const img = f.querySelector('img');
    const cap = f.querySelector('figcaption');
    const chip = f.querySelector('.ba-chip');
    let kicker = '', text = '';
    if(cap){ const b = cap.querySelector('b'); kicker = b ? b.textContent : ''; text = b ? cap.textContent.replace(b.textContent,'').trim() : cap.textContent.trim(); }
    else if(chip){ kicker = 'Antes e depois'; text = chip.textContent.trim(); }
    return { src: img.getAttribute('src'), alt: img.alt, kicker, text };
  });
  function show(i){
    idx = (i + items.length) % items.length;
    const it = items[idx];
    lbImg.src = it.src; lbImg.alt = it.alt;
    lbCap.innerHTML = (it.kicker ? '<b>'+it.kicker+'</b>' : '') + (it.text || it.alt);
    lbCount.textContent = (idx+1) + ' / ' + items.length;
  }
  function open(i){ show(i); lb.classList.add('open'); document.body.style.overflow='hidden'; }
  function close(){ lb.classList.remove('open'); document.body.style.overflow=''; }
  figs.forEach((f,i)=>{
    const img = f.querySelector('img');
    img.setAttribute('role','button'); img.setAttribute('tabindex','0');
    img.addEventListener('click', ()=> open(i));
    img.addEventListener('keydown', e=>{ if(e.key==='Enter' || e.key===' '){ e.preventDefault(); open(i); } });
  });
  document.getElementById('lbClose').addEventListener('click', close);
  document.getElementById('lbPrev').addEventListener('click', ()=> show(idx-1));
  document.getElementById('lbNext').addEventListener('click', ()=> show(idx+1));
  lb.addEventListener('click', e=>{ if(e.target === lb) close(); });
  document.addEventListener('keydown', e=>{
    if(!lb.classList.contains('open')) return;
    if(e.key==='Escape') close();
    else if(e.key==='ArrowLeft') show(idx-1);
    else if(e.key==='ArrowRight') show(idx+1);
  });
})();
