import{a as y,S as v,i as s}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();y.defaults.baseURL="https://pixabay.com/api/";const p=15;async function S(o,r){return(await y.get("",{params:{key:"53548536-2a5565f3da63b0c0db767d1af",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:p}})).data}const m=document.querySelector(".gallery"),g=document.querySelector(".loader"),h=document.querySelector(".button-load-more"),q=new v(".gallery a",{captionsData:"alt",captionDelay:250});function M(o){const r=o.map(e=>`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img 
                class="gallery-image" 
                src="${e.webformatURL}" 
                alt="${e.tags}" 
                />
            </a>
            <div class="info-container">
                <p class="info">Likes<br>${e.likes}</p>
                <p class="info">Views<br>${e.views}</p>
                <p class="info">Comments<br>${e.comments}</p>
                <p class="info">Downloads<br>${e.downloads}</p>
            </div>
        </li>`).join("");m.insertAdjacentHTML("beforeend",r),q.refresh()}function b(){m.innerHTML=""}function L(){g.style.display="block"}function P(){g.style.display="none"}function i(){h.style.display="none"}function B(){h.style.display="block"}let l=1,u="";const $=document.querySelector(".form"),d=document.querySelector(".form input"),O=document.querySelector(".button-load-more");let f=[];$.addEventListener("submit",o=>{if(o.preventDefault(),o.stopImmediatePropagation(),u=d.value.trim(),!u){s.info({message:"The input field cannot be empty or contain spaces."});return}l=1,b(),i(),L(),w(d.value.trim(),l)});O.addEventListener("click",o=>{o.stopImmediatePropagation(),i(),L(),l++,w(u,l)});async function w(o,r){try{const e=await S(o,r);if(e.hits.length===0){s.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),b(),i();return}f=e.hits,M(f),r>1&&I();const n=Math.ceil(e.totalHits/p);r>=n?(i(),s.info({message:"We're sorry, but you've reached the end of search results."})):B()}catch(e){s.error({message:e,position:"topRight"})}finally{P()}}function I(){const o=document.querySelector(".gallery-item");if(!o)return;const r=o.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
