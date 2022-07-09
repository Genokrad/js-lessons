// Урок 68 Switch

var section = "html";

switch(section) {
  case "html" :
  case "html5" :
    console.log("Вы изучаете раздел 'HTML'");
    break;
  case "css" :
    console.log("Вы изучаете раздел 'css'");
    break;
  case "javascript" :
    console.log("Вы изучаете раздел 'JavaScript'");
    break;
  default :
    console.log("Вы изучаете какой-то раздел");
}

var age = 20;
var groupNumber;

if(age >= 18 && age <=25){
  groupNumber = 1;
} else if(age >= 25 && age <=46){
  groupNumber = 2;
} else { 
  groupNumber = 3;
}

console.log(groupNumber);

switch(true) {
  case age >= 18 && age <= 25 :
    groupNumber = 1;
    break;
  case age >= 25 && age <= 46 :
    groupNumber = 2;
    break;
  default :
    groupNumber = 3;  
}

console.log(groupNumber);



//Урок 67 ternary

var userName = "Jack";
var userWeight = 90;
/* 1 способ записи*/
if(userWeight > 90) {
  console.log(userName + " has redundand weight.");
} else {
  console.log(userName + " has normal weight.");
}
var weightDescription;
// ..........................................................................

/* 2 способ записи*/
userWeight > 90 ? console.log(userName + " has redundant weight.") : console.log(userName + " has normal weight.")

weightDescription = userWeight > 90 ? "redundant" : "normal"; /* строчка присваивает значение для weightDescription*/

/* 3 способ записи*/
console.log("has " + weightDescription + " weight.");

/* 4 способ записи*/
console.log(`has ${weightDescription} weight.`);

/* 5 способ записи*/
newFunction();

function newFunction() {
  console.log("has " + weightDescription + " weight.");
}



