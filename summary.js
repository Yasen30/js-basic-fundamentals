// variable
var skyColor = "white";
var names = "rafi";
console.log("variable", names);
//array
var mobiles = ["iphone", "symphony", "oppo", "xiaomi", "nokia"];
console.log("real array", mobiles);
if (mobiles.indexOf("nokia") != -1) {
  mobiles.pop();
}
console.log("when pop a array", mobiles);
if (mobiles.indexOf("lg") == -1) {
  mobiles.push("lg");
}
console.log("when push a array", mobiles);
mobiles[2] = "motorwalla";
console.log("added a something in array", mobiles);

//for loop
for (var i = 0; i < 10; i++) {
  console.log("for loop", i);
}

for (var i = 0; i < mobiles.length; i++) {
  var mobile = mobiles[i];
  console.log("for loop in array", mobile);
}

//while loop
var i = 0;
while (i < mobiles.length) {
  console.log("while loop", i);
  i++;
}
//object
var monitor = {
  name: "dell",
  price: 10000,
  color: "black",
};
console.log("object", monitor);
