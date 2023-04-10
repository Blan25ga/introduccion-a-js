const numeros = Array.from(document.querySelectorAll('#numeros li')).map(li => Number(li.textContent));

const promedio = numeros.reduce((total, num) => total + num, 0) / numeros.length;
document.getElementById('promedio').textContent = `El promedio es ${promedio}`;

const minimo = Math.min(...numeros);
document.getElementById('minimo').textContent = `El número más pequeño es ${minimo}`;

const maximo = Math.max(...numeros);
document.getElementById('maximo').textContent = `El número más grande es ${maximo}`;


const frecuencia = numeros.reduce((contador, num) => {
    contador[num] = (contador[num] || 0) + 1;
    return contador;
}, {});

const frecuenciaMaxima = Math.max(...Object.values(frecuencia));
const numeroFrecuente = Object.keys(frecuencia).find(key => frecuencia[key] === frecuenciaMaxima);

document.getElementById('frecuente').textContent = `El número más frecuente es ${numeroFrecuente}`;
