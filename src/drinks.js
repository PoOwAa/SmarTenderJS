const drinks = {
  rumCoke: {
    name: "Rum & Coke",
    ingredients: {
      rum: 50,
      coke: 150
    }
  },
  ginTonic: {
    name: "Gin & Tonic",
    ingredients: {
      gin: 50,
      tonic: 150
    }
  },
  longIsland: {
    name: "Long Island",
    ingredients: {
      gin: 15,
      rum: 15,
      vodka: 15,
      tequila: 15,
      coke: 100,
      oj: 30
    }
  },
  screwDriver: {
    name: "Screwdriver",
    ingredients: {
      vodka: 50,
      oj: 150
    }
  },
  margarita: {
    name: "Margarita",
    ingredients: {
      tequila: 50,
      mmix: 150
    }
  },
  ginJuice: {
    name: "Gin & Juice",
    ingredients: {
      gin: 50,
      oj: 150
    }
  },
  tequilaSunrise: {
    name: "Tequilia Sunrise",
    ingredients: {
      tequila: 50,
      oj: 150
    }
  }
};

const drinkOptions = {
  gin: { name: "Gin", pipe: "PIPE_1" },
  rum: { name: "Rum", pipe: "PIPE_2" },
  vodka: { name: "Vodka", pipe: "PIPE_3" },
  tequila: { name: "Tequila", pipe: "PIPE_4" },
  tonic: { name: "Tonic water", pipe: "PIPE_5" },
  coke: { name: "Coke", pipe: "PIPE_6" },
  oj: { name: "Orange Juice", pipe: "PIPE_7" },
  mmix: { name: "Margarita Mix", pipe: "PIPE_8" }
};

module.exports = {
  drinks,
  drinkOptions
};
