// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

let i;
for (i = 3; i <= 22; i += 3) { //i+=3 otra forma de expresar es i = i + 1.
    console.log(i);
}

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
// diez a uno.

let j = 10

while (j >= 1) {
    console.log(j);
    j--;
}


// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

for (let i = 1; i <= 50; i++) {          // Crea un ciclo for que cuenta del 1 al 50
    if (i % 3 === 0 && i % 5 === 0) {   // Si el número es múltiplo de tres y cinco, imprime FizzBuzz
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {           // Si el número es múltiplo de tres, imprime Fizz
        console.log('Fizz');
    } else if (i % 5 === 0) {          // Si el número es múltiplo de cinco, imprime Buzz
        console.log('Buzz');
    } else {                           // Para todo lo demás, imprime el número mismo
        console.log(i);
    }
}

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

function calcularPromedio(numeros) {
    let suma = 0
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}

let numeros = [10, 5, 4, 2, 8];
let promedio = calcularPromedio(numeros);

console.log("El promedio es: " + promedio)

