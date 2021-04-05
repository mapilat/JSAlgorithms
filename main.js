const {performance} = require('perf_hooks');
const addUpTo_slower = require('./S2-Big_O_Notation/add_up_to_slower');
const addUpTo_faster = require('./S2-Big_O_Notation/add_up_to_faster');

console.clear();

var t1 = performance.now();
addUpTo_slower(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

var t1 = performance.now();
addUpTo_faster(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)