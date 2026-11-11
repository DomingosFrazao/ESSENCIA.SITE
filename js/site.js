
(function(){
const page=document.body.dataset.page||'inicio';
const nav=document.getElementById('nav');const toggle=document.getElementById('menu-toggle');
document.querySelectorAll('[data-nav]').forEach(a=>{const active=a.dataset.nav===page;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');});
function fechar(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',fechar));
document.addEventListener('keydown',e=>{if(e.key==='Escape')fechar();});
})();

;
(()=>{const URL='https://script.google.com/macros/s/AKfycbxU8fB2tfwJeUnbzvONEWhvnokveczOrRVeeoN3G63mB3ZiADAjIBo_3kpQAYnO4YTRgQ/exec';
function enviar(dados){return fetch(URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(dados)});}
const trigger=document.getElementById('open-contact-form'),panel=document.getElementById('contact-form-panel'),form=document.getElementById('contact-form');
if(trigger&&panel&&form){trigger.addEventListener('click',()=>{const open=panel.hasAttribute('hidden');if(open){panel.removeAttribute('hidden');trigger.setAttribute('aria-expanded','true');panel.querySelector('input:not([name=site])')?.focus();}else{panel.setAttribute('hidden','');trigger.setAttribute('aria-expanded','false');}});
form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const d=new FormData(form),st=document.getElementById('contact-status'),b=form.querySelector('button[type=submit]');
b.disabled=true;b.textContent='A enviar…';
enviar({tipo:'contacto',site:String(d.get('site')||''),nome:String(d.get('nome')||'').trim(),email:String(d.get('email')||'').trim(),motivo:String(d.get('motivo')||''),mensagem:String(d.get('mensagem')||'').trim(),newsletter:!!d.get('lista'),pagina:location.pathname})
.then(()=>{form.reset();b.textContent='Mensagem enviada';st.textContent='Obrigado. Recebi a tua mensagem e respondo-te assim que puder.';})
.catch(()=>{b.disabled=false;b.textContent='Enviar mensagem';st.innerHTML='Não foi possível enviar. Escreve-me para <a href="mailto:geral@essenciabreath.com">geral@essenciabreath.com</a> ou pelo WhatsApp.';});});}
const nf=document.getElementById('news-form');
if(nf){nf.addEventListener('submit',e=>{e.preventDefault();if(!nf.reportValidity())return;const d=new FormData(nf),st=document.getElementById('news-status'),b=nf.querySelector('button');b.disabled=true;
enviar({tipo:'newsletter',site:String(d.get('site')||''),email:String(d.get('email')||'').trim(),pagina:location.pathname})
.then(()=>{nf.reset();b.textContent='Pedido feito';st.textContent='Falta um passo: abre o e-mail que te enviámos e confirma.';})
.catch(()=>{b.disabled=false;st.textContent='Não foi possível enviar. Tenta outra vez mais tarde.';});});}
})();
;
document.addEventListener("DOMContentLoaded",function(){const v=document.querySelector(".hero-video");if(v){v.muted=true;}});
;(function(){var v=document.querySelector(".hero-video");if(!v)return;if(window.matchMedia("(max-width:760px)").matches&&v.dataset.srcMobile){var s=v.querySelector("source");if(s){s.src=v.dataset.srcMobile;}v.poster=v.dataset.posterMobile||v.poster;v.load();}v.muted=true;var p=v.play();if(p&&p.catch)p.catch(function(){});})();
