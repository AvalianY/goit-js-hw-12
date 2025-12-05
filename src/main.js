import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery, perPage } from "./js/pixabay-api.js"
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton } from "./js/render-functions.js"

let page = 1;
let userQuery = '';
const form = document.querySelector('.form');
const searchText = document.querySelector('.form input');
const loadMoreButton = document.querySelector('.button-load-more');
let imgObjArray = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    userQuery = searchText.value.trim();
    if (!userQuery) return;
    page = 1;
    clearGallery();
    showLoader();
    getImagesByQueryMaker(searchText.value.trim(), page);
});

loadMoreButton.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    showLoader();
    page++;
    getImagesByQueryMaker(userQuery, page);
}) 


async function getImagesByQueryMaker(userQuery, page) {
    try {
        const data = await getImagesByQuery(userQuery, page);

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
        top: cardHeight * 2,
        behavior: "smooth"
    });
}