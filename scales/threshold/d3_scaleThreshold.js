// d3.scaleThreshold()

let thresholdScale = d3.scaleThreshold();

thresholdScale.domain([3, 7]);
thresholdScale.range([1, 5, 10]);

thresholdScale.domain(['F']);

// thresholdScale.invertExtent(5);
console.log(thresholdScale.invertExtent(5));
console.log(thresholdScale.invertExtent(1));

thresholdScale.domain([0.5]);
thresholdScale.range([0, 1]);
console.log(thresholdScale.invertExtent(0));
console.log(thresholdScale.invertExtent(1));

let thresholdScale1 = thresholdScale.copy();
