let salaries ={
  John : 100,
  Ann : 160,
  Pete : 140
};


let sum = 0
for (let key in salaries){
  sum += salaries[key];
}

console.log(sum);
console.log(salaries.John);

let menu ={
  width : 200,
  height : 300,
  title : "my menu"
};

function multiplyNumeric(obj){
  for (let key in obj){
    if (typeof obj[key] == 'number'){
    obj[key] +=2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);
