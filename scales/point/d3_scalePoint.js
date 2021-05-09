// d3.scalePoint()

let pointScale = d3.scalePoint();

console.log(pointScale.domain());
console.log(pointScale.range());

console.log(pointScale(0));
console.log(pointScale(1));
console.log(pointScale(2));
console.log(pointScale(-1));

pointScale.domain([0, 1]);
console.log(pointScale(0));
console.log(pointScale(1));
console.log(pointScale(2));
console.log(pointScale(-1));

console.log(pointScale.bandwidth());
console.log(pointScale.step());

pointScale.range([0, 2]);
console.log(pointScale(0));
console.log(pointScale(1));
console.log(pointScale(2));
console.log(pointScale(-1));

console.log(pointScale.bandwidth());
console.log(pointScale.step());

console.log(pointScale.padding());
pointScale.padding(0.1);
console.log(pointScale(0));
console.log(pointScale(1));
console.log(pointScale(2));
console.log(pointScale(-1));

console.log(pointScale.bandwidth());
console.log(pointScale.step());

console.log(pointScale.padding() * pointScale.step());
console.log(pointScale.padding() * pointScale.step() + pointScale.step());

console.log(
  pointScale.padding() * pointScale.step() +
    pointScale.step() +
    pointScale.padding() * pointScale.step()
);

console.log(pointScale.align());

// rangeRound() and copy() can be used
