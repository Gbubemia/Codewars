const findOutlier = numbers => {
 let evens = 0;
 let odds = 0;
 let lastEven, lastOdd;

 for (let i = 0; i < numbers.length; i++) {
  const currentNumber = numbers[i];

  if (currentNumber % 2 === 0) {
   evens++
   lastEven = currentNumber;
  }else {
   odds++;
   lastOdd = currentNumber;
  }
 }
 if (evens > 1 && odds === 1 ) {
  return lastOdd;
 }else if (odds > 1 && evens === 1) {
  return lastEven;
 }
}



console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2,6,8,10,3]), 3);
console.log(findOutlier([0,0,3,0,0]), 3);
console.log(findOutlier([1,1,0,1,1]), 0);