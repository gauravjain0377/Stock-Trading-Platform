const holdings = require("../data/holdings");
const positions = require("../data/positions");
const { HoldingsModel } = require("./HoldingsSchema");
const { PositionsModel } = require("./PositionsSchema");

function main() {
  console.log("Seeding data...");
  addHoldings();
  console.log("Holdings added!");
  console.log("Seeding positions...");
  addPositons();
  console.log("Positions added!");
  console.log("Seeding completed!");
}

function addHoldings() {
  holdings.forEach((item) => {
    let newHolding = new HoldingsModel({
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.day,
      day: item.day,
    });

    newHolding.save();
  });
}

function addPositons() {
  positions.forEach((item) => {
    let newPosition = new PositionsModel({
      product: item.product,
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
      isLoss: item.isLoss,
    });

    newPosition.save();
  });
}