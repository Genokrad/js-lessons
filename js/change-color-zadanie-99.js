var button = document.querySelector("button");

// var isBackgrounApplied = false;

// button.addEventListener("click", function(){
//   if(isBackgrounApplied === false){
//     document.querySelector("body").style.background = "blue";
//     isBackgrounApplied = true;
//   } else {
//     document.querySelector("body").style.background = "white";
//     isBackgrounApplied = false;
//   }
// });

// var isBackgrounApplied = 0;

// button.addEventListener("click", function(){
//   if(isBackgrounApplied === 0){
//     document.querySelector("body").style.background = "blue";
//     isBackgrounApplied = 1;
//   } else {
//     document.querySelector("body").style.background = "white";
//     isBackgrounApplied = 0;
//   }
// });

button.addEventListener("click", function(){
  document.querySelector("body").classList.toggle("blue");
});  