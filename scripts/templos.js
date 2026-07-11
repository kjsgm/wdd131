const menuButton = document.querySelector("#menu");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuButton.classList.toggle("open");
});

// Atualiza o ano automaticamente
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Atualiza a data da última modificação
document.querySelector("#lastModified").textContent = document.lastModified;