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
//Girls Footwear- Sports & Casual Shoes 1
var shoe = [
   "Images/kid-gshoe1.jpg",
   "Images/kid-gshoe1-2.jpg",
   "Images/kid-gshoe1-3.jpg",
   "Images/kid-gshoe1-4.jpg",
];
var s = 0;
document.shoe1.src = "Images/kid-gshoe1.jpg";
function setShoe() {
   document.shoe1.src = shoe[s];
}
setInterval(function autoSlider() {
   if (s < shoe.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setShoe();
}, 10000);
document.querySelector("#leftbtn-s1").addEventListener("click", leftbShoe);
function leftbShoe() {
   if (s > 0) {
      s--;
   } else {
      s = shoe.length - 1;
   }
   setShoe();
}
document.querySelector("#rightbtn-s1").addEventListener("click", rightbShoe);
function rightbShoe() {
   if (s < shoe.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setShoe();
}
document.querySelector("#cart-s1").addEventListener("click", carts1);
function carts1() {
   document.querySelector("#cart-s1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s1").addEventListener("click", buys1);
function buys1() {
   const buyShoe = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoe <= 10 && buyShoe > 0) {
      document.querySelector("#total-s1").textContent =
         "Total Price : " + "₹" + 299 * buyShoe + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoe === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Shoes 1)
document.querySelector("#s1-type1").addEventListener("mouseover", s1Type1);
function s1Type1() {
   document.shoe1.src = "Images/kid-gshoe1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Red";
}
document.querySelector("#s1-type2").addEventListener("mouseover", s1Type2);
function s1Type2() {
   document.shoe1.src = "Images/kid-gshoe1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Blue";
}
// -mouseout (Shoes 1)
document.querySelector("#s1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   s1Type1();
}
//Girls Footwear- Sports & Casual Shoes 2
var shoe1 = [
   "Images/kid-gshoe2.jpg",
   "Images/kid-gshoe2-2.jpg",
   "Images/kid-gshoe2-3.jpg",
   "Images/kid-gshoe2-4.jpg",
];
var s1 = 0;
document.shoe2.src = "Images/kid-gshoe2.jpg";
function setShoe1() {
   document.shoe2.src = shoe1[s1];
}
setInterval(function autoSlider1() {
   if (s1 < shoe1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setShoe1();
}, 10000);
document.querySelector("#leftbtn-s2").addEventListener("click", leftbShoe1);
function leftbShoe1() {
   if (s1 > 0) {
      s1--;
   } else {
      s1 = shoe1.length - 1;
   }
   setShoe1();
}
document.querySelector("#rightbtn-s2").addEventListener("click", rightbShoe1);
function rightbShoe1() {
   if (s1 < shoe1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setShoe1();
}
document.querySelector("#cart-s2").addEventListener("click", carts2);
function carts2() {
   document.querySelector("#cart-s2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s2").addEventListener("click", buys2);
function buys2() {
   const buyShoe = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoe <= 10 && buyShoe > 0) {
      document.querySelector("#total-s2").textContent =
         "Total Price : " + "₹" + 328 * buyShoe + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoe === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Shoes 2)
document.querySelector("#s2-type1").addEventListener("mouseover", s2Type1);
function s2Type1() {
   document.shoe2.src = "Images/kid-gshoe2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: C.Green";
}
document.querySelector("#s2-type2").addEventListener("mouseover", s2Type2);
function s2Type2() {
   document.shoe2.src = "Images/kid-gshoe2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Grey";
}
document.querySelector("#s2-type3").addEventListener("mouseover", s2Type3);
function s2Type3() {
   document.shoe2.src = "Images/kid-gshoe2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Maroon";
}
document.querySelector("#s2-type4").addEventListener("mouseover", s2Type4);
function s2Type4() {
   document.shoe2.src = "Images/kid-gshoe2-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Orange";
}
document.querySelector("#s2-type5").addEventListener("mouseover", s2Type5);
function s2Type5() {
   document.shoe2.src = "Images/kid-gshoe2-8.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Light Grey";
}
// -mouseout (Shoes 2)
document.querySelector("#s2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   s2Type1();
}
document.querySelector("#s2-type3").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type4").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type5").addEventListener("mouseout", type2Mout1);
//Girls Footwear- Sports & Casual Shoes 3
var shoe2 = [
   "Images/kid-gshoe3.jpg",
   "Images/kid-gshoe3-2.jpg",
   "Images/kid-gshoe3-3.jpg",
   "Images/kid-gshoe3-4.jpg",
];
var s2 = 0;
document.shoe3.src = "Images/kid-gshoe3.jpg";
function setShoe2() {
   document.shoe3.src = shoe2[s2];
}
setInterval(function autoSlider2() {
   if (s2 < shoe2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setShoe2();
}, 10000);
document.querySelector("#leftbtn-s3").addEventListener("click", leftbShoe2);
function leftbShoe2() {
   if (s2 > 0) {
      s2--;
   } else {
      s2 = shoe2.length - 1;
   }
   setShoe2();
}
document.querySelector("#rightbtn-s3").addEventListener("click", rightbShoe2);
function rightbShoe2() {
   if (s2 < shoe2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setShoe2();
}
document.querySelector("#cart-s3").addEventListener("click", carts3);
function carts3() {
   document.querySelector("#cart-s3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s3").addEventListener("click", buys3);
function buys3() {
   const buyShoe = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoe <= 10 && buyShoe > 0) {
      document.querySelector("#total-s3").textContent =
         "Total Price : " + "₹" + 406 * buyShoe + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoe === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Shoes 3)
document.querySelector("#s3-type1").addEventListener("mouseover", s3Type1);
function s3Type1() {
   document.shoe3.src = "Images/kid-gshoe3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Black";
}
document.querySelector("#s3-type2").addEventListener("mouseover", s3Type2);
function s3Type2() {
   document.shoe3.src = "Images/kid-gshoe3-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Baby Pink";
}
document.querySelector("#s3-type3").addEventListener("mouseover", s3Type3);
function s3Type3() {
   document.shoe3.src = "Images/kid-gshoe3-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: White";
}
// -mouseout (Shoes 3)
document.querySelector("#s3-type2").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   s3Type1();
}
document.querySelector("#s3-type3").addEventListener("mouseout", type3Mout1);
//Girls Footwear- Sports & Casual Shoes 4
var shoe3 = [
   "Images/kid-gshoe4.jpg",
   "Images/kid-gshoe4-2.jpg",
   "Images/kid-gshoe4-3.jpg",
   "Images/kid-gshoe4-4.jpg",
];
var s3 = 0;
document.shoe4.src = "Images/kid-gshoe4.jpg";
function setShoe3() {
   document.shoe4.src = shoe3[s3];
}
setInterval(function autoSlider3() {
   if (s3 < shoe3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setShoe3();
}, 10000);
document.querySelector("#leftbtn-s4").addEventListener("click", leftbShoe3);
function leftbShoe3() {
   if (s3 > 0) {
      s3--;
   } else {
      s3 = shoe3.length - 1;
   }
   setShoe3();
}
document.querySelector("#rightbtn-s4").addEventListener("click", rightbShoe3);
function rightbShoe3() {
   if (s3 < shoe3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setShoe3();
}
document.querySelector("#cart-s4").addEventListener("click", carts4);
function carts4() {
   document.querySelector("#cart-s4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s4").addEventListener("click", buys4);
function buys4() {
   const buyShoe = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoe <= 10 && buyShoe > 0) {
      document.querySelector("#total-s4").textContent =
         "Total Price : " + "₹" + 469 * buyShoe + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoe === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Girls Footwear- Sports & Casual Shoes 5
var shoe4 = [
   "Images/kid-gshoe5.jpg",
   "Images/kid-gshoe5-2.jpg",
   "Images/kid-gshoe5-3.jpg",
   "Images/kid-gshoe5-4.jpg",
];
var s4 = 0;
document.shoe5.src = "Images/kid-gshoe5.jpg";
function setShoe4() {
   document.shoe5.src = shoe4[s4];
}
setInterval(function autoSlider4() {
   if (s4 < shoe4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setShoe4();
}, 10000);
document.querySelector("#leftbtn-s5").addEventListener("click", leftbShoe4);
function leftbShoe4() {
   if (s4 > 0) {
      s4--;
   } else {
      s4 = shoe4.length - 1;
   }
   setShoe4();
}
document.querySelector("#rightbtn-s5").addEventListener("click", rightbShoe4);
function rightbShoe4() {
   if (s4 < shoe4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setShoe4();
}
document.querySelector("#cart-s5").addEventListener("click", carts5);
function carts5() {
   document.querySelector("#cart-s5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s5").addEventListener("click", buys5);
function buys5() {
   const buyShoe = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoe <= 10 && buyShoe > 0) {
      document.querySelector("#total-s5").textContent =
         "Total Price : " + "₹" + 263 * buyShoe + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoe === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Girls Footwear- Sports & Casual Shoes 6
var shoe5 = [
   "Images/kid-gshoe6.jpg",
   "Images/kid-gshoe6-2.jpg",
   "Images/kid-gshoe6-3.jpg",
   "Images/kid-gshoe6-4.jpg",
];
var s5 = 0;
document.shoe6.src = "Images/kid-gshoe6.jpg";
function setShoe5() {
   document.shoe6.src = shoe5[s5];
}
setInterval(function autoSlider5() {
   if (s5 < shoe5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setShoe5();
}, 10000);
document.querySelector("#leftbtn-s6").addEventListener("click", leftbShoe5);
function leftbShoe5() {
   if (s5 > 0) {
      s5--;
   } else {
      s5 = shoe5.length - 1;
   }
   setShoe5();
}
document.querySelector("#rightbtn-s6").addEventListener("click", rightbShoe5);
function rightbShoe5() {
   if (s5 < shoe5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setShoe5();
}
document.querySelector("#cart-s6").addEventListener("click", carts6);
function carts6() {
   document.querySelector("#cart-s6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s6").addEventListener("click", buys6);
function buys6() {
   const buyShoe = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoe <= 10 && buyShoe > 0) {
      document.querySelector("#total-s6").textContent =
         "Total Price : " + "₹" + 329 * buyShoe + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoe === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Shoes 6)
document.querySelector("#s6-type1").addEventListener("mouseover", s6Type1);
function s6Type1() {
   document.shoe6.src = "Images/kid-gshoe6-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Black";
}
document.querySelector("#s6-type2").addEventListener("mouseover", s6Type2);
function s6Type2() {
   document.shoe6.src = "Images/kid-gshoe6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Blue";
}
// -mouseout (Shoes 6)
document.querySelector("#s6-type1").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   s6Type2();
}
// out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of stock");
}
//Boys Footwear- Sports & Casual Shoes 7
var shoe6 = [
   "Images/kid-gshoe7.jpg",
   "Images/kid-gshoe7-2.jpg",
   "Images/kid-gshoe7-3.jpg",
   "Images/kid-gshoe7-4.jpg",
];
var s6 = 0;
document.shoe7.src = "Images/kid-gshoe7.jpg";
function setShoe6() {
   document.shoe7.src = shoe6[s6];
}
setInterval(function autoSlider6() {
   if (s6 < shoe6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setShoe6();
}, 10000);
document.querySelector("#leftbtn-s7").addEventListener("click", leftbShoe6);
function leftbShoe6() {
   if (s6 > 0) {
      s6--;
   } else {
      s6 = shoe6.length - 1;
   }
   setShoe6();
}
document.querySelector("#rightbtn-s7").addEventListener("click", rightbShoe6);
function rightbShoe6() {
   if (s6 < shoe6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setShoe6();
}
document.querySelector("#cart-s7").addEventListener("click", carts7);
function carts7() {
   document.querySelector("#cart-s7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s7").addEventListener("click", buys7);
function buys7() {
   const buyShoe = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoe <= 10 && buyShoe > 0) {
      document.querySelector("#total-s7").textContent =
         "Total Price : " + "₹" + 399 * buyShoe + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoe === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Girls Footwear- Sports & Casual Shoes 8
var shoe7 = [
   "Images/kid-gshoe8.jpg",
   "Images/kid-gshoe8-2.jpg",
   "Images/kid-gshoe8-3.jpg",
   "Images/kid-gshoe8-4.jpg",
];
var s7 = 0;
document.shoe8.src = "Images/kid-gshoe8.jpg";
function setShoe7() {
   document.shoe8.src = shoe7[s7];
}
setInterval(function autoSlider7() {
   if (s7 < shoe7.length - 1) {
      s7++;
   } else {
      s7 = 0;
   }
   setShoe7();
}, 10000);
document.querySelector("#leftbtn-s8").addEventListener("click", leftbShoe7);
function leftbShoe7() {
   if (s7 > 0) {
      s7--;
   } else {
      s7 = shoe7.length - 1;
   }
   setShoe7();
}
document.querySelector("#rightbtn-s8").addEventListener("click", rightbShoe7);
function rightbShoe7() {
   if (s7 < shoe7.length - 1) {
      s7++;
   } else {
      s7 = 0;
   }
   setShoe7();
}
document.querySelector("#cart-s8").addEventListener("click", carts8);
function carts8() {
   document.querySelector("#cart-s8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s8").addEventListener("click", buys8);
function buys8() {
   const buyShoe = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoe <= 10 && buyShoe > 0) {
      document.querySelector("#total-s8").textContent =
         "Total Price : " + "₹" + 299 * buyShoe + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoe === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Girls Footwear- Sports & Casual Shoes 9
var shoe8 = [
   "Images/kid-gshoe9.jpg",
   "Images/kid-gshoe9-2.jpg",
   "Images/kid-gshoe9-3.jpg",
   "Images/kid-gshoe9-4.jpg",
];
var s8 = 0;
document.shoe9.src = "Images/kid-gshoe9.jpg";
function setShoe8() {
   document.shoe9.src = shoe8[s8];
}
setInterval(function autoSlider8() {
   if (s8 < shoe8.length - 1) {
      s8++;
   } else {
      s8 = 0;
   }
   setShoe8();
}, 10000);
document.querySelector("#leftbtn-s9").addEventListener("click", leftbShoe8);
function leftbShoe8() {
   if (s8 > 0) {
      s8--;
   } else {
      s8 = shoe8.length - 1;
   }
   setShoe8();
}
document.querySelector("#rightbtn-s9").addEventListener("click", rightbShoe8);
function rightbShoe8() {
   if (s8 < shoe8.length - 1) {
      s8++;
   } else {
      s8 = 0;
   }
   setShoe8();
}
document.querySelector("#cart-s9").addEventListener("click", carts9);
function carts9() {
   document.querySelector("#cart-s9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s9").addEventListener("click", buys9);
function buys9() {
   const buyShoe = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoe <= 10 && buyShoe > 0) {
      document.querySelector("#total-s9").textContent =
         "Total Price : " + "₹" + 871 * buyShoe + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoe === 0) {
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
