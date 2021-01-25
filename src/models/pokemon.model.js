const mongoose = require('mongoose');
// const Schame = mongoose.Schema
const { Schema } = mongoose;

// Creamos nuestro modelo de datos

const PokeSchema = new Schema({
	name: String

});


const PokeModel = mongoose.model('tests', PokeSchema);
module.exports = PokeModel;






