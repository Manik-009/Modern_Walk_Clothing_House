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
document.querySelector("#show-schart").addEventListener("click", showSch);
function showSch() {
   if (document.querySelector("#tbl").style.display != "block") {
      document.querySelector("#tbl").style.display = "block";
      document.querySelector("#tbl").style.animation = "sizeCh 1s ease-in .01s";
   } else {
      document.querySelector("#tbl").style.display = "none";
   }
}
//Boys Clothing- Ethnic wear1
var ethnic = [
   "Images/kid-e1.jpeg",
   "Images/kid-e1-2.jpeg",
   "Images/kid-e1-3.jpeg",
];
var e = 0;
document.ethnic1.src = "Images/kid-e1.jpeg";
function setEthnic() {
   document.ethnic1.src = ethnic[e];
}
setInterval(function autoSlider() {
   if (e < ethnic.length - 1) {
      e++;
   } else {
      e = 0;
   }
   setEthnic();
}, 10000);
document.querySelector("#leftbtn-e1").addEventListener("click", leftbEthnic);
function leftbEthnic() {
   if (e > 0) {
      e--;
   } else {
      e = ethnic.length - 1;
   }
   setEthnic();
}
document.querySelector("#rightbtn-e1").addEventListener("click", rightbEthnic);
function rightbEthnic() {
   if (e < ethnic.length - 1) {
      e++;
   } else {
      e = 0;
   }
   setEthnic();
}
document.querySelector("#cart-e1").addEventListener("click", cartEthnic1);
function cartEthnic1() {
   document.querySelector("#cart-e1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-e1").addEventListener("click", buyEthnic1);
function buyEthnic1() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-e1").textContent =
         "Total Price : " + "₹" + 332 * buyEthnic + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Boys Clothing- Ethnic wear2
var ethnic1 = [
   "Images/kid-e2.jpeg",
   "Images/kid-e2-2.jpeg",
   "Images/kid-e2-3.jpeg",
];
var e1 = 0;
document.ethnic2.src = "Images/kid-e2.jpeg";
function setEthnic1() {
   document.ethnic2.src = ethnic1[e1];
}
setInterval(function autoSlider1() {
   if (e1 < ethnic1.length - 1) {
      e1++;
   } else {
      e1 = 0;
   }
   setEthnic1();
}, 10000);
document.querySelector("#leftbtn-e2").addEventListener("click", leftbEthnic1);
function leftbEthnic1() {
   if (e1 > 0) {
      e1--;
   } else {
      e1 = ethnic1.length - 1;
   }
   setEthnic1();
}
document.querySelector("#rightbtn-e2").addEventListener("click", rightbEthnic1);
function rightbEthnic1() {
   if (e1 < ethnic1.length - 1) {
      e1++;
   } else {
      e1 = 0;
   }
   setEthnic1();
}
document.querySelector("#cart-e2").addEventListener("click", cartEthnic2);
function cartEthnic2() {
   document.querySelector("#cart-e2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-e2").addEventListener("click", buyEthnic2);
function buyEthnic2() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-e2").textContent =
         "Total Price : " + "₹" + 284 * buyEthnic + "  only";
      document.querySelector("#total-e2").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Ethnic wear 2)
document.querySelector("#e2-type1").addEventListener("mouseover", e2Type1);
function e2Type1() {
   document.ethnic2.src = "Images/kid-e2.jpeg";
   document.querySelector("#color-name").innerHTML = " Color: Blue/White";
}
document.querySelector("#e2-type2").addEventListener("mouseover", e2Type2);
function e2Type2() {
   document.ethnic2.src = "Images/kid-e2-4.jpeg";
   document.querySelector("#color-name").innerHTML = " Color: Maroon/White";
}
// -mouseout from color images(Ethnic wear 2)
document.querySelector("#e2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   e2Type1();
}
//Boys Clothing- Ethnic wear3
var ethnic2 = [
   "Images/kid-e3.jpeg",
   "Images/kid-e3-2.jpeg",
   "Images/kid-e3-3.jpeg",
];
var e2 = 0;
document.ethnic3.src = "Images/kid-e3.jpeg";
function setEthnic2() {
   document.ethnic3.src = ethnic2[e2];
}
setInterval(function autoSlider2() {
   if (e2 < ethnic2.length - 1) {
      e2++;
   } else {
      e2 = 0;
   }
   setEthnic2();
}, 10000);
document.querySelector("#leftbtn-e3").addEventListener("click", leftbEthnic2);
function leftbEthnic2() {
   if (e2 > 0) {
      e2--;
   } else {
      e2 = ethnic2.length - 1;
   }
   setEthnic2();
}
document.querySelector("#rightbtn-e3").addEventListener("click", rightbEthnic2);
function rightbEthnic2() {
   if (e2 < ethnic2.length - 1) {
      e2++;
   } else {
      e2 = 0;
   }
   setEthnic2();
}
document.querySelector("#cart-e3").addEventListener("click", cartEthnic3);
function cartEthnic3() {
   document.querySelector("#cart-e3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-e3").addEventListener("click", buyEthnic3);
function buyEthnic3() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-e3").textContent =
         "Total Price : " + "₹" + 339 * buyEthnic + "  only";
      document.querySelector("#total-e3").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Ethnic wear 3)
document.querySelector("#e3-type1").addEventListener("mouseover", e3Type1);
function e3Type1() {
   document.ethnic3.src = "Images/kid-e3.jpeg";
   document.querySelector("#color-name1").innerHTML =
      " Color: Black/Light.Grey   ";
}
document.querySelector("#e3-type2").addEventListener("mouseover", e3Type2);
function e3Type2() {
   document.ethnic3.src = "Images/kid-e3-4.jpeg";
   document.querySelector("#color-name1").innerHTML = " Color: Red/White";
}
document.querySelector("#e3-type3").addEventListener("mouseover", e3Type3);
function e3Type3() {
   document.ethnic3.src = "Images/kid-e3-5.jpeg";
   document.querySelector("#color-name1").innerHTML = " Color: Grey/White";
}
// -mouseout from color images(Ethnic wear 3)
document.querySelector("#e3-type2").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   e3Type1();
}
document.querySelector("#e3-type3").addEventListener("mouseout", type3Mout1);
//Boys Clothing- Ethnic wear4
var ethnic3 = [
   "Images/kid-e4.jpeg",
   "Images/kid-e4-2.jpeg",
   "Images/kid-e4-3.jpeg",
];
var e3 = 0;
document.ethnic4.src = "Images/kid-e4.jpeg";
function setEthnic3() {
   document.ethnic4.src = ethnic3[e3];
}
setInterval(function autoSlider3() {
   if (e3 < ethnic3.length - 1) {
      e3++;
   } else {
      e3 = 0;
   }
   setEthnic3();
}, 10000);
document.querySelector("#leftbtn-e4").addEventListener("click", leftbEthnic3);
function leftbEthnic3() {
   if (e3 > 0) {
      e3--;
   } else {
      e3 = ethnic3.length - 1;
   }
   setEthnic3();
}
document.querySelector("#rightbtn-e4").addEventListener("click", rightbEthnic3);
function rightbEthnic3() {
   if (e3 < ethnic3.length - 1) {
      e3++;
   } else {
      e3 = 0;
   }
   setEthnic3();
}
document.querySelector("#cart-e4").addEventListener("click", cartEthnic4);
function cartEthnic4() {
   document.querySelector("#cart-e4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-e4").addEventListener("click", buyEthnic4);
function buyEthnic4() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-e4").textContent =
         "Total Price : " + "₹" + 314 * buyEthnic + "  only";
      document.querySelector("#total-e4").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Ethnic wear 4)
