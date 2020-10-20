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

module.exports = Grand;