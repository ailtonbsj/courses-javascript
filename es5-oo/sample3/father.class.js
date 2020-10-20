var Grand = require('./grand.class.js');

//construct
function Father(){
	Grand.apply();
	console.log('Father executed!');
}
//heritage
Father.prototype = Object.create(Grand.prototype);
//properties
Father.prototype.fathersProp = "Fathers";
//methods
Father.prototype.fathersMethod = function(){
	console.log("Fathers Method!");
}

module.exports = Father;