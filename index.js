import fetchData from "./fetchData.js";
import pickType from "./pickType.js";
import loadList from "./loadList.js";

async function pokeType() {
    await fetchData();
    loadList(null, null); //pelna lista
    pickType();
}

pokeType();