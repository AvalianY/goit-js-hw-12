import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query,) {
    return axios.get('', {
        params: {
            key: '53548536-2a5565f3da63b0c0db767d1af',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    }).then(response => response.data);
}