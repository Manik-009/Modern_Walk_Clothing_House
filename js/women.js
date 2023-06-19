//shopping cart
document
   .querySelector(".fa-shopping-cart")
   .addEventListener("click", shoppingCart);
function shoppingCart() {
   alert("Your cart is empty ! Add items to it now.");
}
//navigation-bar
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
//slider image1
var image1 = [
   "Images/women-sl5.jpg",
   "Images/women-sl4.jpg",
   "Images/women-sl1.jpg",
];
var a = 0;
document.image1.src = "Images/women-sl5.jpg";
function setImage() {
   document.image1.src = image1[a];
}
setInterval(function () {
   if (a < image1.length - 1) {
      a++;
   } else {
      a = 0;
   }
   setImage();
}, 10000);
//slider image2
var image2 = [
   "Images/women-sl7.jpg",
   "Images/women-sl6.jpeg",
   "Images/women-sl3.jpeg",
];
document.image2.src = "Images/women-sl7.jpg";
var b = 0;
function setImage1() {
   document.image2.src = image2[b];
}
setInterval(function () {
   if (b < image2.length - 1) {
      b++;
   } else {
      b = 0;
   }
   setImage1();
}, 10000);
//western-wear
document.querySelector("#www-h3").addEventListener("click", westernWear);
function westernWear() {
   if (document.querySelector("#top").style.display != "block") {
      document.querySelector(".western-wear").style.display = "flex";
      document.querySelector("#top").style.display = "block";
      document.querySelector("#dresses").style.display = "block";
      document.querySelector("#jeans").style.display = "block";
      document.querySelector("#shorts").style.display = "block";
      document.querySelector(".western-wear").style.animation =
         "afterclick 1s ease-in .01s";
      document.querySelector("#www-h3").innerHTML =
         "Women Western Wear &#9650;";
   } else {
      document.querySelector("#www-h3").innerHTML =
         "Women Western Wear &#9660;";
      document.querySelector(".western-wear").style.display = "block";
      document.querySelector("#top").style.display = "none";
      document.querySelector("#dresses").style.display = "none";
      document.querySelector("#jeans").style.display = "none";
      document.querySelector("#shorts").style.display = "none";
      document.querySelector(".western-wear").style.animation =
         "Elseafterclick .5s ease-in .01s";
   }
}
//sleep-wear
document.querySelector("#sleep-h3").addEventListener("click", sleepWear);
function sleepWear() {
   if (document.querySelector("#bras").style.display != "block") {
      document.querySelector(".sleep-wear").style.display = "flex";
      document.querySelector("#bras").style.display = "block";
      document.querySelector("#l-set").style.display = "block";
      document.querySelector("#nighty").style.display = "block";
      document.querySelector(".sleep-wear").style.animation =
         "afterclick 1s ease-in .01s";
      document.querySelector("#sleep-h3").innerHTML =
         "Lingerie & Sleepwears &#9650;";
   } else {
      document.querySelector("#sleep-h3").innerHTML =
         "Lingerie & Sleepwears  &#9660;";
      document.querySelector(".sleep-wear").style.display = "block";
      document.querySelector("#bras").style.display = "none";
      document.querySelector("#l-set").style.display = "none";
      document.querySelector("#nighty").style.display = "none";
      document.querySelector(".sleep-wear").style.animation =
         "Elseafterclick .5s ease-in .01s";
   }
}
//winter-wear
document.querySelector("#winter-h3").addEventListener("click", winterWear);
function winterWear() {
   if (document.querySelector("#sweater").style.display != "block") {
      document.querySelector(".winter-wear").style.display = "flex";
      document.querySelector("#sweater").style.display = "block";
      document.querySelector("#hoodie").style.display = "block";
      document.querySelector("#longcoat").style.display = "block";
      document.querySelector(".winter-wear").style.animation =
         "afterclick 1s ease-in .01s";
      document.querySelector("#winter-h3").innerHTML = "Winter Wear &#9650;";
   } else {
      document.querySelector("#winter-h3").innerHTML = "Winter Wear  &#9660;";
      document.querySelector(".winter-wear").style.display = "block";
      document.querySelector("#hoodie").style.display = "none";
      document.querySelector("#longcoat").style.display = "none";
      document.querySelector("#sweater").style.display = "none";
      document.querySelector(".winter-wear").style.animation =
         "Elseafterclick .5s ease-in .01s";
   }
}
//ethnic-wear
document.querySelector("#ethnic-h3").addEventListener("click", ethnicWear);
function ethnicWear() {
   if (document.querySelector("#saree").style.display != "block") {
      document.querySelector(".ethnic-wear").style.display = "flex";
      document.querySelector("#saree").style.display = "block";
      document.querySelector("#kurta").style.display = "block";
      document.querySelector("#lehnga").style.display = "block";
      document.querySelector("#gown").style.display = "block";
      document.querySelector(".ethnic-wear").style.animation =
         "afterclick 1s ease-in .01s";
      document.querySelector("#ethnic-h3").innerHTML =
         "Ethnic & Party Wears &#9650;";
   } else {
      document.querySelector("#ethnic-h3").innerHTML =
         "Ethnic & Party Wears &#9660;";
      document.querySelector(".ethnic-wear").style.display = "block";
      document.querySelector("#saree").style.display = "none";
      document.querySelector("#lehnga").style.display = "none";
      document.querySelector("#gown").style.display = "none";
      document.querySelector("#kurta").style.display = "none";
      document.querySelector(".ethnic-wear").style.animation =
         "Elseafterclick .5s ease-in .01s";
   }
}
//foot-wear
document.querySelector("#foot-h3").addEventListener("click", footWear);
function footWear() {
   if (document.querySelector("#heel").style.display != "block") {
      document.querySelector(".foot-wear").style.display = "flex";
      document.querySelector("#heel").style.display = "block";
      document.querySelector("#flats").style.display = "block";
      document.querySelector("#casual").style.display = "block";
      document.querySelector("#boots").style.display = "block";
      document.querySelector("#slippers").style.display = "block";
      document.querySelector(".foot-wear").style.animation =
         "afterclick 1s ease-in .01s";
      document.querySelector("#foot-h3").innerHTML = "Footwear &#9650;";
   } else {
      document.querySelector("#foot-h3").innerHTML = "Footwear &#9660;";
      document.querySelector(".foot-wear").style.display = "block";
      document.querySelector("#heel").style.display = "none";
      document.querySelector("#casual").style.display = "none";
      document.querySelector("#boots").style.display = "none";
      document.querySelector("#slippers").style.display = "none";
      document.querySelector("#flats").style.display = "none";
      document.querySelector(".foot-wear").style.animation =
         "Elseafterclick .5s ease-in .01s";
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
