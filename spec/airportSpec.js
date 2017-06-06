describe("Airport", function() {

	var airport;

	beforeEach(function() {
		airport = new Airport();
	});

	it("It is created as an object with an empty planes array", function() {
		expect(airport.planes).toEqual([]);
	});
});