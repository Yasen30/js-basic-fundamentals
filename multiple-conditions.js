var getJob = true;
var moneySaved = 200000;
var hasFlat = true;
var hasHouse = true;

if (getJob == true && moneySaved > 500000) {
  console.log("will you marray me");
} else {
  console.log("biye korbo na");
}
if ((getJob == true && hasFlat == true) || moneySaved > 500000) {
  console.log("will you marray me");
} else {
  console.log("no i do not marray you");
}
if ((getJob == true && moneySaved > 100000) || hasHouse == true) {
  console.log("will you marray me");
} else {
  console.log("biye korbo na");
}
