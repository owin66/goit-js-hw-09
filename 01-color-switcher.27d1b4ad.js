const t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.querySelector("body")};let e="";t.start.addEventListener("click",(function(o){t.start.setAttribute("disabled",!0),t.stop.removeAttribute("disabled"),e=setInterval((()=>{console.log(t.body.style.backgroundColor),t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stop.addEventListener("click",(function(o){clearInterval(e),t.stop.setAttribute("disabled",!0),t.start.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.27d1b4ad.js.map