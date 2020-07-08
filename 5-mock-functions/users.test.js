//Now, in order to test this method without actually hitting the API (and thus creating slow and fragile tests), we can use the jest.mock(...) function to automatically mock the axios module.
//Once we mock the module we can provide a mockResolvedValue for .get that returns the data we want our test to assert against. In effect, we are saying that we want axios.get('/users.json') to return a fake response.
const axios = require('axios');
const Users = require('./users');

jest.mock('axios');

test('should fetch users', () => {
	const users = [ { name: 'Sam Njenga' } ];
    const resp = { data: users };
    
	axios.get.mockResolvedValue(resp);

	//or you could use the following depending on your use case:
	//axios.get.mockImplementation(() => Promise.resolve(resp))

	return Users.all().then((data) => expect(data).toBe(users));
});
