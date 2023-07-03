
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

function validarNombre(nombre) {
    if (nombre.length < 1 || nombre.length > 50) {
        return ("Debe tener al menos un nombre de usuario de 1 a 50 caracteres")
    }

    //validacion para que la funcion solo acepte letras 
    if (!/^[A-z]+$/.test(nombre)) {
        return "El campo nombre solo recibe letras"
    }

    return "";
}


function validarCiudad() {
    if (ciudad.length === 0) {
        return ("Por favor ingresa una ciudad.");
    } else {
        return ""
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

function validarFormulario(event) {
    const $form = document.querySelector("#carta-a-santa");

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcionRegalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcion);


    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        descripcionRegalo: errorDescripcionRegalo
    };

    console.log(errores);

    manejarErrores(errores);

    event.preventDefault();
}

function manejarErrores(errores) {


    /*errorNombre = errores.nombre;
    errorCiudad = errores.ciudad;
    errorDescripcionRegalo = errores.descripcionRegalo;

    if (errorNombre) {
        $form.nombre.className = "error"
    } else {
        $form.nombre.className = "";
    }

    if (errorCiudad) {
        $form.ciudad.className = "error"
    } else {
        $form.ciudad.className = "";
    }
-*/
}




const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;


