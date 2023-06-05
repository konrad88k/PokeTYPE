import data from './pokeData.json' assert { type: 'json' };
import newCard from "./newCard.js";

// load from generation 'I' only
// const pokeData = data.pokeData.slice(0, 251);
const pokeData = data.pokeData.slice(0, 809);

function filter(A, B) {

    function typeCondition(obj) {
        if (B === null) {
            return ((obj.type1 === A) || (obj.type2 === A));
        } else {
            return (((obj.type1 === A) || (obj.type2 === A)) && ((obj.type1 === B) || (obj.type2 === B)));
        }
    }

    // display all cards if no tab selected
    if (A === null && B === null) {
        return pokeData;
    }
    return pokeData.filter(typeCondition);
}

const loadList = (a, b) => {

    document.querySelector('.card-list').replaceChildren(); //clear card list

    for (let element of filter(a, b)) {
        newCard(element);
    }

    if (filter(a, b).length === 0) {
        const cardList = document.querySelector('.card-list');
        const noCardsText = document.createElement("h4");
        noCardsText.className = "no-cards-text";
        noCardsText.innerHTML = "no results";
        cardList.appendChild(noCardsText);
    }
}

export default loadList;