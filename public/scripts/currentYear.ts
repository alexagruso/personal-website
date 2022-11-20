const currentYear: HTMLElement = document.querySelector(
    "#main-footer .current-year"
)!;

let value: string = currentYear.innerHTML;
value = value.replace("%year%", new Date().getFullYear().toString());
currentYear.innerHTML = value;
