import { pokeArr } from "./fetchData.js";
import newCard from "./newCard.js";

function filter(A, B) {

    function typeCondition(obj) {
        if (B === null) {
            return ((obj.type1 === A) || (obj.type2 === A));
        } else {
            return (((obj.type1 === A) || (obj.type2 === A)) && ((obj.type1 === B) || (obj.type2 === B)));
        }
    }
    if (A === null && B === null) {
        return pokeArr;
    }
    return pokeArr.filter(typeCondition);
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
        noCardsText.innerHTML = "There is no pokemon of&nbsp;this&nbsp;type.";
        cardList.appendChild(noCardsText);
    }
}

export default loadList;