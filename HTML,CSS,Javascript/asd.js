// let results = [];
// let index = 0;

// function area(width, breadth) {
//   let area = width * breadth;
//   let result = {
//     width: width + "ft",
//     breadth: breadth + "ft",
//     area: area + "sqft",
//   };

//   results[index++] = result;
//   return result;
// }

// console.table(area(44, 2));
// console.table(area(22, 33));

// console.log(results);

// (function () {
//   console.log(";saldkj;l");
//   return "This is IIFE";
// })();

// let obj = {
//   name: "zlh",
//   run() {
//     return "This is run fun.";
//   },
// };

// console.log(obj);
// console.log(obj.run());

function getThis() {
  console.log("a;ld");
  return this;
}

console.log(getThis());

let obj1 = {
  age: 10,
};

let obj2 = obj1;

console.log(obj1.age, obj2.age);

obj1.age = 20;
console.log(obj1.age, obj2.age);

console.log(5e3);

let arr1 = [];
let arr2 = arr1;

console.log(arr1 === arr2);
