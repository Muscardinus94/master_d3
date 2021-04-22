// selection.each(fn)

d3.select('svg').attr('width', '300').attr('height', '300');

let allRects = d3.select('svg').selectAll('rect');

console.log(allRects);

function updateBars(d, i, n) {
  const element = d3.select(n[i]);
  element.attr('x', 5 + 35 * i);
  element.attr('y', d);
  element.attr('width', 30);
  element.attr('height', d);
  element.style('fill', `rgb(${d * 2}, ${d * 3}, ${d * 4})`);
}

allRects = allRects.data([10, 20, 30]).join('rect').each(updateBars);

console.log(allRects);

allRects = allRects.data([30, 60, 90, 100]).join('rect').each(updateBars);

console.log(allRects);
