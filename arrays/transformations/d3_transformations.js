let data1 = [45, 35, 25];
let data2 = [
  { name: 'Jack', score: 40 },
  { name: 'Jill', score: 60 },
  { name: 'Jack', score: 20 },
];

// d3.group(iterable,...keys)
let groupOutput = d3.group(data1, (d) => d);
console.log(groupOutput);
groupOutput = d3.group(data2, (d) => d.name);
console.log(groupOutput);

// d3.groups(iterable,...keys)
let groupsOutput = d3.groups(data2, (d) => d.name);
console.log(groupsOutput);

// d3.index(iterable, ...keys);
let indexOutput = d3.index(data2, (d) => d.score);
console.log(indexOutput);
// indexOutput = d3.index(data2, (d) => d.name);
// console.log(indexOutput); throsw error, keys need to be unique

// d3.indexes(iterable, ...keys)
let indexesOutput = d3.indexes(data2, (d) => d.score);
console.log(indexesOutput);

// d3.rollup(iterable,reduce,...keys)
let rollupOutput = d3.rollup(
  data2,
  (v) => v.length,
  (d) => d.score
);

console.log(rollupOutput);

// d3.rollups(iterable, reduce, ...keys)
let rollupsOutput = d3.rollups(
  data2,
  (v) => v.length,
  (d) => d.score
);
console.log(rollupsOutput);

// d3.count(iterable, accessor(optional))
let countOutput = d3.count(data2, (d) => d.score);
console.log(countOutput);

// d3.cross(...iterable,reducer(optional))
let crossOutput = d3.cross([1, 2], [3, 4]);
console.log(crossOutput);
crossOutput = d3.cross([1, 2], [3, 4], (a, b) => a + b);
console.log(crossOutput);

// d3.merge(iterables)
let mergeOutput = d3.merge([[2, 3], [4]]);
console.log(mergeOutput);

// d3.pairs(iterable,reducer(optional))
let pairsOutput = d3.pairs([1, 2, 3, 4]);
console.log(pairsOutput);
pairsOutput = d3.pairs([1, 2, 3, 4], (a, b) => a + b);
console.log(pairsOutput);

// d3.permute(source,keys)
let permuteOutput = d3.permute(['a', 'b', 'c'], [1, 2, 0]);
console.log(permuteOutput);

// d3.shuffle(array, start(optional), stop(optional))
let shuffleOutput = d3.shuffle([2, 5, 8, 3]);
console.log(shuffleOutput);
shuffleOutput = d3.shuffle([2, 5, 8, 3], 1, 3);
console.log(shuffleOutput);

// d3.ticks(start,stop,count)
let ticksOutput = d3.ticks(1, 10, 4);
console.log(ticksOutput);

ticksOutput = d3.ticks(1.023, 10.54, 4);
console.log(ticksOutput);

// d3.tickStep(start,stop,count)
ticksOutput = d3.tickStep(1, 10, 4);
console.log(ticksOutput);

ticksOutput = d3.tickStep(1.023, 10.54, 4);
console.log(ticksOutput);

// d3.tickIncrement(start,stop,count)
let tickIncrementOutput = d3.tickIncrement(1, 10, 4);
console.log(tickIncrementOutput);
tickIncrementOutput = d3.tickIncrement(-9, 1, 4);
console.log(tickIncrementOutput);

// d3.nice(start,stop,count)
let niceOutput = d3.nice(1.023, 9.81, 4);
console.log(niceOutput);

// d3.range(start(optional),stop,step(optional))
let rangeOutput = d3.range(1, 8, 2);
console.log(rangeOutput);

// d3.zip(...arrays)
let zipOutput = d3.zip([1, 2, 3], [4, 5, 6]);
console.log(zipOutput);

// d3.transpose(matrix)
let transposeOutput = d3.transpose([[1, 2, 3]]);
console.log(transposeOutput);
transposeOutput = d3.transpose([
  [1, 2, 3],
  [4, 5, 6],
]);
console.log(transposeOutput);
