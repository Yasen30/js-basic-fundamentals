var computer = {
  price: 40000,
  storage: "156gb",
  color: "black",
};
//console.log(computer);

var computerPrice = computer.price;
// console.log(computerPrice);

//different ways to set a value of an object property
var priceProperty = "price";
computer[priceProperty] = 21000;
//console.log("price property", computer.price);
computer.price = 20000;
computer["price"] = 23000;
//console.log(computer);

//different ways to set a value of an object property storage
// computer.storage = "1tb";
// computer["storage"] = "2tb";
// console.log(computer.storage);
var storageProperty = "storage";
computer[storageProperty] = "3tb";
console.log("stroage property", computer.storage);
