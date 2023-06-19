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
//Winter Wear - Hoodie & Jackets 1
var hoodie = [
   "Images/women-h1.jpg",
   "Images/women-h1-2.jpg",
   "Images/women-h1-3.jpg",
   "Images/women-h1-4.jpg",
];
var h = 0;
document.hoodie1.src = "Images/women-h1.jpg";
function setHoodie() {
   document.hoodie1.src = hoodie[h];
}
setInterval(function autoSlider() {
   if (h < hoodie.length - 1) {
      h++;
   } else {
      h = 0;
   }
   setHoodie();
}, 10000);
document.querySelector("#leftbtn-h1").addEventListener("click", leftbHoodie);
function leftbHoodie() {
   if (h > 0) {
      h--;
   } else {
      h = hoodie.length - 1;
   }
   setHoodie();
}
document.querySelector("#rightbtn-h1").addEventListener("click", rightbHoodie);
function rightbHoodie() {
   if (h < hoodie.length - 1) {
      h++;
   } else {
      h = 0;
   }
   setHoodie();
}
document.querySelector("#cart-h1").addEventListener("click", carth1);
function carth1() {
   document.querySelector("#cart-h1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h1").addEventListener("click", buyh1);
function buyh1() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-h1").textContent =
         "Total Price : " + "₹" + 1985 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Hoodie 1)
document.querySelector("#h1-type1").addEventListener("mouseover", h1Type1);
function h1Type1() {
   document.hoodie1.src = "Images/women-h1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Jet Black";
}
document.querySelector("#h1-type2").addEventListener("mouseover", h1Type2);
function h1Type2() {
   document.hoodie1.src = "Images/women-h1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Snow White";
}
// -mouseout (Hoodie 1)
document.querySelector("#h1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   h1Type1();
}
//Winter Wear - Hoodie & Jackets 2
var hoodie1 = [
   "Images/women-h2.jpg",
   "Images/women-h2-2.jpg",
   "Images/women-h2-3.jpg",
   "Images/women-h2-4.jpg",
];
var h1 = 0;
document.hoodie2.src = "Images/women-h2.jpg";
function setHoodie1() {
   document.hoodie2.src = hoodie1[h1];
}
setInterval(function autoSlider1() {
   if (h1 < hoodie1.length - 1) {
      h1++;
   } else {
      h1 = 0;
   }
   setHoodie1();
}, 10000);
document.querySelector("#leftbtn-h2").addEventListener("click", leftbHoodie1);
function leftbHoodie1() {
   if (h1 > 0) {
      h1--;
   } else {
      h1 = hoodie1.length - 1;
   }
   setHoodie1();
}
document.querySelector("#rightbtn-h2").addEventListener("click", rightbHoodie1);
function rightbHoodie1() {
   if (h1 < hoodie1.length - 1) {
      h1++;
   } else {
      h1 = 0;
   }
   setHoodie1();
}
document.querySelector("#cart-h2").addEventListener("click", carth2);
function carth2() {
   document.querySelector("#cart-h2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h2").addEventListener("click", buyh2);
function buyh2() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-h2").textContent =
         "Total Price : " + "₹" + 449 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Hoodie 2)
