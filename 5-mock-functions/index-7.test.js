//Custom matchers
//make it less demanding to assert how mock functions have been called by adding some custom matcher functions
test("custom matchers", () => {
	const mockFunc = jest.fn();

	const arg1 = "argument one";
	const arg2 = "argument two";
	mockFunc(arg1,arg2);
	//The mock function was called at least once
	expect(mockFunc).toBeCalled();
	//The mock function was called at least once with the specified args
	expect(mockFunc).toBeCalledWith(arg1,arg2);
	//The last call to the mock function was called with the specified args
	expect(mockFunc).lastCalledWith(arg1,arg2);
	//All calls and the name of the mock is written as a snapshot
	expect(mockFunc).toMatchSnapshot();
});

test("common matchers",() => {
	const mockFunc = jest.fn().mockName("my mock name");
	const arg1 = 900;
	const arg2 = "arg2";
	mockFunc(arg1,arg2);
	expect(mockFunc.mock.calls.length).toBeGreaterThan(0);
	//The mock function was called at least once with the specified args
	expect(mockFunc.mock.calls).toContainEqual([arg1,arg2]);
	//The last call to the mock function was called with the specified args
	expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
		arg1,arg2
	]);
	//The first arg of the last call to the mock function was `900`
	//(note that there is no sugar helper for this specific of an assertion)
	expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(900);
	
	//A snapshot will check that a mock was invoked the same number of times,
	// in the same order, with the same arguments. It will also assert on the name.
	expect(mockFunc.mock.calls).toEqual([[arg1,arg2]]);
	expect(mockFunc.getMockName()).toBe('my mock name');
});