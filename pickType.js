import loadList from "./loadList.js";

const tab = document.querySelectorAll(".tab");

let toggleCount = 0;
let typeA = null;
let typeB = null;

const pickType = function () {
    for (let i = 0; i < tab.length; i++) {
        tab[i].addEventListener('click', (event) => {
            const trg = event.target.id.slice(0, -4)
            if (event.target.classList.contains("tab-border")) {
                event.target.classList.toggle("tab-border");
                if (typeB === trg) {
                    typeB = null
                } else {
                    typeA = typeB;
                    typeB = null;
                }
                toggleCount -= 1;
            } else if (toggleCount < 2) {
                event.target.classList.add("tab-border");
                typeA ? typeB = trg : typeA = trg;
                ;
                toggleCount += 1;
            }
            loadList(typeA, typeB);
        });
    }
}

export default pickType;