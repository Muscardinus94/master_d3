// selection.exit()

let allCircles = d3.selectAll('circle');

let dataArray = [15, 15, 15];

allCircles = allCircles.data(dataArray);

console.log(allCircles);

let exit = allCircles.exit();

exit.remove();

d3.selectAll('circle').attr('r', (d) => d);
