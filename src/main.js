import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api.js"
import { createGallery } from "./js/render-functions.js"
import { clearGallery } from "./js/render-functions.js"
import { showLoader } from "./js/render-functions.js"
import { hideLoader } from "./js/render-functions.js"

export let page = 1;
export let perPage = 15;
const form = document.querySelector('.form');
const searchText = document.querySelector('.form input');
const submitButton = document.querySelector('.form button');
const loadMoreButton = document.querySelector('.button-load-more');
let imgObjArray = [];
let lastQuery = '';

submitButton.disabled = true;

form.addEventListener('input', () => {
    submitButton.disabled = searchText.value !== '' ? false : true;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (searchText.value === '') {
        return;
    }

    if (lastQuery !== searchText.value) {
        page = 1;
        clearGallery();
        lastQuery = searchText.value;
    }
    showLoader();
    getImagesByQueryMaker(searchText.value);
   
});

loadMoreButton.addEventListener('click', () => {
    showLoader();
    page++;
    getImagesByQueryMaker(searchText.value);
}) 


async function getImagesByQueryMaker(searchText) {
    try {
        const data = await getImagesByQuery(searchText);

        if (data.hits.length === 0) {
            iziToast.info({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
            });
            clearGallery();
            loadMoreButton.style.display = 'none';
            return;
        }

        imgObjArray = data.hits;
        createGallery(imgObjArray);

        if (page > 1) {
            scrollGallery();
        }

        const totalPages = Math.ceil(data.totalHits / perPage);

        if (page >= totalPages) {
            loadMoreButton.style.display = 'none';
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
            });
        } else {
            loadMoreButton.style.display = 'block';
        }

    } catch (error) {
        iziToast.error({
            message: error,
            position: "topRight",
        });
    } finally {
        hideLoader();
    }
}

function scrollGallery() {
    const firstCard = document.querySelector('.gallery-item');
    if (!firstCard) return;

    const cardHeight = firstCard.getBoundingClientRect().height;

    window.scrollBy({
        top: cardHeight * 3,
        behavior: "smooth"
    });
}