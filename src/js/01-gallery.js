// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryBoxEl = document.querySelector('.gallery');
galleryBoxEl.insertAdjacentHTML('beforeend', galleryCreate(galleryItems));


function galleryCreate() {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
`;
            
    }).join('');
};

new SimpleLightbox('.gallery a ', {
  animationSlide: false,
  fadeSpeed: 300,
  rtl: true,
  closeText: "^",
  navText: ['>','<']
})

// Change code below this line

console.log(galleryItems);
