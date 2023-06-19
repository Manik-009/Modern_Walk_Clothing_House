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
      document.querySelector("#tbl1").style.display = "block";
      document.querySelector("#table1").style.display = "block";
      document.querySelector("#table2").style.display = "block";
      document.querySelector("#tbl1").style.animation =
         "sizeCh 1s ease-in .01s";

      document.querySelector("#tbl").style.animation = "sizeCh 1s ease-in .01s";
   } else {
      document.querySelector("#tbl").style.display = "none";
      document.querySelector("#tbl1").style.display = "none";
      document.querySelector("#table1").style.display = "none";
      document.querySelector("#table2").style.display = "none";
   }
}
//Lingerie & Sleepwear - Lingerie Set 1
var lset = [
   "Images/women-l1.jpg",
   "Images/women-l1-2.jpg",
   "Images/women-l1-3.jpg",
];
var s = 0;
document.lset1.src = "Images/women-l1.jpg";
function setLset() {
   document.lset1.src = lset[s];
}
setInterval(function autoSlider() {
   if (s < lset.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setLset();
}, 10000);
document.querySelector("#leftbtn-s1").addEventListener("click", leftbLset);
function leftbLset() {
   if (s > 0) {
      s--;
   } else {
      s = lset.length - 1;
   }
   setLset();
}
document.querySelector("#rightbtn-s1").addEventListener("click", rightbLset);
function rightbLset() {
   if (s < lset.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setLset();
}
document.querySelector("#cart-s1").addEventListener("click", carts1);
function carts1() {
   document.querySelector("#cart-s1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s1").addEventListener("click", buys1);
function buys1() {
   const buyLingerie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyLingerie <= 10 && buyLingerie > 0) {
      document.querySelector("#total-s1").textContent =
         "Total Price : " + "₹" + 299 * buyLingerie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLingerie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Lingerie 1)
document.querySelector("#s1-type1").addEventListener("mouseover", s1Type1);
function s1Type1() {
   document.lset1.src = "Images/women-l1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Off-White";
}
document.querySelector("#s1-type2").addEventListener("mouseover", s1Type2);
function s1Type2() {
   document.lset1.src = "Images/women-l1-4.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Maroon";
}
document.querySelector("#s1-type3").addEventListener("mouseover", s1Type3);
function s1Type3() {
   document.lset1.src = "Images/women-l1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black";
}
// -mouseout (Lingerie 1)
document.querySelector("#s1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   s1Type1();
}
document.querySelector("#s1-type3").addEventListener("mouseout", type1Mout1);
//Lingerie & Sleepwear - Lingerie Set 2
var lset1 = [
   "Images/women-l2.jpg",
   "Images/women-l2-2.jpg",
   "Images/women-l2-3.jpg",
];
var s1 = 0;
document.lset2.src = "Images/women-l2.jpg";
function setLset1() {
   document.lset2.src = lset1[s1];
}
setInterval(function autoSlider1() {
   if (s1 < lset1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setLset1();
}, 10000);
document.querySelector("#leftbtn-s2").addEventListener("click", leftbLset1);
function leftbLset1() {
   if (s1 > 0) {
      s1--;
   } else {
      s1 = lset1.length - 1;
   }
   setLset1();
}
document.querySelector("#rightbtn-s2").addEventListener("click", rightbLset1);
function rightbLset1() {
   if (s1 < lset1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setLset1();
}
document.querySelector("#cart-s2").addEventListener("click", carts2);
function carts2() {
   document.querySelector("#cart-s2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s2").addEventListener("click", buys2);
function buys2() {
   const buyLingerie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyLingerie <= 10 && buyLingerie > 0) {
      document.querySelector("#total-s2").textContent =
         "Total Price : " + "₹" + 799 * buyLingerie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLingerie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Lingerie 2)
document.querySelector("#s2-type1").addEventListener("mouseover", s2Type1);
function s2Type1() {
   document.lset2.src = "Images/women-l2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Neon Pink";
}
document.querySelector("#s2-type2").addEventListener("mouseover", s2Type2);
function s2Type2() {
   document.lset2.src = "Images/women-l2-4.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Dark Green";
}
document.querySelector("#s2-type3").addEventListener("mouseover", s2Type3);
function s2Type3() {
   document.lset2.src = "Images/women-l2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Maroon";
}
document.querySelector("#s2-type4").addEventListener("mouseover", s2Type4);
function s2Type4() {
   document.lset2.src = "Images/women-l2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Olive Green";
}
document.querySelector("#s2-type5").addEventListener("mouseover", s2Type5);
function s2Type5() {
   document.lset2.src = "Images/women-l2-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black";
}
// -mouseout (Lingerie 2)
document.querySelector("#s2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   s2Type1();
}
document.querySelector("#s2-type3").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type4").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type5").addEventListener("mouseout", type2Mout1);
//Lingerie & Sleepwear - Lingerie Set 3
var lset2 = [
   "Images/women-l3.jpg",
   "Images/women-l3-2.jpg",
   "Images/women-l3-3.jpg",
];
var s2 = 0;
document.lset3.src = "Images/women-l3.jpg";
function setLset2() {
   document.lset3.src = lset2[s2];
}
setInterval(function autoSlider2() {
   if (s2 < lset2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setLset2();
}, 10000);
document.querySelector("#leftbtn-s3").addEventListener("click", leftbLset2);
function leftbLset2() {
   if (s2 > 0) {
      s2--;
   } else {
      s2 = lset2.length - 1;
   }
   setLset2();
}
document.querySelector("#rightbtn-s3").addEventListener("click", rightbLset2);
function rightbLset2() {
   if (s2 < lset2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setLset2();
}
document.querySelector("#cart-s3").addEventListener("click", carts3);
function carts3() {
   document.querySelector("#cart-s3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s3").addEventListener("click", buys3);
function buys3() {
   const buyLingerie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyLingerie <= 10 && buyLingerie > 0) {
      document.querySelector("#total-s3").textContent =
         "Total Price : " + "₹" + 499 * buyLingerie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLingerie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Lingerie 3)
document.querySelector("#s3-type1").addEventListener("mouseover", s3Type1);
function s3Type1() {
   document.lset3.src = "Images/women-l3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Black";
}
document.querySelector("#s3-type2").addEventListener("mouseover", s3Type2);
function s3Type2() {
   document.lset3.src = "Images/women-l3-4.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Red";
}
document.querySelector("#s3-type3").addEventListener("mouseover", s3Type3);
function s3Type3() {
   document.lset3.src = "Images/women-l3-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Off-White";
}
document.querySelector("#s3-type4").addEventListener("mouseover", s3Type4);
function s3Type4() {
   document.lset3.src = "Images/women-l3-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Multicolour";
}
// -mouseout (Lingerie 3)
document.querySelector("#s3-type2").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   s3Type1();
}
document.querySelector("#s3-type3").addEventListener("mouseout", type3Mout1);
document.querySelector("#s3-type4").addEventListener("mouseout", type3Mout1);
//Lingerie & Sleepwear - Lingerie Set 4
var lset3 = [
   "Images/women-l4.jpg",
   "Images/women-l4-2.jpg",
   "Images/women-l4-3.jpg",
];
var s3 = 0;
document.lset4.src = "Images/women-l4.jpg";
function setLset3() {
   document.lset4.src = lset3[s3];
}
setInterval(function autoSlider3() {
   if (s3 < lset3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setLset3();
}, 10000);
document.querySelector("#leftbtn-s4").addEventListener("click", leftbLset3);
function leftbLset3() {
   if (s3 > 0) {
      s3--;
   } else {
      s3 = lset3.length - 1;
   }
   setLset3();
}
document.querySelector("#rightbtn-s4").addEventListener("click", rightbLset3);
function rightbLset3() {
   if (s3 < lset3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setLset3();
}
document.querySelector("#cart-s4").addEventListener("click", carts4);
function carts4() {
   document.querySelector("#cart-s4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s4").addEventListener("click", buys4);
function buys4() {
   const buyLingerie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyLingerie <= 10 && buyLingerie > 0) {
      document.querySelector("#total-s4").textContent =
         "Total Price : " + "₹" + 749 * buyLingerie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLingerie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Lingerie 4)
document.querySelector("#s4-type1").addEventListener("mouseover", s4Type1);
function s4Type1() {
   document.lset4.src = "Images/women-l4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Wine";
}
document.querySelector("#s4-type2").addEventListener("mouseover", s4Type2);
function s4Type2() {
   document.lset4.src = "Images/women-l4-4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: White";
}
document.querySelector("#s4-type3").addEventListener("mouseover", s4Type3);
function s4Type3() {
   document.lset4.src = "Images/women-l4-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Hot Pink";
}
document.querySelector("#s4-type4").addEventListener("mouseover", s4Type4);
function s4Type4() {
   document.lset4.src = "Images/women-l4-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Blue";
}
document.querySelector("#s4-type5").addEventListener("mouseover", s4Type5);
function s4Type5() {
   document.lset4.src = "Images/women-l4-7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Peach";
}
document.querySelector("#s4-type6").addEventListener("mouseover", s4Type6);
function s4Type6() {
   document.lset4.src = "Images/women-l4-8.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Ivory";
}
// -mouseout (Lingerie 4)
document.querySelector("#s4-type2").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   s4Type1();
}
document.querySelector("#s4-type3").addEventListener("mouseout", type4Mout1);
document.querySelector("#s4-type4").addEventListener("mouseout", type4Mout1);
document.querySelector("#s4-type5").addEventListener("mouseout", type4Mout1);
document.querySelector("#s4-type6").addEventListener("mouseout", type4Mout1);
//Lingerie & Sleepwear - Lingerie Set 5
var lset4 = [
   "Images/women-l5.jpg",
   "Images/women-l5-2.jpg",
   "Images/women-l5-3.jpg",
];
var s4 = 0;
document.lset5.src = "Images/women-l5.jpg";
function setLset4() {
   document.lset5.src = lset4[s4];
}
setInterval(function autoSlider4() {
   if (s4 < lset4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setLset4();
}, 10000);
document.querySelector("#leftbtn-s5").addEventListener("click", leftbLset4);
function leftbLset4() {
   if (s4 > 0) {
      s4--;
   } else {
      s4 = lset4.length - 1;
   }
   setLset4();
}
document.querySelector("#rightbtn-s5").addEventListener("click", rightbLset4);
function rightbLset4() {
   if (s4 < lset4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setLset4();
}
document.querySelector("#cart-s5").addEventListener("click", carts5);
function carts5() {
   document.querySelector("#cart-s5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s5").addEventListener("click", buys5);
function buys5() {
   const buyLingerie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyLingerie <= 10 && buyLingerie > 0) {
      document.querySelector("#total-s5").textContent =
         "Total Price : " + "₹" + 299 * buyLingerie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLingerie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Lingerie & Sleepwear - Lingerie Set 6
var lset5 = [
   "Images/women-l6.jpg",
   "Images/women-l6-2.jpg",
   "Images/women-l6-3.jpg",
];
var s5 = 0;
document.lset6.src = "Images/women-l6.jpg";
function setLset5() {
   document.lset6.src = lset5[s5];
}
setInterval(function autoSlider5() {
   if (s5 < lset5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setLset5();
}, 10000);
document.querySelector("#leftbtn-s6").addEventListener("click", leftbLset5);
function leftbLset5() {
   if (s5 > 0) {
      s5--;
   } else {
      s5 = lset5.length - 1;
   }
   setLset5();
}
document.querySelector("#rightbtn-s6").addEventListener("click", rightbLset5);
function rightbLset5() {
   if (s5 < lset5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setLset5();
}
document.querySelector("#cart-s6").addEventListener("click", carts6);
function carts6() {
   document.querySelector("#cart-s6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s6").addEventListener("click", buys6);
function buys6() {
   const buyLingerie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyLingerie <= 10 && buyLingerie > 0) {
      document.querySelector("#total-s6").textContent =
         "Total Price : " + "₹" + 399 * buyLingerie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLingerie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Lingerie 6)
document.querySelector("#s6-type1").addEventListener("mouseover", s6Type1);
function s6Type1() {
   document.lset6.src = "Images/women-l6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Navy Blue";
}
document.querySelector("#s6-type2").addEventListener("mouseover", s6Type2);
function s6Type2() {
   document.lset6.src = "Images/women-l6-4.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Black";
}
document.querySelector("#s6-type3").addEventListener("mouseover", s6Type3);
function s6Type3() {
   document.lset6.src = "Images/women-l6-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Multicolour";
}
document.querySelector("#s6-type4").addEventListener("mouseover", s6Type4);
function s6Type4() {
   document.lset6.src = "Images/women-l6-6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Purple";
}
document.querySelector("#s6-type5").addEventListener("mouseover", s6Type5);
function s6Type5() {
   document.lset6.src = "Images/women-l6-7.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Red";
}
document.querySelector("#s6-type6").addEventListener("mouseover", s6Type6);
function s6Type6() {
   document.lset6.src = "Images/women-l6-8.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Rose Pink";
}
document.querySelector("#s6-type7").addEventListener("mouseover", s6Type7);
function s6Type7() {
   document.lset6.src = "Images/women-l6-9.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Ruby";
}
// -mouseout (Lingerie 6)
document.querySelector("#s6-type2").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   s6Type1();
}
document.querySelector("#s6-type3").addEventListener("mouseout", type6Mout1);
document.querySelector("#s6-type4").addEventListener("mouseout", type6Mout1);
document.querySelector("#s6-type5").addEventListener("mouseout", type6Mout1);
document.querySelector("#s6-type6").addEventListener("mouseout", type6Mout1);
document.querySelector("#s6-type7").addEventListener("mouseout", type6Mout1);
//Lingerie & Sleepwear - Lingerie Set 7
var lset6 = [
   "Images/women-l7.jpg",
   "Images/women-l7-2.jpg",
   "Images/women-l7-3.jpg",
];
var s6 = 0;
document.lset7.src = "Images/women-l7.jpg";
function setLset6() {
   document.lset7.src = lset6[s6];
}
setInterval(function autoSlider6() {
   if (s6 < lset6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setLset6();
}, 10000);
document.querySelector("#leftbtn-s7").addEventListener("click", leftbLset6);
function leftbLset6() {
   if (s6 > 0) {
      s6--;
   } else {
      s6 = lset6.length - 1;
   }
   setLset6();
}
document.querySelector("#rightbtn-s7").addEventListener("click", rightbLset6);
function rightbLset6() {
   if (s6 < lset6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setLset6();
}
document.querySelector("#cart-s7").addEventListener("click", carts7);
function carts7() {
   document.querySelector("#cart-s7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s7").addEventListener("click", buys7);
function buys7() {
   const buyLingerie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyLingerie <= 10 && buyLingerie > 0) {
      document.querySelector("#total-s7").textContent =
         "Total Price : " + "₹" + 399 * buyLingerie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLingerie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Lingerie 7)
document.querySelector("#s7-type1").addEventListener("mouseover", s7Type1);
function s7Type1() {
   document.lset7.src = "Images/women-l7.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Yellow";
}
document.querySelector("#s7-type2").addEventListener("mouseover", s7Type2);
function s7Type2() {
   document.lset7.src = "Images/women-l7-4.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Pink";
}
document.querySelector("#s7-type3").addEventListener("mouseover", s7Type3);
function s7Type3() {
   document.lset7.src = "Images/women-l7-5.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Black";
}
document.querySelector("#s7-type4").addEventListener("mouseover", s7Type4);
function s7Type4() {
   document.lset7.src = "Images/women-l7-6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Navy Blue";
}
document.querySelector("#s7-type5").addEventListener("mouseover", s7Type5);
function s7Type5() {
   document.lset7.src = "Images/women-l7-7.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Red";
}
document.querySelector("#s7-type6").addEventListener("mouseover", s7Type6);
function s7Type6() {
   document.lset7.src = "Images/women-l7-8.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Hot Pink";
}
document.querySelector("#s7-type7").addEventListener("mouseover", s7Type7);
function s7Type7() {
   document.lset7.src = "Images/women-l7-9.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Sea Blue";
}
document.querySelector("#s7-type8").addEventListener("mouseover", s7Type8);
function s7Type8() {
   document.lset7.src = "Images/women-l7-10.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Ruby";
}
// -mouseout (Lingerie 7)
document.querySelector("#s7-type2").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   s7Type1();
}
document.querySelector("#s7-type3").addEventListener("mouseout", type7Mout1);
document.querySelector("#s7-type4").addEventListener("mouseout", type7Mout1);
document.querySelector("#s7-type5").addEventListener("mouseout", type7Mout1);
document.querySelector("#s7-type6").addEventListener("mouseout", type7Mout1);
document.querySelector("#s7-type7").addEventListener("mouseout", type7Mout1);
document.querySelector("#s7-type8").addEventListener("mouseout", type7Mout1);
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
