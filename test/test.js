var Triangle = require('../ecma6/triangle.js');
var Square = require('../ecma6/square.js');
var Rectangle = require('../ecma6/rectangle.js');

describe("Pruebas de Triángulo", function(){
  it("Se calcula correctamente el área", function(){
    var forma = new Triangle({width: 10, height: 5});
    var area = forma.getArea();
    area.should.match(/^25$/);
  })
})

describe("Pruebas de Rectángulo", function(){
  it("Se calcula correctamente el área", function(){
    var forma = new Rectangle({width: 10, height: 5});
    var area = forma.getArea();
    area.should.match(/^50$/);
  })
})

describe("Pruebas de Cuadrado", function(){
  it("Se calcula correctamente el área", function(){
    var forma = new Square({width: 10});
    var area = forma.getArea();
    area.should.match(/^100$/);
  })
})
