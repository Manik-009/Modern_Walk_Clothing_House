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
//Ethnic wear - Ethnic-set1
var ethnic = [
   "Images/men-e1.jpg",
   "Images/men-e1-2.jpg",
   "Images/men-e1-3.jpg",
   "Images/men-e1-4.jpg",
];
var es = 0;
document.ethnic1.src = "Images/men-e1.jpg";
function setEthnic() {
   document.ethnic1.src = ethnic[es];
}
setInterval(function autoSlider() {
   if (es < ethnic.length - 1) {
      es++;
   } else {
      es = 0;
   }
   setEthnic();
}, 10000);
document.querySelector("#leftbtn-es1").addEventListener("click", leftbEthnic);
function leftbEthnic() {
   if (es > 0) {
      es--;
   } else {
      es = ethnic.length - 1;
   }
   setEthnic();
}
document.querySelector("#rightbtn-es1").addEventListener("click", rightbEthnic);
function rightbEthnic() {
   if (es < ethnic.length - 1) {
      es++;
   } else {
      es = 0;
   }
   setEthnic();
}
document.querySelector("#cart-es1").addEventListener("click", cartEthnic1);
function cartEthnic1() {
   document.querySelector("#cart-es1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-es1").addEventListener("click", buyEthnic1);
function buyEthnic1() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-es1").textContent =
         "Total Price : " + "₹" + 799 * buyEthnic + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Etnic-set 1)
document.querySelector("#e1-type1").addEventListener("mouseover", e1Type1);
function e1Type1() {
   document.ethnic1.src = "Images/men-e1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Grey Print";
}
document.querySelector("#e1-type2").addEventListener("mouseover", e1Type2);
function e1Type2() {
   document.ethnic1.src = "Images/men-e1-6.jpg";
   document.querySelector("#color-name").innerHTML =
      " Color: Off-White jaipuri";
}
document.querySelector("#e1-type3").addEventListener("mouseover", e1Type3);
function e1Type3() {
   document.ethnic1.src = "Images/men-e1.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Green print";
}
document.querySelector("#e1-type4").addEventListener("mouseover", e1Type4);
function e1Type4() {
   document.ethnic1.src = "Images/men-e1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Orange Box";
}
document.querySelector("#e1-type5").addEventListener("mouseover", e1Type5);
function e1Type5() {
   document.ethnic1.src = "Images/men-e1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Red check ";
}
document.querySelector("#e1-type6").addEventListener("mouseover", e1Type6);
function e1Type6() {
   document.ethnic1.src = "Images/men-e1-9.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Red print";
}
// -mouseout from color images(Ethnic-set 1)
document.querySelector("#e1-type1").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   e1Type3();
}
document.querySelector("#e1-type2").addEventListener("mouseout", type1Mout1);
document.querySelector("#e1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#e1-type5").addEventListener("mouseout", type1Mout1);
document.querySelector("#e1-type6").addEventListener("mouseout", type1Mout1);
//Ethnic wear - Ethnic-set2
var ethnic1 = [
   "Images/men-e2.jpg",
   "Images/men-e2-2.jpg",
   "Images/men-e2-3.jpg",
   "Images/men-e2-4.jpg",
];
var es1 = 0;
document.ethnic2.src = "Images/men-e2.jpg";
function setEthnic1() {
   document.ethnic2.src = ethnic1[es1];
}
setInterval(function autoSlider1() {
   if (es1 < ethnic1.length - 1) {
      es1++;
   } else {
      es1 = 0;
   }
   setEthnic1();
}, 10000);
document.querySelector("#leftbtn-es2").addEventListener("click", leftbEthnic1);
function leftbEthnic1() {
   if (es1 > 0) {
      es1--;
   } else {
      es1 = ethnic1.length - 1;
   }
   setEthnic1();
}
document
   .querySelector("#rightbtn-es2")
   .addEventListener("click", rightbEthnic1);
function rightbEthnic1() {
   if (es1 < ethnic1.length - 1) {
      es1++;
   } else {
      es1 = 0;
   }
   setEthnic1();
}
document.querySelector("#cart-es2").addEventListener("click", cartEthnic2);
function cartEthnic2() {
   document.querySelector("#cart-es2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-es2").addEventListener("click", buyEthnic2);
function buyEthnic2() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-es2").textContent =
         "Total Price : " + "₹" + 999 * buyEthnic + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Etnic-set 2)
