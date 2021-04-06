let svg1 = d3.select('svg');

let svg1Width = svg1.attr('width');
console.log(svg1Width);
let svg1Height = svg1.attr('height');
console.log(svg1Height);
let svg1Class = svg1.attr('class');
console.log(svg1Class);

svg1.attr('class', 'svg1');

svg1.selectChildren().attr('class', 'myCircle');

svg1.selectChildren().attr('class', 'newCircle');

svg1.selectChildren().attr('class', 'myCircle');

let svg2 = d3.select('svg:nth-of-type(2)');
console.log(svg2);
let svg2Circles = svg2.selectAll('circle');
console.log(svg2Circles);
svg2Circles.attr('style', 'fill:peachpuff');
svg2Circles.attr('style', function (d, i, n) {
  return `fill:rgb(${
    Math.random() * 255
  },${Math.random() * 255},${Math.random() * 255})`;
});
