import{a as y,S as w,i as l}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();y.defaults.baseURL="https://pixabay.com/api/";const p=15;async function v(o,r){return(await y.get("",{params:{key:"53548536-2a5565f3da63b0c0db767d1af",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:p}})).data}const m=document.querySelector(".gallery"),g=document.querySelector(".loader"),M=new w(".gallery a",{captionsData:"alt",captionDelay:250});function S(o){const r=o.map(e=>`<li class="gallery-item">
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
        </li>`).join("");m.insertAdjacentHTML("beforeend",r),M.refresh()}function h(){m.innerHTML=""}function b(){g.style.display="block"}function q(){g.style.display="none"}function u(){loadMoreButton.style.display="none"}function B(){loadMoreButton.style.display="block"}let n=1,c="";const P=document.querySelector(".form"),d=document.querySelector(".form input"),$=document.querySelector(".button-load-more");let f=[];P.addEventListener("submit",o=>{o.preventDefault(),o.stopImmediatePropagation(),c=d.value.trim(),c&&(n=1,h(),b(),L(d.value.trim(),n))});$.addEventListener("click",o=>{o.stopImmediatePropagation(),b(),n++,L(c,n)});async function L(o,r){try{const e=await v(o,r);if(e.hits.length===0){l.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),h(),u();return}f=e.hits,S(f),r>1&&O();const s=Math.ceil(e.totalHits/p);r>=s?(u(),l.info({message:"We're sorry, but you've reached the end of search results."})):B()}catch(e){l.error({message:e,position:"topRight"})}finally{q()}}function O(){const o=document.querySelector(".gallery-item");if(!o)return;const r=o.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
