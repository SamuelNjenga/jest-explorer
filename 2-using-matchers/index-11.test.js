function compileReactCode() {
	throw new Error('you dont an existing react script');
}
//If you want to test that a particular function throws an error when it's called, use toThrow
test('compiling android goes as expected', () => {
	expect(compileReactCode).toThrow();
	expect(compileReactCode).toThrow(Error);

	// You can also use the exact error message or a regexp
	expect(compileReactCode).toThrow('you dont an existing react script');
	expect(compileReactCode).toThrow(/react/);
});

describe('grapefruits are healthy', () => {
	test('grapefruits are a fruit', () => {
		expect('grapefruits').toMatch('fruit');
	});
	test('codefruit is not a frute', () => {
		expect('zerofruits').not.toMatch('frute');
	});
});
//You can check strings against regular expressions with toMatch:
test('there is no I in team', () => {
	expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
	expect('Christoph').toMatch(/stop/);
});

const shoppingList = [ 'diapers', 'kleenex', 'trash bags', 'paper towels', 'beer' ];
//You can check if an array or iterable contains a particular item using toContain
test('the shopping list has beer on it', () => {
	expect(shoppingList).toContain('beer');
	expect(new Set(shoppingList)).toContain('beer');
});
