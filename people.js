const people = ['yoshi', 'ryu', 'chun-li', 'mario'];
const ages = [20, 25, 30, 35];

console.log(people);

// module.exports = 'hello'; // it returns 'hello', which will be assigned instead of previously empty object in @module (or any other place where @people is requested)

// module.exports = people; // whole people array is now exported

// how to export more things at once? put them into an object! :D
module.exports = {
    people, ages
}; 