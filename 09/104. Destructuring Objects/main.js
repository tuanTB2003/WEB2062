"use strict";

const retaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy ",
  categories: ["Italian", "Pizza", "Vegetarian", "Organic"],
  starterMenu: ['Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad'],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );
  },
};

retaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

retaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});

const { name, openingHours, categories } = retaurant;
console.log(name, openingHours, categories);

const {
  name: retaurantName,
  openingHours: hours,
  categories: tags,
} = retaurant;

// Default values
console.log(retaurantName, hours, tags);
const { menu = [], starterMenu: starter = [] } = retaurant;
console.log(menu, starter);

// Mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