document.querySelector("#e2-type1").addEventListener("mouseover", e2Type1);
function e2Type1() {
   document.ethnic2.src = "Images/men-e2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  White";
}
document.querySelector("#e2-type2").addEventListener("mouseover", e2Type2);
function e2Type2() {
   document.ethnic2.src = "Images/men-e2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Grey";
}
document.querySelector("#e2-type3").addEventListener("mouseover", e2Type3);
function e2Type3() {
   document.ethnic2.src = "Images/men-e2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black";
}
// -mouseout from color images(Ethnic-set 2)
document.querySelector("#e2-type1").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   e2Type3();
}
document.querySelector("#e2-type2").addEventListener("mouseout", type2Mout1);
//Ethnic wear - Ethnic-set 3
var ethnic2 = [
   "Images/men-e3.jpg",
   "Images/men-e3-2.jpg",
   "Images/men-e3-3.jpg",
   "Images/men-e3-4.jpg",
];
var es2 = 0;
document.ethnic3.src = "Images/men-e3.jpg";
function setEthnic2() {
   document.ethnic3.src = ethnic2[es2];
}
setInterval(function autoSlider2() {
   if (es2 < ethnic2.length - 1) {
      es2++;
   } else {
      es2 = 0;
   }
   setEthnic2();
}, 10000);
document.querySelector("#leftbtn-es3").addEventListener("click", leftbEthnic2);
function leftbEthnic2() {
   if (es2 > 0) {
      es2--;
   } else {
      es2 = ethnic2.length - 1;
   }
   setEthnic2();
}
document
   .querySelector("#rightbtn-es3")
   .addEventListener("click", rightbEthnic2);
function rightbEthnic2() {
   if (es2 < ethnic2.length - 1) {
      es2++;
   } else {
      es2 = 0;
   }
   setEthnic2();
}
document.querySelector("#cart-es3").addEventListener("click", cartEthnic3);
function cartEthnic3() {
   document.querySelector("#cart-es3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-es3").addEventListener("click", buyEthnic3);
function buyEthnic3() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-es3").textContent =
         "Total Price : " + "₹" + 599 * buyEthnic + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
// out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of stock");
}
document.querySelector("#oos2").addEventListener("click", outOfStock);
//Ethnic wear - Ethnic-set 4
var ethnic3 = [
   "Images/men-e4.jpg",
   "Images/men-e4-2.jpg",
   "Images/men-e4-3.jpg",
   "Images/men-e4-4.jpg",
];
var es3 = 0;
document.ethnic4.src = "Images/men-e4.jpg";
function setEthnic3() {
   document.ethnic4.src = ethnic3[es3];
}
setInterval(function autoSlider3() {
   if (es3 < ethnic3.length - 1) {
      es3++;
   } else {
      es3 = 0;
   }
   setEthnic3();
}, 10000);
document.querySelector("#leftbtn-es4").addEventListener("click", leftbEthnic3);
function leftbEthnic3() {
   if (es3 > 0) {
      es3--;
   } else {
      es3 = ethnic3.length - 1;
   }
   setEthnic3();
}
document
   .querySelector("#rightbtn-es4")
   .addEventListener("click", rightbEthnic3);
function rightbEthnic3() {
   if (es3 < ethnic3.length - 1) {
      es3++;
   } else {
      es3 = 0;
   }
   setEthnic3();
}
document.querySelector("#cart-es4").addEventListener("click", cartEthnic4);
function cartEthnic4() {
   document.querySelector("#cart-es4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-es4").addEventListener("click", buyEthnic4);
function buyEthnic4() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-es4").textContent =
         "Total Price : " + "₹" + 999 * buyEthnic + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Etnic-set 4)
