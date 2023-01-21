// import { pokeDataArr } from "./fetchData";
const cardList = document.querySelector('.card-list');

function newCard(el) {
    const card = document.createElement("div");
    const cardDiv = document.createElement("div");
    const id = document.createElement("h3");
    const sprite = document.createElement("img");
    const name = document.createElement("h3");
    card.className = "card";
    id.innerHTML = el.id;
    sprite.className = 'pokemon-front';
    sprite.src = el.spriteLink;
    sprite.alt = el.name;
    name.innerHTML = el.name;
    //attach to parent node
    cardDiv.appendChild(id);
    cardDiv.appendChild(sprite);
    cardDiv.appendChild(name);
    card.appendChild(cardDiv)
    cardList.appendChild(card);
}
const displayCards = function() {
    for (const element of pokeDataArr) {
        newCard(element);
    }
}
displayCards();