function mostrarDatos() {
    var primerNombre = document.getElementById("nombre").value;
    var segundoNombre = document.getElementById("segundoNombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;

    document.getElementById("bienvenida").innerHTML = "Bienvenido, " + primerNombre + "!";
    document.getElementById("datosUsuario").innerHTML = "Tu nombre completo es: " + primerNombre + " " + segundoNombre + " " + apellido + ". Y tenés " + edad + " años.";
}