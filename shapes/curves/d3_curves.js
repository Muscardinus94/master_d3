let data = [
  [0, 30],
  [40, 90],
  [140, 120],
  [250, 70],
];

let lineGen = d3.line().curve(d3.curveStep);
let linePathData = lineGen(data);

d3.select('#chart1')
  .selectAll('path')
  .data([linePathData])
  .join('path')
  .attr('d', (d) => d)
  .style('stroke', 'blue')
  .style('fill', 'none')
  .style('stroke-width', 2);

let areaGen = d3.area().curve(d3.curveStep);
let areaPathData = areaGen(data);

d3.select('#chart2')
  .selectAll('path')
  .data([areaPathData])
  .join('path')
  .attr('d', (d) => d)
  .style('fill', 'red');
