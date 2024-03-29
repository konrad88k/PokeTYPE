import loadList from "./loadList.js";
import showIcons from "./showIcons.js";

const tab = document.querySelectorAll(".tabs-wrapper");
let toggleCount = 0;
let typeA = null;
let typeB = null;

function tabSelection() {

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

        //highlight tabs 
        if (toggleCount === 2) {
            for (const child of tab[0].children) {
                if ((child.id.slice(0, -4) !== typeA) && (child.id.slice(0, -4) !== typeB)) {
                    child.style.opacity = "0.5";
                }
            }
        } else if (toggleCount < 2) {
            for (const child of tab[0].children) {
                child.style.opacity = "1";
            }
        }

        loadList(typeA, typeB);
        showIcons(typeA, typeB);
    });
}

export default tabSelection;