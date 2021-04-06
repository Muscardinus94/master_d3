let svg = d3.select('svg');
console.log(svg.style('background-color'));

svg.attr('width', '300');
svg.attr('height', '300');

svg.style('background-color', 'lightgray');

svg.style('background-color', null);

let ellipses = svg.selectChildren('ellipse');
console.log(ellipses);

ellipses.select(function (d, i, n) {
  const ellipse = d3.select(this);
  ellipse
    .attr('cx', `${i * 100 + 110}`)
    .attr('cy', `${i * 80 + 80}`)
    .attr('rx', `${i * 20 + 50}`)
    .attr('ry', `${i * 20 + 70}`);

  ellipse.style('fill', 'red');
});
