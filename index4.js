// filter method
// const animals = [
//   {name: 'bingo', species: 'dog'},
//   {name: 'paul', species: 'fowl'},
//   {name: 'begho', species: 'dog'},
//   {name: 'fluffy', species: 'rabbit'},
//   {name: 'andrew', species: 'cat'},
// ];
// const isDog = animal => animal.species === 'dog';
// const dogs = animals.filter(isDog);
// console.log('Dogs are ', dogs);

// const isNotDog = animal => animal.species !== 'dog';
// const notDogs = animals.filter(isNotDog);
// console.log('Not dogs are ', notDogs);

// Map  Method
// const names = animals.map(animal => animal.name + ' is a ' + animal.species);
// console.log(names);
  
// reduce method 
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 41, 42];
// const sumOfEven = num.reduce((sum, item) => item % 2 === 0 ? sum + item : sum, 0)
// console.log(sumOfEven); // outputs 84

// const orders = [
//   { amount: 250 },
//   { amount: 400 },
//   { amount: 100 },
//   { amount: 325 },
// ]
// const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)
// console.log(totalAmount);
// var fs = require('fs');

// var output = fs.readFileSync('data.txt', 'utf8')
//   .trim()
//   .split('\n')
//   .map(item => item.split(' '))
//   .reduce((customers, [name, order, price, quantity]) => {
//     customers[name] = customers[name] || [];
//     customers[name].push({ order, price, quantity});
//     return customers;

    //   .reduce((customers, line) => {
//     customers[line[0]] = customers[line[0]] || [];
//     customers[line[0]].push({
//       name: line[1],
//       price: line[2],
//       quantity: line[3],
//     })
//     return customers;

// }, {});
// console.log('output', JSON.stringify(output, null, 2));

// const people = [
//   { name: 'Eseosa', age: 10 },
//   { name: 'Adaku', age: 10 },
//   { name: 'Andrew', age: 40 },
//   { name: 'Adaku', age: 30 },
//  ];
 
//  const groupBy = (objectArray, property) => {
//   return objectArray.reduce((acc, obj) => {
//    acc[obj[property]] = acc[obj[property]] || []; 
//    acc[obj[property]].push(obj);
//    return acc;
//   }, {})
//  };
 
//  console.log(JSON.stringify(groupBy(people, 'age'), null, 2));
 

// closures 