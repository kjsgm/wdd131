const formularioOrcamento = document.querySelector("#form-orcamento");
const resultadoOrcamento = document.querySelector("#resultado-orcamento");

function calcularOrcamento(evento) {
    evento.preventDefault();

    const renda = Number(document.querySelector("#renda").value);
    const despesas = Number(document.querySelector("#despesas").value);
    const saldo = renda - despesas;

    if (saldo > 0) {
        resultadoOrcamento.innerHTML = `
            Depois das despesas, sua família terá um saldo de R$ ${saldo.toFixed(2)}.
        `;
    } else if (saldo === 0) {
        resultadoOrcamento.innerHTML = `
            A renda e as despesas estão equilibradas neste mês.
        `;
    } else {
        resultadoOrcamento.innerHTML = `
            As despesas estão R$ ${Math.abs(saldo).toFixed(2)} acima da renda.
        `;
    }
}

function enviarContato(evento) {
    evento.preventDefault();

    const nome = document.querySelector("#nome").value;

    localStorage.setItem("ultimoContato", nome);

    document.querySelector("#mensagem-formulario").innerHTML = `
        Obrigada, ${nome}! Sua mensagem foi registrada.
    `;

    document.querySelector("#form-contato").reset();
}

formularioOrcamento.addEventListener("submit", calcularOrcamento);

document.querySelector("#form-contato").addEventListener("submit", enviarContato);