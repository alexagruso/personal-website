const smile: HTMLElement = document.querySelector("#main-footer .smile")!;

smile.addEventListener("mouseover", () => {
    smile.innerHTML = ":O";
});

smile.addEventListener("mouseout", () => {
    smile.innerHTML = ":)";
});

smile.addEventListener("mousedown", () => {
    smile.innerHTML = ">" + smile.innerHTML;
});
