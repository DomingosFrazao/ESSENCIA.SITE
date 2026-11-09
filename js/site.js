
(function(){
const pages=[...document.querySelectorAll('main[data-page]')];
const nav=document.getElementById('nav');const toggle=document.getElementById('menu-toggle');const contact=document.getElementById('contact-section');
function route(){const h=decodeURIComponent(location.hash.slice(1));const isContact=h==='contacto';const page=isContact?'sessoes':pages.some(p=>p.id===h)?h:'inicio';
pages.forEach(p=>p.classList.toggle('active',p.id===page));contact.style.display=page==='sessoes'?'block':'none';
document.querySelectorAll('[data-nav]').forEach(a=>{const active=a.dataset.nav===page;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';document.title=(page==='inicio'?'ESSEN.CIA':page[0].toUpperCase()+page.slice(1)+' — ESSEN.CIA')+' · Respiração, Corpo, Consciência';
requestAnimationFrame(()=>{if(isContact){contact.scrollIntoView({behavior:'smooth',block:'start'})}else{window.scrollTo({top:0,behavior:'instant'})}});
}
window.addEventListener('hashchange',route);route();
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}});
})();

;
(()=>{const trigger=document.getElementById('open-contact-form'),panel=document.getElementById('contact-form-panel'),form=document.getElementById('contact-form');if(!trigger||!panel||!form)return;trigger.addEventListener('click',()=>{const open=panel.hasAttribute('hidden');if(open){panel.removeAttribute('hidden');trigger.setAttribute('aria-expanded','true');panel.querySelector('input')?.focus();}else{panel.setAttribute('hidden','');trigger.setAttribute('aria-expanded','false');}});form.addEventListener('submit',(event)=>{event.preventDefault();if(!form.reportValidity())return;const d=new FormData(form);const name=String(d.get('nome')||'').trim(),mail=String(d.get('email')||'').trim(),subject=String(d.get('motivo')||'').trim(),message=String(d.get('mensagem')||'').trim();const lista=d.get('lista')?'Sim':'Não';const body=`Nome: ${name}\nEmail: ${mail}\nMotivo: ${subject}\nQuer receber informações: ${lista}\n\nMensagem:\n${message}`;window.location.href='mailto:geral@essenciabreath.com?subject='+encodeURIComponent('Contacto ESSEN.CIA — '+subject)+'&body='+encodeURIComponent(body);});})();
;
document.addEventListener("DOMContentLoaded",function(){const v=document.querySelector(".hero-video");if(v){v.muted=true;}});