import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const gallery = galleryItems;
const divGallery = document.querySelector('div.gallery');

const markup = gallery
  .map(({ preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
  })
  .join('');

divGallery.insertAdjacentHTML('beforeend', markup);

divGallery.addEventListener('click', urlImage);

function urlImage(event) {
  event.preventDefault();
  const url = event.target.dataset.source;
  if (!url) return;
  console.log(url);
  const instance = new SimpleLightbox('.gallery a');
  instance.open();
}
