const cardList = document.querySelector('.card-list');

const newCard = (el) => {

    const cardDiv = document.createElement("div");
    const card = document.createElement("div");
    const id = document.createElement("h3");
    const name = document.createElement("h3");
    const sprite = document.createElement("img");

    card.className = "card";
    id.innerHTML = el.id;
    name.innerHTML = el.name;
    sprite.className = 'pokemon-front';
    sprite.src = el.spriteLink;
    sprite.alt = el.name;

    cardDiv.appendChild(id);
    cardDiv.appendChild(sprite);
    cardDiv.appendChild(name);
    card.appendChild(cardDiv)
    cardList.appendChild(card);
}

export default newCard;