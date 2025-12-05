// pixabay-api.js
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const perPage = 15;


export async function getImagesByQuery(query, page) {
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
