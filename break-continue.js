// var i = 0;
// while (i < 10) {
//   //   console.log(i);
//   if (i == 5) {
//     break;
//   }
//   i++;
// }
// for (var i = 0; i <= 10; i++) {
//   //   console.log(i);
//   if (i > 5) {
//     break;
//   }
// }
var numbers = [50, 74, 58, 85, 69, 101, 90, 85, 87];
for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  //   console.log(number);
  if (number > 80) {
    break;
  }
  console.log(number);
}

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  //   console.log(number);
  if (number > 80) {
    continue;
  }
  console.log(number);
}
