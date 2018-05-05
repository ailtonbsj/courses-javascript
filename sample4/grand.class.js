var Human = require('./human.class.js');

//construct
function Grand(){
	Human.apply(); //super
	console.log('Grand executed!');
}
//heritage
Grand.prototype = Object.create(Human.prototype);
$Grand = Grand.prototype;
//properties
$Grand.grandsProp = "Grands";
//Methods
$Grand.grandsMethod = function(){
	console.log("grands Method!");
}
//Override method
$Grand.speak = function(){
	Human.prototype.speak.apply(); //super.speak()
	console.log('english!');
}
//Override abstract method
$Grand.saySomething = function(){
	console.log('Hello there!');
}

module.exports = Grand;