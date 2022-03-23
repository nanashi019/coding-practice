function User(name) {
  if(!new.target){          //new 없이 호출해도
    return new User(name);  //new를 붙여준다
  }
  this.name = name;
}

let bora = User("보라") //new를 쓴것처럼 바꿔줌

console.log(bora);
