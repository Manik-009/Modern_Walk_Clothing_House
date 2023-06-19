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
// Ethnic & Party Wears- Lehnga Choli 1
var lehnga = [
   "Images/women-lc1.jpg",
   "Images/women-lc1-2.jpg",
   "Images/women-lc1-3.jpg",
   "Images/women-lc1-4.jpg",
];
var l = 0;
document.lehnga1.src = "Images/women-lc1.jpg";
function setLehnga() {
   document.lehnga1.src = lehnga[l];
}
setInterval(function autoSlider() {
   if (l < lehnga.length - 1) {
      l++;
   } else {
      l = 0;
   }
   setLehnga();
}, 10000);
document.querySelector("#leftbtn-l1").addEventListener("click", leftbLehnga);
function leftbLehnga() {
   if (l > 0) {
      l--;
   } else {
      l = lehnga.length - 1;
   }
   setLehnga();
}
document.querySelector("#rightbtn-l1").addEventListener("click", rightbLehnga);
function rightbLehnga() {
   if (l < lehnga.length - 1) {
      l++;
   } else {
      l = 0;
   }
   setLehnga();
}
document.querySelector("#cart-l1").addEventListener("click", cartl1);
function cartl1() {
   document.querySelector("#cart-l1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-l1").addEventListener("click", buyl1);
function buyl1() {
   const buySaree = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySaree <= 5 && buySaree > 0) {
      document.querySelector("#total-l1").textContent =
         "Total Price : " + "₹" + 2399 * buySaree + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySaree === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
// Ethnic & Party Wears- Lehnga Choli 2
var lehnga1 = [
   "Images/women-lc2.jpg",
   "Images/women-lc2-2.jpg",
   "Images/women-lc2-3.jpg",
   "Images/women-lc2-4.jpg",
];
var l1 = 0;
document.lehnga2.src = "Images/women-lc2.jpg";
function setLehnga1() {
   document.lehnga2.src = lehnga1[l1];
}
setInterval(function autoSlider1() {
   if (l1 < lehnga1.length - 1) {
      l1++;
   } else {
      l1 = 0;
   }
   setLehnga1();
}, 10000);
document.querySelector("#leftbtn-l2").addEventListener("click", leftbLehnga1);
function leftbLehnga1() {
   if (l1 > 0) {
      l1--;
   } else {
      l1 = lehnga1.length - 1;
   }
   setLehnga1();
}
document.querySelector("#rightbtn-l2").addEventListener("click", rightbLehnga1);
function rightbLehnga1() {
   if (l1 < lehnga1.length - 1) {
      l1++;
   } else {
      l1 = 0;
   }
   setLehnga1();
}
document.querySelector("#cart-l2").addEventListener("click", cartl2);
function cartl2() {
   document.querySelector("#cart-l2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-l2").addEventListener("click", buyl2);
function buyl2() {
   const buyLehnga = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyLehnga <= 5 && buyLehnga > 0) {
      document.querySelector("#total-l2").textContent =
         "Total Price : " + "₹" + 549 * buyLehnga + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLehnga === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
// Ethnic & Party Wears- Lehnga Choli 3
var lehnga2 = [
   "Images/women-lc3.jpg",
   "Images/women-lc3-2.jpg",
   "Images/women-lc3-3.jpg",
   "Images/women-lc3-4.jpg",
];
var l2 = 0;
document.lehnga3.src = "Images/women-lc3.jpg";
function setLehnga2() {
   document.lehnga3.src = lehnga2[l2];
}
setInterval(function autoSlider2() {
   if (l2 < lehnga2.length - 1) {
      l2++;
   } else {
      l2 = 0;
   }
   setLehnga2();
}, 10000);
document.querySelector("#leftbtn-l3").addEventListener("click", leftbLehnga2);
function leftbLehnga2() {
   if (l2 > 0) {
      l2--;
   } else {
      l2 = lehnga2.length - 1;
   }
   setLehnga2();
}
document.querySelector("#rightbtn-l3").addEventListener("click", rightbLehnga2);
function rightbLehnga2() {
   if (l2 < lehnga2.length - 1) {
      l2++;
   } else {
      l2 = 0;
   }
   setLehnga2();
}
document.querySelector("#cart-l3").addEventListener("click", cartl3);
function cartl3() {
   document.querySelector("#cart-l3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-l3").addEventListener("click", buyl3);
function buyl3() {
   const buyLehnga = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyLehnga <= 5 && buyLehnga > 0) {
      document.querySelector("#total-l3").textContent =
         "Total Price : " + "₹" + 1699 * buyLehnga + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLehnga === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
// Ethnic & Party Wears- Lehnga Choli 4
var lehnga3 = [
   "Images/women-lc4.jpg",
   "Images/women-lc4-2.jpg",
   "Images/women-lc4-3.jpg",
   "Images/women-lc4-4.jpg",
];
var l3 = 0;
document.lehnga4.src = "Images/women-lc4.jpg";
function setLehnga3() {
   document.lehnga4.src = lehnga3[l3];
}
setInterval(function autoSlider3() {
   if (l3 < lehnga3.length - 1) {
      l3++;
   } else {
      l3 = 0;
   }
   setLehnga3();
}, 10000);
document.querySelector("#leftbtn-l4").addEventListener("click", leftbLehnga3);
function leftbLehnga3() {
   if (l3 > 0) {
      l3--;
   } else {
      l3 = lehnga3.length - 1;
   }
   setLehnga3();
}
document.querySelector("#rightbtn-l4").addEventListener("click", rightbLehnga3);
function rightbLehnga3() {
   if (l3 < lehnga3.length - 1) {
      l3++;
   } else {
      l3 = 0;
   }
   setLehnga3();
}
document.querySelector("#cart-l4").addEventListener("click", cartl4);
function cartl4() {
   document.querySelector("#cart-l4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-l4").addEventListener("click", buyl4);
function buyl4() {
   const buyLehnga = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyLehnga <= 5 && buyLehnga > 0) {
      document.querySelector("#total-l4").textContent =
         "Total Price : " + "₹" + 649 * buyLehnga + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLehnga === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
// Ethnic & Party Wears- Lehnga Choli 5
var lehnga4 = [
   "Images/women-lc5.jpg",
   "Images/women-lc5-2.jpg",
   "Images/women-lc5-3.jpg",
   "Images/women-lc5-4.jpg",
];
var l4 = 0;
document.lehnga5.src = "Images/women-lc5.jpg";
function setLehnga4() {
   document.lehnga5.src = lehnga4[l4];
}
setInterval(function autoSlider4() {
   if (l4 < lehnga4.length - 1) {
      l4++;
   } else {
      l4 = 0;
   }
   setLehnga4();
}, 10000);
document.querySelector("#leftbtn-l5").addEventListener("click", leftbLehnga4);
function leftbLehnga4() {
   if (l4 > 0) {
      l4--;
   } else {
      l4 = lehnga4.length - 1;
   }
   setLehnga4();
}
document.querySelector("#rightbtn-l5").addEventListener("click", rightbLehnga4);
function rightbLehnga4() {
   if (l4 < lehnga4.length - 1) {
      l4++;
   } else {
      l4 = 0;
   }
   setLehnga4();
}
document.querySelector("#cart-l5").addEventListener("click", cartl5);
function cartl5() {
   document.querySelector("#cart-l5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-l5").addEventListener("click", buyl5);
function buyl5() {
   const buyLehnga = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyLehnga <= 5 && buyLehnga > 0) {
      document.querySelector("#total-l5").textContent =
         "Total Price : " + "₹" + 629 * buyLehnga + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLehnga === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
// Ethnic & Party Wears- Lehnga Choli 6
var lehnga5 = [
   "Images/women-lc6.jpg",
   "Images/women-lc6-2.jpg",
   "Images/women-lc6-3.jpg",
   "Images/women-lc6-4.jpg",
];
var l5 = 0;
document.lehnga6.src = "Images/women-lc6.jpg";
function setLehnga5() {
   document.lehnga6.src = lehnga5[l5];
}
setInterval(function autoSlider5() {
   if (l5 < lehnga5.length - 1) {
      l5++;
   } else {
      l5 = 0;
   }
   setLehnga5();
}, 10000);
document.querySelector("#leftbtn-l6").addEventListener("click", leftbLehnga5);
function leftbLehnga5() {
   if (l5 > 0) {
      l5--;
   } else {
      l5 = lehnga5.length - 1;
   }
   setLehnga5();
}
document.querySelector("#rightbtn-l6").addEventListener("click", rightbLehnga5);
function rightbLehnga5() {
   if (l5 < lehnga5.length - 1) {
      l5++;
   } else {
      l5 = 0;
   }
   setLehnga5();
}
document.querySelector("#cart-l6").addEventListener("click", cartl6);
function cartl6() {
   document.querySelector("#cart-l6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-l6").addEventListener("click", buyl6);
function buyl6() {
   const buyLehnga = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyLehnga <= 5 && buyLehnga > 0) {
      document.querySelector("#total-l6").textContent =
         "Total Price : " + "₹" + 1249 * buyLehnga + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLehnga === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
// Ethnic & Party Wears- Lehnga Choli 7
var lehnga6 = [
   "Images/women-lc7.jpg",
   "Images/women-lc7-2.jpg",
   "Images/women-lc7-3.jpg",
   "Images/women-lc7-4.jpg",
];
var l6 = 0;
document.lehnga7.src = "Images/women-lc7.jpg";
function setLehnga6() {
   document.lehnga7.src = lehnga6[l6];
}
setInterval(function autoSlider6() {
   if (l6 < lehnga6.length - 1) {
      l6++;
   } else {
      l6 = 0;
   }
   setLehnga6();
}, 10000);
document.querySelector("#leftbtn-l7").addEventListener("click", leftbLehnga6);
function leftbLehnga6() {
   if (l6 > 0) {
      l6--;
   } else {
      l6 = lehnga6.length - 1;
   }
   setLehnga6();
}
document.querySelector("#rightbtn-l7").addEventListener("click", rightbLehnga6);
function rightbLehnga6() {
   if (l6 < lehnga6.length - 1) {
      l6++;
   } else {
      l6 = 0;
   }
   setLehnga6();
}
document.querySelector("#cart-l7").addEventListener("click", cartl7);
function cartl7() {
   document.querySelector("#cart-l7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-l7").addEventListener("click", buyl7);
function buyl7() {
   const buyLehnga = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyLehnga <= 5 && buyLehnga > 0) {
      document.querySelector("#total-l7").textContent =
         "Total Price : " + "₹" + 359 * buyLehnga + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLehnga === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
// Ethnic & Party Wears- Lehnga Choli 8
var lehnga7 = [
   "Images/women-lc8.jpg",
   "Images/women-lc8-2.jpg",
   "Images/women-lc8-3.jpg",
   "Images/women-lc8-4.jpg",
];
var l7 = 0;
document.lehnga8.src = "Images/women-lc8.jpg";
function setLehnga7() {
   document.lehnga8.src = lehnga7[l7];
}
setInterval(function autoSlider7() {
   if (l7 < lehnga7.length - 1) {
      l7++;
   } else {
      l7 = 0;
   }
   setLehnga7();
}, 10000);
document.querySelector("#leftbtn-l8").addEventListener("click", leftbLehnga7);
function leftbLehnga7() {
   if (l7 > 0) {
      l7--;
   } else {
      l7 = lehnga7.length - 1;
   }
   setLehnga7();
}
document.querySelector("#rightbtn-l8").addEventListener("click", rightbLehnga7);
function rightbLehnga7() {
   if (l7 < lehnga7.length - 1) {
      l7++;
   } else {
      l7 = 0;
   }
   setLehnga7();
}
document.querySelector("#cart-l8").addEventListener("click", cartl8);
function cartl8() {
   document.querySelector("#cart-l8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-l8").addEventListener("click", buyl8);
function buyl8() {
   const buyLehnga = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyLehnga <= 5 && buyLehnga > 0) {
      document.querySelector("#total-l8").textContent =
         "Total Price : " + "₹" + 1149 * buyLehnga + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLehnga === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
// Ethnic & Party Wears- Lehnga Choli 9
var lehnga8 = [
   "Images/women-lc9.jpg",
   "Images/women-lc9-2.jpg",
   "Images/women-lc9-3.jpg",
   "Images/women-lc9-4.jpg",
];
var l8 = 0;
document.lehnga9.src = "Images/women-lc9.jpg";
function setLehnga8() {
   document.lehnga9.src = lehnga8[l8];
}
setInterval(function autoSlider8() {
   if (l8 < lehnga8.length - 1) {
      l8++;
   } else {
      l8 = 0;
   }
   setLehnga8();
}, 10000);
document.querySelector("#leftbtn-l9").addEventListener("click", leftbLehnga8);
function leftbLehnga8() {
   if (l8 > 0) {
      l8--;
   } else {
      l8 = lehnga8.length - 1;
   }
   setLehnga8();
}
document.querySelector("#rightbtn-l9").addEventListener("click", rightbLehnga8);
function rightbLehnga8() {
   if (l8 < lehnga8.length - 1) {
      l8++;
   } else {
      l8 = 0;
   }
   setLehnga8();
}
document.querySelector("#cart-l9").addEventListener("click", cartl9);
function cartl9() {
   document.querySelector("#cart-l9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-l9").addEventListener("click", buyl9);
function buyl9() {
   const buyLehnga = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyLehnga <= 5 && buyLehnga > 0) {
      document.querySelector("#total-l9").textContent =
         "Total Price : " + "₹" + 875 * buyLehnga + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLehnga === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
// Ethnic & Party Wears- Lehnga Choli 10
var lehnga9 = [
   "Images/women-lc10.jpg",
   "Images/women-lc10-2.jpg",
   "Images/women-lc10-3.jpg",
   "Images/women-lc10-4.jpg",
];
var l9 = 0;
document.lehnga10.src = "Images/women-lc10.jpg";
function setLehnga9() {
   document.lehnga10.src = lehnga9[l9];
}
setInterval(function autoSlider9() {
   if (l9 < lehnga9.length - 1) {
      l9++;
   } else {
      l9 = 0;
   }
   setLehnga9();
}, 10000);
document.querySelector("#leftbtn-l10").addEventListener("click", leftbLehnga9);
function leftbLehnga9() {
   if (l9 > 0) {
      l9--;
   } else {
      l9 = lehnga9.length - 1;
   }
   setLehnga9();
}
document
   .querySelector("#rightbtn-l10")
   .addEventListener("click", rightbLehnga9);
function rightbLehnga9() {
   if (l9 < lehnga9.length - 1) {
      l9++;
   } else {
      l9 = 0;
   }
   setLehnga9();
}
document.querySelector("#cart-l10").addEventListener("click", cartl10);
function cartl10() {
   document.querySelector("#cart-l10").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-l10").addEventListener("click", buyl10);
function buyl10() {
   const buyLehnga = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyLehnga <= 5 && buyLehnga > 0) {
      document.querySelector("#total-l10").textContent =
         "Total Price : " + "₹" + 1499 * buyLehnga + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLehnga === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
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
