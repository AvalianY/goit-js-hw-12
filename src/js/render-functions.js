import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    });

export function createGallery(images) {
    
    const galleryContent = images.map(img => 
        `<li class="gallery-item">
            <a class="gallery-link" href="${img.largeImageURL}">
                <img 
                class="gallery-image" 
                src="${img.webformatURL}" 
                alt="${img.tags}" 
                />
            </a>
            <div class="info-container">
                <p class="info">Likes<br>${img.likes}</p>
                <p class="info">Views<br>${img.views}</p>
                <p class="info">Comments<br>${img.comments}</p>
                <p class="info">Downloads<br>${img.downloads}</p>
            </div>
        </li>`
    ).join('');

    gallery.insertAdjacentHTML("beforeend", galleryContent);
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
     loader.style.display = 'block';
}

export function hideLoader() {
     loader.style.display = 'none';
}

