var Shape = require('./shape.js');

class Rectangle extends Shape{
  constructor(options){
    super(options);
  }

  getArea(){
    return this.width * this.height;
  }
}
Shape.Shapes.Rectangle = Rectangle;
module.exports = Rectangle;
