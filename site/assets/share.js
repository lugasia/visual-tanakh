/* ===== שיתוף — התנ״ך הוויזואלי =====
   שימוש: <div class="share-block" data-hook="הטקסט שיישלח"></div>
   אם data-hook חסר, נלקח og:title. הסקריפט גם מוסיף כפתור צף בנייד. */
(function(){
  var ICO={
    wa:'<svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1s-.8 1-.9 1.2c-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.5.8.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.5zM12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2z"/></svg>',
    x:'<svg viewBox="0 0 24 24"><path d="M18.2 2h3.4l-7.4 8.5L23 22h-6.8l-5.3-7-6.1 7H1.4l8-9.1L1 2h7l4.8 6.3zm-1.2 18h1.9L7.1 3.9H5z"/></svg>',
    tg:'<svg viewBox="0 0 24 24"><path d="M21.9 4.3L18.6 20c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.2-8.3c.4-.4-.1-.6-.6-.2L6 12.6l-4.9-1.5c-1.1-.3-1.1-1 .2-1.5l19.2-7.4c.9-.3 1.7.2 1.4 2.1z"/></svg>',
    fb:'<svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z"/></svg>',
    ln:'<svg viewBox="0 0 24 24"><path d="M9.5 12.6a3.9 3.9 0 011.1-2.7l2.6-2.6a3.9 3.9 0 015.5 5.5l-1.5 1.5a.9.9 0 01-1.3-1.3l1.5-1.5a2.1 2.1 0 00-3-3l-2.6 2.6a2.1 2.1 0 000 3 .9.9 0 11-1.3 1.3 3.9 3.9 0 01-1-2.8zm-2.1 8.3a3.9 3.9 0 01-2.8-6.7l1.5-1.5a.9.9 0 011.3 1.3l-1.5 1.5a2.1 2.1 0 003 3l2.6-2.6a2.1 2.1 0 000-3 .9.9 0 011.3-1.3 3.9 3.9 0 010 5.5l-2.6 2.6a3.9 3.9 0 01-2.8 1.2z"/></svg>'
  };
  function meta(p){var m=document.querySelector('meta[property="'+p+'"]');return m?m.content:"";}
  var url=(document.querySelector('link[rel=canonical]')||{}).href||location.href.split("#")[0];
  var hookDefault=meta("og:title")||document.title;

  document.querySelectorAll(".share-block").forEach(function(box){
    var hook=box.dataset.hook||hookDefault;
    var msg=hook+"\n"+url;
    var E=encodeURIComponent;
    box.innerHTML=
      '<h3>'+(box.dataset.title||"שווה לשלוח למישהו")+'</h3>'+
      '<p>'+(box.dataset.sub||"אם משהו כאן הפתיע אתכם, כנראה שיפתיע גם אותם.")+'</p>'+
      '<div class="share-row">'+
        '<a class="wa" href="https://wa.me/?text='+E(msg)+'" target="_blank" rel="noopener">'+ICO.wa+'ווטסאפ</a>'+
        '<a href="https://twitter.com/intent/tweet?text='+E(hook)+'&url='+E(url)+'" target="_blank" rel="noopener">'+ICO.x+'X</a>'+
        '<a href="https://t.me/share/url?url='+E(url)+'&text='+E(hook)+'" target="_blank" rel="noopener">'+ICO.tg+'טלגרם</a>'+
        '<a href="https://www.facebook.com/sharer/sharer.php?u='+E(url)+'" target="_blank" rel="noopener">'+ICO.fb+'פייסבוק</a>'+
        '<button type="button" class="copy">'+ICO.ln+'העתקת קישור</button>'+
      '</div>';
    box.querySelector(".copy").addEventListener("click",function(){
      var b=this;
      var done=function(){b.classList.add("ok");b.lastChild.textContent="הועתק";
        setTimeout(function(){b.classList.remove("ok");b.lastChild.textContent="העתקת קישור";},2200);};
      if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(url).then(done,done);}
      else{var t=document.createElement("textarea");t.value=url;document.body.appendChild(t);t.select();
           try{document.execCommand("copy");}catch(e){} document.body.removeChild(t); done();}
    });
  });

  // כפתור צף בנייד — Web Share API אם קיים, אחרת ווטסאפ
  if(document.querySelector(".share-block")){
    var fab=document.createElement("button");
    fab.className="share-fab"; fab.type="button";
    fab.innerHTML=ICO.wa+"שיתוף";
    fab.addEventListener("click",function(){
      var hook=(document.querySelector(".share-block").dataset.hook)||hookDefault;
      if(navigator.share){navigator.share({title:document.title,text:hook,url:url}).catch(function(){});}
      else{window.open("https://wa.me/?text="+encodeURIComponent(hook+"\n"+url),"_blank","noopener");}
    });
    document.body.appendChild(fab);
  }
})();
