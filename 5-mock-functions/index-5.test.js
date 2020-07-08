//When you need to recreate a complex behavior of a mock function such that multiple function calls produce different results, use the mockImplementationOnce method
test("mockImplementation two", ()=> {
	const myMockFn = jest.fn().mockImplementationOnce(cb => cb(null,true))
	.mockImplementationOnce(cb => cb(null,false))
	.mockImplementationOnce(cb => cb(null,15));

	myMockFn((err,val) => console.log(val)); //true
	myMockFn((err,val) => console.log(val)); //false
	myMockFn((err,val) => console.log(val)); //false
});

//When the mocked function runs out of implementations defined with mockImplementationOnce, it will execute the default implementation set with jest.fn (if it is defined)
const myMockFn = jest
  .fn(() => 'the default')
  .mockImplementationOnce(() => 'my first call operation')
  .mockImplementationOnce(() => 'my second call operation')
  .mockImplementationOnce(() => 'my third call operation');

console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
// > 'my first call operation', 'my second call operation', 'my third call operation', 'default'

//For cases where we have methods that are typically chained (and thus always need to
//return this), we have Jest sugary API to simplify this in the form of a .mockReturnThis()
//function that also sits on all mocks
test("return this", () => {
	const myObj = {
		myMethod: jest.fn().mockReturnThis()
	};
	//is the same as
	const otherObj = {
		myMethod: jest.fn(function() {
			return this;
		})
	};
	console.log(myObj.myMethod());
	console.log(otherObj.myMethod());
});