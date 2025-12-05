import{a as y,S,i as c}from"./assets/vendor-DvfmeZXB.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();y.defaults.baseURL="https://pixabay.com/api/";async function q(o,e=n){return(await y.get("",{params:{key:"53548536-2a5565f3da63b0c0db767d1af",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:b}})).data}const p=document.querySelector(".gallery"),m=document.querySelector(".loader"),O=new S(".gallery a",{captionsData:"alt",captionDelay:250});function P(o){const e=o.map(r=>`<li class="gallery-item">
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
        </li>`).join("");p.insertAdjacentHTML("beforeend",e),O.refresh()}function g(){p.innerHTML=""}function h(){m.style.display="block"}function $(){m.style.display="none"}let n=1,b=15;const v=document.querySelector(".form"),s=document.querySelector(".form input"),L=document.querySelector(".form button"),i=document.querySelector(".button-load-more");let d=[],f="";L.disabled=!0;v.addEventListener("input",()=>{L.disabled=s.value===""});v.addEventListener("submit",o=>{o.preventDefault(),s.value!==""&&(f!==s.value&&(n=1,g(),f=s.value),h(),w(s.value))});i.addEventListener("click",()=>{h(),n++,w(s.value)});async function w(o){try{const e=await q(o);if(e.hits.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),g(),i.style.display="none";return}d=e.hits,P(d),n>1&&B();const r=Math.ceil(e.totalHits/b);n>=r?(i.style.display="none",c.info({message:"We're sorry, but you've reached the end of search results."})):i.style.display="block"}catch(e){c.error({message:e,position:"topRight"})}finally{$()}}function B(){const o=document.querySelector(".gallery-item");if(!o)return;const e=o.getBoundingClientRect().height;window.scrollBy({top:e*3,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
