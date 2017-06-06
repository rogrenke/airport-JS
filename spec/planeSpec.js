describe("Plane", function() {

	var plane;

	beforeEach(function() {
		plane = new Plane();
	});

	it("is flying on creation", function() {
		expect(plane.status).toEqual("flying");
	})

	it("returns true if it's flying and the isFlying method is called on it", function() {
		expect(plane.isFlying()).toEqual(true);
	});
});