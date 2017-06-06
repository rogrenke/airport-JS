describe("Airport", function() {

	var airport;
	var plane;

	beforeEach(function() {
		airport = new Airport();
		plane = new Plane();
	});

	it("is created as an object with an empty planes array", function() {
		expect(airport.planes).toEqual([]);
	})

	it("is expected to store a plane if the land function is called on it with plane as an argument", function() {
		airport.land(plane);
		expect(airport.planes[0]).toEqual(plane);
	});
});