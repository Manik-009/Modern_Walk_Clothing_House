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
//size chart
document.querySelector("#show-schart").addEventListener("click", showSch);
function showSch() {
   if (document.querySelector("#tbl").style.display != "block") {
      document.querySelector("#tbl").style.display = "block";
      document.querySelector("#tbl").style.animation = "sizeCh 1s ease-in .01s";
   } else {
      document.querySelector("#tbl").style.display = "none";
   }
}
//Bottom wear - Shorts1
var shorts = [
   "Images/men-shorts1.jpg",
   "Images/men-shorts1-2.jpg",
   "Images/men-shorts1-3.jpg",
];
var sh = 0;
document.shorts1.src = "Images/men-shorts1.jpg";
function setShorts() {
   document.shorts1.src = shorts[sh];
}
setInterval(function autoSlider() {
   if (sh < shorts.length - 1) {
      sh++;
   } else {
      sh = 0;
   }
   setShorts();
}, 10000);
document.querySelector("#leftbtn-sh1").addEventListener("click", leftbShorts);
function leftbShorts() {
   if (sh > 0) {
      sh--;
   } else {
      sh = shorts.length - 1;
   }
   setShorts();
}
document
   .querySelector("#rightbtn-sh1")
   .addEventListener("click", rightbFleftbShorts);
function rightbFleftbShorts() {
   if (sh < shorts.length - 1) {
      sh++;
   } else {
      sh = 0;
   }
   setShorts();
}
document.querySelector("#cart-sh1").addEventListener("click", cartShorts1);
function cartShorts1() {
   document.querySelector("#cart-sh1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sh1").addEventListener("click", buyShorts1);
function buyShorts1() {
   const buyShort = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShort <= 10 && buyShort > 0) {
      document.querySelector("#total-sh1").textContent =
         "Total Price : " + "₹" + 519 * buyShort + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShort === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Shorts1)
document.querySelector("#sh1-type1").addEventListener("mouseover", sh1Type1);
function sh1Type1() {
   document.shorts1.src = "Images/men-shorts1-4.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Red";
}
document.querySelector("#sh1-type2").addEventListener("mouseover", sh1Type2);
function sh1Type2() {
   document.shorts1.src = "Images/men-shorts1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Green";
}
document.querySelector("#sh1-type3").addEventListener("mouseover", sh1Type3);
function sh1Type3() {
   document.shorts1.src = "Images/men-shorts1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Blue";
}
// -mouseout from color images(Shorts1)
document.querySelector("#sh1-type1").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   sh1Type2();
}
document.querySelector("#sh1-type3").addEventListener("mouseout", type1Mout1);
//Bottom wear - Shorts2
var shorts1 = [
   "Images/men-shorts2.jpg",
   "Images/men-shorts2-2.jpg",
   "Images/men-shorts2-3.jpg",
];
var sh1 = 0;
document.shorts2.src = "Images/men-shorts2.jpg";
function setShorts1() {
   document.shorts2.src = shorts1[sh1];
}
setInterval(function autoSlider1() {
   if (sh1 < shorts1.length - 1) {
      sh1++;
   } else {
      sh1 = 0;
   }
   setShorts1();
}, 10000);
document.querySelector("#leftbtn-sh2").addEventListener("click", leftbShorts1);
function leftbShorts1() {
   if (sh1 > 0) {
      sh1--;
   } else {
      sh1 = shorts1.length - 1;
   }
   setShorts1();
}
document
   .querySelector("#rightbtn-sh2")
   .addEventListener("click", rightbFleftbShorts1);
