import loadList from "./loadList.js";

const tab = document.querySelectorAll(".tabs-wrapper");

let toggleCount = 0;
let typeA = null;
let typeB = null;

function pickType() {

    tab[0].addEventListener('click', (event) => {
        if (event.target.classList.contains("tabs-wrapper")) return;

        const trg = event.target.id.slice(0, -4);
        // console.log("EVENT.TARGET --> ", event.target);
        // console.log("EVENT.TARGET.ID --> ", event.target.id);
        // console.log("TRG --> ", trg);
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
            toggleCount += 1;
        }

        //shading and unshading tabs 
        if (toggleCount === 2) {
            for (let item of tab) {
                if ((item.id.slice(0, -4) != typeA) && (item.id.slice(0, -4) != typeB)) {
                    item.style.opacity = "0.5";
                }
            }
        } else if (toggleCount < 2) {
            for (let item of tab) {
                item.style.opacity = "1";
            }
        }

        loadList(typeA, typeB);
    });
}

export default pickType;