document.querySelector("#e4-type1").addEventListener("mouseover", e4Type1);
function e4Type1() {
   document.ethnic4.src = "Images/men-e4-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Blue";
}
document.querySelector("#e4-type2").addEventListener("mouseover", e4Type2);
function e4Type2() {
   document.ethnic4.src = "Images/men-e4-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Maroon";
}
document.querySelector("#e4-type3").addEventListener("mouseover", e4Type3);
function e4Type3() {
   document.ethnic4.src = "Images/men-e4.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Golden";
}
document.querySelector("#e4-type4").addEventListener("mouseover", e4Type4);
function e4Type4() {
   document.ethnic4.src = "Images/men-e4-7.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Green";
}
document.querySelector("#e4-type5").addEventListener("mouseover", e4Type5);
function e4Type5() {
   document.ethnic4.src = "Images/men-e4-8.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Purple";
}
// -mouseout from color images(Ethnic-set 4)
document.querySelector("#e4-type1").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   e4Type3();
}
document.querySelector("#e4-type2").addEventListener("mouseout", type4Mout1);
document.querySelector("#e4-type4").addEventListener("mouseout", type4Mout1);
document.querySelector("#e4-type5").addEventListener("mouseout", type4Mout1);
//Ethnic wear - Ethnic-set 5
var ethnic4 = [
   "Images/men-e5.jpg",
   "Images/men-e5-2.jpg",
   "Images/men-e5-3.jpg",
   "Images/men-e5-4.jpg",
];
var es4 = 0;
document.ethnic5.src = "Images/men-e5.jpg";
function setEthnic4() {
   document.ethnic5.src = ethnic4[es4];
}
setInterval(function autoSlider4() {
   if (es4 < ethnic4.length - 1) {
      es4++;
   } else {
      es4 = 0;
   }
   setEthnic4();
}, 10000);
document.querySelector("#leftbtn-es5").addEventListener("click", leftbEthnic4);
function leftbEthnic4() {
   if (es4 > 0) {
      es4--;
   } else {
      es4 = ethnic4.length - 1;
   }
   setEthnic4();
}
document
   .querySelector("#rightbtn-es5")
   .addEventListener("click", rightbEthnic4);
function rightbEthnic4() {
   if (es4 < ethnic4.length - 1) {
      es4++;
   } else {
      es4 = 0;
   }
   setEthnic4();
}
document.querySelector("#cart-es5").addEventListener("click", cartEthnic5);
function cartEthnic5() {
   document.querySelector("#cart-es5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-es5").addEventListener("click", buyEthnic5);
function buyEthnic5() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-es5").textContent =
         "Total Price : " + "₹" + 1499 * buyEthnic + "  only";
      document.querySelector("#total-es5").style.marginTop = "10px";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
// out of stock
document.querySelector("#oos3").addEventListener("click", outOfStock);
document.querySelector("#oos4").addEventListener("click", outOfStock);
//Ethnic wear - Ethnic-set 6
var ethnic5 = [
   "Images/men-e6.jpg",
   "Images/men-e6-2.jpg",
   "Images/men-e6-3.jpg",
   "Images/men-e6-4.jpg",
];
var es5 = 0;
document.ethnic6.src = "Images/men-e6.jpg";
function setEthnic5() {
   document.ethnic6.src = ethnic5[es5];
}
setInterval(function autoSlider5() {
   if (es5 < ethnic5.length - 1) {
      es5++;
   } else {
      es5 = 0;
   }
   setEthnic5();
}, 10000);
document.querySelector("#leftbtn-es6").addEventListener("click", leftbEthnic5);
function leftbEthnic5() {
   if (es5 > 0) {
      es5--;
   } else {
      es5 = ethnic5.length - 1;
   }
   setEthnic5();
}
document
   .querySelector("#rightbtn-es6")
   .addEventListener("click", rightbEthnic5);
function rightbEthnic5() {
   if (es5 < ethnic5.length - 1) {
      es5++;
   } else {
      es5 = 0;
   }
   setEthnic5();
}
document.querySelector("#cart-es6").addEventListener("click", cartEthnic6);
function cartEthnic6() {
   document.querySelector("#cart-es6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-es6").addEventListener("click", buyEthnic6);
function buyEthnic6() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-es6").textContent =
         "Total Price : " + "₹" + 1499 * buyEthnic + "  only";
      document.querySelector("#total-es5").style.marginTop = "10px";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Etnic-set 6)
document.querySelector("#e6-type1").addEventListener("mouseover", e6Type1);
function e6Type1() {
   document.ethnic6.src = "Images/men-e6-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Firozi";
}
document.querySelector("#e6-type2").addEventListener("mouseover", e6Type2);
function e6Type2() {
   document.ethnic6.src = "Images/men-e6-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Beige";
}
document.querySelector("#e6-type3").addEventListener("mouseover", e6Type3);
function e6Type3() {
   document.ethnic6.src = "Images/men-e6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Maroon";
}
document.querySelector("#e6-type4").addEventListener("mouseover", e6Type4);
function e6Type4() {
   document.ethnic6.src = "Images/men-e6-7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Yellow";
}
document.querySelector("#e6-type5").addEventListener("mouseover", e6Type5);
function e6Type5() {
   document.ethnic6.src = "Images/men-e6-8.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: White";
}
// -mouseout from color images(Ethnic-set 6)
document.querySelector("#e6-type1").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   e6Type3();
}
document.querySelector("#e6-type2").addEventListener("mouseout", type6Mout1);
document.querySelector("#e6-type4").addEventListener("mouseout", type6Mout1);
document.querySelector("#e6-type5").addEventListener("mouseout", type6Mout1);
//Ethnic wear - Ethnic-set 7
var ethnic6 = [
   "Images/men-e7.jpg",
   "Images/men-e7-2.jpg",
   "Images/men-e7-3.jpg",
   "Images/men-e7-4.jpg",
];
var es6 = 0;
document.ethnic7.src = "Images/men-e7.jpg";
function setEthnic6() {
   document.ethnic7.src = ethnic6[es6];
}
setInterval(function autoSlider6() {
   if (es6 < ethnic6.length - 1) {
      es6++;
   } else {
      es6 = 0;
   }
   setEthnic6();
}, 10000);
document.querySelector("#leftbtn-es7").addEventListener("click", leftbEthnic6);
function leftbEthnic6() {
   if (es6 > 0) {
      es6--;
   } else {
      es6 = ethnic6.length - 1;
   }
   setEthnic6();
}
document
   .querySelector("#rightbtn-es7")
   .addEventListener("click", rightbEthnic6);
