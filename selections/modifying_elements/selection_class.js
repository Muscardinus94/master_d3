let line1 = d3.select('line').classed('gray');
console.log(line1);

let lines = d3.selectAll('line').classed('gray', true);
console.log(lines);

lines = d3.selectAll('line').classed('gray');
console.log(lines);

lines = d3.selectAll('line').classed('gray', false);
d3.selectAll('line').attr('class', null);

lines = d3.selectAll('line').classed('stroke-width stroke-opacity', true);

lines.classed('stroke-dasharray', function (d, i, n) {
  return i % 2 === 0 ? true : false;
});