document.querySelector("#h2-type1").addEventListener("mouseover", h2Type1);
function h2Type1() {
   document.hoodie2.src = "Images/women-h2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Baby Pink";
}
document.querySelector("#h2-type2").addEventListener("mouseover", h2Type2);
function h2Type2() {
   document.hoodie2.src = "Images/women-h2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black";
}
document.querySelector("#h2-type3").addEventListener("mouseover", h2Type3);
function h2Type3() {
   document.hoodie2.src = "Images/women-h2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Navy Blue";
}
document.querySelector("#h2-type4").addEventListener("mouseover", h2Type4);
function h2Type4() {
   document.hoodie2.src = "Images/women-h2-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Brown";
}
document.querySelector("#h2-type5").addEventListener("mouseover", h2Type5);
function h2Type5() {
   document.hoodie2.src = "Images/women-h2-8.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Olive Green";
}
document.querySelector("#h2-type6").addEventListener("mouseover", h2Type6);
function h2Type6() {
   document.hoodie2.src = "Images/women-h2-9.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Maroon";
}
document.querySelector("#h2-type7").addEventListener("mouseover", h2Type7);
function h2Type7() {
   document.hoodie2.src = "Images/women-h2-10.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Orange";
}
document.querySelector("#h2-type8").addEventListener("mouseover", h2Type8);
function h2Type8() {
   document.hoodie2.src = "Images/women-h2-11.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Red";
}
document.querySelector("#h2-type9").addEventListener("mouseover", h2Type9);
function h2Type9() {
   document.hoodie2.src = "Images/women-h2-12.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Rust";
}
document.querySelector("#h2-type10").addEventListener("mouseover", h2Type10);
function h2Type10() {
   document.hoodie2.src = "Images/women-h2-13.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Mustard";
}
document.querySelector("#h2-type11").addEventListener("mouseover", h2Type11);
function h2Type11() {
   document.hoodie2.src = "Images/women-h2-14.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: White";
}
// -mouseout (Hoodie 2)
document.querySelector("#h2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   h2Type1();
}
document.querySelector("#h2-type3").addEventListener("mouseout", type2Mout1);
document.querySelector("#h2-type4").addEventListener("mouseout", type2Mout1);
document.querySelector("#h2-type5").addEventListener("mouseout", type2Mout1);
document.querySelector("#h2-type6").addEventListener("mouseout", type2Mout1);
document.querySelector("#h2-type7").addEventListener("mouseout", type2Mout1);
document.querySelector("#h2-type8").addEventListener("mouseout", type2Mout1);
document.querySelector("#h2-type9").addEventListener("mouseout", type2Mout1);
document.querySelector("#h2-type10").addEventListener("mouseout", type2Mout1);
document.querySelector("#h2-type11").addEventListener("mouseout", type2Mout1);
//Winter Wear - Hoodie & Jackets 3
var hoodie2 = [
   "Images/women-h3.jpg",
   "Images/women-h3-2.jpg",
   "Images/women-h3-3.jpg",
   "Images/women-h3-4.jpg",
];
var h2 = 0;
document.hoodie3.src = "Images/women-h3.jpg";
function setHoodie2() {
   document.hoodie3.src = hoodie2[h2];
}
setInterval(function autoSlider2() {
   if (h2 < hoodie2.length - 1) {
      h2++;
   } else {
      h2 = 0;
   }
   setHoodie2();
}, 10000);
document.querySelector("#leftbtn-h3").addEventListener("click", leftbHoodie2);
function leftbHoodie2() {
   if (h2 > 0) {
      h2--;
   } else {
      h2 = hoodie2.length - 1;
   }
   setHoodie2();
}
document.querySelector("#rightbtn-h3").addEventListener("click", rightbHoodie2);
function rightbHoodie2() {
   if (h2 < hoodie2.length - 1) {
      h2++;
   } else {
      h2 = 0;
   }
   setHoodie2();
}
document.querySelector("#cart-h3").addEventListener("click", carth3);
function carth3() {
   document.querySelector("#cart-h3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h3").addEventListener("click", buyh3);
function buyh3() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-h3").textContent =
         "Total Price : " + "₹" + 1706 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Hoodie 3)
document.querySelector("#h3-type1").addEventListener("mouseover", h3Type1);
function h3Type1() {
   document.hoodie3.src = "Images/women-h3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Snow White";
}
document.querySelector("#h3-type2").addEventListener("mouseover", h3Type2);
function h3Type2() {
   document.hoodie3.src = "Images/women-h3-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Jet Black";
}
// -mouseout (Hoodie 3)
document.querySelector("#h3-type2").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   h3Type1();
}
//Winter Wear - Hoodie & Jackets 4
var hoodie3 = [
   "Images/women-h4.jpg",
   "Images/women-h4-2.jpg",
   "Images/women-h4-3.jpg",
   "Images/women-h4-4.jpg",
];
var h3 = 0;
document.hoodie4.src = "Images/women-h4.jpg";
function setHoodie3() {
   document.hoodie4.src = hoodie3[h3];
}
setInterval(function autoSlider3() {
   if (h3 < hoodie3.length - 1) {
      h3++;
   } else {
      h3 = 0;
   }
   setHoodie3();
}, 10000);
document.querySelector("#leftbtn-h4").addEventListener("click", leftbHoodie3);
function leftbHoodie3() {
   if (h3 > 0) {
      h3--;
   } else {
      h3 = hoodie3.length - 1;
   }
   setHoodie3();
}
document.querySelector("#rightbtn-h4").addEventListener("click", rightbHoodie3);
function rightbHoodie3() {
   if (h3 < hoodie3.length - 1) {
      h3++;
   } else {
      h3 = 0;
   }
   setHoodie3();
}
document.querySelector("#cart-h4").addEventListener("click", carth4);
function carth4() {
   document.querySelector("#cart-h4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h4").addEventListener("click", buyh4);
function buyh4() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-h4").textContent =
         "Total Price : " + "₹" + 599 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Hoodie 4)
