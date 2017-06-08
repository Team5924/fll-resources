// fix ios opening new pages in safari
for(var a=document.getElementsByTagName("a"),i=0;i<a.length;i++)a[i].onclick=function(){return window.location=this.getAttribute("href"),!1};