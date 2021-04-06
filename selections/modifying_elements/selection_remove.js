// selection.remove()

let circle = d3.select('circle');

let circleRemoved = circle.remove();
console.log(circleRemoved);

let rectRemoved = d3.select('rect');
console.log(rectRemoved);

d3.select('svg').remove();
