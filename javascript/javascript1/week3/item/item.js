const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';
console.log(names);
for(i=0; i<names.length; i++) {
    if ( names [i] === nameToRemove ) {
        names.splice(i, 1); 
      }
}
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']