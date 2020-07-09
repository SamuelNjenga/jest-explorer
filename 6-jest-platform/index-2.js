//jest-diff
//Tool for visualizing changes in data.

const diff = require('jest-diff').default; // Jest 25 or later

const team1 = "The Smart Programmer"
const team2 = "The Excellent Coder"
//const team3 = "The Smart Programmer"

const firstResult = diff(team1,team2);
console.log(firstResult)

const a = {a: {b: {c: 5}}};
const b = {a: {b: {c: 6}}};

const secondResult = diff(a, b);

// print diff
console.log(secondResult);