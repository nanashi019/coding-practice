// general function
function sum2(num1, num2){
return num1 + num2;
};

const result = sum2(10,20);
console.log(result);

// arrow function
const sum = (num3, num4) => num3 + num4;

const result_ = sum(20,30);
console.log(result_);
//
const pow = x => x * x;
const result2 = pow(10);
console.log(result2);
//
const printPie = () => 3.14;
const result3 = printPie();
console.log(result3);
//
const getObject = () =>(
{
name:"Tom", age:20
});
const obj = getObject();
console.log(obj.name + " is " + obj.age);
//줄이는게 핵심
