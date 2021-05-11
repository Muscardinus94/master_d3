// d3.difference(iterable, ...others)
let differenceOutput = d3.difference([0, 1, 2], [1], [0]);
console.log(differenceOutput);

// d3.union(...iterables)
let unionOutput = d3.union([1, 3, 5], [0, 2, 4, 1]);
console.log(unionOutput);

// d3.intersection(...iterables)
let intersectionOutput = d3.intersection([1, 3, 5], [0, 2, 4, 1]);
console.log(intersectionOutput);

// d3.superset(a,b)
let supersetOutput = d3.superset([0, 1, 2, 3], [1, 3]);
console.log(supersetOutput);
supersetOutput = d3.superset([0, 1, 2, 3], [5, 3]);
console.log(supersetOutput);

// d3.subset(a,b)
let subsetOutput = d3.subset([5, 6], [0, 1, 2, 3]);
console.log(subsetOutput);
subsetOutput = d3.subset([1, 2], [0, 1, 2, 3]);
console.log(subsetOutput);

// d3.disjoint(a,b)
let disjointOutput = d3.disjoint([1, 2], [0, 1, 2, 3]);
console.log(disjointOutput);
disjointOutput = d3.disjoint([5, 6], [0, 1, 2, 3]);
console.log(disjointOutput);
