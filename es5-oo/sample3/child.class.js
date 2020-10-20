var Father = require('./father.class.js');

//construct
function Child(){
  Father.apply(); //super
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

module.exports = Child;