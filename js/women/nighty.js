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
//Lingerie & Sleepwears- Night dress 1
var nighty = [
   "Images/women-n1.jpg",
   "Images/women-n1-2.jpg",
   "Images/women-n1-3.jpg",
   "Images/women-n1-4.jpg",
];
var n = 0;
document.nighty1.src = "Images/women-n1.jpg";
function setNighty() {
   document.nighty1.src = nighty[n];
}
setInterval(function autoSlider() {
   if (n < nighty.length - 1) {
      n++;
   } else {
      n = 0;
   }
   setNighty();
}, 10000);
document.querySelector("#leftbtn-n1").addEventListener("click", leftbNighty);
function leftbNighty() {
   if (n > 0) {
      n--;
   } else {
      n = nighty.length - 1;
   }
   setNighty();
}
document.querySelector("#rightbtn-n1").addEventListener("click", rightbNighty);
function rightbNighty() {
   if (n < nighty.length - 1) {
      n++;
   } else {
      n = 0;
   }
   setNighty();
}
document.querySelector("#cart-n1").addEventListener("click", cartn1);
function cartn1() {
   document.querySelector("#cart-n1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-n1").addEventListener("click", buyn1);
function buyn1() {
   const buyNighty = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyNighty <= 10 && buyNighty > 0) {
      document.querySelector("#total-n1").textContent =
         "Total Price : " + "₹" + 315 * buyNighty + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyNighty === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Night Dress 1)
document.querySelector("#n1-type1").addEventListener("mouseover", n1Type1);
function n1Type1() {
   document.nighty1.src = "Images/women-n1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Hot Pink";
}
document.querySelector("#n1-type2").addEventListener("mouseover", n1Type2);
function n1Type2() {
   document.nighty1.src = "Images/women-n1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Peach";
}
// -mouseout (Night Dress 1)
document.querySelector("#n1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   n1Type1();
}
//Lingerie & Sleepwears- Night dress 2
var nighty1 = [
   "Images/women-n2.jpg",
   "Images/women-n2-2.jpg",
   "Images/women-n2-3.jpg",
   "Images/women-n2-4.jpg",
];
var n1 = 0;
document.nighty2.src = "Images/women-n2.jpg";
function setNighty1() {
   document.nighty2.src = nighty1[n1];
}
setInterval(function autoSlider1() {
   if (n1 < nighty1.length - 1) {
      n1++;
   } else {
      n1 = 0;
   }
   setNighty1();
}, 10000);
document.querySelector("#leftbtn-n2").addEventListener("click", leftbNighty1);
function leftbNighty1() {
   if (n1 > 0) {
      n1--;
   } else {
      n1 = nighty1.length - 1;
   }
   setNighty1();
}
document.querySelector("#rightbtn-n2").addEventListener("click", rightbNighty1);
function rightbNighty1() {
   if (n1 < nighty1.length - 1) {
      n1++;
   } else {
      n1 = 0;
   }
   setNighty1();
}
document.querySelector("#cart-n2").addEventListener("click", cartn2);
function cartn2() {
   document.querySelector("#cart-n2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-n2").addEventListener("click", buyn2);
function buyn2() {
   const buyNighty = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyNighty <= 10 && buyNighty > 0) {
      document.querySelector("#total-n2").textContent =
         "Total Price : " + "₹" + 525 * buyNighty + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyNighty === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Night Dress 2)
document.querySelector("#n2-type1").addEventListener("mouseover", n2Type1);
function n2Type1() {
   document.nighty2.src = "Images/women-n2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Multicolour";
}
document.querySelector("#n2-type2").addEventListener("mouseover", n2Type2);
function n2Type2() {
   document.nighty2.src = "Images/women-n2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Maroon";
}
document.querySelector("#n2-type3").addEventListener("mouseover", n2Type3);
function n2Type3() {
   document.nighty2.src = "Images/women-n2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Red";
}
// -mouseout (Night Dress 2)
document.querySelector("#n2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   n2Type1();
}
document.querySelector("#n2-type3").addEventListener("mouseout", type2Mout1);
//Lingerie & Sleepwears- Night dress 3
var nighty2 = [
   "Images/women-n3.jpg",
   "Images/women-n3-2.jpg",
   "Images/women-n3-3.jpg",
   "Images/women-n3-4.jpg",
];
var n2 = 0;
document.nighty3.src = "Images/women-n3.jpg";
function setNighty2() {
   document.nighty3.src = nighty2[n2];
}
setInterval(function autoSlider2() {
   if (n2 < nighty2.length - 1) {
      n2++;
   } else {
      n2 = 0;
   }
   setNighty2();
}, 10000);
document.querySelector("#leftbtn-n3").addEventListener("click", leftbNighty2);
function leftbNighty2() {
   if (n2 > 0) {
      n2--;
   } else {
      n2 = nighty2.length - 1;
   }
   setNighty2();
}
document.querySelector("#rightbtn-n3").addEventListener("click", rightbNighty2);
function rightbNighty2() {
   if (n2 < nighty2.length - 1) {
      n2++;
   } else {
      n2 = 0;
   }
   setNighty2();
}
document.querySelector("#cart-n3").addEventListener("click", cartn3);
function cartn3() {
   document.querySelector("#cart-n3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-n3").addEventListener("click", buyn3);
function buyn3() {
   const buyNighty = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyNighty <= 10 && buyNighty > 0) {
      document.querySelector("#total-n3").textContent =
         "Total Price : " + "₹" + 449 * buyNighty + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyNighty === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Night Dress 3)
document.querySelector("#n3-type1").addEventListener("mouseover", n3Type1);
function n3Type1() {
   document.nighty3.src = "Images/women-n3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Purple & Pink";
}
document.querySelector("#n3-type2").addEventListener("mouseover", n3Type2);
function n3Type2() {
   document.nighty3.src = "Images/women-n3-5.jpg";
   document.querySelector("#color-name2").innerHTML =
      " Color: Beige & Choco Brown";
}
// -mouseout (Night Dress 3)
document.querySelector("#n3-type2").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   n3Type1();
}
//Lingerie & Sleepwears- Night dress 4
var nighty3 = [
   "Images/women-n4.jpg",
   "Images/women-n4-2.jpg",
   "Images/women-n4-3.jpg",
   "Images/women-n4-4.jpg",
];
var n3 = 0;
document.nighty4.src = "Images/women-n4.jpg";
function setNighty3() {
   document.nighty4.src = nighty3[n3];
}
setInterval(function autoSlider3() {
   if (n3 < nighty3.length - 1) {
      n3++;
   } else {
      n3 = 0;
   }
   setNighty3();
}, 10000);
document.querySelector("#leftbtn-n4").addEventListener("click", leftbNighty3);
function leftbNighty3() {
   if (n3 > 0) {
      n3--;
   } else {
      n3 = nighty3.length - 1;
   }
   setNighty3();
}
document.querySelector("#rightbtn-n4").addEventListener("click", rightbNighty3);
function rightbNighty3() {
   if (n3 < nighty3.length - 1) {
      n3++;
   } else {
      n3 = 0;
   }
   setNighty3();
}
document.querySelector("#cart-n4").addEventListener("click", cartn4);
function cartn4() {
   document.querySelector("#cart-n4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-n4").addEventListener("click", buyn4);
function buyn4() {
   const buyNighty = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyNighty <= 10 && buyNighty > 0) {
      document.querySelector("#total-n4").textContent =
         "Total Price : " + "₹" + 999 * buyNighty + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyNighty === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Night Dress 4)
document.querySelector("#n4-type1").addEventListener("mouseover", n4Type1);
function n4Type1() {
   document.nighty4.src = "Images/women-n4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Black";
}
document.querySelector("#n4-type2").addEventListener("mouseover", n4Type2);
function n4Type2() {
   document.nighty4.src = "Images/women-n4-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Multicolour";
}
document.querySelector("#n4-type3").addEventListener("mouseover", n4Type3);
function n4Type3() {
   document.nighty4.src = "Images/women-n4-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Peach";
}
document.querySelector("#n4-type4").addEventListener("mouseover", n4Type4);
function n4Type4() {
   document.nighty4.src = "Images/women-n4-7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Red";
}
document.querySelector("#n4-type5").addEventListener("mouseover", n4Type5);
function n4Type5() {
   document.nighty4.src = "Images/women-n4-8.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: White";
}
// -mouseout (Night Dress 4)
document.querySelector("#n4-type2").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   n4Type1();
}
document.querySelector("#n4-type3").addEventListener("mouseout", type4Mout1);
document.querySelector("#n4-type4").addEventListener("mouseout", type4Mout1);
document.querySelector("#n4-type5").addEventListener("mouseout", type4Mout1);
//Lingerie & Sleepwears- Night dress 5
var nighty4 = [
   "Images/women-n5.jpg",
   "Images/women-n5-2.jpg",
   "Images/women-n5-3.jpg",
   "Images/women-n5-4.jpg",
];
var n4 = 0;
document.nighty5.src = "Images/women-n5.jpg";
function setNighty4() {
   document.nighty5.src = nighty4[n4];
}
setInterval(function autoSlider4() {
   if (n4 < nighty4.length - 1) {
      n4++;
   } else {
      n4 = 0;
   }
   setNighty4();
}, 10000);
document.querySelector("#leftbtn-n5").addEventListener("click", leftbNighty4);
function leftbNighty4() {
   if (n4 > 0) {
      n4--;
   } else {
      n4 = nighty4.length - 1;
   }
   setNighty4();
}
document.querySelector("#rightbtn-n5").addEventListener("click", rightbNighty4);
function rightbNighty4() {
   if (n4 < nighty4.length - 1) {
      n4++;
   } else {
      n4 = 0;
   }
   setNighty4();
}
document.querySelector("#cart-n5").addEventListener("click", cartn5);
function cartn5() {
   document.querySelector("#cart-n5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-n5").addEventListener("click", buyn5);
function buyn5() {
   const buyNighty = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyNighty <= 10 && buyNighty > 0) {
      document.querySelector("#total-n5").textContent =
         "Total Price : " + "₹" + 389 * buyNighty + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyNighty === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Night Dress 5)
document.querySelector("#n5-type1").addEventListener("mouseover", n5Type1);
function n5Type1() {
   document.nighty5.src = "Images/women-n5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Coral Pink";
}
document.querySelector("#n5-type2").addEventListener("mouseover", n5Type2);
function n5Type2() {
   document.nighty5.src = "Images/women-n5-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Black";
}
document.querySelector("#n5-type3").addEventListener("mouseover", n5Type3);
function n5Type3() {
   document.nighty5.src = "Images/women-n5-6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Maroon";
}
document.querySelector("#n5-type4").addEventListener("mouseover", n5Type4);
function n5Type4() {
   document.nighty5.src = "Images/women-n5-7.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Navy Blue";
}
// -mouseout (Night Dress 5)
document.querySelector("#n5-type2").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   n5Type1();
}
document.querySelector("#n5-type3").addEventListener("mouseout", type5Mout1);
document.querySelector("#n5-type4").addEventListener("mouseout", type5Mout1);
//Lingerie & Sleepwears- Night dress 6
var nighty5 = [
   "Images/women-n6.jpg",
   "Images/women-n6-2.jpg",
   "Images/women-n6-3.jpg",
   "Images/women-n6-4.jpg",
];
var n5 = 0;
document.nighty6.src = "Images/women-n6.jpg";
function setNighty5() {
   document.nighty6.src = nighty5[n5];
}
setInterval(function autoSlider5() {
   if (n5 < nighty5.length - 1) {
      n5++;
   } else {
      n5 = 0;
   }
   setNighty5();
}, 10000);
document.querySelector("#leftbtn-n6").addEventListener("click", leftbNighty5);
function leftbNighty5() {
   if (n5 > 0) {
      n5--;
   } else {
      n5 = nighty5.length - 1;
   }
   setNighty5();
}
document.querySelector("#rightbtn-n6").addEventListener("click", rightbNighty5);
function rightbNighty5() {
   if (n5 < nighty5.length - 1) {
      n5++;
   } else {
      n5 = 0;
   }
   setNighty5();
}
document.querySelector("#cart-n6").addEventListener("click", cartn6);
function cartn6() {
   document.querySelector("#cart-n6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-n6").addEventListener("click", buyn6);
function buyn6() {
   const buyNighty = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyNighty <= 10 && buyNighty > 0) {
      document.querySelector("#total-n6").textContent =
         "Total Price : " + "₹" + 417 * buyNighty + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyNighty === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Night Dress 6)
document.querySelector("#n6-type1").addEventListener("mouseover", n6Type1);
function n6Type1() {
   document.nighty6.src = "Images/women-n6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Multicolour 3";
}
document.querySelector("#n6-type2").addEventListener("mouseover", n6Type2);
function n6Type2() {
   document.nighty6.src = "Images/women-n6-5.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Multicolour 2";
}
document.querySelector("#n6-type3").addEventListener("mouseover", n6Type3);
function n6Type3() {
   document.nighty6.src = "Images/women-n6-6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Multicolour 1";
}
// -mouseout (Night Dress 6)
document.querySelector("#n6-type2").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   n6Type1();
}
document.querySelector("#n6-type3").addEventListener("mouseout", type6Mout1);
//Lingerie & Sleepwears- Night dress 7
var nighty6 = [
   "Images/women-n7.jpg",
   "Images/women-n7-2.jpg",
   "Images/women-n7-3.jpg",
   "Images/women-n7-4.jpg",
];
var n6 = 0;
document.nighty7.src = "Images/women-n7.jpg";
function setNighty6() {
   document.nighty7.src = nighty6[n6];
}
setInterval(function autoSlider6() {
   if (n6 < nighty6.length - 1) {
      n6++;
   } else {
      n6 = 0;
   }
   setNighty6();
}, 10000);
document.querySelector("#leftbtn-n7").addEventListener("click", leftbNighty6);
function leftbNighty6() {
   if (n6 > 0) {
      n6--;
   } else {
      n6 = nighty6.length - 1;
   }
   setNighty6();
}
document.querySelector("#rightbtn-n7").addEventListener("click", rightbNighty6);
function rightbNighty6() {
   if (n6 < nighty6.length - 1) {
      n6++;
   } else {
      n6 = 0;
   }
   setNighty6();
}
document.querySelector("#cart-n7").addEventListener("click", cartn7);
function cartn7() {
   document.querySelector("#cart-n7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-n7").addEventListener("click", buyn7);
function buyn7() {
   const buyNighty = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyNighty <= 10 && buyNighty > 0) {
      document.querySelector("#total-n7").textContent =
         "Total Price : " + "₹" + 350 * buyNighty + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyNighty === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Night Dress 7)
document.querySelector("#n7-type1").addEventListener("mouseover", n7Type1);
function n7Type1() {
   document.nighty7.src = "Images/women-n7.jpg";
   document.querySelector("#color-name6").innerHTML = " Color: Leaf Gold";
}
document.querySelector("#n7-type2").addEventListener("mouseover", n7Type2);
function n7Type2() {
   document.nighty7.src = "Images/women-n7-5.jpg";
   document.querySelector("#color-name6").innerHTML = " Color: Leaf Blue";
}
document.querySelector("#n7-type3").addEventListener("mouseover", n7Type3);
function n7Type3() {
   document.nighty7.src = "Images/women-n7-6.jpg";
   document.querySelector("#color-name6").innerHTML = " Color: Leaf Wine";
}
// -mouseout (Night Dress 7)
document.querySelector("#n7-type2").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   n7Type1();
}
document.querySelector("#n7-type3").addEventListener("mouseout", type7Mout1);
//Lingerie & Sleepwears- Night dress 8
var nighty7 = [
   "Images/women-n8.jpg",
   "Images/women-n8-2.jpg",
   "Images/women-n8-3.jpg",
   "Images/women-n8-4.jpg",
];
var n7 = 0;
document.nighty8.src = "Images/women-n8.jpg";
function setNighty7() {
   document.nighty8.src = nighty7[n7];
}
setInterval(function autoSlider7() {
   if (n7 < nighty7.length - 1) {
      n7++;
   } else {
      n7 = 0;
   }
   setNighty7();
}, 10000);
document.querySelector("#leftbtn-n8").addEventListener("click", leftbNighty7);
function leftbNighty7() {
   if (n7 > 0) {
      n7--;
   } else {
      n7 = nighty7.length - 1;
   }
   setNighty7();
}
document.querySelector("#rightbtn-n8").addEventListener("click", rightbNighty7);
function rightbNighty7() {
   if (n7 < nighty7.length - 1) {
      n7++;
   } else {
      n7 = 0;
   }
   setNighty7();
}
document.querySelector("#cart-n8").addEventListener("click", cartn8);
function cartn8() {
   document.querySelector("#cart-n8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-n8").addEventListener("click", buyn8);
function buyn8() {
   const buyNighty = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyNighty <= 10 && buyNighty > 0) {
      document.querySelector("#total-n8").textContent =
         "Total Price : " + "₹" + 327 * buyNighty + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyNighty === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Lingerie & Sleepwears- Night dress 9
var nighty8 = [
   "Images/women-n9.jpg",
   "Images/women-n9-2.jpg",
   "Images/women-n9-3.jpg",
   "Images/women-n9-4.jpg",
];
var n8 = 0;
document.nighty9.src = "Images/women-n9.jpg";
function setNighty8() {
   document.nighty9.src = nighty8[n8];
}
setInterval(function autoSlider8() {
   if (n8 < nighty8.length - 1) {
      n8++;
   } else {
      n8 = 0;
   }
   setNighty8();
}, 10000);
document.querySelector("#leftbtn-n9").addEventListener("click", leftbNighty8);
function leftbNighty8() {
   if (n8 > 0) {
      n8--;
   } else {
      n8 = nighty8.length - 1;
   }
   setNighty8();
}
document.querySelector("#rightbtn-n9").addEventListener("click", rightbNighty8);
function rightbNighty8() {
   if (n8 < nighty8.length - 1) {
      n8++;
   } else {
      n8 = 0;
   }
   setNighty8();
}
document.querySelector("#cart-n9").addEventListener("click", cartn9);
function cartn9() {
   document.querySelector("#cart-n9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-n9").addEventListener("click", buyn9);
function buyn9() {
   const buyNighty = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyNighty <= 10 && buyNighty > 0) {
      document.querySelector("#total-n9").textContent =
         "Total Price : " + "₹" + 449 * buyNighty + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyNighty === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Lingerie & Sleepwears- Night dress 10
var nighty9 = [
   "Images/women-n10.jpg",
   "Images/women-n10-2.jpg",
   "Images/women-n10-3.jpg",
   "Images/women-n10-4.jpg",
];
var n9 = 0;
document.nighty10.src = "Images/women-n10.jpg";
function setNighty9() {
   document.nighty10.src = nighty9[n9];
}
setInterval(function autoSlider9() {
   if (n9 < nighty9.length - 1) {
      n9++;
   } else {
      n9 = 0;
   }
   setNighty9();
}, 10000);
document.querySelector("#leftbtn-n10").addEventListener("click", leftbNighty9);
function leftbNighty9() {
   if (n9 > 0) {
      n9--;
   } else {
      n9 = nighty9.length - 1;
   }
   setNighty9();
}
document
   .querySelector("#rightbtn-n10")
   .addEventListener("click", rightbNighty9);
function rightbNighty9() {
   if (n9 < nighty9.length - 1) {
      n9++;
   } else {
      n9 = 0;
   }
   setNighty9();
}
document.querySelector("#cart-n10").addEventListener("click", cartn10);
function cartn10() {
   document.querySelector("#cart-n10").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-n10").addEventListener("click", buyn10);
function buyn10() {
   const buyNighty = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyNighty <= 10 && buyNighty > 0) {
      document.querySelector("#total-n10").textContent =
         "Total Price : " + "₹" + 461 * buyNighty + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyNighty === 0) {
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
