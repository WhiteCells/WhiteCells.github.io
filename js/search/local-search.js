window.addEventListener("load",()=>{let t=!1,n=[];const a=document.getElementById("search-mask"),e=()=>{var e=document.body.style;e.width="100%",e.overflow="hidden",btf.animateIn(a,"to_show 0.5s"),btf.animateIn(document.querySelector("#local-search .search-dialog"),"titleScale 0.5s"),setTimeout(()=>{document.querySelector("#local-search-input input").focus()},100),t||(o(),t=!0),document.addEventListener("keydown",function e(t){"Escape"===t.code&&(l(),document.removeEventListener("keydown",e))})},l=()=>{var e=document.body.style;e.width="",e.overflow="",btf.animateOut(document.querySelector("#local-search .search-dialog"),"search_close .5s"),btf.animateOut(a,"to_hide 0.5s")},r=()=>{document.querySelector("#search-button > .search").addEventListener("click",e)},c=async e=>{var t=await fetch(e),a=/\.json$/.test(e)?await t.json():(e=await t.text(),[...(await(new window.DOMParser).parseFromString(e,"text/xml")).querySelectorAll("entry")].map(e=>({title:e.querySelector("title").textContent,content:e.querySelector("content")&&e.querySelector("content").textContent,url:e.querySelector("url").textContent})));return t.ok&&((e=document.getElementById("loading-database")).nextElementSibling.style.display="block",e.remove()),a},o=()=>{GLOBAL_CONFIG.localSearch.preload||(n=c(GLOBAL_CONFIG.localSearch.path));var e=document.querySelector("#local-search-input input");const t=document.getElementById("local-search-results"),a=document.getElementById("loading-status");e.addEventListener("input",function(){const u=this.value.trim().toLowerCase().split(/[\s]+/);if(""===u[0])t.innerHTML="";else{a.innerHTML='<i class="fas fa-spinner fa-pulse"></i>';let d='<div class="search-result-list">';if(!(u.length<=0)){let i=0;n.then(e=>{e.forEach(r=>{let a=!0,c=r.title?r.title.trim().toLowerCase():"";const o=r.content?r.content.trim().replace(/<[^>]+>/g,"").toLowerCase():"";r=r.url.startsWith("/")?r.url:GLOBAL_CONFIG.root+r.url;let n,l=-1,s=-1;if(""!==c||""!==o?u.forEach((e,t)=>{n=c.indexOf(e),l=o.indexOf(e),n<0&&l<0?a=!1:(l<0&&(l=0),0===t&&(s=l))}):a=!1,a){if(0<=s){let e=s-30,t=s+100,a="",n="",l=(0==(e=e<0?0:e)?t=100:a="...",t>o.length?t=o.length:n="...",o.substring(e,t));u.forEach(e=>{let t=e;1===e.length&&/[^\w\s]+/.test(e)&&(t="\\"+e);var a=new RegExp(t,"gi");l=l.replace(a,'<span class="search-keyword">'+e+"</span>"),c=c.replace(a,'<span class="search-keyword">'+e+"</span>")}),d+='<div class="local-search__hit-item"><a href="'+r+'" class="search-result-title">'+c+"</a>",i+=1,""!==o&&(d+='<p class="search-result">'+a+l+n+"</p>")}d+="</div>"}}),0===i&&(d+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,this.value.trim())+"</div>"),d+="</div>",t.innerHTML=d,""!==u[0]&&(a.innerHTML=""),window.pjax&&window.pjax.refresh(t)})}}})};r(),document.querySelector("#local-search .search-close-button").addEventListener("click",l),a.addEventListener("click",l),GLOBAL_CONFIG.localSearch.preload&&(n=c(GLOBAL_CONFIG.localSearch.path)),window.addEventListener("pjax:complete",()=>{btf.isHidden(a)||l(),r()})});