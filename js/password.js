// console.log("dfgd");
var login = prompt ("Введите логин");
var parol = prompt ("Введите пароль");


switch(true) {
  case login === ("zeeper") && parol === "bernard" :
    alert("Добро пожаловать " + login);
    break;
  case login === "tanya" && parol === "vovk" :
    alert("Добро пожаловать " + login);
    break;
  case login === "admin" && parol === "admin" :
    alert("Вы можете редактировать сайт " + login);
    break;
  default :
    alert("Ваш пароль или логин неправильный");  
}






// switch(login) {
//   case "zeeper" :
//     console.log("logim correct " + login);
//     break;
//   case "Таня" :
//   case "таня" :
//     console.log("logim correct " + login);
//     break;
// }

// switch(parol) {
//   case "Bernard" :
//     alert("добро пожаловать " + login);
//     break;
//   case "Вовк" :
//   case "вовк" :
//     alert("добро пожаловать " + login);
//     break;
//   default:
//     alert("пароль или логин не верный!")
// }