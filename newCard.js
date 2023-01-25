const newCard = (el) => {

    const cardList = document.querySelector('.card-list');
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

    cardDiv.appendChild(id);
    cardDiv.appendChild(sprite);
    cardDiv.appendChild(name);
    card.appendChild(cardDiv)
    cardList.appendChild(card);
}

export default newCard;