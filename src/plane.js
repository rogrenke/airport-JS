function Plane() {
	this.status = "flying";
};

Plane.prototype.isFlying = function() {
	if (this.status == "flying") {
		return true;
	} else {
		return false;
	}
};
