function calcular() {
    const numero = Number(document.getElementById("numero").value);
    const numeroTabuada = document.getElementById("numeroTabuada");
    const resultado = document.getElementById("resultado");

    if (isNaN(numero) || document.getElementById("numero").value === "") {
        numeroTabuada.textContent = "";
        resultado.innerHTML = "";
        return;
    }

    numeroTabuada.textContent = numero;

    let tabuada = "";

    for (let i = 1; i <= 10; i++) {
        tabuada += `<p>${numero} x ${i} = ${numero * i}</p>`;
    }

    resultado.innerHTML = tabuada;
}
