function calculartiempo() {
    var horas = 0;
    var minutos = 0;
    var segundos = 0;

    horas += parseInt(document.getElementById('video1-horas').value);
    horas += parseInt(document.getElementById('video2-horas').value);
    horas += parseInt(document.getElementById('video3-horas').value);
    horas += parseInt(document.getElementById('video4-horas').value);
    horas += parseInt(document.getElementById('video5-horas').value);
    horas += parseInt(document.getElementById('video6-horas').value);

    minutos += parseInt(document.getElementById('video1-minutos').value);
    minutos += parseInt(document.getElementById('video2-minutos').value);
    minutos += parseInt(document.getElementById('video3-minutos').value);
    minutos += parseInt(document.getElementById('video4-minutos').value);
    minutos += parseInt(document.getElementById('video5-minutos').value);
    minutos += parseInt(document.getElementById('video6-minutos').value);

    segundos += parseInt(document.getElementById('video1-segundos').value);
    segundos += parseInt(document.getElementById('video2-segundos').value);
    segundos += parseInt(document.getElementById('video3-segundos').value);
    segundos += parseInt(document.getElementById('video4-segundos').value);
    segundos += parseInt(document.getElementById('video5-segundos').value);
    segundos += parseInt(document.getElementById('video6-segundos').value);

    var totalSegundos = horas * 3600 + minutos * 60 + segundos; //se calcula el tiempo total en segundos sumando el valor de horas multiplicado por 3600 (segundos en una hora),
    // el valor de minutos multiplicado por 60 (segundos en un minuto) y el valor de segundos.

    //Se calculan las horas dividiendo el tiempo total en segundos entre 3600 y redondeando hacia abajo utilizando Math.floor().
    // El operador %= se utiliza para obtener el resto de la división del tiempo total en segundos entre 3600, es decir,
    // los segundos que quedan después de restar las horas del tiempo total.
    var totalHoras = Math.floor(totalSegundos / 3600);
    totalSegundos %= 3600;


    var totalMinutos = Math.floor(totalSegundos / 60);
    totalSegundos %= 60;
    /*se calculan los minutos dividiendo el tiempo total en segundos entre 60 y redondeando hacia abajo,
    y se utiliza de nuevo el operador %= para obtener el resto de la división del tiempo total en segundos entre 60,
    es decir, los segundos que quedan después de restar las horas y los minutos del tiempo total.
    */

    var tiempoTotal = totalHoras + ' horas ' + totalMinutos + ' minutos ' + totalSegundos + ' segundos';

    document.getElementById('tiempo-total').innerHTML = tiempoTotal;
    /*se crea una cadena de texto con los valores de totalHoras, totalMinutos y totalSegundos separados por espacios
    y se muestra en el elemento HTML con el id "tiempo-total" utilizando la propiedad innerHTML.
    */
}





