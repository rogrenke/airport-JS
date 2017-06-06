describe("Plane", function() {

	var plane;
	var airport;

	beforeEach(function() {
		plane = new Plane();
		airport = new Airport();
	});

	it("is flying on creation", function() {
		expect(plane.status).toEqual("flying");
	});

	it("returns true if it's flying and the isFlying method is called on it", function() {
		expect(plane.isFlying()).toEqual(true);
	});

	it("is returns false if it'landed and the isFlying method is called on it", function() {
		airport.land(plane);
		expect(plane.isFlying()).toEqual(false);
	});
	it("returns true if it has taken off from an airport and the isFlying method is called on it", function() {
		airport.land(plane);
		airport.start(plane);
		expect(plane.isFlying()).toEqual(true);
	});
});