function rightbFleftbShorts1() {
   if (sh1 < shorts1.length - 1) {
      sh1++;
   } else {
      sh1 = 0;
   }
   setShorts1();
}
document.querySelector("#cart-sh2").addEventListener("click", cartShorts2);
function cartShorts2() {
   document.querySelector("#cart-sh2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sh2").addEventListener("click", buyShorts2);
function buyShorts2() {
   const buyShort = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShort <= 10 && buyShort > 0) {
      document.querySelector("#total-sh2").textContent =
         "Total Price : " + "₹" + 429 * buyShort + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShort === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Shorts2)
document.querySelector("#sh2-type1").addEventListener("mouseover", sh2Type1);
function sh2Type1() {
   document.shorts2.src = "Images/men-shorts2-4.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black";
}
document.querySelector("#sh2-type2").addEventListener("mouseover", sh2Type2);
function sh2Type2() {
   document.shorts2.src = "Images/men-shorts2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Grey";
}
document.querySelector("#sh2-type3").addEventListener("mouseover", sh2Type3);
function sh2Type3() {
   document.shorts2.src = "Images/men-shorts2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Camouflage";
}
document.querySelector("#sh2-type4").addEventListener("mouseover", sh2Type4);
function sh2Type4() {
   document.shorts2.src = "Images/men-shorts2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Red";
}
// -mouseout from color images(Shorts2)
document.querySelector("#sh2-type1").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   sh2Type2();
}
document.querySelector("#sh2-type3").addEventListener("mouseout", type2Mout1);
document.querySelector("#sh2-type4").addEventListener("mouseout", type2Mout1);
//out of stock
document.querySelector("#oos1").addEventListener("click", outOfstock);
function outOfstock() {
   alert("Out of stock");
}
//Bottom wear - Shorts3
var shorts2 = [
   "Images/men-shorts3.jpg",
   "Images/men-shorts3-2.jpg",
   "Images/men-shorts3-3.jpg",
];
var sh2 = 0;
document.shorts3.src = "Images/men-shorts3.jpg";
function setShorts2() {
   document.shorts3.src = shorts2[sh2];
}
setInterval(function autoSlider2() {
   if (sh2 < shorts2.length - 1) {
      sh2++;
   } else {
      sh2 = 0;
   }
   setShorts2();
}, 10000);
document.querySelector("#leftbtn-sh3").addEventListener("click", leftbShorts2);
function leftbShorts2() {
   if (sh2 > 0) {
      sh2--;
   } else {
      sh2 = shorts2.length - 1;
   }
   setShorts2();
}
document
   .querySelector("#rightbtn-sh3")
   .addEventListener("click", rightbFleftbShorts2);
function rightbFleftbShorts2() {
   if (sh2 < shorts2.length - 1) {
      sh2++;
   } else {
      sh2 = 0;
   }
   setShorts2();
}
document.querySelector("#cart-sh3").addEventListener("click", cartShorts3);
function cartShorts3() {
   document.querySelector("#cart-sh3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sh3").addEventListener("click", buyShorts3);
function buyShorts3() {
   const buyShort = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShort <= 10 && buyShort > 0) {
      document.querySelector("#total-sh3").textContent =
         "Total Price : " + "₹" + 460 * buyShort + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShort === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Shorts3)
document.querySelector("#sh3-type1").addEventListener("mouseover", sh3Type1);
function sh3Type1() {
   document.shorts3.src = "Images/men-shorts3-4.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Grey";
}
document.querySelector("#sh3-type2").addEventListener("mouseover", sh3Type2);
function sh3Type2() {
   document.shorts3.src = "Images/men-shorts3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Navy Blue";
}
document.querySelector("#sh3-type3").addEventListener("mouseover", sh3Type3);
function sh3Type3() {
   document.shorts3.src = "Images/men-shorts3-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Black";
}
// -mouseout from color images(Shorts3)
document.querySelector("#sh3-type1").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   sh3Type2();
}
document.querySelector("#sh3-type3").addEventListener("mouseout", type3Mout1);
//Bottom wear - Shorts4
var shorts3 = [
   "Images/men-shorts4.jpg",
   "Images/men-shorts4-2.jpg",
   "Images/men-shorts4-3.jpg",
];
var sh3 = 0;
document.shorts4.src = "Images/men-shorts4.jpg";
function setShorts3() {
   document.shorts4.src = shorts3[sh3];
}
setInterval(function autoSlider3() {
   if (sh3 < shorts3.length - 1) {
      sh3++;
   } else {
      sh3 = 0;
   }
   setShorts3();
}, 10000);
document.querySelector("#leftbtn-sh4").addEventListener("click", leftbShorts3);
function leftbShorts3() {
   if (sh3 > 0) {
      sh3--;
   } else {
      sh3 = shorts3.length - 1;
   }
   setShorts3();
}
document
   .querySelector("#rightbtn-sh4")
   .addEventListener("click", rightbFleftbShorts3);
