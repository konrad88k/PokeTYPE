const icon = document.querySelectorAll(".poke-icon-wrapper");

//
function showIcons(a, b) {
    for (const child of icon[0].children) {
        console.log(child);
        if (child.id.slice(0, -5) === a || child.id.slice(0, -5) === b) {
            child.classList.remove("hidden");
        } else {
            child.classList.add("hidden");
        }
    }
}

export default showIcons;