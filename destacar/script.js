function destacar() {
    const nome = document.getElementById("nome").value;
    const itens = document.getElementById("lista").getElementsByTagName("li");

    for (let i = 0; i < itens.length; i++) {
        if (itens[i].textContent === nome) {
            itens[i].style.color = "red";
            itens[i].style.fontWeight = "bold";
        } else {
            itens[i].style.color = "black";
            itens[i].style.fontWeight = "normal";
        }
    }
}