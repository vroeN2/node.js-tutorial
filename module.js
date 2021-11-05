const xyz = require('./people');

console.log(xyz); // {} - it returns empty object (if there is no export from people)
// console.log(people); // error 

// another way to import is to use destructurization:
const { people } = require('./people'); // important note - declared { people } must be named the same as exported one!

console.log(people);

const os = require('os'); // os = operating system - it is built into node itself
console.log(os);
console.log(os.platform(), os.homedir()); // some examples of os methods