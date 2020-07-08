//Mock Implementations
//Still, there are cases where it's useful to go beyond the ability to specify return values and full-on replace the implementation of a mock function. This can be done with jest.fn or the mockImplementationOnce method on mock functions.

test("mockImplementation", ()=> {
	const myMockFn = jest.fn(cb => cb('coder',true,'programmer'));

	myMockFn((val1,val2,val3) => console.log(val3)); //true
})