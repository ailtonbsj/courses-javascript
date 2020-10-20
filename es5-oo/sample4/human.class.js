//construct
function Human(){
	//abstract
	if(this.__proto__ === Human.prototype) throw 'abstract class';
	console.log('Human executed!');
	Human.incleasePopulation();
}
$Human = Human.prototype;
//properties
$Human.colorsEye = 'black'; //never initialize with object, just with primitive
//static properties
Human.population = 0;
//methods
$Human.speak = function(){
	console.log('portuguese!');
}
//abstract method
$Human.saySomething = function(){
	throw 'need to be implemented!';
}
//static methods
Human.incleasePopulation = function(){
	Human.population++;
	console.log('Population now is '+Human.population);
}

module.exports = Human;