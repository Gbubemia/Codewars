const duplicateEncode = word => {
 let isDuplicate = {};

 for (let i = 0; i < word.length; i++) {
  const letter = word[i].toLowerCase();

  if (letter in isDuplicate) {
   isDuplicate[letter] = true;
  }else {
   isDuplicate[letter] = false;
  }
 }

 let parenteces = '';
 for (let i = 0; i < word.length; i++) {
  const letter = word[i].toLowerCase();
  if(isDuplicate[letter]) {
   parenteces += ')';
  }else {
   parenteces += '(';
  }
 } 
 return parenteces;
}

console.log(duplicateEncode('din'),'(((');
console.log(duplicateEncode('recede'),'()()()');
console.log(duplicateEncode('Success'),')())())','should ignore case');
console.log(duplicateEncode('(( @'),'))((');