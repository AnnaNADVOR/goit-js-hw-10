import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_wL4uK0RiO3p7HQyYnchQ25bPykCwwepIPhnFwFMW65GOJMWm5c12SX32fjTiJ1cB";

const selectRef = document.querySelector('.breed-select');

function fetchBreeds() {
    return axios.get('https://api.thecatapi.com/v1/breeds').then(response => {
        return response.data;
    });
        
}
function fetchCatByBreed(id) {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`)
        .then(response => {
            return response.data;
        });

}

fetchBreeds().then(renderBreeds);  

selectRef.addEventListener("change", onSelectBreed);



function renderBreeds (breeds) {
    const option = breeds.map((breed) => `<option value ="${breed.id}">${breed.name}</option>`).join("");
  
    selectRef.innerHTML = option;
}


function onSelectBreed (event) {
  
    const breedId = event.target.value; 
    fetchCatByBreed(breedId).then(cat => console.log (cat[0].url, cat[0].breeds[0].description, cat[0].breeds[0].temperament));
  
}



 