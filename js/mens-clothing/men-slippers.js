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
//Footwear - Flip-flops 1
var slipper = [
   "Images/men-s1.jpg",
   "Images/men-s1-2.jpg",
   "Images/men-s1-3.jpg",
   "Images/men-s1-4.jpg",
];
var s = 0;
document.slipper1.src = "Images/men-s1.jpg";
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
document.querySelector("#leftbtn-s1").addEventListener("click", leftbSlip);
function leftbSlip() {
   if (s > 0) {
      s--;
   } else {
      s = slipper.length - 1;
   }
   setSlipper();
}
document.querySelector("#rightbtn-s1").addEventListener("click", rightbSlip);
function rightbSlip() {
   if (s < slipper.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setSlipper();
}
document.querySelector("#cart-s1").addEventListener("click", cartSlip1);
function cartSlip1() {
   document.querySelector("#cart-s1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s1").addEventListener("click", buySlip1);
function buySlip1() {
   const buySlipper = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySlipper <= 5 && buySlipper > 0) {
      document.querySelector("#total-s1").textContent =
         "Total Price : " + "₹" + 405 * buySlipper + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySlipper === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Slipper1)
document.querySelector("#s1-type1").addEventListener("mouseover", s1Type1);
function s1Type1() {
   document.slipper1.src = "Images/men-s1.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  White";
}
document.querySelector("#s1-type2").addEventListener("mouseover", s1Type2);
function s1Type2() {
   document.slipper1.src = "Images/men-s1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Grey";
}
document.querySelector("#s1-type3").addEventListener("mouseover", s1Type3);
function s1Type3() {
   document.slipper1.src = "Images/men-s1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Black";
}
document.querySelector("#s1-type4").addEventListener("mouseover", s1Type4);
function s1Type4() {
   document.slipper1.src = "Images/men-s1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Red";
}
document.querySelector("#s1-type5").addEventListener("mouseover", s1Type5);
function s1Type5() {
   document.slipper1.src = "Images/men-s1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Sky Blue";
}
document.querySelector("#s1-type6").addEventListener("mouseover", s1Type6);
function s1Type6() {
   document.slipper1.src = "Images/men-s1-9.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Green";
}
document.querySelector("#s1-type7").addEventListener("mouseover", s1Type7);
function s1Type7() {
   document.slipper1.src = "Images/men-s1-10.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Beige";
}
// -mouseout from color images(slipper1)
document.querySelector("#s1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   s1Type1();
}
document.querySelector("#s1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type5").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type6").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type7").addEventListener("mouseout", type1Mout1);
//Footwear - Flip-flops 2
var slipper1 = [
   "Images/men-s2.jpg",
   "Images/men-s2-2.jpg",
   "Images/men-s2-3.jpg",
   "Images/men-s2-4.jpg",
];
var s1 = 0;
document.slipper2.src = "Images/men-s2.jpg";
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
document.querySelector("#leftbtn-s2").addEventListener("click", leftbSlip1);
function leftbSlip1() {
   if (s1 > 0) {
      s1--;
   } else {
      s1 = slipper1.length - 1;
   }
   setSlipper1();
}
document.querySelector("#rightbtn-s2").addEventListener("click", rightbSlip1);
function rightbSlip1() {
   if (s1 < slipper1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setSlipper1();
}
document.querySelector("#cart-s2").addEventListener("click", cartSlip2);
function cartSlip2() {
   document.querySelector("#cart-s2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s2").addEventListener("click", buySlip2);
function buySlip2() {
   const buySlipper = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySlipper <= 5 && buySlipper > 0) {
      document.querySelector("#total-s2").textContent =
         "Total Price : " + "₹" + 232 * buySlipper + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySlipper === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Slipper2)
document.querySelector("#s2-type1").addEventListener("mouseover", s2Type1);
function s2Type1() {
   document.slipper2.src = "Images/men-s2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Red Beige";
}
document.querySelector("#s2-type2").addEventListener("mouseover", s2Type2);
function s2Type2() {
   document.slipper2.src = "Images/men-s2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Brown Beige";
}
document.querySelector("#s2-type3").addEventListener("mouseover", s2Type3);
function s2Type3() {
   document.slipper2.src = "Images/men-s2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Olive Beige";
}
// -mouseout from color images(slipper2)
document.querySelector("#s2-type1").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   s2Type3();
}
document.querySelector("#s2-type2").addEventListener("mouseout", type2Mout1);
//Footwear - Flip-flops 3
var slipper2 = [
   "Images/men-s3.jpg",
   "Images/men-s3-2.jpg",
   "Images/men-s3-3.jpg",
   "Images/men-s3-4.jpg",
];
var s2 = 0;
document.slipper3.src = "Images/men-s3.jpg";
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
document.querySelector("#leftbtn-s3").addEventListener("click", leftbSlip2);
function leftbSlip2() {
   if (s2 > 0) {
      s2--;
   } else {
      s2 = slipper2.length - 1;
   }
   setSlipper2();
}
document.querySelector("#rightbtn-s3").addEventListener("click", rightbSlip2);
function rightbSlip2() {
   if (s2 < slipper2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setSlipper2();
}
document.querySelector("#cart-s3").addEventListener("click", cartSlip3);
function cartSlip3() {
   document.querySelector("#cart-s3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s3").addEventListener("click", buySlip3);
function buySlip3() {
   const buySlipper = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySlipper <= 5 && buySlipper > 0) {
      document.querySelector("#total-s3").textContent =
         "Total Price : " + "₹" + 329 * buySlipper + "  only";
      document.querySelector("#total-s3").style.marginTop = "10px";
      alert("Thank ♥ you for Your Order");
   } else if (buySlipper === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Slipper3)
document.querySelector("#s3-type1").addEventListener("mouseover", s3Type1);
function s3Type1() {
   document.slipper3.src = "Images/men-s3-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Navy Blue";
}
document.querySelector("#s3-type2").addEventListener("mouseover", s3Type2);
function s3Type2() {
   document.slipper3.src = "Images/men-s3-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Black";
}
document.querySelector("#s3-type3").addEventListener("mouseover", s3Type3);
function s3Type3() {
   document.slipper3.src = "Images/men-s3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Red";
}
// -mouseout from color images(slipper3)
document.querySelector("#s3-type1").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   s3Type3();
}
document.querySelector("#s3-type2").addEventListener("mouseout", type3Mout1);
//Footwear - Flip-flops 4
var slipper3 = [
   "Images/men-s4.jpg",
   "Images/men-s4-2.jpg",
   "Images/men-s4-3.jpg",
   "Images/men-s4-4.jpg",
];
var s3 = 0;
document.slipper4.src = "Images/men-s4.jpg";
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
document.querySelector("#leftbtn-s4").addEventListener("click", leftbSlip3);
function leftbSlip3() {
   if (s3 > 0) {
      s3--;
   } else {
      s3 = slipper3.length - 1;
   }
   setSlipper3();
}
document.querySelector("#rightbtn-s4").addEventListener("click", rightbSlip3);
function rightbSlip3() {
   if (s3 < slipper3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setSlipper3();
}
document.querySelector("#cart-s4").addEventListener("click", cartSlip4);
function cartSlip4() {
   document.querySelector("#cart-s4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s4").addEventListener("click", buySlip4);
function buySlip4() {
   const buySlipper = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySlipper <= 5 && buySlipper > 0) {
      document.querySelector("#total-s4").textContent =
         "Total Price : " + "₹" + 474 * buySlipper + "  only";
      document.querySelector("#total-s4").style.marginTop = "10px";
      alert("Thank ♥ you for Your Order");
   } else if (buySlipper === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Slipper4)
document.querySelector("#s4-type1").addEventListener("mouseover", s4Type1);
function s4Type1() {
   document.slipper4.src = "Images/men-s4.jpg";
   document.querySelector("#color-name3").innerHTML =
      " Color:  Light Grey/Neon/Black";
}
document.querySelector("#s4-type2").addEventListener("mouseover", s4Type2);
function s4Type2() {
   document.slipper4.src = "Images/men-s4-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Black/Red";
}
// -mouseout from color images(slipper4)
document.querySelector("#s4-type2").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   s4Type1();
}
//Footwear - Flip-flops 5
var slipper4 = [
   "Images/men-s5.jpg",
   "Images/men-s5-2.jpg",
   "Images/men-s5-3.jpg",
   "Images/men-s5-4.jpg",
];
var s4 = 0;
document.slipper5.src = "Images/men-s5.jpg";
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
document.querySelector("#leftbtn-s5").addEventListener("click", leftbSlip4);
function leftbSlip4() {
   if (s4 > 0) {
      s4--;
   } else {
      s4 = slipper4.length - 1;
   }
   setSlipper4();
}
document.querySelector("#rightbtn-s5").addEventListener("click", rightbSlip4);
function rightbSlip4() {
   if (s4 < slipper4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setSlipper4();
}
document.querySelector("#cart-s5").addEventListener("click", cartSlip5);
function cartSlip5() {
   document.querySelector("#cart-s5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s5").addEventListener("click", buySlip5);
function buySlip5() {
   const buySlipper = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySlipper <= 5 && buySlipper > 0) {
      document.querySelector("#total-s5").textContent =
         "Total Price : " + "₹" + 2495 * buySlipper + "  only";
      document.querySelector("#total-s5").style.marginTop = "10px";
      alert("Thank ♥ you for Your Order");
   } else if (buySlipper === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//Footwear - Flip-flops 6
var slipper5 = [
   "Images/men-s6.jpg",
   "Images/men-s6-2.jpg",
   "Images/men-s6-3.jpg",
   "Images/men-s6-4.jpg",
];
var s5 = 0;
document.slipper6.src = "Images/men-s6.jpg";
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
document.querySelector("#leftbtn-s6").addEventListener("click", leftbSlip5);
function leftbSlip5() {
   if (s5 > 0) {
      s5--;
   } else {
      s5 = slipper5.length - 1;
   }
   setSlipper5();
}
document.querySelector("#rightbtn-s6").addEventListener("click", rightbSlip5);
function rightbSlip5() {
   if (s5 < slipper5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setSlipper5();
}
document.querySelector("#cart-s6").addEventListener("click", cartSlip6);
function cartSlip6() {
   document.querySelector("#cart-s6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s6").addEventListener("click", buySlip6);
function buySlip6() {
   const buySlipper = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySlipper <= 5 && buySlipper > 0) {
      document.querySelector("#total-s6").textContent =
         "Total Price : " + "₹" + 378 * buySlipper + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySlipper === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Slipper6)
document.querySelector("#s6-type1").addEventListener("mouseover", s6Type1);
function s6Type1() {
   document.slipper6.src = "Images/men-s6-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color:  Navy Blue";
}
document.querySelector("#s6-type2").addEventListener("mouseover", s6Type2);
function s6Type2() {
   document.slipper6.src = "Images/men-s6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Black";
}
// -mouseout from color images(slipper6)
document.querySelector("#s6-type1").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   s6Type2();
}
//Footwear - Flip-flops 7
var slipper6 = [
   "Images/men-s7.jpg",
   "Images/men-s7-2.jpg",
   "Images/men-s7-3.jpg",
   "Images/men-s7-4.jpg",
];
var s6 = 0;
document.slipper7.src = "Images/men-s7.jpg";
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
document.querySelector("#leftbtn-s7").addEventListener("click", leftbSlip6);
function leftbSlip6() {
   if (s6 > 0) {
      s6--;
   } else {
      s6 = slipper6.length - 1;
   }
   setSlipper6();
}
document.querySelector("#rightbtn-s7").addEventListener("click", rightbSlip6);
function rightbSlip6() {
   if (s6 < slipper6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setSlipper6();
}
document.querySelector("#cart-s7").addEventListener("click", cartSlip7);
function cartSlip7() {
   document.querySelector("#cart-s7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s7").addEventListener("click", buySlip7);
function buySlip7() {
   const buySlipper = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySlipper <= 5 && buySlipper > 0) {
      document.querySelector("#total-s7").textContent =
         "Total Price : " + "₹" + 1255 * buySlipper + "  only";
      document.querySelector("#total-s7").style.marginTop = "10px";
      alert("Thank ♥ you for Your Order");
   } else if (buySlipper === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Slipper7)
document.querySelector("#s7-type1").addEventListener("mouseover", s7Type1);
function s7Type1() {
   document.slipper7.src = "Images/men-s7.jpg";
   document.querySelector("#color-name5").innerHTML = " Color:  Beige";
}
document.querySelector("#s7-type2").addEventListener("mouseover", s7Type2);
function s7Type2() {
   document.slipper7.src = "Images/men-s7-5.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Cream";
}
// -mouseout from color images(slipper7)
document.querySelector("#s7-type2").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   s7Type1();
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
