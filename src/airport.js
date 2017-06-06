function Airport() {
	this.planes = []
}

Airport.prototype.land = function(plane) {
	this.planes.push(plane);
	plane.switchStatus();
}

Airport.prototype.start = function(plane) {
	var index = this.planes.indexOf(plane);
	return this.planes.splice(index, 1);
}