// Constructor Pattern

// basic es5 constructor pattern
console.log("\n*******ES5 basic constructor pattern*******");
function CarBasicConstructor(model, year, miles) {
	this.model = model;
	this.year = year;
	this.miles = miles;

	this.toString = function() {
		return (
			this.model + "(" + this.year + ")" + " has done " + this.miles + " miles."
		);
	};
}

var civic = new CarBasicConstructor("Honda Civic", "2016", "20000");
var mondeo = new CarBasicConstructor("Ford Mondeo", "2018", "5000");

console.log("copy of toString for each instance");
console.log(civic.toString());
console.log(mondeo.toString());
console.log("no privacy:", civic.model);

// prototypal es5 constructor pattern
console.log("\n*******ES5 prototypal constructor pattern*******");
function CarPrototypeConstructor(model, year, miles) {
	this.model = model;
	this.year = year;
	this.miles = miles;
}

CarPrototypeConstructor.prototype.toString = function() {
	return (
		this.model + "(" + this.year + ")" + " has done " + this.miles + " miles."
	);
};

var civic2 = new CarPrototypeConstructor("Honda Civic", "2016", "20000");
var mondeo2 = new CarPrototypeConstructor("Ford Mondeo", "2018", "5000");

console.log("Shares the toString Function between both instances");
console.log(civic2.toString());
console.log(mondeo2.toString());
console.log("no privacy:", mondeo2.model);
