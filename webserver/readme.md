# WEBSERVER

## Setup
Instalamos los siguientes componentes en el sistema:

    sudo apt install nodejs npm libssl-doc


Utilizando `npm` instalamos express mediante la sentencia:

    sudo npm install -g express

## Creación del servidor

Creamos la carpeta _**webserver**_ y el fichero **`server.js`** con el codigo:

    // require: Trae la librería express del npm.
    var express = require('express');
    // Se invoca la función (de la variable express) y se almacena en la variable app.
    var app = express();
    
    // Define el home de la página y que función se va a ejecutar.
    // La función tiene como parámetro el request y el response.
    app.get('/', function (req, res) {
    res.send('Este es el home');
    console.log("Página de inicio...")
    })

    app.get('/cursos', function (req, res) {
    res.send('Estos son los cursos');
    console.log("Página de cursos");
    })

    // Correr el servidor con el puerto 8989.
    app.listen(8989);

Iniciamos proyecto `npm` mediante: 

    npm init

Instalamos `express` a nivel local en el directorio del servidor.

    sudo npm install express

## Documentar servicios.
Utilizaremos el estandar de [Open Api](https://oai.github.io/Documentation/start-here.html)
