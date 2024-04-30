const headerEL = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        headerEL.classList.add('header-scrolled')
    }
    if (window.scrollY < 10) {
        headerEL.classList.remove('header-scrolled')
    }
});




