function Airport() {
	this.planes = []
}

Airport.prototype.land = function(plane) {
	this.planes.push(plane);
}

Airport.prototype.start = function(plane) {
	var index = this.planes.indexOf(plane);
	return this.planes.splice(index, 1);
}