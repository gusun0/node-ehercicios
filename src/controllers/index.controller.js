const controller = {};

const connection = require('../dbConnection/connection');
const PokeModel  = require('../models/pokemon.model');

controller.index = async (req,res) => {
	try{

	const title = 'INDEX DESDE EL SERVIDOR y una variable';
	// mongoose nos devuelve una promesa
	await connection();

	const allPokemons = await PokeModel.find();
	console.log(allPokemons);
	console.log('Connection DB ok!');
  	res.render('index',{title: title});

	}catch(err){
		console.error(err);

	}

}

module.exports = controller;
