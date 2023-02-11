import loadingScreen from "./loadingScreen.js"
import fetchData from "./fetchData.js";
import pickType from "./pickType.js";
import loadList from "./loadList.js";
import scrollFunction from "./scroll.js";

async function pokeType() {
    loadingScreen();
    await fetchData();
    document.querySelector('.card-list').replaceChildren(); //clear card list
    loadList(null, null); //pelna lista
    scrollFunction();
    pickType();
}

pokeType();