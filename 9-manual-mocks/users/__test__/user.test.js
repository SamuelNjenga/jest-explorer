const user = require('../user');

//Manual mocks are used to stub out functionality with mock data. For example, instead of accessing a remote resource like a website or a database, you might want to create a manual mock that allows you to use fake data.

//Manual mocks are defined by writing a module in a __mocks__/ subdirectory immediately adjacent to the module.

jest.mock('../user');

test('first use of mock user', () => {
	expect(user.programmingLanguage).toBe('JavaScript');
});

test('second use of mock user', () => {
	expect(user.name).toBe('Mock User');
});

test('third use of mock user', () => {
	expect(user.ide).toBe('VSCode');
});