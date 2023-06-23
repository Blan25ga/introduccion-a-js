// Variables para la calculadora de edades
let edades = [];

// Función para crear inputs de edades
function crearInputs() {
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const inputsContainer = document.getElementById("inputs-container");
    inputsContainer.innerHTML = "";

    for (let i = 0; i < cantidad; i++) {
        const label = document.createElement("label");
        label.textContent = `Edad de la persona ${i + 1}: `;
        const input = document.createElement("input");
        input.type = "number";

        const div = document.createElement("div");
        div.appendChild(label);
        div.appendChild(input);

        inputsContainer.appendChild(div);
    }
}

// Función para calcular edades
function calcularEdades() {
    const inputs = document.querySelectorAll("#inputs-container input");
    edades = [];

    inputs.forEach(input => {
        const edad = parseInt(input.value);
        if (!isNaN(edad)) {
            edades.push(edad);
        }
    });

    const resultado = document.getElementById("resultado");

    if (edades.length > 0) {
        const maximaEdad = Math.max(...edades);
        const minimaEdad = Math.min(...edades);
        const promedioEdades = edades.reduce((a, b) => a + b, 0) / edades.length;

        resultado.textContent = `Mayor edad: ${maximaEdad}, Menor edad: ${minimaEdad}, Promedio de edades: ${promedioEdades.toFixed(2)}`;
    } else {
        resultado.textContent = "No se ingresaron edades válidas.";
    }
}

// Función para resetear la calculadora de edades
function resetear() {
    document.getElementById("cantidad").value = "";
    document.getElementById("inputs-container").innerHTML = "";
    document.getElementById("resultado").textContent = "";
    edades = [];
}


// Variables para la calculadora de salarios
let salarios = [];

// Función para agregar inputs de salarios
function agregarInput() {
    const salariosContainer = document.getElementById("salarios-container");
    const div = document.createElement("div");

    const label = document.createElement("label");
    label.textContent = "Salario anual: ";

    const input = document.createElement("input");
    input.type = "number";

    div.appendChild(label);
    div.appendChild(input);

    salariosContainer.appendChild(div);
}

// Función para remover inputs de salarios
function removerInput() {
    const salariosContainer = document.getElementById("salarios-container");
    if (salariosContainer.childElementCount > 0) {
        salariosContainer.removeChild(salariosContainer.lastChild);
    }
}

// Función para calcular salarios
function calcularSalarios() {
    const inputs = document.querySelectorAll("#salarios-container input");
    salarios = [];

    inputs.forEach(input => {
        const salario = parseFloat(input.value);
        if (!isNaN(salario) && salario !== "") {
            salarios.push(salario);
        }
    });

    const resultadoSalarios = document.getElementById("resultado-salarios");

    if (salarios.length > 0) {
        const maximoSalario = Math.max(...salarios);
        const minimoSalario = Math.min(...salarios);
        const promedioSalarios = salarios.reduce((a, b) => a + b, 0) / salarios.length;
        const promedioMensual = promedioSalarios / 12;

        resultadoSalarios.textContent = `Mayor salario anual: ${maximoSalario}, Menor salario anual: ${minimoSalario}, Salario anual promedio: ${promedioSalarios.toFixed(2)}, Salario mensual promedio: ${promedioMensual.toFixed(2)}`;
    } else {
        resultadoSalarios.textContent = "No se ingresaron salarios válidos.";
    }
}
