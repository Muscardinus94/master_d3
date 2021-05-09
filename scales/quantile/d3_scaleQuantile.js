// d3.scaleQuantile()

let quantileScale = d3.scaleQuantile();

quantileScale.domain([0, 100]);
quantileScale.range([3, 2, 1]);
console.log(quantileScale.quantiles());

quantileScale.domain([0, 25, 50, 75, 100]);
quantileScale.range(['fail', 'just pass', 'can do better', 'well done']);
console.log(quantileScale.quantiles());

quantileScale.invertExtent('just pass');
console.log(quantileScale.invertExtent('just pass'));

let quantileScale1 = quantileScale.copy();
