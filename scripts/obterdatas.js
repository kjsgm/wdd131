const year = new Date().getFullYear();

const yearElement = document.getElementById("currentyear");
if (yearElement) {
    yearElement.textContent = year;
}

const modifiedElement = document.getElementById("lastModified");
if (modifiedElement) {
    modifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}