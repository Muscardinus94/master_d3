// d3,scaleSequential()
let seqScale = d3.scaleSequential();

seqScale.domain([1, 10]);
// seqScale.range([11, 20]);
seqScale.interpolator(d3.interpolateRainbow);

seqScale.clamp();

seqScale.rangeRound();

let seqScale1 = seqScale.copy();

// d3.scaleSequentialLog()
// d3.scaleSequentialPow()
// d3.scaleSequentialQuantile()

seqScale.ticks();
seqScale.tickFormat();
