// d3.every(iterable, test)
let everyOutput = d3.every([1, 2, 3], (d) => d > 0);
console.log(everyOutput);

everyOutput = d3.every([1, 2, 3], (d) => d > 3);
console.log(everyOutput);

everyOutput = d3.every(new Set([1, 2, 3]), (d) => d > 0);
console.log(everyOutput);

everyOutput = d3.every(new Set([1, 2, 3]), (d) => d > 3);
console.log(everyOutput);

// d3.some([iterable],test)
let someOutput = d3.some([1, 2, 3], (d) => d > 1);
console.log(someOutput);

someOutput = d3.some([1, 2, 3], (d) => d > 3);
console.log(someOutput);

someOutput = d3.some(new Set([1, 2, 3]), (d) => d > 1);
console.log(someOutput);

someOutput = d3.some(new Set([1, 2, 3]), (d) => d > 3);
console.log(someOutput);

// d3.filter(iterable, test)
let filterOutput = d3.filter([1, 2, 3], (d) => d > 1);
console.log(filterOutput);

filterOutput = d3.filter([1, 2, 3], (d) => d > 3);
console.log(filterOutput);

filterOutput = d3.filter(new Set([1, 2, 3]), (d) => d > 1);
console.log(filterOutput);

filterOutput = d3.filter(new Set([1, 2, 3]), (d) => d > 3);
console.log(filterOutput);

// d3.map(iterable, mapper)
let mapOutput = d3.map([1, 2, 3], (d) => d > 1);
console.log(mapOutput);

mapOutput = d3.map([1, 2, 3], (d) => d > 3);
console.log(mapOutput);

mapOutput = d3.map(new Set([1, 2, 3]), (d) => d > 1);
console.log(mapOutput);

mapOutput = d3.map(new Set([1, 2, 3]), (d) => d > 3);
console.log(mapOutput);

// d3.reduce(iterable, reducer, initialValue(optional))
let reduceOutput = d3.reduce([1, 2, 3], (x, y) => x + y, 5);
console.log(reduceOutput);

reduceOutput = d3.reduce([1, 2, 3], (x, y) => x - y);
console.log(reduceOutput);

reduceOutput = d3.reduce(new Set([1, 2, 3]), (x, y) => x + y);
console.log(reduceOutput);

reduceOutput = d3.reduce(new Set([1, 2, 3]), (x, y) => x - y);
console.log(reduceOutput);

// d3.reverse(iterable)
let reverseOutput = d3.reverse(new Set([1, 2, 3]));
console.log(reverseOutput);

// d3.sort(iterable, accessor)
// d3.sort(iterable, comparator)
let sortOutput = d3.sort([1, 2, 3]);
console.log(sortOutput);
sortOutput = d3.sort([3, 2, 1], (d) => d / 3);
console.log(sortOutput);
sortOutput = d3.sort([1, 2, 3], (x, y) => y - x);
console.log(sortOutput);

sortOutput = d3.sort(new Set([1, 2, 3]));
console.log(sortOutput);
sortOutput = d3.sort(new Set([1, 2, 3]), (d) => d / 3);
console.log(sortOutput);
sortOutput = d3.sort(new Set([1, 2, 3]), (x, y) => y - x);
console.log(sortOutput);
