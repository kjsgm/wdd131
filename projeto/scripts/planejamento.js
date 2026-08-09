const tarefasPadrao = [
    {
        texto: "Organizar os compromissos da semana",
        concluida: false
    },
    {
        texto: "Separar um momento para a família",
        concluida: false
    }
];

let tarefas = JSON.parse(localStorage.getItem("tarefasFamilia")) || tarefasPadrao;

const formulario = document.querySelector("#form-tarefa");
const campoTarefa = document.querySelector("#nova-tarefa");
const listaTarefas = document.querySelector("#lista-tarefas");

function salvarTarefas() {
    localStorage.setItem("tarefasFamilia", JSON.stringify(tarefas));
}

function mostrarTarefas() {
    listaTarefas.innerHTML = "";

    tarefas.forEach((tarefa, indice) => {
        const item = document.createElement("li");

        item.innerHTML = `
            <label>
                <input type="checkbox" ${tarefa.concluida ? "checked" : ""} data-indice="${indice}">
                ${tarefa.texto}
            </label>
            <button type="button" data-excluir="${indice}">Excluir</button>
        `;

        listaTarefas.appendChild(item);
    });
}

function adicionarTarefa(evento) {
    evento.preventDefault();

    const texto = campoTarefa.value.trim();

    if (texto !== "") {
        tarefas.push({
            texto: texto,
            concluida: false
        });

        salvarTarefas();
        mostrarTarefas();
        formulario.reset();
    }
}

function alterarTarefa(evento) {
    if (evento.target.matches("input[type='checkbox']")) {
        const indice = Number(evento.target.dataset.indice);

        tarefas[indice].concluida = evento.target.checked;

        salvarTarefas();
    }
}

function excluirTarefa(evento) {
    if (evento.target.matches("[data-excluir]")) {
        const indice = Number(evento.target.dataset.excluir);

        tarefas.splice(indice, 1);

        salvarTarefas();
        mostrarTarefas();
    }
}

formulario.addEventListener("submit", adicionarTarefa);
listaTarefas.addEventListener("change", alterarTarefa);
listaTarefas.addEventListener("click", excluirTarefa);

mostrarTarefas();