import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api.js"
import { createGallery } from "./js/render-functions.js"
import { clearGallery } from "./js/render-functions.js"
import { showLoader } from "./js/render-functions.js"
import { hideLoader } from "./js/render-functions.js"

export let page = 1;
export const perPage = 15;
const form = document.querySelector('.form');
const searchText = document.querySelector('.form input');
const loadMoreButton = document.querySelector('.button-load-more');
let imgObjArray = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    page = 1;
    clearGallery();
    if (searchText.value === '') return;
    showLoader();
    getImagesByQueryMaker(searchText.value, page);
});

loadMoreButton.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    showLoader();
    page++;
    getImagesByQueryMaker(searchText.value, page);
}) 


async function getImagesByQueryMaker(searchText, page) {
    try {
        const data = await getImagesByQuery(searchText, page);

        if (data.hits.length === 0) {
            iziToast.info({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
            });
            clearGallery();
            hideLoadMoreButton();
            return;
        }

        imgObjArray = data.hits;
        createGallery(imgObjArray);

        if (page > 1) {
            scrollGallery();
        }

        const totalPages = Math.ceil(data.totalHits / perPage);

        if (page >= totalPages) {
            hideLoadMoreButton();
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
            });
        } else {
            showLoadMoreButton();
        }

    } catch (error) {
        iziToast.error({
            message: error,
            position: "topRight",
        });
    } finally { hideLoader(); }
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

function hideLoadMoreButton() {
    loadMoreButton.style.display = 'none';
}

function showLoadMoreButton() {
    loadMoreButton.style.display = 'block';
}