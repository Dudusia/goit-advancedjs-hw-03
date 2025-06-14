import{S as n,i as c}from"./assets/vendor-B2mb6eXk.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p=t=>{const a="50853777-8fecba6f69a77bb52efd7171d",o="https://pixabay.com/api",l=new URLSearchParams({key:a,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${l}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},u=({tags:t,largeImageURL:a,likes:o,views:l,comments:e,downloads:r})=>`
    <li class="gallery-item">
        <a href="${a}" class="gallery-link">
            <img src="${a}" alt="${t}" width="360" height="200" class="gallery-image">
        </a>
        <div class="gallery-item-stats">
            <p class="gallery-item-description"><span class="gallery-item-property">Views</span><br>${l}</p>
            <p class="gallery-item-description"><span class="gallery-item-property">Likes</span><br>${o}</p>
            <p class="gallery-item-description"><span class="gallery-item-property">Comments</span><br>${e}</p>
            <p class="gallery-item-description"><span class="gallery-item-property">Downloads</span><br>${r}</p>
        </div>
    </li>
  `,s={gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader"),searchForm:document.querySelector(".search-form"),searchBtn:document.querySelector(".search-button"),searchInput:document.querySelector(".search-input")};var m=new n(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});s.searchForm.addEventListener("submit",t=>{t.preventDefault()});s.searchBtn.addEventListener("click",()=>{if(s.searchInput.value.trim())s.loader.classList.add("active"),p(s.searchInput.value).then(t=>{if(t.total===0){c.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),s.gallery.innerHTML="";return}console.log(t.hits);const a=t.hits.map(o=>u(o)).join("");s.gallery.innerHTML=a,m.refresh()}).catch(t=>{console.log(t)}).finally(()=>{s.loader.classList.remove("active")});else return});
//# sourceMappingURL=index.js.map
