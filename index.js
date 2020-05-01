const printerError = ss => {
 let errors = 0;

 for (let i = 0; i < ss.length; i++) {
  const currentSs = ss[i];

  if (currentSs < 'a' || currentSs > 'm') {
   errors++;
  }
 }
 return `${errors}/${ss.length}`
}

const s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzbcde';
console.log(printerError(s), '3/56');