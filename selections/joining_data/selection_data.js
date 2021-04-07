// selection.data(data, key)

const circleSvg1 = d3.selectAll('#svg1 circle');
// console.log(circleSvg1);

const radSvg1 = [10, 20, 30];

let cirSvg1Data = circleSvg1.data(radSvg1);

// cirSvg1Data.select(function (d, i, n) {
//   console.log(d);
//   console.log(i);
//   console.log(n);
//   console.log(this);
//   console.log(n[i]);
// });

cirSvg1Data.attr('r', (d) => d);

let circleSvg2 = d3.selectAll('#svg2 circle');
let cirSvg2Data = circleSvg2.data(radSvg1);

cirSvg2Data.attr('r', (d) => d);

const colors = ['red', 'green', 'blue'];

cirSvg2Data = cirSvg2Data.data(colors);
cirSvg2Data.style('fill', (d) => d);

let allCircles = d3.selectAll('svg').selectAll('circle');
console.log(allCircles);

const radSvg2 = [25, 35, 45];
allCircles.data(radSvg2).attr('r', (d) => d);
// allCircles = alLCircles.data(radSvg2);
// allCircles.attr('r', (d) => d);

circleSvg2.data(function (d, i, n) {
  console.log(d);
  console.log(i);
  console.log(n);
  return [20, 30, 40];
});

console.log(circleSvg2);
