parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".burger-button"),t=document.querySelectorAll(".menu__top-line"),n=document.querySelector(".menu"),o=document.querySelector(".menu__list"),i=document.querySelectorAll(".menu__link"),s=document.querySelector(".menu__contacts"),l=document.querySelector(".page__body");function r(){e.classList.toggle("burger-button--is-active"),n.classList.toggle("menu--is-open"),o.classList.toggle("menu__list--is-visible"),s.classList.toggle("menu__contacts--is-visible"),l.classList.toggle("page__body--with-menu"),t.forEach(function(e){return e.classList.toggle("menu__top-line--max-width")})}function c(){n.classList.contains("menu--is-open")&&e.click()}e.addEventListener("click",r),i.forEach(function(e){return e.addEventListener("click",c)})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".event__title").forEach(function(e){var t=e.innerHTML.split(" "),n=' <span class="event__last-word">'+t.splice(-1).join(" ")+"</span>";e.innerHTML=t.join(" ")+n})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".event").forEach(function(e){e.addEventListener("mouseover",function(t){t.target.classList.contains("event__image")&&(t.target.style.transform="scale(1.1)",e.querySelector(".event__title").classList.add("event__title--mouseover")),(t.target.classList.contains("event__title")||t.target.classList.contains("event__last-word"))&&(e.querySelector(".event__title").classList.add("event__title--mouseover"),e.querySelector(".event__image").style.transform="scale(1.1)")}),e.addEventListener("mouseout",function(){e.querySelector(".event__image").style.transform=null,e.querySelector(".event__title").classList.remove("event__title--mouseover")})})}),document.addEventListener("DOMContentLoaded",function(){var e,t=!1;function n(){window.innerWidth<1024?t||(t=!0,e=new Swiper(".gallery__carousel",{slidesPerView:1,spaceBetween:16,pagination:{el:".gallery__pagination",bulletClass:"gallery__pagination-bullet",bulletActiveClass:"gallery__pagination-bullet--active",clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:20}}})):t&&(e.destroy(),t=!1)}n(),window.addEventListener("resize",n)}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#subscribeButton"),t=document.querySelector(".subscribe__form");e.addEventListener("click",function(e){e.preventDefault(),!0===t.reportValidity()&&t.reset()},!1)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.5ce80a78.js.map