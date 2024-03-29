// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line

console.log(galleryItems);
const imgGallery = document.querySelector('.gallery');
console.log(imgGallery);

const listImages = galleryItems.map(item => `<div class='gallery__item'>
    <a class="gallery__link" href=${item.original}>
        <img class='gallery__image'
         src = ${item.preview}
         alt = ${item.description}/></a> </div>`).join('');
console.log(listImages)

imgGallery.innerHTML = listImages;

imgGallery.addEventListener('click', showModal                                                            );

const lightbox = new SimpleLightbox('.gallery a', {captions: true, captionSelector: 'img', captionsData: 'alt', captionDelay: 250});

function showModal(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    console.log(event.target)
    event.preventDefault();
}