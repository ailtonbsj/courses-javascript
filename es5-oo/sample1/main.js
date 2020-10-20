/* Father Class BEGIN */
//construct
function Father(){
	console.log('Father executed!');
}
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
console.log('FATHER');
var father = new Father();
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
child.fathersMethod();
child.childsMethod();