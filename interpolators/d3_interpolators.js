// d3.interpolate(a,b)
let interpolate = d3.interpolate(1, 10);
console.log(interpolate);
console.log(interpolate(0));
console.log(interpolate(1));
console.log(interpolate(0.5));

interpolate = d3.interpolate(1, null);
console.log(interpolate(0));
console.log(interpolate(1));
console.log(interpolate(0.5));

interpolate = d3.interpolate(1, undefined);
console.log(interpolate(0));
console.log(interpolate(1));
console.log(interpolate(0.5));

interpolate = d3.interpolate(1, true);
console.log(interpolate(0));
console.log(interpolate(1));
console.log(interpolate(0.5));

interpolate = d3.interpolate('', false);
console.log(interpolate(0));
console.log(interpolate(1));
console.log(interpolate(0.5));

// d3.interpolate(a,b)
// if b is number, a is coerced into number
// d3.interpolateNumber(a,b)
interpolate = d3.interpolate('1', 10);
let interpolateNumber = d3.interpolateNumber(1, 10);

console.log(interpolate(0));
console.log(interpolate(1));
console.log(interpolate(0.5));
console.log(interpolateNumber(0));
console.log(interpolateNumber(1));
console.log(interpolateNumber(0.5));

// d3.interpolate(a,b)
// if b is string, a is coerced into string
// d3.interpolateString(a,b)
interpolate = d3.interpolate(1, '10');
let interpolateString = d3.interpolateString('1', '10');

console.log(interpolate(0));
console.log(interpolate(1));
console.log(interpolate(0.5));
console.log(interpolateString(0));
console.log(interpolateString(1));
console.log(interpolateString(0.5));

interpolate = d3.interpolate(1, 'A');
interpolateString = d3.interpolateString('A', 'G');

console.log(interpolate(0));
console.log(interpolate(1));
console.log(interpolate(0.5));
console.log(interpolateString(0));
console.log(interpolateString(1));
console.log(interpolateString(0.5));

interpolate = d3.interpolate('I am A0', 'I am G5');
interpolateString = d3.interpolateString('I am A1', 'I am H2');

console.log(interpolate(0));
console.log(interpolate(1));
console.log(interpolate(0.5));
console.log(interpolateString(0));
console.log(interpolateString(1));
console.log(interpolateString(0.5));

// d3.interpolate(a,b)
// b is date,
// d3.interpolateDate(a,b)

interpolate = d3.interpolate('567255', new Date(2020, 0, 31));
let interpolateDate = d3.interpolateDate(
  new Date(2010, 5, 31),
  new Date(202, 0, 31)
);

console.log(interpolate(0));
console.log(interpolate(1));
console.log(interpolate(0.5));
console.log(interpolateDate(0));
console.log(interpolateDate(1));
console.log(interpolateDate(0.5));

// d3.interpolate(a,b)
// b is array,
// d3.interpolateArray(a,b)

interpolate = d3.interpolate('567255', [10, 20, 30]);
let interpolateArray = d3.interpolateArray([56, 72, 55], [10, 20, 30]);

console.log(interpolate(0));
console.log(interpolate(1));
console.log(interpolate(0.5));
console.log(interpolateArray(0));
console.log(interpolateArray(1));
console.log(interpolateArray(0.5));

// d3.interpolate(a,b) , both are objects
// d3.interpolateObject(a,b)
interpolate = d3.interpolate({ value: 10 }, { value: 20, age: 25 });
let interpolateObject = d3.interpolateObject({ value: 10 }, { value: 20 });

console.log(interpolate(0));
console.log(interpolate(1));
console.log(interpolate(0.5));
console.log(interpolateObject(0));
console.log(interpolateObject(1));
console.log(interpolateObject(0.5));

// d3.interpolate(a,b)
// d3.interpolateRgb(a,b)
interpolate = d3.interpolate('255', 'Blue');
let interpolateRgb = d3.interpolateRgb('Red', 'Blue');

console.log(interpolate(0));
console.log(interpolate(1));
console.log(interpolate(0.5));
console.log(interpolateRgb(0));
console.log(interpolateRgb(1));
console.log(interpolateRgb(0.5));

// d3.interpolateHsl(a,b)
// d3.interpolateLab(a,b)

// d3.interpolateRound(a,b)
let interpolateRound = d3.interpolateRound(1.23, 9.87);
console.log(interpolateRound(0));
console.log(interpolateRound(1));
console.log(interpolateRound(0.5));
