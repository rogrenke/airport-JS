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

Plane.prototype.switchStatus = function() {
	if (this.status == "flying") {
		this.status = "landed";
	} else {
		this.status = "flying";
	}
};
