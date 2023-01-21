// import fetchData from "./fetchData";
// import displayCards from "./displayCards";

// fetchData();
// displayCards();
const pokeDataArr = [];
const fetchData = async function() {
    try {
        for (let i=1; i<=386; i++){
            let data1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            let resp = await data1.json();
            let pokeObj = {
                id: resp.id,
                name: resp.name,
                spriteLink: resp.sprites.front_default,
                type1: resp.types[0].type.name,
                type2:(resp.types.length > 1 ? resp.types[1].type.name : null)
            }
            console.log('Pokemon:', pokeObj);
            // const pokeArr = Object.keys(pokeObj); // Obj to Arr
            pokeDataArr.push(pokeObj);
        }
    } catch(err) {
        console.log("Oops!", err);
    }
    finally {
        console.log('OUTPUT:', pokeDataArr);
    }
}
function addCard(el) {
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
    //attach to parent node
    cardDiv.appendChild(id);
    cardDiv.appendChild(sprite);
    cardDiv.appendChild(name);
    card.appendChild(cardDiv)
    cardList.appendChild(card);
}
const displayCards = function() {
    for (const element of pokeDataArr) {
        addCard(element);
    }
}
async function refreshList() {
   await fetchData();
   await displayCards();
}
refreshList();