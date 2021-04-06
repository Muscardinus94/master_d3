let allCircles = d3.selectAll('circle');

let allCirclesOdd = allCircles.filter('.odd');
let allCirclesEven = allCircles.filter(':nth-child(even)');

console.log(allCirclesOdd);
