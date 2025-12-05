import{a as p,S as w,i as l}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();p.defaults.baseURL="https://pixabay.com/api/";async function v(o,r){return(await p.get("",{params:{key:"53548536-2a5565f3da63b0c0db767d1af",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:b}})).data}const y=document.querySelector(".gallery"),m=document.querySelector(".loader"),S=new w(".gallery a",{captionsData:"alt",captionDelay:250});function q(o){const r=o.map(e=>`<li class="gallery-item">
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
        </li>`).join("");y.insertAdjacentHTML("beforeend",r),S.refresh()}function g(){y.innerHTML=""}function h(){m.style.display="block"}function P(){m.style.display="none"}let s=1;const b=15,M=document.querySelector(".form"),c=document.querySelector(".form input"),u=document.querySelector(".button-load-more");let d=[];M.addEventListener("submit",o=>{o.preventDefault(),o.stopImmediatePropagation(),s=1,g(),c.value!==""&&(h(),L(c.value,s))});u.addEventListener("click",o=>{o.stopImmediatePropagation(),h(),s++,L(c.value,s)});async function L(o,r){try{const e=await v(o,r);if(e.hits.length===0){l.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),g(),f();return}d=e.hits,q(d),r>1&&B();const n=Math.ceil(e.totalHits/b);r>=n?(f(),l.info({message:"We're sorry, but you've reached the end of search results."})):O()}catch(e){l.error({message:e,position:"topRight"})}finally{P()}}function B(){const o=document.querySelector(".gallery-item");if(!o)return;const r=o.getBoundingClientRect().height;window.scrollBy({top:r*3,behavior:"smooth"})}function f(){u.style.display="none"}function O(){u.style.display="block"}
//# sourceMappingURL=index.js.map
