let user = {
  name : "John",
  sizes : {
    height : 182,
    width : 50
  }
};

let clone = Object.assign({}, user);

user.sizes.width++;

console.log(user); // user, clone 모두 width가 ++됨
console.log(clone); //
