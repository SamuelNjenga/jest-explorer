// displayUser.js
//Another class of functions that is often considered difficult to test is code that directly manipulates the DOM. Let's see how we can test the following snippet of jQuery code that listens to a click event, fetches some data asynchronously and sets the content of a span.
'use strict';

const $ = require('jquery');
const fetchCurrentUser = require('./fetchCurrentUser.js');

$('#button').click(() => {
	fetchCurrentUser((user) => {
        const loggedText = 'Logged ' + (user.loggedIn ? 'In' : 'Out');
        $('#username').text(user.fullName + ' - ' + loggedText);
        
	});
});
