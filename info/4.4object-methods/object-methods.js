let user = {
  name : "John",
  age : 30
};

user.sayHi = function() {
  console.log("hi");
}; //매서드 할당

user.sayHi();

function sayBye() {
  console.log("bye");
}

user.sayBye = sayBye; //선언된 함수를 매서드로 등록

user.sayBye();
