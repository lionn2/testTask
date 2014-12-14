function Animal (name) {
	this.name = name; 
	this.getName = function () {
		return this.name;
	}
}

function Dog (name) {
	this.__proto__ = new Animal(name);
	this.gav = function () {
		return 'Dog ' + this.name + ' is saying gav';
	}
}

var dog = new Dog('Aban');
console.log( dog.getName() === 'garfield' ); // false
console.log( dog.gav() === 'Dog Aban is saying gav' ); // true