document.querySelector("#e4-type1").addEventListener("mouseover", e4Type1);
function e4Type1() {
   document.ethnic4.src = "Images/kid-e4-4.jpeg";
   document.querySelector("#color-name2").innerHTML = " Color: Gold   ";
}
document.querySelector("#e4-type2").addEventListener("mouseover", e4Type2);
function e4Type2() {
   document.ethnic4.src = "Images/kid-e4.jpeg";
   document.querySelector("#color-name2").innerHTML = " Color: Red";
}
// -mouseout from color images(Ethnic wear 4)
document.querySelector("#e4-type1").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   e4Type2();
}
//Boys Clothing- Ethnic wear 5
var ethnic4 = [
   "Images/kid-e5.jpeg",
   "Images/kid-e5-2.jpeg",
   "Images/kid-e5-3.jpeg",
];
var e4 = 0;
document.ethnic5.src = "Images/kid-e5.jpeg";
function setEthnic4() {
   document.ethnic5.src = ethnic4[e4];
}
setInterval(function autoSlider4() {
   if (e4 < ethnic4.length - 1) {
      e4++;
   } else {
      e4 = 0;
   }
   setEthnic4();
}, 10000);
document.querySelector("#leftbtn-e5").addEventListener("click", leftbEthnic4);
function leftbEthnic4() {
   if (e4 > 0) {
      e4--;
   } else {
      e4 = ethnic4.length - 1;
   }
   setEthnic4();
}
document.querySelector("#rightbtn-e5").addEventListener("click", rightbEthnic4);
function rightbEthnic4() {
   if (e4 < ethnic4.length - 1) {
      e4++;
   } else {
      e4 = 0;
   }
   setEthnic4();
}
document.querySelector("#cart-e5").addEventListener("click", cartEthnic5);
function cartEthnic5() {
   document.querySelector("#cart-e5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-e5").addEventListener("click", buyEthnic5);
function buyEthnic5() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-e5").textContent =
         "Total Price : " + "₹" + 679 * buyEthnic + "  only";
      document.querySelector("#total-e5").style.marginTop = "33px";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Ethnic wear 5)
