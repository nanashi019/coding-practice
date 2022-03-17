
var memberArray = ['finn', 'sam', 'tom'];
console.log("memberArray[2]", memberArray[2]);

var memberObject = {
  manager:'finn',
  developer:'sam',
  designer : 'tom'

}

memberObject.designer = 'john' // 수정

console.log("designer", memberObject.designer);//
console.log("designer", memberObject['designer']);// 위랑같음

delete memberObject.manager

console.log("manager", memberObject.manager);
