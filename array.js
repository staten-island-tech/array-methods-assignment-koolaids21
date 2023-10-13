const foods = [
  {
    name: "pizza",
    flavor: "salty",
    price: "6.99",
    utensils: "hands",
    spicy: false,
  },
  {
    name: "spicy chicken sandwich",
    flavor: "spicy",
    price: "6.99",
    utensils: "hands",
    spicy: true,
  },
  {
    name: "rice",
    flavor: "spicy",
    price: "1.99",
    utensils: "fork",
    spicy: false,
  },
  {
    name: "fries",
    flavor: "salty",
    price: "2.99",
    utensils: "hands",
    spicy: false,
  },
];

function printNames() {
  foods.forEach((food) => {
    console.log(food.name);
  });
}

function printProperties() {
  foods.forEach((food) => {
    console.log(food.flavor, food.price, food.utensils);
  });
}




function spicything
 filter((spicy) => foods.spicy);


console.log("food names");
printNames();

console.log("food properties");
printProperties();

console.log("spicy or not");
spicything();
