// Expression
// var animalVoice = function(animal, animalName) {
//   switch(animal) {
//         case "dog":
//           return animalName + " barks.";
//         case "cat":
//           return animalName + " miau!";
//         case "pig":
//           return animalName + " grunts.";
//         default:
//           return animalName + " makes some sounds."
//       }
// }
// console.log(animalVoice("cat", "Richard"));

// animalVoice = 19;

// console.log(animalVoice("cat", "Richard"));


// Statements
function animalVoice(animal, animalName) {
  switch(animal){
    case "dog":
      return animalName + " barks.";
    case "cat":
      return animalName + " miau!";
    case "pig":
      return animalName + " grunts.";
    default:
      return animalName + " makes some sounds."
  }
}

console.log(animalVoice("pig", "Richard"));

// animalVoice = 19;

// console.log(animalVoice);
