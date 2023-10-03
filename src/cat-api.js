import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_wL4uK0RiO3p7HQyYnchQ25bPykCwwepIPhnFwFMW65GOJMWm5c12SX32fjTiJ1cB";

function fetchCatByBreed(id) {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`)
        .then(response => {
            return response.data;
        });
}

function fetchBreeds() {
    return axios.get('https://api.thecatapi.com/v1/breeds').then(
        response => {
            return response.data;
        })
}

export { fetchCatByBreed, fetchBreeds };