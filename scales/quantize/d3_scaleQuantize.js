// d3.scaleQuantize()
let quantizeScale = d3.scaleQuantize();

quantizeScale.domain([1, 5]);
quantizeScale.range([10, 20, 30]);
quantizeScale.invertExtent();

// quantizeScale.thresholds
quantizeScale.thresholds();
quantizeScale.range([10,20,30,50]);

