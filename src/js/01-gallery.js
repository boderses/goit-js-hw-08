import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const galleryItemsMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);

function createGallery(galleryItems) {
    return galleryItems.map(galleryItem => {
        return `
        <li>
            <a class="gallery__item" href="${galleryItem.original}">
                <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/>
            </a>
        </li> 
    `;
    }).join("");
}

let gallery = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: "alt"});
gallery.on('show.simplelightbox');