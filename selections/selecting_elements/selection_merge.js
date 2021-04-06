let allSvg1 = d3.selectAll('#svg1 circle');
let allSvg2 = d3.selectAll('#svg2 circle');

let allSvgO = allSvg1.select(function (d, i, n) {
  // console.log(d);
  // console.log(i);
  // console.log(n);
  if (i % 2 === 0) {
    this.style.fill = 'indianred';
    return this;
  } else return null;
});

let allSvgE = allSvg1.select(function (d, i, n) {
  // console.log(d);
  // console.log(i);
  // console.log(n);
  if (i % 2 !== 0) {
    this.style.fill = 'indianred';
    return this;
  } else return null;
});

console.log(allSvgO);
console.log(allSvgE);

allSvgO.merge(allSvgE);
