///
function sum(num1, num2){
console.log(num1 + num2);
};

sum(10,20);

function sum2(num1, num2){
return num1 + num2;
};

sum2(10,40); // 출력안됨

const result = sum2(10,20);
console.log(result);