document.querySelector("#e5-type1").addEventListener("mouseover", e5Type1);
function e5Type1() {
   document.ethnic5.src = "Images/kid-e5.jpeg";
   document.querySelector("#color-name3").innerHTML = " Color: Green   ";
}
document.querySelector("#e5-type2").addEventListener("mouseover", e5Type2);
function e5Type2() {
   document.ethnic5.src = "Images/kid-e5-4.jpeg";
   document.querySelector("#color-name3").innerHTML = " Color: Black  ";
}
document.querySelector("#e5-type3").addEventListener("mouseover", e5Type3);
function e5Type3() {
   document.ethnic5.src = "Images/kid-e5-5.jpeg";
   document.querySelector("#color-name3").innerHTML = " Color: Blue  ";
}
document.querySelector("#e5-type4").addEventListener("mouseover", e5Type4);
function e5Type4() {
   document.ethnic5.src = "Images/kid-e5-6.jpeg";
   document.querySelector("#color-name3").innerHTML = " Color: Grey  ";
}
document.querySelector("#e5-type5").addEventListener("mouseover", e5Type5);
function e5Type5() {
   document.ethnic5.src = "Images/kid-e5-7.jpeg";
   document.querySelector("#color-name3").innerHTML = " Color: Red ";
}
// -mouseout from color images(Ethnic wear 5)
document.querySelector("#e5-type2").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   e5Type1();
}
document.querySelector("#e5-type3").addEventListener("mouseout", type5Mout1);
document.querySelector("#e5-type4").addEventListener("mouseout", type5Mout1);
document.querySelector("#e5-type5").addEventListener("mouseout", type5Mout1);
//Boys Clothing- Ethnic wear 6
var ethnic5 = [
   "Images/kid-e6.jpeg",
   "Images/kid-e6-2.jpeg",
   "Images/kid-e6-3.jpeg",
];
var e5 = 0;
document.ethnic6.src = "Images/kid-e6.jpeg";
function setEthnic5() {
   document.ethnic6.src = ethnic5[e5];
}
setInterval(function autoSlider5() {
   if (e5 < ethnic5.length - 1) {
      e5++;
   } else {
      e5 = 0;
   }
   setEthnic5();
}, 10000);
document.querySelector("#leftbtn-e6").addEventListener("click", leftbEthnic5);
function leftbEthnic5() {
   if (e5 > 0) {
      e5--;
   } else {
      e5 = ethnic5.length - 1;
   }
   setEthnic5();
}
document.querySelector("#rightbtn-e6").addEventListener("click", rightbEthnic5);
function rightbEthnic5() {
   if (e5 < ethnic5.length - 1) {
      e5++;
   } else {
      e5 = 0;
   }
   setEthnic5();
}
document.querySelector("#cart-e6").addEventListener("click", cartEthnic6);
function cartEthnic6() {
   document.querySelector("#cart-e6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-e6").addEventListener("click", buyEthnic6);
function buyEthnic6() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-e6").textContent =
         "Total Price : " + "₹" + 679 * buyEthnic + "  only";
      document.querySelector("#total-e6").style.marginTop = "33px";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Ethnic wear 6)
