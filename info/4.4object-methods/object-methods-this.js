let user = {
  name : "John",
  age : 30,
  sayHi(){
    console.log(user.name);  //외부인자 사용
  }
};

let admin = user;

user = null; // user에 null을 덮어씌움

admin.sayHi(); //Cannot read properties of null (reading 'name')

//user.name 대신 this.name을 쓰면 에러가 안발생했을것이
