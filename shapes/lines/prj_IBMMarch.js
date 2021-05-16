d3.csv('./IBM_March_2020.csv', (d) => {
  return {
    date: new Date(d.Date),
    close: Number(d.Close),
  };
}).then((data) => {
  const SVG = d3.select('#chart svg');
  const BUFFER = 35;
  const ACTUAL_WIDTH =
    document.querySelector('#chart svg').clientWidth - BUFFER;
  const ACTUAL_HEIGHT =
    document.querySelector('#chart svg').clientHeight - BUFFER;

  let MAX_CLOSE = d3.max(data, (d) => d.close);
  const Y_AXIS_SCALE = d3
    .scaleLinear()
    .domain([MAX_CLOSE, MAX_CLOSE / 2])
    .range([BUFFER, ACTUAL_HEIGHT])
    .nice();
  const Y_AXIS = d3.axisLeft(Y_AXIS_SCALE).ticks(10, d3.format('$'));
  const Y_AXIS_G = SVG.append('g')
    .attr('id', 'yAxis')
    .attr('transform', `translate(${BUFFER}, 0)`);
  Y_AXIS(Y_AXIS_G);

  const X_AXIS_SCALE = d3
    .scaleTime()
    .domain([data[0].date, data[data.length - 1].date])
    .range([BUFFER, ACTUAL_WIDTH])
    .nice();
  const X_AXIS = d3.axisBottom(X_AXIS_SCALE).ticks(15, '%d %b');
  const X_AXIS_G = SVG.append('g')
    .attr('id', 'xAxis')
    .attr('transform', `translate(0,${ACTUAL_HEIGHT})`);
  X_AXIS(X_AXIS_G);

  SVG.append('g')
    .attr('id', 'lineChart')
    .selectAll('path')
    .data([data])
    .join('path')
    .attr(
      'd',
      d3
        .line()
        .x((d) => X_AXIS_SCALE(d.date))
        .y((d) => Y_AXIS_SCALE(d.close))
        .curve(d3.curveMonotoneX)
    )
    .style('fill', 'none')
    .style('stroke-width', 1.5)
    .style('stroke', 'cornflowerblue');

  const PATH_LENGTH = d3.select('#lineChart path').node().getTotalLength();
  d3.select('#lineChart path')
    .style('stroke-dashArray', PATH_LENGTH)
    .style('stroke-dashoffset', PATH_LENGTH)
    .transition()
    .duration(3000)
    .style('stroke-dashoffset', 0);

  SVG.append('g')
    .attr('id', 'lineChartDots')
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('cx', (d) => X_AXIS_SCALE(d.date))
    .attr('cy', (d) => Y_AXIS_SCALE(d.close))
    .style('fill', 'cornflowerblue');

  d3.select('#lineChartDots')
    .selectAll('circle')
    .each((d, i, n) => {
      d3.select(n[i])
        .transition()
        .delay(100 * (i + 1))
        .duration(1000)
        .attr('r', 3);
    });

  SVG.append('g')
    .attr('id', 'lineChartText')
    .selectAll('text')
    .data(data)
    .join('text')
    .attr('x', (d) => X_AXIS_SCALE(d.date))
    .attr('x', (d) => X_AXIS_SCALE(d.date))
    .attr('y', (d) => Y_AXIS_SCALE(d.close))
    .style('fill', (d, i) => {
      if (i === 0) return 'gray';
      if (data[i].close - data[i - 1].close > 0) return 'seagreen';
      else return 'tomato';
    })
    .style('text-anchor', 'start')
    .style('font-size', 9)
    .style('font-weight', 600);

  d3.select('#lineChartText')
    .selectAll('text')
    .each((d, i, n) => {
      d3.select(n[i])
        .transition()
        .delay(100 * (i + 1))
        .duration(1000)
        .text((d) => d3.format('.2f')(d.close));
    });
});
