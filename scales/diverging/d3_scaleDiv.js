// d3.scaleDiverging()

let divScale = d3.scaleDiverging();

divScale.domain([10, 20, 30]).interpolator(d3.interpolateSpectral);

// d3.scaleDivergingLog()
// d3.scaleDivergingPow()
