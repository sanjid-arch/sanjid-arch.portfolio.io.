const root=document.documentElement;
const themeToggle=document.getElementById('themeToggle');
const themeIcon=themeToggle.querySelector('.theme-icon');
const savedTheme=localStorage.getItem('sanjid-theme');
if(savedTheme){root.dataset.theme=savedTheme;themeIcon.textContent=savedTheme==='dark'?'☼':'☾';}
themeToggle.addEventListener('click',()=>{const next=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=next;themeIcon.textContent=next==='dark'?'☼':'☾';localStorage.setItem('sanjid-theme',next);});
const menuToggle=document.getElementById('menuToggle'),nav=document.getElementById('nav');
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
const code=document.getElementById('codeBackdrop'),progress=document.querySelector('.progress');
let ticking=false;
function onScroll(){const y=window.scrollY,max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?y/max*100:0)+'%';code.style.setProperty('--global-code-shift',(-y*.16)+'px');ticking=false;}
window.addEventListener('scroll',()=>{if(!ticking){window.requestAnimationFrame(onScroll);ticking=true;}},{passive:true});onScroll();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.section,.hero-content').forEach(el=>{el.classList.add('reveal');observer.observe(el);});
document.getElementById('year').textContent=new Date().getFullYear();
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.body.classList.add('reduce-motion');