document.querySelector("#e6-type1").addEventListener("mouseover", e6Type1);
function e6Type1() {
   document.ethnic6.src = "Images/kid-e6.jpeg";
   document.querySelector("#color-name4").innerHTML = " Color: Blue  ";
}
document.querySelector("#e6-type2").addEventListener("mouseover", e6Type2);
function e6Type2() {
   document.ethnic6.src = "Images/kid-e6-4.jpeg";
   document.querySelector("#color-name4").innerHTML = " Color: Black  ";
}
document.querySelector("#e6-type3").addEventListener("mouseover", e6Type3);
function e6Type3() {
   document.ethnic6.src = "Images/kid-e6-5.jpeg";
   document.querySelector("#color-name4").innerHTML = " Color: Red  ";
}
// -mouseout from color images(Ethnic wear 6)
document.querySelector("#e6-type2").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   e6Type1();
}
document.querySelector("#e6-type3").addEventListener("mouseout", type6Mout1);
//Boys Clothing- Ethnic wear 7
var ethnic6 = [
   "Images/kid-e7.jpeg",
   "Images/kid-e7-2.jpeg",
   "Images/kid-e7-3.jpeg",
];
var e6 = 0;
document.ethnic7.src = "Images/kid-e7.jpeg";
function setEthnic6() {
   document.ethnic7.src = ethnic6[e6];
}
setInterval(function autoSlider6() {
   if (e6 < ethnic6.length - 1) {
      e6++;
   } else {
      e6 = 0;
   }
   setEthnic6();
}, 10000);
document.querySelector("#leftbtn-e7").addEventListener("click", leftbEthnic6);
function leftbEthnic6() {
   if (e6 > 0) {
      e6--;
   } else {
      e6 = ethnic6.length - 1;
   }
   setEthnic6();
}
document.querySelector("#rightbtn-e7").addEventListener("click", rightbEthnic6);
function rightbEthnic6() {
   if (e6 < ethnic6.length - 1) {
      e6++;
   } else {
      e6 = 0;
   }
   setEthnic6();
}
document.querySelector("#cart-e7").addEventListener("click", cartEthnic7);
function cartEthnic7() {
   document.querySelector("#cart-e7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-e7").addEventListener("click", buyEthnic7);
function buyEthnic7() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-e7").textContent =
         "Total Price : " + "₹" + 261 * buyEthnic + "  only";
      document.querySelector("#total-e7").style.marginTop = "23px";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Boys Clothing- Ethnic wear 8
var ethnic7 = [
   "Images/kid-e8.jpeg",
   "Images/kid-e8-2.jpeg",
   "Images/kid-e8-3.jpeg",
];
var e7 = 0;
document.ethnic8.src = "Images/kid-e8.jpeg";
function setEthnic7() {
   document.ethnic8.src = ethnic7[e7];
}
setInterval(function autoSlider7() {
   if (e7 < ethnic7.length - 1) {
      e7++;
   } else {
      e7 = 0;
   }
   setEthnic7();
}, 10000);
document.querySelector("#leftbtn-e8").addEventListener("click", leftbEthnic7);
function leftbEthnic7() {
   if (e7 > 0) {
      e7--;
   } else {
      e7 = ethnic7.length - 1;
   }
   setEthnic7();
}
document.querySelector("#rightbtn-e8").addEventListener("click", rightbEthnic7);
function rightbEthnic7() {
   if (e7 < ethnic7.length - 1) {
      e7++;
   } else {
      e7 = 0;
   }
   setEthnic7();
}
document.querySelector("#cart-e8").addEventListener("click", cartEthnic8);
function cartEthnic8() {
   document.querySelector("#cart-e8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-e8").addEventListener("click", buyEthnic8);
function buyEthnic8() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-e8").textContent =
         "Total Price : " + "₹" + 629 * buyEthnic + "  only";
      document.querySelector("#total-e8").style.marginTop = "23px";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
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
