let data1 = [75, 50, 100, 25, 150];
let data2 = [
  { name: 'Jill', score: 40 },
  { name: 'Jane', score: 20 },
  { name: 'Jack', score: 50 },
];

// d3.least(iterable, accessorFn(optional))
// d3.least(iterable, comparator(optional))

let a = d3.least(data1);
console.log(a);
let b = d3.least(data2, (obj) => obj.score);
console.log(b);
let c = d3.least(data2, (a, b) => a.score - b.score);
console.log(c);
let d = d3.least(data2, (a, b) => b.score - a.score);
console.log(d);

// d3.leastIndex(iterable, accessorFn(optional))
// d3.leastIndex(iterable, comparator(optional))

a = d3.leastIndex(data1);
console.log(a);
b = d3.leastIndex(data2, (obj) => obj.score);
console.log(b);
c = d3.leastIndex(data2, (a, b) => a.score - b.score);
console.log(c);
d = d3.leastIndex(data2, (a, b) => b.score - a.score);
console.log(d);

// d3.greatest(iterable, accessorFn(optional))
// d3.greatest(iterable, comparator(optional))

a = d3.greatest(data1);
console.log(a);
b = d3.greatest(data2, (obj) => obj.score);
console.log(b);
c = d3.greatest(data2, (a, b) => a.score - b.score);
console.log(c);
d = d3.greatest(data2, (a, b) => b.score - a.score);
console.log(d);

// d3.greatest(iterable, accessorFn(optional))
// d3.greatest(iterable, comparator(optional))

a = d3.greatestIndex(data1);
console.log(a);
b = d3.greatestIndex(data2, (obj) => obj.score);
console.log(b);
c = d3.greatestIndex(data2, (a, b) => a.score - b.score);
console.log(c);
d = d3.greatestIndex(data2, (a, b) => b.score - a.score);
console.log(d);

// sorted data for bisect methods
let data3 = [25, 50, 75, 100, 150];

// d3.bisectLeft(array,x, lo(optional), hi(optional))
// 위치 지정
a = d3.bisectLeft(data3, 120);
console.log(a);
a = d3.bisectLeft(data3, 60);
console.log(a);
a = d3.bisectLeft(data3, 60, 0, 3);
console.log(a);

// d3.bisectRight(array,x, lo(optional), hi(optional))
// 위치 지정
a = d3.bisectRight(data3, 100);
console.log(a);
a = d3.bisectRight(data3, 50);
console.log(a);
a = d3.bisectRight(data3, 25, 0, 3);
console.log(a);

// d3.bisectCenter(array,x, lo(optional), hi(optional))
// 가장 가까운
a = d3.bisectCenter(data3, 140);
console.log(a);
a = d3.bisectCenter(data3, 85);
console.log(a);
a = d3.bisectCenter(data3, 85, 0, 3);
console.log(a);

// sorted array of objects for bisector method
let data4 = [
  { name: 'Jane', score: 20 },
  { name: 'Jill', score: 40 },
  { name: 'Jack', score: 50 },
];

// d3.bisector(accessor)
// d3.bisector(comparator)

// bisector.left
let data4Bisector1 = d3.bisector((d) => d.score).left;
let bisectorIndex1 = data4Bisector1(data4, 30);
console.log(bisectorIndex1);

let data4Bisector2 = d3.bisector((a, x) => a.score - x).left;
let bisectorIndex2 = data4Bisector2(data4, 45);
console.log(bisectorIndex2);

// bisector.right
data4Bisector1 = d3.bisector((d) => d.score).right;
bisectorIndex1 = data4Bisector1(data4, 50);
console.log(bisectorIndex1);

data4Bisector2 = d3.bisector((a, x) => a.score - x).right;
bisectorIndex2 = data4Bisector2(data4, 60);
console.log(bisectorIndex2);

// bisector.center
data4Bisector1 = d3.bisector((d) => d.score).center;
bisectorIndex1 = data4Bisector1(data4, 50);
console.log(bisectorIndex1);

data4Bisector2 = d3.bisector((a, x) => a.score - x).center;
bisectorIndex2 = data4Bisector2(data4, 60);
console.log(bisectorIndex2);

// d3.ascending()
// comparator fn
a = d3.ascending(23, 42);
console.log(a);
a = d3.ascending(73, 42);
console.log(a);
a = d3.ascending(42, 42);
console.log(a);

// d3.descending()
// comparator fn
a = d3.descending(23, 42);
console.log(a);
a = d3.descending(73, 42);
console.log(a);
a = d3.descending(42, 42);
console.log(a);
