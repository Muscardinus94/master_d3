// d3.pointer(event, target)

let svg = d3.select('svg');
svg.on('click', function (e) {
  console.log(d3.pointer(e));
});

let circle = d3.select('circle');

circle.on('click', function (e) {
  console.log(d3.pointer(e, 'svg'));
});
