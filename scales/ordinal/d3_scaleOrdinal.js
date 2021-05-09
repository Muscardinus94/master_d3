// d3.scaleOrdinal()

let ordinalScale = d3.scaleOrdinal();

ordinalScale.range([1, 2]);
console.log(ordinalScale(0));
console.log(ordinalScale(1));
console.log(ordinalScale(2));

console.log(ordinalScale.domain());

ordinalScale.domain(['M', 'F']);
console.log(ordinalScale('M'));
console.log(ordinalScale('F'));
console.log(ordinalScale('Q'));
console.log(ordinalScale('A'));

ordinalScale.domain([1, 2, 3]);
ordinalScale.range(['a', 'b']);
console.log(ordinalScale(0));
console.log(ordinalScale(1));
console.log(ordinalScale(2));
console.log(ordinalScale(-1));
console.log(ordinalScale(-2));
console.log(ordinalScale(-3));

ordinalScale.domain(['1', '2', '3']);
ordinalScale.range(['red', 'green', 'blue']);
console.log(ordinalScale(0));
console.log(ordinalScale(1));
console.log(ordinalScale(2));
console.log(ordinalScale(-1));
console.log(ordinalScale(-2));
console.log(ordinalScale(-3));

ordinalScale.unknown('unknown');
console.log(ordinalScale(3));
console.log(ordinalScale(1));
console.log(ordinalScale(2));
console.log(ordinalScale(-1));
console.log(ordinalScale(-2));
console.log(ordinalScale(-3));

console.log(ordinalScale(4));

let ordinalScale1 = ordinalScale.copy();