document.querySelector("#h4-type1").addEventListener("mouseover", h4Type1);
function h4Type1() {
   document.hoodie4.src = "Images/women-h4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Sea Green";
}
document.querySelector("#h4-type2").addEventListener("mouseover", h4Type2);
function h4Type2() {
   document.hoodie4.src = "Images/women-h4-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Baby Pink";
}
document.querySelector("#h4-type3").addEventListener("mouseover", h4Type3);
function h4Type3() {
   document.hoodie4.src = "Images/women-h4-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Mustard";
}
document.querySelector("#h4-type4").addEventListener("mouseover", h4Type4);
function h4Type4() {
   document.hoodie4.src = "Images/women-h4-7.jpg";
   document.querySelector("#color-name3").innerHTML =
      " Color: Olive Brown Green";
}
// -mouseout (Hoodie 4)
document.querySelector("#h4-type2").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   h4Type1();
}
document.querySelector("#h4-type3").addEventListener("mouseout", type4Mout1);
document.querySelector("#h4-type4").addEventListener("mouseout", type4Mout1);
//Winter Wear - Hoodie & Jackets 5
var hoodie4 = [
   "Images/women-h5.jpg",
   "Images/women-h5-2.jpg",
   "Images/women-h5-3.jpg",
   "Images/women-h5-4.jpg",
];
var h4 = 0;
document.hoodie5.src = "Images/women-h5.jpg";
function setHoodie4() {
   document.hoodie5.src = hoodie4[h4];
}
setInterval(function autoSlider4() {
   if (h4 < hoodie4.length - 1) {
      h4++;
   } else {
      h4 = 0;
   }
   setHoodie4();
}, 10000);
document.querySelector("#leftbtn-h5").addEventListener("click", leftbHoodie4);
function leftbHoodie4() {
   if (h4 > 0) {
      h4--;
   } else {
      h4 = hoodie4.length - 1;
   }
   setHoodie4();
}
document.querySelector("#rightbtn-h5").addEventListener("click", rightbHoodie4);
function rightbHoodie4() {
   if (h4 < hoodie4.length - 1) {
      h4++;
   } else {
      h4 = 0;
   }
   setHoodie4();
}
document.querySelector("#cart-h5").addEventListener("click", carth5);
function carth5() {
   document.querySelector("#cart-h5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h5").addEventListener("click", buyh5);
function buyh5() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-h5").textContent =
         "Total Price : " + "₹" + 549 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Hoodie 5)
