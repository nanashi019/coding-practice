function Person(name, first, second, third){
  this.name=name;
  this.first=first;
  this.second=second;

  }


Person.prototype.sum = function () {
    return this.first + this.second
}

var kim = new Person('kim', 10, 20);
console.log('kim.sum()', kim.sum());

var lee = new Person('lee', 20, 40);
lee.sum = function() {
    return 'this : '+(this.first +this.second)
  }
console.log('lee.sum()', lee.sum());
