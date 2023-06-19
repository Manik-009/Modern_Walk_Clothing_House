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
//Lingerie & Sleepwear - Undergarment 1
var shapewear = [
   "Images/women-b1.jpg",
   "Images/women-b1-2.jpg",
   "Images/women-b1-3.jpg",
];
var s = 0;
document.shapewear1.src = "Images/women-b1.jpg";
function setShapewear() {
   document.shapewear1.src = shapewear[s];
}
setInterval(function autoSlider() {
   if (s < shapewear.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setShapewear();
}, 10000);
document.querySelector("#leftbtn-s1").addEventListener("click", leftbShapewear);
function leftbShapewear() {
   if (s > 0) {
      s--;
   } else {
      s = shapewear.length - 1;
   }
   setShapewear();
}
document
   .querySelector("#rightbtn-s1")
   .addEventListener("click", rightbShapewear);
function rightbShapewear() {
   if (s < shapewear.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setShapewear();
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
         "Total Price : " + "₹" + 459 * buyLingerie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLingerie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Undergarment 1)
document.querySelector("#s1-type1").addEventListener("mouseover", s1Type1);
function s1Type1() {
   document.shapewear1.src = "Images/women-b1.jpg";
   document.querySelector("#color-name").innerHTML =
      " Color: Light Grey Melange";
}
document.querySelector("#s1-type2").addEventListener("mouseover", s1Type2);
function s1Type2() {
   document.shapewear1.src = "Images/women-b1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black ";
}
document.querySelector("#s1-type3").addEventListener("mouseover", s1Type3);
function s1Type3() {
   document.shapewear1.src = "Images/women-b1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Peach";
}
document.querySelector("#s1-type4").addEventListener("mouseover", s1Type4);
function s1Type4() {
   document.shapewear1.src = "Images/women-b1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Ruby";
}
document.querySelector("#s1-type5").addEventListener("mouseover", s1Type5);
function s1Type5() {
   document.shapewear1.src = "Images/women-b1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Skin";
}
document.querySelector("#s1-type6").addEventListener("mouseover", s1Type6);
function s1Type6() {
   document.shapewear1.src = "Images/women-b1-9.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Iris Blue";
}
document.querySelector("#s1-type7").addEventListener("mouseover", s1Type7);
function s1Type7() {
   document.shapewear1.src = "Images/women-b1-10.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Teal";
}
// -mouseout (Undergarment 1)
document.querySelector("#s1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   s1Type1();
}
document.querySelector("#s1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type5").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type6").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type7").addEventListener("mouseout", type1Mout1);
//Lingerie & Sleepwear - Undergarment 2
var shapewear1 = [
   "Images/women-b2.jpg",
   "Images/women-b2-2.jpg",
   "Images/women-b2-3.jpg",
];
var s1 = 0;
document.shapewear2.src = "Images/women-b2.jpg";
function setShapewear1() {
   document.shapewear2.src = shapewear1[s1];
}
setInterval(function autoSlider1() {
   if (s1 < shapewear1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setShapewear1();
}, 10000);
document
   .querySelector("#leftbtn-s2")
   .addEventListener("click", leftbShapewear1);
function leftbShapewear1() {
   if (s1 > 0) {
      s1--;
   } else {
      s1 = shapewear1.length - 1;
   }
   setShapewear1();
}
document
   .querySelector("#rightbtn-s2")
   .addEventListener("click", rightbShapewear1);
function rightbShapewear1() {
   if (s1 < shapewear1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setShapewear1();
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
         "Total Price : " + "₹" + 427 * buyLingerie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLingerie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Undergarment 2)
document.querySelector("#s2-type1").addEventListener("mouseover", s2Type1);
function s2Type1() {
   document.shapewear2.src = "Images/women-b2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: White";
}
document.querySelector("#s2-type2").addEventListener("mouseover", s2Type2);
function s2Type2() {
   document.shapewear2.src = "Images/women-b2-4.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black ";
}
document.querySelector("#s2-type3").addEventListener("mouseover", s2Type3);
function s2Type3() {
   document.shapewear2.src = "Images/women-b2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Blue Opal";
}
document.querySelector("#s2-type4").addEventListener("mouseover", s2Type4);
function s2Type4() {
   document.shapewear2.src = "Images/women-b2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Maroon";
}
document.querySelector("#s2-type5").addEventListener("mouseover", s2Type5);
function s2Type5() {
   document.shapewear2.src = "Images/women-b2-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Coral";
}
document.querySelector("#s2-type6").addEventListener("mouseover", s2Type6);
function s2Type6() {
   document.shapewear2.src = "Images/women-b2-8.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Skin";
}
// -mouseout (Undergarment 2)
document.querySelector("#s2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   s2Type1();
}
document.querySelector("#s2-type3").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type4").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type5").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type6").addEventListener("mouseout", type2Mout1);
//Lingerie & Sleepwear - Undergarment 3
var shapewear2 = [
   "Images/women-b3.jpg",
   "Images/women-b3-2.jpg",
   "Images/women-b3-3.jpg",
];
var s2 = 0;
document.shapewear3.src = "Images/women-b3.jpg";
function setShapewear2() {
   document.shapewear3.src = shapewear2[s2];
}
setInterval(function autoSlider2() {
   if (s2 < shapewear2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setShapewear2();
}, 10000);
document
   .querySelector("#leftbtn-s3")
   .addEventListener("click", leftbShapewear2);
function leftbShapewear2() {
   if (s2 > 0) {
      s2--;
   } else {
      s2 = shapewear2.length - 1;
   }
   setShapewear2();
}
document
   .querySelector("#rightbtn-s3")
   .addEventListener("click", rightbShapewear2);
function rightbShapewear2() {
   if (s2 < shapewear2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setShapewear2();
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
         "Total Price : " + "₹" + 1304 * buyLingerie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLingerie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Undergarment 3)
document.querySelector("#s3-type1").addEventListener("mouseover", s3Type1);
function s3Type1() {
   document.shapewear3.src = "Images/women-b3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Skin";
}
document.querySelector("#s3-type2").addEventListener("mouseover", s3Type2);
function s3Type2() {
   document.shapewear3.src = "Images/women-b3-4.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Black ";
}
// -mouseout (Undergarment 3)
document.querySelector("#s3-type2").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   s3Type1();
}
//Lingerie & Sleepwear - Undergarment 4
var shapewear3 = [
   "Images/women-b4.jpg",
   "Images/women-b4-2.jpg",
   "Images/women-b4-3.jpg",
];
var s3 = 0;
document.shapewear4.src = "Images/women-b4.jpg";
function setShapewear3() {
   document.shapewear4.src = shapewear3[s3];
}
setInterval(function autoSlider3() {
   if (s3 < shapewear3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setShapewear3();
}, 10000);
document
   .querySelector("#leftbtn-s4")
   .addEventListener("click", leftbShapewear3);
function leftbShapewear3() {
   if (s3 > 0) {
      s3--;
   } else {
      s3 = shapewear3.length - 1;
   }
   setShapewear3();
}
document
   .querySelector("#rightbtn-s4")
   .addEventListener("click", rightbShapewear3);
function rightbShapewear3() {
   if (s3 < shapewear3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setShapewear3();
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
         "Total Price : " + "₹" + 665 * buyLingerie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLingerie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Undergarment 4)
document.querySelector("#s4-type1").addEventListener("mouseover", s4Type1);
function s4Type1() {
   document.shapewear4.src = "Images/women-b4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Black";
}
document.querySelector("#s4-type2").addEventListener("mouseover", s4Type2);
function s4Type2() {
   document.shapewear4.src = "Images/women-b4-4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Skin ";
}
// -mouseout (Undergarment 4)
document.querySelector("#s4-type2").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   s4Type1();
}
//Lingerie & Sleepwear - Undergarment 5
var shapewear4 = [
   "Images/women-b5.jpg",
   "Images/women-b5-2.jpg",
   "Images/women-b5-3.jpg",
];
var s4 = 0;
document.shapewear5.src = "Images/women-b5.jpg";
function setShapewear4() {
   document.shapewear5.src = shapewear4[s4];
}
setInterval(function autoSlider4() {
   if (s4 < shapewear4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setShapewear4();
}, 10000);
document
   .querySelector("#leftbtn-s5")
   .addEventListener("click", leftbShapewear4);
function leftbShapewear4() {
   if (s4 > 0) {
      s4--;
   } else {
      s4 = shapewear4.length - 1;
   }
   setShapewear4();
}
document
   .querySelector("#rightbtn-s5")
   .addEventListener("click", rightbShapewear4);
function rightbShapewear4() {
   if (s4 < shapewear4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setShapewear4();
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
         "Total Price : " + "₹" + 304 * buyLingerie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLingerie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Undergarment 5)
document.querySelector("#s5-type1").addEventListener("mouseover", s5Type1);
function s5Type1() {
   document.shapewear5.src = "Images/women-b5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Blue";
}
document.querySelector("#s5-type2").addEventListener("mouseover", s5Type2);
function s5Type2() {
   document.shapewear5.src = "Images/women-b5-4.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Cream ";
}
document.querySelector("#s5-type3").addEventListener("mouseover", s5Type3);
function s5Type3() {
   document.shapewear5.src = "Images/women-b5-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Red ";
}
// -mouseout (Undergarment 5)
document.querySelector("#s5-type2").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   s5Type1();
}
document.querySelector("#s5-type3").addEventListener("mouseout", type5Mout1);
//Lingerie & Sleepwear - Undergarment 6
var shapewear5 = [
   "Images/women-b6.jpg",
   "Images/women-b6-2.jpg",
   "Images/women-b6-3.jpg",
];
var s5 = 0;
document.shapewear6.src = "Images/women-b6.jpg";
function setShapewear5() {
   document.shapewear6.src = shapewear5[s5];
}
setInterval(function autoSlider5() {
   if (s5 < shapewear5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setShapewear5();
}, 10000);
document
   .querySelector("#leftbtn-s6")
   .addEventListener("click", leftbShapewear5);
function leftbShapewear5() {
   if (s5 > 0) {
      s5--;
   } else {
      s5 = shapewear5.length - 1;
   }
   setShapewear5();
}
document
   .querySelector("#rightbtn-s6")
   .addEventListener("click", rightbShapewear5);
function rightbShapewear5() {
   if (s5 < shapewear5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setShapewear5();
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
         "Total Price : " + "₹" + 375 * buyLingerie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLingerie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Undergarment 6)
document.querySelector("#s6-type1").addEventListener("mouseover", s6Type1);
function s6Type1() {
   document.shapewear6.src = "Images/women-b6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Iris Blue";
}
document.querySelector("#s6-type2").addEventListener("mouseover", s6Type2);
function s6Type2() {
   document.shapewear6.src = "Images/women-b6-4.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Black";
}
document.querySelector("#s6-type3").addEventListener("mouseover", s6Type3);
function s6Type3() {
   document.shapewear6.src = "Images/women-b6-5.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Violet";
}
document.querySelector("#s6-type4").addEventListener("mouseover", s6Type4);
function s6Type4() {
   document.shapewear6.src = "Images/women-b6-6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Peach";
}
document.querySelector("#s6-type5").addEventListener("mouseover", s6Type5);
function s6Type5() {
   document.shapewear6.src = "Images/women-b6-7.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Ruby";
}
document.querySelector("#s6-type6").addEventListener("mouseover", s6Type6);
function s6Type6() {
   document.shapewear6.src = "Images/women-b6-8.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Skin";
}
document.querySelector("#s6-type7").addEventListener("mouseover", s6Type7);
function s6Type7() {
   document.shapewear6.src = "Images/women-b6-9.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: White";
}
// -mouseout (Undergarment 6)
document.querySelector("#s6-type2").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   s6Type1();
}
document.querySelector("#s6-type3").addEventListener("mouseout", type6Mout1);
document.querySelector("#s6-type4").addEventListener("mouseout", type6Mout1);
document.querySelector("#s6-type5").addEventListener("mouseout", type6Mout1);
document.querySelector("#s6-type6").addEventListener("mouseout", type6Mout1);
document.querySelector("#s6-type7").addEventListener("mouseout", type6Mout1);
//Lingerie & Sleepwear - Undergarment 7
var shapewear6 = [
   "Images/women-b7.jpg",
   "Images/women-b7-2.jpg",
   "Images/women-b7-3.jpg",
];
var s6 = 0;
document.shapewear7.src = "Images/women-b7.jpg";
function setShapewear6() {
   document.shapewear7.src = shapewear6[s6];
}
setInterval(function autoSlider6() {
   if (s6 < shapewear6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setShapewear6();
}, 10000);
document
   .querySelector("#leftbtn-s7")
   .addEventListener("click", leftbShapewear6);
function leftbShapewear6() {
   if (s6 > 0) {
      s6--;
   } else {
      s6 = shapewear6.length - 1;
   }
   setShapewear6();
}
document
   .querySelector("#rightbtn-s7")
   .addEventListener("click", rightbShapewear6);
function rightbShapewear6() {
   if (s6 < shapewear6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setShapewear6();
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
         "Total Price : " + "₹" + 836 * buyLingerie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLingerie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Undergarment 7)
document.querySelector("#s7-type1").addEventListener("mouseover", s7Type1);
function s7Type1() {
   document.shapewear7.src = "Images/women-b7.jpg";
   document.querySelector("#color-name6").innerHTML = " Color: Purple/Black";
}
document.querySelector("#s7-type2").addEventListener("mouseover", s7Type2);
function s7Type2() {
   document.shapewear7.src = "Images/women-b7-4.jpg";
   document.querySelector("#color-name6").innerHTML = " Color: Baby Pink/Black";
}
document.querySelector("#s7-type3").addEventListener("mouseover", s7Type3);
function s7Type3() {
   document.shapewear7.src = "Images/women-b7-5.jpg";
   document.querySelector("#color-name6").innerHTML =
      " Color: Light Grey/Black";
}
document.querySelector("#s7-type4").addEventListener("mouseover", s7Type4);
function s7Type4() {
   document.shapewear7.src = "Images/women-b7-6.jpg";
   document.querySelector("#color-name6").innerHTML = " Color: Teal/Black";
}
document.querySelector("#s7-type5").addEventListener("mouseover", s7Type5);
function s7Type5() {
   document.shapewear7.src = "Images/women-b7-7.jpg";
   document.querySelector("#color-name6").innerHTML = " Color: Ruby/Black";
}
// -mouseout (Undergarment 7)
document.querySelector("#s7-type2").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   s7Type1();
}
document.querySelector("#s7-type3").addEventListener("mouseout", type7Mout1);
document.querySelector("#s7-type4").addEventListener("mouseout", type7Mout1);
document.querySelector("#s7-type5").addEventListener("mouseout", type7Mout1);
//Lingerie & Sleepwear - Undergarment 8
var shapewear7 = [
   "Images/women-b8.jpg",
   "Images/women-b8-2.jpg",
   "Images/women-b8-3.jpg",
];
var s7 = 0;
document.shapewear8.src = "Images/women-b8.jpg";
function setShapewear7() {
   document.shapewear8.src = shapewear7[s7];
}
setInterval(function autoSlider7() {
   if (s7 < shapewear7.length - 1) {
      s7++;
   } else {
      s7 = 0;
   }
   setShapewear7();
}, 10000);
document
   .querySelector("#leftbtn-s8")
   .addEventListener("click", leftbShapewear7);
function leftbShapewear7() {
   if (s7 > 0) {
      s7--;
   } else {
      s7 = shapewear7.length - 1;
   }
   setShapewear7();
}
document
   .querySelector("#rightbtn-s8")
   .addEventListener("click", rightbShapewear7);
function rightbShapewear7() {
   if (s7 < shapewear7.length - 1) {
      s7++;
   } else {
      s7 = 0;
   }
   setShapewear7();
}
document.querySelector("#cart-s8").addEventListener("click", carts8);
function carts8() {
   document.querySelector("#cart-s8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s8").addEventListener("click", buys8);
function buys8() {
   const buyLingerie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyLingerie <= 10 && buyLingerie > 0) {
      document.querySelector("#total-s8").textContent =
         "Total Price : " + "₹" + 679 * buyLingerie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLingerie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Undergarment 8)
document.querySelector("#s8-type1").addEventListener("mouseover", s8Type1);
function s8Type1() {
   document.shapewear8.src = "Images/women-b8.jpg";
   document.querySelector("#color-name7").innerHTML = " Color: Shell Pink";
}
document.querySelector("#s8-type2").addEventListener("mouseover", s8Type2);
function s8Type2() {
   document.shapewear8.src = "Images/women-b8-4.jpg";
   document.querySelector("#color-name7").innerHTML = " Color: Skin";
}
document.querySelector("#s8-type3").addEventListener("mouseover", s8Type3);
function s8Type3() {
   document.shapewear8.src = "Images/women-b8-5.jpg";
   document.querySelector("#color-name7").innerHTML = " Color: Black";
}
document.querySelector("#s8-type4").addEventListener("mouseover", s8Type4);
function s8Type4() {
   document.shapewear8.src = "Images/women-b8-6.jpg";
   document.querySelector("#color-name7").innerHTML = " Color: Dusty Blue";
}
document.querySelector("#s8-type5").addEventListener("mouseover", s8Type5);
function s8Type5() {
   document.shapewear8.src = "Images/women-b8-7.jpg";
   document.querySelector("#color-name7").innerHTML = " Color: Grey Melenge";
}
// -mouseout (Undergarment 8)
document.querySelector("#s8-type2").addEventListener("mouseout", type8Mout1);
function type8Mout1() {
   s8Type1();
}
document.querySelector("#s8-type3").addEventListener("mouseout", type8Mout1);
document.querySelector("#s8-type4").addEventListener("mouseout", type8Mout1);
document.querySelector("#s8-type5").addEventListener("mouseout", type8Mout1);
//Lingerie & Sleepwear - Undergarment 9
var shapewear8 = [
   "Images/women-b9.png",
   "Images/women-b9-2.png",
   "Images/women-b9-3.png",
];
var s8 = 0;
document.shapewear9.src = "Images/women-b9.png";
function setShapewear8() {
   document.shapewear9.src = shapewear8[s8];
}
setInterval(function autoSlider8() {
   if (s8 < shapewear8.length - 1) {
      s8++;
   } else {
      s8 = 0;
   }
   setShapewear8();
}, 10000);
document
   .querySelector("#leftbtn-s9")
   .addEventListener("click", leftbShapewear8);
function leftbShapewear8() {
   if (s8 > 0) {
      s8--;
   } else {
      s8 = shapewear8.length - 1;
   }
   setShapewear8();
}
document
   .querySelector("#rightbtn-s9")
   .addEventListener("click", rightbShapewear8);
function rightbShapewear8() {
   if (s8 < shapewear8.length - 1) {
      s8++;
   } else {
      s8 = 0;
   }
   setShapewear8();
}
document.querySelector("#cart-s9").addEventListener("click", carts9);
function carts9() {
   document.querySelector("#cart-s9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s9").addEventListener("click", buys9);
function buys9() {
   const buyLingerie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyLingerie <= 10 && buyLingerie > 0) {
      document.querySelector("#total-s9").textContent =
         "Total Price : " + "₹" + 425 * buyLingerie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyLingerie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Undergarment 9)
document.querySelector("#s9-type1").addEventListener("mouseover", s9Type1);
function s9Type1() {
   document.shapewear9.src = "Images/women-b9.png";
   document.querySelector("#color-name8").innerHTML = " Color: Pink Wine";
}
document.querySelector("#s9-type2").addEventListener("mouseover", s9Type2);
function s9Type2() {
   document.shapewear9.src = "Images/women-b9-4.jpg";
   document.querySelector("#color-name8").innerHTML = " Color: Navy Blue";
}
document.querySelector("#s9-type3").addEventListener("mouseover", s9Type3);
function s9Type3() {
   document.shapewear9.src = "Images/women-b9-5.jpg";
   document.querySelector("#color-name8").innerHTML = " Color: Black";
}
document.querySelector("#s9-type4").addEventListener("mouseover", s9Type4);
function s9Type4() {
   document.shapewear9.src = "Images/women-b9-6.jpg";
   document.querySelector("#color-name8").innerHTML = " Color: Skin";
}
// -mouseout (Undergarment 9)
document.querySelector("#s9-type2").addEventListener("mouseout", type9Mout1);
function type9Mout1() {
   s9Type1();
}
document.querySelector("#s9-type3").addEventListener("mouseout", type9Mout1);
document.querySelector("#s9-type4").addEventListener("mouseout", type9Mout1);
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
