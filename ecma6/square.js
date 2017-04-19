var Shape = require('./shape.js');

class Square extends Shape{
  constructor(options){
    super(options);
  }

  getArea(){
    return Math.pow(this.width, 2);
  }

}
Shape.Shapes.Square = Square;
module.exports = Square;
