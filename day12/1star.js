// How many programs are in the group that contains program ID 0?

// 0 <-> 2
// 1 <-> 1
// 2 <-> 0, 3, 4
// 3 <-> 2, 4
// 4 <-> 2, 3, 6
// 5 <-> 6
// 6 <-> 4, 5

// in above case, 6. program 1 is not in the group of program id 0.

// Loop over values, check for 0. If 0 is present, grab those numbers and add to programID0 set/array/object.

// Loop over values again, checking for NEW values. If present grab all their subnumbers and add do programID0.

// Count programID0

// if (!programID0[i]) {
//  add this to array 
// }