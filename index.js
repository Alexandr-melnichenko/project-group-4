import{i as q,a as x,A as T,r as C,S as F,V as r}from"./assets/vendor-CV0iqfMf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();let a=3;const S=3;function R(){const t=document.getElementById("projects-list"),e=Array.from(t.children);for(let o=a;o<a+S&&o<e.length;o++)e[o].style.display="block";a+=S,a>=e.length&&(document.getElementById("load-more").style.display="none")}document.getElementById("load-more").addEventListener("click",R);document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("projects-list");Array.from(t.children).forEach((o,s)=>{s>=a&&(o.style.display="none")})});const I=document.querySelector(".work-together-form"),f=document.querySelector(".input-signature");document.querySelector(".work-together-button");const u=document.querySelector(".input-icon"),$=document.querySelector(".modal-window-paragraph"),m=document.querySelector(".work-together-modal"),V=document.querySelector(".modal-window-button"),d={email:"",message:""};function N(t){const e=t.currentTarget,o=e.email.value.trim(),s=e.message.value.trim();d.email=`${o}`,d.message=`${s}`,localStorage.setItem("feedback-form-state",JSON.stringify(d)),o.includes(".")&&o.includes("@")?(u.classList.remove("is-close-input-icon"),f.classList.add("is-close-input-signature")):o===""?(u.classList.add("is-close-input-icon"),f.classList.add("is-close-input-signature")):(u.classList.add("is-close-input-icon"),f.classList.remove("is-close-input-signature"))}I.addEventListener("input",N);async function D(t){t.preventDefault();const e=t.target,o=e.elements.email.value.trim(),s=e.elements.message.value.trim();try{const n=await H(o,s);$.textContent=n.data.message,m.classList.remove("is-close-modal");const i=document.querySelector(".work-together-textarea"),c=document.querySelector(".work-together-input");localStorage.removeItem("feedback-form-state"),d.email="",d.message="",c.value="",i.value="",u.classList.add("is-close-input-icon")}catch(n){q.warning({backgroundColor:"#F4A460",position:"center",message:"Sorry! Something went wrong, please check that all fields are filled in correctly."}),console.log(n)}}I.addEventListener("submit",D);async function H(t,e){try{return await x.post("https://portfolio-js.b.goit.study/api/requests",{email:`${t}`,comment:`${e}`})}catch(o){console.log(o)}}function v(t){m.classList.add("is-close-modal"),t.key==="Escape"&&m.classList.add("is-close-modal")}V.addEventListener("click",v);document.addEventListener("keydown",v);m.addEventListener("click",v);new T(".accordion-container",{openOnInit:[0],collapse:!1});C();const W="https://portfolio-js.b.goit.study/api/reviews",E=document.querySelector(".prev-button"),b=document.querySelector(".next-button"),z=document.querySelector(".reviews");let M=!1,y=!1;async function G(){try{const{data:t}=await x.get(W);J(t),K()}catch{M=!0}}function J(t){const e=t.map(({review:o,avatar_url:s,author:n})=>`
        <li class="review-item swiper-slide">
            <p class="review-text">${o}</p>
            <div class="person-box">
                <img class="person-icon" src="${s}" alt="${n}">
                <p class="person-text">${n}</p>
            </div>
        </li>
    `).join("");document.querySelector(".swiper-wrapper").innerHTML=e}function K(){const t={slidesPerView:1,spaceBetween:32,loop:!1,speed:500,navigation:{nextEl:".next-button",prevEl:".prev-button"},breakpoints:{360:{slidesPerView:1,slidesPerGroup:1},768:{slidesPerView:1,slidesPerGroup:1},1280:{slidesPerView:2,slidesPerGroup:2}},on:{slideChange:o}},e=new F(".swiper-container",t);document.addEventListener("keydown",s=>{s.key==="ArrowRight"&&!b.disabled?(s.preventDefault(),e.slideNext()):s.key==="ArrowLeft"&&!E.disabled&&(s.preventDefault(),e.slidePrev())}),window.addEventListener("resize",()=>e.update());function o(){E.disabled=e.isBeginning,b.disabled=e.isEnd}o()}function U(t){const e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}function _(){M&&U(z)&&(q.show({title:"Not Found",messageColor:"black",color:"red",timeout:2e3,position:"topRight"}),document.removeEventListener("scroll",A))}function A(t){y||(window.requestAnimationFrame(()=>{_(),y=!1}),y=!0)}G();document.addEventListener("scroll",A);const Q=document.querySelector(".benefits-list"),X={root:null,rootMargin:"0px",threshold:.1},Y=t=>{t.forEach(e=>{e.isIntersecting&&(new r("icon-hourglass-02",{type:"oneByOne",duration:150,animTimingFunction:r.EASE}),new r("icon-user-01",{type:"oneByOne",duration:150,animTimingFunction:r.EASE}),new r("icon-brush-01",{type:"oneByOne",duration:150,animTimingFunction:r.EASE}),new r("icon-message-chat-circle",{type:"oneByOne",duration:150,animTimingFunction:r.EASE}),B.unobserve(e.target))})},B=new IntersectionObserver(Y,X);B.observe(Q);let p=document.querySelector("#chk"),P=document.querySelector("body"),w=localStorage.getItem("theme");const Z=()=>{w==="dark"?g():L()},ee=()=>{window.matchMedia("prefers-color-scheme: dark").addEventListener("change",()=>{O()})},O=()=>{w==null&&window.matchMedia("prefers-color-scheme: dark").matches||w&&window.matchMedia("prefers-color-scheme: dark").matches?g():L()},g=()=>{P.classList="dark",localStorage.setItem("theme","dark"),p.checked=!0},L=()=>{P.classList="light",localStorage.setItem("theme","light"),p.checked=!1};ee();O();Z();p.addEventListener("click",()=>p.checked?g():L());const h=document.querySelector(".mobile-menu-header"),te=document.querySelectorAll(".menuItem-header"),oe=document.querySelector(".btn-menu"),l=document.querySelector(".btn-close-icon"),k=document.querySelector(".btn-menu-icon");function j(){h.classList.contains("showMenu")?(h.classList.remove("showMenu"),l.style.display="none",k.style.display="block"):(h.classList.add("showMenu"),l.style.display="flex",l.style.position="fixed",l.style.width="32px",l.style.height="32px",k.style.display="none")}oe.addEventListener("click",j);te.forEach(function(t){t.addEventListener("click",j)});
//# sourceMappingURL=index.js.map
