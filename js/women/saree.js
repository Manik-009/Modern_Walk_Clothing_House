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
// Ethnic & Party Wears- Saree 1
var saree = [
   "Images/women-sa1.jpg",
   "Images/women-sa1-2.jpg",
   "Images/women-sa1-3.jpg",
   "Images/women-sa1-4.jpg",
   "Images/women-sa1-5.jpg",
];
var s = 0;
document.saree1.src = "Images/women-sa1.jpg";
function setSaree() {
   document.saree1.src = saree[s];
}
setInterval(function autoSlider() {
   if (s < saree.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setSaree();
}, 10000);
document.querySelector("#leftbtn-s1").addEventListener("click", leftbSaree);
function leftbSaree() {
   if (s > 0) {
      s--;
   } else {
      s = saree.length - 1;
   }
   setSaree();
}
document.querySelector("#rightbtn-s1").addEventListener("click", rightbSaree);
function rightbSaree() {
   if (s < saree.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setSaree();
}
document.querySelector("#cart-s1").addEventListener("click", carts1);
function carts1() {
   document.querySelector("#cart-s1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s1").addEventListener("click", buys1);
function buys1() {
   const buySaree = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySaree <= 10 && buySaree > 0) {
      document.querySelector("#total-s1").textContent =
         "Total Price : " + "₹" + 299 * buySaree + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySaree === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Saree 1)
document.querySelector("#s1-type1").addEventListener("mouseover", s1Type1);
function s1Type1() {
   document.saree1.src = "Images/women-sa1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Aqua Blue";
}
document.querySelector("#s1-type2").addEventListener("mouseover", s1Type2);
function s1Type2() {
   document.saree1.src = "Images/women-sa1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Beige";
}
document.querySelector("#s1-type3").addEventListener("mouseover", s1Type3);
function s1Type3() {
   document.saree1.src = "Images/women-sa1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Grey";
}
document.querySelector("#s1-type4").addEventListener("mouseover", s1Type4);
function s1Type4() {
   document.saree1.src = "Images/women-sa1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Parrot Green";
}
document.querySelector("#s1-type5").addEventListener("mouseover", s1Type5);
function s1Type5() {
   document.saree1.src = "Images/women-sa1-9.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Peach";
}
document.querySelector("#s1-type6").addEventListener("mouseover", s1Type6);
function s1Type6() {
   document.saree1.src = "Images/women-sa1-10.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Pink";
}
document.querySelector("#s1-type7").addEventListener("mouseover", s1Type7);
function s1Type7() {
   document.saree1.src = "Images/women-sa1-11.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Pista Green";
}
document.querySelector("#s1-type8").addEventListener("mouseover", s1Type8);
function s1Type8() {
   document.saree1.src = "Images/women-sa1-12.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Yellow";
}
// -mouseout (Saree 1)
document.querySelector("#s1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   s1Type1();
}
document.querySelector("#s1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type5").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type6").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type7").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type8").addEventListener("mouseout", type1Mout1);
// Ethnic & Party Wears- Saree 2
var saree1 = [
   "Images/women-sa2.jpg",
   "Images/women-sa2-2.jpg",
   "Images/women-sa2-3.jpg",
   "Images/women-sa2-4.jpg",
   "Images/women-sa2-5.jpg",
];
var s1 = 0;
document.saree2.src = "Images/women-sa2.jpg";
function setSaree1() {
   document.saree2.src = saree1[s1];
}
setInterval(function autoSlider1() {
   if (s1 < saree1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setSaree1();
}, 10000);
document.querySelector("#leftbtn-s2").addEventListener("click", leftbSaree1);
function leftbSaree1() {
   if (s1 > 0) {
      s1--;
   } else {
      s1 = saree1.length - 1;
   }
   setSaree1();
}
document.querySelector("#rightbtn-s2").addEventListener("click", rightbSaree1);
function rightbSaree1() {
   if (s1 < saree1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setSaree1();
}
document.querySelector("#cart-s2").addEventListener("click", carts2);
function carts2() {
   document.querySelector("#cart-s2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s2").addEventListener("click", buys2);
function buys2() {
   const buySaree = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySaree <= 10 && buySaree > 0) {
      document.querySelector("#total-s2").textContent =
         "Total Price : " + "₹" + 379 * buySaree + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySaree === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Saree 2)
document.querySelector("#s2-type1").addEventListener("mouseover", s2Type1);
function s2Type1() {
   document.saree2.src = "Images/women-sa2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Orange";
}
document.querySelector("#s2-type2").addEventListener("mouseover", s2Type2);
function s2Type2() {
   document.saree2.src = "Images/women-sa2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Red";
}
document.querySelector("#s2-type3").addEventListener("mouseover", s2Type3);
function s2Type3() {
   document.saree2.src = "Images/women-sa2-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Green";
}
document.querySelector("#s2-type4").addEventListener("mouseover", s2Type4);
function s2Type4() {
   document.saree2.src = "Images/women-sa2-8.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Yellow";
}
// -mouseout (Saree 2)
document.querySelector("#s2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   s2Type1();
}
document.querySelector("#s2-type3").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type4").addEventListener("mouseout", type2Mout1);
// Ethnic & Party Wears- Saree 3
var saree2 = [
   "Images/women-sa3.jpg",
   "Images/women-sa3-2.jpg",
   "Images/women-sa3-3.jpg",
   "Images/women-sa3-4.jpg",
   "Images/women-sa3-5.jpg",
];
var s2 = 0;
document.saree3.src = "Images/women-sa3.jpg";
function setSaree2() {
   document.saree3.src = saree2[s2];
}
setInterval(function autoSlider2() {
   if (s2 < saree2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setSaree2();
}, 10000);
document.querySelector("#leftbtn-s3").addEventListener("click", leftbSaree2);
function leftbSaree2() {
   if (s2 > 0) {
      s2--;
   } else {
      s2 = saree2.length - 1;
   }
   setSaree2();
}
document.querySelector("#rightbtn-s3").addEventListener("click", rightbSaree2);
function rightbSaree2() {
   if (s2 < saree2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setSaree2();
}
document.querySelector("#cart-s3").addEventListener("click", carts3);
function carts3() {
   document.querySelector("#cart-s3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s3").addEventListener("click", buys3);
function buys3() {
   const buySaree = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySaree <= 10 && buySaree > 0) {
      document.querySelector("#total-s3").textContent =
         "Total Price : " + "₹" + 279 * buySaree + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySaree === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Saree 3)
document.querySelector("#s3-type1").addEventListener("mouseover", s3Type1);
function s3Type1() {
   document.saree3.src = "Images/women-sa3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Navy Blue";
}
document.querySelector("#s3-type2").addEventListener("mouseover", s3Type2);
function s3Type2() {
   document.saree3.src = "Images/women-sa3-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Black";
}
document.querySelector("#s3-type3").addEventListener("mouseover", s3Type3);
function s3Type3() {
   document.saree3.src = "Images/women-sa3-7.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Blue";
}
document.querySelector("#s3-type4").addEventListener("mouseover", s3Type4);
function s3Type4() {
   document.saree3.src = "Images/women-sa3-8.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Brown";
}
document.querySelector("#s3-type5").addEventListener("mouseover", s3Type5);
function s3Type5() {
   document.saree3.src = "Images/women-sa3-9.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Pink";
}
document.querySelector("#s3-type6").addEventListener("mouseover", s3Type6);
function s3Type6() {
   document.saree3.src = "Images/women-sa3-10.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Yellow";
}
// -mouseout (Saree 3)
document.querySelector("#s3-type2").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   s3Type1();
}
document.querySelector("#s3-type3").addEventListener("mouseout", type3Mout1);
document.querySelector("#s3-type4").addEventListener("mouseout", type3Mout1);
document.querySelector("#s3-type5").addEventListener("mouseout", type3Mout1);
document.querySelector("#s3-type6").addEventListener("mouseout", type3Mout1);
// Ethnic & Party Wears- Saree 4
var saree3 = [
   "Images/women-sa4.jpg",
   "Images/women-sa4-2.jpg",
   "Images/women-sa4-3.jpg",
   "Images/women-sa4-4.jpg",
   "Images/women-sa4-5.jpg",
];
var s3 = 0;
document.saree4.src = "Images/women-sa4.jpg";
function setSaree3() {
   document.saree4.src = saree3[s3];
}
setInterval(function autoSlider3() {
   if (s3 < saree3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setSaree3();
}, 10000);
document.querySelector("#leftbtn-s4").addEventListener("click", leftbSaree3);
function leftbSaree3() {
   if (s3 > 0) {
      s3--;
   } else {
      s3 = saree3.length - 1;
   }
   setSaree3();
}
document.querySelector("#rightbtn-s4").addEventListener("click", rightbSaree3);
function rightbSaree3() {
   if (s3 < saree3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setSaree3();
}
document.querySelector("#cart-s4").addEventListener("click", carts4);
function carts4() {
   document.querySelector("#cart-s4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s4").addEventListener("click", buys4);
function buys4() {
   const buySaree = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySaree <= 10 && buySaree > 0) {
      document.querySelector("#total-s4").textContent =
         "Total Price : " + "₹" + 329 * buySaree + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySaree === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Saree 4)
document.querySelector("#s4-type1").addEventListener("mouseover", s4Type1);
function s4Type1() {
   document.saree4.src = "Images/women-sa4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: MorPeach";
}
document.querySelector("#s4-type2").addEventListener("mouseover", s4Type2);
function s4Type2() {
   document.saree4.src = "Images/women-sa4-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Black";
}
document.querySelector("#s4-type3").addEventListener("mouseover", s4Type3);
function s4Type3() {
   document.saree4.src = "Images/women-sa4-7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: BlueRed";
}
document.querySelector("#s4-type4").addEventListener("mouseover", s4Type4);
function s4Type4() {
   document.saree4.src = "Images/women-sa4-8.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: GoldGreen";
}
document.querySelector("#s4-type5").addEventListener("mouseover", s4Type5);
function s4Type5() {
   document.saree4.src = "Images/women-sa4-9.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: ParrotOrange";
}
document.querySelector("#s4-type6").addEventListener("mouseover", s4Type6);
function s4Type6() {
   document.saree4.src = "Images/women-sa4-10.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Rani";
}
// -mouseout (Saree 4)
document.querySelector("#s4-type2").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   s4Type1();
}
document.querySelector("#s4-type3").addEventListener("mouseout", type4Mout1);
document.querySelector("#s4-type4").addEventListener("mouseout", type4Mout1);
document.querySelector("#s4-type5").addEventListener("mouseout", type4Mout1);
document.querySelector("#s4-type6").addEventListener("mouseout", type4Mout1);
// Ethnic & Party Wears- Saree 5
var saree4 = [
   "Images/women-sa5.jpg",
   "Images/women-sa5-2.jpg",
   "Images/women-sa5-3.jpg",
   "Images/women-sa5-4.jpg",
   "Images/women-sa5-5.jpg",
];
var s4 = 0;
document.saree5.src = "Images/women-sa5.jpg";
function setSaree4() {
   document.saree5.src = saree4[s4];
}
setInterval(function autoSlider4() {
   if (s4 < saree4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setSaree4();
}, 10000);
document.querySelector("#leftbtn-s5").addEventListener("click", leftbSaree4);
function leftbSaree4() {
   if (s4 > 0) {
      s4--;
   } else {
      s4 = saree4.length - 1;
   }
   setSaree4();
}
document.querySelector("#rightbtn-s5").addEventListener("click", rightbSaree4);
function rightbSaree4() {
   if (s4 < saree4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setSaree4();
}
document.querySelector("#cart-s5").addEventListener("click", carts5);
function carts5() {
   document.querySelector("#cart-s5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s5").addEventListener("click", buys5);
function buys5() {
   const buySaree = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySaree <= 10 && buySaree > 0) {
      document.querySelector("#total-s5").textContent =
         "Total Price : " + "₹" + 699 * buySaree + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySaree === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Saree 5)
document.querySelector("#s5-type1").addEventListener("mouseover", s5Type1);
function s5Type1() {
   document.saree5.src = "Images/women-sa5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Light Purple";
}
document.querySelector("#s5-type2").addEventListener("mouseover", s5Type2);
function s5Type2() {
   document.saree5.src = "Images/women-sa5-6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Beige";
}
document.querySelector("#s5-type3").addEventListener("mouseover", s5Type3);
function s5Type3() {
   document.saree5.src = "Images/women-sa5-7.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Light Green";
}
document.querySelector("#s5-type4").addEventListener("mouseover", s5Type4);
function s5Type4() {
   document.saree5.src = "Images/women-sa5-8.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Baby Pink";
}
// -mouseout (Saree 5)
document.querySelector("#s5-type2").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   s5Type1();
}
document.querySelector("#s5-type3").addEventListener("mouseout", type5Mout1);
document.querySelector("#s5-type4").addEventListener("mouseout", type5Mout1);
// Ethnic & Party Wears- Saree 6
var saree5 = [
   "Images/women-sa6.jpg",
   "Images/women-sa6-2.jpg",
   "Images/women-sa6-3.jpg",
   "Images/women-sa6-4.jpg",
   "Images/women-sa6-5.jpg",
];
var s5 = 0;
document.saree6.src = "Images/women-sa6.jpg";
function setSaree5() {
   document.saree6.src = saree5[s5];
}
setInterval(function autoSlider5() {
   if (s5 < saree5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setSaree5();
}, 10000);
document.querySelector("#leftbtn-s6").addEventListener("click", leftbSaree5);
function leftbSaree5() {
   if (s5 > 0) {
      s5--;
   } else {
      s5 = saree5.length - 1;
   }
   setSaree5();
}
document.querySelector("#rightbtn-s6").addEventListener("click", rightbSaree5);
function rightbSaree5() {
   if (s5 < saree5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setSaree5();
}
document.querySelector("#cart-s6").addEventListener("click", carts6);
function carts6() {
   document.querySelector("#cart-s6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s6").addEventListener("click", buys6);
function buys6() {
   const buySaree = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySaree <= 10 && buySaree > 0) {
      document.querySelector("#total-s6").textContent =
         "Total Price : " + "₹" + 499 * buySaree + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySaree === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Saree 6)
document.querySelector("#s6-type1").addEventListener("mouseover", s6Type1);
function s6Type1() {
   document.saree6.src = "Images/women-sa6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Lavender";
}
document.querySelector("#s6-type2").addEventListener("mouseover", s6Type2);
function s6Type2() {
   document.saree6.src = "Images/women-sa6-6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Black";
}
document.querySelector("#s6-type3").addEventListener("mouseover", s6Type3);
function s6Type3() {
   document.saree6.src = "Images/women-sa6-7.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Mustard";
}
document.querySelector("#s6-type4").addEventListener("mouseover", s6Type4);
function s6Type4() {
   document.saree6.src = "Images/women-sa6-8.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Baby Pink";
}
document.querySelector("#s6-type5").addEventListener("mouseover", s6Type5);
function s6Type5() {
   document.saree6.src = "Images/women-sa6-9.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Red";
}
document.querySelector("#s6-type6").addEventListener("mouseover", s6Type6);
function s6Type6() {
   document.saree6.src = "Images/women-sa6-10.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Green";
}
document.querySelector("#s6-type7").addEventListener("mouseover", s6Type7);
function s6Type7() {
   document.saree6.src = "Images/women-sa6-11.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Dark Purple";
}
// -mouseout (Saree 6)
document.querySelector("#s6-type2").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   s6Type1();
}
document.querySelector("#s6-type3").addEventListener("mouseout", type6Mout1);
document.querySelector("#s6-type4").addEventListener("mouseout", type6Mout1);
document.querySelector("#s6-type5").addEventListener("mouseout", type6Mout1);
document.querySelector("#s6-type6").addEventListener("mouseout", type6Mout1);
document.querySelector("#s6-type7").addEventListener("mouseout", type6Mout1);
// Ethnic & Party Wears- Saree 7
var saree6 = [
   "Images/women-sa7.jpg",
   "Images/women-sa7-2.jpg",
   "Images/women-sa7-3.jpg",
   "Images/women-sa7-4.jpg",
   "Images/women-sa7-5.jpg",
];
var s6 = 0;
document.saree7.src = "Images/women-sa7.jpg";
function setSaree6() {
   document.saree7.src = saree6[s6];
}
setInterval(function autoSlider6() {
   if (s6 < saree6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setSaree6();
}, 10000);
document.querySelector("#leftbtn-s7").addEventListener("click", leftbSaree6);
function leftbSaree6() {
   if (s6 > 0) {
      s6--;
   } else {
      s6 = saree6.length - 1;
   }
   setSaree6();
}
document.querySelector("#rightbtn-s7").addEventListener("click", rightbSaree6);
function rightbSaree6() {
   if (s6 < saree6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setSaree6();
}
document.querySelector("#cart-s7").addEventListener("click", carts7);
function carts7() {
   document.querySelector("#cart-s7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s7").addEventListener("click", buys7);
function buys7() {
   const buySaree = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySaree <= 10 && buySaree > 0) {
      document.querySelector("#total-s7").textContent =
         "Total Price : " + "₹" + 629 * buySaree + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySaree === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
// Ethnic & Party Wears- Saree 8
var saree7 = [
   "Images/women-sa8.jpg",
   "Images/women-sa8-2.jpg",
   "Images/women-sa8-3.jpg",
   "Images/women-sa8-4.jpg",
   "Images/women-sa8-5.jpg",
];
var s7 = 0;
document.saree8.src = "Images/women-sa8.jpg";
function setSaree7() {
   document.saree8.src = saree7[s7];
}
setInterval(function autoSlider7() {
   if (s7 < saree7.length - 1) {
      s7++;
   } else {
      s7 = 0;
   }
   setSaree7();
}, 10000);
document.querySelector("#leftbtn-s8").addEventListener("click", leftbSaree7);
function leftbSaree7() {
   if (s7 > 0) {
      s7--;
   } else {
      s7 = saree7.length - 1;
   }
   setSaree7();
}
document.querySelector("#rightbtn-s8").addEventListener("click", rightbSaree7);
function rightbSaree7() {
   if (s7 < saree7.length - 1) {
      s7++;
   } else {
      s7 = 0;
   }
   setSaree7();
}
document.querySelector("#cart-s8").addEventListener("click", carts8);
function carts8() {
   document.querySelector("#cart-s8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s8").addEventListener("click", buys8);
function buys8() {
   const buySaree = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySaree <= 10 && buySaree > 0) {
      document.querySelector("#total-s8").textContent =
         "Total Price : " + "₹" + 999 * buySaree + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySaree === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
// Ethnic & Party Wears- Saree 9
var saree8 = [
   "Images/women-sa9.jpg",
   "Images/women-sa9-2.jpg",
   "Images/women-sa9-3.jpg",
   "Images/women-sa9-4.jpg",
   "Images/women-sa9-5.jpg",
];
var s8 = 0;
document.saree9.src = "Images/women-sa9.jpg";
function setSaree8() {
   document.saree9.src = saree8[s8];
}
setInterval(function autoSlider8() {
   if (s8 < saree8.length - 1) {
      s8++;
   } else {
      s8 = 0;
   }
   setSaree8();
}, 10000);
document.querySelector("#leftbtn-s9").addEventListener("click", leftbSaree8);
function leftbSaree8() {
   if (s8 > 0) {
      s8--;
   } else {
      s8 = saree8.length - 1;
   }
   setSaree8();
}
document.querySelector("#rightbtn-s9").addEventListener("click", rightbSaree8);
function rightbSaree8() {
   if (s8 < saree8.length - 1) {
      s8++;
   } else {
      s8 = 0;
   }
   setSaree8();
}
document.querySelector("#cart-s9").addEventListener("click", carts9);
function carts9() {
   document.querySelector("#cart-s9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s9").addEventListener("click", buys9);
function buys9() {
   const buySaree = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySaree <= 10 && buySaree > 0) {
      document.querySelector("#total-s9").textContent =
         "Total Price : " + "₹" + 664 * buySaree + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySaree === 0) {
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
