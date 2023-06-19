document.getElementById("acc").style.display = "none";
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
setInterval(function time1() {
   const main1 = new Date();
   const sec1 = main1.getSeconds();
   const min1 = main1.getMinutes();
   const hour1 = main1.getHours();
   const finSec1 = 60 - sec1;
   const finMin1 = 60 - min1;
   const finHour1 = 48 - hour1;
   document.querySelector("#time").textContent =
      "	\u23F1 " +
      finHour1 +
      "h " +
      finMin1 +
      "m " +
      finSec1 +
      "s " +
      "remaining";
   document.querySelector("#time").style.textAlign = "center";
   document.querySelector("#time").style.backgroundColor = "black";
   document.querySelector("#time").style.color = "white";
   document.querySelector("#time").style.fontWeight = "bold";
   document.querySelector("#time").style.fontSize = ".8em";
   document.querySelector("#time").style.padding = "7px 15px";
   document.querySelector("#time").style.borderRadius = "20px";
}, 500);
//First item
document.querySelector("#women").addEventListener("mouseover", color);
function color() {
   setTimeout(() => {
      document.querySelector("#women").style.height = "850px";
      document.querySelector("#images").style.display = "flex";
      document.querySelector("#clr").style.display = "block";
   }, 1000);
}
document.querySelector("#oos2").addEventListener("click", outOS2);
function outOS2() {
   alert("Out of Stock!");
}
var img1 = [
   "Images/spl.jpeg",
   "Images/spl-2.jpeg",
   "Images/spl-3.jpeg",
   "Images/spl-4.jpeg",
];
var a = 0;
function setImage() {
   document.img1.src = img1[a];
}
document.img1.src = "Images/spl.jpeg";
setInterval(() => {
   if (a < img1.length - 1) {
      a++;
   } else {
      a = 0;
   }
   setImage();
}, 10000);
document.querySelector("#leftBtn").addEventListener("click", left);
function left() {
   if (a > 0) {
      a--;
   } else {
      a = img1.length - 1;
   }
   setImage();
}
document.querySelector("#rightBtn").addEventListener("click", right);
function right() {
   if (a < img1.length - 1) {
      a++;
   } else {
      a = 0;
   }
   setImage();
}
document.querySelector("#black").addEventListener("mouseover", black);
function black() {
   document.img1.src = "Images/spl1-1-2.jpeg";
   document.querySelector("#clr").innerHTML = "Color : Black";
}
document.querySelector("#black").addEventListener("mouseout", black1);
function black1() {
   document.img1.src = "Images/spl.jpeg";
   document.querySelector("#clr").innerHTML = "Color : Blue";
}
document.querySelector("#maroon").addEventListener("mouseover", maroon);
function maroon() {
   document.img1.src = "Images/spl1-1-1.jpeg";
   document.querySelector("#clr").innerHTML = "Color : Maroon";
}
document.querySelector("#maroon").addEventListener("mouseout", maroon1);
function maroon1() {
   document.img1.src = "Images/spl.jpeg";
   document.querySelector("#clr").innerHTML = "Color : Blue";
}
document.querySelector("#blue").addEventListener("mouseover", blue);
function blue() {
   document.img1.src = "Images/spl.jpeg";
   document.querySelector("#clr").innerHTML = "Color : Blue";
}
document.querySelector("#cart").addEventListener("click", cart1);
function cart1() {
   alert("You're item has been added to cart!!!");
   document.querySelector("#cart").innerHTML = "&#128722; Go to cart";
}
document.querySelector("#buy").addEventListener("click", buy1);
function buy1() {
   const buy = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy <= 10) {
      document.querySelector("#total").textContent =
         "Total Price : " + "₹" + 699 * buy + "  only";
      document.querySelector("#total").style.textAlign = "center";
      document.querySelector("#total").style.fontWeight = "bold";
      document.querySelector("#total").style.backgroundColor = "black";
      document.querySelector("#total").style.color = "white";
      document.querySelector("#total").style.padding = "5px";
      document.querySelector("#total").style.animation =
         "anime 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Second item

document.querySelector("#women1").addEventListener("mouseover", color1);
function color1() {
   setTimeout(() => {
      document.querySelector("#women1").style.height = "850px";
      document.querySelector("#images1").style.display = "flex";
      document.querySelector("#clr1").style.display = "block";
   }, 1000);
}
var img2 = ["Images/spl7.jpeg", "Images/spl7-2.jpeg", "Images/spl7-3.jpeg"];
var b = 0;
function setImage1() {
   document.img2.src = img2[b];
}
document.img2.src = "Images/spl7.jpeg";
setInterval(() => {
   if (b < img2.length - 1) {
      b++;
   } else {
      b = 0;
   }
   setImage1();
}, 10000);
document.querySelector("#leftBtn1").addEventListener("click", left1);
function left1() {
   if (b > 0) {
      b--;
   } else {
      b = img2.length - 1;
   }
   setImage1();
}
document.querySelector("#rightBtn1").addEventListener("click", right1);
function right1() {
   if (b < img2.length - 1) {
      b++;
   } else {
      b = 0;
   }
   setImage1();
}
document.querySelector("#w1").addEventListener("mouseover", w1);
function w1() {
   document.img2.src = "Images/b4.jpeg";
   document.querySelector("#clr1").innerHTML = "Color : Multicolor 1";
}
document.querySelector("#w1").addEventListener("mouseout", w2);
function w2() {
   document.img2.src = "Images/spl7.jpeg";
   document.querySelector("#clr1").innerHTML = "Color : Multicolor 3";
}
document.querySelector("#w2").addEventListener("mouseover", w3);
function w3() {
   document.img2.src = "Images/b5.jpeg";
   document.querySelector("#clr1").innerHTML = "Color : Multicolor 2";
}
document.querySelector("#w2").addEventListener("mouseout", w4);
function w4() {
   document.img2.src = "Images/spl7.jpeg";
   document.querySelector("#clr1").innerHTML = "Color : Multicolor 3";
}
document.querySelector("#w3").addEventListener("mouseover", w5);
function w5() {
   document.img2.src = "Images/spl7.jpeg";
   document.querySelector("#clr1").innerHTML = "Color : Multicolor 3";
}
document.querySelector("#cart1").addEventListener("click", cart2);
function cart2() {
   alert("You're item has been added to cart!!!");
   document.querySelector("#cart1").innerHTML = "&#128722; Go to cart";
}
document.querySelector("#buy1").addEventListener("click", buy2);
function buy2() {
   const buy1 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy1 <= 10) {
      document.querySelector("#total1").textContent =
         "Total Price : " + "₹" + 899 * buy1 + "  only";
      document.querySelector("#total1").style.textAlign = "center";
      document.querySelector("#total1").style.fontWeight = "bold";
      document.querySelector("#total1").style.backgroundColor = "black";
      document.querySelector("#total1").style.color = "white";
      document.querySelector("#total1").style.padding = "5px";
      document.querySelector("#total1").style.animation =
         "anime 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Third item
var img3 = [
   "Images/spl18.png",
   "Images/spl18-2.png",
   "Images/spl18-3.png",
   "Images/spl18-4.png",
];
var c = 0;
function setImage2() {
   document.img3.src = img3[c];
}
document.img3.src = "Images/spl18.png";
setInterval(() => {
   if (c < img3.length - 1) {
      c++;
   } else {
      c = 0;
   }
   setImage2();
}, 10000);
document.querySelector("#leftBtn2").addEventListener("click", left2);
function left2() {
   if (c > 0) {
      c--;
   } else {
      c = img3.length - 1;
   }
   setImage2();
}
document.querySelector("#rightBtn2").addEventListener("click", right2);
function right2() {
   if (c < img3.length - 1) {
      c++;
   } else {
      c = 0;
   }
   setImage2();
}
document.querySelector("#women2").addEventListener("mouseover", height);
function height() {
   setTimeout(() => {
      document.querySelector("#women2").style.height = "850px";
   }, 1000);
}
document.querySelector("#cart2").addEventListener("click", cart3);
function cart3() {
   alert("You're item has been added to cart!!!");
   document.querySelector("#cart2").innerHTML = "&#128722; Go to cart";
}
document.querySelector("#buy2").addEventListener("click", buy3);
function buy3() {
   const buy2 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy2 <= 10) {
      document.querySelector("#total2").textContent =
         "Total Price : " + "₹" + 899 * buy2 + "  only";
      document.querySelector("#total2").style.textAlign = "center";
      document.querySelector("#total2").style.fontWeight = "bold";
      document.querySelector("#total2").style.backgroundColor = "black";
      document.querySelector("#total2").style.color = "white";
      document.querySelector("#total2").style.padding = "5px";
      document.querySelector("#total2").style.animation =
         "anime 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Fourth Item
var img4 = [
   "Images/spl17.png",
   "Images/spl17-2.png",
   "Images/spl17-3.png",
   "Images/spl17-4.png",
];
var d = 0;
function setImage3() {
   document.img4.src = img4[d];
}
document.img4.src = "Images/spl17.png";
setInterval(() => {
   if (d < img4.length - 1) {
      d++;
   } else {
      d = 0;
   }
   setImage3();
}, 10000);
document.querySelector("#leftBtn3").addEventListener("click", left3);
function left3() {
   if (d > 0) {
      d--;
   } else {
      d = img4.length - 1;
   }
   setImage3();
}
document.querySelector("#rightBtn3").addEventListener("click", right3);
function right3() {
   if (d < img4.length - 1) {
      d++;
   } else {
      d = 0;
   }
   setImage3();
}
document.querySelector("#cart3").addEventListener("click", cart4);
function cart4() {
   alert("You're item has been added to cart!!!");
   document.querySelector("#cart3").innerHTML = "&#128722; Go to cart";
}
document.querySelector("#buy3").addEventListener("click", buy4);
function buy4() {
   const buy3 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy3 <= 7) {
      document.querySelector("#total3").textContent =
         "Total Price : " + "₹" + 579 * buy3 + "  only";
      document.querySelector("#total3").style.textAlign = "center";
      document.querySelector("#total3").style.fontWeight = "bold";
      document.querySelector("#total3").style.backgroundColor = "black";
      document.querySelector("#total3").style.color = "white";
      document.querySelector("#total3").style.padding = "5px";
      document.querySelector("#total3").style.animation =
         "anime 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("Only 7 pieces left !!!");
   }
}
document.querySelector("#women3").addEventListener("mouseover", color2);
function color2() {
   setTimeout(() => {
      document.querySelector("#women3").style.height = "850px";
      document.querySelector("#images3").style.display = "flex";
      document.querySelector("#clr2").style.display = "block";
   }, 1000);
}
document.querySelector("#w4").addEventListener("mouseover", w6);
function w6() {
   document.img4.src = "Images/b6.png";
   document.querySelector("#clr2").innerHTML = "Color : Pink";
}
document.querySelector("#w4").addEventListener("mouseout", w7);
function w7() {
   document.img4.src = "Images/spl17.png";
   document.querySelector("#clr2").innerHTML = "Color : Black";
}
document.querySelector("#w5").addEventListener("mouseover", w8);
function w8() {
   document.img4.src = "Images/b7.png";
   document.querySelector("#clr2").innerHTML = "Color : Grey";
}
document.querySelector("#w5").addEventListener("mouseout", w9);
function w9() {
   document.img4.src = "Images/spl17.png";
   document.querySelector("#clr2").innerHTML = "Color : Black";
}
document.querySelector("#w6").addEventListener("mouseover", w10);
function w10() {
   document.img4.src = "Images/b8.png";
   document.querySelector("#clr2").innerHTML = "Color : Maroon";
}
document.querySelector("#w6").addEventListener("mouseout", w11);
function w11() {
   document.img4.src = "Images/spl17.png";
   document.querySelector("#clr2").innerHTML = "Color : Black";
}
document.querySelector("#w7").addEventListener("mouseover", w12);
function w12() {
   document.img4.src = "Images/spl17.png";
   document.querySelector("#clr2").innerHTML = "Color : Black";
}
//Fifth item
var img5 = [
   "Images/spl4.jpeg",
   "Images/spl4-2.jpeg",
   "Images/spl4-3.jpeg",
   "Images/spl4-4.jpeg",
];
var e = 0;
function setImage4() {
   document.img5.src = img5[e];
}
document.img5.src = "Images/spl4.jpeg";
setInterval(() => {
   if (e < img5.length - 1) {
      e++;
   } else {
      e = 0;
   }
   setImage4();
}, 10000);
document.querySelector("#leftBtn4").addEventListener("click", left4);
function left4() {
   if (e > 0) {
      e--;
   } else {
      e = img5.length - 1;
   }
   setImage4();
}
document.querySelector("#rightBtn4").addEventListener("click", right4);
function right4() {
   if (e < img5.length - 1) {
      e++;
   } else {
      e = 0;
   }
   setImage4();
}
document.querySelector("#women4").addEventListener("mouseover", color3);
function color3() {
   setTimeout(() => {
      document.querySelector("#women4").style.height = "850px";
      document.querySelector("#images4").style.display = "flex";
      document.querySelector("#clr3").style.display = "block";
   }, 1000);
}
document.querySelector("#cart4").addEventListener("click", cart5);
function cart5() {
   alert("You're item has been added to cart!!!");
   document.querySelector("#cart4").innerHTML = "&#128722; Go to cart";
}
document.querySelector("#buy4").addEventListener("click", buy5);
function buy5() {
   const buy4 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy4 <= 10) {
      document.querySelector("#total4").textContent =
         "Total Price : " + "₹" + 284 * buy4 + "  only";
      document.querySelector("#total4").style.textAlign = "center";
      document.querySelector("#total4").style.fontWeight = "bold";
      document.querySelector("#total4").style.backgroundColor = "black";
      document.querySelector("#total4").style.color = "white";
      document.querySelector("#total4").style.padding = "5px";
      document.querySelector("#total4").style.animation =
         "anime 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
document.querySelector("#w8").addEventListener("mouseover", w13);
function w13() {
   document.img5.src = "Images/b9.jpeg";
   document.querySelector("#clr3").innerHTML = "Color : Black";
}
document.querySelector("#w8").addEventListener("mouseout", w14);
function w14() {
   document.img5.src = "Images/spl4.jpeg";
   document.querySelector("#clr3").innerHTML = "Color : Pink";
}
document.querySelector("#w9").addEventListener("mouseover", w15);
function w15() {
   document.img5.src = "Images/spl4.jpeg";
   document.querySelector("#clr3").innerHTML = "Color : Pink";
}
// Sixth item
document.querySelector("#women5").addEventListener("mouseover", color4);
function color4() {
   setTimeout(() => {
      document.querySelector("#women5").style.height = "850px";
      document.querySelector("#images5").style.display = "flex";
      document.querySelector("#clr4").style.display = "block";
   }, 1000);
}
var img6 = [
   "Images/spl10.jpeg",
   "Images/spl10-2.jpeg",
   "Images/spl10-3.jpeg",
   "Images/spl10-4.jpeg",
];
var f = 0;
function setImage5() {
   document.img6.src = img6[f];
}
document.img6.src = "Images/spl10.jpeg";
setInterval(() => {
   if (f < img6.length - 1) {
      f++;
   } else {
      f = 0;
   }
   setImage5();
}, 10000);
document.querySelector("#leftBtn5").addEventListener("click", left5);
function left5() {
   if (f > 0) {
      f--;
   } else {
      f = img6.length - 1;
   }
   setImage5();
}
document.querySelector("#rightBtn5").addEventListener("click", right5);
function right5() {
   if (f < img6.length - 1) {
      f++;
   } else {
      f = 0;
   }
   setImage5();
}
document.querySelector("#cart5").addEventListener("click", cart6);
function cart6() {
   alert("You're item has been added to cart!!!");
   document.querySelector("#cart5").innerHTML = "&#128722; Go to cart";
}
document.querySelector("#buy5").addEventListener("click", buy6);
function buy6() {
   const buy5 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy5 <= 5) {
      document.querySelector("#total5").textContent =
         "Total Price : " + "₹" + 494 * buy5 + "  only";
      document.querySelector("#total5").style.textAlign = "center";
      document.querySelector("#total5").style.fontWeight = "bold";
      document.querySelector("#total5").style.backgroundColor = "black";
      document.querySelector("#total5").style.color = "white";
      document.querySelector("#total5").style.padding = "5px";
      document.querySelector("#total5").style.animation =
         "anime 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("Only 5 pieces left !!!");
   }
}
document.querySelector("#op").addEventListener("mouseover", op);
function op() {
   document.img6.src = "Images/b12.jpeg";
   document.querySelector("#clr4").innerHTML = "Color : Multicolor 1";
}
document.querySelector("#op").addEventListener("mouseout", op1);
function op1() {
   document.img6.src = "Images/spl10.jpeg";
   document.querySelector("#clr4").innerHTML = "Color : Multicolor 3";
}
document.querySelector("#op1").addEventListener("mouseover", op2);
function op2() {
   document.img6.src = "Images/b11.jpeg";
   document.querySelector("#clr4").innerHTML = "Color : Multicolor 2";
}
document.querySelector("#op1").addEventListener("mouseout", op3);
function op3() {
   document.img6.src = "Images/spl10.jpeg";
   document.querySelector("#clr4").innerHTML = "Color : Multicolor 3";
}
document.querySelector("#op2").addEventListener("mouseover", op4);
function op4() {
   document.img6.src = "Images/spl10.jpeg";
   document.querySelector("#clr4").innerHTML = "Color : Multicolor 3";
}
document.querySelector("#op3").addEventListener("mouseover", op5);
function op5() {
   document.img6.src = "Images/b10.jpeg";
   document.querySelector("#clr4").innerHTML = "Color : Multicolor 4";
}
document.querySelector("#op3").addEventListener("mouseout", op6);
function op6() {
   document.img6.src = "Images/spl10.jpeg";
   document.querySelector("#clr4").innerHTML = "Color : Multicolor 3";
}
//Seventh item
document.querySelector("#women6").addEventListener("mouseover", color5);
function color5() {
   setTimeout(() => {
      document.querySelector("#women6").style.height = "850px";
      document.querySelector("#images6").style.display = "flex";
      document.querySelector("#clr5").style.display = "block";
   }, 1000);
}
var img7 = [
   "Images/spl12.jpeg",
   "Images/spl12-2.jpeg",
   "Images/spl12-3.jpeg",
   "Images/spl12-4.jpeg",
];
var g = 0;
function setImage6() {
   document.img7.src = img7[g];
}
document.img7.src = "Images/spl12.jpeg";
setInterval(() => {
   if (g < img7.length - 1) {
      g++;
   } else {
      g = 0;
   }
   setImage6();
}, 10000);
document.querySelector("#leftBtn6").addEventListener("click", left6);
function left6() {
   if (g > 0) {
      g--;
   } else {
      g = img7.length - 1;
   }
   setImage6();
}
document.querySelector("#rightBtn6").addEventListener("click", right6);
function right6() {
   if (g < img7.length - 1) {
      g++;
   } else {
      g = 0;
   }
   setImage6();
}
document.querySelector("#ns").addEventListener("mouseover", ns);
function ns() {
   document.img7.src = "Images/b13.jpeg";
   document.querySelector("#clr5").innerHTML = "Color : Black";
}
document.querySelector("#ns").addEventListener("mouseout", ns1);
function ns1() {
   document.img7.src = "Images/spl12.jpeg";
   document.querySelector("#clr5").innerHTML = "Color : Red";
}
document.querySelector("#ns1").addEventListener("mouseover", ns2);
function ns2() {
   document.img7.src = "Images/spl12.jpeg";
   document.querySelector("#clr5").innerHTML = "Color : Red";
}
document.querySelector("#cart6").addEventListener("click", cart7);
function cart7() {
   alert("You're item has been added to cart!!!");
   document.querySelector("#cart6").innerHTML = "&#128722; Go to cart";
}
document.querySelector("#buy6").addEventListener("click", buy7);
function buy7() {
   const buy6 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy6 <= 10) {
      document.querySelector("#total6").textContent =
         "Total Price : " + "₹" + 999 * buy6 + "  only";
      document.querySelector("#total6").style.textAlign = "center";
      document.querySelector("#total6").style.fontWeight = "bold";
      document.querySelector("#total6").style.backgroundColor = "black";
      document.querySelector("#total6").style.color = "white";
      document.querySelector("#total6").style.padding = "5px";
      document.querySelector("#total6").style.animation =
         "anime 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Eighth item
document.querySelector("#women7").addEventListener("mouseover", color6);
function color6() {
   setTimeout(() => {
      document.querySelector("#women7").style.height = "850px";
      document.querySelector("#images7").style.display = "flex";
      document.querySelector("#clr6").style.display = "block";
   }, 1000);
}
var img8 = [
   "Images/spl11.jpeg",
   "Images/spl11-2.jpeg",
   "Images/spl11-3.jpeg",
   "Images/spl11-4.jpeg",
];
var h = 0;
function setImage7() {
   document.img8.src = img8[h];
}
document.img8.src = "Images/spl11.jpeg";
setInterval(() => {
   if (h < img8.length - 1) {
      h++;
   } else {
      h = 0;
   }
   setImage7();
}, 10000);
document.querySelector("#leftBtn7").addEventListener("click", left7);
function left7() {
   if (h > 0) {
      h--;
   } else {
      h = img8.length - 1;
   }
   setImage7();
}
document.querySelector("#rightBtn7").addEventListener("click", right7);
function right7() {
   if (h < img8.length - 1) {
      h++;
   } else {
      h = 0;
   }
   setImage7();
}
document.querySelector("#cart7").addEventListener("click", cart8);
function cart8() {
   alert("You're item has been added to cart!!!");
   document.querySelector("#cart7").innerHTML = "&#128722; Go to cart";
}
document.querySelector("#buy7").addEventListener("click", buy8);
function buy8() {
   const buy7 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy7 <= 10) {
      document.querySelector("#total7").textContent =
         "Total Price : " + "₹" + 799 * buy7 + "  only";
      document.querySelector("#total7").style.textAlign = "center";
      document.querySelector("#total7").style.fontWeight = "bold";
      document.querySelector("#total7").style.backgroundColor = "black";
      document.querySelector("#total7").style.color = "white";
      document.querySelector("#total7").style.padding = "5px";
      document.querySelector("#total7").style.animation =
         "anime 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
document.querySelector("#out").addEventListener("click", disable);
function disable() {
   alert("Out of Stock");
}
document.querySelector("#ns2").addEventListener("mouseover", ns3);
function ns3() {
   document.img8.src = "Images/b15.jpeg";
   document.querySelector("#clr6").innerHTML = "Color : Light Green";
}
document.querySelector("#ns2").addEventListener("mouseout", ns4);
function ns4() {
   document.img8.src = "Images/spl11.jpeg";
   document.querySelector("#clr6").innerHTML = "Color : Navy Blue";
}
document.querySelector("#ns3").addEventListener("mouseover", ns5);
function ns5() {
   document.img8.src = "Images/b14.jpeg";
   document.querySelector("#clr6").innerHTML = "Color : Baby Pink";
}
document.querySelector("#ns3").addEventListener("mouseout", ns6);
function ns6() {
   document.img8.src = "Images/spl11.jpeg";
   document.querySelector("#clr6").innerHTML = "Color : Navy Blue";
}
document.querySelector("#ns5").addEventListener("mouseover", ns7);
function ns7() {
   document.img8.src = "Images/b16.jpeg";
   document.querySelector("#clr6").innerHTML = "Color : Black";
}
document.querySelector("#ns5").addEventListener("mouseout", ns8);
function ns8() {
   document.img8.src = "Images/spl11.jpeg";
   document.querySelector("#clr6").innerHTML = "Color : Navy Blue";
}
document.querySelector("#ns4").addEventListener("mouseover", ns9);
function ns9() {
   document.img8.src = "Images/spl11.jpeg";
   document.querySelector("#clr6").innerHTML = "Color : Navy Blue";
}
//nineth item
document.querySelector("#men").addEventListener("mouseover", color7);
function color7() {
   setTimeout(() => {
      document.querySelector("#men").style.height = "850px";
      document.querySelector("#images8").style.display = "flex";
      document.querySelector("#clr7").style.display = "block";
      document.querySelector("#men3").style.width = "70px";
   }, 1000);
}
var img9 = [
   "Images/m1.png",
   "Images/m1-2.png",
   "Images/m1-3.png",
   "Images/m1-4.png",
];
var i = 0;
function setImage8() {
   document.img9.src = img9[i];
}
document.img9.src = "Images/m1.png";
setInterval(() => {
   if (i < img9.length - 1) {
      i++;
   } else {
      i = 0;
   }
   setImage8();
}, 10000);
document.querySelector("#leftBtn8").addEventListener("click", left8);
function left8() {
   if (i > 0) {
      i--;
   } else {
      i = img9.length - 1;
   }
   setImage8();
}
document.querySelector("#rightBtn8").addEventListener("click", right8);
function right8() {
   if (i < img9.length - 1) {
      i++;
   } else {
      i = 0;
   }
   setImage8();
}
document.querySelector("#cart8").addEventListener("click", cart9);
function cart9() {
   alert("You're item has been added to cart!!!");
   document.querySelector("#cart8").innerHTML = "&#128722; Go to cart";
}
document.querySelector("#buy8").addEventListener("click", buy9);
function buy9() {
   const buy8 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy8 <= 10) {
      document.querySelector("#total8").textContent =
         "Total Price : " + "₹" + 285 * buy8 + "  only";
      document.querySelector("#total8").style.textAlign = "center";
      document.querySelector("#total8").style.fontWeight = "bold";
      document.querySelector("#total8").style.backgroundColor = "black";
      document.querySelector("#total8").style.color = "white";
      document.querySelector("#total8").style.padding = "5px";
      document.querySelector("#total8").style.animation =
         "anime 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
document.querySelector("#out1").addEventListener("click", oos);
function oos() {
   alert("Out of Stock");
}
document.querySelector("#men1").addEventListener("mouseover", men1);
function men1() {
   document.img9.src = "Images/m1.png";
   document.querySelector("#clr7").innerHTML = "Color : Maroon";
}
document.querySelector("#men2").addEventListener("mouseover", men2);
function men2() {
   document.img9.src = "Images/b18.png";
   document.querySelector("#clr7").innerHTML = "Color : Green";
}
document.querySelector("#men2").addEventListener("mouseout", men3);
function men3() {
   document.img9.src = "Images/m1.png";
   document.querySelector("#clr7").innerHTML = "Color : Maroon";
}
document.querySelector("#men3").addEventListener("mouseover", men4);
function men4() {
   document.img9.src = "Images/b17.png";
   document.querySelector("#clr7").innerHTML = "Color : Grey";
}
document.querySelector("#men3").addEventListener("mouseout", men5);
function men5() {
   document.img9.src = "Images/m1.png";
   document.querySelector("#clr7").innerHTML = "Color : Maroon";
}
//tenth item
document.querySelector("#men-1").addEventListener("mouseover", height1);
function height1() {
   setTimeout(() => {
      document.querySelector("#men-1").style.height = "850px";
   }, 1000);
}
var img10 = [
   "Images/m2-4.png",
   "Images/m2-2.png",
   "Images/m2.png",
   "Images/m2-3.png",
];
var j = 0;
function setImage9() {
   document.img10.src = img10[j];
}
document.img10.src = "Images/m2-4.png";
setInterval(() => {
   if (j < img10.length - 1) {
      j++;
   } else {
      j = 0;
   }
   setImage9();
}, 10000);
document.querySelector("#leftBtn9").addEventListener("click", left9);
function left9() {
   if (j > 0) {
      j--;
   } else {
      j = img10.length - 1;
   }
   setImage9();
}
document.querySelector("#rightBtn9").addEventListener("click", right9);
function right9() {
   if (j < img10.length - 1) {
      j++;
   } else {
      j = 0;
   }
   setImage9();
}
document.querySelector("#cart9").addEventListener("click", cart10);
function cart10() {
   alert("You're item has been added to cart!!!");
   document.querySelector("#cart9").innerHTML = "&#128722; Go to cart";
}
document.querySelector("#buy9").addEventListener("click", buy10);
function buy10() {
   const buy9 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy9 <= 10) {
      document.querySelector("#total9").textContent =
         "Total Price : " + "₹" + 265 * buy9 + "  only";
      document.querySelector("#total9").style.textAlign = "center";
      document.querySelector("#total9").style.fontWeight = "bold";
      document.querySelector("#total9").style.backgroundColor = "black";
      document.querySelector("#total9").style.color = "white";
      document.querySelector("#total9").style.padding = "5px";
      document.querySelector("#total9").style.animation =
         "anime 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//eleventh item
document.querySelector("#men-2").addEventListener("mouseover", height2);
function height2() {
   setTimeout(() => {
      document.querySelector("#men-2").style.height = "850px";
   }, 1000);
}
var img11 = [
   "Images/m3.png",
   "Images/m3-2.png",
   "Images/m3-3.png",
   "Images/m3-4.png",
];
var k = 0;
function setImage10() {
   document.img11.src = img11[k];
}
document.img11.src = "Images/m3.png";
setInterval(() => {
   if (k < img11.length - 1) {
      k++;
   } else {
      k = 0;
   }
   setImage10();
}, 10000);
document.querySelector("#leftBtn10").addEventListener("click", left10);
function left10() {
   if (k > 0) {
      k--;
   } else {
      k = img11.length - 1;
   }
   setImage10();
}
document.querySelector("#rightBtn10").addEventListener("click", right10);
function right10() {
   if (k < img11.length - 1) {
      k++;
   } else {
      k = 0;
   }
   setImage10();
}
document.querySelector("#cart10").addEventListener("click", cart11);
function cart11() {
   alert("You're item has been added to cart!!!");
   document.querySelector("#cart10").innerHTML = "&#128722; Go to cart";
}
document.querySelector("#buy10").addEventListener("click", buy11);
function buy11() {
   const buy10 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy10 <= 10) {
      document.querySelector("#total10").textContent =
         "Total Price : " + "₹" + 505 * buy10 + "  only";
      document.querySelector("#total10").style.textAlign = "center";
      document.querySelector("#total10").style.fontWeight = "bold";
      document.querySelector("#total10").style.backgroundColor = "black";
      document.querySelector("#total10").style.color = "white";
      document.querySelector("#total10").style.padding = "5px";
      document.querySelector("#total10").style.animation =
         "anime 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//twelfth item
document.querySelector("#men-3").addEventListener("mouseover", height3);
function height3() {
   setTimeout(() => {
      document.querySelector("#men-3").style.height = "850px";
   }, 1000);
}
document.querySelector("#oos1").addEventListener("click", outOS);
function outOS() {
   alert("Out of Stock");
}
var img12 = [
   "Images/spl13-2.jpeg",
   "Images/spl13.jpeg",
   "Images/spl13-3.jpeg",
   "Images/spl13-4.jpeg",
];
var l = 0;
function setImage11() {
   document.img12.src = img12[l];
}
document.img12.src = "Images/spl13-2.jpeg";
setInterval(() => {
   if (l < img12.length - 1) {
      l++;
   } else {
      l = 0;
   }
   setImage11();
}, 10000);
document.querySelector("#leftBtn11").addEventListener("click", left11);
function left11() {
   if (l > 0) {
      l--;
   } else {
      l = img12.length - 1;
   }
   setImage11();
}
document.querySelector("#rightBtn11").addEventListener("click", right11);
function right11() {
   if (l < img12.length - 1) {
      l++;
   } else {
      l = 0;
   }
   setImage11();
}
document.querySelector("#cart11").addEventListener("click", cart12);
function cart12() {
   alert("You're item has been added to cart!!!");
   document.querySelector("#cart11").innerHTML = "&#128722; Go to cart";
}
document.querySelector("#buy11").addEventListener("click", buy12);
function buy12() {
   const buy11 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy11 <= 10) {
      document.querySelector("#total11").textContent =
         "Total Price : " + "₹" + 349 * buy11 + "  only";
      document.querySelector("#total11").style.textAlign = "center";
      document.querySelector("#total11").style.fontWeight = "bold";
      document.querySelector("#total11").style.backgroundColor = "black";
      document.querySelector("#total11").style.color = "white";
      document.querySelector("#total11").style.padding = "5px";
      document.querySelector("#total11").style.animation =
         "anime 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//13 item
var img13 = ["Images/spl15-1.jpeg", "Images/spl15-2.jpeg", "Images/spl15.jpeg"];
var m = 0;
function setImage12() {
   document.img13.src = img13[m];
}
document.img13.src = "Images/spl15-1.jpeg";
setInterval(() => {
   if (m < img13.length - 1) {
      m++;
   } else {
      m = 0;
   }
   setImage12();
}, 10000);
document.querySelector("#leftBtn12").addEventListener("click", left12);
function left12() {
   if (m > 0) {
      m--;
   } else {
      m = img13.length - 1;
   }
   setImage12();
}
document.querySelector("#rightBtn12").addEventListener("click", right12);
function right12() {
   if (m < img13.length - 1) {
      m++;
   } else {
      m = 0;
   }
   setImage12();
}
document.querySelector("#cart12").addEventListener("click", cart13);
function cart13() {
   alert("You're item has been added to cart!!!");
   document.querySelector("#cart12").innerHTML = "&#128722; Go to cart";
}
document.querySelector("#buy12").addEventListener("click", buy13);
function buy13() {
   const buy12 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy12 <= 10) {
      document.querySelector("#total12").textContent =
         "Total Price : " + "₹" + 309 * buy12 + "  only";
      document.querySelector("#total12").style.textAlign = "center";
      document.querySelector("#total12").style.fontWeight = "bold";
      document.querySelector("#total12").style.backgroundColor = "black";
      document.querySelector("#total12").style.color = "white";
      document.querySelector("#total12").style.padding = "5px";
      document.querySelector("#total12").style.animation =
         "anime 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//14 item
var img14 = [
   "Images/spl3.jpeg",
   "Images/spl3-2.jpeg",
   "Images/spl3-3.jpeg",
   "Images/spl3-4.jpeg",
];
var n = 0;
function setImage13() {
   document.img14.src = img14[n];
}
document.img14.src = "Images/spl3.jpeg";
setInterval(() => {
   if (n < img14.length - 1) {
      n++;
   } else {
      n = 0;
   }
   setImage13();
}, 10000);
document.querySelector("#leftBtn13").addEventListener("click", left13);
function left13() {
   if (n > 0) {
      n--;
   } else {
      n = img14.length - 1;
   }
   setImage13();
}
document.querySelector("#rightBtn13").addEventListener("click", right13);
function right13() {
   if (n < img14.length - 1) {
      n++;
   } else {
      n = 0;
   }
   setImage13();
}
document.querySelector("#acc1").addEventListener("mouseover", hl);
function hl() {
   setTimeout(() => {
      document.querySelector("#acc1").style.height = "850px";
      document.querySelector(".highlight").style.display = "block";
   }, 2000);
}
document.querySelector("#cart13").addEventListener("click", cart14);
function cart14() {
   alert("You're item has been added to cart!!!");
   document.querySelector("#cart13").innerHTML = "&#128722; Go to cart";
}
document.querySelector("#buy13").addEventListener("click", buy14);
function buy14() {
   const buy13 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy13 <= 6) {
      document.querySelector("#total13").textContent =
         "Total Price : " + "₹" + 999 * buy13 + "  only";
      document.querySelector("#total13").style.textAlign = "center";
      document.querySelector("#total13").style.fontWeight = "bold";
      document.querySelector("#total13").style.backgroundColor = "black";
      document.querySelector("#total13").style.color = "white";
      document.querySelector("#total13").style.padding = "5px";
      document.querySelector("#total13").style.animation =
         "anime 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("Only 6 pieces left");
   }
}
//15item
document.querySelector("#acc2").addEventListener("mouseover", hl1);
function hl1() {
   setTimeout(() => {
      document.querySelector("#acc2").style.height = "850px";
      document.querySelector("#images9").style.display = "flex";
      document.querySelector("#clr8").style.display = "block";
   }, 2000);
}
var img15 = [
   "Images/watch1.jpeg",
   "Images/watch1-2.jpeg",
   "Images/watch1-3.jpeg",
];
var o = 0;
function setImage14() {
   document.img15.src = img15[o];
}
document.img15.src = "Images/watch1.jpeg";
setInterval(() => {
   if (o < img15.length - 1) {
      o++;
   } else {
      o = 0;
   }
   setImage14();
}, 10000);
document.querySelector("#leftBtn14").addEventListener("click", left14);
function left14() {
   if (o > 0) {
      o--;
   } else {
      o = img15.length - 1;
   }
   setImage14();
}
document.querySelector("#rightBtn14").addEventListener("click", right14);
function right14() {
   if (o < img15.length - 1) {
      o++;
   } else {
      o = 0;
   }
   setImage14();
}
document.querySelector("#cart14").addEventListener("click", cart15);
function cart15() {
   alert("You're item has been added to cart!!!");
   document.querySelector("#cart14").innerHTML = "&#128722; Go to cart";
}
document.querySelector("#buy14").addEventListener("click", buy15);
function buy15() {
   const buy14 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy14 <= 10) {
      document.querySelector("#total14").textContent =
         "Total Price : " + "₹" + 329 * buy14 + "  only";
      document.querySelector("#total14").style.textAlign = "center";
      document.querySelector("#total14").style.fontWeight = "bold";
      document.querySelector("#total14").style.backgroundColor = "black";
      document.querySelector("#total14").style.color = "white";
      document.querySelector("#total14").style.padding = "5px";
      document.querySelector("#total14").style.animation =
         "anime 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
document.querySelector("#wat1").addEventListener("mouseover", watch1);
function watch1() {
   document.img15.src = "Images/b19.jpeg";
   document.querySelector("#clr8").textContent = " Strap Color  : Brown, Blue";
}
document.querySelector("#wat1").addEventListener("mouseout", watch2);
function watch2() {
   document.img15.src = "Images/watch1.jpeg";
   document.querySelector("#clr8").textContent =
      " Strap Color  : Brown, Blue, Black";
}
document.querySelector("#wat2").addEventListener("mouseover", watch3);
function watch3() {
   document.img15.src = "Images/watch1.jpeg";
   document.querySelector("#clr8").textContent =
      " Strap Color  : Brown, Blue, Black";
}
// 16 item
document.querySelector("#acc3").addEventListener("mouseover", kids);
function kids() {
   setTimeout(() => {
      document.querySelector("#acc3").style.height = "850px";
      document.querySelector("#images10").style.display = "flex";
      document.querySelector("#clr9").style.display = "block";
   }, 2000);
}
var img16 = ["Images/spl8.jpeg", "Images/spl8-2.jpeg", "Images/spl8-3.jpeg"];
var p = 0;
function setImage15() {
   document.img16.src = img16[p];
}
document.img16.src = "Images/spl8.jpeg";
setInterval(() => {
   if (p < img16.length - 1) {
      p++;
   } else {
      p = 0;
   }
   setImage15();
}, 10000);
document.querySelector("#leftBtn15").addEventListener("click", left15);
function left15() {
   if (p > 0) {
      p--;
   } else {
      p = img16.length - 1;
   }
   setImage15();
}
document.querySelector("#rightBtn15").addEventListener("click", right15);
function right15() {
   if (p < img16.length - 1) {
      p++;
   } else {
      p = 0;
   }
   setImage15();
}
document.querySelector("#cart15").addEventListener("click", cart16);
function cart16() {
   alert("You're item has been added to cart!!!");
   document.querySelector("#cart15").innerHTML = "&#128722; Go to cart";
}
document.querySelector("#buy15").addEventListener("click", buy16);
function buy16() {
   const buy15 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy15 <= 10) {
      document.querySelector("#total15").textContent =
         "Total Price : " + "₹" + 474 * buy15 + "  only";
      document.querySelector("#total15").style.textAlign = "center";
      document.querySelector("#total15").style.fontWeight = "bold";
      document.querySelector("#total15").style.backgroundColor = "black";
      document.querySelector("#total15").style.color = "white";
      document.querySelector("#total15").style.padding = "5px";
      document.querySelector("#total15").style.animation =
         "anime 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
document.querySelector("#girl").addEventListener("mouseover", babyGirl);
function babyGirl() {
   document.img16.src = "Images/b20.jpeg";
   document.querySelector("#clr9").textContent = " Color  : Yellow, Red, White";
}
document.querySelector("#girl").addEventListener("mouseout", babyGirl1);
function babyGirl1() {
   document.img16.src = "Images/spl8.jpeg";
   document.querySelector("#clr9").textContent = " Color  : Red, Navy Blue";
}
document.querySelector("#girl1").addEventListener("mouseover", babyGirl2);
function babyGirl2() {
   document.img16.src = "Images/spl8.jpeg";
   document.querySelector("#clr9").textContent = " Color  : Red, Navy Blue";
}
document.querySelector("#girl2").addEventListener("mouseover", babyGirl3);
function babyGirl3() {
   document.img16.src = "Images/b21.jpeg";
   document.querySelector("#clr9").textContent = " Color  : Pink, Red, White";
}
document.querySelector("#girl2").addEventListener("mouseout", babyGirl4);
function babyGirl4() {
   document.img16.src = "Images/spl8.jpeg";
   document.querySelector("#clr9").textContent = " Color  : Red, Navy Blue";
}
//17 item
document.querySelector("#acc4").addEventListener("mouseover", kids1);
function kids1() {
   setTimeout(() => {
      document.querySelector("#acc4").style.height = "850px";
   }, 2000);
}
var img17 = ["Images/baby1-2.jpeg", "Images/baby1.jpeg", "Images/baby1-3.jpeg"];
var q = 0;
function setImage16() {
   document.img17.src = img17[q];
}
document.img17.src = "Images/baby1-2.jpeg";
setInterval(() => {
   if (q < img17.length - 1) {
      q++;
   } else {
      q = 0;
   }
   setImage16();
}, 10000);
document.querySelector("#leftBtn16").addEventListener("click", left16);
function left16() {
   if (q > 0) {
      q--;
   } else {
      q = img17.length - 1;
   }
   setImage16();
}
document.querySelector("#rightBtn16").addEventListener("click", right16);
function right16() {
   if (q < img17.length - 1) {
      q++;
   } else {
      q = 0;
   }
   setImage16();
}
document.querySelector("#cart16").addEventListener("click", cart17);
function cart17() {
   alert("You're item has been added to cart!!!");
   document.querySelector("#cart16").innerHTML = "&#128722; Go to cart";
}
document.querySelector("#buy16").addEventListener("click", buy17);
function buy17() {
   const buy16 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy16 <= 9) {
      document.querySelector("#total16").textContent =
         "Total Price : " + "₹" + 236 * buy16 + "  only";
      document.querySelector("#total16").style.textAlign = "center";
      document.querySelector("#total16").style.fontWeight = "bold";
      document.querySelector("#total16").style.backgroundColor = "black";
      document.querySelector("#total16").style.color = "white";
      document.querySelector("#total16").style.padding = "5px";
      document.querySelector("#total16").style.animation =
         "anime 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("Only 9 pieces left");
   }
}
