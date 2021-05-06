document.querySelector('button').addEventListener('click', () => {
  const cement = +document.getElementById('cement').value;
  const blast = +document.getElementById('blast').value;
  const ash = +document.getElementById('ash').value;
  const age = +document.getElementById('age').value;

  const cementColor = d3
    .scaleDiverging()
    .domain([101, 662.5, 1425])
    .interpolator(d3.interpolateGreys);

  const domainValue = cement + blast + ash + age;

  if (
    cement < 100 ||
    cement > 500 ||
    blast < 0 ||
    blast > 360 ||
    ash < 0 ||
    ash > 200 ||
    age < 1 ||
    age > 365 ||
    domainValue == 0
  ) {
  } else {
    d3.select('svg rect').attr('fill', cementColor(domainValue));
    d3.select('svg text')
      .text(cementColor(domainValue))
      .attr('x', 10)
      .attr('y', 480);
  }
});
