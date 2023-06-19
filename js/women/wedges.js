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
//Footwear - Wedges 1
var flats = [
   "Images/women-f1.jpg",
   "Images/women-f1-2.jpg",
   "Images/women-f1-3.jpg",
   "Images/women-f1-4.jpg",
];
var f = 0;
document.flats1.src = "Images/women-f1.jpg";
function setFlats() {
   document.flats1.src = flats[f];
}
setInterval(function autoSlider() {
   if (f < flats.length - 1) {
      f++;
   } else {
      f = 0;
   }
   setFlats();
}, 10000);
document.querySelector("#leftbtn-f1").addEventListener("click", leftbFlats);
function leftbFlats() {
   if (f > 0) {
      f--;
   } else {
      f = flats.length - 1;
   }
   setFlats();
}
document.querySelector("#rightbtn-f1").addEventListener("click", rightbFlats);
function rightbFlats() {
   if (f < flats.length - 1) {
      f++;
   } else {
      f = 0;
   }
   setFlats();
}
document.querySelector("#cart-f1").addEventListener("click", cartf1);
function cartf1() {
   document.querySelector("#cart-f1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-f1").addEventListener("click", buyf1);
function buyf1() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-f1").textContent =
         "Total Price : " + "₹" + 455 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about Wedges 1
document.querySelector("#flats1").addEventListener("mouseover", info);
function info() {
   document.querySelector("#flats1").style.height = "770px";
   document.querySelector("#flats1").style.transition = "height .5s";
   document.querySelector("#info1").style.display = "block";
   document.querySelector("#info1").style.animation = "info 1s ease";
}
//mouseout from more detail about Wedges 1(Hidden-info)
document.querySelector("#flats1").addEventListener("mouseout", infoHide);
function infoHide() {
   document.querySelector("#info1").style.display = "none";
   document.querySelector("#flats1").style.transition = "height .7s";
   document.querySelector("#flats1").style.height = "670px";
}
//color variety
// -mouseover on color images(Wedges 1)
document.querySelector("#f1-type1").addEventListener("mouseover", f1Type1);
function f1Type1() {
   document.flats1.src = "Images/women-f1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Hunter";
}
document.querySelector("#f1-type2").addEventListener("mouseover", f1Type2);
function f1Type2() {
   document.flats1.src = "Images/women-f1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black";
}
document.querySelector("#f1-type3").addEventListener("mouseover", f1Type3);
function f1Type3() {
   document.flats1.src = "Images/women-f1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Mustard";
}
document.querySelector("#f1-type4").addEventListener("mouseover", f1Type4);
function f1Type4() {
   document.flats1.src = "Images/women-f1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Grey";
}
document.querySelector("#f1-type5").addEventListener("mouseover", f1Type5);
function f1Type5() {
   document.flats1.src = "Images/women-f1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Redwood";
}
//-mouseout (Wedges 1)
document.querySelector("#f1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   f1Type1();
}
document.querySelector("#f1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#f1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#f1-type5").addEventListener("mouseout", type1Mout1);
//Footwear - Wedges 2
var flats1 = [
   "Images/women-f2.jpg",
   "Images/women-f2-2.jpg",
   "Images/women-f2-3.jpg",
   "Images/women-f2-4.jpg",
];
var f1 = 0;
document.flats2.src = "Images/women-f2.jpg";
function setFlats1() {
   document.flats2.src = flats1[f1];
}
setInterval(function autoSlider1() {
   if (f1 < flats1.length - 1) {
      f1++;
   } else {
      f1 = 0;
   }
   setFlats1();
}, 10000);
document.querySelector("#leftbtn-f2").addEventListener("click", leftbFlats1);
function leftbFlats1() {
   if (f1 > 0) {
      f1--;
   } else {
      f1 = flats1.length - 1;
   }
   setFlats1();
}
document.querySelector("#rightbtn-f2").addEventListener("click", rightbFlats1);
function rightbFlats1() {
   if (f1 < flats1.length - 1) {
      f1++;
   } else {
      f1 = 0;
   }
   setFlats1();
}
document.querySelector("#cart-f2").addEventListener("click", cartf2);
function cartf2() {
   document.querySelector("#cart-f2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-f2").addEventListener("click", buyf2);
function buyf2() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-f2").textContent =
         "Total Price : " + "₹" + 494 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about Wedges 2
document.querySelector("#flats2").addEventListener("mouseover", info1);
function info1() {
   document.querySelector("#flats2").style.height = "770px";
   document.querySelector("#flats2").style.transition = "height .5s";
   document.querySelector("#info2").style.display = "block";
   document.querySelector("#info2").style.animation = "info 1s ease";
}
//mouseout from more detail about Wedges 2(Hidden-info)
document.querySelector("#flats2").addEventListener("mouseout", infoHide1);
function infoHide1() {
   document.querySelector("#info2").style.display = "none";
   document.querySelector("#flats2").style.transition = "height .7s";
   document.querySelector("#flats2").style.height = "670px";
}
//color variety
// -mouseover on color images(Wedges 2)
document.querySelector("#f2-type1").addEventListener("mouseover", f2Type1);
function f2Type1() {
   document.flats2.src = "Images/women-f2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black";
}
document.querySelector("#f2-type2").addEventListener("mouseover", f2Type2);
function f2Type2() {
   document.flats2.src = "Images/women-f2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: CGreen";
}
document.querySelector("#f2-type3").addEventListener("mouseover", f2Type3);
function f2Type3() {
   document.flats2.src = "Images/women-f2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Grey";
}
document.querySelector("#f2-type4").addEventListener("mouseover", f2Type4);
function f2Type4() {
   document.flats2.src = "Images/women-f2-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Pink";
}
//-mouseout (Wedges 2)
document.querySelector("#f2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   f2Type1();
}
document.querySelector("#f2-type3").addEventListener("mouseout", type2Mout1);
document.querySelector("#f2-type4").addEventListener("mouseout", type2Mout1);
//Footwear - Wedges 3
var flats2 = [
   "Images/women-f3.jpg",
   "Images/women-f3-2.jpg",
   "Images/women-f3-3.jpg",
   "Images/women-f3-4.jpg",
];
var f2 = 0;
document.flats3.src = "Images/women-f3.jpg";
function setFlats2() {
   document.flats3.src = flats2[f2];
}
setInterval(function autoSlider2() {
   if (f2 < flats2.length - 1) {
      f2++;
   } else {
      f2 = 0;
   }
   setFlats2();
}, 10000);
document.querySelector("#leftbtn-f3").addEventListener("click", leftbFlats2);
function leftbFlats2() {
   if (f2 > 0) {
      f2--;
   } else {
      f2 = flats2.length - 1;
   }
   setFlats2();
}
document.querySelector("#rightbtn-f3").addEventListener("click", rightbFlats2);
function rightbFlats2() {
   if (f2 < flats2.length - 1) {
      f2++;
   } else {
      f2 = 0;
   }
   setFlats2();
}
document.querySelector("#cart-f3").addEventListener("click", cartf3);
function cartf3() {
   document.querySelector("#cart-f3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-f3").addEventListener("click", buyf3);
function buyf3() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-f3").textContent =
         "Total Price : " + "₹" + 375 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about Wedges 3
document.querySelector("#flats3").addEventListener("mouseover", info2);
function info2() {
   document.querySelector("#flats3").style.height = "770px";
   document.querySelector("#flats3").style.transition = "height .5s";
   document.querySelector("#info3").style.display = "block";
   document.querySelector("#info3").style.animation = "info 1s ease";
}
//mouseout from more detail about Wedges 3(Hidden-info)
document.querySelector("#flats3").addEventListener("mouseout", infoHide2);
function infoHide2() {
   document.querySelector("#info3").style.display = "none";
   document.querySelector("#flats3").style.transition = "height .7s";
   document.querySelector("#flats3").style.height = "670px";
}
//color variety
// -mouseover on color images(Wedges 3)
document.querySelector("#f3-type1").addEventListener("mouseover", f3Type1);
function f3Type1() {
   document.flats3.src = "Images/women-f3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Pink";
}
document.querySelector("#f3-type2").addEventListener("mouseover", f3Type2);
function f3Type2() {
   document.flats3.src = "Images/women-f3-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Silver";
}
//-mouseout (Wedges 3)
document.querySelector("#f3-type2").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   f3Type1();
}
//Footwear - Wedges 4
var flats3 = [
   "Images/women-f4.jpg",
   "Images/women-f4-2.jpg",
   "Images/women-f4-3.jpg",
   "Images/women-f4-4.jpg",
];
var f3 = 0;
document.flats4.src = "Images/women-f4.jpg";
function setFlats3() {
   document.flats4.src = flats3[f3];
}
setInterval(function autoSlider3() {
   if (f3 < flats3.length - 1) {
      f3++;
   } else {
      f3 = 0;
   }
   setFlats3();
}, 10000);
document.querySelector("#leftbtn-f4").addEventListener("click", leftbFlats3);
function leftbFlats3() {
   if (f3 > 0) {
      f3--;
   } else {
      f3 = flats3.length - 1;
   }
   setFlats3();
}
document.querySelector("#rightbtn-f4").addEventListener("click", rightbFlats3);
function rightbFlats3() {
   if (f3 < flats3.length - 1) {
      f3++;
   } else {
      f3 = 0;
   }
   setFlats3();
}
document.querySelector("#cart-f4").addEventListener("click", cartf4);
function cartf4() {
   document.querySelector("#cart-f4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-f4").addEventListener("click", buyf4);
function buyf4() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-f4").textContent =
         "Total Price : " + "₹" + 599 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about Wedges 4
document.querySelector("#flats4").addEventListener("mouseover", info3);
function info3() {
   document.querySelector("#flats4").style.height = "770px";
   document.querySelector("#flats4").style.transition = "height .5s";
   document.querySelector("#info4").style.display = "block";
   document.querySelector("#info4").style.animation = "info 1s ease";
}
//mouseout from more detail about Wedges 4(Hidden-info)
document.querySelector("#flats4").addEventListener("mouseout", infoHide3);
function infoHide3() {
   document.querySelector("#info4").style.display = "none";
   document.querySelector("#flats4").style.transition = "height .7s";
   document.querySelector("#flats4").style.height = "670px";
}
//color variety
// -mouseover on color images(Wedges 4)
document.querySelector("#f4-type1").addEventListener("mouseover", f4Type1);
function f4Type1() {
   document.flats4.src = "Images/women-f4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Tan";
}
document.querySelector("#f4-type2").addEventListener("mouseover", f4Type2);
function f4Type2() {
   document.flats4.src = "Images/women-f4-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Cherry";
}
//-mouseout (Wedges 4)
document.querySelector("#f4-type2").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   f4Type1();
}
// Out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of stock");
}
//Footwear - Wedges 5
var flats4 = [
   "Images/women-f5.jpg",
   "Images/women-f5-2.jpg",
   "Images/women-f5-3.jpg",
   "Images/women-f5-4.jpg",
];
var f4 = 0;
document.flats5.src = "Images/women-f5.jpg";
function setFlats4() {
   document.flats5.src = flats4[f4];
}
setInterval(function autoSlider4() {
   if (f4 < flats4.length - 1) {
      f4++;
   } else {
      f4 = 0;
   }
   setFlats4();
}, 10000);
document.querySelector("#leftbtn-f5").addEventListener("click", leftbFlats4);
function leftbFlats4() {
   if (f4 > 0) {
      f4--;
   } else {
      f4 = flats4.length - 1;
   }
   setFlats4();
}
document.querySelector("#rightbtn-f5").addEventListener("click", rightbFlats4);
function rightbFlats4() {
   if (f4 < flats4.length - 1) {
      f4++;
   } else {
      f4 = 0;
   }
   setFlats4();
}
document.querySelector("#cart-f5").addEventListener("click", cartf5);
function cartf5() {
   document.querySelector("#cart-f5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-f5").addEventListener("click", buyf5);
function buyf5() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-f5").textContent =
         "Total Price : " + "₹" + 329 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about Wedges 5
document.querySelector("#flats5").addEventListener("mouseover", info4);
function info4() {
   document.querySelector("#flats5").style.height = "770px";
   document.querySelector("#flats5").style.transition = "height .5s";
   document.querySelector("#info5").style.display = "block";
   document.querySelector("#info5").style.animation = "info 1s ease";
}
//mouseout from more detail about Wedges 5(Hidden-info)
document.querySelector("#flats5").addEventListener("mouseout", infoHide4);
function infoHide4() {
   document.querySelector("#info5").style.display = "none";
   document.querySelector("#flats5").style.transition = "height .7s";
   document.querySelector("#flats5").style.height = "670px";
}
//color variety
// -mouseover on color images(Wedges 5)
document.querySelector("#f5-type1").addEventListener("mouseover", f5Type1);
function f5Type1() {
   document.flats5.src = "Images/women-f5-4.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Black";
}
document.querySelector("#f5-type2").addEventListener("mouseover", f5Type2);
function f5Type2() {
   document.flats5.src = "Images/women-f5-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Brown";
}
//-mouseout (Wedges 5)
document.querySelector("#f5-type2").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   f5Type1();
}
//Footwear - Wedges 6
var flats5 = [
   "Images/women-f6.jpg",
   "Images/women-f6-2.jpg",
   "Images/women-f6-3.jpg",
   "Images/women-f6-4.jpg",
];
var f5 = 0;
document.flats6.src = "Images/women-f6.jpg";
function setFlats5() {
   document.flats6.src = flats5[f5];
}
setInterval(function autoSlider5() {
   if (f5 < flats5.length - 1) {
      f5++;
   } else {
      f5 = 0;
   }
   setFlats5();
}, 10000);
document.querySelector("#leftbtn-f6").addEventListener("click", leftbFlats5);
function leftbFlats5() {
   if (f5 > 0) {
      f5--;
   } else {
      f5 = flats5.length - 1;
   }
   setFlats5();
}
document.querySelector("#rightbtn-f6").addEventListener("click", rightbFlats5);
function rightbFlats5() {
   if (f5 < flats5.length - 1) {
      f5++;
   } else {
      f5 = 0;
   }
   setFlats5();
}
document.querySelector("#cart-f6").addEventListener("click", cartf6);
function cartf6() {
   document.querySelector("#cart-f6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-f6").addEventListener("click", buyf6);
function buyf6() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-f6").textContent =
         "Total Price : " + "₹" + 435 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about Wedges 6
document.querySelector("#flats6").addEventListener("mouseover", info5);
function info5() {
   document.querySelector("#flats6").style.height = "770px";
   document.querySelector("#flats6").style.transition = "height .5s";
   document.querySelector("#info6").style.display = "block";
   document.querySelector("#info6").style.animation = "info 1s ease";
}
//mouseout from more detail about Wedges 6(Hidden-info)
document.querySelector("#flats6").addEventListener("mouseout", infoHide5);
function infoHide5() {
   document.querySelector("#info6").style.display = "none";
   document.querySelector("#flats6").style.transition = "height .7s";
   document.querySelector("#flats6").style.height = "670px";
}
//Footwear - Wedges 7
var flats6 = [
   "Images/women-f7.jpg",
   "Images/women-f7-2.jpg",
   "Images/women-f7-3.jpg",
   "Images/women-f7-4.jpg",
];
var f6 = 0;
document.flats7.src = "Images/women-f7.jpg";
function setFlats6() {
   document.flats7.src = flats6[f6];
}
setInterval(function autoSlider6() {
   if (f6 < flats6.length - 1) {
      f6++;
   } else {
      f6 = 0;
   }
   setFlats6();
}, 10000);
document.querySelector("#leftbtn-f7").addEventListener("click", leftbFlats6);
function leftbFlats6() {
   if (f6 > 0) {
      f6--;
   } else {
      f6 = flats6.length - 1;
   }
   setFlats6();
}
document.querySelector("#rightbtn-f7").addEventListener("click", rightbFlats6);
function rightbFlats6() {
   if (f6 < flats6.length - 1) {
      f6++;
   } else {
      f6 = 0;
   }
   setFlats6();
}
document.querySelector("#cart-f7").addEventListener("click", cartf7);
function cartf7() {
   document.querySelector("#cart-f7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-f7").addEventListener("click", buyf7);
function buyf7() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-f7").textContent =
         "Total Price : " + "₹" + 448 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about Wedges 7
document.querySelector("#flats7").addEventListener("mouseover", info6);
function info6() {
   document.querySelector("#flats7").style.height = "770px";
   document.querySelector("#flats7").style.transition = "height .5s";
   document.querySelector("#info7").style.display = "block";
   document.querySelector("#info7").style.animation = "info 1s ease";
}
//mouseout from more detail about Wedges 7(Hidden-info)
document.querySelector("#flats7").addEventListener("mouseout", infoHide6);
function infoHide6() {
   document.querySelector("#info7").style.display = "none";
   document.querySelector("#flats7").style.transition = "height .7s";
   document.querySelector("#flats7").style.height = "670px";
}
//Footwear - Wedges 8
var flats7 = [
   "Images/women-f8.jpg",
   "Images/women-f8-2.jpg",
   "Images/women-f8-3.jpg",
   "Images/women-f8-4.jpg",
];
var f7 = 0;
document.flats8.src = "Images/women-f8.jpg";
function setFlats7() {
   document.flats8.src = flats7[f7];
}
setInterval(function autoSlider7() {
   if (f7 < flats7.length - 1) {
      f7++;
   } else {
      f7 = 0;
   }
   setFlats7();
}, 10000);
document.querySelector("#leftbtn-f8").addEventListener("click", leftbFlats7);
function leftbFlats7() {
   if (f7 > 0) {
      f7--;
   } else {
      f7 = flats7.length - 1;
   }
   setFlats7();
}
document.querySelector("#rightbtn-f8").addEventListener("click", rightbFlats7);
function rightbFlats7() {
   if (f7 < flats7.length - 1) {
      f7++;
   } else {
      f7 = 0;
   }
   setFlats7();
}
document.querySelector("#cart-f8").addEventListener("click", cartf8);
function cartf8() {
   document.querySelector("#cart-f8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-f8").addEventListener("click", buyf8);
function buyf8() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-f8").textContent =
         "Total Price : " + "₹" + 494 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about Wedges 8
document.querySelector("#flats8").addEventListener("mouseover", info7);
function info7() {
   document.querySelector("#flats8").style.height = "770px";
   document.querySelector("#flats8").style.transition = "height .5s";
   document.querySelector("#info8").style.display = "block";
   document.querySelector("#info8").style.animation = "info 1s ease";
}
//mouseout from more detail about Wedges 8(Hidden-info)
document.querySelector("#flats8").addEventListener("mouseout", infoHide7);
function infoHide7() {
   document.querySelector("#info8").style.display = "none";
   document.querySelector("#flats8").style.transition = "height .7s";
   document.querySelector("#flats8").style.height = "670px";
}
//Footwear - Wedges 9
var flats8 = [
   "Images/women-f9.jpg",
   "Images/women-f9-2.jpg",
   "Images/women-f9-3.jpg",
   "Images/women-f9-4.jpg",
];
var f8 = 0;
document.flats9.src = "Images/women-f9.jpg";
function setFlats8() {
   document.flats9.src = flats8[f8];
}
setInterval(function autoSlider8() {
   if (f8 < flats8.length - 1) {
      f8++;
   } else {
      f8 = 0;
   }
   setFlats8();
}, 10000);
document.querySelector("#leftbtn-f9").addEventListener("click", leftbFlats8);
function leftbFlats8() {
   if (f8 > 0) {
      f8--;
   } else {
      f8 = flats8.length - 1;
   }
   setFlats8();
}
document.querySelector("#rightbtn-f9").addEventListener("click", rightbFlats8);
function rightbFlats8() {
   if (f8 < flats8.length - 1) {
      f8++;
   } else {
      f8 = 0;
   }
   setFlats8();
}
document.querySelector("#cart-f9").addEventListener("click", cartf9);
function cartf9() {
   document.querySelector("#cart-f9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-f9").addEventListener("click", buyf9);
function buyf9() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-f9").textContent =
         "Total Price : " + "₹" + 2135 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about Wedges 9
document.querySelector("#flats9").addEventListener("mouseover", info8);
function info8() {
   document.querySelector("#flats9").style.height = "770px";
   document.querySelector("#flats9").style.transition = "height .5s";
   document.querySelector("#info9").style.display = "block";
   document.querySelector("#info9").style.animation = "info 1s ease";
}
//mouseout from more detail about Wedges 9(Hidden-info)
document.querySelector("#flats9").addEventListener("mouseout", infoHide8);
function infoHide8() {
   document.querySelector("#info9").style.display = "none";
   document.querySelector("#flats9").style.transition = "height .7s";
   document.querySelector("#flats9").style.height = "670px";
}
//Footwear - Wedges 10
var flats9 = [
   "Images/women-f10.jpg",
   "Images/women-f10-2.jpg",
   "Images/women-f10-3.jpg",
   "Images/women-f10-4.jpg",
];
var f9 = 0;
document.flats10.src = "Images/women-f10.jpg";
function setFlats9() {
   document.flats10.src = flats9[f9];
}
setInterval(function autoSlider9() {
   if (f9 < flats9.length - 1) {
      f9++;
   } else {
      f9 = 0;
   }
   setFlats9();
}, 10000);
document.querySelector("#leftbtn-f10").addEventListener("click", leftbFlats9);
function leftbFlats9() {
   if (f9 > 0) {
      f9--;
   } else {
      f9 = flats9.length - 1;
   }
   setFlats9();
}
document.querySelector("#rightbtn-f10").addEventListener("click", rightbFlats9);
function rightbFlats9() {
   if (f9 < flats9.length - 1) {
      f9++;
   } else {
      f9 = 0;
   }
   setFlats9();
}
document.querySelector("#cart-f10").addEventListener("click", cartf10);
function cartf10() {
   document.querySelector("#cart-f10").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-f10").addEventListener("click", buyf10);
function buyf10() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-f10").textContent =
         "Total Price : " + "₹" + 489 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about Wedges 10
document.querySelector("#flats10").addEventListener("mouseover", info9);
function info9() {
   document.querySelector("#flats10").style.height = "770px";
   document.querySelector("#flats10").style.transition = "height .5s";
   document.querySelector("#info10").style.display = "block";
   document.querySelector("#info10").style.animation = "info 1s ease";
}
//mouseout from more detail about Wedges 10(Hidden-info)
document.querySelector("#flats10").addEventListener("mouseout", infoHide9);
function infoHide9() {
   document.querySelector("#info10").style.display = "none";
   document.querySelector("#flats10").style.transition = "height .7s";
   document.querySelector("#flats10").style.height = "670px";
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