function rightbFleftbShorts3() {
   if (sh3 < shorts3.length - 1) {
      sh3++;
   } else {
      sh3 = 0;
   }
   setShorts3();
}
document.querySelector("#cart-sh4").addEventListener("click", cartShorts4);
function cartShorts4() {
   document.querySelector("#cart-sh4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sh4").addEventListener("click", buyShorts4);
function buyShorts4() {
   const buyShort = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShort <= 10 && buyShort > 0) {
      document.querySelector("#total-sh4").textContent =
         "Total Price : " + "₹" + 184 * buyShort + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShort === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Shorts4)
document.querySelector("#sh4-type1").addEventListener("mouseover", sh4Type1);
function sh4Type1() {
   document.shorts4.src = "Images/men-shorts4-4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Black";
}
document.querySelector("#sh4-type2").addEventListener("mouseover", sh4Type2);
function sh4Type2() {
   document.shorts4.src = "Images/men-shorts4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Blue";
}
document.querySelector("#sh4-type3").addEventListener("mouseover", sh4Type3);
function sh4Type3() {
   document.shorts4.src = "Images/men-shorts4-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Red";
}
document.querySelector("#sh4-type4").addEventListener("mouseover", sh4Type4);
function sh4Type4() {
   document.shorts4.src = "Images/men-shorts4-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: White";
}
document.querySelector("#sh4-type5").addEventListener("mouseover", sh4Type5);
function sh4Type5() {
   document.shorts4.src = "Images/men-shorts4-7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Orange";
}
document.querySelector("#sh4-type6").addEventListener("mouseover", sh4Type6);
function sh4Type6() {
   document.shorts4.src = "Images/men-shorts4-8.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Purple";
}
document.querySelector("#sh4-type7").addEventListener("mouseover", sh4Type7);
function sh4Type7() {
   document.shorts4.src = "Images/men-shorts4-9.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Sky Blue";
}
document.querySelector("#sh4-type8").addEventListener("mouseover", sh4Type8);
function sh4Type8() {
   document.shorts4.src = "Images/men-shorts4-10.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Maroon";
}
// -mouseout from color images(Shorts4)
document.querySelector("#sh4-type1").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   sh4Type2();
}
document.querySelector("#sh4-type3").addEventListener("mouseout", type4Mout1);
document.querySelector("#sh4-type4").addEventListener("mouseout", type4Mout1);
document.querySelector("#sh4-type5").addEventListener("mouseout", type4Mout1);
document.querySelector("#sh4-type6").addEventListener("mouseout", type4Mout1);
document.querySelector("#sh4-type7").addEventListener("mouseout", type4Mout1);
document.querySelector("#sh4-type8").addEventListener("mouseout", type4Mout1);
//Bottom wear - Shorts5
var shorts4 = [
   "Images/men-shorts5.jpg",
   "Images/men-shorts5-2.jpg",
   "Images/men-shorts5-3.jpg",
];
var sh4 = 0;
document.shorts5.src = "Images/men-shorts5.jpg";
function setShorts4() {
   document.shorts5.src = shorts4[sh4];
}
setInterval(function autoSlider4() {
   if (sh4 < shorts4.length - 1) {
      sh4++;
   } else {
      sh4 = 0;
   }
   setShorts4();
}, 10000);
document.querySelector("#leftbtn-sh5").addEventListener("click", leftbShorts4);
function leftbShorts4() {
   if (sh4 > 0) {
      sh4--;
   } else {
      sh4 = shorts4.length - 1;
   }
   setShorts4();
}
document
   .querySelector("#rightbtn-sh5")
   .addEventListener("click", rightbFleftbShorts4);
