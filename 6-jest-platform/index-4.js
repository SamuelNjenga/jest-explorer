//jest-get-type
//Module that identifies the primitive type of any JavaScript value. Exports a function that returns a string with the type of the value passed as argument

const getType = require('jest-get-type');

const str = "He is a good programmer";
const student = {
    class: 'Level 1',
    age: 20,
    hobbies: ['skating', 'solving puzzles'],
    grade: 60.99
}
const array = [1, 2, 3, 5, 80];
const nullValue = null;
const undefinedValue = undefined;

// prints 'array'
console.log(getType(array));
// prints 'null'
console.log(getType(nullValue));
// prints 'undefined'
console.log(getType(undefinedValue));

console.log(getType(student));
console.log(getType(student.class));
console.log(getType(student.grade));
console.log(getType(student.hobbies));
console.log(getType(str));