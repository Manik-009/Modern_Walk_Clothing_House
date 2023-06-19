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
//size charts
document.querySelector("#show-schart").addEventListener("click", showSch);
function showSch() {
   if (document.querySelector("#tbl").style.display != "block") {
      document.querySelector("#tbl").style.display = "block";
      document.querySelector("#tbl").style.animation = "sizeCh 1s ease-in .01s";
   } else {
      document.querySelector("#tbl").style.display = "none";
   }
}
//Winter wear - Jacket 1
var jacket = [
   "Images/men-j1.jpg",
   "Images/men-j1-2.jpg",
   "Images/men-j1-3.jpg",
   "Images/men-j1-5.jpg",
];
var j = 0;
document.jacket1.src = "Images/men-j1.jpg";
function setJacket() {
   document.jacket1.src = jacket[j];
}
setInterval(function autoSlider() {
   if (j < jacket.length - 1) {
      j++;
   } else {
      j = 0;
   }
   setJacket();
}, 10000);
document.querySelector("#leftbtn-j1").addEventListener("click", leftbJacket);
function leftbJacket() {
   if (j > 0) {
      j--;
   } else {
      j = jacket.length - 1;
   }
   setJacket();
}
document.querySelector("#rightbtn-j1").addEventListener("click", rightbJacket);
function rightbJacket() {
   if (j < jacket.length - 1) {
      j++;
   } else {
      j = 0;
   }
   setJacket();
}
document.querySelector("#cart-j1").addEventListener("click", cartJacket1);
function cartJacket1() {
   document.querySelector("#cart-j1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j1").addEventListener("click", buyJacket1);
function buyJacket1() {
   const buyJacket = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJacket <= 10 && buyJacket > 0) {
      document.querySelector("#total-j1").textContent =
         "Total Price : " + "₹" + 1028 * buyJacket + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJacket === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter wear - Jacket 2
var jacket1 = [
   "Images/men-j2.jpg",
   "Images/men-j2-2.jpg",
   "Images/men-j2-3.jpg",
   "Images/men-j2-4.jpg",
];
var j1 = 0;
document.jacket2.src = "Images/men-j2.jpg";
function setJacket1() {
   document.jacket2.src = jacket1[j1];
}
setInterval(function autoSlider1() {
   if (j1 < jacket1.length - 1) {
      j1++;
   } else {
      j1 = 0;
   }
   setJacket1();
}, 10000);
document.querySelector("#leftbtn-j2").addEventListener("click", leftbJacket1);
function leftbJacket1() {
   if (j1 > 0) {
      j1--;
   } else {
      j1 = jacket1.length - 1;
   }
   setJacket1();
}
document.querySelector("#rightbtn-j2").addEventListener("click", rightbJacket1);
function rightbJacket1() {
   if (j1 < jacket1.length - 1) {
      j1++;
   } else {
      j1 = 0;
   }
   setJacket1();
}
document.querySelector("#cart-j2").addEventListener("click", cartJacket2);
function cartJacket2() {
   document.querySelector("#cart-j2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j2").addEventListener("click", buyJacket2);
function buyJacket2() {
   const buyJacket = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJacket <= 10 && buyJacket > 0) {
      document.querySelector("#total-j2").textContent =
         "Total Price : " + "₹" + 699 * buyJacket + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJacket === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Jacket 2)
document.querySelector("#j2-type1").addEventListener("mouseover", j2Type1);
function j2Type1() {
   document.jacket2.src = "Images/men-j2-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: White & Black";
}
document.querySelector("#j2-type2").addEventListener("mouseover", j2Type2);
function j2Type2() {
   document.jacket2.src = "Images/men-j2-6.jpg";
   document.querySelector("#color-name").innerHTML =
      " Color: Navy & Neon Green";
}
document.querySelector("#j2-type3").addEventListener("mouseover", j2Type3);
function j2Type3() {
   document.jacket2.src = "Images/men-j2.jpg";
   document.querySelector("#color-name").innerHTML =
      " Color: Neon Green & Black";
}
document.querySelector("#j2-type4").addEventListener("mouseover", j2Type4);
function j2Type4() {
   document.jacket2.src = "Images/men-j2-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Navy & Black";
}
// -mouseout from color images(Jacket2)
document.querySelector("#j2-type1").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   j2Type3();
}
document.querySelector("#j2-type2").addEventListener("mouseout", type2Mout1);
document.querySelector("#j2-type4").addEventListener("mouseout", type2Mout1);
//Winter wear - Jacket 3
var jacket2 = [
   "Images/men-j3.jpg",
   "Images/men-j3-2.jpg",
   "Images/men-j3-3.jpg",
   "Images/men-j3-4.jpg",
];
var j2 = 0;
document.jacket3.src = "Images/men-j3.jpg";
function setJacket2() {
   document.jacket3.src = jacket2[j2];
}
setInterval(function autoSlider2() {
   if (j2 < jacket2.length - 1) {
      j2++;
   } else {
      j2 = 0;
   }
   setJacket2();
}, 10000);
document.querySelector("#leftbtn-j3").addEventListener("click", leftbJacket2);
function leftbJacket2() {
   if (j2 > 0) {
      j2--;
   } else {
      j2 = jacket2.length - 1;
   }
   setJacket2();
}
document.querySelector("#rightbtn-j3").addEventListener("click", rightbJacket2);
function rightbJacket2() {
   if (j2 < jacket2.length - 1) {
      j2++;
   } else {
      j2 = 0;
   }
   setJacket2();
}
document.querySelector("#cart-j3").addEventListener("click", cartJacket3);
function cartJacket3() {
   document.querySelector("#cart-j3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j3").addEventListener("click", buyJacket3);
function buyJacket3() {
   const buyJacket = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJacket <= 10 && buyJacket > 0) {
      document.querySelector("#total-j3").textContent =
         "Total Price : " + "₹" + 899 * buyJacket + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJacket === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter wear - Jacket 4
var jacket3 = [
   "Images/men-j4.jpg",
   "Images/men-j4-2.jpg",
   "Images/men-j4-3.jpg",
   "Images/men-j4-4.jpg",
];
var j3 = 0;
document.jacket4.src = "Images/men-j4.jpg";
function setJacket3() {
   document.jacket4.src = jacket3[j3];
}
setInterval(function autoSlider3() {
   if (j3 < jacket3.length - 1) {
      j3++;
   } else {
      j3 = 0;
   }
   setJacket3();
}, 10000);
document.querySelector("#leftbtn-j4").addEventListener("click", leftbJacket3);
function leftbJacket3() {
   if (j3 > 0) {
      j3--;
   } else {
      j3 = jacket3.length - 1;
   }
   setJacket3();
}
document.querySelector("#rightbtn-j4").addEventListener("click", rightbJacket3);
function rightbJacket3() {
   if (j3 < jacket3.length - 1) {
      j3++;
   } else {
      j3 = 0;
   }
   setJacket3();
}
document.querySelector("#cart-j4").addEventListener("click", cartJacket4);
function cartJacket4() {
   document.querySelector("#cart-j4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j4").addEventListener("click", buyJacket4);
function buyJacket4() {
   const buyJacket = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJacket <= 10 && buyJacket > 0) {
      document.querySelector("#total-j4").textContent =
         "Total Price : " + "₹" + 3224 * buyJacket + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJacket === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter wear - Jacket 5
var jacket4 = [
   "Images/men-j5.jpg",
   "Images/men-j5-2.jpg",
   "Images/men-j5-3.jpg",
   "Images/men-j5-4.jpg",
];
var j4 = 0;
document.jacket5.src = "Images/men-j5.jpg";
function setJacket4() {
   document.jacket5.src = jacket4[j4];
}
setInterval(function autoSlider4() {
   if (j4 < jacket4.length - 1) {
      j4++;
   } else {
      j4 = 0;
   }
   setJacket4();
}, 10000);
document.querySelector("#leftbtn-j5").addEventListener("click", leftbJacket4);
function leftbJacket4() {
   if (j4 > 0) {
      j4--;
   } else {
      j4 = jacket4.length - 1;
   }
   setJacket4();
}
document.querySelector("#rightbtn-j5").addEventListener("click", rightbJacket4);
function rightbJacket4() {
   if (j4 < jacket4.length - 1) {
      j4++;
   } else {
      j4 = 0;
   }
   setJacket4();
}
document.querySelector("#cart-j5").addEventListener("click", cartJacket5);
function cartJacket5() {
   document.querySelector("#cart-j5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j5").addEventListener("click", buyJacket5);
function buyJacket5() {
   const buyJacket = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJacket <= 10 && buyJacket > 0) {
      document.querySelector("#total-j5").textContent =
         "Total Price : " + "₹" + 699 * buyJacket + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJacket === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Jacket 5)
document.querySelector("#j5-type1").addEventListener("mouseover", j5Type1);
function j5Type1() {
   document.jacket5.src = "Images/men-j5-5.jpg";
   document.querySelector("#color-name1").innerHTML =
      " Color:  Yellow,White,Black";
}
document.querySelector("#j5-type2").addEventListener("mouseover", j5Type2);
function j5Type2() {
   document.jacket5.src = "Images/men-j5-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Navy,White,Red";
}
document.querySelector("#j5-type3").addEventListener("mouseover", j5Type3);
function j5Type3() {
   document.jacket5.src = "Images/men-j5.jpg";
   document.querySelector("#color-name1").innerHTML =
      " Color:  Red,White,Black";
}
document.querySelector("#j5-type4").addEventListener("mouseover", j5Type4);
function j5Type4() {
   document.jacket5.src = "Images/men-j5-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Red,Black";
}
document.querySelector("#j5-type5").addEventListener("mouseover", j5Type5);
function j5Type5() {
   document.jacket5.src = "Images/men-j5-8.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Grey,Black";
}
// -mouseout from color images(Jacket 5)
document.querySelector("#j5-type1").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   j5Type3();
}
document.querySelector("#j5-type2").addEventListener("mouseout", type5Mout1);
document.querySelector("#j5-type4").addEventListener("mouseout", type5Mout1);
document.querySelector("#j5-type5").addEventListener("mouseout", type5Mout1);
//Winter wear - Jacket 6
var jacket5 = [
   "Images/men-j6.jpg",
   "Images/men-j6-2.jpg",
   "Images/men-j6-3.jpg",
   "Images/men-j6-4.jpg",
];
var j5 = 0;
document.jacket6.src = "Images/men-j6.jpg";
function setJacket5() {
   document.jacket6.src = jacket5[j5];
}
setInterval(function autoSlider5() {
   if (j5 < jacket5.length - 1) {
      j5++;
   } else {
      j5 = 0;
   }
   setJacket5();
}, 10000);
document.querySelector("#leftbtn-j6").addEventListener("click", leftbJacket5);
function leftbJacket5() {
   if (j5 > 0) {
      j5--;
   } else {
      j5 = jacket5.length - 1;
   }
   setJacket5();
}
document.querySelector("#rightbtn-j6").addEventListener("click", rightbJacket5);
function rightbJacket5() {
   if (j5 > 0) {
      j5--;
   } else {
      j5 = jacket5.length - 1;
   }
   setJacket5();
}
document.querySelector("#cart-j6").addEventListener("click", cartJacket6);
function cartJacket6() {
   document.querySelector("#cart-j6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j6").addEventListener("click", buyJacket6);
function buyJacket6() {
   const buyJacket = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJacket <= 10 && buyJacket > 0) {
      document.querySelector("#total-j6").textContent =
         "Total Price : " + "₹" + 999 * buyJacket + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJacket === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Jacket 6)
document.querySelector("#j6-type1").addEventListener("mouseover", j6Type1);
function j6Type1() {
   document.jacket6.src = "Images/men-j6-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Light Grey";
}
document.querySelector("#j6-type2").addEventListener("mouseover", j6Type2);
function j6Type2() {
   document.jacket6.src = "Images/men-j6-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Black";
}
document.querySelector("#j6-type3").addEventListener("mouseover", j6Type3);
function j6Type3() {
   document.jacket6.src = "Images/men-j6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Light Blue";
}
// -mouseout from color images(Jacket 6)
document.querySelector("#j6-type1").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   j6Type3();
}
document.querySelector("#j6-type2").addEventListener("mouseout", type6Mout1);
//Winter wear - Jacket 7
var jacket6 = [
   "Images/men-j7.jpg",
   "Images/men-j7-2.jpg",
   "Images/men-j7-3.jpg",
   "Images/men-j7-4.jpg",
];
var j6 = 0;
document.jacket7.src = "Images/men-j7.jpg";
function setJacket6() {
   document.jacket7.src = jacket6[j6];
}
setInterval(function autoSlider6() {
   if (j6 < jacket6.length - 1) {
      j6++;
   } else {
      j6 = 0;
   }
   setJacket6();
}, 10000);
document.querySelector("#leftbtn-j7").addEventListener("click", leftbJacket6);
function leftbJacket6() {
   if (j6 > 0) {
      j6--;
   } else {
      j6 = jacket6.length - 1;
   }
   setJacket6();
}
document.querySelector("#rightbtn-j7").addEventListener("click", rightbJacket6);
function rightbJacket6() {
   if (j6 > 0) {
      j6--;
   } else {
      j6 = jacket6.length - 1;
   }
   setJacket6();
}
document.querySelector("#cart-j7").addEventListener("click", cartJacket7);
function cartJacket7() {
   document.querySelector("#cart-j7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j7").addEventListener("click", buyJacket7);
function buyJacket7() {
   const buyJacket = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJacket <= 10 && buyJacket > 0) {
      document.querySelector("#total-j7").textContent =
         "Total Price : " + "₹" + 1319 * buyJacket + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJacket === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter wear - Jacket 8
var jacket7 = [
   "Images/men-j8.jpg",
   "Images/men-j8-2.jpg",
   "Images/men-j8-3.jpg",
   "Images/men-j8-4.jpg",
];
var j7 = 0;
document.jacket8.src = "Images/men-j8.jpg";
function setJacket7() {
   document.jacket8.src = jacket7[j7];
}
setInterval(function autoSlider7() {
   if (j7 < jacket7.length - 1) {
      j7++;
   } else {
      j7 = 0;
   }
   setJacket7();
}, 10000);
document.querySelector("#leftbtn-j8").addEventListener("click", leftbJacket7);
function leftbJacket7() {
   if (j7 > 0) {
      j7--;
   } else {
      j7 = jacket7.length - 1;
   }
   setJacket7();
}
document.querySelector("#rightbtn-j8").addEventListener("click", rightbJacket7);
function rightbJacket7() {
   if (j7 > 0) {
      j7--;
   } else {
      j7 = jacket7.length - 1;
   }
   setJacket7();
}
document.querySelector("#cart-j8").addEventListener("click", cartJacket8);
function cartJacket8() {
   document.querySelector("#cart-j8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j8").addEventListener("click", buyJacket8);
function buyJacket8() {
   const buyJacket = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJacket <= 10 && buyJacket > 0) {
      document.querySelector("#total-j8").textContent =
         "Total Price : " + "₹" + 2970 * buyJacket + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJacket === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//wishlist hearts
//item 1
const heart1 = () => {
   if (document.querySelector("#hrt1").innerHTML != "❤️") {
      document.querySelector("#hrt1").innerHTML = "❤️";
      document.querySelector("#hrt1").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#hrt1").innerHTML = "🤍";
      document.querySelector("#hrt1").style.animation = "none";
   }
};
document.querySelector("#hrt1").addEventListener("click", heart1);
//item 2
const heart2 = () => {
   if (document.querySelector("#hrt2").innerHTML != "❤️") {
      document.querySelector("#hrt2").innerHTML = "❤️";
      document.querySelector("#hrt2").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#hrt2").innerHTML = "🤍";
      document.querySelector("#hrt2").style.animation = "none";
   }
};
document.querySelector("#hrt2").addEventListener("click", heart2);
//item 3
const heart3 = () => {
   if (document.querySelector("#hrt3").innerHTML != "❤️") {
      document.querySelector("#hrt3").innerHTML = "❤️";
      document.querySelector("#hrt3").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#hrt3").innerHTML = "🤍";
      document.querySelector("#hrt3").style.animation = "none";
   }
};
document.querySelector("#hrt3").addEventListener("click", heart3);
//item 4
const heart4 = () => {
   if (document.querySelector("#hrt4").innerHTML != "❤️") {
      document.querySelector("#hrt4").innerHTML = "❤️";
      document.querySelector("#hrt4").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#hrt4").innerHTML = "🤍";
      document.querySelector("#hrt4").style.animation = "none";
   }
};
document.querySelector("#hrt4").addEventListener("click", heart4);
//item 5
const heart5 = () => {
   if (document.querySelector("#hrt5").innerHTML != "❤️") {
      document.querySelector("#hrt5").innerHTML = "❤️";
      document.querySelector("#hrt5").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#hrt5").innerHTML = "🤍";
      document.querySelector("#hrt5").style.animation = "none";
   }
};
document.querySelector("#hrt5").addEventListener("click", heart5);
//item 6
const heart6 = () => {
   if (document.querySelector("#hrt6").innerHTML != "❤️") {
      document.querySelector("#hrt6").innerHTML = "❤️";
      document.querySelector("#hrt6").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#hrt6").innerHTML = "🤍";
      document.querySelector("#hrt6").style.animation = "none";
   }
};
document.querySelector("#hrt6").addEventListener("click", heart6);
//item 7
const heart7 = () => {
   if (document.querySelector("#hrt7").innerHTML != "❤️") {
      document.querySelector("#hrt7").innerHTML = "❤️";
      document.querySelector("#hrt7").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#hrt7").innerHTML = "🤍";
      document.querySelector("#hrt7").style.animation = "none";
   }
};
document.querySelector("#hrt7").addEventListener("click", heart7);
//item 8
const heart8 = () => {
   if (document.querySelector("#hrt8").innerHTML != "❤️") {
      document.querySelector("#hrt8").innerHTML = "❤️";
      document.querySelector("#hrt8").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#hrt8").innerHTML = "🤍";
      document.querySelector("#hrt8").style.animation = "none";
   }
};
document.querySelector("#hrt8").addEventListener("click", heart8);
