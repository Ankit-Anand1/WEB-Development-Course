const sum = (a, b) => a+b;
const mul = (a, b) => a*b;
const g = 9.8;
const pi = 3.14;

// module.exports = "123";


// let obj = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     pi: pi,
// };

// module.exports = obj;

///or you can write like this

module.exports = {
    sum: sum,
    mul: mul,
    g: g,
    pi: pi,
};