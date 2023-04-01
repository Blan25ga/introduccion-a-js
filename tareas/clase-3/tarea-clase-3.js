// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const nombre = prompt("¿Cuál es tu nombre ?").toLocaleLowerCase();
const miNombre = "gabriel";
const otroNombre = "juan";

if (nombre === miNombre) {
    alert(`Hola, Tocayo! Yo también me llamo ${miNombre}.`);
    console.log(`Hola, Tocayo! Yo también me llamo ${miNombre}.`);
} else if (nombre === otroNombre) {
    alert(`Hola ${otroNombre}, te llamás igual que mi primo!!!`);
    console.log(`Hola ${otroNombre}, te llamás igual que mi primo!!!`);
} else {
    alert(`Hola ${nombre}!`);
    console.log(`Hola ${nombre}!`);
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

let edad_usuario = prompt("¿que edad tienes?");
let miEdad = 36;

if (edad_usuario > miEdad) {
    alert(`Tienes ${edad_usuario} años, sos mayor que yo.`);
    console.log(`Tienes ${edad_usuario} años, sos mayor que yo.`);
} else if (edad_usuario < miEdad) {
    alert(`Tienes ${edad_usuario} años, sos menor que yo.`);
    console.log(`Tienes ${edad_usuario} años, sos menor que yo.`);
} else {
    alert(`Tienes ${edad_usuario} años, tenemos la misma edad!!!`);
    console.log(`Tienes ${edad_usuario} años, tenemos la misma edad!!!`);
}


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let tieneDocumento = prompt('¿Tienes documento ? (si / no)').toLowerCase();

if (tieneDocumento === 'si') {
    let edad = prompt('¿Cuál es tu edad ?');
    if (edad >= 18) {
        alert('Bienvenido, puedes pasar al bar!');
        console.log('Bienvenido, puedes pasar al bar!');
    } else {
        alert('Lo siento, eres menor de edad!!!');
        console.log('Lo siento, eres menor de edad!!!');
    }
} else if (tieneDocumento === 'no') {
    alert('Lo siento, no puedes entrar sin documento.');
    console.log('Lo siento, no puedes entrar sin documento.');
} else {
    alert('No entendí tu respuesta.');
    console.log('No entendí tu respuesta.');
}