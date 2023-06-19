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
//Bussiness wear - Blazer 1
var blazer = [
   "Images/men-wc1.jpg",
   "Images/men-wc1-2.jpg",
   "Images/men-wc1-3.jpg",
   "Images/men-wc1-4.jpg",
];
var bl = 0;
document.blazer1.src = "Images/men-wc1.jpg";
function setBlazer() {
   document.blazer1.src = blazer[bl];
}
setInterval(function autoSlider() {
   if (bl < blazer.length - 1) {
      bl++;
   } else {
      bl = 0;
   }
   setBlazer();
}, 10000);
document.querySelector("#leftbtn-bl1").addEventListener("click", leftbBlazer);
function leftbBlazer() {
   if (bl > 0) {
      bl--;
   } else {
      bl = blazer.length - 1;
   }
   setBlazer();
}
document.querySelector("#rightbtn-bl1").addEventListener("click", rightbBlazer);
function rightbBlazer() {
   if (bl < blazer.length - 1) {
      bl++;
   } else {
      bl = 0;
   }
   setBlazer();
}
document.querySelector("#cart-bl1").addEventListener("click", cartBlazer1);
function cartBlazer1() {
   document.querySelector("#cart-bl1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-bl1").addEventListener("click", buyBlazer1);
function buyBlazer1() {
   const buyBlazer = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBlazer <= 10 && buyBlazer > 0) {
      document.querySelector("#total-bl1").textContent =
         "Total Price : " + "₹" + 975 * buyBlazer + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyBlazer === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Blazer 1)
document.querySelector("#bl1-type1").addEventListener("mouseover", bl1Type1);
function bl1Type1() {
   document.blazer1.src = "Images/men-wc1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Black";
}
document.querySelector("#bl1-type2").addEventListener("mouseover", bl1Type2);
function bl1Type2() {
   document.blazer1.src = "Images/men-wc1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Silver";
}
document.querySelector("#bl1-type3").addEventListener("mouseover", bl1Type3);
function bl1Type3() {
   document.blazer1.src = "Images/men-wc1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Brown";
}
document.querySelector("#bl1-type3").addEventListener("mouseover", bl1Type3);
function bl1Type3() {
   document.blazer1.src = "Images/men-wc1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Brown";
}
document.querySelector("#bl1-type4").addEventListener("mouseover", bl1Type4);
function bl1Type4() {
   document.blazer1.src = "Images/men-wc1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Green";
}
document.querySelector("#bl1-type5").addEventListener("mouseover", bl1Type5);
function bl1Type5() {
   document.blazer1.src = "Images/men-wc1-9.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Grey";
}
document.querySelector("#bl1-type6").addEventListener("mouseover", bl1Type6);
function bl1Type6() {
   document.blazer1.src = "Images/men-wc1-10.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Beige";
}
document.querySelector("#bl1-type7").addEventListener("mouseover", bl1Type7);
function bl1Type7() {
   document.blazer1.src = "Images/men-wc1.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Navy Blue";
}
// -mouseout from color images(Blazer 1)
document.querySelector("#bl1-type1").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   bl1Type7();
}
document.querySelector("#bl1-type2").addEventListener("mouseout", type1Mout1);
document.querySelector("#bl1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#bl1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#bl1-type5").addEventListener("mouseout", type1Mout1);
document.querySelector("#bl1-type6").addEventListener("mouseout", type1Mout1);
//Bussiness wear - Blazer 2
var blazer1 = [
   "Images/men-wc2.jpg",
   "Images/men-wc2-2.jpg",
   "Images/men-wc2-3.jpg",
   "Images/men-wc2-4.jpg",
];
var bl1 = 0;
document.blazer2.src = "Images/men-wc2.jpg";
function setBlazer1() {
   document.blazer2.src = blazer1[bl1];
}
setInterval(function autoSlider1() {
   if (bl1 < blazer1.length - 1) {
      bl1++;
   } else {
      bl1 = 0;
   }
   setBlazer1();
}, 10000);
document.querySelector("#leftbtn-bl2").addEventListener("click", leftbBlazer1);
function leftbBlazer1() {
   if (bl1 > 0) {
      bl1--;
   } else {
      bl1 = blazer1.length - 1;
   }
   setBlazer1();
}
document
   .querySelector("#rightbtn-bl2")
   .addEventListener("click", rightbBlazer1);
