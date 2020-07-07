(function() {
    'use strict'

    // variables
    let botonCheck = document.getElementById('boton-checkit');
    let botonAnother = document.getElementById('boton-reset');
    let divRespuesta = document.getElementById('respuesta');
    let circulito = document.getElementById('color-usuario');
    let span = document.getElementById('span');
    let hexabackground = randomNumber();
    let tituloPrueba = document.getElementById('titulo');
    //hace el random, lo convierte a hexa y lo pasa al body
    function randomNumber() {
        let number = Math.floor(Math.random() * 16777215);
        let hexaString = Number(number).toString(16);
        document.body.style.backgroundColor = "#" + hexaString;
        return hexaString;
    }
    //ejecuto el HexRGB y le paso el color de la página, hago la conversión a RGB y luego cambio las letras de colores
    document.body.onload = hexRGB(hexabackground);

    function hexRGB(color) {
        let r = parseInt(color.substring(0, 2), 16);
        let g = parseInt(color.substring(2, 4), 16);
        let b = parseInt(color.substring(4, 6), 16);
        let colors = [r, g, b];
        let blancoNegro = (((colors[0] * 0.299) + (colors[1] * 0.587) + (colors[2] * 0.114)) > 186) ? false : true;
        return blancoNegro;
    }


    let colors = hexRGB(hexabackground);
    if (colors === true) {
        console.log(tituloPrueba)
        tituloPrueba.style.color = "#ffffff";

    } else if (colors === false) {
        tituloPrueba.style.color = "#000000";

    }

    //
    function clicked() {
        let respuestaUsuario = document.getElementById('hex');
        respuestaUsuario = respuestaUsuario.value;
        if (respuestaUsuario == "" || respuestaUsuario.length <= 2) {
            alert("Please Write an Hexa Number between 000000 and ffffff the min lenght is 3 characters such as 000 or fff")

        } else {
            botonCheck.style.display = "none";
            circulito.style.backgroundColor = "#" + respuestaUsuario;
            span.innerHTML = "#" + hexabackground;
            divRespuesta.style.display = "block";

        }
    }

    // funcion de botones
    botonCheck.onclick = function() {
            clicked();

        }
        // botonCheck.addEventListener('click', function() {
        //     clicked();

    // })

    botonAnother.addEventListener('click', function() {
        // botonCheck.style.outline = "none";
        window.location.reload(true);
    })





})()