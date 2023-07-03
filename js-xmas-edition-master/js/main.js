
const $form = document.querySelector("#carta-a-santa")/*`const = document.querySelector("#carta-a-santa")` 
está seleccionando el elemento HTML con el ID
"carta-a-santa" y asignándola a la variable `` usando el método `document.querySelector()`
en JavaScript. Esto nos permite acceder y manipular el elemento de formulario en nuestro código. */

const nombre = $form.nombre.value
const ciudad = $form.ciudad.value
const comportamiento = $form.comportamiento.value
const descripcionRegalo = $form['descripcion-regalo'].value
/*cuando las propiedades que queremos acceder tienen un guion(-) en su nimbre, 
se pone entre corchetes y commillas sin punto despues de form. ['...'].value
-*/
console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionRegalo);

//funcion para validar nombre, que el campo tenga al menos un caracter, si no cuple la regla, lanzar un alerta, y si es mayor a 50 caracteres que diga que el campo tiene que tener menos de 50 caracteres.
const validarNombre = (nombre) => {
    if (nombre.length < 1 || nombre.length > 50) {
        return ("Debe tener al menos un nombre de usuario de 1 a 50 caracteres")

    } else {
        return true;
    }
}


function validarCiudad() {
    if (ciudad === "") {
        return ("Por favor ingresa una ciudad.");
    } else {
        return true;
    }
}



function validarDescripcionRegalo() {
    let descripcionRegalo = document.getElementById("descripcionRegalo").value;
    if (descripcionRegalo === "") {
        return "Por favor, ingresa una descripción de regalo.";
    } else if (descripcionRegalo.length < 5) {
        return "La descripción de regalo debe contener al menos 5 letras.";
    } else {
        return "";
    }
}