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
//Winter Wear -Sweater & Sweatshirt 1
var sweater = [
   "Images/women-sw1.jpg",
   "Images/women-sw1-2.jpg",
   "Images/women-sw1-3.jpg",
   "Images/women-sw1-4.jpg",
];
var s = 0;
document.sweater1.src = "Images/women-sw1.jpg";
function setSweater() {
   document.sweater1.src = sweater[s];
}
setInterval(function autoSlider() {
   if (s < sweater.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setSweater();
}, 10000);
document.querySelector("#leftbtn-s1").addEventListener("click", leftbSweater);
function leftbSweater() {
   if (s > 0) {
      s--;
   } else {
      s = sweater.length - 1;
   }
   setSweater();
}
document.querySelector("#rightbtn-s1").addEventListener("click", rightbSweater);
function rightbSweater() {
   if (s < sweater.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setSweater();
}
document.querySelector("#cart-s1").addEventListener("click", carts1);
function carts1() {
   document.querySelector("#cart-s1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s1").addEventListener("click", buys1);
function buys1() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-s1").textContent =
         "Total Price : " + "₹" + 899 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sweater 1)
document.querySelector("#s1-type1").addEventListener("mouseover", s1Type1);
function s1Type1() {
   document.sweater1.src = "Images/women-sw1.jpg";
   document.querySelector("#color-name").innerHTML =
      " Color: Denim Blue Melange";
}
document.querySelector("#s1-type2").addEventListener("mouseover", s1Type2);
function s1Type2() {
   document.sweater1.src = "Images/women-sw1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black Melange";
}
document.querySelector("#s1-type3").addEventListener("mouseover", s1Type3);
function s1Type3() {
   document.sweater1.src = "Images/women-sw1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Cream Melange";
}
document.querySelector("#s1-type4").addEventListener("mouseover", s1Type4);
function s1Type4() {
   document.sweater1.src = "Images/women-sw1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Grey Melange";
}
document.querySelector("#s1-type5").addEventListener("mouseover", s1Type5);
function s1Type5() {
   document.sweater1.src = "Images/women-sw1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Red Melange";
}
// -mouseout (Sweater 1)
document.querySelector("#s1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   s1Type1();
}
document.querySelector("#s1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type5").addEventListener("mouseout", type1Mout1);
//Winter Wear -Sweater & Sweatshirt 2
var sweater1 = [
   "Images/women-sw2.jpg",
   "Images/women-sw2-2.jpg",
   "Images/women-sw2-3.jpg",
   "Images/women-sw2-4.jpg",
];
var s1 = 0;
document.sweater2.src = "Images/women-sw2.jpg";
function setSweater1() {
   document.sweater2.src = sweater1[s1];
}
setInterval(function autoSlider1() {
   if (s1 < sweater1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setSweater1();
}, 10000);
document.querySelector("#leftbtn-s2").addEventListener("click", leftbSweater1);
function leftbSweater1() {
   if (s1 > 0) {
      s1--;
   } else {
      s1 = sweater1.length - 1;
   }
   setSweater1();
}
document
   .querySelector("#rightbtn-s2")
   .addEventListener("click", rightbSweater1);
function rightbSweater1() {
   if (s1 < sweater1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setSweater1();
}
document.querySelector("#cart-s2").addEventListener("click", carts2);
function carts2() {
   document.querySelector("#cart-s2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s2").addEventListener("click", buys2);
function buys2() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-s2").textContent =
         "Total Price : " + "₹" + 764 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sweater 2)
document.querySelector("#s2-type1").addEventListener("mouseover", s2Type1);
function s2Type1() {
   document.sweater2.src = "Images/women-sw2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Ice Wash";
}
document.querySelector("#s2-type2").addEventListener("mouseover", s2Type2);
function s2Type2() {
   document.sweater2.src = "Images/women-sw2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Maroon";
}
document.querySelector("#s2-type3").addEventListener("mouseover", s2Type3);
function s2Type3() {
   document.sweater2.src = "Images/women-sw2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Yellow";
}
// -mouseout (Shorts 2)
document.querySelector("#s2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   s2Type1();
}
document.querySelector("#s2-type3").addEventListener("mouseout", type2Mout1);
//Winter Wear -Sweater & Sweatshirt 3
var sweater2 = [
   "Images/women-sw3.jpg",
   "Images/women-sw3-2.jpg",
   "Images/women-sw3-3.jpg",
   "Images/women-sw3-4.jpg",
];
var s2 = 0;
document.sweater3.src = "Images/women-sw3.jpg";
function setSweater2() {
   document.sweater3.src = sweater2[s2];
}
setInterval(function autoSlider2() {
   if (s2 < sweater2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setSweater2();
}, 10000);
document.querySelector("#leftbtn-s3").addEventListener("click", leftbSweater2);
function leftbSweater2() {
   if (s2 > 0) {
      s2--;
   } else {
      s2 = sweater2.length - 1;
   }
   setSweater2();
}
document
   .querySelector("#rightbtn-s3")
   .addEventListener("click", rightbSweater2);
function rightbSweater2() {
   if (s2 < sweater2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setSweater2();
}
document.querySelector("#cart-s3").addEventListener("click", carts3);
function carts3() {
   document.querySelector("#cart-s3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s3").addEventListener("click", buys3);
function buys3() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-s3").textContent =
         "Total Price : " + "₹" + 599 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sweater 3)
document.querySelector("#s3-type1").addEventListener("mouseover", s3Type1);
function s3Type1() {
   document.sweater3.src = "Images/women-sw3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Mustard";
}
document.querySelector("#s3-type2").addEventListener("mouseover", s3Type2);
function s3Type2() {
   document.sweater3.src = "Images/women-sw3-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Maroon";
}
document.querySelector("#s3-type3").addEventListener("mouseover", s3Type3);
function s3Type3() {
   document.sweater3.src = "Images/women-sw3-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Black";
}
// -mouseout (Shorts 3)
document.querySelector("#s3-type2").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   s3Type1();
}
document.querySelector("#s3-type3").addEventListener("mouseout", type3Mout1);
//Winter Wear -Sweater & Sweatshirt 4
var sweater3 = [
   "Images/women-sw4.jpg",
   "Images/women-sw4-2.jpg",
   "Images/women-sw4-3.jpg",
   "Images/women-sw4-4.jpg",
];
var s3 = 0;
document.sweater4.src = "Images/women-sw4.jpg";
function setSweater3() {
   document.sweater4.src = sweater3[s3];
}
setInterval(function autoSlider3() {
   if (s3 < sweater3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setSweater3();
}, 10000);
document.querySelector("#leftbtn-s4").addEventListener("click", leftbSweater3);
function leftbSweater3() {
   if (s3 > 0) {
      s3--;
   } else {
      s3 = sweater3.length - 1;
   }
   setSweater3();
}
document
   .querySelector("#rightbtn-s4")
   .addEventListener("click", rightbSweater3);
function rightbSweater3() {
   if (s3 < sweater3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setSweater3();
}
document.querySelector("#cart-s4").addEventListener("click", carts4);
function carts4() {
   document.querySelector("#cart-s4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s4").addEventListener("click", buys4);
function buys4() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-s4").textContent =
         "Total Price : " + "₹" + 599 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
// Out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of stock");
}
document.querySelector("#oos2").addEventListener("click", outOfStock);
document.querySelector("#oos3").addEventListener("click", outOfStock);
document.querySelector("#oos4").addEventListener("click", outOfStock);
//Winter Wear -Sweater & Sweatshirt 5
var sweater4 = [
   "Images/women-sw5.jpg",
   "Images/women-sw5-2.jpg",
   "Images/women-sw5-3.jpg",
   "Images/women-sw5-4.jpg",
];
var s4 = 0;
document.sweater5.src = "Images/women-sw5.jpg";
function setSweater4() {
   document.sweater5.src = sweater4[s4];
}
setInterval(function autoSlider4() {
   if (s4 < sweater4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setSweater4();
}, 10000);
document.querySelector("#leftbtn-s5").addEventListener("click", leftbSweater4);
function leftbSweater4() {
   if (s4 > 0) {
      s4--;
   } else {
      s4 = sweater4.length - 1;
   }
   setSweater4();
}
document
   .querySelector("#rightbtn-s5")
   .addEventListener("click", rightbSweater4);
function rightbSweater4() {
   if (s4 < sweater4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setSweater4();
}
document.querySelector("#cart-s5").addEventListener("click", carts5);
function carts5() {
   document.querySelector("#cart-s5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s5").addEventListener("click", buys5);
function buys5() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-s5").textContent =
         "Total Price : " + "₹" + 499 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter Wear -Sweater & Sweatshirt 6
var sweater5 = [
   "Images/women-sw6.jpg",
   "Images/women-sw6-2.jpg",
   "Images/women-sw6-3.jpg",
   "Images/women-sw6-4.jpg",
];
var s5 = 0;
document.sweater6.src = "Images/women-sw6.jpg";
function setSweater5() {
   document.sweater6.src = sweater5[s5];
}
setInterval(function autoSlider5() {
   if (s5 < sweater5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setSweater5();
}, 10000);
document.querySelector("#leftbtn-s6").addEventListener("click", leftbSweater5);
function leftbSweater5() {
   if (s5 > 0) {
      s5--;
   } else {
      s5 = sweater5.length - 1;
   }
   setSweater5();
}
document
   .querySelector("#rightbtn-s6")
   .addEventListener("click", rightbSweater5);
function rightbSweater5() {
   if (s5 < sweater5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setSweater5();
}
document.querySelector("#cart-s6").addEventListener("click", carts6);
function carts6() {
   document.querySelector("#cart-s6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s6").addEventListener("click", buys6);
function buys6() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-s6").textContent =
         "Total Price : " + "₹" + 716 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter Wear -Sweater & Sweatshirt 7
var sweater6 = [
   "Images/women-sw7.jpg",
   "Images/women-sw7-2.jpg",
   "Images/women-sw7-3.jpg",
   "Images/women-sw7-4.jpg",
];
var s6 = 0;
document.sweater7.src = "Images/women-sw7.jpg";
function setSweater6() {
   document.sweater7.src = sweater6[s6];
}
setInterval(function autoSlider6() {
   if (s6 < sweater6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setSweater6();
}, 10000);
document.querySelector("#leftbtn-s7").addEventListener("click", leftbSweater6);
function leftbSweater6() {
   if (s6 > 0) {
      s6--;
   } else {
      s6 = sweater6.length - 1;
   }
   setSweater6();
}
document
   .querySelector("#rightbtn-s7")
   .addEventListener("click", rightbSweater6);
function rightbSweater6() {
   if (s6 < sweater6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setSweater6();
}
document.querySelector("#cart-s7").addEventListener("click", carts7);
function carts7() {
   document.querySelector("#cart-s7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s7").addEventListener("click", buys7);
function buys7() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-s7").textContent =
         "Total Price : " + "₹" + 809 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sweater 7)
document.querySelector("#s7-type1").addEventListener("mouseover", s7Type1);
function s7Type1() {
   document.sweater7.src = "Images/women-sw7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Black";
}
document.querySelector("#s7-type2").addEventListener("mouseover", s7Type2);
function s7Type2() {
   document.sweater7.src = "Images/women-sw7-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Baby Pink";
}
document.querySelector("#s7-type3").addEventListener("mouseover", s7Type3);
function s7Type3() {
   document.sweater7.src = "Images/women-sw7-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Off-White";
}
// -mouseout (Shorts 7)
document.querySelector("#s7-type2").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   s7Type1();
}
document.querySelector("#s7-type3").addEventListener("mouseout", type7Mout1);
//Winter Wear -Sweater & Sweatshirt 8
var sweater7 = [
   "Images/women-sw8.jpg",
   "Images/women-sw8-2.jpg",
   "Images/women-sw8-3.jpg",
   "Images/women-sw8-4.jpg",
];
var s7 = 0;
document.sweater8.src = "Images/women-sw8.jpg";
function setSweater7() {
   document.sweater8.src = sweater7[s7];
}
setInterval(function autoSlider7() {
   if (s7 < sweater7.length - 1) {
      s7++;
   } else {
      s7 = 0;
   }
   setSweater7();
}, 10000);
document.querySelector("#leftbtn-s8").addEventListener("click", leftbSweater7);
function leftbSweater7() {
   if (s7 > 0) {
      s7--;
   } else {
      s7 = sweater7.length - 1;
   }
   setSweater7();
}
document
   .querySelector("#rightbtn-s8")
   .addEventListener("click", rightbSweater7);
function rightbSweater7() {
   if (s7 < sweater7.length - 1) {
      s7++;
   } else {
      s7 = 0;
   }
   setSweater7();
}
document.querySelector("#cart-s8").addEventListener("click", carts8);
function carts8() {
   document.querySelector("#cart-s8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s8").addEventListener("click", buys8);
function buys8() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-s8").textContent =
         "Total Price : " + "₹" + 1921 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter Wear -Sweater & Sweatshirt 9
var sweater8 = [
   "Images/women-sw9.jpg",
   "Images/women-sw9-2.jpg",
   "Images/women-sw9-3.jpg",
   "Images/women-sw9-4.jpg",
];
var s8 = 0;
document.sweater9.src = "Images/women-sw9.jpg";
function setSweater8() {
   document.sweater9.src = sweater8[s8];
}
setInterval(function autoSlider8() {
   if (s8 < sweater8.length - 1) {
      s8++;
   } else {
      s8 = 0;
   }
   setSweater8();
}, 10000);
document.querySelector("#leftbtn-s9").addEventListener("click", leftbSweater8);
function leftbSweater8() {
   if (s8 > 0) {
      s8--;
   } else {
      s8 = sweater8.length - 1;
   }
   setSweater8();
}
document
   .querySelector("#rightbtn-s9")
   .addEventListener("click", rightbSweater8);
function rightbSweater8() {
   if (s8 < sweater8.length - 1) {
      s8++;
   } else {
      s8 = 0;
   }
   setSweater8();
}
document.querySelector("#cart-s9").addEventListener("click", carts9);
function carts9() {
   document.querySelector("#cart-s9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s9").addEventListener("click", buys9);
function buys9() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-s9").textContent =
         "Total Price : " + "₹" + 419 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
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
