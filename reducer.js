// const friends = [
//  {
//   name: 'Eseosa',
//   books: ['How not to die', 'Things fall apart', 'The gods are not to blame'],
//   age: 10
//  },
//  {
//   name: 'Ada',
//   books: ['Flying', 'Loving'],
//   age: 40
//  },
//  {
//   name: 'Andrew',
//   books: ['The lion and the jewel', 'Another way to live'],
//   age: 48
//  },
// ];
// const allBooks = friends.reduce((acc, currVal) => {
//  return [...acc, ...currVal.books];
// }, ['Begho']);
// console.log(allBooks);


// let myArray = ['1', '2', '1', '2', '3', '5', '5', '3', '4', '4', '4', '4'];
// let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// const myOrderedArray = myArray.reduce((acc, currVal) => {
//  if(acc.indexOf(currVal) === -1) {
//   acc.push(currVal);
//  }
//  return acc;
// }, [])
// console.log(myOrderedArray);

// const numbers = [-5, 6, 2, 0,];
// const doubledPositive = numbers.reduce((acc, currVal) => {
//  if(currVal > 0) {
//   const doubled = currVal * 2;
//   acc.push(doubled);
//  }
//  return acc;
// }, []);
// The above reduce method equals the following filter and map methods
// const doubledPositive = numbers.filter(number => number > 0).map(item => item * 2);
// console.log(doubledPositive);
