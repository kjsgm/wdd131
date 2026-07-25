// ==============================
// Menu de navegação
// ==============================

const menuButton = document.querySelector("#menu");
const navMenu = document.querySelector("#nav-menu");

const homeButton = document.querySelector("#home");
const oldButton = document.querySelector("#old");
const newButton = document.querySelector("#new");
const largeButton = document.querySelector("#large");
const smallButton = document.querySelector("#small");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuButton.classList.toggle("open");
});

// ==============================
// Rodapé
// ==============================

document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = document.lastModified;


// ==============================
// Array de templos
// ==============================

const templos = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigéria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "imagens/templos/small/aba-nigeria-temple.webp"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, Estados Unidos",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "imagens/templos/small/manti-utah-temple.webp"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, Estados Unidos",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "imagens/templos/small/payson-utah-temple.webp"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "imagens/templos/small/yigo-guam-temple.webp"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, Estados Unidos",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "imagens/templos/small/washington-d.c.-temple.webp"
    },
    {
        templeName: "Lima Peru",
        location: "Lima, Peru",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "imagens/templos/small/lima-peru-temple.webp"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Cidade do México, México",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "imagens/templos/small/mexico-city-mexico-temple.webp"
    },
    {
        templeName: "Campinas Brasil",
        location: "Campinas, São Paulo, Brasil",
        dedicated: "2002, May, 17",
        area: 48100,
        imageUrl: "imagens/templos/small/campinas-brazil-temple.webp"
    },
    {
        templeName: "Arequipa Peru",
        location: "Arequipa, Peru",
        dedicated: "2019, December, 15",
        area: 9300,
        imageUrl: "imagens/templos/small/arequipa-peru-temple.webp"
    },
    {
        templeName: "Fortaleza Brasil",
        location: "Fortaleza, Ceará, Brasil",
        dedicated: "2019, June, 2",
        area: 36000,
        imageUrl: "imagens/templos/small/fortaleza-brazil-temple.webp"
    }
];


// ==============================
// Criar cartões dos templos
// ==============================

const templeContainer = document.querySelector("#temple-container");

function displayTemples(temples) {

    templeContainer.innerHTML = "";

    temples.forEach((temple) => {

        const card = document.createElement("article");

        const formattedArea = temple.area.toLocaleString("pt-BR");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>

            <img 
                src="${temple.imageUrl}" 
                alt="Foto do Templo ${temple.templeName}" 
                loading="lazy" 
                width="400" 
                height="250">

            <p><strong>Localização:</strong> ${temple.location}</p>

            <p><strong>Dedicação:</strong> ${temple.dedicated}</p>

            <p><strong>Área:</strong> ${formattedArea} m²</p>
        `;

        templeContainer.appendChild(card);
    });
}


displayTemples(templos);


// ==============================
// Filtros
// ==============================

homeButton.addEventListener("click", () => {
    displayTemples(templos);
});


function getYear(date) {
    return Number(date.split(",")[0]);
}


oldButton.addEventListener("click", () => {

    const oldTemples = templos.filter(
        (temple) => getYear(temple.dedicated) < 1900
    );

    displayTemples(oldTemples);

});


newButton.addEventListener("click", () => {

    const newTemples = templos.filter(
        (temple) => getYear(temple.dedicated) > 2000
    );

    displayTemples(newTemples);

});


largeButton.addEventListener("click", () => {

    const largeTemples = templos.filter(
        (temple) => temple.area > 90000
    );

    displayTemples(largeTemples);

});


smallButton.addEventListener("click", () => {

    const smallTemples = templos.filter(
        (temple) => temple.area < 90000
    );

    displayTemples(smallTemples);

});