function rightbFleftbShorts4() {
   if (sh4 < shorts4.length - 1) {
      sh4++;
   } else {
      sh4 = 0;
   }
   setShorts4();
}
document.querySelector("#cart-sh5").addEventListener("click", cartShorts5);
function cartShorts5() {
   document.querySelector("#cart-sh5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sh5").addEventListener("click", buyShorts5);
function buyShorts5() {
   const buyShort = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShort <= 10 && buyShort > 0) {
      document.querySelector("#total-sh5").textContent =
         "Total Price : " + "₹" + 599 * buyShort + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShort === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Shorts5)
document.querySelector("#sh5-type1").addEventListener("mouseover", sh5Type1);
function sh5Type1() {
   document.shorts5.src = "Images/men-shorts5-4.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Black";
}
document.querySelector("#sh5-type2").addEventListener("mouseover", sh5Type2);
function sh5Type2() {
   document.shorts5.src = "Images/men-shorts5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color:  Off-White";
}
document.querySelector("#sh5-type3").addEventListener("mouseover", sh5Type3);
function sh5Type3() {
   document.shorts5.src = "Images/men-shorts5-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Blue";
}
document.querySelector("#sh5-type4").addEventListener("mouseover", sh5Type4);
function sh5Type4() {
   document.shorts5.src = "Images/men-shorts5-6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Grey";
}
// -mouseout from color images(Shorts5)
document.querySelector("#sh5-type1").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   sh5Type2();
}
document.querySelector("#sh5-type3").addEventListener("mouseout", type5Mout1);
document.querySelector("#sh5-type4").addEventListener("mouseout", type5Mout1);
// out of stock
document.querySelector("#oos2").addEventListener("click", outOfstock);
document.querySelector("#oos3").addEventListener("click", outOfstock);
//Bottom wear - Shorts6
var shorts5 = [
   "Images/men-shorts6.jpg",
   "Images/men-shorts6-2.jpg",
   "Images/men-shorts6-3.jpg",
];
var sh5 = 0;
document.shorts6.src = "Images/men-shorts6.jpg";
function setShorts5() {
   document.shorts6.src = shorts5[sh5];
}
setInterval(function autoSlider5() {
   if (sh5 < shorts5.length - 1) {
      sh5++;
   } else {
      sh5 = 0;
   }
   setShorts5();
}, 10000);
document.querySelector("#leftbtn-sh6").addEventListener("click", leftbShorts5);
function leftbShorts5() {
   if (sh5 > 0) {
      sh5--;
   } else {
      sh5 = shorts5.length - 1;
   }
   setShorts5();
}
document
   .querySelector("#rightbtn-sh6")
   .addEventListener("click", rightbFleftbShorts5);
function rightbFleftbShorts5() {
   if (sh5 < shorts5.length - 1) {
      sh5++;
   } else {
      sh5 = 0;
   }
   setShorts5();
}
document.querySelector("#cart-sh6").addEventListener("click", cartShorts6);
function cartShorts6() {
   document.querySelector("#cart-sh6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sh6").addEventListener("click", buyShorts6);
function buyShorts6() {
   const buyShort = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShort <= 4 && buyShort > 0) {
      document.querySelector("#total-sh6").textContent =
         "Total Price : " + "₹" + 649 * buyShort + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShort === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 4 pieces left !!!");
   }
}
//Bottom wear - Shorts7
var shorts6 = [
   "Images/men-shorts7.jpg",
   "Images/men-shorts7-2.jpg",
   "Images/men-shorts7-3.jpg",
];
var sh6 = 0;
document.shorts7.src = "Images/men-shorts7.jpg";
function setShorts6() {
   document.shorts7.src = shorts6[sh6];
}
setInterval(function autoSlider6() {
   if (sh6 < shorts6.length - 1) {
      sh6++;
   } else {
      sh6 = 0;
   }
   setShorts6();
}, 10000);
document.querySelector("#leftbtn-sh7").addEventListener("click", leftbShorts6);
function leftbShorts6() {
   if (sh6 > 0) {
      sh6--;
   } else {
      sh6 = shorts6.length - 1;
   }
   setShorts6();
}
document
   .querySelector("#rightbtn-sh7")
   .addEventListener("click", rightbFleftbShorts6);
function rightbFleftbShorts6() {
   if (sh6 < shorts6.length - 1) {
      sh6++;
   } else {
      sh6 = 0;
   }
   setShorts6();
}
document.querySelector("#cart-sh7").addEventListener("click", cartShorts7);
function cartShorts7() {
   document.querySelector("#cart-sh7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sh7").addEventListener("click", buyShorts7);
function buyShorts7() {
   const buyShort = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShort <= 10 && buyShort > 0) {
      document.querySelector("#total-sh7").textContent =
         "Total Price : " + "₹" + 649 * buyShort + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShort === 0) {
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
