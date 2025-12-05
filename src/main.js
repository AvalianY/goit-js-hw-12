import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api.js"
import { createGallery } from "./js/render-functions.js"
import { clearGallery } from "./js/render-functions.js"
    
const form = document.querySelector('.form');
const searchText = document.querySelector('.form input');
const submitButton = document.querySelector('.form button');
let imgObjArray = [];

submitButton.disabled = true;

form.addEventListener('input', () => {
    submitButton.disabled = searchText.value !== '' ? false : true;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    getImagesByQuery(searchText.value)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.info({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
                });
                clearGallery();
                return;
            }
            imgObjArray = data.hits;
            createGallery(imgObjArray);
        })
        .catch(error => {
            iziToast.error({
                message: error.message,
                position: "topRight",
            });
        });
});
