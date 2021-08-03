//add an element from an array
var lastBench = ["kalam", "balam", "jalam", "salam"];
// console.log(lastBench);
lastBench.push("palam");
lastBench.push("nalam");
// console.log(lastBench);

//add an element from an array
var ages = [11, 13, 15, 17, 18];
ages.push(20);
// console.log(ages);

//remove an element from an array
var friendAges = [11, 13, 15, 17, 18];
// console.log(friendAges);
var lastItem = friendAges.pop();
console.log("this is last item", lastItem);
friendAges.pop();
// friendAges.pop();
console.log(friendAges);
