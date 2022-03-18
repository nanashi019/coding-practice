

function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first+this.second+this.third;

  }

}
console.log('Person()', Person()); // undefined 라고 나옴
console.log('new Person()', new Person());// 생성자

var kim = new Person('kim', 10, 20, 30)
var lee = new Person('lee', 20 ,30, 60)

console.log('kim', kim);
console.log('kim,sum()', kim.sum());
