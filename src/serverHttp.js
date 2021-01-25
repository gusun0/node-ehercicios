// Módulo http de node
const http = require('http');

// Guardar el servidor que creamos en una constante
// req = request => peticion del cliente
// res = response => respuesta del servidor
const server = http.createServer((req,res) => {
	res.writeHead(200,{"Content-Type": "text/html; charset=utf-8"});
	res.write('Hola, Un cliente ha hecho conexión','UTF-8');
	res.end();

});


server.listen(3000, () => {
  console.log('Servidor a la escucha');
});


