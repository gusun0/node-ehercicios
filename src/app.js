const express = require('express');
const app = express();
const path = require('path');

// Con app.set asignamos funciones al servidor
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));


// Rutas
const  routes = require('./routes/index.routes');
app.use(routes);


// Static files
app.use(express.static(path.join(__dirname,'../public'))); 


app.use((req,res) => {
	res.sendFile(path.join(__dirname,'../public/404.html'));
});


app.listen(3000, () => console.log('Sevidor conectado en localhost'));
