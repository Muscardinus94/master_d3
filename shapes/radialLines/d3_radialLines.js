// d3.lineRadial()

let radialLine = d3.lineRadial();
console.log(radialLine);

let data1 = [
  [0, 50],
  [35, 100],
  [150, 110],
  [210, 170],
  [270, 90],
];

let radialPathData = radialLine(data1);
d3.select('svg')
  .append('g')
  .attr('id', 'chart1')
  .selectAll('path')
  .data([radialPathData])
  .join('path')
  .attr('d', (d) => d)
  .style('fill', 'none')
  .style('stroke', 'black');

let data2 = [
  [0, 50],
  [30, 100],
  [60, 150],
  [90, 80],
  [120, 40],
  [150, 110],
  [180, 70],
  [210, 170],
  [240, 120],
  [270, 170],
  [300, 150],
  [330, 200],
  [360, 50],
];

d3.select('svg')
  .append('g')
  .attr('id', 'chart2')
  .attr('transform', 'translate(200,200)')
  .selectAll('path')
  .data([data2])
  .join('path')
  .attr(
    'd',
    d3.lineRadial().angle((d, i, n) => d[0] * (Math.PI / 180))
    // .curve(d3.curveNatural)
    // .defined((d, i, n) => console.log(d, i, n))
    // .radius((d, i, n) => console.log(d, i, n))
  )
  .style('fill', 'none')
  .style('stroke', 'dodgerblue')
  .style('stroke-width', 2);

d3.select('#chart2').append('circle').attr('cx', 0).attr('cy', 0).attr('r', 5);
