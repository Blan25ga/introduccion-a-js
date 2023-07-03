
function probarValidarNombre() {
    console.assert(
        validarNombre("") === 'Este campo debe tener al menos 1 caracter',
        'ValidarNombre no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNombre(
            '111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'ValidarNombre no validó que el nombre sea menor a 50 caracteres',
    );

    console.assert(
        validarNombre("Gabriel") === "",
        'ValidarNombre falló con un nombre válido',
    );
}




function probarValidarCiudad() {
    console.assert(
        validarCiudad("Chubut") === "",
        "Validar ciudad falló con un nombre válido"
    );

    console.assert(
        validarCiudad("") === "Por favor, ingresa una ciudad.",
        "Validar ciudad no mostró error al estar el campo de ciudad vacío"
    );
}


function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo("regalo") === "La descripción de regalo no puede estar vacio.",
        "Validar Descripcion Regalo no validó la longitud mínima de la descripción.",
    );
    console.assert(
        validarDescripcionRegalo("fkladhfkladhgk")
        === "La descripción es muy larga.",
        "Validar Descripcion Regalo no validó la longitud mínima de la descripción.",
    )

    console.assert(
        validarDescripcionRegalo("Quiero un caballo") === "",
        "La descripcion regalo no funciona con la descripcion correcta"
    )


}
probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();