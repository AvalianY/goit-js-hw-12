import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const submitButton = document.querySelector('.form button');
export let page = 1;
export let perPage = 15;
let lastQuery = '';

export async function getImagesByQuery(query,) {
    submitButton.disabled = true;

    if (lastQuery === query) {
        page += 1;
    }
    else {
        lastQuery = query;
        page = 1;
    }
   
    const response = await axios.get('', {
        params: {
            key: '53548536-2a5565f3da63b0c0db767d1af',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: perPage,
        },
    });
    return response.data;
}