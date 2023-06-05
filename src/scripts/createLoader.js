const createLoader = function () {

    const cardList = document.querySelector('.card-list');

    const loadingPlaceholder = document.createElement("div");
    loadingPlaceholder.className = "pokeball";
    cardList.appendChild(loadingPlaceholder);

    const pokeball = document.createElement("img");
    pokeball.src = "assets/pokeball_spinning.gif";
    pokeball.alt = "spinning pokeball";
    loadingPlaceholder.appendChild(pokeball);
}

export default createLoader;