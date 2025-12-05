import{a as f,S,i as c}from"./assets/vendor-DvfmeZXB.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();f.defaults.baseURL="https://pixabay.com/api/";async function q(r,o){return(await f.get("",{params:{key:"53548536-2a5565f3da63b0c0db767d1af",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:h}})).data}const p=document.querySelector(".gallery"),y=document.querySelector(".loader"),P=new S(".gallery a",{captionsData:"alt",captionDelay:250});function O(r){const o=r.map(e=>`<li class="gallery-item">
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
        </li>`).join("");p.insertAdjacentHTML("beforeend",o),P.refresh()}function m(){p.innerHTML=""}function g(){y.style.display="block"}function u(){y.style.display="none"}let s=1;const h=15,b=document.querySelector(".form"),i=document.querySelector(".form input"),L=document.querySelector(".form button"),v=document.querySelector(".button-load-more");let d=[];L.disabled=!0;b.addEventListener("input",()=>{L.disabled=i.value===""});b.addEventListener("submit",r=>{r.preventDefault(),r.stopImmediatePropagation(),s=1,m(),i.value!==""&&(g(),w(i.value,s))});v.addEventListener("click",r=>{r.stopImmediatePropagation(),g(),s++,w(i.value,s)});async function w(r,o){try{const e=await q(r,o);if(e.hits.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m(),u();return}d=e.hits,O(d),o>1&&$();const n=Math.ceil(e.totalHits/h);o>=n&&(v.style.display="none",c.info({message:"We're sorry, but you've reached the end of search results."}))}catch(e){c.error({message:e,position:"topRight"})}finally{u()}}function $(){const r=document.querySelector(".gallery-item");if(!r)return;const o=r.getBoundingClientRect().height;window.scrollBy({top:o*3,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
