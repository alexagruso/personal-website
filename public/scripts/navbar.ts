const navbar: HTMLElement = document.querySelector("#main-navbar")!;

const navbarY: number = navbar.getBoundingClientRect().y;

window.onscroll = () => {
    if (window.scrollY > navbarY) {
        navbar.classList.add("top");
    } else if (window.scrollY < navbarY) {
        navbar.classList.remove("top");
    }
}