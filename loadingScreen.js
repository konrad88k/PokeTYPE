const loadingScreen = function () {

    const cardList = document.querySelector('.card-list');

    const loadingPlaceholder = document.createElement("div");
    const pokeball = document.createElement("img");

    loadingPlaceholder.className = "pokeball";
    pokeball.src = "assets/pokeball_spinning.gif"
    pokeball.alt = "spinning pokeball"

    loadingPlaceholder.appendChild(pokeball);
    cardList.appendChild(loadingPlaceholder);
}

export default loadingScreen;