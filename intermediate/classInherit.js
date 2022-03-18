//
class Person{
  constructor(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;

  }
  sum(){
    return this.first + this.second;
  }
}
const kim = new Person('kim', 20, 40);
console.log('kim', kim);
console.log('kim.sum()', kim.sum());


class PersonPlus extends Person{
  constructor(name, first, second, third){
  super(name, first, second);
  this.third = third;
}
  sum(){
    return super.sum() + this.third;
  }
  avg(){
    return (this.first + this.second + this.third)/3;
  }
}

const lee = new PersonPlus('lee', 50, 80, 100);
console.log('lee.avg()', lee.avg());
console.log('lee.sum()', lee.sum());
