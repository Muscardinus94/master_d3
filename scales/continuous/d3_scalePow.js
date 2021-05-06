// d3.scalePow = d3.scaleLinear()

let powerScale = d3.scalePow();
let linearScale = d3.scaleLinear();

// .exponent()
powerScale.exponent(2);

// .domain() and .range()
powerScale.domain([2, 4]).range([9, 10]);
linearScale.domain([2, 4]).range([9, 10]);

// .invert()
console.log(powerScale.invert(9));

// .rangeRound()
powerScale.rangeRound([11, 12]);

// .clamp()
console.log(powerScale.clamp());
powerScale.clamp(true);

// .unknown
powerScale.unknown('NO POWER');

// .interpolate(interpolate_variable)
let color = d3
  .scalePow()
  .exponent(1.5)
  .domain([10, 20, 30])
  .range(['pink', 'green', 'yellow'])
  .interpolate(d3.interpolateHcl);

let color1 = d3
  .scaleLinear()
  .domain([10, 20, 30])
  .range(['pink', 'green', 'yellow'])
  .interpolate(d3.interpolateHcl);

// .ticks(count(optional))
powerScale.ticks();
console.log(powerScale.ticks());

// .tickFormat(count, specifier(optional))
let xTicks = powerScale.ticks(5);
let xTickFormat = powerScale.tickFormat(5, '%');

xTicks.map(xTickFormat);
console.log(xTicks.map(xTickFormat));

// .nice()
let powerScale1 = d3.scalePow().domain([2.345, 4.163]).range([2, 5]);
powerScale1.nice();

console.log(powerScale1.ticks());

// .copy()
let powerScale2 = powerScale1.copy();

let radius = [4, 5, 6];
let radPower = d3.scalePow().exponent(2);

d3.select('svg')
  .attr('width', 300)
  .attr('height', 300)
  .selectAll('circle')
  .data(radius)
  .join('circle')
  .attr('cx', 150)
  .attr('cy', 150)
  .attr('r', (d) => radPower(d))
  .style('fill-opacity', '50%');
