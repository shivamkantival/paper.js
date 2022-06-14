const paper = require("./dist/paper-core.js");

paper.setup();

const circlePath = new paper.Path.Line(new paper.Point(50, 50), new paper.Point(100,100));
console.log(circlePath.bounds.topLeft); // { x: 25.0, y: 25.0 }
console.log(circlePath.bounds.topRight); // { x: 75.0, y: 25.0 }
console.log(circlePath.bounds.bottomRight); // { x: 75.0, y: 75.0 }
console.log(circlePath.bounds.bottomLeft);
