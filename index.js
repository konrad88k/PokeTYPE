import createLoader from "./createLoader.js"
import fetchData from "./fetchData.js";
import pickType from "./pickType.js";
import loadList from "./loadList.js";
import scroll from "./scroll.js";

scroll();
fetchData();
loadList(null, null); //pelna lista
//clear card list
// document.querySelector('.card-list').replaceChildren();
pickType();
