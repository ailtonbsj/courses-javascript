var Human = require('./human.class.js');
var Grand = require('./grand.class.js');
var Father = require('./father.class.js');

console.log("HUMAN");
try{
	var human = new Human();
	throw "invalid!";
} catch(e){
	if(!(e == 'abstract class')){
		throw e;
	}
}

console.log('GRAND');
var grand = new Grand();
grand.grandsMethod();
try{
	grand.fathersMethod();
	throw "invalid!";
} catch(e){
	if(!(e instanceof TypeError)){
		throw e;
	}
}
grand.speak();

console.log('FATHER');
var father = new Father();
father.grandsMethod();
father.fathersMethod();
father.speak();
father.saySomething();
father.showFathersProp();
console.log('ARG1:'+father.colorsEye);

var father2 = new Father('newFathersProp');
father2.showFathersProp();
console.log('ARG1:'+father2.colorsEye);

var father3 = new Father('newFathersProp', 'green');
father3.showFathersProp();
console.log('ARG1:'+father3.colorsEye);