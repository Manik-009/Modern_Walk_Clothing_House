document
   .querySelector(".fa-shopping-cart")
   .addEventListener("click", shoppingCart);
function shoppingCart() {
   alert("Your cart is empty ! Add items to it now.");
}
document.querySelector("#X").addEventListener("click", x);
function x() {
   if (document.querySelector("#X").textContent != "✖") {
      document.querySelector("#X").textContent = "✖";
      document.querySelector("#X").style.transform = "rotateZ(180deg)";
      document.querySelector("#X").style.transition = "transform 1s";
   } else {
      document.querySelector("#X").textContent = "\u2630";
      document.querySelector("#X").style.transform = "rotateZ(0deg)";
      document.querySelector("#X").style.transition = "transform 1s";
   }
}
// 1st  slider
var image1 = ["Images/man9.png", "Images/man13.png", "Images/man10.jpg"];
var a = 0;
document.image1.src = "Images/man9.png";
function setImage() {
   document.image1.src = image1[a];
}
setInterval(function autoSlide() {
   if (a < image1.length - 1) {
      a++;
   } else {
      a = 0;
   }
   setImage();
}, 10000);
// 2nd  slider
var image2 = ["Images/man15.jpg", "Images/man17.jpg", "Images/man12.jpeg"];
var b = 0;
document.image2.src = "Images/man15.jpg";
function setImage1() {
   document.image2.src = image2[b];
}
setInterval(function autoSlide() {
   if (b < image2.length - 1) {
      b++;
   } else {
      b = 0;
   }
   setImage1();
}, 10000);
//top-wear
document.querySelector("#top-h3").addEventListener("click", topWear);
function topWear() {
   if (document.querySelector("#casual-shirt").style.display != "block") {
      document.querySelector(".top-wear").style.display = "flex";
      document.querySelector("#tshirt").style.display = "block";
      document.querySelector("#formal-shirt").style.display = "block";
      document.querySelector("#casual-shirt").style.display = "block";
      document.querySelector(".top-wear").style.animation =
         "afterclick 1s ease-in .01s";
      document.querySelector("#top-h3").innerHTML = "top wear &#9650;";
   } else {
      document.querySelector("#top-h3").innerHTML = "top wear &#9660;";
      document.querySelector(".top-wear").style.display = "block";
      document.querySelector("#tshirt").style.display = "none";
      document.querySelector("#formal-shirt").style.display = "none";
      document.querySelector("#casual-shirt").style.display = "none";
      document.querySelector(".top-wear").style.animation =
         "Elseafterclick .5s ease-in .01s";
   }
}
//bottom wear
document.querySelector("#bott-h3").addEventListener("click", botWear);
function botWear() {
   if (document.querySelector("#jeans").style.display != "block") {
      document.querySelector(".bottom-wear").style.display = "flex";
      document.querySelector("#jeans").style.display = "block";
      document.querySelector("#trousers").style.display = "block";
      document.querySelector("#shorts").style.display = "block";
      document.querySelector(".bottom-wear").style.animation =
         "afterclick 1s ease-in .01s";
      document.querySelector("#bott-h3").innerHTML = "bottom wear &#9650;";
   } else {
      document.querySelector("#bott-h3").innerHTML = "bottom wear &#9660;";
      document.querySelector(".bottom-wear").style.display = "block";
      document.querySelector("#jeans").style.display = "none";
      document.querySelector("#trousers").style.display = "none";
      document.querySelector("#shorts").style.display = "none";
      document.querySelector(".bottom-wear").style.animation =
         "Elseafterclick .5s ease-in .01s";
   }
}
//winter wear
document.querySelector("#wint-h3").addEventListener("click", wintWear);
function wintWear() {
   if (document.querySelector("#hoodie").style.display != "block") {
      document.querySelector(".winter-wear").style.display = "flex";
      document.querySelector("#sweatshirt").style.display = "block";
      document.querySelector("#jackets").style.display = "block";
      document.querySelector("#hoodie").style.display = "block";
      document.querySelector(".winter-wear").style.animation =
         "afterclick 1s ease-in .01s";
      document.querySelector("#wint-h3").innerHTML = "winter wear &#9650;";
   } else {
      document.querySelector("#wint-h3").innerHTML = "winter wear &#9660;";
      document.querySelector(".winter-wear").style.display = "block";
      document.querySelector("#hoodie").style.display = "none";
      document.querySelector("#jackets").style.display = "none";
      document.querySelector("#sweatshirt").style.display = "none";
      document.querySelector(".winter-wear").style.animation =
         "Elseafterclick .5s ease-in .01s";
   }
}
//ethnic wear
document.querySelector("#eth-h3").addEventListener("click", ethWear);
function ethWear() {
   if (document.querySelector("#kurta").style.display != "block") {
      document.querySelector(".ethnic-wear").style.display = "flex";
      document.querySelector("#kurta").style.display = "block";
      document.querySelector("#sherwani").style.display = "block";
      document.querySelector("#ethnic-set").style.display = "block";
      document.querySelector(".ethnic-wear").style.animation =
         "afterclick 1s ease-in .01s";
      document.querySelector("#eth-h3").innerHTML = "ethnic wear &#9650;";
   } else {
      document.querySelector(".ethnic-wear").style.display = "block";
      document.querySelector("#kurta").style.display = "none";
      document.querySelector("#sherwani").style.display = "none";
      document.querySelector("#ethnic-set").style.display = "none";
      document.querySelector(".ethnic-wear").style.animation =
         "Elseafterclick 1s ease-in .01s";
      document.querySelector("#eth-h3").innerHTML = "ethnic wear &#9660;";
   }
}
// business wear
document.querySelector("#bus-h3").addEventListener("click", busWear);
function busWear() {
   if (document.querySelector("#suit").style.display != "block") {
      document.querySelector(".business-wear").style.display = "flex";
      document.querySelector("#suit").style.display = "block";
      document.querySelector("#blazer").style.display = "block";
      document.querySelector(".business-wear").style.animation =
         "afterclick 1s ease-in .01s";
      document.querySelector("#bus-h3").innerHTML = "business wear &#9650;";
   } else {
      document.querySelector(".business-wear").style.display = "block";
      document.querySelector("#suit").style.display = "none";
      document.querySelector("#blazer").style.display = "none";
      document.querySelector(".business-wear").style.animation =
         "Elseafterclick 1s ease-in .01s";
      document.querySelector("#bus-h3").innerHTML = "business wear &#9660;";
   }
}
//foot wear
document.querySelector("#foot-h3").addEventListener("click", footWear);
function footWear() {
   if (document.querySelector("#sport-shoe").style.display != "block") {
      document.querySelector(".footwear").style.display = "flex";
      document.querySelector("#sport-shoe").style.display = "block";
      document.querySelector("#casual-shoe").style.display = "block";
      document.querySelector("#formal-shoe").style.display = "block";
      document.querySelector("#flip-flop").style.display = "block";
      document.querySelector(".footwear").style.animation =
         "afterclick 1s ease-in .01s";
      document.querySelector("#foot-h3").innerHTML = "footwear &#9650;";
   } else {
      document.querySelector(".footwear").style.display = "block";
      document.querySelector("#sport-shoe").style.display = "none";
      document.querySelector("#casual-shoe").style.display = "none";
      document.querySelector("#formal-shoe").style.display = "none";
      document.querySelector("#flip-flop").style.display = "none";
      document.querySelector(".footwear").style.animation =
         "Elseafterclick 1s ease-in .01s";
      document.querySelector("#foot-h3").innerHTML = "footwear &#9660;";
   }
}
//footer
document.querySelector(".fa-phone-alt").addEventListener("mouseover", phone);
function phone() {
   document.querySelector(".fa-phone-alt").style.animation =
      "phone 10s ease-in .1s infinite alternate";
}
document.querySelector(".fa-phone-alt").addEventListener("mouseover", phone);
function phone() {
   document.querySelector(".fa-phone-alt").style.animation =
      "phone 10s ease-in .1s infinite alternate";
}
document.querySelector(".fa-envelope").addEventListener("mouseover", mail);
function mail() {
   document.querySelector(".fa-envelope").style.animation =
      "mail 10s ease-in .1s infinite alternate";
}
document.querySelector(".fa-map-marker-alt").addEventListener("mouseover", map);
function map() {
   document.querySelector(".fa-map-marker-alt").style.animation =
      "map 10s ease-in .1s infinite alternate";
}
//cart-image1
document.cart.src = "Images/come.png";
setTimeout(function () {
   document.querySelector("#go1").src = "Images/go.png";
   document.querySelector("#go1").style.animation = "cart-back 10s ease-in";
}, 10000);
//cart-image2
document.cart1.src = "Images/come.png";
setTimeout(function () {
   document.querySelector("#go2").src = "Images/go.png";
   document.querySelector("#go2").style.animation = "cart-back 10s ease-in";
}, 10000);
//cart-image3
document.cart2.src = "Images/come.png";
setTimeout(function () {
   document.querySelector("#go3").src = "Images/go.png";
   document.querySelector("#go3").style.animation = "cart-back 10s ease-in";
}, 10000);
