var titleTime,OriginTitile=document.title;document.addEventListener("visibilitychange",function(){document.hidden?(document.title="(＞﹏＜)别走呀",clearTimeout(titleTime)):(document.title="(=•ω＜=)☆回来了",titleTime=setTimeout(function(){document.title=OriginTitile},1e3))});