const h1SA = d3.selectAll('h1');
console.log(h1SA);

const h1S = d3.select('h1');
console.log(h1S);

let allCircles = d3.selectAll('circle');

let allRects = d3.selectAll('rect');

let allSvg = d3.selectAll('svg');

allCircles = allSvg.selectAll('circle');

let allCirclesSel = allSvg.select('circle');

for (let elem of allCirclesSel) console.log(elem);

allSvg.selectAll(function (d, i, n) {
  console.log(d);
  console.log(i);
  console.log(n);
});
