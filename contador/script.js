var contador = 0;

function incrementar() {
    contador++;
    atualizarTela();
}

function zerar() {
    contador = 0;
    atualizarTela();
}

function atualizarTela() {
    document.getElementById("cliques").textContent = "Cliques: " + contador;
}