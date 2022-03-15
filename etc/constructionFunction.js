//
function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}
var user1 = new User('John', 'Smith', 26, 'male');

console.log(user1);

var user200 = new User('Jill', 'Ronin', 25, 'female');

console.log(user200);

var user300 = new User('naElon', 'Musk', 50, 'female');

console.log(user300);

User.prototype.emailDomain = '@facebook.com';

console.log(user1);
