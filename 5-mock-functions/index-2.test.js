//All mock functions have this special .mock property, which is where data about how the function has been called and what the function returned is kept. The .mock property also tracks the value of this for each call, so it is possible to inspect this as well

test('this', () => {
	const myMock = jest.fn();

	const a = new myMock();
	a.name = 'a';
	const b = {};
	b.name = 'b';
	const bound = myMock.bind(b);
	bound();
	console.log(myMock.mock.instances);
});

//These mock members are very useful in tests to assert how these functions get called, instantiated, or what they returned
test('someMockFunction', () => {
	const someMockFunction = jest.fn(() => 'return value');
    someMockFunction('first arg', 'second arg');
	//The function was called exactly once
	expect(someMockFunction.mock.calls.length).toBe(1);
	//The first arg of the first call to the function was 'first arg'
	expect(someMockFunction.mock.calls[0][0]).toBe('first arg');
	//The second arg of the first call to the function was 'second arg'
	expect(someMockFunction.mock.calls[0][1]).toBe('second arg');
	//The return value of the first call to the function was 'return value'
	expect(someMockFunction.mock.results[0].value).toBe('return value');
    const SomeMockConstructor = jest.fn();
	const a = new SomeMockConstructor();
	a.name = 'test';
    const b = new SomeMockConstructor();
    b.club = 'fc';
	//This function was instantiated exactly twice
	expect(SomeMockConstructor.mock.instances.length).toBe(2);
	//The object returned by the first instantiation of this function
	// had a 'name' property whose value was set to 'test'
    expect(SomeMockConstructor.mock.instances[0].name).toEqual('test');
    expect(SomeMockConstructor.mock.instances[1].club).toEqual('fc');
});