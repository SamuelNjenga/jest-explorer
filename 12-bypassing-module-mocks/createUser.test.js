jest.mock('node-fetch');

const fetch = require('node-fetch'); //Uses fetch function as a mock
//const Response = require('node-fetch').Response; //Uses Response object as the real implementation
const Response = jest.requireActual('node-fetch').Response; //This allows your test file to import the actual Response object from node-fetch, rather than a mocked version. This means the test will now pass correctly.
const createUser = require('./createUser');

test('createUser calls fetch with the right args and returns the user id', async () => {
  fetch.mockReturnValue(Promise.resolve(new Response('4'))); 

  const userId = await createUser();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('http://website.com/users', {
    method: 'POST',
  });
  expect(userId).toBe('4');
});