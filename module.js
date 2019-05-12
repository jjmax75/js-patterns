// Module pattern

// es5 module
console.log("\n*******ES5 module pattern*******");
var myNamespace = (function() {
	var myPrivateVar, myPrivateMethod;

	myPrivateVar = 0;

	myPrivateMethod = function(foo) {
		console.log(foo);
	};

	return {
		myPublicVar: "bar",
		myPublicMethod: function(param1) {
			myPrivateVar++;
			console.log("my private var is now:", myPrivateVar);
			myPrivateMethod(param1);
			return "this is the return:", param1;
		}
	};
})();

console.log("public and private variables and methods");
console.log("advantages: clean for OOP, privacy");
console.log(
	"disadvantages: access public and private differently, can't access private vars from methods added after, unit testing private members"
);
console.log("this is the public var:", myNamespace.myPublicVar);
console.log("this is the private var:", myNamespace.myPrivateVar);
console.log("this is the public method:", myNamespace.myPublicMethod("feck"));
// console.log("this is the private method:", myNamespace.myPrivateMethod("arse"));
