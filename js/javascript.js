(function() {
    'use strict'

    // variables
    let botonCheck = document.getElementById('boton-checkit');
    let botonAnother = document.getElementById('boton-reset');
    let divRespuesta = document.getElementById('respuesta');
    let circulito = document.getElementById('color-usuario');
    let span = document.getElementById('span');
    let hexabackground = randomNumber();
    // Cambiar de color a la página mientras se lodea
    document.body.onload = hexabackground;

    // funcion para sacar un random number entre 0 y el limite, se convierte a Hexa que ahora que lo pienso lo pude hacer con un for para RGB para sacar la distancia...pero tal vez después TBC
    function randomNumber() {
        let number = Math.floor(Math.random() * 16777215);
        let hexaString = Number(number).toString(16);
        document.body.style.backgroundColor = "#" + hexaString;
        return hexaString;
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