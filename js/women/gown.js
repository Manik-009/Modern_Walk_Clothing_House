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
// Ethnic & Party Wears- Gown 1
var gown = [
   "Images/women-g1.jpg",
   "Images/women-g1-2.jpg",
   "Images/women-g1-3.jpg",
   "Images/women-g1-4.jpg",
];
var g = 0;
document.gown1.src = "Images/women-g1.jpg";
function setGown() {
   document.gown1.src = gown[g];
}
setInterval(function autoSlider() {
   if (g < gown.length - 1) {
      g++;
   } else {
      g = 0;
   }
   setGown();
}, 10000);
document.querySelector("#leftbtn-g1").addEventListener("click", leftbGown);
function leftbGown() {
   if (g > 0) {
      g--;
   } else {
      g = gown.length - 1;
   }
   setGown();
}
document.querySelector("#rightbtn-g1").addEventListener("click", rightbGown);
function rightbGown() {
   if (g < gown.length - 1) {
      g++;
   } else {
      g = 0;
   }
   setGown();
}
document.querySelector("#cart-g1").addEventListener("click", cartg1);
function cartg1() {
   document.querySelector("#cart-g1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-g1").addEventListener("click", buyg1);
function buyg1() {
   const buyGown = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyGown <= 10 && buyGown > 0) {
      document.querySelector("#total-g1").textContent =
         "Total Price : " + "₹" + 849 * buyGown + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyGown === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Gown 1)
document.querySelector("#g1-type1").addEventListener("mouseover", g1Type1);
function g1Type1() {
   document.gown1.src = "Images/women-g1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Gold";
}
document.querySelector("#g1-type2").addEventListener("mouseover", g1Type2);
function g1Type2() {
   document.gown1.src = "Images/women-g1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Green";
}
document.querySelector("#g1-type3").addEventListener("mouseover", g1Type3);
function g1Type3() {
   document.gown1.src = "Images/women-g1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Sea Green";
}
document.querySelector("#g1-type4").addEventListener("mouseover", g1Type4);
function g1Type4() {
   document.gown1.src = "Images/women-g1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Pink";
}
document.querySelector("#g1-type5").addEventListener("mouseover", g1Type5);
function g1Type5() {
   document.gown1.src = "Images/women-g1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Red";
}
document.querySelector("#g1-type6").addEventListener("mouseover", g1Type6);
function g1Type6() {
   document.gown1.src = "Images/women-g1-9.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Silver";
}
document.querySelector("#g1-type7").addEventListener("mouseover", g1Type7);
function g1Type7() {
   document.gown1.src = "Images/women-g1-10.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Purple";
}
document.querySelector("#g1-type8").addEventListener("mouseover", g1Type8);
function g1Type8() {
   document.gown1.src = "Images/women-g1-11.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Blue";
}
document.querySelector("#g1-type9").addEventListener("mouseover", g1Type9);
function g1Type9() {
   document.gown1.src = "Images/women-g1-12.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black";
}
// -mouseout (Gown 1)
document.querySelector("#g1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   g1Type1();
}
document.querySelector("#g1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#g1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#g1-type5").addEventListener("mouseout", type1Mout1);
document.querySelector("#g1-type6").addEventListener("mouseout", type1Mout1);
document.querySelector("#g1-type7").addEventListener("mouseout", type1Mout1);
document.querySelector("#g1-type8").addEventListener("mouseout", type1Mout1);
document.querySelector("#g1-type9").addEventListener("mouseout", type1Mout1);
// Ethnic & Party Wears- Gown 2
var gown1 = [
   "Images/women-g2.jpg",
   "Images/women-g2-2.jpg",
   "Images/women-g2-3.jpg",
   "Images/women-g2-4.jpg",
];
var g1 = 0;
document.gown2.src = "Images/women-g2.jpg";
function setGown1() {
   document.gown2.src = gown1[g1];
}
setInterval(function autoSlider1() {
   if (g1 < gown1.length - 1) {
      g1++;
   } else {
      g1 = 0;
   }
   setGown1();
}, 10000);
document.querySelector("#leftbtn-g2").addEventListener("click", leftbGown1);
function leftbGown1() {
   if (g1 > 0) {
      g1--;
   } else {
      g1 = gown1.length - 1;
   }
   setGown1();
}
document.querySelector("#rightbtn-g2").addEventListener("click", rightbGown1);
function rightbGown1() {
   if (g1 < gown1.length - 1) {
      g1++;
   } else {
      g1 = 0;
   }
   setGown1();
}
document.querySelector("#cart-g2").addEventListener("click", cartg2);
function cartg2() {
   document.querySelector("#cart-g2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-g2").addEventListener("click", buyg2);
function buyg2() {
   const buyGown = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyGown <= 10 && buyGown > 0) {
      document.querySelector("#total-g2").textContent =
         "Total Price : " + "₹" + 499 * buyGown + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyGown === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Gown 2)
document.querySelector("#g2-type1").addEventListener("mouseover", g2Type1);
function g2Type1() {
   document.gown2.src = "Images/women-g2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Sea Blue";
}
document.querySelector("#g2-type2").addEventListener("mouseover", g2Type2);
function g2Type2() {
   document.gown2.src = "Images/women-g2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black";
}
document.querySelector("#g2-type3").addEventListener("mouseover", g2Type3);
function g2Type3() {
   document.gown2.src = "Images/women-g2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Navy Blue";
}
document.querySelector("#g2-type4").addEventListener("mouseover", g2Type4);
function g2Type4() {
   document.gown2.src = "Images/women-g2-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Pink";
}
document.querySelector("#g2-type5").addEventListener("mouseover", g2Type5);
function g2Type5() {
   document.gown2.src = "Images/women-g2-8.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Royal Blue";
}
// -mouseout (Gown 2)
document.querySelector("#g2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   g2Type1();
}
document.querySelector("#g2-type3").addEventListener("mouseout", type2Mout1);
document.querySelector("#g2-type4").addEventListener("mouseout", type2Mout1);
document.querySelector("#g2-type5").addEventListener("mouseout", type2Mout1);
// Ethnic & Party Wears- Gown 3
var gown2 = [
   "Images/women-g3.jpg",
   "Images/women-g3-2.jpg",
   "Images/women-g3-3.jpg",
   "Images/women-g3-4.jpg",
];
var g2 = 0;
document.gown3.src = "Images/women-g3.jpg";
function setGown2() {
   document.gown3.src = gown2[g2];
}
setInterval(function autoSlider2() {
   if (g2 < gown2.length - 1) {
      g2++;
   } else {
      g2 = 0;
   }
   setGown2();
}, 10000);
document.querySelector("#leftbtn-g3").addEventListener("click", leftbGown2);
function leftbGown2() {
   if (g2 > 0) {
      g2--;
   } else {
      g2 = gown2.length - 1;
   }
   setGown2();
}
document.querySelector("#rightbtn-g3").addEventListener("click", rightbGown2);
function rightbGown2() {
   if (g2 < gown2.length - 1) {
      g2++;
   } else {
      g2 = 0;
   }
   setGown2();
}
document.querySelector("#cart-g3").addEventListener("click", cartg3);
function cartg3() {
   document.querySelector("#cart-g3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-g3").addEventListener("click", buyg3);
function buyg3() {
   const buyGown = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyGown <= 10 && buyGown > 0) {
      document.querySelector("#total-g3").textContent =
         "Total Price : " + "₹" + 354 * buyGown + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyGown === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
// Ethnic & Party Wears- Gown 4
var gown3 = [
   "Images/women-g4.jpg",
   "Images/women-g4-2.jpg",
   "Images/women-g4-3.jpg",
   "Images/women-g4-4.jpg",
];
var g3 = 0;
document.gown4.src = "Images/women-g4.jpg";
function setGown3() {
   document.gown4.src = gown3[g3];
}
setInterval(function autoSlider3() {
   if (g3 < gown3.length - 1) {
      g3++;
   } else {
      g3 = 0;
   }
   setGown3();
}, 10000);
document.querySelector("#leftbtn-g4").addEventListener("click", leftbGown3);
function leftbGown3() {
   if (g3 > 0) {
      g3--;
   } else {
      g3 = gown3.length - 1;
   }
   setGown3();
}
document.querySelector("#rightbtn-g4").addEventListener("click", rightbGown3);
function rightbGown3() {
   if (g3 < gown3.length - 1) {
      g3++;
   } else {
      g3 = 0;
   }
   setGown3();
}
document.querySelector("#cart-g4").addEventListener("click", cartg4);
function cartg4() {
   document.querySelector("#cart-g4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-g4").addEventListener("click", buyg4);
function buyg4() {
   const buyGown = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyGown <= 10 && buyGown > 0) {
      document.querySelector("#total-g4").textContent =
         "Total Price : " + "₹" + 440 * buyGown + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyGown === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
// Ethnic & Party Wears- Gown 5
var gown4 = [
   "Images/women-g5.jpg",
   "Images/women-g5-2.jpg",
   "Images/women-g5-3.jpg",
   "Images/women-g5-4.jpg",
];
var g4 = 0;
document.gown5.src = "Images/women-g5.jpg";
function setGown4() {
   document.gown5.src = gown4[g4];
}
setInterval(function autoSlider4() {
   if (g4 < gown4.length - 1) {
      g4++;
   } else {
      g4 = 0;
   }
   setGown4();
}, 10000);
document.querySelector("#leftbtn-g5").addEventListener("click", leftbGown4);
function leftbGown4() {
   if (g4 > 0) {
      g4--;
   } else {
      g4 = gown4.length - 1;
   }
   setGown4();
}
document.querySelector("#rightbtn-g5").addEventListener("click", rightbGown4);
function rightbGown4() {
   if (g4 < gown4.length - 1) {
      g4++;
   } else {
      g4 = 0;
   }
   setGown4();
}
document.querySelector("#cart-g5").addEventListener("click", cartg5);
function cartg5() {
   document.querySelector("#cart-g5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-g5").addEventListener("click", buyg5);
function buyg5() {
   const buyGown = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyGown <= 10 && buyGown > 0) {
      document.querySelector("#total-g5").textContent =
         "Total Price : " + "₹" + 489 * buyGown + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyGown === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
// Ethnic & Party Wears- Gown 6
var gown5 = [
   "Images/women-g6.jpg",
   "Images/women-g6-2.jpg",
   "Images/women-g6-3.jpg",
   "Images/women-g6-4.jpg",
];
var g5 = 0;
document.gown6.src = "Images/women-g6.jpg";
function setGown5() {
   document.gown6.src = gown5[g5];
}
setInterval(function autoSlider5() {
   if (g5 < gown5.length - 1) {
      g5++;
   } else {
      g5 = 0;
   }
   setGown5();
}, 10000);
document.querySelector("#leftbtn-g6").addEventListener("click", leftbGown5);
function leftbGown5() {
   if (g5 > 0) {
      g5--;
   } else {
      g5 = gown5.length - 1;
   }
   setGown5();
}
document.querySelector("#rightbtn-g6").addEventListener("click", rightbGown5);
function rightbGown5() {
   if (g5 < gown5.length - 1) {
      g5++;
   } else {
      g5 = 0;
   }
   setGown5();
}
document.querySelector("#cart-g6").addEventListener("click", cartg6);
function cartg6() {
   document.querySelector("#cart-g6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-g6").addEventListener("click", buyg6);
function buyg6() {
   const buyGown = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyGown <= 10 && buyGown > 0) {
      document.querySelector("#total-g6").textContent =
         "Total Price : " + "₹" + 699 * buyGown + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyGown === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
// Ethnic & Party Wears- Gown 7
var gown6 = [
   "Images/women-g7.jpg",
   "Images/women-g7-2.jpg",
   "Images/women-g7-3.jpg",
   "Images/women-g7-4.jpg",
];
var g6 = 0;
document.gown7.src = "Images/women-g7.jpg";
function setGown6() {
   document.gown7.src = gown6[g6];
}
setInterval(function autoSlider6() {
   if (g6 < gown6.length - 1) {
      g6++;
   } else {
      g6 = 0;
   }
   setGown6();
}, 10000);
document.querySelector("#leftbtn-g7").addEventListener("click", leftbGown6);
function leftbGown6() {
   if (g6 > 0) {
      g6--;
   } else {
      g6 = gown6.length - 1;
   }
   setGown6();
}
document.querySelector("#rightbtn-g7").addEventListener("click", rightbGown6);
function rightbGown6() {
   if (g6 < gown6.length - 1) {
      g6++;
   } else {
      g6 = 0;
   }
   setGown6();
}
document.querySelector("#cart-g7").addEventListener("click", cartg7);
function cartg7() {
   document.querySelector("#cart-g7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-g7").addEventListener("click", buyg7);
function buyg7() {
   const buyGown = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyGown <= 10 && buyGown > 0) {
      document.querySelector("#total-g7").textContent =
         "Total Price : " + "₹" + 705 * buyGown + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyGown === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
// Ethnic & Party Wears- Gown 8
var gown7 = [
   "Images/women-g8.jpg",
   "Images/women-g8-2.jpg",
   "Images/women-g8-3.jpg",
   "Images/women-g8-4.jpg",
];
var g7 = 0;
document.gown8.src = "Images/women-g8.jpg";
function setGown7() {
   document.gown8.src = gown7[g7];
}
setInterval(function autoSlider7() {
   if (g7 < gown7.length - 1) {
      g7++;
   } else {
      g7 = 0;
   }
   setGown7();
}, 10000);
document.querySelector("#leftbtn-g8").addEventListener("click", leftbGown7);
function leftbGown7() {
   if (g7 > 0) {
      g7--;
   } else {
      g7 = gown7.length - 1;
   }
   setGown7();
}
document.querySelector("#rightbtn-g8").addEventListener("click", rightbGown7);
function rightbGown7() {
   if (g7 < gown7.length - 1) {
      g7++;
   } else {
      g7 = 0;
   }
   setGown7();
}
document.querySelector("#cart-g8").addEventListener("click", cartg8);
function cartg8() {
   document.querySelector("#cart-g8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-g8").addEventListener("click", buyg8);
function buyg8() {
   const buyGown = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyGown <= 10 && buyGown > 0) {
      document.querySelector("#total-g8").textContent =
         "Total Price : " + "₹" + 1199 * buyGown + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyGown === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
// Ethnic & Party Wears- Gown 9
var gown8 = [
   "Images/women-g9.jpg",
   "Images/women-g9-2.jpg",
   "Images/women-g9-3.jpg",
   "Images/women-g9-4.jpg",
];
var g8 = 0;
document.gown9.src = "Images/women-g9.jpg";
function setGown8() {
   document.gown9.src = gown8[g8];
}
setInterval(function autoSlider8() {
   if (g8 < gown8.length - 1) {
      g8++;
   } else {
      g8 = 0;
   }
   setGown8();
}, 10000);
document.querySelector("#leftbtn-g9").addEventListener("click", leftbGown8);
function leftbGown8() {
   if (g8 > 0) {
      g8--;
   } else {
      g8 = gown8.length - 1;
   }
   setGown8();
}
document.querySelector("#rightbtn-g9").addEventListener("click", rightbGown8);
function rightbGown8() {
   if (g8 < gown8.length - 1) {
      g8++;
   } else {
      g8 = 0;
   }
   setGown8();
}
document.querySelector("#cart-g9").addEventListener("click", cartg9);
function cartg9() {
   document.querySelector("#cart-g9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-g9").addEventListener("click", buyg9);
function buyg9() {
   const buyGown = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyGown <= 10 && buyGown > 0) {
      document.querySelector("#total-g9").textContent =
         "Total Price : " + "₹" + 489 * buyGown + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyGown === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
// Ethnic & Party Wears- Gown 10
var gown9 = [
   "Images/women-g10.jpg",
   "Images/women-g10-2.jpg",
   "Images/women-g10-3.jpg",
   "Images/women-g10-4.jpg",
];
var g9 = 0;
document.gown10.src = "Images/women-g10.jpg";
function setGown9() {
   document.gown10.src = gown9[g9];
}
setInterval(function autoSlider9() {
   if (g9 < gown9.length - 1) {
      g9++;
   } else {
      g9 = 0;
   }
   setGown9();
}, 10000);
document.querySelector("#leftbtn-g10").addEventListener("click", leftbGown9);
function leftbGown9() {
   if (g9 > 0) {
      g9--;
   } else {
      g9 = gown9.length - 1;
   }
   setGown9();
}
document.querySelector("#rightbtn-g10").addEventListener("click", rightbGown9);
function rightbGown9() {
   if (g9 < gown9.length - 1) {
      g9++;
   } else {
      g9 = 0;
   }
   setGown9();
}
document.querySelector("#cart-g10").addEventListener("click", cartg10);
function cartg10() {
   document.querySelector("#cart-g10").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-g10").addEventListener("click", buyg10);
function buyg10() {
   const buyGown = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyGown <= 10 && buyGown > 0) {
      document.querySelector("#total-g10").textContent =
         "Total Price : " + "₹" + 1299 * buyGown + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyGown === 0) {
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
//item 10
const heart10 = () => {
   if (document.querySelector("#hrt10").innerHTML != "❤️") {
      document.querySelector("#hrt10").innerHTML = "❤️";
      document.querySelector("#hrt10").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#hrt10").innerHTML = "🤍";
      document.querySelector("#hrt10").style.animation = "none";
   }
};
document.querySelector("#hrt10").addEventListener("click", heart10);
