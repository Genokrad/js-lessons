var h1 = document.getElementById("header");
console.log(h1.innerHTML);

h1.addEventListener("click", function() {
  // h1.style.background = "red";
  this.style.background = "red";
})
h1.addEventListener("click", function() {
  this.style.color = "blue";
})

var liElements = document.querySelectorAll("li");

console.log(liElements);

// for(var i = 0; i < liElements.length; i++) {
//   liElements[i].addEventListener("click", function(){
//     this.style.color = "green";
//   });
// }

var changeColor = function(){
  this.style.color = "green";
};

for(var i = 0; i < liElements.length; i++) {
  liElements[i].addEventListener("click", changeColor)
}








