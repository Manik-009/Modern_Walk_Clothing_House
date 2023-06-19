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
//Girls Clothing- Skirt 1
var skirt = [
   "Images/kid-sk1.jpg",
   "Images/kid-sk1-2.jpg",
   "Images/kid-sk1-3.jpg",
];
var s = 0;
document.skirt1.src = "Images/kid-sk1.jpg";
function setSkirt() {
   document.skirt1.src = skirt[s];
}
setInterval(function autoSlider() {
   if (s < skirt.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setSkirt();
}, 10000);
document.querySelector("#leftbtn-s1").addEventListener("click", leftbSkirt);
function leftbSkirt() {
   if (s > 0) {
      s--;
   } else {
      s = skirt.length - 1;
   }
   setSkirt();
}
document.querySelector("#rightbtn-s1").addEventListener("click", rightbSkirt);
function rightbSkirt() {
   if (s < skirt.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setSkirt();
}
document.querySelector("#cart-s1").addEventListener("click", carts1);
function carts1() {
   document.querySelector("#cart-s1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s1").addEventListener("click", buys1);
function buys1() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-s1").textContent =
         "Total Price : " + "₹" + 229 * buyTshirt + "  only";
      document.querySelector("#total-s1").style.marginTop = "10px";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Skirt 1)
document.querySelector("#s1-type1").addEventListener("mouseover", s1Type1);
function s1Type1() {
   document.skirt1.src = "Images/kid-sk1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Navy Blue";
}
document.querySelector("#s1-type2").addEventListener("mouseover", s1Type2);
function s1Type2() {
   document.skirt1.src = "Images/kid-sk1-4.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black";
}
document.querySelector("#s1-type3").addEventListener("mouseover", s1Type3);
function s1Type3() {
   document.skirt1.src = "Images/kid-sk1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Sky Blue";
}
document.querySelector("#s1-type4").addEventListener("mouseover", s1Type4);
function s1Type4() {
   document.skirt1.src = "Images/kid-sk1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Hot Pink";
}
document.querySelector("#s1-type5").addEventListener("mouseover", s1Type5);
function s1Type5() {
   document.skirt1.src = "Images/kid-sk1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Purple";
}
document.querySelector("#s1-type6").addEventListener("mouseover", s1Type6);
function s1Type6() {
   document.skirt1.src = "Images/kid-sk1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Light Pink";
}
document.querySelector("#s1-type7").addEventListener("mouseover", s1Type7);
function s1Type7() {
   document.skirt1.src = "Images/kid-sk1-9.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Red";
}
document.querySelector("#s1-type8").addEventListener("mouseover", s1Type8);
function s1Type8() {
   document.skirt1.src = "Images/kid-sk1-10.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Orange";
}
// -mouseout (skirt 1)
document.querySelector("#s1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   s1Type1();
}
document.querySelector("#s1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type5").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type6").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type7").addEventListener("mouseout", type1Mout1);
document.querySelector("#s1-type8").addEventListener("mouseout", type1Mout1);
//Girls Clothing- Skirt 2
var skirt1 = [
   "Images/kid-sk2.jpg",
   "Images/kid-sk2-2.jpg",
   "Images/kid-sk2-3.jpg",
];
var s1 = 0;
document.skirt2.src = "Images/kid-sk2.jpg";
function setSkirt1() {
   document.skirt2.src = skirt1[s1];
}
setInterval(function autoSlider1() {
   if (s1 < skirt1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setSkirt1();
}, 10000);
document.querySelector("#leftbtn-s2").addEventListener("click", leftbSkirt1);
function leftbSkirt1() {
   if (s1 > 0) {
      s1--;
   } else {
      s1 = skirt1.length - 1;
   }
   setSkirt1();
}
document.querySelector("#rightbtn-s2").addEventListener("click", rightbSkirt1);
function rightbSkirt1() {
   if (s1 < skirt1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setSkirt1();
}
document.querySelector("#cart-s2").addEventListener("click", carts2);
function carts2() {
   document.querySelector("#cart-s2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s2").addEventListener("click", buys2);
function buys2() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-s2").textContent =
         "Total Price : " + "₹" + 499 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Skirt 2)
document.querySelector("#s2-type1").addEventListener("mouseover", s2Type1);
function s2Type1() {
   document.skirt2.src = "Images/kid-sk2-4.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Light Blue";
}
document.querySelector("#s2-type2").addEventListener("mouseover", s2Type2);
function s2Type2() {
   document.skirt2.src = "Images/kid-sk2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Medium Blue";
}
document.querySelector("#s2-type3").addEventListener("mouseover", s2Type3);
function s2Type3() {
   document.skirt2.src = "Images/kid-sk2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Dark Blue";
}
document.querySelector("#s2-type4").addEventListener("mouseover", s2Type4);
function s2Type4() {
   document.skirt2.src = "Images/kid-sk2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Multicolor";
}
// -mouseout (skirt 2)
document.querySelector("#s2-type1").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   s2Type4();
}
document.querySelector("#s2-type2").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type3").addEventListener("mouseout", type2Mout1);
//Girls Clothing- Skirt 3
var skirt2 = [
   "Images/kid-sk3.jpg",
   "Images/kid-sk3-2.jpg",
   "Images/kid-sk3-3.jpg",
];
var s2 = 0;
document.skirt3.src = "Images/kid-sk3.jpg";
function setSkirt2() {
   document.skirt3.src = skirt2[s2];
}
setInterval(function autoSlider2() {
   if (s2 < skirt2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setSkirt2();
}, 10000);
document.querySelector("#leftbtn-s3").addEventListener("click", leftbSkirt2);
function leftbSkirt2() {
   if (s2 > 0) {
      s2--;
   } else {
      s2 = skirt2.length - 1;
   }
   setSkirt2();
}
document.querySelector("#rightbtn-s3").addEventListener("click", rightbSkirt2);
function rightbSkirt2() {
   if (s2 < skirt2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setSkirt2();
}
document.querySelector("#cart-s3").addEventListener("click", carts3);
function carts3() {
   document.querySelector("#cart-s3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s3").addEventListener("click", buys3);
function buys3() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-s3").textContent =
         "Total Price : " + "₹" + 399 * buyTshirt + "  only";
      document.querySelector("#total-s3").style.marginTop = "10px";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Skirt 3)
document.querySelector("#s3-type1").addEventListener("mouseover", s3Type1);
function s3Type1() {
   document.skirt3.src = "Images/kid-sk3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Pink Print";
}
document.querySelector("#s3-type2").addEventListener("mouseover", s3Type2);
function s3Type2() {
   document.skirt3.src = "Images/kid-sk3-4.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Aliceblue Print";
}
document.querySelector("#s3-type3").addEventListener("mouseover", s3Type3);
function s3Type3() {
   document.skirt3.src = "Images/kid-sk3-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: SKy Blue Print";
}
document.querySelector("#s3-type4").addEventListener("mouseover", s3Type4);
function s3Type4() {
   document.skirt3.src = "Images/kid-sk3-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Navy Print";
}
document.querySelector("#s3-type5").addEventListener("mouseover", s3Type5);
function s3Type5() {
   document.skirt3.src = "Images/kid-sk3-7.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Black Print";
}
// -mouseout (skirt 3)
document.querySelector("#s3-type2").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   s3Type1();
}
document.querySelector("#s3-type3").addEventListener("mouseout", type3Mout1);
document.querySelector("#s3-type4").addEventListener("mouseout", type3Mout1);
document.querySelector("#s3-type5").addEventListener("mouseout", type3Mout1);
//Girls Clothing- Skirt 4
var skirt3 = [
   "Images/kid-sk4.jpg",
   "Images/kid-sk4-2.jpg",
   "Images/kid-sk4-3.jpg",
];
var s3 = 0;
document.skirt4.src = "Images/kid-sk4.jpg";
function setSkirt3() {
   document.skirt4.src = skirt3[s3];
}
setInterval(function autoSlider3() {
   if (s3 < skirt3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setSkirt3();
}, 10000);
document.querySelector("#leftbtn-s4").addEventListener("click", leftbSkirt3);
function leftbSkirt3() {
   if (s3 > 0) {
      s3--;
   } else {
      s3 = skirt3.length - 1;
   }
   setSkirt3();
}
document.querySelector("#rightbtn-s4").addEventListener("click", rightbSkirt3);
function rightbSkirt3() {
   if (s3 < skirt3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setSkirt3();
}
document.querySelector("#cart-s4").addEventListener("click", carts4);
function carts4() {
   document.querySelector("#cart-s4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s4").addEventListener("click", buys4);
function buys4() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-s4").textContent =
         "Total Price : " + "₹" + 844 * buyTshirt + "  only";
      document.querySelector("#total-s4").style.marginTop = "10px";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Girls Clothing- Skirt 5
var skirt4 = [
   "Images/kid-sk5.jpg",
   "Images/kid-sk5-2.jpg",
   "Images/kid-sk5-3.jpg",
];
var s4 = 0;
document.skirt5.src = "Images/kid-sk5.jpg";
function setSkirt4() {
   document.skirt5.src = skirt4[s4];
}
setInterval(function autoSlider4() {
   if (s4 < skirt4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setSkirt4();
}, 10000);
document.querySelector("#leftbtn-s5").addEventListener("click", leftbSkirt4);
function leftbSkirt4() {
   if (s4 > 0) {
      s4--;
   } else {
      s4 = skirt4.length - 1;
   }
   setSkirt4();
}
document.querySelector("#rightbtn-s5").addEventListener("click", rightbSkirt4);
function rightbSkirt4() {
   if (s4 < skirt4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setSkirt4();
}
document.querySelector("#cart-s5").addEventListener("click", carts5);
function carts5() {
   document.querySelector("#cart-s5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s5").addEventListener("click", buys5);
function buys5() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-s5").textContent =
         "Total Price : " + "₹" + 366 * buyTshirt + "  only";
      document.querySelector("#total-s5").style.marginTop = "10px";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Girls Clothing- Skirt 6
var skirt5 = [
   "Images/kid-sk6.jpg",
   "Images/kid-sk6-2.jpg",
   "Images/kid-sk6-3.jpg",
];
var s5 = 0;
document.skirt6.src = "Images/kid-sk6.jpg";
function setSkirt5() {
   document.skirt6.src = skirt5[s5];
}
setInterval(function autoSlider5() {
   if (s5 < skirt5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setSkirt5();
}, 10000);
document.querySelector("#leftbtn-s6").addEventListener("click", leftbSkirt5);
function leftbSkirt5() {
   if (s5 > 0) {
      s5--;
   } else {
      s5 = skirt5.length - 1;
   }
   setSkirt5();
}
document.querySelector("#rightbtn-s6").addEventListener("click", rightbSkirt5);
function rightbSkirt5() {
   if (s5 < skirt5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setSkirt5();
}
document.querySelector("#cart-s6").addEventListener("click", carts6);
function carts6() {
   document.querySelector("#cart-s6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s6").addEventListener("click", buys6);
function buys6() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-s6").textContent =
         "Total Price : " + "₹" + 341 * buyTshirt + "  only";
      document.querySelector("#total-s6").style.marginTop = "10px";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Skirt 6)
document.querySelector("#s6-type1").addEventListener("mouseover", s6Type1);
function s6Type1() {
   document.skirt6.src = "Images/kid-sk6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Red";
}
document.querySelector("#s6-type2").addEventListener("mouseover", s6Type2);
function s6Type2() {
   document.skirt6.src = "Images/kid-sk6-4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Navy Blue";
}
// -mouseout (Skirt 6)
document.querySelector("#s6-type2").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   s6Type1();
}
//Girls Clothing- Skirt 7
var skirt6 = [
   "Images/kid-sk7.jpg",
   "Images/kid-sk7-2.jpg",
   "Images/kid-sk7-3.jpg",
];
var s6 = 0;
document.skirt7.src = "Images/kid-sk7.jpg";
function setSkirt6() {
   document.skirt7.src = skirt6[s6];
}
setInterval(function autoSlider6() {
   if (s6 < skirt6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setSkirt6();
}, 10000);
document.querySelector("#leftbtn-s7").addEventListener("click", leftbSkirt6);
function leftbSkirt6() {
   if (s6 > 0) {
      s6--;
   } else {
      s6 = skirt6.length - 1;
   }
   setSkirt6();
}
document.querySelector("#rightbtn-s7").addEventListener("click", rightbSkirt6);
function rightbSkirt6() {
   if (s6 < skirt6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setSkirt6();
}
document.querySelector("#cart-s7").addEventListener("click", carts7);
function carts7() {
   document.querySelector("#cart-s7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s7").addEventListener("click", buys7);
function buys7() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-s7").textContent =
         "Total Price : " + "₹" + 292 * buyTshirt + "  only";
      document.querySelector("#total-s7").style.marginTop = "40px";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Girls Clothing- Skirt 8
var skirt7 = [
   "Images/kid-sk8.jpg",
   "Images/kid-sk8-2.jpg",
   "Images/kid-sk8-3.jpg",
];
var s7 = 0;
document.skirt8.src = "Images/kid-sk8.jpg";
function setSkirt7() {
   document.skirt8.src = skirt7[s7];
}
setInterval(function autoSlider7() {
   if (s7 < skirt7.length - 1) {
      s7++;
   } else {
      s7 = 0;
   }
   setSkirt7();
}, 10000);
document.querySelector("#leftbtn-s8").addEventListener("click", leftbSkirt7);
function leftbSkirt7() {
   if (s7 > 0) {
      s7--;
   } else {
      s7 = skirt7.length - 1;
   }
   setSkirt7();
}
document.querySelector("#rightbtn-s8").addEventListener("click", rightbSkirt7);
function rightbSkirt7() {
   if (s7 < skirt7.length - 1) {
      s7++;
   } else {
      s7 = 0;
   }
   setSkirt7();
}
document.querySelector("#cart-s8").addEventListener("click", carts8);
function carts8() {
   document.querySelector("#cart-s8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s8").addEventListener("click", buys8);
function buys8() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-s8").textContent =
         "Total Price : " + "₹" + 399 * buyTshirt + "  only";
      document.querySelector("#total-s8").style.marginTop = "40px";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Girls Clothing- Skirt 9
var skirt8 = [
   "Images/kid-sk9.jpg",
   "Images/kid-sk9-2.jpg",
   "Images/kid-sk9-3.jpg",
];
var s8 = 0;
document.skirt9.src = "Images/kid-sk9.jpg";
function setSkirt8() {
   document.skirt9.src = skirt8[s8];
}
setInterval(function autoSlider8() {
   if (s8 < skirt8.length - 1) {
      s8++;
   } else {
      s8 = 0;
   }
   setSkirt8();
}, 10000);
document.querySelector("#leftbtn-s9").addEventListener("click", leftbSkirt8);
function leftbSkirt8() {
   if (s8 > 0) {
      s8--;
   } else {
      s8 = skirt8.length - 1;
   }
   setSkirt8();
}
document.querySelector("#rightbtn-s9").addEventListener("click", rightbSkirt8);
function rightbSkirt8() {
   if (s8 < skirt8.length - 1) {
      s8++;
   } else {
      s8 = 0;
   }
   setSkirt8();
}
document.querySelector("#cart-s9").addEventListener("click", carts9);
function carts9() {
   document.querySelector("#cart-s9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s9").addEventListener("click", buys9);
function buys9() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-s9").textContent =
         "Total Price : " + "₹" + 399 * buyTshirt + "  only";
      document.querySelector("#total-s9").style.marginTop = "40px";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Skirt 9)
document.querySelector("#s9-type1").addEventListener("mouseover", s9Type1);
function s9Type1() {
   document.skirt9.src = "Images/kid-sk9-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Maroon";
}
document.querySelector("#s9-type2").addEventListener("mouseover", s9Type2);
function s9Type2() {
   document.skirt9.src = "Images/kid-sk9-4.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Hot Pink";
}
document.querySelector("#s9-type3").addEventListener("mouseover", s9Type3);
function s9Type3() {
   document.skirt9.src = "Images/kid-sk9.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Yellow";
}
// -mouseout (Skirt 6)
document.querySelector("#s9-type1").addEventListener("mouseout", type9Mout1);
function type9Mout1() {
   s9Type3();
}
document.querySelector("#s9-type2").addEventListener("mouseout", type9Mout1);
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
