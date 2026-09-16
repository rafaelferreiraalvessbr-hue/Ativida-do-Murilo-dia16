function mudarTema() {
    var body = document.body;

    if (body.classList.contains("claro")) {
        body.classList.remove("claro");
        body.classList.add("escuro");
    } else {
        body.classList.remove("escuro");
        body.classList.add("claro");
    }
}