const item = "chips";
const price = 2.50;
const quantity = 40;

//console.log(typeof item);
//console.log(typeof price);

const total = price * quantity;

const message = `you bought ${quantity} ${item} for $ ${total}`
console.log(message);

const age = 18;

if (age < 21) {
  console.log("no drinks for you");
} else {
  console.log("PARTY!");
}

if (total > 20) {
  console.log("10% OFF!!!");
} else {
  console.log("5% off loser");
}