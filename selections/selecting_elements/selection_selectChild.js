let firstCircle = d3.select('svg').selectChild();
let secondCircle = d3.select('svg').selectChild(':nth-child(2');

let firstRect = d3.select('svg:nth-of-type(2)').selectChild();
let secondRect = d3.select('svg:nth-of-type(2)').selectChild(':nth-child(2)');

let firstChild = d3.selectAll('svg').selectChild();

let secondChild = d3.selectAll('svg').selectChild(':nth-of-type(2)');
// console.log(secondChild);

d3.select('svg').selectChild(function (c, i, cn) {
  console.log(c);
  console.log(i);
  console.log(cn);
});

d3.selectAll('svg').selectChild(function (c, i, cn) {
  console.log(c);
  console.log(i);
  console.log(cn);
});
