let calculator = {
  sum(){
    return this.a + this.b;
  },
  mul(){
    return this.a * this.b;
  },
  read(){
    this.a = +prompt('put number :', 0);
    this.b = +prompt('put number :', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
