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
var image1 = [
   "Images/kids-slider2.png",
   "Images/kids-slider8.jpg",
   "Images/kids-slider1.png",
   "Images/kids-slider7.jpg",
];
var a = 0;
document.image1.src = "Images/kids-slider2.png";
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
var image2 = [
   "Images/kids-slider12.jpg",
   "Images/kids-slider11.jpg",
   "Images/kids-slider10.jpg",
   "Images/kids-slider5.jpg",
];
var b = 0;
document.image2.src = "Images/kids-slider12.jpg";
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
//boys-wear
document.querySelector("#boys-h3").addEventListener("click", boysWear);
function boysWear() {
   if (document.querySelector("#tshirt").style.display != "block") {
      document.querySelector(".boys-wear").style.display = "flex";
      document.querySelector("#tshirt").style.display = "block";
      document.querySelector("#shirt").style.display = "block";
      document.querySelector("#ethnic").style.display = "block";
      document.querySelector("#shorts").style.display = "block";
      document.querySelector(".boys-wear").style.animation =
         "afterclick 1s ease-in .01s";
      document.querySelector("#boys-h3").innerHTML = "Boy's Clothing &#9650;";
   } else {
      document.querySelector("#boys-h3").innerHTML = "Boy's Clothing &#9660;";
      document.querySelector(".boys-wear").style.display = "block";
      document.querySelector("#tshirt").style.display = "none";
      document.querySelector("#shirt").style.display = "none";
      document.querySelector("#shorts").style.display = "none";
      document.querySelector("#ethnic").style.display = "none";
      document.querySelector(".boys-wear").style.animation =
         "Elseafterclick .5s ease-in .01s";
   }
}
//girls-wear
document.querySelector("#girls-h3").addEventListener("click", girlsWear);
function girlsWear() {
   if (document.querySelector("#tshirtg").style.display != "block") {
      document.querySelector(".girls-wear").style.display = "flex";
      document.querySelector("#tshirtg").style.display = "block";
      document.querySelector("#dresses").style.display = "block";
      document.querySelector("#skirts").style.display = "block";
      document.querySelector(".girls-wear").style.animation =
         "afterclick 1s ease-in .01s";
      document.querySelector("#girls-h3").innerHTML = "Girl's Clothing &#9650;";
   } else {
      document.querySelector("#girls-h3").innerHTML = "Girl's Clothing &#9660;";
      document.querySelector(".girls-wear").style.display = "block";
      document.querySelector("#tshirtg").style.display = "none";
      document.querySelector("#dresses").style.display = "none";
      document.querySelector("#skirts").style.display = "none";
      document.querySelector(".girls-wear").style.animation =
         "Elseafterclick .5s ease-in .01s";
   }
}
// //babyboy-wear
// document.querySelector("#babyb-h3").addEventListener("click", babybWear);
// function babybWear() {
//    if (document.querySelector("#tshirt-combo").style.display != "block") {
//       document.querySelector(".babyboys-wear").style.display = "flex";
//       document.querySelector("#tshirt-combo").style.display = "block";
//       document.querySelector("#bb-combo").style.display = "block";
//       document.querySelector(".babyboys-wear").style.animation =
//          "afterclick 1s ease-in .01s";
//       document.querySelector("#babyb-wear-h3").innerHTML =
//          "Baby Boy's Clothing &#9650;";
//    } else {
//       document.querySelector("#babyb-h3").innerHTML =
//          "Baby Boy's Clothing &#9660;";
//       document.querySelector(".babyboys-wear").style.display = "block";
//       document.querySelector("#tshirt-combo").style.display = "none";
//       document.querySelector("#bb-combo").style.display = "none";
//       document.querySelector(".babyboys-wear").style.animation =
//          "Elseafterclick .5s ease-in .01s";
//    }
// }
// //babygirl-wear
// document.querySelector("#babyg-h3").addEventListener("click", babygWear);
// function babygWear() {
//    if (document.querySelector("#gown").style.display != "block") {
//       document.querySelector(".babygirls-wear").style.display = "flex";
//       document.querySelector("#gown").style.display = "block";
//       document.querySelector("#bg-combo").style.display = "block";
//       document.querySelector(".babygirls-wear").style.animation =
//          "afterclick 1s ease-in .01s";
//       document.querySelector("#babyg-h3").innerHTML =
//          "Baby Girl's Clothing &#9650;";
//    } else {
//       document.querySelector("#babyg-h3").innerHTML =
//          "Baby Girl's Clothing &#9660;";
//       document.querySelector(".babygirls-wear").style.display = "block";
//       document.querySelector("#gown").style.display = "none";
//       document.querySelector("#bg-combo").style.display = "none";
//       document.querySelector(".babygirls-wear").style.animation =
//          "Elseafterclick .5s ease-in .01s";
//    }
// }
//winterboys-wear
document.querySelector("#winterb-h3").addEventListener("click", winterbWear);
function winterbWear() {
   if (document.querySelector("#hoodie-boy").style.display != "block") {
      document.querySelector(".boyswinter-wear").style.display = "flex";
      document.querySelector("#hoodie-boy").style.display = "block";
      document.querySelector("#jacket-boy").style.display = "block";
      document.querySelector("#sweater-boy").style.display = "block";
      document.querySelector(".boyswinter-wear").style.animation =
         "afterclick 1s ease-in .01s";
      document.querySelector("#winterb-h3").innerHTML =
         "Boy's Winter Wear &#9650;";
   } else {
      document.querySelector("#winterb-h3").innerHTML =
         "Boy's Winter Wear &#9660;";
      document.querySelector(".boyswinter-wear").style.display = "block";
      document.querySelector("#hoodie-boy").style.display = "none";
      document.querySelector("#jacket-boy").style.display = "none";
      document.querySelector("#sweater-boy").style.display = "none";
      document.querySelector(".boyswinter-wear").style.animation =
         "Elseafterclick .5s ease-in .01s";
   }
}
//wintergirls-wear
document.querySelector("#winterg-h3").addEventListener("click", wintergWear);
function wintergWear() {
   if (document.querySelector("#hoodie-girl").style.display != "block") {
      document.querySelector(".girlswinter-wear").style.display = "flex";
      document.querySelector("#hoodie-girl").style.display = "block";
      document.querySelector("#jacket-girl").style.display = "block";
      document.querySelector("#sweater-girl").style.display = "block";
      document.querySelector(".girlswinter-wear").style.animation =
         "afterclick 1s ease-in .01s";
      document.querySelector("#winterg-h3").innerHTML =
         "Girl's Winter Wear &#9650;";
   } else {
      document.querySelector("#winterg-h3").innerHTML =
         "Girl's Winter Wear &#9660;";
      document.querySelector(".girlswinter-wear").style.display = "block";
      document.querySelector("#hoodie-girl").style.display = "none";
      document.querySelector("#jacket-girl").style.display = "none";
      document.querySelector("#sweater-girl").style.display = "none";
      document.querySelector(".girlswinter-wear").style.animation =
         "Elseafterclick .5s ease-in .01s";
   }
}
//boysfoot-wear
document.querySelector("#footwearb-h3").addEventListener("click", footbWear);
function footbWear() {
   if (document.querySelector("#boys-shoes").style.display != "block") {
      document.querySelector(".boysfoot-wear").style.display = "flex";
      document.querySelector("#boys-shoes").style.display = "block";
      document.querySelector("#boys-sandals").style.display = "block";
      document.querySelector(".boysfoot-wear").style.animation =
         "afterclick 1s ease-in .01s";
      document.querySelector("#footwearb-h3").innerHTML =
         "Boy's Footwear &#9650;";
   } else {
      document.querySelector("#footwearb-h3").innerHTML =
         "Boy's Footwear &#9660;";
      document.querySelector(".boysfoot-wear").style.display = "block";
      document.querySelector("#boys-shoes").style.display = "none";
      document.querySelector("#boys-sandals").style.display = "none";
      document.querySelector(".boysfoot-wear").style.animation =
         "Elseafterclick .5s ease-in .01s";
   }
}
//girlsfoot-wear
document.querySelector("#footwearg-h3").addEventListener("click", footgWear);
function footgWear() {
   if (document.querySelector("#girls-shoes").style.display != "block") {
      document.querySelector(".girlsfoot-wear").style.display = "flex";
      document.querySelector("#girls-shoes").style.display = "block";
      document.querySelector("#girls-sandals").style.display = "block";
      document.querySelector(".girlsfoot-wear").style.animation =
         "afterclick 1s ease-in .01s";
      document.querySelector("#footwearg-h3").innerHTML =
         "Girl's Footwear &#9650;";
   } else {
      document.querySelector("#footwearg-h3").innerHTML =
         "Girl's Footwear &#9660;";
      document.querySelector(".girlsfoot-wear").style.display = "block";
      document.querySelector("#girls-shoes").style.display = "none";
      document.querySelector("#girls-sandals").style.display = "none";
      document.querySelector(".girlsfoot-wear").style.animation =
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
