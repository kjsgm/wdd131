// Atualiza o ano
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Atualiza a data da última modificação
document.getElementById("lastModified").textContent =
    `Última atualização: ${document.lastModified}`;

// Elemento onde aparece o contador
const elementoContador = document.querySelector("#contador");

// Busca o contador salvo
let contadorAvaliacoes = Number(localStorage.getItem("contadorAvaliacoes")) || 0;

// Verifica se veio de um envio do formulário
if (localStorage.getItem("novaAvaliacao") === "true") {
    contadorAvaliacoes++;

    localStorage.setItem("contadorAvaliacoes", contadorAvaliacoes);

    localStorage.removeItem("novaAvaliacao");
}

// Mostra o valor na página
elementoContador.textContent = contadorAvaliacoes;