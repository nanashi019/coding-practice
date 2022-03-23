let user = {
  name : "John",
  age : 30
};

let clone = {};  // 빈객

for (let key in user){
  clone[key] = user[key];
} //빈객체에 user 프러퍼티를 복사해서 넣음

console.log(clone);

clone.name = "Pete"; // clone 데이터 변경

let clone2 = Object.assign({}, user); //객체 복사

console.log(clone2);
