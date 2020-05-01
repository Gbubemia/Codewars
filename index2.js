const SeriesSum = n => {
 let sum = 0;
 let currentDenominator = 1;
 for (let i = 0; i < n; i++) {
  sum += 1 / currentDenominator;
  currentDenominator +=3;
 }
 return sum.toFixed(2)
}

console.log(SeriesSum(1), '1.00');
console.log(SeriesSum(2), '1.25');
console.log(SeriesSum(3), '1.39');
console.log(SeriesSum(4), '1.49');

var arr = [5, 4, 7, 2, 10, 1];
  const  res = array =>{
   const newArray = array.sort((a,b) => a - b).slice(0, 2)
   return newArray.reduce((acc, currVal) => acc + currVal);
  };
    console.log(res(arr));

//Printer Error (print a ratio if a letter is not in the range "a" to "m")

function printerError(s) {
 let correctString = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];
const st = s.split('')

 let numberOfErros = 0;
 for(let i = 0; i < s.length; i++){
   let letter = st[i].toLowerCase();
   if(correctString.indexOf(letter) === -1) {
    numberOfErros++;
   }
  }
   return numberOfErros + '/' + st.length;     
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));

//Simple, given a string of words, return the length of the shortest word(s):
const findShort = s => {
 const splitS = s.split(' ');
 let arrayOfShortest = [];
 for(let i = 0; i < splitS.length; i++){
  const element = splitS[i].length;
  arrayOfShortest.push(element);
 }
 return arrayOfShortest.sort((a, b) => a - b).slice(0, 1).reduce((a, c) => a + c);
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps") === 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);
///////////1A
function duplicateEncode(word){
 let duplicateLetter = {};
 let output = '';
 for(let i = 0; i < word.length; i++){
  let letter = word[i].toLowerCase();
  if(letter in duplicateLetter) {
   duplicateLetter[letter] = true;
  }else {
   duplicateLetter[letter] = false;
  }
 }
 for(let i = 0; i < word.length; i++){
  let letter = word[i].toLowerCase();
  if(duplicateLetter[letter]){
   output += ')';
  }else {
   output += '('
  }
 } 
  return output;
}
//1B:
const duplicateEncode = word => {
 return word.toLowerCase()
            .split('')
            .map((a, index, w) => {
              return w.indexOf(a) === w.lastIndexOf(a) ? '(' : ')';
            })
            .join('');
}
console.log(duplicateEncode("din") === "(((");
console.log(duplicateEncode("Success") === ")())())","should ignore case");


const isIsogram = word => {
 const counts = {};
 for(let i = 0; i < word.length; i ++){
  const letter = word[i].toLowerCase()
  if(!counts[letter]){
   counts[letter] = 1
  }else{
   counts[letter]++
  }
 }
 let pure = false;
 for(let letter in counts){
  const count = counts[letter]
  if(count > 1){
   pure = false;
  }else if(count === 1){
   pure = true
  }
 }
 console.log(counts);
 
   return pure;
}
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case:

const isIsogram = str =>{
str = str.toLowerCase();
for(let i = 0; i < str.length; i++){
  for(let j = i + 1; j < str.length; j++){
   if(str[i] === str[j]){
    return false
   }
  }
}
return true
}
const isIsogram = str => {
 let truth = true;
 str = str.toLowerCase();
 for(let i of 'abcdefghijklmnopqrstuvwxyz'.split('')){
  if(str.lastIndexOf(i) !== str.indexOf(i)){
   truth = false;
  }
 }
 return truth;
}
console.log(isIsogram("Dermatoglyphicsd"));
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("abcdefgh"));
console.log(isIsogram("moOse"));

// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3:

const findNb = m => {
 // create an endless loop that increments n, the cube number, starting with a value of 1  
 for ( let n = 0;;n++ ) {  
   if ( m > 0 ) {
     // if m, the total volume, is not 0, we will subtract the volume of the current cube from it     
     // first calculate the volume of the current cube
     let currCubeVol = Math.pow( n+1, 3);     
     // subtract the current cube volume from the total volume
     m = m - currCubeVol;
   } else if ( m == 0 ) {
     // if m is zero then we've found our n, so return n
     return n;
   } else if ( m < 0 ) {
     // if we've gone below zero there is no such n!
     return (-1);
   }
 }  
}
function findNb(m) {
 let n = 0;
 let sum = 0;
 while (sum < m) {
   n++;
   sum += Math.pow(n, 3);
 }
 return sum === m ? n : -1;
}
console.log(findNb(1071225), 45);
console.log(findNb(91716553919377), -1);


// Return 1 when ANY odd bit of x equals 1; 0 otherwise.x is unsigned.(Assume "0 index", aka the least ///significant bit is considered position 0)Assume x is 32 bits.
// Is There an Odd Bit?:
const anyOdd = x => {
 x = x.toString(2);
 for (let i = x.length - 2; i >= 0; i -= 2) {
   if (x[i] === '1') {
     return 1
   }
 }
 return 0
}
console.log(anyOdd(2863311530), 1);
console.log(anyOdd(128), 1);
console.log(anyOdd(1), 0);
console.log(anyOdd(1365), 0);

// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

const GetSum = (a, b) => {
 let firstNum = a < b ? a : b;
 let secondNum = a > b ? a : b;
let sum = 0;
 for(let i = firstNum; i <= secondNum; i++) {
  sum += i;
 }
 return sum;
}
console.log(GetSum(1, 0) == 1); // 1 + 0 = 1
console.log(GetSum(1, 2) == 3) // 1 + 2 = 3
console.log(GetSum(-1, 2) == 2); // -1 + 0 + 1 + 2 = 2