function rightbBlazer1() {
   if (bl1 < blazer1.length - 1) {
      bl1++;
   } else {
      bl1 = 0;
   }
   setBlazer1();
}
document.querySelector("#cart-bl2").addEventListener("click", cartBlazer2);
function cartBlazer2() {
   document.querySelector("#cart-bl2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-bl2").addEventListener("click", buyBlazer2);
function buyBlazer2() {
   const buyBlazer = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBlazer <= 10 && buyBlazer > 0) {
      document.querySelector("#total-bl2").textContent =
         "Total Price : " + "₹" + 3799 * buyBlazer + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyBlazer === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Blazer 2)
document.querySelector("#bl2-type1").addEventListener("mouseover", bl2Type1);
function bl2Type1() {
   document.blazer2.src = "Images/men-wc2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Red";
}
document.querySelector("#bl2-type2").addEventListener("mouseover", bl2Type2);
function bl2Type2() {
   document.blazer2.src = "Images/men-wc2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Beige";
}
document.querySelector("#bl2-type3").addEventListener("mouseover", bl2Type3);
function bl2Type3() {
   document.blazer2.src = "Images/men-wc2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Navy Blue";
}
document.querySelector("#bl2-type4").addEventListener("mouseover", bl2Type4);
function bl2Type4() {
   document.blazer2.src = "Images/men-wc2-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Orange";
}
document.querySelector("#bl2-type5").addEventListener("mouseover", bl2Type5);
function bl2Type5() {
   document.blazer2.src = "Images/men-wc2-8.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Brown";
}
document.querySelector("#bl2-type6").addEventListener("mouseover", bl2Type6);
function bl2Type6() {
   document.blazer2.src = "Images/men-wc2-9.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Green";
}
document.querySelector("#bl2-type7").addEventListener("mouseover", bl2Type7);
function bl2Type7() {
   document.blazer2.src = "Images/men-wc2-10.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Black";
}
document.querySelector("#bl2-type8").addEventListener("mouseover", bl2Type8);
function bl2Type8() {
   document.blazer2.src = "Images/men-wc2-11.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Purple";
}
document.querySelector("#bl2-type9").addEventListener("mouseover", bl2Type9);
function bl2Type9() {
   document.blazer2.src = "Images/men-wc2-12.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Sky Blue";
}
document.querySelector("#bl2-type10").addEventListener("mouseover", bl2Type10);
function bl2Type10() {
   document.blazer2.src = "Images/men-wc2-13.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Choco Brown";
}
// -mouseout from color images(Blazer 2)
document.querySelector("#bl2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   bl2Type1();
}
document.querySelector("#bl2-type3").addEventListener("mouseout", type2Mout1);
document.querySelector("#bl2-type4").addEventListener("mouseout", type2Mout1);
document.querySelector("#bl2-type5").addEventListener("mouseout", type2Mout1);
document.querySelector("#bl2-type6").addEventListener("mouseout", type2Mout1);
document.querySelector("#bl2-type7").addEventListener("mouseout", type2Mout1);
document.querySelector("#bl2-type8").addEventListener("mouseout", type2Mout1);
document.querySelector("#bl2-type9").addEventListener("mouseout", type2Mout1);
document.querySelector("#bl2-type10").addEventListener("mouseout", type2Mout1);
//Bussiness wear - Blazer 3
var blazer2 = [
   "Images/men-wc3.jpg",
   "Images/men-wc3-2.jpg",
   "Images/men-wc3-3.jpg",
   "Images/men-wc3-4.jpg",
];
var bl2 = 0;
document.blazer3.src = "Images/men-wc3.jpg";
function setBlazer2() {
   document.blazer3.src = blazer2[bl2];
}
setInterval(function autoSlider2() {
   if (bl2 < blazer2.length - 1) {
      bl2++;
   } else {
      bl2 = 0;
   }
   setBlazer2();
}, 10000);
document.querySelector("#leftbtn-bl3").addEventListener("click", leftbBlazer2);
function leftbBlazer2() {
   if (bl2 > 0) {
      bl2--;
   } else {
      bl2 = blazer2.length - 1;
   }
   setBlazer2();
}
document
   .querySelector("#rightbtn-bl3")
   .addEventListener("click", rightbBlazer2);
function rightbBlazer2() {
   if (bl2 < blazer2.length - 1) {
      bl2++;
   } else {
      bl2 = 0;
   }
   setBlazer2();
}
document.querySelector("#cart-bl3").addEventListener("click", cartBlazer3);
function cartBlazer3() {
   document.querySelector("#cart-bl3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-bl3").addEventListener("click", buyBlazer3);
function buyBlazer3() {
   const buyBlazer = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBlazer <= 10 && buyBlazer > 0) {
      document.querySelector("#total-bl3").textContent =
         "Total Price : " + "₹" + 2444 * buyBlazer + "  only";
      document.querySelector("#total-bl3").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyBlazer === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Blazer 3)
document.querySelector("#bl3-type1").addEventListener("mouseover", bl3Type1);
function bl3Type1() {
   document.blazer3.src = "Images/men-wc3-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Multi-1";
}
document.querySelector("#bl3-type2").addEventListener("mouseover", bl3Type2);
function bl3Type2() {
   document.blazer3.src = "Images/men-wc3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Multi-2";
}
// -mouseout from color images(Blazer 3)
document.querySelector("#bl3-type1").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   bl3Type2();
}
//Bussiness wear - Blazer 4
var blazer3 = [
   "Images/men-wc4.jpg",
   "Images/men-wc4-2.jpg",
   "Images/men-wc4-3.jpg",
   "Images/men-wc4-4.jpg",
];
var bl3 = 0;
document.blazer4.src = "Images/men-wc4.jpg";
function setBlazer3() {
   document.blazer4.src = blazer3[bl3];
}
setInterval(function autoSlider3() {
   if (bl3 < blazer3.length - 1) {
      bl3++;
   } else {
      bl3 = 0;
   }
   setBlazer3();
}, 10000);
document.querySelector("#leftbtn-bl4").addEventListener("click", leftbBlazer3);
function leftbBlazer3() {
   if (bl3 > 0) {
      bl3--;
   } else {
      bl3 = blazer3.length - 1;
   }
   setBlazer3();
}
document
   .querySelector("#rightbtn-bl4")
   .addEventListener("click", rightbBlazer3);
function rightbBlazer3() {
   if (bl3 < blazer3.length - 1) {
      bl3++;
   } else {
      bl3 = 0;
   }
   setBlazer3();
}
document.querySelector("#cart-bl4").addEventListener("click", cartBlazer4);
function cartBlazer4() {
   document.querySelector("#cart-bl4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-bl4").addEventListener("click", buyBlazer4);
function buyBlazer4() {
   const buyBlazer = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBlazer <= 10 && buyBlazer > 0) {
      document.querySelector("#total-bl4").textContent =
         "Total Price : " + "₹" + 1025 * buyBlazer + "  only";
      document.querySelector("#total-bl4").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyBlazer === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Blazer 4)
document.querySelector("#bl4-type1").addEventListener("mouseover", bl4Type1);
function bl4Type1() {
   document.blazer4.src = "Images/men-wc4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Green";
}
document.querySelector("#bl4-type2").addEventListener("mouseover", bl4Type2);
function bl4Type2() {
   document.blazer4.src = "Images/men-wc4-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Light Brown";
}
document.querySelector("#bl4-type3").addEventListener("mouseover", bl4Type3);
function bl4Type3() {
   document.blazer4.src = "Images/men-wc4-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Dark Grey";
}
document.querySelector("#bl4-type4").addEventListener("mouseover", bl4Type4);
function bl4Type4() {
   document.blazer4.src = "Images/men-wc4-7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Beige";
}
document.querySelector("#bl4-type5").addEventListener("mouseover", bl4Type5);
function bl4Type5() {
   document.blazer4.src = "Images/men-wc4-8.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Brown";
}
document.querySelector("#bl4-type6").addEventListener("mouseover", bl4Type6);
function bl4Type6() {
   document.blazer4.src = "Images/men-wc4-9.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Navy Blue";
}
document.querySelector("#bl4-type7").addEventListener("mouseover", bl4Type7);
function bl4Type7() {
   document.blazer4.src = "Images/men-wc4-10.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Grey";
}
document.querySelector("#bl4-type8").addEventListener("mouseover", bl4Type8);
function bl4Type8() {
   document.blazer4.src = "Images/men-wc4-11.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Silver";
}
document.querySelector("#bl4-type9").addEventListener("mouseover", bl4Type9);
function bl4Type9() {
   document.blazer4.src = "Images/men-wc4-12.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Black";
}
// -mouseout from color images(Blazer 4)
document.querySelector("#bl4-type2").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   bl4Type1();
}
document.querySelector("#bl4-type3").addEventListener("mouseout", type4Mout1);
document.querySelector("#bl4-type4").addEventListener("mouseout", type4Mout1);
document.querySelector("#bl4-type5").addEventListener("mouseout", type4Mout1);
document.querySelector("#bl4-type6").addEventListener("mouseout", type4Mout1);
document.querySelector("#bl4-type7").addEventListener("mouseout", type4Mout1);
document.querySelector("#bl4-type8").addEventListener("mouseout", type4Mout1);
document.querySelector("#bl4-type9").addEventListener("mouseout", type4Mout1);
//Bussiness wear - Blazer 5
var blazer4 = [
   "Images/men-wc5.jpg",
   "Images/men-wc5-2.jpg",
   "Images/men-wc5-3.jpg",
   "Images/men-wc5-4.jpg",
];
var bl4 = 0;
document.blazer5.src = "Images/men-wc5.jpg";
function setBlazer4() {
   document.blazer5.src = blazer4[bl4];
}
setInterval(function autoSlider4() {
   if (bl4 < blazer4.length - 1) {
      bl4++;
   } else {
      bl4 = 0;
   }
   setBlazer4();
}, 10000);
document.querySelector("#leftbtn-bl5").addEventListener("click", leftbBlazer4);
function leftbBlazer4() {
   if (bl4 > 0) {
      bl4--;
   } else {
      bl4 = blazer4.length - 1;
   }
   setBlazer4();
}
document
   .querySelector("#rightbtn-bl5")
   .addEventListener("click", rightbBlazer4);
function rightbBlazer4() {
   if (bl4 < blazer4.length - 1) {
      bl4++;
   } else {
      bl4 = 0;
   }
   setBlazer4();
}
document.querySelector("#cart-bl5").addEventListener("click", cartBlazer5);
function cartBlazer5() {
   document.querySelector("#cart-bl5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-bl5").addEventListener("click", buyBlazer5);
function buyBlazer5() {
   const buyBlazer = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBlazer <= 10 && buyBlazer > 0) {
      document.querySelector("#total-bl5").textContent =
         "Total Price : " + "₹" + 2099 * buyBlazer + "  only";
      document.querySelector("#total-bl5").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyBlazer === 0) {
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
//Bussiness wear - Blazer 6
var blazer5 = [
   "Images/men-wc6.jpg",
   "Images/men-wc6-2.jpg",
   "Images/men-wc6-3.jpg",
   "Images/men-wc6-4.jpg",
];
var bl5 = 0;
document.blazer6.src = "Images/men-wc6.jpg";
function setBlazer5() {
   document.blazer6.src = blazer5[bl5];
}
setInterval(function autoSlider5() {
   if (bl5 < blazer5.length - 1) {
      bl5++;
   } else {
      bl5 = 0;
   }
   setBlazer5();
}, 10000);
document.querySelector("#leftbtn-bl6").addEventListener("click", leftbBlazer5);
function leftbBlazer5() {
   if (bl5 > 0) {
      bl5--;
   } else {
      bl5 = blazer5.length - 1;
   }
   setBlazer5();
}
document
   .querySelector("#rightbtn-bl6")
   .addEventListener("click", rightbBlazer5);
function rightbBlazer5() {
   if (bl5 < blazer5.length - 1) {
      bl5++;
   } else {
      bl5 = 0;
   }
   setBlazer5();
}
document.querySelector("#cart-bl6").addEventListener("click", cartBlazer6);
function cartBlazer6() {
   document.querySelector("#cart-bl6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-bl6").addEventListener("click", buyBlazer6);
function buyBlazer6() {
   const buyBlazer = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBlazer <= 10 && buyBlazer > 0) {
      document.querySelector("#total-bl6").textContent =
         "Total Price : " + "₹" + 2999 * buyBlazer + "  only";
      document.querySelector("#total-bl6").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyBlazer === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Blazer 6)
document.querySelector("#bl6-type1").addEventListener("mouseover", bl6Type1);
function bl6Type1() {
   document.blazer6.src = "Images/men-wc6-11.jpg";
   document.querySelector("#color-name4").innerHTML = " Color:  Gold";
}
document.querySelector("#bl6-type2").addEventListener("mouseover", bl6Type2);
function bl6Type2() {
   document.blazer6.src = "Images/men-wc6-10.jpg";
   document.querySelector("#color-name4").innerHTML = " Color:  Brown";
}
document.querySelector("#bl6-type3").addEventListener("mouseover", bl6Type3);
function bl6Type3() {
   document.blazer6.src = "Images/men-wc6-9.jpg";
   document.querySelector("#color-name4").innerHTML = " Color:  Green";
}
document.querySelector("#bl6-type4").addEventListener("mouseover", bl6Type4);
function bl6Type4() {
   document.blazer6.src = "Images/men-wc6-8.jpg";
   document.querySelector("#color-name4").innerHTML = " Color:  Wine";
}
document.querySelector("#bl6-type5").addEventListener("mouseover", bl6Type5);
function bl6Type5() {
   document.blazer6.src = "Images/men-wc6-7.jpg";
   document.querySelector("#color-name4").innerHTML = " Color:  Navy Blue";
}
document.querySelector("#bl6-type6").addEventListener("mouseover", bl6Type6);
function bl6Type6() {
   document.blazer6.src = "Images/men-wc6-6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color:  Red";
}
document.querySelector("#bl6-type7").addEventListener("mouseover", bl6Type7);
function bl6Type7() {
   document.blazer6.src = "Images/men-wc6-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color:  Black";
}
document.querySelector("#bl6-type8").addEventListener("mouseover", bl6Type8);
function bl6Type8() {
   document.blazer6.src = "Images/men-wc6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color:  Royal Blue";
}
// -mouseout from color images(Blazer 4)
document.querySelector("#bl6-type1").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   bl6Type8();
}
document.querySelector("#bl6-type2").addEventListener("mouseout", type6Mout1);
document.querySelector("#bl6-type3").addEventListener("mouseout", type6Mout1);
document.querySelector("#bl6-type4").addEventListener("mouseout", type6Mout1);
document.querySelector("#bl6-type5").addEventListener("mouseout", type6Mout1);
document.querySelector("#bl6-type6").addEventListener("mouseout", type6Mout1);
document.querySelector("#bl6-type7").addEventListener("mouseout", type6Mout1);
//Bussiness wear - Blazer 7
var blazer6 = [
   "Images/men-wc7.jpg",
   "Images/men-wc7-2.jpg",
   "Images/men-wc7-3.jpg",
   "Images/men-wc7-4.jpg",
];
var bl6 = 0;
document.blazer7.src = "Images/men-wc7.jpg";
function setBlazer6() {
   document.blazer7.src = blazer6[bl6];
}
setInterval(function autoSlider6() {
   if (bl6 < blazer6.length - 1) {
      bl6++;
   } else {
      bl6 = 0;
   }
   setBlazer6();
}, 10000);
document.querySelector("#leftbtn-bl7").addEventListener("click", leftbBlazer6);
function leftbBlazer6() {
   if (bl6 > 0) {
      bl6--;
   } else {
      bl6 = blazer6.length - 1;
   }
   setBlazer6();
}
document
   .querySelector("#rightbtn-bl7")
   .addEventListener("click", rightbBlazer6);
function rightbBlazer6() {
   if (bl6 < blazer6.length - 1) {
      bl6++;
   } else {
      bl6 = 0;
   }
   setBlazer6();
}
document.querySelector("#cart-bl7").addEventListener("click", cartBlazer7);
function cartBlazer7() {
   document.querySelector("#cart-bl7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-bl7").addEventListener("click", buyBlazer7);
function buyBlazer7() {
   const buyBlazer = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBlazer <= 10 && buyBlazer > 0) {
      document.querySelector("#total-bl7").textContent =
         "Total Price : " + "₹" + 1499 * buyBlazer + "  only";
      document.querySelector("#total-bl7").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyBlazer === 0) {
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
