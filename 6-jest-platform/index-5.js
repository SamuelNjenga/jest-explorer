//jest-validate
//Tool for validating configurations submitted by users. Exports a function that takes two arguments: the user's configuration and an object containing an example configuration and other options.

const {validate} = require('jest-validate');

const configByUser = {
  sam: '<rootDir>/node_modules/my-custom-transform',
};

const result = validate(configByUser, {
  comment: '  Documentation: http://custom-docs.com',
  exampleConfig: {transform: '<rootDir>/node_modules/babel-jest'},
});

console.log(result);