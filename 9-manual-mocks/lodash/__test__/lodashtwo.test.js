const lodash = require('lodash');

//jest.unmock("lodash")
test('repeat S Five times', () => {
	expect(lodash.repeat('S', 5)).toBe('SSSSS');
});

test("upperCase", () => {
	expect(lodash.upperCase("sam the programmer")).toBe("SAM THE PROGRAMMER");
})