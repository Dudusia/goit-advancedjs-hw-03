import{S as n,i as c}from"./assets/vendor-B2mb6eXk.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p=t=>{const s="50853777-8fecba6f69a77bb52efd7171d",o="https://us-central1-dev-test-448809.cloudfunctions.net/pixabayProxy/",l=new URLSearchParams({key:s,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${l}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},u=({tags:t,largeImageURL:s,webformatURL:o,likes:l,views:e,comments:r,downloads:i})=>`
    <li class="gallery-item">
        <a href="${s}" class="gallery-link">
            <img src="${o}" alt="${t}" width="360" height="200" class="gallery-image">
        </a>
        <div class="gallery-item-stats">
            <p class="gallery-item-description"><span class="gallery-item-property">Views</span><br>${e}</p>
            <p class="gallery-item-description"><span class="gallery-item-property">Likes</span><br>${l}</p>
            <p class="gallery-item-description"><span class="gallery-item-property">Comments</span><br>${r}</p>
            <p class="gallery-item-description"><span class="gallery-item-property">Downloads</span><br>${i}</p>
        </div>
    </li>
  `,a={gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader"),searchForm:document.querySelector(".search-form"),searchBtn:document.querySelector(".search-button"),searchInput:document.querySelector(".search-input")};var m=new n(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});a.searchForm.addEventListener("submit",t=>{t.preventDefault()});a.searchBtn.addEventListener("click",()=>{if(a.searchInput.value.trim())a.loader.classList.add("active"),p(a.searchInput.value).then(t=>{if(t.total===0){c.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.gallery.innerHTML="";return}console.log(t.hits);const s=t.hits.map(o=>u(o)).join("");a.gallery.innerHTML=s,m.refresh()}).catch(t=>{console.log(t)}).finally(()=>{a.loader.classList.remove("active")});else return});
//# sourceMappingURL=index.js.map
