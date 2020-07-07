const add = (a, b) => a + b;
//Use test.todo when you are planning on writing tests. These tests will be highlighted in the summary output at the end so you know how many tests you still need todo.
test.todo('add should be associative');

const coding = {
	amazing: true,
	boring: false
};

//describe(name, fn) creates a block that groups together several related tests.
describe('my code experience', () => {
	test('is amazing', () => {
		expect(coding.amazing).toBeTruthy();
	});

	test('is not boring', () => {
		expect(coding.boring).toBeFalsy();
	});
});

describe.skip('my code experience', () => {
	test('is amazing', () => {
		expect(coding.amazing).toBeTruthy();
	});

	test('is boring', () => {
		expect(coding.boring).toBeFalsy();
	});
});

describe('my other beverage', () => {
	// ... will be skipped
});
