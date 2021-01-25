const mongoose = require('mongoose');

const password = 'linux';
const dbname = 'test';

const URI = `mongodb+srv://gusun0:${password}@test-cluster1.h89rf.mongodb.net/${dbname}?retryWrites=true&w=majority`;


// Exportamos una funciónq que ejecuta esta función

/* 
const connection = () => {

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});

}
*/

module.exports = () => mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
