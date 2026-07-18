// Atualiza o ano no rodapé
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// Mostra a última atualização da página
const lastModified = document.lastModified;

document.querySelector("#lastModified").textContent =
    `Última atualização: ${lastModified}`;


// Calcula a sensação térmica
const temperature = 18;
const windSpeed = 10;


function calcularSensacaoTermica(temperature, windSpeed) {

    return (
        13.12 +
        0.6215 * temperature -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temperature * Math.pow(windSpeed, 0.16)
    ).toFixed(1);

}


if (temperature <= 10 && windSpeed > 4.8) {

    document.querySelector("#windchill").textContent =
        `${calcularSensacaoTermica(temperature, windSpeed)} °C`;

} else {

    document.querySelector("#windchill").textContent =
        "Não disponível";

}