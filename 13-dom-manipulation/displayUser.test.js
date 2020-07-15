// __tests__/displayUser-test.js
'use strict';

jest.mock('./fetchCurrentUser');//We are mocking fetchCurrentUser.js so that our test doesn't make a real network request but instead resolves to mock data locally

test('displays a user after a click', () => {
  // Set up our document body
  document.body.innerHTML =
    '<div>' +
    '  <span id="username" />' +
    '  <button id="button" />' +
    '</div>';

  // This module has a side-effect
  require('./displayUser');

  const $ = require('jquery');
  const fetchCurrentUser = require('./fetchCurrentUser');

  // Tell the fetchCurrentUser mock function to automatically invoke
  // its callback with some data
  fetchCurrentUser.mockImplementation(cb => {
    cb({
      fullName: 'Samuel Njenga',
      loggedIn: true
    });
  });

  // Use jquery to emulate a click on our button
  $('#button').click();

  // Assert that the fetchCurrentUser function was called, and that the
  // #username span's inner text was updated as we'd expect it to.
  expect(fetchCurrentUser).toBeCalled();
  expect($('#username').text()).toEqual('Samuel Njenga - Logged In');
});