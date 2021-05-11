let data1 = [75, 50, 100, 25, 150];
let data2 = [
  { name: 'Jill', score: 40 },
  { name: 'Jane', score: 20 },
  { name: 'Jack', score: 50 },
];

// d3.min(iterable, accessorFn(optional))

let x = d3.min(data1);
let y = d3.min(data2, (d) => d.score);
console.log(y);

// d3.minIndex(iterable, accessorFn(optional))

x = d3.minIndex(data1);
console.log(x);
y = d3.minIndex(data2, (d) => d.score);
console.log(y);

// d3.max(iterable, accessorFn(optional))

x = d3.max(data1);
console.log(x);
y = d3.max(data2, (d) => d.score);
console.log(y);

// d3.maxIndex(iterable, accessorFn(optional))

x = d3.maxIndex(data1);
console.log(x);
y = d3.maxIndex(data2, (d) => d.score);
console.log(y);

// d3.extent(iterable, accessorFn(optional))
// min and max
x = d3.extent(data1);
console.log(x);
y = d3.extent(data2, (d) => d.score);
console.log(y);

// d3.sum(iterable, accessorFn(optional))
x = d3.sum(data1);
console.log(x);
y = d3.sum(data2, (d) => d.score);
console.log(y);

// d3.mean(iterable, accessorFn(optional))
x = d3.mean(data1);
console.log(x);
y = d3.mean(data2, (d) => d.score);
console.log(y);

// d3.median(iterable, accessorFn(optional))
// center point of given values
x = d3.median(data1);
console.log(x);
y = d3.median(data2, (d) => d.score);
console.log(y);

// d3.cumsum(iterable, accessorFn(optional))
// accumuluate sum
x = d3.cumsum(data1);
console.log(x);
y = d3.cumsum(data2, (d) => d.score);
console.log(y);

// d3.quantile(iterable, p(0-1),accessorFn(optional))
// iterable기준으로 일정 값
x = d3.quantile(data1, 0.25);
console.log(x);
y = d3.quantile(data2, 0.6, (d) => d.score);
console.log(y);

// d3.variance(iterable, accessorFn(optional))
// 분산
x = d3.variance(data1);
console.log(x);
y = d3.variance(data2, (d) => d.score);
console.log(y);

// d3.deviation(iterable, accessorFn(optional))
// 편차 (분산의 루트)
x = d3.deviation(data1);
console.log(x);
y = d3.deviation(data2, (d) => d.score);
console.log(y);

data1 = [75.56, 50.345, 100.023, 25.11, 150];
data2 = [
  { name: 'Jill', score: 40.784 },
  { name: 'Jane', score: 20.123 },
  { name: 'Jack', score: 50 },
];

// d3.fsum([values], accessorFn(optional))
// 정밀도
x = d3.fsum(data1);
console.log(x);
y = d3.fsum(data2, (d) => d.score);
console.log(y);
