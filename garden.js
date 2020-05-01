const firstNonRepeatingLetter = s => {
 if (!s) return '';

 const counts = Array.prototype.reduce.call(s, (counts, letter) => {
   letter = letter.toLowerCase();
   counts[letter] = counts[letter] || 0;
   counts[letter]++;
   return counts;
 }, {});
 return Array.prototype.find.call(s, (letter) => {
  return counts[letter.toLowerCase()] === 1;
 }) || '';
}

console.log(firstNonRepeatingLetter('a'), 'a');
console.log(firstNonRepeatingLetter('stress'), 't');
console.log(firstNonRepeatingLetter('sTreSS'), 'T');
console.log(firstNonRepeatingLetter('ssccBn'), 'B');