// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelector();
// document.querySelectorAll();

// document.getElementById("Header").innerHTML = "New Value";

// var y = document.getElementsByClassName("firstThreeElements");
// console.log(y);
// console.log(y[1].innerHTML);

//  console.log(document.getElementsByTagName("li")[0].innerHTML);
// console.log(document.getElementsByTagName("body")[0]);


// console.log(document.querySelector("#Header").innerHTML);
// console.log(document.querySelector(".anatherElements").innerHTML); /*только первое совпадение */
// console.log(document.querySelectorAll("li")[0].innerHTML);

// console.log(document.getElementById("thirdEllement").innerHTML)
// console.log(document.getElementsByClassName("firstThreeElements")[2].innerHTML)
// console.log(document.getElementsByTagName("li")[2].innerHTML)
// console.log(document.querySelectorAll("li")[2].innerHTML)



// var h1 = document.getElementsByTagName("h1");
// console.log(h1[0].textContent);

// var li = document.getElementsByTagName("li");
// console.log(li[0].textContent);
// li[0].innerHTML = "The html elements as objects";
// console.log(li[0].textContent); /*(при выводе мы утеряли тег Стронг, их надо заново задавать при изменении контента таким путем. textContent не даст вывести текст с тегами и выведет теги в виде текста не задействовав их)*/

// var li3 = document.getElementById("thirdEllement");
// li3.style.color = "red";
// li3.style.fontSize = "190%";
// li3.style.backgroundColor = "Blue";

var image = document.getElementsByTagName("img");
image[0].getAttribute("src");
image[0].setAttribute("src", "img/image-2.jpg");

var link = document.getElementsByTagName("a");
link[0].getAttribute("href");
link[0].setAttribute("href", "https://softmag.com.ua/stekla-dlia-iphone-13");