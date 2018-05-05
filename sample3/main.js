var Grand = require('./grand.class.js');
var Father = require('./father.class.js');
var Child = require('./child.class.js');

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
try{
	grand.childsMethod();
	throw "invalid!";
} catch(e){
	if(!(e instanceof TypeError)){
		throw e;
	}
}

console.log('FATHER');
var father = new Father();
father.grandsMethod();
father.fathersMethod();
try{
	father.childsMethod();
	throw "invalid!";
} catch(e){
	if(!(e instanceof TypeError)){
		throw e;
	}
}

console.log('CHILD');
var child = new Child();
child.grandsMethod();
child.fathersMethod();
child.childsMethod();