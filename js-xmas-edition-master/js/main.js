
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
function validarNombre(nombre) {
    if (nombre.length < 1 || nombre.length > 50) {
        return ("Debe tener al menos un nombre de usuario de 1 a 50 caracteres")
    }

    //escribir validacion para que la funcion solo acepte letras ?
    if (!/^[A-z]+$/.test(nombre)) {
        return "El campo nombre solo recibe letras"
    }

    return "";
}


function validarCiudad() {
    if (ciudad.length === 0) {
        return ("Por favor ingresa una ciudad.");
    } else {
        return "";
    }
}



function validarDescripcionRegalo() {
    if (descripcionRegalo.length >= 100) {
        return "La descripción de regalo debe contener al menos de 100 caracteres.";
    } else if (descripcionRegalo.length === 0) {
        return "El campo de decripcion no puede estar vacio";
    } else {
        return "";
    }

}
