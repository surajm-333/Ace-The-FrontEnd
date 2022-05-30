document.querySelector(".column-header-3").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change3");
});

document.querySelector(".column-header-2").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change2");
});

document.querySelector(".column-header-1").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change1");
});

document.querySelector(".mobile-menu-icon").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
});