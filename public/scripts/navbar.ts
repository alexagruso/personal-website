const navbar: HTMLElement = document.querySelector("#main-navbar")!;

const cutoff: number = window.innerHeight;

window.onscroll = () => {
    if (window.scrollY > cutoff) {
        navbar.classList.add("top");
    } else {
        navbar.classList.remove("top");
    }
};
