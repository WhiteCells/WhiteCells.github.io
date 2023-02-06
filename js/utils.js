const btf={debounce:function(o,a,i){let r;return function(){const e=this,t=arguments;var n=i&&!r;clearTimeout(r),r=setTimeout(function(){r=null,i||o.apply(e,t)},a),n&&o.apply(e,t)}},throttle:function(n,o,a){let i,r,l,s=0;a=a||{};function d(){s=!1===a.leading?0:(new Date).getTime(),i=null,n.apply(r,l),i||(r=l=null)}return function(){var e=(new Date).getTime(),t=(s||!1!==a.leading||(s=e),o-(e-s));r=this,l=arguments,t<=0||o<t?(i&&(clearTimeout(i),i=null),s=e,n.apply(r,l),i||(r=l=null)):i||!1===a.trailing||(i=setTimeout(d,t))}},sidebarPaddingR:()=>{var e=window.innerWidth,t=document.body.clientWidth;e!==t&&(document.body.style.paddingRight=e-t+"px")},snackbarShow:(e,t=!1,n=2e3)=>{var{position:o,bgLight:a,bgDark:i}=GLOBAL_CONFIG.Snackbar,a="light"===document.documentElement.getAttribute("data-theme")?a:i;Snackbar.show({text:e,backgroundColor:a,showAction:t,duration:n,pos:o,customClass:"snackbar-css"})},diffDate:(e,t=!1)=>{var n,o,a,i=new Date,e=new Date(e),i=i.getTime()-e.getTime(),r=864e5;let l;return l=t?(t=i/r,o=i/36e5,a=i/6e4,12<(n=i/2592e6)?e.toISOString().slice(0,10):1<=n?parseInt(n)+" "+GLOBAL_CONFIG.date_suffix.month:1<=t?parseInt(t)+" "+GLOBAL_CONFIG.date_suffix.day:1<=o?parseInt(o)+" "+GLOBAL_CONFIG.date_suffix.hour:1<=a?parseInt(a)+" "+GLOBAL_CONFIG.date_suffix.min:GLOBAL_CONFIG.date_suffix.just):parseInt(i/r)},loadComment:(e,t)=>{if("IntersectionObserver"in window){const n=new IntersectionObserver(e=>{e[0].isIntersecting&&(t(),n.disconnect())},{threshold:[0]});n.observe(e)}else t()},scrollToDest:(o,a=500)=>{const i=window.pageYOffset;if(i>o&&(o-=70),"scrollBehavior"in document.documentElement.style)window.scrollTo({top:o,behavior:"smooth"});else{let n=null;o=+o,window.requestAnimationFrame(function e(t){t-=n=n||t;i<o?window.scrollTo(0,(o-i)*t/a+i):window.scrollTo(0,i-(i-o)*t/a),t<a?window.requestAnimationFrame(e):window.scrollTo(0,o)})}},animateIn:(e,t)=>{e.style.display="block",e.style.animation=t},animateOut:(t,e)=>{t.addEventListener("animationend",function e(){t.style.display="",t.style.animation="",t.removeEventListener("animationend",e)}),t.style.animation=e},getParents:(e,t)=>{for(;e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},siblings:(t,n)=>[...t.parentNode.children].filter(e=>n?e!==t&&e.matches(n):e!==t),wrap:(e,t,n)=>{var o,a,i=document.createElement(t);for([o,a]of Object.entries(n))i.setAttribute(o,a);e.parentNode.insertBefore(i,e),i.appendChild(e)},unwrap:e=>{var t=e.parentNode;t!==document.body&&(t.parentNode.insertBefore(e,t),t.parentNode.removeChild(t))},isHidden:e=>0===e.offsetHeight&&0===e.offsetWidth,getEleTop:e=>{let t=e.offsetTop,n=e.offsetParent;for(;null!==n;)t+=n.offsetTop,n=n.offsetParent;return t},loadLightbox:e=>{var t=GLOBAL_CONFIG.lightbox;if("mediumZoom"===t){const n=mediumZoom(e);n.on("open",e=>{var t="dark"===document.documentElement.getAttribute("data-theme")?"#121212":"#fff";n.update({background:t})})}"fancybox"===t&&(e.forEach(e=>{var t,n;"A"!==e.parentNode.tagName&&(t=e.dataset.lazySrc||e.src,n=e.title||e.alt||"",btf.wrap(e,"a",{href:t,"data-fancybox":"gallery","data-caption":n,"data-thumb":t}))}),window.fancyboxRun||(Fancybox.bind("[data-fancybox]",{Hash:!1,Thumbs:{autoStart:!1}}),window.fancyboxRun=!0))},initJustifiedGallery:function(e){e.forEach(function(e){btf.isHidden(e)||fjGallery(e,{itemSelector:".fj-gallery-item",rowHeight:e.getAttribute("data-rowHeight"),gutter:4,onJustify:function(){this.$container.style.opacity="1"}})})},updateAnchor:e=>{var t;e!==window.location.hash&&(e=e||location.pathname,t=GLOBAL_CONFIG_SITE.title,window.history.replaceState({url:location.href,title:t},t,e))},getScrollPercent:(e,t)=>{var n=t.clientHeight,o=document.documentElement.clientHeight,t=t.offsetTop,n=o<n?n-o:document.documentElement.scrollHeight-o,o=Math.round(100*((e-t)/n));return 100<o?100:o<=0?0:o}};