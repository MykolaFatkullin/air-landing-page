document.addEventListener("DOMContentLoaded",function(){var e=0,t=document.querySelectorAll(".slider__image"),n=t.length;function i(i){t[e].classList.remove("slider__image--active"),t[e=(e+i+n)%n].classList.add("slider__image--active")}var r=document.querySelector(".slider__button--left"),c=document.querySelector(".slider__button--right");r&&c&&(r.addEventListener("click",function(){return i(-1)}),c.addEventListener("click",function(){return i(1)}))});
//# sourceMappingURL=index.56592bea.js.map