function rightbEthnic6() {
   if (es6 < ethnic6.length - 1) {
      es6++;
   } else {
      es6 = 0;
   }
   setEthnic6();
}
document.querySelector("#cart-es7").addEventListener("click", cartEthnic7);
function cartEthnic7() {
   document.querySelector("#cart-es7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-es7").addEventListener("click", buyEthnic7);
function buyEthnic7() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-es7").textContent =
         "Total Price : " + "₹" + 1398 * buyEthnic + "  only";
      document.querySelector("#total-es5").style.marginTop = "10px";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Etnic-set 7)
document.querySelector("#e7-type1").addEventListener("mouseover", e7Type1);
function e7Type1() {
   document.ethnic7.src = "Images/men-e7-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Multi-1";
}
document.querySelector("#e7-type2").addEventListener("mouseover", e7Type2);
function e7Type2() {
   document.ethnic7.src = "Images/men-e7-6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Multi-2";
}
document.querySelector("#e7-type3").addEventListener("mouseover", e7Type3);
function e7Type3() {
   document.ethnic7.src = "Images/men-e7.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Multi-3";
}
document.querySelector("#e7-type4").addEventListener("mouseover", e7Type4);
function e7Type4() {
   document.ethnic7.src = "Images/men-e7-7.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Multi-4";
}
document.querySelector("#e7-type5").addEventListener("mouseover", e7Type5);
function e7Type5() {
   document.ethnic7.src = "Images/men-e7-8.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Multi-5";
}
document.querySelector("#e7-type6").addEventListener("mouseover", e7Type6);
function e7Type6() {
   document.ethnic7.src = "Images/men-e7-9.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Multi-6";
}
document.querySelector("#e7-type7").addEventListener("mouseover", e7Type7);
function e7Type7() {
   document.ethnic7.src = "Images/men-e7-10.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Multi-7";
}
document.querySelector("#e7-type8").addEventListener("mouseover", e7Type8);
function e7Type8() {
   document.ethnic7.src = "Images/men-e7-11.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Multi-8";
}
document.querySelector("#e7-type9").addEventListener("mouseover", e7Type9);
function e7Type9() {
   document.ethnic7.src = "Images/men-e7-12.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Multi-9";
}
document.querySelector("#e7-type10").addEventListener("mouseover", e7Type10);
function e7Type10() {
   document.ethnic7.src = "Images/men-e7-13.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Multi-10";
}
// -mouseout from color images(Ethnic-set 7)
document.querySelector("#e7-type1").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   e7Type3();
}
document.querySelector("#e7-type2").addEventListener("mouseout", type7Mout1);
document.querySelector("#e7-type4").addEventListener("mouseout", type7Mout1);
document.querySelector("#e7-type5").addEventListener("mouseout", type7Mout1);
document.querySelector("#e7-type6").addEventListener("mouseout", type7Mout1);
document.querySelector("#e7-type7").addEventListener("mouseout", type7Mout1);
document.querySelector("#e7-type8").addEventListener("mouseout", type7Mout1);
document.querySelector("#e7-type9").addEventListener("mouseout", type7Mout1);
document.querySelector("#e7-type10").addEventListener("mouseout", type7Mout1);
//Ethnic wear - Ethnic-set 8
var ethnic7 = [
   "Images/men-e8.jpg",
   "Images/men-e8-3.jpg",
   "Images/men-e8-2.jpg",
   "Images/men-e8-4.jpg",
];
var es7 = 0;
document.ethnic8.src = "Images/men-e8.jpg";
function setEthnic7() {
   document.ethnic8.src = ethnic7[es7];
}
setInterval(function autoSlider7() {
   if (es7 < ethnic7.length - 1) {
      es7++;
   } else {
      es7 = 0;
   }
   setEthnic7();
}, 10000);
document.querySelector("#leftbtn-es8").addEventListener("click", leftbEthnic7);
function leftbEthnic7() {
   if (es7 > 0) {
      es7--;
   } else {
      es7 = ethnic7.length - 1;
   }
   setEthnic7();
}
document
   .querySelector("#rightbtn-es8")
   .addEventListener("click", rightbEthnic7);
