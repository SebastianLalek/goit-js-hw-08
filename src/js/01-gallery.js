import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const galleryImages = galleryItems
  .map(
    img =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${img.original}">
  <img
  class="gallery__image"
  src="${img.preview}"
  alt="${img.description}"
  />
  </a>
  </li>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', galleryImages);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

gallery.addEventListener('click', e => {
  e.preventDefault();
});
