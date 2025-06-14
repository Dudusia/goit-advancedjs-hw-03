import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const api_key = process.env.PIXABAY_API_KEY

const searchBtn = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input")

searchBtn.addEventListener('click', () => {
     if (!searchInput.value.trim()) {
        return;
     } else {
        
     }
})