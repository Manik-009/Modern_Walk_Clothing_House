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
//Girls Footwear- Sandal 1
var sandals = [
   "Images/kid-gsan1.jpg",
   "Images/kid-gsan1-2.jpg",
   "Images/kid-gsan1-3.jpg",
   "Images/kid-gsan1-4.jpg",
];
var s = 0;
document.sandals1.src = "Images/kid-gsan1.jpg";
function setSandals() {
   document.sandals1.src = sandals[s];
}
setInterval(function autoSlider() {
   if (s < sandals.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setSandals();
}, 10000);
document.querySelector("#leftbtn-s1").addEventListener("click", leftbSandals);
function leftbSandals() {
   if (s > 0) {
      s--;
   } else {
      s = sandals.length - 1;
   }
   setSandals();
}
document.querySelector("#rightbtn-s1").addEventListener("click", rightbSandals);
function rightbSandals() {
   if (s < sandals.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setSandals();
}
document.querySelector("#cart-s1").addEventListener("click", carts1);
function carts1() {
   document.querySelector("#cart-s1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s1").addEventListener("click", buys1);
function buys1() {
   const buySandals = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySandals <= 10 && buySandals > 0) {
      document.querySelector("#total-s1").textContent =
         "Total Price : " + "₹" + 759 * buySandals + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySandals === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sandal 1)
document.querySelector("#s1-type1").addEventListener("mouseover", s1Type1);
function s1Type1() {
   document.sandals1.src = "Images/kid-gsan1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Peach";
}
document.querySelector("#s1-type2").addEventListener("mouseover", s1Type2);
function s1Type2() {
   document.sandals1.src = "Images/kid-gsan1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Pink";
}
document.querySelector("#s1-type3").addEventListener("mouseover", s1Type3);
function s1Type3() {
   document.sandals1.src = "Images/kid-gsan1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Blue";
}
// -mouseout (Sandal 1)
document.querySelector("#s1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   s1Type1();
}
document.querySelector("#s1-type3").addEventListener("mouseout", type1Mout1);
//Girls Footwear- Sandal 2
var sandals1 = [
   "Images/kid-gsan2.jpg",
   "Images/kid-gsan2-2.jpg",
   "Images/kid-gsan2-3.jpg",
   "Images/kid-gsan2-4.jpg",
];
var s1 = 0;
document.sandals2.src = "Images/kid-gsan2.jpg";
function setSandals1() {
   document.sandals2.src = sandals1[s1];
}
setInterval(function autoSlider1() {
   if (s1 < sandals1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setSandals1();
}, 10000);
document.querySelector("#leftbtn-s2").addEventListener("click", leftbSandals1);
function leftbSandals1() {
   if (s1 > 0) {
      s1--;
   } else {
      s1 = sandals1.length - 1;
   }
   setSandals1();
}
document
   .querySelector("#rightbtn-s2")
   .addEventListener("click", rightbSandals1);
function rightbSandals1() {
   if (s1 < sandals1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setSandals1();
}
document.querySelector("#cart-s2").addEventListener("click", carts2);
function carts2() {
   document.querySelector("#cart-s2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s2").addEventListener("click", buys2);
function buys2() {
   const buySandals = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySandals <= 10 && buySandals > 0) {
      document.querySelector("#total-s2").textContent =
         "Total Price : " + "₹" + 499 * buySandals + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySandals === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sandal 2)
document.querySelector("#s2-type1").addEventListener("mouseover", s2Type1);
function s2Type1() {
   document.sandals2.src = "Images/kid-gsan2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Red";
}
document.querySelector("#s2-type2").addEventListener("mouseover", s2Type2);
function s2Type2() {
   document.sandals2.src = "Images/kid-gsan2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Baby Pink";
}
document.querySelector("#s2-type3").addEventListener("mouseover", s2Type3);
function s2Type3() {
   document.sandals2.src = "Images/kid-gsan2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Cream";
}
document.querySelector("#s2-type4").addEventListener("mouseover", s2Type4);
function s2Type4() {
   document.sandals2.src = "Images/kid-gsan2-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black";
}
document.querySelector("#s2-type5").addEventListener("mouseover", s2Type5);
function s2Type5() {
   document.sandals2.src = "Images/kid-gsan2-8.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Beige";
}
// -mouseout (Sandal 2)
document.querySelector("#s2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   s2Type1();
}
document.querySelector("#s2-type3").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type4").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type5").addEventListener("mouseout", type2Mout1);
//Girls Footwear- Sandal 3
var sandals2 = [
   "Images/kid-gsan3.jpg",
   "Images/kid-gsan3-2.jpg",
   "Images/kid-gsan3-3.jpg",
   "Images/kid-gsan3-4.jpg",
];
var s2 = 0;
document.sandals3.src = "Images/kid-gsan3.jpg";
function setSandals2() {
   document.sandals3.src = sandals2[s2];
}
setInterval(function autoSlider2() {
   if (s2 < sandals2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setSandals2();
}, 10000);
document.querySelector("#leftbtn-s3").addEventListener("click", leftbSandals2);
function leftbSandals2() {
   if (s2 > 0) {
      s2--;
   } else {
      s2 = sandals2.length - 1;
   }
   setSandals2();
}
document
   .querySelector("#rightbtn-s3")
   .addEventListener("click", rightbSandals2);
function rightbSandals2() {
   if (s2 < sandals2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setSandals2();
}
document.querySelector("#cart-s3").addEventListener("click", carts3);
function carts3() {
   document.querySelector("#cart-s3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s3").addEventListener("click", buys3);
function buys3() {
   const buySandals = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySandals <= 10 && buySandals > 0) {
      document.querySelector("#total-s3").textContent =
         "Total Price : " + "₹" + 499 * buySandals + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySandals === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Boys Footwear- Sandal 4
var sandals3 = [
   "Images/kid-gsan4.jpg",
   "Images/kid-gsan4-2.jpg",
   "Images/kid-gsan4-3.jpg",
   "Images/kid-gsan4-4.jpg",
];
var s3 = 0;
document.sandals4.src = "Images/kid-gsan4.jpg";
function setSandals3() {
   document.sandals4.src = sandals3[s3];
}
setInterval(function autoSlider3() {
   if (s3 < sandals3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setSandals3();
}, 10000);
document.querySelector("#leftbtn-s4").addEventListener("click", leftbSandals3);
function leftbSandals3() {
   if (s3 > 0) {
      s3--;
   } else {
      s3 = sandals3.length - 1;
   }
   setSandals3();
}
document
   .querySelector("#rightbtn-s4")
   .addEventListener("click", rightbSandals3);
function rightbSandals3() {
   if (s3 < sandals3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setSandals3();
}
document.querySelector("#cart-s4").addEventListener("click", carts4);
function carts4() {
   document.querySelector("#cart-s4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s4").addEventListener("click", buys4);
function buys4() {
   const buySandals = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySandals <= 10 && buySandals > 0) {
      document.querySelector("#total-s4").textContent =
         "Total Price : " + "₹" + 503 * buySandals + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySandals === 0) {
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
//Boys Footwear- Sandal 5
var sandals4 = [
   "Images/kid-gsan5.jpg",
   "Images/kid-gsan5-2.jpg",
   "Images/kid-gsan5-3.jpg",
   "Images/kid-gsan5-4.jpg",
];
var s4 = 0;
document.sandals5.src = "Images/kid-gsan5.jpg";
function setSandals4() {
   document.sandals5.src = sandals4[s4];
}
setInterval(function autoSlider4() {
   if (s4 < sandals4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setSandals4();
}, 10000);
document.querySelector("#leftbtn-s5").addEventListener("click", leftbSandals4);
function leftbSandals4() {
   if (s4 > 0) {
      s4--;
   } else {
      s4 = sandals4.length - 1;
   }
   setSandals4();
}
document
   .querySelector("#rightbtn-s5")
   .addEventListener("click", rightbSandals4);
function rightbSandals4() {
   if (s4 < sandals4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setSandals4();
}
document.querySelector("#cart-s5").addEventListener("click", carts5);
function carts5() {
   document.querySelector("#cart-s5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s5").addEventListener("click", buys5);
function buys5() {
   const buySandals = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySandals <= 10 && buySandals > 0) {
      document.querySelector("#total-s5").textContent =
         "Total Price : " + "₹" + 1377 * buySandals + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySandals === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sandal 5)
document.querySelector("#s5-type1").addEventListener("mouseover", s5Type1);
function s5Type1() {
   document.sandals5.src = "Images/kid-gsan5-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Pink";
}
document.querySelector("#s5-type2").addEventListener("mouseover", s5Type2);
function s5Type2() {
   document.sandals5.src = "Images/kid-gsan5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Silver";
}
// -mouseout (Sandal 5)
document.querySelector("#s5-type1").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   s5Type2();
}
//Boys Footwear- Sandal 6
var sandals5 = [
   "Images/kid-gsan6.jpg",
   "Images/kid-gsan6-2.jpg",
   "Images/kid-gsan6-3.jpg",
   "Images/kid-gsan6-4.jpg",
];
var s5 = 0;
document.sandals6.src = "Images/kid-gsan6.jpg";
function setSandals5() {
   document.sandals6.src = sandals5[s5];
}
setInterval(function autoSlider5() {
   if (s5 < sandals5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setSandals5();
}, 10000);
document.querySelector("#leftbtn-s6").addEventListener("click", leftbSandals5);
function leftbSandals5() {
   if (s5 > 0) {
      s5--;
   } else {
      s5 = sandals5.length - 1;
   }
   setSandals5();
}
document
   .querySelector("#rightbtn-s6")
   .addEventListener("click", rightbSandals5);
function rightbSandals5() {
   if (s5 < sandals5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setSandals5();
}
document.querySelector("#cart-s6").addEventListener("click", carts6);
function carts6() {
   document.querySelector("#cart-s6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s6").addEventListener("click", buys6);
function buys6() {
   const buySandals = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySandals <= 10 && buySandals > 0) {
      document.querySelector("#total-s6").textContent =
         "Total Price : " + "₹" + 644 * buySandals + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySandals === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Girls Footwear- Sandal 7
var sandals6 = [
   "Images/kid-gsan7.jpg",
   "Images/kid-gsan7-2.jpg",
   "Images/kid-gsan7-3.jpg",
   "Images/kid-gsan7-4.jpg",
];
var s6 = 0;
document.sandals7.src = "Images/kid-gsan7.jpg";
function setSandals6() {
   document.sandals7.src = sandals6[s6];
}
setInterval(function autoSlider6() {
   if (s6 < sandals6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setSandals6();
}, 10000);
document.querySelector("#leftbtn-s7").addEventListener("click", leftbSandals6);
function leftbSandals6() {
   if (s6 > 0) {
      s6--;
   } else {
      s6 = sandals6.length - 1;
   }
   setSandals6();
}
document
   .querySelector("#rightbtn-s7")
   .addEventListener("click", rightbSandals6);
function rightbSandals6() {
   if (s6 < sandals6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setSandals6();
}
document.querySelector("#cart-s7").addEventListener("click", carts7);
function carts7() {
   document.querySelector("#cart-s7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s7").addEventListener("click", buys7);
function buys7() {
   const buySandals = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySandals <= 10 && buySandals > 0) {
      document.querySelector("#total-s7").textContent =
         "Total Price : " + "₹" + 382 * buySandals + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySandals === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Girls Footwear- Sandal 8
var sandals7 = [
   "Images/kid-gsan8.jpg",
   "Images/kid-gsan1-2.jpg",
   "Images/kid-gsan8-3.jpg",
   "Images/kid-gsan8-4.jpg",
];
var s7 = 0;
document.sandals8.src = "Images/kid-gsan8.jpg";
function setSandals7() {
   document.sandals8.src = sandals7[s7];
}
setInterval(function autoSlider7() {
   if (s7 < sandals7.length - 1) {
      s7++;
   } else {
      s7 = 0;
   }
   setSandals7();
}, 10000);
document.querySelector("#leftbtn-s8").addEventListener("click", leftbSandals7);
function leftbSandals7() {
   if (s7 > 0) {
      s7--;
   } else {
      s7 = sandals7.length - 1;
   }
   setSandals7();
}
document
   .querySelector("#rightbtn-s8")
   .addEventListener("click", rightbSandals7);
function rightbSandals7() {
   if (s7 < sandals7.length - 1) {
      s7++;
   } else {
      s7 = 0;
   }
   setSandals7();
}
document.querySelector("#cart-s8").addEventListener("click", carts8);
function carts8() {
   document.querySelector("#cart-s8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s8").addEventListener("click", buys8);
function buys8() {
   const buySandals = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySandals <= 10 && buySandals > 0) {
      document.querySelector("#total-s8").textContent =
         "Total Price : " + "₹" + 325 * buySandals + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySandals === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Girls Footwear- Sandal 9
var sandals8 = [
   "Images/kid-gsan9.jpg",
   "Images/kid-gsan9-2.jpg",
   "Images/kid-gsan9-3.jpg",
   "Images/kid-gsan9-4.jpg",
];
var s8 = 0;
document.sandals9.src = "Images/kid-gsan9.jpg";
function setSandals8() {
   document.sandals9.src = sandals8[s8];
}
setInterval(function autoSlider8() {
   if (s8 < sandals8.length - 1) {
      s8++;
   } else {
      s8 = 0;
   }
   setSandals8();
}, 10000);
document.querySelector("#leftbtn-s9").addEventListener("click", leftbSandals8);
function leftbSandals8() {
   if (s8 > 0) {
      s8--;
   } else {
      s8 = sandals8.length - 1;
   }
   setSandals8();
}
document
   .querySelector("#rightbtn-s9")
   .addEventListener("click", rightbSandals8);
function rightbSandals8() {
   if (s8 < sandals8.length - 1) {
      s8++;
   } else {
      s8 = 0;
   }
   setSandals8();
}
document.querySelector("#cart-s9").addEventListener("click", carts9);
function carts9() {
   document.querySelector("#cart-s9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s9").addEventListener("click", buys9);
function buys9() {
   const buySandals = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySandals <= 10 && buySandals > 0) {
      document.querySelector("#total-s9").textContent =
         "Total Price : " + "₹" + 380 * buySandals + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySandals === 0) {
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
