// d3.scaleTime()

let timeScale = d3.scaleTime();

//
let myDate = new Date();
console.log(myDate);

// Date(y,m,d,h,m,s,ms)

timeScale.domain([new Date(2000, 0, 1), new Date(2000, 0, 31)]);
timeScale.range([1, 31]);

// .invert()
console.log(timeScale.invert(26));

// .rangeRound()
// timeScale.rangeRound([1, 10]);

// .clamp()
timeScale.clamp(true);

// .interpolate()
let color = d3
  .scaleTime()
  .domain([new Date(2000, 0, 1), new Date(2000, 0, 31)])
  .range(['yellow', 'green'])
  .interpolate(d3.interpolateHcl);

// .ticks(count(optional))
timeScale.ticks();
console.log(timeScale.ticks(5));

// .ticks(interval)
timeScale.ticks(d3.timeDay.every(1));
console.log(timeScale.ticks(d3.timeDay.every(1)));

// .tickFormat(count, specifier(optional))
let xTicks = timeScale.ticks(10);
let xTickFormat = timeScale.tickFormat(10, '%b %d'); // %Y, %B, %b %d, %a %d, %I %p,%I:%M, %S, %L
xTicks.map(xTickFormat);
console.log(xTicks.map(xTickFormat));

// .tickFormat(interval, specifier(optional))
xTicks = timeScale.ticks(d3.timeDay.every(1));
xTickFormat = timeScale.tickFormat(d3.timeDay.every(1), '%b %d'); // %Y, %B, %b %d, %a %d, %I %p,%I:%M, %S, %L
xTicks.map(xTickFormat);
console.log(xTicks.map(xTickFormat));

// .nice(count(optional))

console.log(timeScale.nice(11).ticks());

// .copy()
let timeScale1 = timeScale.copy();
console.log(timeScale1(new Date(2000, 0, 20)));
