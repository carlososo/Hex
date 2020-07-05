(function() {
    'use strict'

    // variables
    let botonCheck = document.getElementById('boton-checkit');
    let botonAnother = document.getElementById('boton-reset');
    let divRespuesta = document.getElementById('respuesta');
    let circulito = document.getElementById('color-usuario');
    let span = document.getElementById('span');
    let hexabackground = randomNumber();
    let titulo = document.getElementsByTagName('h1');

    // Cambiar de color a la página mientras se lodea
    // document.body.onload = hexabackground;

    // funcion para sacar un random number entre 0 y el limite, se convierte a Hexa que ahora que lo pienso lo pude hacer con un for para RGB para sacar la distancia...pero tal vez después TBC
    function randomNumber() {
        let number = Math.floor(Math.random() * 16777215);
        let hexaString = Number(number).toString(16);
        document.body.style.backgroundColor = "#" + hexaString;
        return hexaString;
    }
    //Segun entiendo si son 3 numeros los 3 numeros hacen la saturacion del RGB a ver si me sale...
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
    // console.log(colors);
    // console.log(titulo.length);
    if (colors === true) {
        for (let i = 0; i <= titulo.length; i++) {
            titulo[0].style.color = "#ffffff";
        }

    } else if (colors === false) {
        for (let i = 0; i <= titulo.length; i++) {
            titulo[0].style.color = "#000000"
        }
    }





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
    botonCheck.addEventListener('click', function() {
        clicked();

    })

    botonAnother.addEventListener('click', function() {
        // botonCheck.style.outline = "none";
        window.location.reload(true);
    })





})()