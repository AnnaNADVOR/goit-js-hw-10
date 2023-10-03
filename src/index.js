import { fetchCatByBreed, fetchBreeds }  from "./cat-api";

const Refs = {
    select: document.querySelector('.breed-select'),
    catContainer: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    info: document.querySelector('.cat-info'),

}

fetchBreeds().then(renderBreeds).catch(onError);

Refs.select.addEventListener("change", onSelectBreed);


function renderBreeds(breeds) {
    const option = breeds.map((breed) => `<option value ="${breed.id}">${breed.name}</option>`).join("");
  
    Refs.select.innerHTML = option;
    
    Refs.loader.style.display = 'none';
    Refs.select.hidden = false;    
}

function onSelectBreed(event) {
    const breedId = event.target.value; 
   
    Refs.error.hidden = true;
    Refs.loader.style.display = 'flex';
    Refs.info.style.display = 'none';

    fetchCatByBreed(breedId).then(createCard).catch(onError);       
}
 
function createCard(cat) {
    Refs.loader.style.display = 'none';

    if (cat.length === 0) {
        onError();
        return;
    }
    
    Refs.info.style.display = 'flex';
    
    const card = cat.map(() =>
        `<img src = "${cat[0].url}" alt = "${cat[0].breeds[0].name}"> 
        <div class = "content">
            <h2 class = "info_tittle">${cat[0].breeds[0].name}</h2> 
            <p class = "description">${cat[0].breeds[0].description}</p> 
            <p>
                <span class = "temperament">Temperament:</span>
                ${cat[0].breeds[0].temperament}.
            </p>
        </div>`).join("");
    
    Refs.catContainer.innerHTML = card;    
}

function onError() {
    Refs.error.hidden = false;
    Refs.loader.style.display = 'none';
}