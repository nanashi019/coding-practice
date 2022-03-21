var kim = {name:'kim', first:10, second:20};
var lee = {naem:'lee', first:10, second:10};
function sum(prefix){
    return prefix + (this.first + this.second);
}
//call을 쓰면 인자를 메소드안에 넣는다, this를 새로 주입
console.log("sum.call(kim)", sum.call(kim, '=> '));
console.log("lee.call(lee)", sum.call(lee, ': ')); // prefix 인자를 사용가능

var kimSum = sum.bind(kim, '-> '); // bind를 쓰면 this 안에 주입하면서 영구적으로 고정
console.log('kimSum()', kimSum());
