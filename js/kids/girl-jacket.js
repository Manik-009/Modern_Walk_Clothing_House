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
//Winter Wear Girls Clothing- Jacket 1
var jacket = [
   "Images/kid-gj1.jpg",
   "Images/kid-gj1-2.jpg",
   "Images/kid-gj1-3.jpg",
];
var j = 0;
document.jacket1.src = "Images/kid-gj1.jpg";
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
document.querySelector("#cart-j1").addEventListener("click", cartj1);
function cartj1() {
   document.querySelector("#cart-j1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j1").addEventListener("click", buyj1);
function buyj1() {
   const buyJacket = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJacket <= 10 && buyJacket > 0) {
      document.querySelector("#total-j1").textContent =
         "Total Price : " + "₹" + 439 * buyJacket + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJacket === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Jacket 1)
document.querySelector("#j1-type1").addEventListener("mouseover", j1Type1);
function j1Type1() {
   document.jacket1.src = "Images/kid-gj1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Turquoise";
}
document.querySelector("#j1-type2").addEventListener("mouseover", j1Type2);
function j1Type2() {
   document.jacket1.src = "Images/kid-gj1-4.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Navy Blue";
}
document.querySelector("#j1-type3").addEventListener("mouseover", j1Type3);
function j1Type3() {
   document.jacket1.src = "Images/kid-gj1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Pink";
}
// -mouseout (Jacket 1)
document.querySelector("#j1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   j1Type1();
}
document.querySelector("#j1-type3").addEventListener("mouseout", type1Mout1);
//Winter Wear Girls Clothing- Jacket 2
var jacket1 = [
   "Images/kid-gj2.jpg",
   "Images/kid-gj2-2.jpg",
   "Images/kid-gj2-3.jpg",
];
var j1 = 0;
document.jacket2.src = "Images/kid-gj2.jpg";
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
document.querySelector("#cart-j2").addEventListener("click", cartj2);
function cartj2() {
   document.querySelector("#cart-j2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j2").addEventListener("click", buyj2);
function buyj2() {
   const buyJacket = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJacket <= 10 && buyJacket > 0) {
      document.querySelector("#total-j2").textContent =
         "Total Price : " + "₹" + 1281 * buyJacket + "  only";
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
   document.jacket2.src = "Images/kid-gj2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Brown";
}
document.querySelector("#j2-type2").addEventListener("mouseover", j2Type2);
function j2Type2() {
   document.jacket2.src = "Images/kid-gj2-4.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Peach ";
}
document.querySelector("#j2-type3").addEventListener("mouseover", j2Type3);
function j2Type3() {
   document.jacket2.src = "Images/kid-gj2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Red";
}
// -mouseout (Jacket 2)
document.querySelector("#j2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   j2Type1();
}
document.querySelector("#j2-type3").addEventListener("mouseout", type2Mout1);
//Winter Wear Girls Clothing- Jacket 3
var jacket2 = [
   "Images/kid-gj3.jpg",
   "Images/kid-gj3-2.jpg",
   "Images/kid-gj3-3.jpg",
];
var j2 = 0;
document.jacket3.src = "Images/kid-gj3.jpg";
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
document.querySelector("#cart-j3").addEventListener("click", cartj3);
function cartj3() {
   document.querySelector("#cart-j3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j3").addEventListener("click", buyj3);
function buyj3() {
   const buyJacket = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJacket <= 10 && buyJacket > 0) {
      document.querySelector("#total-j3").textContent =
         "Total Price : " + "₹" + 949 * buyJacket + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJacket === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter Wear Girls Clothing- Jacket 4
var jacket3 = [
   "Images/kid-gj4.jpg",
   "Images/kid-gj4-2.jpg",
   "Images/kid-gj4-3.jpg",
];
var j3 = 0;
document.jacket4.src = "Images/kid-gj4.jpg";
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
document.querySelector("#cart-j4").addEventListener("click", cartj4);
function cartj4() {
   document.querySelector("#cart-j4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j4").addEventListener("click", buyj4);
function buyj4() {
   const buyJacket = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJacket <= 10 && buyJacket > 0) {
      document.querySelector("#total-j4").textContent =
         "Total Price : " + "₹" + 1238 * buyJacket + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJacket === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter Wear Girls Clothing- Jacket 5
var jacket4 = [
   "Images/kid-gj5.jpg",
   "Images/kid-gj5-2.jpg",
   "Images/kid-gj5-3.jpg",
];
var j4 = 0;
document.jacket5.src = "Images/kid-gj5.jpg";
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
document.querySelector("#cart-j5").addEventListener("click", cartj5);
function cartj5() {
   document.querySelector("#cart-j5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j5").addEventListener("click", buyj5);
function buyj5() {
   const buyJacket = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJacket <= 10 && buyJacket > 0) {
      document.querySelector("#total-j5").textContent =
         "Total Price : " + "₹" + 1367 * buyJacket + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJacket === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter Wear Girls Clothing- Jacket 6
var jacket5 = [
   "Images/kid-gj6.jpg",
   "Images/kid-gj6-2.jpg",
   "Images/kid-gj6-3.jpg",
];
var j5 = 0;
document.jacket6.src = "Images/kid-gj6.jpg";
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
   if (j5 < jacket5.length - 1) {
      j5++;
   } else {
      j5 = 0;
   }
   setJacket5();
}
document.querySelector("#cart-j6").addEventListener("click", cartj6);
function cartj6() {
   document.querySelector("#cart-j6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j6").addEventListener("click", buyj6);
function buyj6() {
   const buyJacket = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJacket <= 10 && buyJacket > 0) {
      document.querySelector("#total-j6").textContent =
         "Total Price : " + "₹" + 853 * buyJacket + "  only";
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
   document.jacket6.src = "Images/kid-gj6-4.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Pink";
}
document.querySelector("#j6-type2").addEventListener("mouseover", j6Type2);
function j6Type2() {
   document.jacket6.src = "Images/kid-gj6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Navy Blue ";
}
// -mouseout (Jacket 6)
document.querySelector("#j6-type1").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   j6Type2();
}
//Winter Wear Girls Clothing- Jacket 7
var jacket6 = [
   "Images/kid-gj7.jpg",
   "Images/kid-gj7-2.jpg",
   "Images/kid-gj7-3.jpg",
];
var j6 = 0;
document.jacket7.src = "Images/kid-gj7.jpg";
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
   if (j6 < jacket6.length - 1) {
      j6++;
   } else {
      j6 = 0;
   }
   setJacket6();
}
document.querySelector("#cart-j7").addEventListener("click", cartj7);
function cartj7() {
   document.querySelector("#cart-j7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j7").addEventListener("click", buyj7);
function buyj7() {
   const buyJacket = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJacket <= 10 && buyJacket > 0) {
      document.querySelector("#total-j7").textContent =
         "Total Price : " + "₹" + 919 * buyJacket + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJacket === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Jacket 7)
document.querySelector("#j7-type1").addEventListener("mouseover", j7Type1);
function j7Type1() {
   document.jacket7.src = "Images/kid-gj7-4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Navy Blue";
}
document.querySelector("#j7-type2").addEventListener("mouseover", j7Type2);
function j7Type2() {
   document.jacket7.src = "Images/kid-gj7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Olive Green";
}
// -mouseout (Jacket 7)
document.querySelector("#j7-type1").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   j7Type2();
}
// out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of stock");
}
//Winter Wear boys Clothing- Jacket 8
var jacket7 = [
   "Images/kid-gj8.jpg",
   "Images/kid-gj8-2.jpg",
   "Images/kid-gj8-3.jpg",
];
var j7 = 0;
document.jacket8.src = "Images/kid-gj8.jpg";
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
   if (j7 < jacket7.length - 1) {
      j7++;
   } else {
      j7 = 0;
   }
   setJacket7();
}
document.querySelector("#cart-j8").addEventListener("click", cartj8);
function cartj8() {
   document.querySelector("#cart-j8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j8").addEventListener("click", buyj8);
function buyj8() {
   const buyJacket = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJacket <= 10 && buyJacket > 0) {
      document.querySelector("#total-j8").textContent =
         "Total Price : " + "₹" + 1305 * buyJacket + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJacket === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter Wear Girls Clothing- Jacket 9
var jacket8 = [
   "Images/kid-gj9.jpg",
   "Images/kid-gj9-2.jpg",
   "Images/kid-gj9-3.jpg",
];
var j8 = 0;
document.jacket9.src = "Images/kid-gj9.jpg";
function setJacket8() {
   document.jacket9.src = jacket8[j8];
}
setInterval(function autoSlider8() {
   if (j8 < jacket8.length - 1) {
      j8++;
   } else {
      j8 = 0;
   }
   setJacket8();
}, 10000);
document.querySelector("#leftbtn-j9").addEventListener("click", leftbJacket8);
function leftbJacket8() {
   if (j8 > 0) {
      j8--;
   } else {
      j8 = jacket8.length - 1;
   }
   setJacket8();
}
document.querySelector("#rightbtn-j9").addEventListener("click", rightbJacket8);
function rightbJacket8() {
   if (j8 < jacket8.length - 1) {
      j8++;
   } else {
      j8 = 0;
   }
   setJacket8();
}
document.querySelector("#cart-j9").addEventListener("click", cartj9);
function cartj9() {
   document.querySelector("#cart-j9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j9").addEventListener("click", buyj9);
function buyj9() {
   const buyJacket = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJacket <= 10 && buyJacket > 0) {
      document.querySelector("#total-j9").textContent =
         "Total Price : " + "₹" + 1948 * buyJacket + "  only";
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
//item 9
const heart9 = () => {
   if (document.querySelector("#hrt9").innerHTML != "❤️") {
      document.querySelector("#hrt9").innerHTML = "❤️";
      document.querySelector("#hrt9").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#hrt9").innerHTML = "🤍";
      document.querySelector("#hrt9").style.animation = "none";
   }
};
document.querySelector("#hrt9").addEventListener("click", heart9);
