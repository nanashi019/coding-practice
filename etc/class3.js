
class Person{
  constructor (name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
  }
  nextYearAge(){
    return this.age + 1; //초기값에 접근해 특정기능 수행하는 메서
}
}

let kim = new Person('kim', 24, 'seoul');

kim.eat = function () {
    return 'apple'
} //class 밖에서도 메서드 작성가능

console.log(kim.nextYearAge());
console.log(kim.eat());


class introducePerson extends Person{
  introduce(){
    return `I am ${this.name} living in ${this.city}`
  }
}

let lee = new introducePerson('kim', 24, 'seoul');

console.log(lee.introduce());
