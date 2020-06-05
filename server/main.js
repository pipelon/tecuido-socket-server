var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
var server = require('http').Server(app);
var io = require('socket.io')(server);

/* ALERTAS GENERALES DE APERTURA DE PUERTAS */
app.post('/alertas_generales', function(req, res){
	console.info(req.body);
	let response = {
		'userId' : req.body.userId,
		'housingEstate' : req.body.housingEstate,
		'message' : req.body.message,
		'date' : req.body.date
	};
    io.sockets.emit('alertas_generales', response);
	res.status(200).send('¡Server OK!');
});

app.get('/', function(req, res){
    res.status(200).send('¡Server OK2!');
});

/* CONEXION AL SOCKET */
io.on('connection', function (socket){});

/* SERVIDOR NODE */
server.listen('25003', function () {
    console.info("Ok!");
})