var Grand = require('./grand.class.js');

//construct
function Father(fathersProp, colorsEye){
	Grand.apply(); //super
	console.log('Father executed!');
	//polymorfism
	switch(arguments.length){
	case 2:
		this.colorsEye = colorsEye;
	case 1:
		this.fathersProp = fathersProp;
	}
}
//heritage
Father.prototype = Object.create(Grand.prototype);
$Father = Father.prototype;
//properties
$Father.fathersProp = "Fathers";
//methods
$Father.fathersMethod = function(){
	console.log("Fathers Method!");
}
$Father.showFathersProp = function(){
	console.log('ARG0:'+this.fathersProp);
}
//override method
$Father.speak = function(){
	console.log('Spanish!');
}

module.exports = Father;