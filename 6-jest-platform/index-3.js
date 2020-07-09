//jest-docblock
//Tool for extracting and parsing the comments at the top of a JavaScript file. Exports various functions to manipulate the data inside the comment block

const {parseWithComments} = require('jest-docblock');

const code = `
/**
 * The Author of this sample code is Samuel  Njenga
 *
 * He is such a passionate programmer
 * @flow
 */

 console.log('Programming is so fun!');
`;

const parsed = parseWithComments(code);

// prints an object with two attributes: comments and pragmas.
console.log(parsed);