function scrollFunction() {
    window.onscroll = () => {
        // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
        if (document.documentElement.scrollTop > 640) {
            document.querySelector('.pageup').classList.remove("hide");
        } else {
            document.querySelector('.pageup').classList.add("hide");
        }
    }
}
export default scrollFunction;