document.querySelector("#h5-type1").addEventListener("mouseover", h5Type1);
function h5Type1() {
   document.hoodie5.src = "Images/women-h5.jpg";
   document.querySelector("#color-name4").innerHTML =
      " Color: Navy Blue & Off-White";
}
document.querySelector("#h5-type2").addEventListener("mouseover", h5Type2);
function h5Type2() {
   document.hoodie5.src = "Images/women-h5-5.jpg";
   document.querySelector("#color-name4").innerHTML =
      " Color: Sea Green & Yellow";
}
// -mouseout (Hoodie 5)
document.querySelector("#h5-type2").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   h5Type1();
}
// out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of stock");
}
//Winter Wear - Hoodie & Jackets 6
var hoodie5 = [
   "Images/women-h6.jpg",
   "Images/women-h6-2.jpg",
   "Images/women-h6-3.jpg",
   "Images/women-h6-4.jpg",
];
var h5 = 0;
document.hoodie6.src = "Images/women-h6.jpg";
function setHoodie5() {
   document.hoodie6.src = hoodie5[h5];
}
setInterval(function autoSlider5() {
   if (h5 < hoodie5.length - 1) {
      h5++;
   } else {
      h5 = 0;
   }
   setHoodie5();
}, 10000);
document.querySelector("#leftbtn-h6").addEventListener("click", leftbHoodie5);
function leftbHoodie5() {
   if (h5 > 0) {
      h5--;
   } else {
      h5 = hoodie5.length - 1;
   }
   setHoodie5();
}
document.querySelector("#rightbtn-h6").addEventListener("click", rightbHoodie5);
function rightbHoodie5() {
   if (h5 < hoodie5.length - 1) {
      h5++;
   } else {
      h5 = 0;
   }
   setHoodie5();
}
document.querySelector("#cart-h6").addEventListener("click", carth6);
function carth6() {
   document.querySelector("#cart-h6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h6").addEventListener("click", buyh6);
function buyh6() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-h6").textContent =
         "Total Price : " + "₹" + 499 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter Wear - Hoodie & Jackets 7
var hoodie6 = [
   "Images/women-h7.jpg",
   "Images/women-h7-2.jpg",
   "Images/women-h7-3.jpg",
   "Images/women-h7-4.jpg",
];
var h6 = 0;
document.hoodie7.src = "Images/women-h7.jpg";
function setHoodie6() {
   document.hoodie7.src = hoodie6[h6];
}
setInterval(function autoSlider6() {
   if (h6 < hoodie6.length - 1) {
      h6++;
   } else {
      h6 = 0;
   }
   setHoodie6();
}, 10000);
document.querySelector("#leftbtn-h7").addEventListener("click", leftbHoodie6);
function leftbHoodie6() {
   if (h6 > 0) {
      h6--;
   } else {
      h6 = hoodie6.length - 1;
   }
   setHoodie6();
}
document.querySelector("#rightbtn-h7").addEventListener("click", rightbHoodie6);
function rightbHoodie6() {
   if (h6 < hoodie6.length - 1) {
      h6++;
   } else {
      h6 = 0;
   }
   setHoodie6();
}
document.querySelector("#cart-h7").addEventListener("click", carth7);
function carth7() {
   document.querySelector("#cart-h7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h7").addEventListener("click", buyh7);
function buyh7() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-h7").textContent =
         "Total Price : " + "₹" + 1999 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter Wear - Hoodie & Jackets 8
var hoodie7 = [
   "Images/women-h8.jpg",
   "Images/women-h8-2.jpg",
   "Images/women-h8-3.jpg",
   "Images/women-h8-4.jpg",
];
var h7 = 0;
document.hoodie8.src = "Images/women-h8.jpg";
function setHoodie7() {
   document.hoodie8.src = hoodie7[h7];
}
setInterval(function autoSlider7() {
   if (h7 < hoodie7.length - 1) {
      h7++;
   } else {
      h7 = 0;
   }
   setHoodie7();
}, 10000);
document.querySelector("#leftbtn-h8").addEventListener("click", leftbHoodie7);
function leftbHoodie7() {
   if (h7 > 0) {
      h7--;
   } else {
      h7 = hoodie7.length - 1;
   }
   setHoodie7();
}
document.querySelector("#rightbtn-h8").addEventListener("click", rightbHoodie7);
function rightbHoodie7() {
   if (h7 < hoodie7.length - 1) {
      h7++;
   } else {
      h7 = 0;
   }
   setHoodie7();
}
document.querySelector("#cart-h8").addEventListener("click", carth8);
function carth8() {
   document.querySelector("#cart-h8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h8").addEventListener("click", buyh8);
function buyh8() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-h8").textContent =
         "Total Price : " + "₹" + 782 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter Wear - Hoodie & Jackets 9
var hoodie8 = [
   "Images/women-h9.jpg",
   "Images/women-h9-2.jpg",
   "Images/women-h9-3.jpg",
   "Images/women-h9-4.jpg",
];
var h8 = 0;
document.hoodie9.src = "Images/women-h9.jpg";
function setHoodie8() {
   document.hoodie9.src = hoodie8[h8];
}
setInterval(function autoSlider8() {
   if (h8 < hoodie8.length - 1) {
      h8++;
   } else {
      h8 = 0;
   }
   setHoodie8();
}, 10000);
document.querySelector("#leftbtn-h9").addEventListener("click", leftbHoodie8);
function leftbHoodie8() {
   if (h8 > 0) {
      h8--;
   } else {
      h8 = hoodie8.length - 1;
   }
   setHoodie8();
}
document.querySelector("#rightbtn-h9").addEventListener("click", rightbHoodie8);
function rightbHoodie8() {
   if (h8 < hoodie8.length - 1) {
      h8++;
   } else {
      h8 = 0;
   }
   setHoodie8();
}
document.querySelector("#cart-h9").addEventListener("click", carth9);
function carth9() {
   document.querySelector("#cart-h9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h9").addEventListener("click", buyh9);
function buyh9() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-h9").textContent =
         "Total Price : " + "₹" + 399 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Hoodie 9)
document.querySelector("#h9-type1").addEventListener("mouseover", h9Type1);
function h9Type1() {
   document.hoodie9.src = "Images/women-h9.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Green/White";
}
document.querySelector("#h9-type2").addEventListener("mouseover", h9Type2);
function h9Type2() {
   document.hoodie9.src = "Images/women-h9-5.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Black/White";
}
document.querySelector("#h9-type3").addEventListener("mouseover", h9Type3);
function h9Type3() {
   document.hoodie9.src = "Images/women-h9-6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Blue/White";
}
document.querySelector("#h9-type4").addEventListener("mouseover", h9Type4);
function h9Type4() {
   document.hoodie9.src = "Images/women-h9-7.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Maroon/White";
}
document.querySelector("#h9-type5").addEventListener("mouseover", h9Type5);
function h9Type5() {
   document.hoodie9.src = "Images/women-h9-8.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Yellow/White";
}
// -mouseout (Hoodie 9)
document.querySelector("#h9-type2").addEventListener("mouseout", type9Mout1);
function type9Mout1() {
   h9Type1();
}
document.querySelector("#h9-type3").addEventListener("mouseout", type9Mout1);
document.querySelector("#h9-type4").addEventListener("mouseout", type9Mout1);
document.querySelector("#h9-type5").addEventListener("mouseout", type9Mout1);
//Winter Wear - Hoodie & Jackets 10
var hoodie9 = [
   "Images/women-h10.jpg",
   "Images/women-h10-2.jpg",
   "Images/women-h10-3.jpg",
   "Images/women-h10-4.jpg",
];
var h9 = 0;
document.hoodie10.src = "Images/women-h10.jpg";
function setHoodie9() {
   document.hoodie10.src = hoodie9[h9];
}
setInterval(function autoSlider9() {
   if (h9 < hoodie9.length - 1) {
      h9++;
   } else {
      h9 = 0;
   }
   setHoodie9();
}, 10000);
document.querySelector("#leftbtn-h10").addEventListener("click", leftbHoodie9);
function leftbHoodie9() {
   if (h9 > 0) {
      h9--;
   } else {
      h9 = hoodie9.length - 1;
   }
   setHoodie9();
}
document
   .querySelector("#rightbtn-h10")
   .addEventListener("click", rightbHoodie9);
function rightbHoodie9() {
   if (h9 < hoodie9.length - 1) {
      h9++;
   } else {
      h9 = 0;
   }
   setHoodie9();
}
document.querySelector("#cart-h10").addEventListener("click", carth10);
function carth10() {
   document.querySelector("#cart-h10").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h10").addEventListener("click", buyh10);
function buyh10() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-h10").textContent =
         "Total Price : " + "₹" + 974 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Hoodie 10)
document.querySelector("#h10-type1").addEventListener("mouseover", h10Type1);
function h10Type1() {
   document.hoodie10.src = "Images/women-h10.jpg";
   document.querySelector("#color-name6").innerHTML = " Color: Pink";
}
document.querySelector("#h10-type2").addEventListener("mouseover", h10Type2);
function h10Type2() {
   document.hoodie10.src = "Images/women-h10-5.jpg";
   document.querySelector("#color-name6").innerHTML = " Color: Green";
}
document.querySelector("#h10-type3").addEventListener("mouseover", h10Type3);
function h10Type3() {
   document.hoodie10.src = "Images/women-h10-6.jpg";
   document.querySelector("#color-name6").innerHTML = " Color: Light Grey";
}
// -mouseout (Hoodie 10)
document.querySelector("#h10-type2").addEventListener("mouseout", type10Mout1);
function type10Mout1() {
   h10Type1();
}
document.querySelector("#h10-type3").addEventListener("mouseout", type10Mout1);
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
