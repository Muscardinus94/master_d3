// d3.pointers(event, target)

let svg = d3.select('svg');

svg.on('click', function (e) {
  console.log(d3.pointers(e));
});

let rect = d3.select('rect');

rect.on('click', function (e) {
  console.log(d3.pointers(e, 'svg'));
});
