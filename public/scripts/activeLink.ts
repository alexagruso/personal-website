const links: NodeListOf<HTMLElement> =
    document.querySelectorAll("#main-navbar a");

links.forEach((link) => {
    link.addEventListener("click", () => {
        link.classList.toggle("active");
    });
});
