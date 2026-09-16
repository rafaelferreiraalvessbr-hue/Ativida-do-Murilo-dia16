function verificar() {
    var anoNascimento = parseInt(document.getElementById("anoNascimento").value);
    var sexoInput = document.querySelector('input[name="sexo"]:checked');
    var resultado = document.getElementById("resultado");
    var foto = document.getElementById("foto");

    if (isNaN(anoNascimento) || !sexoInput) {
        resultado.textContent = "Preencha o ano de nascimento e selecione o sexo.";
        foto.style.display = "none";
        return;
    }

    var sexo = sexoInput.value; // "masculino" ou "feminino"
    var anoAtual = new Date().getFullYear();
    var idade = anoAtual - anoNascimento;

    if (idade < 0) {
        resultado.textContent = "Ano de nascimento inválido.";
        foto.style.display = "none";
        return;
    }

    var categoria = "";
    if (idade <= 2) {
        categoria = "bebe";
    } else if (idade <= 12) {
        categoria = "crianca";
    } else if (idade <= 17) {
        categoria = "adolescente";
    } else if (idade <= 59) {
        categoria = "adulto";
    } else {
        categoria = "idoso";
    }

    var textoGenero = sexo === "masculino" ? "homem" : "mulher";
    resultado.textContent = "Detectamos " + textoGenero + " com " + idade + " anos.";

    // Gera um avatar diferente para cada combinação de categoria + sexo
    var seed = categoria + "-" + sexo;
    foto.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=" + seed;
    foto.style.display = "inline-block";
}