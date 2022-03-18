var superObj = {superVal:'super'}
var subObj = {subVal:'sub'}

subObj.__proto__ = superObj; /// 상속지정
//자식                부모
console.log('subObj.subVal ==>', subObj.subVal);
console.log('subObj.superVal ==>', subObj.superVal);//부모꺼

var sub2Obj = Object.create(superObj);
sub2Obj.sub2Val = 'sub2';
console.log('sub2Obj.superVal ==>', sub2Obj.superVal);//부모꺼
