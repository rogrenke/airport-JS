function Airport() {
	this.planes = []
}

Airport.prototype.land = function(plane) {
	this.planes.push(plane);
}

function Plane() {
}


// function Airport() {}
// undefined
// airport = new Airport()
// Airport {}
// Airport.proto
// undefined
// Airport.prototype.planes = []
// []
// airport.planes
// []
// Airport.prototype.land = funtion(plane) {
// VM410:1 Uncaught SyntaxError: Unexpected token {
// Airport.prototype.land = function(plane) {
//     this.planes.push(plane);
// }
// function (plane) {
//     this.planes.push(plane);
// }
// function Plane () {
// }
// undefined
// plane = new Plane()
// Plane {}
// airport.land(plane)
// undefined
// airport.planes
// [Plane]0: Planelength: 1__proto__: Array(0)