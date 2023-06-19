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
//Ethnic wear - Sherwani 1
var sherwani = [
   "Images/men-sw1.jpg",
   "Images/men-sw1-2.jpg",
   "Images/men-sw1-3.jpg",
   "Images/men-sw1-5.jpg",
];
var sw = 0;
document.sherwani1.src = "Images/men-sw1.jpg";
function setSherwani() {
   document.sherwani1.src = sherwani[sw];
}
setInterval(function autoSlider() {
   if (sw < sherwani.length - 1) {
      sw++;
   } else {
      sw = 0;
   }
   setSherwani();
}, 10000);
document.querySelector("#leftbtn-sw1").addEventListener("click", leftbSherwani);
function leftbSherwani() {
   if (sw > 0) {
      sw--;
   } else {
      sw = sherwani.length - 1;
   }
   setSherwani();
}
document
   .querySelector("#rightbtn-sw1")
   .addEventListener("click", rightbSherwani);
function rightbSherwani() {
   if (sw < sherwani.length - 1) {
      sw++;
   } else {
      sw = 0;
   }
   setSherwani();
}
document.querySelector("#cart-sw1").addEventListener("click", cartSherwani1);
function cartSherwani1() {
   document.querySelector("#cart-sw1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sw1").addEventListener("click", buySherwani1);
function buySherwani1() {
   const buySherwani = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySherwani <= 5 && buySherwani > 0) {
      document.querySelector("#total-sw1").textContent =
         "Total Price : " + "₹" + 6049 * buySherwani + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySherwani === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sherwani 1)
document.querySelector("#sw1-type1").addEventListener("mouseover", sw1Type1);
function sw1Type1() {
   document.sherwani1.src = "Images/men-sw1.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Maroon";
}
document.querySelector("#sw1-type2").addEventListener("mouseover", sw1Type2);
function sw1Type2() {
   document.sherwani1.src = "Images/men-sw1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Silver";
}
document.querySelector("#sw1-type3").addEventListener("mouseover", sw1Type3);
function sw1Type3() {
   document.sherwani1.src = "Images/men-sw1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Brown";
}
document.querySelector("#sw1-type4").addEventListener("mouseover", sw1Type4);
function sw1Type4() {
   document.sherwani1.src = "Images/men-sw1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Blue";
}
// -mouseout from color images(Sherwani 1)
document.querySelector("#sw1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   sw1Type1();
}
document.querySelector("#sw1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#sw1-type4").addEventListener("mouseout", type1Mout1);
//Ethnic wear - Sherwani 2
var sherwani1 = [
   "Images/men-sw2.jpg",
   "Images/men-sw2-2.jpg",
   "Images/men-sw2-3.jpg",
   "Images/men-sw2-4.jpg",
];
var sw1 = 0;
document.sherwani2.src = "Images/men-sw2.jpg";
function setSherwani1() {
   document.sherwani2.src = sherwani1[sw1];
}
setInterval(function autoSlider1() {
   if (sw1 < sherwani1.length - 1) {
      sw1++;
   } else {
      sw1 = 0;
   }
   setSherwani1();
}, 10000);
document
   .querySelector("#leftbtn-sw2")
   .addEventListener("click", leftbSherwani1);
function leftbSherwani1() {
   if (sw1 > 0) {
      sw1--;
   } else {
      sw1 = sherwani1.length - 1;
   }
   setSherwani1();
}
document
   .querySelector("#rightbtn-sw2")
   .addEventListener("click", rightbSherwani1);
function rightbSherwani1() {
   if (sw1 < sherwani1.length - 1) {
      sw1++;
   } else {
      sw1 = 0;
   }
   setSherwani1();
}
document.querySelector("#cart-sw2").addEventListener("click", cartSherwani2);
function cartSherwani2() {
   document.querySelector("#cart-sw2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sw2").addEventListener("click", buySherwani2);
function buySherwani2() {
   const buySherwani = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySherwani <= 5 && buySherwani > 0) {
      document.querySelector("#total-sw2").textContent =
         "Total Price : " + "₹" + 7199 * buySherwani + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySherwani === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//Ethnic wear - Sherwani 3
var sherwani2 = [
   "Images/men-sw3.jpg",
   "Images/men-sw3-2.jpg",
   "Images/men-sw3-3.jpg",
   "Images/men-sw3-4.jpg",
];
var sw2 = 0;
document.sherwani3.src = "Images/men-sw3.jpg";
function setSherwani2() {
   document.sherwani3.src = sherwani2[sw2];
}
setInterval(function autoSlider2() {
   if (sw2 < sherwani2.length - 1) {
      sw2++;
   } else {
      sw2 = 0;
   }
   setSherwani2();
}, 10000);
document
   .querySelector("#leftbtn-sw3")
   .addEventListener("click", leftbSherwani2);
function leftbSherwani2() {
   if (sw2 > 0) {
      sw2--;
   } else {
      sw2 = sherwani2.length - 1;
   }
   setSherwani2();
}
document
   .querySelector("#rightbtn-sw3")
   .addEventListener("click", rightbSherwani2);
function rightbSherwani2() {
   if (sw2 < sherwani2.length - 1) {
      sw2++;
   } else {
      sw2 = 0;
   }
   setSherwani2();
}
document.querySelector("#cart-sw3").addEventListener("click", cartSherwani3);
function cartSherwani3() {
   document.querySelector("#cart-sw3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sw3").addEventListener("click", buySherwani3);
function buySherwani3() {
   const buySherwani = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySherwani <= 2 && buySherwani > 0) {
      document.querySelector("#total-sw3").textContent =
         "Total Price : " + "₹" + 3489 * buySherwani + "  only";
      document.querySelector("#total-sw3").style.marginTop = "10px";
      alert("Thank ♥ you for Your Order");
   } else if (buySherwani === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 2 pieces left !!!");
   }
}
// out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of Stock");
}
//Ethnic wear - Sherwani 4
var sherwani3 = [
   "Images/men-sw4.jpg",
   "Images/men-sw4-2.jpg",
   "Images/men-sw4-3.jpg",
   "Images/men-sw4-4.jpg",
];
var sw3 = 0;
document.sherwani4.src = "Images/men-sw4.jpg";
function setSherwani3() {
   document.sherwani4.src = sherwani3[sw3];
}
setInterval(function autoSlider3() {
   if (sw3 < sherwani3.length - 1) {
      sw3++;
   } else {
      sw3 = 0;
   }
   setSherwani3();
}, 10000);
document
   .querySelector("#leftbtn-sw4")
   .addEventListener("click", leftbSherwani3);
function leftbSherwani3() {
   if (sw3 > 0) {
      sw3--;
   } else {
      sw3 = sherwani3.length - 1;
   }
   setSherwani3();
}
document
   .querySelector("#rightbtn-sw4")
   .addEventListener("click", rightbSherwani3);
function rightbSherwani3() {
   if (sw3 < sherwani3.length - 1) {
      sw3++;
   } else {
      sw3 = 0;
   }
   setSherwani3();
}
document.querySelector("#cart-sw4").addEventListener("click", cartSherwani4);
function cartSherwani4() {
   document.querySelector("#cart-sw4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sw4").addEventListener("click", buySherwani4);
function buySherwani4() {
   const buySherwani = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySherwani <= 5 && buySherwani > 0) {
      document.querySelector("#total-sw4").textContent =
         "Total Price : " + "₹" + 7469 * buySherwani + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySherwani === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sherwani 4)
document.querySelector("#sw4-type1").addEventListener("mouseover", sw4Type1);
function sw4Type1() {
   document.sherwani4.src = "Images/men-sw4-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Maroon";
}
document.querySelector("#sw4-type2").addEventListener("mouseover", sw4Type2);
function sw4Type2() {
   document.sherwani4.src = "Images/men-sw4.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Navy Blue";
}
// -mouseout from color images(Sherwani 4)
document.querySelector("#sw4-type1").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   sw4Type2();
}
//Ethnic wear - Sherwani 5
var sherwani4 = [
   "Images/men-sw5.jpg",
   "Images/men-sw5-2.jpg",
   "Images/men-sw5-3.jpg",
   "Images/men-sw5-4.jpg",
];
var sw4 = 0;
document.sherwani5.src = "Images/men-sw5.jpg";
function setSherwani4() {
   document.sherwani5.src = sherwani4[sw4];
}
setInterval(function autoSlider4() {
   if (sw4 < sherwani4.length - 1) {
      sw4++;
   } else {
      sw4 = 0;
   }
   setSherwani4();
}, 10000);
document
   .querySelector("#leftbtn-sw5")
   .addEventListener("click", leftbSherwani4);
function leftbSherwani4() {
   if (sw4 > 0) {
      sw4--;
   } else {
      sw4 = sherwani4.length - 1;
   }
   setSherwani4();
}
document
   .querySelector("#rightbtn-sw5")
   .addEventListener("click", rightbSherwani4);
function rightbSherwani4() {
   if (sw4 < sherwani4.length - 1) {
      sw4++;
   } else {
      sw4 = 0;
   }
   setSherwani4();
}
document.querySelector("#cart-sw5").addEventListener("click", cartSherwani5);
function cartSherwani5() {
   document.querySelector("#cart-sw5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sw5").addEventListener("click", buySherwani5);
function buySherwani5() {
   const buySherwani = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySherwani <= 5 && buySherwani > 0) {
      document.querySelector("#total-sw5").textContent =
         "Total Price : " + "₹" + 1999 * buySherwani + "  only";
      document.querySelector("#total-sw5").style.marginTop = "10px";
      alert("Thank ♥ you for Your Order");
   } else if (buySherwani === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sherwani 5)
document.querySelector("#sw5-type1").addEventListener("mouseover", sw5Type1);
function sw5Type1() {
   document.sherwani5.src = "Images/men-sw5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Gold Green ";
}
document.querySelector("#sw5-type2").addEventListener("mouseover", sw5Type2);
function sw5Type2() {
   document.sherwani5.src = "Images/men-sw5-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Gold Red";
}
document.querySelector("#sw5-type3").addEventListener("mouseover", sw5Type3);
function sw5Type3() {
   document.sherwani5.src = "Images/men-sw5-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Gold Blue";
}
// -mouseout from color images(Sherwani 5)
document.querySelector("#sw5-type2").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   sw5Type1();
}
document.querySelector("#sw5-type3").addEventListener("mouseout", type5Mout1);
//Ethnic wear - Sherwani 6
var sherwani5 = [
   "Images/men-sw6.jpg",
   "Images/men-sw6-2.jpg",
   "Images/men-sw6-3.jpg",
   "Images/men-sw6-4.jpg",
];
var sw5 = 0;
document.sherwani6.src = "Images/men-sw6.jpg";
function setSherwani5() {
   document.sherwani6.src = sherwani5[sw5];
}
setInterval(function autoSlider5() {
   if (sw5 < sherwani5.length - 1) {
      sw5++;
   } else {
      sw5 = 0;
   }
   setSherwani5();
}, 10000);
document
   .querySelector("#leftbtn-sw6")
   .addEventListener("click", leftbSherwani5);
function leftbSherwani5() {
   if (sw5 > 0) {
      sw5--;
   } else {
      sw5 = sherwani5.length - 1;
   }
   setSherwani5();
}
document
   .querySelector("#rightbtn-sw6")
   .addEventListener("click", rightbSherwani5);
function rightbSherwani5() {
   if (sw5 < sherwani5.length - 1) {
      sw5++;
   } else {
      sw5 = 0;
   }
   setSherwani5();
}
document.querySelector("#cart-sw6").addEventListener("click", cartSherwani6);
function cartSherwani6() {
   document.querySelector("#cart-sw6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sw6").addEventListener("click", buySherwani6);
function buySherwani6() {
   const buySherwani = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySherwani <= 5 && buySherwani > 0) {
      document.querySelector("#total-sw6").textContent =
         "Total Price : " + "₹" + 3999 * buySherwani + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySherwani === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sherwani 6)
document.querySelector("#sw6-type1").addEventListener("mouseover", sw6Type1);
function sw6Type1() {
   document.sherwani6.src = "Images/men-sw6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Cream ";
}
document.querySelector("#sw6-type2").addEventListener("mouseover", sw6Type2);
function sw6Type2() {
   document.sherwani6.src = "Images/men-sw6-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Royal Blue";
}
document.querySelector("#sw6-type3").addEventListener("mouseover", sw6Type3);
function sw6Type3() {
   document.sherwani6.src = "Images/men-sw6-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Maroon";
}
// -mouseout from color images(Sherwani 6)
document.querySelector("#sw6-type2").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   sw6Type1();
}
document.querySelector("#sw6-type3").addEventListener("mouseout", type6Mout1);
//Ethnic wear - Sherwani 7
var sherwani6 = [
   "Images/men-sw7.jpg",
   "Images/men-sw7-2.jpg",
   "Images/men-sw7-3.jpg",
   "Images/men-sw7-4.jpg",
];
var sw6 = 0;
document.sherwani7.src = "Images/men-sw7.jpg";
function setSherwani6() {
   document.sherwani7.src = sherwani6[sw6];
}
setInterval(function autoSlider6() {
   if (sw6 < sherwani6.length - 1) {
      sw6++;
   } else {
      sw6 = 0;
   }
   setSherwani6();
}, 10000);
document
   .querySelector("#leftbtn-sw7")
   .addEventListener("click", leftbSherwani6);
function leftbSherwani6() {
   if (sw6 > 0) {
      sw6--;
   } else {
      sw6 = sherwani6.length - 1;
   }
   setSherwani6();
}
document
   .querySelector("#rightbtn-sw7")
   .addEventListener("click", rightbSherwani6);
function rightbSherwani6() {
   if (sw6 < sherwani6.length - 1) {
      sw6++;
   } else {
      sw6 = 0;
   }
   setSherwani6();
}
document.querySelector("#cart-sw7").addEventListener("click", cartSherwani7);
function cartSherwani7() {
   document.querySelector("#cart-sw7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sw7").addEventListener("click", buySherwani7);
function buySherwani7() {
   const buySherwani = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySherwani <= 5 && buySherwani > 0) {
      document.querySelector("#total-sw7").textContent =
         "Total Price : " + "₹" + 4049 * buySherwani + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySherwani === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
// out of Stock
document.querySelector("#oos2").addEventListener("click", outOfStock);
document.querySelector("#oos3").addEventListener("click", outOfStock);
//Ethnic wear - Sherwani 8
var sherwani7 = [
   "Images/men-sw8.jpg",
   "Images/men-sw8-2.jpg",
   "Images/men-sw8-3.jpg",
   "Images/men-sw8-4.jpg",
];
var sw7 = 0;
document.sherwani8.src = "Images/men-sw8.jpg";
function setSherwani7() {
   document.sherwani8.src = sherwani7[sw7];
}
setInterval(function autoSlider7() {
   if (sw7 < sherwani7.length - 1) {
      sw7++;
   } else {
      sw7 = 0;
   }
   setSherwani7();
}, 10000);
document
   .querySelector("#leftbtn-sw8")
   .addEventListener("click", leftbSherwani7);
function leftbSherwani7() {
   if (sw7 > 0) {
      sw7--;
   } else {
      sw7 = sherwani7.length - 1;
   }
   setSherwani7();
}
document
   .querySelector("#rightbtn-sw8")
   .addEventListener("click", rightbSherwani7);
function rightbSherwani7() {
   if (sw7 < sherwani7.length - 1) {
      sw7++;
   } else {
      sw7 = 0;
   }
   setSherwani7();
}
document.querySelector("#cart-sw8").addEventListener("click", cartSherwani8);
function cartSherwani8() {
   document.querySelector("#cart-sw8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sw8").addEventListener("click", buySherwani8);
function buySherwani8() {
   const buySherwani = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySherwani <= 5 && buySherwani > 0) {
      document.querySelector("#total-sw8").textContent =
         "Total Price : " + "₹" + 5999 * buySherwani + "  only";
      document.querySelector("#total-sw8").style.marginTop = "10px";
      alert("Thank ♥ you for Your Order");
   } else if (buySherwani === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
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
