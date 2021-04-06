let text1 = d3.select('text').text();

text1 = d3.select('text').text('Text 1');

text1.text(null);

let texts = d3.selectAll('text').text('D3 is Awesome');

texts.text(function (d, i, n) {
  return `This is a text on line${i + 1} with index at n[${i}]`;
});
