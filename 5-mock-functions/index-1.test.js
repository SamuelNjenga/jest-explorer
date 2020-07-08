//Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with new, and allowing test-time configuration of return values.

//Using a mock function
//Testing an implementation of a function forEach,
//which invokes a callback for each item in a supplied array.

function forEach(items, callback) {
	for (let index = 0; index < items.length; index++) {
		callback(items[index]);
	}
}

//To test this function, we can use a mock function, and inspect the mock's state to ensure the callback is invoked as expected.

test('mock function', () => {
	const mockCallback = jest.fn((x) => 42 + x);
	forEach([ 0, 1, 2 ], mockCallback);

	// The mock function is called twice
	expect(mockCallback.mock.calls.length).toBe(3);

	// The first argument of the first call to the function was 0
	expect(mockCallback.mock.calls[0][0]).toBe(0);

	// The first argument of the second call to the function was 1
	expect(mockCallback.mock.calls[1][0]).toBe(1);

	// The first argument of the third call to the function was 2
	expect(mockCallback.mock.calls[2][0]).toBe(2);

	// The return value of the first call to the function was 42
	expect(mockCallback.mock.results[0].value).toBe(42);

	// The return value of the third call to the function was 44
	expect(mockCallback.mock.results[2].value).toBe(44);
});
