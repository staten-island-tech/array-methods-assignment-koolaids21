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
function filterSpicyFoods(isSpicy) {
  console.log(`${isSpicy ? 'spicy foods:' : 'nonspicy foods:'}`);
  foods
    .filter((food) => food.spicy === isSpicy)
    .forEach((food) => console.log(food.name));
}



function printNames() {
  foods.forEach((food) => {
    console.log(food.name);
  });
}

function printProperties() {
  foods.forEach((food) => {
    console.log(food.flavor,);
  });
}

function printPrice() {
  foods.forEach((food) => {
    console.log(food.price);
  });
}
function printUtensils() {
  foods.forEach((food) => {
    console.log(food.utensils);
  });
}




console.log("food names:");
printNames();

console.log("food flavors:");
printProperties();
console.log("food prices:");
printPrice();
console.log("food utensils:");
printUtensils();


filterSpicyFoods(true);
filterSpicyFoods(false);

