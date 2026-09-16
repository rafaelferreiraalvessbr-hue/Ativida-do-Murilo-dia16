function filtrar() {
    var texto = document.getElementById("filtroInput").value.toLowerCase();
    var itens = document.getElementsByTagName("li");

    for (var i = 0; i < itens.length; i++) {
        var nome = itens[i].textContent.toLowerCase();

        if (nome.indexOf(texto) !== -1) {
            itens[i].style.display = "";
        } else {
            itens[i].style.display = "none";
        }
    }
}