// import fetchData from "./fetchData";
// import displayCards from "./displayCards";

const tab = document.querySelectorAll(".tab");
for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', (event) => {
        console.log(event.target.id.slice(0, -4));
        console.log("Click!", event)
    });
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const pokeDataArr = [];
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
const fetchData = async function () {
    try {
        for (let i = 1; i <= 385; i++) {
            let data1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            let resp = await data1.json();
            let pokeObj = {
                id: resp.id,
                name: resp.name,
                spriteLink: resp.sprites.front_default,
                type1: resp.types[0].type.name,
                type2: (resp.types.length > 1 ? resp.types[1].type.name : null)
            }
            pokeDataArr.push(pokeObj);
            await addCard(pokeObj);
            // console.log('Pokemon:', pokeObj);
        }
    } catch (err) {
        console.log("Oops!", err);
    }
    finally {
        console.log('fetchData end!');
    }
}
fetchData();