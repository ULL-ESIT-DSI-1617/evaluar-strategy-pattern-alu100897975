var Shape = require('./shape.js');

class Triangle extends Shape{
  constructor(options){
    super(options);
  }
  getArea(){
    return 0.5 * this.width * this.height;
  }
}

Shape.Shapes.Triangle = Triangle;
module.exports = Triangle;
