function User(name){
  this.name = name;
  this.sayHi = function() {
    console.log("my name is " + this.name);
    //생성자내 메서드
  };
}

let bora = new User("leebora")

bora.sayHi();
