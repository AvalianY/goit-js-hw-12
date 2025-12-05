import{a as p,S as q,i as c}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();p.defaults.baseURL="https://pixabay.com/api/";const $=document.querySelector(".form button");let a=1,m=15,d="";async function B(o){return $.disabled=!0,d===o?a+=1:(d=o,a=1),(await p.get("",{params:{key:"53548536-2a5565f3da63b0c0db767d1af",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:m}})).data}const g=document.querySelector(".gallery"),h=document.querySelector(".loader"),O=new q(".gallery a",{captionsData:"alt",captionDelay:250});function P(o){const t=o.map(r=>`<li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}">
                <img 
                class="gallery-image" 
                src="${r.webformatURL}" 
                alt="${r.tags}" 
                />
            </a>
            <div class="info-container">
                <p class="info">Likes<br>${r.likes}</p>
                <p class="info">Views<br>${r.views}</p>
                <p class="info">Comments<br>${r.comments}</p>
                <p class="info">Downloads<br>${r.downloads}</p>
            </div>
        </li>`).join("");g.insertAdjacentHTML("beforeend",t),O.refresh()}function b(){g.innerHTML=""}function L(){h.style.display="block"}function M(){h.style.display="none"}const v=document.querySelector(".form"),n=document.querySelector(".form input"),S=document.querySelector(".form button"),l=document.querySelector(".button-load-more");let f=[],y="";S.disabled=!0;v.addEventListener("input",()=>{S.disabled=n.value===""});v.addEventListener("submit",o=>{o.preventDefault(),y!==n.value&&(b(),y=n.value),L(),w(n.value)});l.addEventListener("click",()=>{L(),w(n.value)});function w(o){B(o).then(t=>{if(t.hits.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),b(),l.style.display="none";return}f=t.hits,P(f),R();const r=Math.ceil(t.totalHits/m);a>=r?(l.style.display="none",c.info({message:"We're sorry, but you've reached the end of search results."})):l.style.display="block"}).catch(t=>{c.error({message:t,position:"topRight"})}).finally(()=>M())}function R(){const o=document.querySelector(".gallery-item");if(!o)return;const t=o.getBoundingClientRect().height;window.scrollBy({top:t*3,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
