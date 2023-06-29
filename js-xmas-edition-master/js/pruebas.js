
function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
}

probarValidarNombre();


function probarValidarCiudad() {
    console.assert(
        validarCiudad() === 'Por favor ingresa una ciudad.',
        'Validar Ciudad no validó que la ciudad no este vacía',
    );
}

probarValidarCiudad();

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo() === 'Por favor ingresa una descripción de regalo.',
        'Validar Descripcion Regalo no validó que la descripción no este vacía',
    );
}

probarValidarDescripcionRegalo();
