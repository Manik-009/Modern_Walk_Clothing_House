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
document
   .querySelector(".fa-shopping-cart")
   .addEventListener("click", shoppingCart);
function shoppingCart() {
   alert("Your cart is empty ! Add items to it now.");
}
// First offer
document.saree1.src = "Images/saree1-1.jpeg";
var s1Img = [
   "Images/saree1-1.jpeg",
   "Images/saree1-2.jpeg",
   "Images/saree1-3.jpeg",
];
var a = 0;
function setImage1() {
   document.saree1.src = s1Img[a];
}
setInterval(() => {
   if (a < s1Img.length - 1) {
      a++;
   } else {
      a = 0;
   }
   setImage1();
}, 10000);
document.querySelector("#s1LeftBtn").addEventListener("click", left1);
function left1() {
   if (a > 0) {
      a--;
   } else {
      a = s1Img.length - 1;
   }
   setImage1();
}
document.querySelector("#s1RightBtn").addEventListener("click", right1);
function right1() {
   if (a < s1Img.length - 1) {
      a++;
   } else {
      a = 0;
   }
   setImage1();
}
setInterval(function time() {
   const main = new Date();
   const sec = main.getSeconds();
   const min = main.getMinutes();
   const hour = main.getHours();
   const finSec = 60 - sec;
   const finMin = 60 - min;
   const finHour = 24 - hour;
   document.querySelector("#time").textContent =
      "	\u23F1 " + finHour + "h " + finMin + "m " + finSec + "s " + "remaining";
   document.querySelector("#time").style.textAlign = "center";
   document.querySelector("#time").style.backgroundColor = "black";
   document.querySelector("#time").style.color = "white";
   document.querySelector("#time").style.fontWeight = "bold";
   document.querySelector("#time").style.fontSize = ".8em";
   document.querySelector("#time").style.padding = "7px 15px";
   document.querySelector("#time").style.borderRadius = "20px";
}, 500);
document.querySelector("#buy").addEventListener("click", buy1);
function buy1() {
   const buy = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy <= 10) {
      document.querySelector("#total").textContent =
         "Total Price : " + "₹" + 399 * buy + "  only";
      document.querySelector("#total").style.textAlign = "center";
      document.querySelector("#total").style.fontWeight = "bold";
      document.querySelector("#total").style.backgroundColor = "black";
      document.querySelector("#total").style.color = "white";
      document.querySelector("#total").style.padding = "5px";
      document.querySelector("#total").style.animation =
         "saree1 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
// Second offer
document.saree2.src = "Images/saree3-1.jpeg";
var s2Img = [
   "Images/saree3-1.jpeg",
   "Images/saree3-2.jpeg",
   "Images/saree3-3.jpeg",
];
var b = 0;
function setImage2() {
   document.saree2.src = s2Img[b];
}
setInterval(() => {
   if (b < s2Img.length - 1) {
      b++;
   } else {
      b = 0;
   }
   setImage2();
}, 10000);
document.querySelector("#s1LeftBtn1").addEventListener("click", left2);
function left2() {
   if (b > 0) {
      b--;
   } else {
      b = s2Img.length - 1;
   }
   setImage2();
}
document.querySelector("#s1RightBtn1").addEventListener("click", right2);
function right2() {
   if (b < s2Img.length - 1) {
      b++;
   } else {
      b = 0;
   }
   setImage2();
}
document.querySelector("#buy1").addEventListener("click", buy2);
function buy2() {
   const buy1 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy1 <= 10) {
      document.querySelector("#total1").textContent =
         "Total Price : " + "₹" + 579 * buy1 + "  only";
      document.querySelector("#total1").style.textAlign = "center";
      document.querySelector("#total1").style.fontWeight = "bold";
      document.querySelector("#total1").style.backgroundColor = "black";
      document.querySelector("#total1").style.color = "white";
      document.querySelector("#total1").style.padding = "5px";
      document.querySelector("#total1").style.animation =
         "saree1 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
// Third offer
document.saree3.src = "Images/saree4-3.jpeg";
var s3Img = [
   "Images/saree4-3.jpeg",
   "Images/saree4-1.jpeg",
   "Images/saree4-2.jpeg",
   "Images/saree4-1-3.jpeg",
   "Images/saree4-1-2.jpeg",
   "Images/saree4-1-1.jpeg",
];
var c = 0;
function setImage3() {
   document.saree3.src = s3Img[c];
}
setInterval(() => {
   if (c < s3Img.length - 1) {
      c++;
   } else {
      c = 0;
   }
   setImage3();
}, 10000);
document.querySelector("#s1LeftBtn2").addEventListener("click", left3);
function left3() {
   if (c > 0) {
      c--;
   } else {
      c = s3Img.length - 1;
   }
   setImage3();
}
document.querySelector("#s1RightBtn2").addEventListener("click", right3);
function right3() {
   if (c < s3Img.length - 1) {
      c++;
   } else {
      c = 0;
   }
   setImage3();
}
document.querySelector("#buy2").addEventListener("click", buy3);
function buy3() {
   const buy2 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy2 <= 10) {
      document.querySelector("#total2").textContent =
         "Total Price : " + "₹" + 283 * buy2 + "  only";
      document.querySelector("#total2").style.textAlign = "center";
      document.querySelector("#total2").style.fontWeight = "bold";
      document.querySelector("#total2").style.backgroundColor = "black";
      document.querySelector("#total2").style.color = "white";
      document.querySelector("#total2").style.padding = "5px";
      document.querySelector("#total2").style.animation =
         "saree1 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
// Fourth offer
document.saree4.src = "Images/saree2-1.jpeg";
var s4Img = [
   "Images/saree2-1.jpeg",
   "Images/saree2-2.jpeg",
   "Images/saree2-3.jpeg",
];
var d = 0;
function setImage4() {
   document.saree4.src = s4Img[d];
}
setInterval(() => {
   if (d < s4Img.length - 1) {
      d++;
   } else {
      d = 0;
   }
   setImage4();
}, 10000);
document.querySelector("#s1LeftBtn3").addEventListener("click", left4);
function left4() {
   if (d > 0) {
      d--;
   } else {
      d = s4Img.length - 1;
   }
   setImage4();
}
document.querySelector("#s1RightBtn3").addEventListener("click", right4);
function right4() {
   if (d < s4Img.length - 1) {
      d++;
   } else {
      d = 0;
   }
   setImage4();
}
document.querySelector("#buy3").addEventListener("click", buy4);
function buy4() {
   const buy3 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy3 <= 10) {
      document.querySelector("#total3").textContent =
         "Total Price : " + "₹" + 795 * buy3 + "  only";
      document.querySelector("#total3").style.textAlign = "center";
      document.querySelector("#total3").style.fontWeight = "bold";
      document.querySelector("#total3").style.backgroundColor = "black";
      document.querySelector("#total3").style.color = "white";
      document.querySelector("#total3").style.padding = "5px";
      document.querySelector("#total3").style.animation =
         "saree1 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
// Fifth offer
document.tshirt.src = "Images/men1.jpeg";
var s5Img = ["Images/men1.jpeg", "Images/men1-2.jpeg", "Images/men1-3.jpeg"];
var e = 0;
function setImage5() {
   document.tshirt.src = s5Img[e];
}
setInterval(() => {
   if (e < s5Img.length - 1) {
      e++;
   } else {
      e = 0;
   }
   setImage5();
}, 10000);
document.querySelector("#s1LeftBtn4").addEventListener("click", left5);
function left5() {
   if (e > 0) {
      e--;
   } else {
      e = s5Img.length - 1;
   }
   setImage5();
}
document.querySelector("#s1RightBtn4").addEventListener("click", right5);
function right5() {
   if (e < s5Img.length - 1) {
      e++;
   } else {
      e = 0;
   }
   setImage5();
}
document.querySelector("#buy4").addEventListener("click", buy5);
function buy5() {
   const buy4 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy4 <= 10) {
      document.querySelector("#total4").textContent =
         "Total Price : " + "₹" + 386 * buy4 + "  only";
      document.querySelector("#total4").style.textAlign = "center";
      document.querySelector("#total4").style.fontWeight = "bold";
      document.querySelector("#total4").style.backgroundColor = "black";
      document.querySelector("#total4").style.color = "white";
      document.querySelector("#total4").style.padding = "5px";
      document.querySelector("#total4").style.animation =
         "saree1 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Sixth Offer
document.tshirt1.src = "Images/men2.jpeg";
var s6Img = [
   "Images/men2.jpeg",
   "Images/men2-2.png",
   "Images/men2-3.png",
   "Images/2-4.png",
];
var f = 0;

function setImage6() {
   document.tshirt1.src = s6Img[f];
}
setInterval(() => {
   if (f < s6Img.length - 1) {
      f++;
   } else {
      f = 0;
   }
   setImage6();
}, 10000);
document.querySelector("#s1LeftBtn5").addEventListener("click", left6);
function left6() {
   if (f > 0) {
      f--;
   } else {
      f = s6Img.length - 1;
   }
   setImage6();
}
document.querySelector("#s1RightBtn5").addEventListener("click", right6);
function right6() {
   if (f < s6Img.length - 1) {
      f++;
   } else {
      f = 0;
   }
   setImage6();
}
document.querySelector("#buy5").addEventListener("click", buy6);
function buy6() {
   const buy5 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy5 <= 10) {
      document.querySelector("#total5").textContent =
         "Total Price : " + "₹" + 519 * buy5 + "  only";
      document.querySelector("#total5").style.textAlign = "center";
      document.querySelector("#total5").style.fontWeight = "bold";
      document.querySelector("#total5").style.backgroundColor = "black";
      document.querySelector("#total5").style.color = "white";
      document.querySelector("#total5").style.padding = "5px";
      document.querySelector("#total5").style.animation =
         "saree1 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
// Seventh offer
document.tshirt2.src = "Images/wm2-3.jpeg";
var g = 0;
var s7Img = ["Images/wm2-3.jpeg", "Images/wm2-2.jpeg", "Images/wm2.jpeg"];
function setImage7() {
   document.tshirt2.src = s7Img[g];
}
setInterval(() => {
   if (g < s7Img.length - 1) {
      g++;
   } else {
      g = 0;
   }
   setImage7();
}, 10000);
document.querySelector("#s1LeftBtn6").addEventListener("click", left7);
function left7() {
   if (g > 0) {
      g--;
   } else {
      g = s7Img.length - 1;
   }
   setImage7();
}
document.querySelector("#s1RightBtn6").addEventListener("click", right7);
function right7() {
   if (g < s7Img.length - 1) {
      g++;
   } else {
      g = 0;
   }
   setImage7();
}
document.querySelector("#buy6").addEventListener("click", buy7);
function buy7() {
   const buy6 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy6 <= 4) {
      document.querySelector("#total6").textContent =
         "Total Price : " + "₹" + 399 * buy6 + "  only";
      document.querySelector("#total6").style.textAlign = "center";
      document.querySelector("#total6").style.fontWeight = "bold";
      document.querySelector("#total6").style.backgroundColor = "black";
      document.querySelector("#total6").style.color = "white";
      document.querySelector("#total6").style.padding = "5px";
      document.querySelector("#total6").style.animation =
         "saree1 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert(" 4 pieces left, Hurry up");
   }
}
//8 offer
document.tshirt3.src = "Images/wm1.png";
var h = 0;
var s8Img = ["Images/wm1.png", "Images/wm1-2.png", "Images/wm1-3.png"];
function setImage8() {
   document.tshirt3.src = s8Img[h];
}
setInterval(() => {
   if (h < s8Img.length - 1) {
      h++;
   } else {
      h = 0;
   }
   setImage8();
}, 10000);
document.querySelector("#s1LeftBtn7").addEventListener("click", left8);
function left8() {
   if (h > 0) {
      d--;
   } else {
      h = s8Img.length - 1;
   }
   setImage8();
}
document.querySelector("#s1RightBtn7").addEventListener("click", right8);
function right8() {
   if (h < s8Img.length - 1) {
      h++;
   } else {
      h = 0;
   }
   setImage8();
}
document.querySelector("#buy7").addEventListener("click", buy8);
function buy8() {
   const buy7 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy7 <= 10) {
      document.querySelector("#total7").textContent =
         "Total Price : " + "₹" + 384 * buy7 + "  only";
      document.querySelector("#total7").style.textAlign = "center";
      document.querySelector("#total7").style.fontWeight = "bold";
      document.querySelector("#total7").style.backgroundColor = "black";
      document.querySelector("#total7").style.color = "white";
      document.querySelector("#total7").style.padding = "5px";
      document.querySelector("#total7").style.animation =
         "saree1 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//nineth offer
document.watch.src = "Images/watch2.jpeg";
var i = 0;
var s9Img = [
   "Images/watch2.jpeg",
   "Images/watch2-2.jpeg",
   "Images/watch2-3.jpeg",
];
function setImage9() {
   document.watch.src = s9Img[i];
}
setInterval(() => {
   if (i < s9Img.length - 1) {
      i++;
   } else {
      i = 0;
   }
   setImage9();
}, 10000);
document.querySelector("#s1LeftBtn8").addEventListener("click", left9);
function left9() {
   if (i > 0) {
      i--;
   } else {
      i = s9Img.length - 1;
   }
   setImage9();
}
document.querySelector("#s1RightBtn8").addEventListener("click", right9);
function right9() {
   if (i < s9Img.length - 1) {
      i++;
   } else {
      i = 0;
   }
   setImage9();
}
document.querySelector("#buy8").addEventListener("click", buy9);
function buy9() {
   const buy8 = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buy8 <= 10) {
      document.querySelector("#total8").textContent =
         "Total Price : " + "₹" + 199 * buy8 + "  only";
      document.querySelector("#total8").style.textAlign = "center";
      document.querySelector("#total8").style.fontWeight = "bold";
      document.querySelector("#total8").style.backgroundColor = "black";
      document.querySelector("#total8").style.color = "white";
      document.querySelector("#total8").style.padding = "5px";
      document.querySelector("#total8").style.animation =
         "saree1 3s ease .1s infinite alternate";
      alert("Thank ♥ you for Your Order");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
