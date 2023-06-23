/* 
  Object.freeze 
  it freezes the object to prevent extensions and make it non-writable and non-configurable 
  this is good for static data
*/
export const FEATUREDBURGERS = Object.freeze([
  {
    "title": "Abundant Nutrition",
    "description": "Each bite serves you with the healthiest local ingredients.",
    "image": "images/burger-1.svg",
    "isFlip": false
  },
  {
    "title": "Higher Quality",
    "description": "We only use grass-fed, grass-finished beef.",
    "image": "images/hero-burger.svg",
    "isFlip": true
  },
  {
    "title": "Award Winning Flavors",
    "description": "Our burgers have gained internation recognition for most unique flavors.",
    "image": "images/burger-2.svg",
    "isFlip": false
  },
]);


export const BURGERLIST = Object.freeze([
  {
    "name": "Kyoto Kika",
    "price": "$25",
    "image": "images/burger-5.svg",
  },
  {
    "name": "The Bentenator",
    "price": "$18",
    "image": "images/hero-burger.svg",
  },
  {
    "name": "Flava Fons",
    "price": "$20",
    "image": "images/burger-2.svg",
  },
  {
    "name": "Stack of Stanchev",
    "price": "$34",
    "image": "images/burger-3.svg",
  },
  {
    "name": "Triple Tirado",
    "price": "$26",
    "image": "images/burger-4.svg",
  },
  {
    "name": "Raving Russo",
    "price": "$32",
    "image": "images/burger-5.svg",
  },
]);