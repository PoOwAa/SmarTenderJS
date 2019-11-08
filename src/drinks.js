const drinks = {
  // rumCoke: {
  //   name: "Rum & Coke",
  //   ingredients: {
  //     rum: 50,
  //     coke: 150,
  //   },
  //   image: "https://cdn.liquor.com/wp-content/uploads/2015/10/19223251/b-20110420145340.jpg"
  // },
  ginTonic: {
    name: "Gin & Tonic",
    ingredients: {
      gin: 50,
      tonic: 150,
    },
    image: "https://www.bottegaspa.com/wp-content/uploads/2019/04/GinTonic-Bacur-LR.jpg"
  },
  longIsland: {
    name: "Long Island",
    ingredients: {
      gin: 20,
      rum: 20,
      vodka: 20,
      coke: 100,
      // oj: 30,
    },
    image: "https://m.blog.hu/ko/koktelreceptek/image/long-island-iced-tea.jpg"
  },
  screwDriver: {
    name: "Vodka Orange",
    ingredients: {
      vodka: 50,
      oj: 150,
    },
    image: "https://s3-eu-west-1.amazonaws.com/horizonlives3/PR139979/wp-content/uploads/2014/10/11173609/DRINK-GRID-whippedcream-orange.jpg",
  },
  ginJuice: {
    name: "Gin & Juice",
    ingredients: {
      gin: 50,
      oj: 150,
    },
    image: "https://tipsybartender.com/wp-content/uploads/2018/01/GinJuiceThumb.jpg",
  },
  eniko: {
    name: "Eniko's special (drink responsibly!)",
    ingredients: {
      gin: 50,
      vodka: 50,
      rum: 50,
      oj: 100
    },
    image: "https://imgs.tuts.dragoart.com/how-to-draw-poison-potion_1_000000021152_5.png",
  },
};

const drinkOptions = {
  gin: { name: "Gin", pipe: "PIPE_1" },
  rum: { name: "Rum", pipe: "PIPE_2" },
  vodka: { name: "Vodka", pipe: "PIPE_3" },
  oj: { name: "Orange Juice", pipe: "PIPE_4" },
  tonic: { name: "Tonic water", pipe: "PIPE_5" },
  coke: { name: "Coke", pipe: "PIPE_6" }
};

module.exports = {
  drinks,
  drinkOptions
};
