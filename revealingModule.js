// Revealing Module pattern

// es5 revealing module
console.log("\n*******ES5 revealing module pattern*******");
var myNamespace = (function() {
	var myPrivateVar, myPrivateMethod, myPublicVar, myPublicMethod;

	myPrivateVar = 0;
	myPublicVar = "hey there";

	myPrivateMethod = function(foo) {
		console.log("your name is:", foo, "the value is now:", myPrivateVar);
	};

	myPublicIncrementMethod = function() {
		myPrivateVar++;
	};

	myPublicGetMethod = function(name) {
		myPrivateMethod(name);
	};

	return {
		increment: myPublicIncrementMethod,
		get: myPublicGetMethod,
		greeting: myPublicVar
	};
})();

console.log(
	"advantages: consistent syntax between calling module and within module, readability"
);
console.log("disadvantages: cannot override when private refers to public");
console.log(myNamespace.greeting);
myNamespace.get("john");
myNamespace.increment();
myNamespace.get("john");
