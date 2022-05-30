let tabs = document.querySelectorAll(".tabs h3");
let tabcontents = document.querySelectorAll(".tab-content div");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabcontents.forEach((content) => {
            content.classList.remove("active");
        });

        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tabcontents[index].classList.add("active");
        tabs[index].classList.add("active");
    });
});