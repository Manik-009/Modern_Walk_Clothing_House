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
//Footwear- Flip Flops 1
var slipper = [
   "Images/women-fl1.jpg",
   "Images/women-fl1-2.jpg",
   "Images/women-fl1-3.jpg",
   "Images/women-fl1-4.jpg",
];
var s = 0;
document.slipper1.src = "Images/women-fl1.jpg";
function setSlipper() {
   document.slipper1.src = slipper[s];
}
setInterval(function autoSlider() {
   if (s < slipper.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setSlipper();
}, 10000);
document.querySelector("#leftbtn-s1").addEventListener("click", leftbSlipper);
function leftbSlipper() {
   if (s > 0) {
      s--;
   } else {
      s = slipper.length - 1;
   }
   setSlipper();
}
document.querySelector("#rightbtn-s1").addEventListener("click", rightbSlipper);
function rightbSlipper() {
   if (s < slipper.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setSlipper();
}
document.querySelector("#cart-s1").addEventListener("click", carts1);
function carts1() {
   document.querySelector("#cart-s1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s1").addEventListener("click", buys1);
function buys1() {
   const buySlipper = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySlipper <= 10 && buySlipper > 0) {
      document.querySelector("#total-s1").textContent =
         "Total Price : " + "₹" + 279 * buySlipper + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySlipper === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Slipper 1)
document.querySelector("#s1-type1").addEventListener("mouseover", s1Type1);
function s1Type1() {
   document.slipper1.src = "Images/women-fl1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Peach/White";
}
document.querySelector("#s1-type2").addEventListener("mouseover", s1Type2);
function s1Type2() {
   document.slipper1.src = "Images/women-fl1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black-Grey";
}
document.querySelector("#s1-type3").addEventListener("mouseover", s1Type3);
function s1Type3() {
   document.slipper1.src = "Images/women-fl1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Sky Blue/Black";
}
document.querySelector("#s1-type4").addEventListener("mouseover", s1Type4);
function s1Type4() {
   document.slipper1.src = "Images/women-fl1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Grey/Peach";
}
document.querySelector("#s1-type5").addEventListener("mouseover", s1Type5);
function s1Type5() {
   document.slipper1.src = "Images/women-fl1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: White/Green";
}
//-mouseout (Slipper 1)
document.querySelector("#s1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   s1Type1();
}
document.querySelector("#s1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type5").addEventListener("mouseout", type1Mout1);
//Footwear- Flip Flops 2
var slipper1 = [
   "Images/women-fl2.jpg",
   "Images/women-fl2-2.jpg",
   "Images/women-fl2-3.jpg",
   "Images/women-fl2-4.jpg",
];
var s1 = 0;
document.slipper2.src = "Images/women-fl2.jpg";
function setSlipper1() {
   document.slipper2.src = slipper1[s1];
}
setInterval(function autoSlider1() {
   if (s1 < slipper1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setSlipper1();
}, 10000);
document.querySelector("#leftbtn-s2").addEventListener("click", leftbSlipper1);
function leftbSlipper1() {
   if (s1 > 0) {
      s1--;
   } else {
      s1 = slipper1.length - 1;
   }
   setSlipper1();
}
document
   .querySelector("#rightbtn-s2")
   .addEventListener("click", rightbSlipper1);
function rightbSlipper1() {
   if (s1 < slipper1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setSlipper1();
}
document.querySelector("#cart-s2").addEventListener("click", carts2);
function carts2() {
   document.querySelector("#cart-s2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s2").addEventListener("click", buys2);
function buys2() {
   const buySlipper = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySlipper <= 10 && buySlipper > 0) {
      document.querySelector("#total-s2").textContent =
         "Total Price : " + "₹" + 155 * buySlipper + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySlipper === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Slipper 2)
document.querySelector("#s2-type1").addEventListener("mouseover", s2Type1);
function s2Type1() {
   document.slipper2.src = "Images/women-fl2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: R. Blue/S. Blue";
}
document.querySelector("#s2-type2").addEventListener("mouseover", s2Type2);
function s2Type2() {
   document.slipper2.src = "Images/women-fl2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Magenta B. Pink";
}
document.querySelector("#s2-type3").addEventListener("mouseover", s2Type3);
function s2Type3() {
   document.slipper2.src = "Images/women-fl2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Orange Beige";
}
//-mouseout (Slipper 2)
document.querySelector("#s2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   s2Type1();
}
document.querySelector("#s2-type3").addEventListener("mouseout", type2Mout1);
//Footwear- Flip Flops 3
var slipper2 = [
   "Images/women-fl3.jpg",
   "Images/women-fl3-2.jpg",
   "Images/women-fl3-3.jpg",
   "Images/women-fl3-4.jpg",
];
var s2 = 0;
document.slipper3.src = "Images/women-fl3.jpg";
function setSlipper2() {
   document.slipper3.src = slipper2[s2];
}
setInterval(function autoSlider2() {
   if (s2 < slipper2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setSlipper2();
}, 10000);
document.querySelector("#leftbtn-s3").addEventListener("click", leftbSlipper2);
function leftbSlipper2() {
   if (s2 > 0) {
      s2--;
   } else {
      s2 = slipper2.length - 1;
   }
   setSlipper2();
}
document
   .querySelector("#rightbtn-s3")
   .addEventListener("click", rightbSlipper2);
function rightbSlipper2() {
   if (s2 < slipper2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setSlipper2();
}
document.querySelector("#cart-s3").addEventListener("click", carts3);
function carts3() {
   document.querySelector("#cart-s3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s3").addEventListener("click", buys3);
function buys3() {
   const buySlipper = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySlipper <= 10 && buySlipper > 0) {
      document.querySelector("#total-s3").textContent =
         "Total Price : " + "₹" + 285 * buySlipper + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySlipper === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Slipper 3)
document.querySelector("#s3-type1").addEventListener("mouseover", s3Type1);
function s3Type1() {
   document.slipper3.src = "Images/women-fl3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Yellow";
}
document.querySelector("#s3-type2").addEventListener("mouseover", s3Type2);
function s3Type2() {
   document.slipper3.src = "Images/women-fl3-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Black";
}
document.querySelector("#s3-type3").addEventListener("mouseover", s3Type3);
function s3Type3() {
   document.slipper3.src = "Images/women-fl3-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: CGreen";
}
document.querySelector("#s3-type4").addEventListener("mouseover", s3Type4);
function s3Type4() {
   document.slipper3.src = "Images/women-fl3-7.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Red";
}
//-mouseout (Slipper 3)
document.querySelector("#s3-type2").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   s3Type1();
}
document.querySelector("#s3-type3").addEventListener("mouseout", type3Mout1);
document.querySelector("#s3-type4").addEventListener("mouseout", type3Mout1);
//Footwear- Flip Flops 4
var slipper3 = [
   "Images/women-fl4.jpg",
   "Images/women-fl4-2.jpg",
   "Images/women-fl4-3.jpg",
   "Images/women-fl4-4.jpg",
];
var s3 = 0;
document.slipper4.src = "Images/women-fl4.jpg";
function setSlipper3() {
   document.slipper4.src = slipper3[s3];
}
setInterval(function autoSlider3() {
   if (s3 < slipper3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setSlipper3();
}, 10000);
document.querySelector("#leftbtn-s4").addEventListener("click", leftbSlipper3);
function leftbSlipper3() {
   if (s3 > 0) {
      s3--;
   } else {
      s3 = slipper3.length - 1;
   }
   setSlipper3();
}
document
   .querySelector("#rightbtn-s4")
   .addEventListener("click", rightbSlipper3);
function rightbSlipper3() {
   if (s3 < slipper3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setSlipper3();
}
document.querySelector("#cart-s4").addEventListener("click", carts4);
function carts4() {
   document.querySelector("#cart-s4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s4").addEventListener("click", buys4);
function buys4() {
   const buySlipper = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySlipper <= 10 && buySlipper > 0) {
      document.querySelector("#total-s4").textContent =
         "Total Price : " + "₹" + 474 * buySlipper + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySlipper === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Slipper 4)
document.querySelector("#s4-type1").addEventListener("mouseover", s4Type1);
function s4Type1() {
   document.slipper4.src = "Images/women-fl4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Mint Green";
}
document.querySelector("#s4-type2").addEventListener("mouseover", s4Type2);
function s4Type2() {
   document.slipper4.src = "Images/women-fl4-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Aqua Blue";
}
document.querySelector("#s4-type3").addEventListener("mouseover", s4Type3);
function s4Type3() {
   document.slipper4.src = "Images/women-fl4-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Black/Pink";
}
//-mouseout (Slipper 4)
document.querySelector("#s4-type2").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   s4Type1();
}
document.querySelector("#s4-type3").addEventListener("mouseout", type4Mout1);
//out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of stock");
}
document.querySelector("#oos2").addEventListener("click", outOfStock);
document.querySelector("#oos3").addEventListener("click", outOfStock);
document.querySelector("#oos4").addEventListener("click", outOfStock);
//Footwear- Flip Flops 5
var slipper4 = [
   "Images/women-fl5.jpg",
   "Images/women-fl5-2.jpg",
   "Images/women-fl5-3.jpg",
   "Images/women-fl5-4.jpg",
];
var s4 = 0;
document.slipper5.src = "Images/women-fl5.jpg";
function setSlipper4() {
   document.slipper5.src = slipper4[s4];
}
setInterval(function autoSlider4() {
   if (s4 < slipper4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setSlipper4();
}, 10000);
document.querySelector("#leftbtn-s5").addEventListener("click", leftbSlipper4);
function leftbSlipper4() {
   if (s4 > 0) {
      s4--;
   } else {
      s4 = slipper4.length - 1;
   }
   setSlipper4();
}
document
   .querySelector("#rightbtn-s5")
   .addEventListener("click", rightbSlipper4);
function rightbSlipper4() {
   if (s4 < slipper4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setSlipper4();
}
document.querySelector("#cart-s5").addEventListener("click", carts5);
function carts5() {
   document.querySelector("#cart-s5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s5").addEventListener("click", buys5);
function buys5() {
   const buySlipper = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySlipper <= 10 && buySlipper > 0) {
      document.querySelector("#total-s5").textContent =
         "Total Price : " + "₹" + 539 * buySlipper + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySlipper === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Slipper 5)
document.querySelector("#s5-type1").addEventListener("mouseover", s5Type1);
function s5Type1() {
   document.slipper5.src = "Images/women-fl5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Orange";
}
document.querySelector("#s5-type2").addEventListener("mouseover", s5Type2);
function s5Type2() {
   document.slipper5.src = "Images/women-fl5-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Peach ";
}
document.querySelector("#s5-type3").addEventListener("mouseover", s5Type3);
function s5Type3() {
   document.slipper5.src = "Images/women-fl5-6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Purple";
}
//-mouseout (Slipper 5)
document.querySelector("#s5-type2").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   s5Type1();
}
document.querySelector("#s5-type3").addEventListener("mouseout", type5Mout1);
//Footwear- Flip Flops 6
var slipper5 = [
   "Images/women-fl6.jpg",
   "Images/women-fl6-2.jpg",
   "Images/women-fl6-3.jpg",
   "Images/women-fl6-4.jpg",
];
var s5 = 0;
document.slipper6.src = "Images/women-fl6.jpg";
function setSlipper5() {
   document.slipper6.src = slipper5[s5];
}
setInterval(function autoSlider5() {
   if (s5 < slipper5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setSlipper5();
}, 10000);
document.querySelector("#leftbtn-s6").addEventListener("click", leftbSlipper5);
function leftbSlipper5() {
   if (s5 > 0) {
      s5--;
   } else {
      s5 = slipper5.length - 1;
   }
   setSlipper5();
}
document
   .querySelector("#rightbtn-s6")
   .addEventListener("click", rightbSlipper5);
function rightbSlipper5() {
   if (s5 < slipper5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setSlipper5();
}
document.querySelector("#cart-s6").addEventListener("click", carts6);
function carts6() {
   document.querySelector("#cart-s6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s6").addEventListener("click", buys6);
function buys6() {
   const buySlipper = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySlipper <= 10 && buySlipper > 0) {
      document.querySelector("#total-s6").textContent =
         "Total Price : " + "₹" + 364 * buySlipper + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySlipper === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Slipper 6)
document.querySelector("#s6-type1").addEventListener("mouseover", s6Type1);
function s6Type1() {
   document.slipper6.src = "Images/women-fl6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Black/R. Blue";
}
document.querySelector("#s6-type2").addEventListener("mouseover", s6Type2);
function s6Type2() {
   document.slipper6.src = "Images/women-fl6-5.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Black/Yellow ";
}
document.querySelector("#s6-type3").addEventListener("mouseover", s6Type3);
function s6Type3() {
   document.slipper6.src = "Images/women-fl6-6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Black/Pink";
}
//-mouseout (Slipper 6)
document.querySelector("#s6-type2").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   s6Type1();
}
document.querySelector("#s6-type3").addEventListener("mouseout", type6Mout1);
//Footwear- Flip Flops 7
var slipper6 = [
   "Images/women-fl7.jpg",
   "Images/women-fl7-2.jpg",
   "Images/women-fl7-3.jpg",
   "Images/women-fl7-4.jpg",
];
var s6 = 0;
document.slipper7.src = "Images/women-fl7.jpg";
function setSlipper6() {
   document.slipper7.src = slipper6[s6];
}
setInterval(function autoSlider6() {
   if (s6 < slipper6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setSlipper6();
}, 10000);
document.querySelector("#leftbtn-s7").addEventListener("click", leftbSlipper6);
function leftbSlipper6() {
   if (s6 > 0) {
      s6--;
   } else {
      s6 = slipper6.length - 1;
   }
   setSlipper6();
}
document
   .querySelector("#rightbtn-s7")
   .addEventListener("click", rightbSlipper6);
function rightbSlipper6() {
   if (s6 < slipper6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setSlipper6();
}
document.querySelector("#cart-s7").addEventListener("click", carts7);
function carts7() {
   document.querySelector("#cart-s7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s7").addEventListener("click", buys7);
function buys7() {
   const buySlipper = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySlipper <= 10 && buySlipper > 0) {
      document.querySelector("#total-s7").textContent =
         "Total Price : " + "₹" + 468 * buySlipper + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySlipper === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Slipper 7)
document.querySelector("#s7-type1").addEventListener("mouseover", s7Type1);
function s7Type1() {
   document.slipper7.src = "Images/women-fl7.jpg";
   document.querySelector("#color-name6").innerHTML = " Color: Pink";
}
document.querySelector("#s7-type2").addEventListener("mouseover", s7Type2);
function s7Type2() {
   document.slipper7.src = "Images/women-fl7-5.jpg";
   document.querySelector("#color-name6").innerHTML = " Color: Aqua";
}
document.querySelector("#s7-type3").addEventListener("mouseover", s7Type3);
function s7Type3() {
   document.slipper7.src = "Images/women-fl7-6.jpg";
   document.querySelector("#color-name6").innerHTML = " Color: Blue";
}
//-mouseout (Slipper 7)
document.querySelector("#s7-type2").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   s7Type1();
}
document.querySelector("#s7-type3").addEventListener("mouseout", type7Mout1);
//Footwear- Flip Flops 8
var slipper7 = [
   "Images/women-fl8.jpg",
   "Images/women-fl8-2.jpg",
   "Images/women-fl8-3.jpg",
   "Images/women-fl8-4.jpg",
];
var s7 = 0;
document.slipper8.src = "Images/women-fl8.jpg";
function setSlipper7() {
   document.slipper8.src = slipper7[s7];
}
setInterval(function autoSlider7() {
   if (s7 < slipper7.length - 1) {
      s7++;
   } else {
      s7 = 0;
   }
   setSlipper7();
}, 10000);
document.querySelector("#leftbtn-s8").addEventListener("click", leftbSlipper7);
function leftbSlipper7() {
   if (s7 > 0) {
      s7--;
   } else {
      s7 = slipper7.length - 1;
   }
   setSlipper7();
}
document
   .querySelector("#rightbtn-s8")
   .addEventListener("click", rightbSlipper7);
function rightbSlipper7() {
   if (s7 < slipper7.length - 1) {
      s7++;
   } else {
      s7 = 0;
   }
   setSlipper7();
}
document.querySelector("#cart-s8").addEventListener("click", carts8);
function carts8() {
   document.querySelector("#cart-s8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s8").addEventListener("click", buys8);
function buys8() {
   const buySlipper = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySlipper <= 10 && buySlipper > 0) {
      document.querySelector("#total-s8").textContent =
         "Total Price : " + "₹" + 329 * buySlipper + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySlipper === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Footwear- Flip Flops 9
var slipper8 = [
   "Images/women-fl9.jpg",
   "Images/women-fl9-2.jpg",
   "Images/women-fl9-3.jpg",
   "Images/women-fl9-4.jpg",
];
var s8 = 0;
document.slipper9.src = "Images/women-fl9.jpg";
function setSlipper8() {
   document.slipper9.src = slipper8[s8];
}
setInterval(function autoSlider8() {
   if (s8 < slipper8.length - 1) {
      s8++;
   } else {
      s8 = 0;
   }
   setSlipper8();
}, 10000);
document.querySelector("#leftbtn-s9").addEventListener("click", leftbSlipper8);
function leftbSlipper8() {
   if (s8 > 0) {
      s8--;
   } else {
      s8 = slipper8.length - 1;
   }
   setSlipper8();
}
document
   .querySelector("#rightbtn-s9")
   .addEventListener("click", rightbSlipper8);
function rightbSlipper8() {
   if (s8 < slipper8.length - 1) {
      s8++;
   } else {
      s8 = 0;
   }
   setSlipper8();
}
document.querySelector("#cart-s9").addEventListener("click", carts9);
function carts9() {
   document.querySelector("#cart-s9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s9").addEventListener("click", buys9);
function buys9() {
   const buySlipper = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySlipper <= 10 && buySlipper > 0) {
      document.querySelector("#total-s9").textContent =
         "Total Price : " + "₹" + 395 * buySlipper + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySlipper === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Footwear- Flip Flops 10
var slipper9 = [
   "Images/women-fl10.jpg",
   "Images/women-fl10-2.jpg",
   "Images/women-fl10-3.jpg",
   "Images/women-fl10-4.jpg",
];
var s9 = 0;
document.slipper10.src = "Images/women-fl10.jpg";
function setSlipper9() {
   document.slipper10.src = slipper9[s9];
}
setInterval(function autoSlider9() {
   if (s9 < slipper9.length - 1) {
      s9++;
   } else {
      s9 = 0;
   }
   setSlipper9();
}, 10000);
document.querySelector("#leftbtn-s10").addEventListener("click", leftbSlipper9);
function leftbSlipper9() {
   if (s9 > 0) {
      s9--;
   } else {
      s9 = slipper9.length - 1;
   }
   setSlipper9();
}
document
   .querySelector("#rightbtn-s10")
   .addEventListener("click", rightbSlipper9);
function rightbSlipper9() {
   if (s9 < slipper9.length - 1) {
      s9++;
   } else {
      s9 = 0;
   }
   setSlipper9();
}
document.querySelector("#cart-s10").addEventListener("click", carts10);
function carts10() {
   document.querySelector("#cart-s10").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s10").addEventListener("click", buys10);
function buys10() {
   const buySlipper = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySlipper <= 10 && buySlipper > 0) {
      document.querySelector("#total-s10").textContent =
         "Total Price : " + "₹" + 1549 * buySlipper + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySlipper === 0) {
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
