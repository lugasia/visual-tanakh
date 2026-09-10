(() => {
  const panel=document.getElementById('atlas-sidebar');
  const toggle=document.getElementById('menu-toggle');
  const close=document.getElementById('nav-close');
  const backdrop=document.getElementById('nav-backdrop');
  const main=document.querySelector('.atlas-main');
  const mobile=matchMedia('(max-width: 900px)');
  let open=false;
  function setOpen(next,restore=true){
    open=next&&mobile.matches;
    panel.classList.toggle('is-open',open);
    toggle.setAttribute('aria-expanded',String(open));
    backdrop.hidden=!open;
    main.inert=open;
    document.body.style.overflow=open?'hidden':'';
    if(open)close.focus();else if(restore&&mobile.matches)toggle.focus();
  }
  toggle.addEventListener('click',()=>setOpen(!open));
  close.addEventListener('click',()=>setOpen(false));
  backdrop.addEventListener('click',()=>setOpen(false));
  mobile.addEventListener('change',()=>setOpen(false,false));
  document.addEventListener('keydown',e=>{
    if(!open)return;
    if(e.key==='Escape'){setOpen(false);return;}
    if(e.key==='Tab'){
      const nodes=[...panel.querySelectorAll('a,button')].filter(el=>el.getClientRects().length);
      const first=nodes[0],last=nodes[nodes.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
    }
  });
  panel.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{
    setOpen(false,false);
    const target=document.getElementById(link.hash.slice(1));
    if(target){target.setAttribute('tabindex','-1');target.focus({preventScroll:true});}
  }));
  const links=[...panel.querySelectorAll('.toc-link')];
  if(links.length&&'IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
      if(!visible.length)return;
      links.forEach(l=>{if(l.hash==='#'+visible[0].target.id)l.setAttribute('aria-current','location');else l.removeAttribute('aria-current');});
    },{rootMargin:'-12% 0px -62% 0px',threshold:0});
    links.forEach(l=>{const target=document.getElementById(l.hash.slice(1));if(target)observer.observe(target);});
  }
})();

// On narrow maps, numbered routes keep their numbers; names remain on the points.
(() => {
  const map=document.getElementById('map');
  if(!map)return;
  const narrow=matchMedia('(max-width: 600px)');
  function updateLabels(){
    map.querySelectorAll('.mlab').forEach(label=>{
      const full=label.dataset.fullLabel||label.textContent;
      label.dataset.fullLabel=full;
      const number=full.match(/^(\d+)\.\s/);
      const text=narrow.matches&&number?number[1]:full;
      if(label.textContent!==text)label.textContent=text;
      label.setAttribute('aria-label',full);
    });
  }
  new MutationObserver(updateLabels).observe(map,{childList:true,subtree:true});
  narrow.addEventListener('change',updateLabels);
  updateLabels();
})();

// Language preference. Both versions of every chapter exist, so a reader who
// chose one language is never left on the other without an offer to switch.
(() => {
  const KEY='vt-lang';
  const read=()=>{try{return localStorage.getItem(KEY);}catch(e){return null;}};
  const write=v=>{try{localStorage.setItem(KEY,v);}catch(e){}};

  const path=location.pathname;
  const chapter=path.match(/\/(he|en)\/([^/]+)\/?$/);
  const onCollection=/\/en\/?$/.test(path);

  // Landing on a page states the choice; so does using the language switch.
  // Only a collection page or the language switch states a preference.
  // Opening a chapter must not, or the offer to switch could never appear.
  if(onCollection)write('en');
  else if(path.replace(/\/+$/,'').endsWith('/visual-tanakh')||path==='/')write('he');
  document.querySelectorAll('.language-link').forEach(a=>a.addEventListener('click',()=>{
    write(/\/en\//.test(new URL(a.href,location.href).pathname)?'en':'he');
  }));

  if(!chapter)return;
  const here=chapter[1], slug=chapter[2], want=read();
  if(!want||want===here)return;

  const root=new URL('../../',location.href).pathname;
  const copy=want==='en'
    ? ['This chapter is also available in English.','Read it in English →']
    : ['הפרק הזה קיים גם בעברית.','לקריאה בעברית →'];
  const bar=document.createElement('aside');
  bar.className='lang-bar';
  bar.lang=want;
  bar.dir=want==='en'?'ltr':'rtl';
  bar.innerHTML='<span>'+copy[0]+'</span><a href="'+root+want+'/'+slug+'/">'+copy[1]+'</a>';
  const main=document.getElementById('main-content');
  if(main)main.insertBefore(bar,main.firstChild);
})();
