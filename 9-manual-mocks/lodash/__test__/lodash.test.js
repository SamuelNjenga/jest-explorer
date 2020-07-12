// when mocking of a Node module (e.g.: lodash), the mock should be placed in the __mocks__ directory  and  it will be automatically mocked.
const lodash = require('lodash');
//When a manual mock exists for a given module, Jest's module system will use that module when explicitly calling jest.mock('moduleName').
//However, when automock is set to true, the manual mock implementation will be used instead of the automatically created mock, even if jest.mock('moduleName') is not called.
//To opt out of this behavior you will need to explicitly call jest.unmock('moduleName') in tests that should use the actual module implementation.
jest.unmock('lodash');
test('repeat B three times', () => {
	expect(lodash.repeat('B', 3)).toBe('BBB');
});

test('repeat B three times', () => {
	expect(lodash.repeat('SAMUEL', 1)).toBe('SAMUEL');
});
