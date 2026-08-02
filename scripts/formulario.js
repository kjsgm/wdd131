const produtos = [
    {
        id: "fc-1888",
        nome: "Capacitor de fluxo",
        classificacaomedia: 4.5
    },
    {
        id: "fc-2050",
        nome: "Fios elétricos",
        classificacaomedia: 4.7
    },
    {
        id: "fs-1987",
        nome: "Circuitos de tempo",
        classificacaomedia: 3.5
    },
    {
        id: "ac-2000",
        nome: "Reator de baixa tensão",
        classificacaomedia: 3.9
    },
    {
        id: "jj-1969",
        nome: "Equalizador de distorção",
        classificacaomedia: 5.0
    }
];


const selectProduto = document.querySelector("#produto");


if (selectProduto) {

    produtos.forEach((produto) => {

        const opcao = document.createElement("option");

        opcao.value = produto.id;
        opcao.textContent = produto.nome;

        selectProduto.appendChild(opcao);

    });

    // mantém a primeira opção como placeholder
    selectProduto.selectedIndex = 0;

}



const formulario = document.querySelector("form");


if (formulario) {

    formulario.addEventListener("submit", () => {

        localStorage.setItem("novaAvaliacao", "true");

    });

}