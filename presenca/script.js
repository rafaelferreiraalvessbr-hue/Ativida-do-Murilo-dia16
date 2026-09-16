function confirmarPresenca() {
    var checkboxes = document.getElementsByClassName("presenca");
    var presentes = [];
    var ausentes = [];

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            presentes.push(checkboxes[i].value);
        } else {
            ausentes.push(checkboxes[i].value);
        }
    }

    document.getElementById("presentes").innerHTML =
        "<strong>Presentes:</strong> <span class='presente'>" + presentes.join(", ") + "</span>";

    document.getElementById("ausentes").innerHTML =
        "<strong>Ausentes:</strong> <span class='ausente'>" + ausentes.join(", ") + "</span>";
}