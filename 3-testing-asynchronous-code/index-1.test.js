//Callbacks
//You have a fetchData(callback) function that fetches some data and calls callback(data) when it is complete. You want to test that this returned data is the string 'peanut butter'.
function fetchData(callback) {
	setTimeout(() => {
		callback('sam the programmer');
	}, 3000);
}


// Don't do this! 
//Because the test will complete as soon as fetchData completes, before ever calling the callback
//By default, Jest tests complete once they reach the end of their execution. That means this test will not work as intended:
test('sam is both a coder as well as a programmer', () => {
	function callback(data) {
		expect(data).toBe('sam the programmer');
	}

	fetchData(callback);
});

//Instead of putting the test in a function with an empty argument, use a single argument called done. Jest will wait until the done callback is called before finishing the test.
// If done() is never called, the test will fail (with timeout error), which is what you want to happen.
//If the expect statement fails, it throws an error and done() is not called. If we want to see in the test log why it failed, we have to wrap expect in a try block and pass the error in the catch block to done. Otherwise, we end up with an opaque timeout error that doesn't show what value was received by expect(data).
test('sam is both a coder as well as a programmer', done => {
	function callback(data) {
		try {
			expect(data).toBe('sam the programmer');
			done();
		} catch (error) {
			done(error);
		}
	}

	fetchData(callback);
});

function fetchDataTwo(callback) {
	setTimeout(() => {
		callback('Mark is an ambitious young man');
	}, 3000);
}

test('Mark being ambitious', done => {
	function callback(data) {
		try {
			expect(data).toBe('Mark is an ambitious young man');
			done();
		} catch (error) {
			done(error);
		}
	}

	fetchDataTwo(callback);
});