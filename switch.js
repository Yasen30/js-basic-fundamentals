var color = "skyBlue";

if (color == "blue") {
  console.log("color is blue");
} else if (color == "red") {
  console.log("color is red");
} else if (color == "white") {
  console.log("color is white");
} else if (color == "magenda") {
  console.log("color is magenda");
} else if (color == "pink") {
  console.log("color is pink");
} else if (color == "skyBlue") {
  console.log("color is skyblue");
} else {
  console.log("color is nothing");
}

switch (color) {
  case "blue":
    console.log("color is blue");
    break;
  case "red":
    console.log("color is red");
    break;
  case "yellow":
    console.log("color is yellow");
    break;
  case "white":
    console.log("color is white");
    break;
  case "magenta":
    console.log("color is magenta");
    break;
  case "grey":
    console.log("color is grey");
    break;
  case "pink":
    console.log("color is pink");
    break;
  case "skyBlue":
    console.log("color is skyblue");
    break;
  default:
    console.log("i do not know what is color");
}
