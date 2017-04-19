//Clase padre "Shape" de la que heredarán las demás clases.
class Shape{
  constructor(options){
    Object.assign(this, options)
  }
  getArea(){
    let forma = new Shape.Shapes[this.constructor.name](this);
    let area = forma.getArea();
    return area;
  }
}

Shape.Shapes = Shape.Shapes || {};
module.exports = Shape;
