
function calcular_multa() {

    var n1 = Number(document.getElementById("n1").value);

    var resultado = document.getElementById("resultado");
    var multa = document.getElementById("multa");

    resultado.innerHTML = `Sua velocidade atual é de ${n1} km/h.`;

    if (n1 > 80) {
        multa.innerHTML = "Velocidade acima do permitido! MULTADO.";
    } else {
        multa.innerHTML = "Velocidade dentro do permitido.";
    }
}