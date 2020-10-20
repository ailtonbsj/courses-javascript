/* Grand Class BEGIN */
//construct
function Grand(){
	console.log('Grand executed!');
}
//properties
Grand.prototype.grandsProp = "Grands";
//Methods
Grand.prototype.grandsMethod = function(){
	console.log("grands Method!");
}
/* Grand Class END */

/* Father Class BEGIN */
//construct
function Father(){
	Grand.apply('Grand executed!');
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
/* Father Class END */

/* Child Class BEGIN */
//construct
function Child(){
  Father.apply(this, arguments); //super
  console.log('Child executed!');
}
//heritage
Child.prototype = Object.create(Father.prototype);
//properties
Child.prototype.childsProp = "Childs";
//methods
Child.prototype.childsMethod = function(){
  console.log("Childs Methods!");
}
/* Child Class END */

//Test
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