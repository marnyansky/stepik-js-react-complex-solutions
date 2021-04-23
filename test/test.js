const range = (...arr) => arr.length > 0 ? Math.max(...arr) - Math.min(...arr) : 0;

console.log(range(32, 46, 65, 34))
console.log(range()) // 0 Special case since there is no max or min element.