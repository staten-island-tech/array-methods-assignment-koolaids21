const foods = [
    {
      name: "pizza",
      flavor: "salty",
      utensils: "hands",
      nutreints: "fats",
    },
    {
      name: "spicy chicken sandwich",
      flavor: "spicy",
      utensils: "hands",
      nutreints: "protein",
    },
    {
      name: "rice",
      flavor: "non",
      utensils: "spoon",
      nutreints: "carbohydrate",
    },
    {
      name: "fries",
      flavor: "salty",
      utensils: "hands",
      nutrients: "potassium",
    },
  ];
  
  function printNames() {
    foods.forEach((food) => {
      console.log(food.name);
    });
  }
  
  function printProperties() {
    foods.forEach((food) => {
      console.log(food.flavor, food.utensils, food.nutrients);
    });
  }

  const result = foods.filter((food) => food.length > 6);
  console.log(results);
  
  console.log("food names");
  printNames();
  