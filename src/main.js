import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImagesByQuery } from './js/pixabay-api';
import { createGalleryCardTemplate } from './js/render-functions';

const refs = {
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.js-loader'),
  searchForm: document.querySelector('.search-form'),
  searchBtn: document.querySelector('.search-button'),
  searchInput: document.querySelector('.search-input'),
};

/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

refs.searchForm.addEventListener('submit', evt => {
  evt.preventDefault();
});

refs.searchBtn.addEventListener('click', () => {
  if (!refs.searchInput.value.trim()) {
    return;
  } else {
    refs.gallery.innerHTML = '';
    refs.loader.classList.add('active');
    fetchImagesByQuery(refs.searchInput.value)
      .then(data => {
        if (data.total === 0) {
          iziToast.warning({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
          return;
        }
        console.log(data.hits);
        const galleryCardsTemplate = data.hits
          .map(pictureInfo => createGalleryCardTemplate(pictureInfo))
          .join('');

        refs.gallery.innerHTML = galleryCardsTemplate;
        lightbox.refresh();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        refs.loader.classList.remove('active');
      });
  }
});
