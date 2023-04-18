

const selectElement = elem => document.querySelector(elem);

selectElement(".mobile-menu").addEventListener("click", () => {
    selectElement("header").classList.toggle("active");
    document.getElementById("map").classList.toggle("mapactive");
});


