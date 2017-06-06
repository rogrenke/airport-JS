describe("Plane", function() {

	var plane;

	beforeEach(function() {
		plane = new Plane();
	});

	it("is flying on creation", function() {
		expect(plane.status).toEqual("flying");
	})
});