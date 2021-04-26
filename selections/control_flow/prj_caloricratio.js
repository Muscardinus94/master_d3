const dryFruitData = [
  {
    name: 'Almonds',
    carbs: 15,
    fats: 72,
    proteins: 13,
  },
  {
    name: 'Raisins',
    carbs: 96,
    fats: 1,
    proteins: 3,
  },
  {
    name: 'Cashews',
    carbs: 23,
    fats: 66,
    proteins: 11,
  },
  {
    name: 'Walnuts',
    carbs: 9,
    fats: 83,
    proteins: 8,
  },
  {
    name: 'Apricots',
    carbs: 93,
    fats: 2,
    proteins: 5,
  },
  {
    name: 'Pistachios',
    carbs: 20,
    fats: 67,
    proteins: 13,
  },
  {
    name: 'Figs',
    carbs: 94,
    fats: 3,
    proteins: 3,
  },
  {
    name: 'Dates',
    carbs: 98,
    fats: 0,
    proteins: 2,
  },
  {
    name: 'Prunes',
    carbs: 96,
    fats: 1,
    proteins: 3,
  },
  {
    name: 'Hazelnuts',
    carbs: 11,
    fats: 81,
    proteins: 8,
  },
];

const svgWidth = d3.select('#chart').node().clientWidth;
const svgHeight = d3.select('#chart').node().clientHeight;

let svg = d3.select('#chart');
svg.attr('viewBox', `0 ${-svgHeight} ${svgWidth} ${svgHeight}`);

let allGs = svg.selectAll('g').data(dryFruitData).join('g');

allGs.each((d, i, n) => {
  const gElement = d3.select(n[i]);
  function stack(element, split) {
    let height = 0;
    console.log(element);
    console.log(split);
    const bar = element
      .selectAll('rect')
      .data(split)
      .join('rect')
      .attr('width', svgWidth / 21)
      .attr('height', (d) => d * 5)
      .attr('x', svgWidth / 21 + i * ((2 * svgWidth) / 21))
      .attr('y', (d, i) => {
        height = height + split[i];
        return -height * 5;
      })
      .attr('rx', 10)
      .attr('ry', 10)
      .style('fill', (d, i) => {
        return i == 0 ? 'burlywood' : i == 1 ? 'sandybrown' : 'navajowhite';
      });

    element
      .append('text')
      .data([dryFruitData[i]])
      .join('text')
      .attr('x', svgWidth / 21 + i * ((2 * svgWidth) / 21) - 15)
      .attr('y', '-250')
      .style('writing-mode', 'tb')
      .style('text-anchor', 'middle')
      .text((d) => `${d.name} (${d.carbs}, ${d.fats}, ${d.proteins})`)
      .style('fill', 'lightgoldenrodyellow')
      .style('font-weight', 500);
  }

  gElement.call(stack, [d.carbs, d.fats, d.proteins]);
});
