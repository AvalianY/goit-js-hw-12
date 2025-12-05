import{a as f,S as w,i as c}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();f.defaults.baseURL="https://pixabay.com/api/";async function S(t,r){return(await f.get("",{params:{key:"53548536-2a5565f3da63b0c0db767d1af",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:h}})).data}const p=document.querySelector(".gallery"),y=document.querySelector(".loader"),q=new w(".gallery a",{captionsData:"alt",captionDelay:250});function P(t){const r=t.map(o=>`<li class="gallery-item">
            <a class="gallery-link" href="${o.largeImageURL}">
                <img 
                class="gallery-image" 
                src="${o.webformatURL}" 
                alt="${o.tags}" 
                />
            </a>
            <div class="info-container">
                <p class="info">Likes<br>${o.likes}</p>
                <p class="info">Views<br>${o.views}</p>
                <p class="info">Comments<br>${o.comments}</p>
                <p class="info">Downloads<br>${o.downloads}</p>
            </div>
        </li>`).join("");p.insertAdjacentHTML("beforeend",r),q.refresh()}function m(){p.innerHTML=""}function g(){y.style.display="block"}function O(){y.style.display="none"}let s=1;const h=15,b=document.querySelector(".form"),i=document.querySelector(".form input"),L=document.querySelector(".form button"),n=document.querySelector(".button-load-more");let d=[];L.disabled=!0;b.addEventListener("input",()=>{L.disabled=i.value===""});b.addEventListener("submit",t=>{t.preventDefault(),t.stopImmediatePropagation(),g(),s=1,m(),i.value!==""&&v(i.value)});n.addEventListener("click",t=>{t.stopImmediatePropagation(),g(),s++,v(i.value)});async function v(t){try{const r=await S(t);if(r.hits.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m(),n.style.display="none";return}d=r.hits,P(d),s>1&&$();const o=Math.ceil(r.totalHits/h);s>=o?(n.style.display="none",c.info({message:"We're sorry, but you've reached the end of search results."})):n.style.display="block"}catch(r){c.error({message:r,position:"topRight"})}finally{O()}}function $(){const t=document.querySelector(".gallery-item");if(!t)return;const r=t.getBoundingClientRect().height;window.scrollBy({top:r*3,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
