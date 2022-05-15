exports.routes = function (app) {

  app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
    console.log("Página de inicio...")
  })

  app.get('/cursos', function (req, res) {
    res.send('Estos son los cursos');
    console.log("Página de cursos");
  })

};

