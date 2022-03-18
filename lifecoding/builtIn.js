console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random());
console.log("Math,floor(3.9)", Math.floor(3.9));//절상

//내가 만드는 빌트인 객체
var MyMath = {
  PI:Math.PI,
  random:function(){
    return Math.ramdom();
  },
  floor:function(val) {
    return Math.floor(val);

  }
}
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("myMath.floor(3.9)", MyMath.floor(3.9));
