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
//Boys Clothing- Shorts 1
var shorts = [
   "Images/kid-sh1.jpeg",
   "Images/kid-sh1-2.jpeg",
   "Images/kid-sh1-3.jpeg",
];
var s = 0;
document.shorts1.src = "Images/kid-sh1.jpeg";
function setShorts() {
   document.shorts1.src = shorts[s];
}
setInterval(function autoSlider() {
   if (s < shorts.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setShorts();
}, 10000);
document.querySelector("#leftbtn-s1").addEventListener("click", leftbShorts);
function leftbShorts() {
   if (s > 0) {
      s--;
   } else {
      s = shorts.length - 1;
   }
   setShorts();
}
document.querySelector("#rightbtn-s1").addEventListener("click", rightbShorts);
function rightbShorts() {
   if (s < shorts.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setShorts();
}
document.querySelector("#cart-s1").addEventListener("click", cartS1);
function cartS1() {
   document.querySelector("#cart-s1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s1").addEventListener("click", buyS1);
function buyS1() {
   const buyShorts = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShorts <= 5 && buyShorts > 0) {
      document.querySelector("#total-s1").textContent =
         "Total Price : " + "₹" + 197 * buyShorts + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShorts === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 5 pieces left !!!");
   }
}
//Boys Clothing- Shorts 2
var shorts1 = [
   "Images/kid-sh2.jpeg",
   "Images/kid-sh2-2.jpeg",
   "Images/kid-sh2-3.jpeg",
];
var s1 = 0;
document.shorts2.src = "Images/kid-sh2.jpeg";
function setShorts1() {
   document.shorts2.src = shorts1[s1];
}
setInterval(function autoSlider1() {
   if (s1 < shorts1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setShorts1();
}, 10000);
document.querySelector("#leftbtn-s2").addEventListener("click", leftbShorts1);
function leftbShorts1() {
   if (s1 > 0) {
      s1--;
   } else {
      s1 = shorts1.length - 1;
   }
   setShorts1();
}
document.querySelector("#rightbtn-s2").addEventListener("click", rightbShorts1);
function rightbShorts1() {
   if (s1 < shorts1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setShorts1();
}
document.querySelector("#cart-s2").addEventListener("click", cartS2);
function cartS2() {
   document.querySelector("#cart-s2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s2").addEventListener("click", buyS2);
function buyS2() {
   const buyShorts = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShorts <= 10 && buyShorts > 0) {
      document.querySelector("#total-s2").textContent =
         "Total Price : " + "₹" + 439 * buyShorts + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShorts === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
// out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of Stock");
}
//Boys Clothing- Shorts 3
var shorts2 = [
   "Images/kid-sh3.jpeg",
   "Images/kid-sh3-2.jpeg",
   "Images/kid-sh3-3.jpeg",
];
var s2 = 0;
document.shorts3.src = "Images/kid-sh3.jpeg";
function setShorts2() {
   document.shorts3.src = shorts2[s2];
}
setInterval(function autoSlider2() {
   if (s2 < shorts2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setShorts2();
}, 10000);
document.querySelector("#leftbtn-s3").addEventListener("click", leftbShorts2);
function leftbShorts2() {
   if (s2 > 0) {
      s2--;
   } else {
      s2 = shorts2.length - 1;
   }
   setShorts2();
}
document.querySelector("#rightbtn-s3").addEventListener("click", rightbShorts2);
function rightbShorts2() {
   if (s2 < shorts2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setShorts2();
}
document.querySelector("#cart-s3").addEventListener("click", cartS3);
function cartS3() {
   document.querySelector("#cart-s3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s3").addEventListener("click", buyS3);
function buyS3() {
   const buyShorts = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShorts <= 10 && buyShorts > 0) {
      document.querySelector("#total-s3").textContent =
         "Total Price : " + "₹" + 689 * buyShorts + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShorts === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Boys Clothing- Shorts 4
var shorts3 = [
   "Images/kid-sh4.jpeg",
   "Images/kid-sh4-2.jpeg",
   "Images/kid-sh4-3.jpeg",
];
var s3 = 0;
document.shorts4.src = "Images/kid-sh4.jpeg";
function setShorts3() {
   document.shorts4.src = shorts3[s3];
}
setInterval(function autoSlider3() {
   if (s3 < shorts3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setShorts3();
}, 10000);
document.querySelector("#leftbtn-s4").addEventListener("click", leftbShorts3);
function leftbShorts3() {
   if (s3 > 0) {
      s3--;
   } else {
      s3 = shorts3.length - 1;
   }
   setShorts3();
}
document.querySelector("#rightbtn-s4").addEventListener("click", rightbShorts3);
function rightbShorts3() {
   if (s3 < shorts3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setShorts3();
}
document.querySelector("#cart-s4").addEventListener("click", cartS4);
function cartS4() {
   document.querySelector("#cart-s4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s4").addEventListener("click", buyS4);
function buyS4() {
   const buyShorts = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShorts <= 10 && buyShorts > 0) {
      document.querySelector("#total-s4").textContent =
         "Total Price : " + "₹" + 509 * buyShorts + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShorts === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Shorts 4)
document.querySelector("#s4-type1").addEventListener("mouseover", s4Type1);
function s4Type1() {
   document.shorts4.src = "Images/kid-sh4-4.png";
   document.querySelector("#color-name").innerHTML = " Color:  Blue";
}
document.querySelector("#s4-type2").addEventListener("mouseover", s4Type2);
function s4Type2() {
   document.shorts4.src = "Images/kid-sh4-5.png";
   document.querySelector("#color-name").innerHTML = " Color:  Light Grey";
}
document.querySelector("#s4-type3").addEventListener("mouseover", s4Type3);
function s4Type3() {
   document.shorts4.src = "Images/kid-sh4.jpeg";
   document.querySelector("#color-name").innerHTML = " Color:  Red";
}
// -mouseout from color images(Shorts 4)
document.querySelector("#s4-type1").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   s4Type3();
}
document.querySelector("#s4-type2").addEventListener("mouseout", type4Mout1);
//Boys Clothing- Shorts 5
var shorts4 = [
   "Images/kid-sh5.jpeg",
   "Images/kid-sh5-2.jpeg",
   "Images/kid-sh5-3.jpeg",
];
var s4 = 0;
document.shorts5.src = "Images/kid-sh5.jpeg";
function setShorts4() {
   document.shorts5.src = shorts4[s4];
}
setInterval(function autoSlider4() {
   if (s4 < shorts4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setShorts4();
}, 10000);
document.querySelector("#leftbtn-s5").addEventListener("click", leftbShorts4);
function leftbShorts4() {
   if (s4 > 0) {
      s4--;
   } else {
      s4 = shorts4.length - 1;
   }
   setShorts4();
}
document.querySelector("#rightbtn-s5").addEventListener("click", rightbShorts4);
function rightbShorts4() {
   if (s4 < shorts4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setShorts4();
}
document.querySelector("#cart-s5").addEventListener("click", cartS5);
function cartS5() {
   document.querySelector("#cart-s5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s5").addEventListener("click", buyS5);
function buyS5() {
   const buyShorts = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShorts <= 8 && buyShorts > 0) {
      document.querySelector("#total-s5").textContent =
         "Total Price : " + "₹" + 599 * buyShorts + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShorts === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 8 pieces left !!!");
   }
}
//Boys Clothing- Shorts 6
var shorts5 = [
   "Images/kid-sh6.jpeg",
   "Images/kid-sh6-2.jpeg",
   "Images/kid-sh6-3.jpeg",
];
var s5 = 0;
document.shorts6.src = "Images/kid-sh6.jpeg";
function setShorts5() {
   document.shorts6.src = shorts5[s5];
}
setInterval(function autoSlider5() {
   if (s5 < shorts5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setShorts5();
}, 10000);
document.querySelector("#leftbtn-s6").addEventListener("click", leftbShorts5);
function leftbShorts5() {
   if (s5 > 0) {
      s5--;
   } else {
      s5 = shorts5.length - 1;
   }
   setShorts5();
}
document.querySelector("#rightbtn-s6").addEventListener("click", rightbShorts5);
function rightbShorts5() {
   if (s5 < shorts5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setShorts5();
}
document.querySelector("#cart-s6").addEventListener("click", cartS6);
function cartS6() {
   document.querySelector("#cart-s6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s6").addEventListener("click", buyS6);
function buyS6() {
   const buyShorts = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShorts <= 10 && buyShorts > 0) {
      document.querySelector("#total-s6").textContent =
         "Total Price : " + "₹" + 369 * buyShorts + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShorts === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Boys Clothing- Shorts 7
var shorts6 = [
   "Images/kid-sh7.jpeg",
   "Images/kid-sh7-2.jpeg",
   "Images/kid-sh7-3.jpeg",
];
var s6 = 0;
document.shorts7.src = "Images/kid-sh7.jpeg";
function setShorts6() {
   document.shorts7.src = shorts6[s6];
}
setInterval(function autoSlider6() {
   if (s6 < shorts6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setShorts6();
}, 10000);
document.querySelector("#leftbtn-s7").addEventListener("click", leftbShorts6);
function leftbShorts6() {
   if (s6 > 0) {
      s6--;
   } else {
      s6 = shorts6.length - 1;
   }
   setShorts6();
}
document.querySelector("#rightbtn-s7").addEventListener("click", rightbShorts6);
function rightbShorts6() {
   if (s6 < shorts6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setShorts6();
}
document.querySelector("#cart-s7").addEventListener("click", cartS7);
function cartS7() {
   document.querySelector("#cart-s7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s7").addEventListener("click", buyS7);
function buyS7() {
   const buyShorts = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShorts <= 10 && buyShorts > 0) {
      document.querySelector("#total-s7").textContent =
         "Total Price : " + "₹" + 518 * buyShorts + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShorts === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Boys Clothing- Shorts 8
var shorts7 = [
   "Images/kid-sh8.jpeg",
   "Images/kid-sh8-2.jpeg",
   "Images/kid-sh8-3.jpeg",
];
var s7 = 0;
document.shorts8.src = "Images/kid-sh8.jpeg";
function setShorts7() {
   document.shorts8.src = shorts7[s7];
}
setInterval(function autoSlider7() {
   if (s7 < shorts7.length - 1) {
      s7++;
   } else {
      s7 = 0;
   }
   setShorts7();
}, 10000);
document.querySelector("#leftbtn-s8").addEventListener("click", leftbShorts7);
function leftbShorts7() {
   if (s7 > 0) {
      s7--;
   } else {
      s7 = shorts7.length - 1;
   }
   setShorts7();
}
document.querySelector("#rightbtn-s8").addEventListener("click", rightbShorts7);
function rightbShorts7() {
   if (s7 < shorts7.length - 1) {
      s7++;
   } else {
      s7 = 0;
   }
   setShorts7();
}
document.querySelector("#cart-s8").addEventListener("click", cartS8);
function cartS8() {
   document.querySelector("#cart-s8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s8").addEventListener("click", buyS8);
function buyS8() {
   const buyShorts = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShorts <= 2 && buyShorts > 0) {
      document.querySelector("#total-s8").textContent =
         "Total Price : " + "₹" + 389 * buyShorts + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShorts === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 2 pieces left !!!");
   }
}
//Boys Clothing- Shorts 9
var shorts8 = [
   "Images/kid-sh9.jpeg",
   "Images/kid-sh9-2.jpeg",
   "Images/kid-sh9-3.jpeg",
];
var s8 = 0;
document.shorts9.src = "Images/kid-sh9.jpeg";
function setShorts8() {
   document.shorts9.src = shorts8[s8];
}
setInterval(function autoSlider8() {
   if (s8 < shorts8.length - 1) {
      s8++;
   } else {
      s8 = 0;
   }
   setShorts8();
}, 10000);
document.querySelector("#leftbtn-s9").addEventListener("click", leftbShorts8);
function leftbShorts8() {
   if (s8 > 0) {
      s8--;
   } else {
      s8 = shorts8.length - 1;
   }
   setShorts8();
}
document.querySelector("#rightbtn-s9").addEventListener("click", rightbShorts8);
function rightbShorts8() {
   if (s8 < shorts8.length - 1) {
      s8++;
   } else {
      s8 = 0;
   }
   setShorts8();
}
document.querySelector("#cart-s9").addEventListener("click", cartS9);
function cartS9() {
   document.querySelector("#cart-s9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s9").addEventListener("click", buyS9);
function buyS9() {
   const buyShorts = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShorts <= 10 && buyShorts > 0) {
      document.querySelector("#total-s9").textContent =
         "Total Price : " + "₹" + 661 * buyShorts + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShorts === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Boys Clothing- Shorts 10
var shorts9 = [
   "Images/kid-sh10.jpeg",
   "Images/kid-sh10-2.jpeg",
   "Images/kid-sh10-3.jpeg",
];
var s9 = 0;
document.shorts10.src = "Images/kid-sh10.jpeg";
function setShorts9() {
   document.shorts10.src = shorts9[s9];
}
setInterval(function autoSlider9() {
   if (s9 < shorts9.length - 1) {
      s9++;
   } else {
      s9 = 0;
   }
   setShorts9();
}, 10000);
document.querySelector("#leftbtn-s10").addEventListener("click", leftbShorts9);
function leftbShorts9() {
   if (s9 > 0) {
      s9--;
   } else {
      s9 = shorts9.length - 1;
   }
   setShorts9();
}
document
   .querySelector("#rightbtn-s10")
   .addEventListener("click", rightbShorts9);
function rightbShorts9() {
   if (s9 < shorts9.length - 1) {
      s9++;
   } else {
      s9 = 0;
   }
   setShorts9();
}
document.querySelector("#cart-s10").addEventListener("click", cartS10);
function cartS10() {
   document.querySelector("#cart-s10").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s10").addEventListener("click", buyS10);
function buyS10() {
   const buyShorts = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShorts <= 10 && buyShorts > 0) {
      document.querySelector("#total-s10").textContent =
         "Total Price : " + "₹" + 469 * buyShorts + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShorts === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Shorts 10)
document.querySelector("#s10-type1").addEventListener("mouseover", s10Type1);
function s10Type1() {
   document.shorts10.src = "Images/kid-sh10-4.jpeg";
   document.querySelector("#color-name1").innerHTML = " Color:  Black";
}
document.querySelector("#s10-type2").addEventListener("mouseover", s10Type2);
function s10Type2() {
   document.shorts10.src = "Images/kid-sh10.jpeg";
   document.querySelector("#color-name1").innerHTML = " Color:  Blue";
}
// -mouseout from color images(Shorts 10)
document.querySelector("#s10-type1").addEventListener("mouseout", type10Mout1);
function type10Mout1() {
   s10Type2();
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
