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


export const ANOTHERTEST = Object.freeze([
  {
    "name": "Kyoto Kika",
    "price": "USD 25",
    "image": "USD 25",
  }
]);