function rightbEthnic7() {
   if (es7 < ethnic7.length - 1) {
      es7++;
   } else {
      es7 = 0;
   }
   setEthnic7();
}
document.querySelector("#cart-es8").addEventListener("click", cartEthnic8);
function cartEthnic8() {
   document.querySelector("#cart-es8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-es8").addEventListener("click", buyEthnic8);
function buyEthnic8() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-es8").textContent =
         "Total Price : " + "₹" + 1479 * buyEthnic + "  only";
      document.querySelector("#total-es5").style.marginTop = "10px";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Etnic-set 8)
document.querySelector("#e8-type1").addEventListener("mouseover", e8Type1);
function e8Type1() {
   document.ethnic8.src = "Images/men-e8-5.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Purple";
}
document.querySelector("#e8-type2").addEventListener("mouseover", e8Type2);
function e8Type2() {
   document.ethnic8.src = "Images/men-e8-6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Orange";
}
document.querySelector("#e8-type3").addEventListener("mouseover", e8Type3);
function e8Type3() {
   document.ethnic8.src = "Images/men-e8.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Brown";
}
document.querySelector("#e8-type4").addEventListener("mouseover", e8Type4);
function e8Type4() {
   document.ethnic8.src = "Images/men-e8-7.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Beige";
}
document.querySelector("#e8-type5").addEventListener("mouseover", e8Type5);
function e8Type5() {
   document.ethnic8.src = "Images/men-e8-8.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Green";
}
document.querySelector("#e8-type6").addEventListener("mouseover", e8Type6);
function e8Type6() {
   document.ethnic8.src = "Images/men-e8-9.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Sky Blue";
}
// -mouseout from color images(Ethnic-set 8)
document.querySelector("#e8-type1").addEventListener("mouseout", type8Mout1);
function type8Mout1() {
   e8Type3();
}
document.querySelector("#e8-type2").addEventListener("mouseout", type8Mout1);
document.querySelector("#e8-type4").addEventListener("mouseout", type8Mout1);
document.querySelector("#e8-type5").addEventListener("mouseout", type8Mout1);
document.querySelector("#e8-type6").addEventListener("mouseout", type8Mout1);
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
