const families =[
 { id: 'Irabor', parent: null },
 { id: 'Ehigiegba', parent: 'Irabor' },
 { id: 'Iyo-Osafoname', parent: 'Irabor' },
 { id: 'Okhoro', parent:  'Irabor'},
 { id: 'Rose', parent: 'Irabor' },
 { id: 'Festus', parent: 'Ehigiegba' },
 { id: 'Dickson', parent: 'Ehigiegba' },
 { id: 'Osaretin', parent: 'Iyo-Osafoname' },
 { id: 'Julie', parent: 'Iyo-Osafoname' },
 { id: 'Iye-Osahon', parent: 'Okhoro' },
 { id: 'Monday', parent: 'Okhoro' },
 { id: 'Paul', parent: 'Rose' },
 { id: 'Andrew', parent: 'Rose' },
];
const familyTree = (fams, parent) => {
  let node = {};
  fams.filter(f => f.parent === parent)
      .forEach(f => {
        node[f.id] = familyTree(fams, f.id);
      });
  return node;    
}
console.log(JSON.stringify(familyTree(families, null), null, 2));

// const categories = [
//  {id: 'animals', parent: null},
//  {id: 'mammals', parent: 'animals'},
//  {id: 'cats', parent: 'mammals'},
//  {id: 'dogs', parent:'mammals' },
//  {id: 'bingo', parent: 'dogs'},
//  {id: 'fredo', parent: 'dogs'},
//  {id: 'azen', parent: 'cats'},
//  {id: 'kitty', parent: 'cats'},
// ];

// const makeTree =(animalKinds, parent) => {
//  let node = {};
//  animalKinds.filter(c => c.parent === parent)
//  .forEach(c =>
//   node[c.id] = makeTree(animalKinds, c.id))
//   return node;
// }

// console.log(JSON.stringify(makeTree(categories, null), null, 2));
