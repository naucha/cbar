!function(){"use strict";const e=document.querySelectorAll(".is-favourite"),n=document.getElementsByClassName("casinoFinder");window.addEventListener("load",(()=>{n.length>0&&(()=>{e.forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("fav"),e.classList.contains("fav")?e.parentElement.parentElement.classList.add("favorito"):e.parentElement.parentElement.classList.remove("favorito")}))}));var n=mixitup(".casinoFinder",{multifilter:{enable:!0},controls:{enable:!0},animation:{enable:!1}});const t=document.querySelector(".casinoFinder");let i=document.querySelector("#is-showing"),l=document.querySelectorAll(".mix"),o=document.querySelectorAll('.mix[style="display: none;"]'),s=l.length-o.length;document.querySelector("#removeFilters"),i.innerText=l.length,console.log(n.isMixing()),t.addEventListener("mixEnd",(()=>{i.innerText=s,console.log(n.isMixing())}))})()}))}();