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
//Women Western Wear- Shorts & Skirts 1
var skirt = [
   "Images/women-sk1.jpg",
   "Images/women-sk1-2.jpg",
   "Images/women-sk1-3.jpg",
   "Images/women-sk1-4.jpg",
];
var s = 0;
document.skirt1.src = "Images/women-sk1.jpg";
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
   const buySkirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySkirt <= 10 && buySkirt > 0) {
      document.querySelector("#total-s1").textContent =
         "Total Price : " + "₹" + 597 * buySkirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySkirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Shorts 1)
document.querySelector("#s1-type1").addEventListener("mouseover", s1Type1);
function s1Type1() {
   document.skirt1.src = "Images/women-sk1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Ice Wash";
}
document.querySelector("#s1-type2").addEventListener("mouseover", s1Type2);
function s1Type2() {
   document.skirt1.src = "Images/women-sk1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Dark Wash";
}
// -mouseout (Shorts 1)
document.querySelector("#s1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   s1Type1();
}
//Women Western Wear- Shorts & Skirts 2
var skirt1 = [
   "Images/women-sk2.jpg",
   "Images/women-sk2-2.jpg",
   "Images/women-sk2-3.jpg",
   "Images/women-sk2-4.jpg",
];
var s1 = 0;
document.skirt2.src = "Images/women-sk2.jpg";
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
   const buySkirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySkirt <= 10 && buySkirt > 0) {
      document.querySelector("#total-s2").textContent =
         "Total Price : " + "₹" + 299 * buySkirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySkirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Shorts 2)
document.querySelector("#s2-type1").addEventListener("mouseover", s2Type1);
function s2Type1() {
   document.skirt2.src = "Images/women-sk2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Coral";
}
document.querySelector("#s2-type2").addEventListener("mouseover", s2Type2);
function s2Type2() {
   document.skirt2.src = "Images/women-sk2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Dark Green";
}
document.querySelector("#s2-type3").addEventListener("mouseover", s2Type3);
function s2Type3() {
   document.skirt2.src = "Images/women-sk2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Baby Pink";
}
document.querySelector("#s2-type4").addEventListener("mouseover", s2Type4);
function s2Type4() {
   document.skirt2.src = "Images/women-sk2-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Brown";
}
document.querySelector("#s2-type5").addEventListener("mouseover", s2Type5);
function s2Type5() {
   document.skirt2.src = "Images/women-sk2-8.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Dark Choco";
}
document.querySelector("#s2-type6").addEventListener("mouseover", s2Type6);
function s2Type6() {
   document.skirt2.src = "Images/women-sk2-9.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Dark Milange";
}
document.querySelector("#s2-type7").addEventListener("mouseover", s2Type7);
function s2Type7() {
   document.skirt2.src = "Images/women-sk2-10.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Grey";
}
document.querySelector("#s2-type8").addEventListener("mouseover", s2Type8);
function s2Type8() {
   document.skirt2.src = "Images/women-sk2-11.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Light Grey";
}
document.querySelector("#s2-type9").addEventListener("mouseover", s2Type9);
function s2Type9() {
   document.skirt2.src = "Images/women-sk2-12.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Navy";
}
document.querySelector("#s2-type10").addEventListener("mouseover", s2Type10);
function s2Type10() {
   document.skirt2.src = "Images/women-sk2-13.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black";
}
document.querySelector("#s2-type11").addEventListener("mouseover", s2Type11);
function s2Type11() {
   document.skirt2.src = "Images/women-sk2-14.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Purple";
}
document.querySelector("#s2-type12").addEventListener("mouseover", s2Type12);
function s2Type12() {
   document.skirt2.src = "Images/women-sk2-15.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Sky Blue";
}
// -mouseout (Shorts 2)
document.querySelector("#s2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   s2Type1();
}
document.querySelector("#s2-type3").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type4").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type5").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type6").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type7").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type8").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type9").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type10").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type11").addEventListener("mouseout", type2Mout1);
document.querySelector("#s2-type12").addEventListener("mouseout", type2Mout1);
//Women Western Wear- Shorts & Skirts 3
var skirt2 = [
   "Images/women-sk3.jpg",
   "Images/women-sk3-2.jpg",
   "Images/women-sk3-3.jpg",
   "Images/women-sk3-4.jpg",
];
var s2 = 0;
document.skirt3.src = "Images/women-sk3.jpg";
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
   const buySkirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySkirt <= 10 && buySkirt > 0) {
      document.querySelector("#total-s3").textContent =
         "Total Price : " + "₹" + 599 * buySkirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySkirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Shorts 3)
document.querySelector("#s3-type1").addEventListener("mouseover", s3Type1);
function s3Type1() {
   document.skirt3.src = "Images/women-sk3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Blue";
}
document.querySelector("#s3-type2").addEventListener("mouseover", s3Type2);
function s3Type2() {
   document.skirt3.src = "Images/women-sk3-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Black";
}
document.querySelector("#s3-type3").addEventListener("mouseover", s3Type3);
function s3Type3() {
   document.skirt3.src = "Images/women-sk3-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Ice Wash";
}
document.querySelector("#s3-type4").addEventListener("mouseover", s3Type4);
function s3Type4() {
   document.skirt3.src = "Images/women-sk3-7.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Black Wash";
}
document.querySelector("#s3-type5").addEventListener("mouseover", s3Type5);
function s3Type5() {
   document.skirt3.src = "Images/women-sk3-8.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Light Blue";
}
document.querySelector("#s3-type6").addEventListener("mouseover", s3Type6);
function s3Type6() {
   document.skirt3.src = "Images/women-sk3-9.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: White";
}
document.querySelector("#s3-type7").addEventListener("mouseover", s3Type7);
function s3Type7() {
   document.skirt3.src = "Images/women-sk3-10.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Dark Blue";
}
document.querySelector("#s3-type8").addEventListener("mouseover", s3Type8);
function s3Type8() {
   document.skirt3.src = "Images/women-sk3-11.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Camo";
}
// -mouseout (Shorts 3)
document.querySelector("#s3-type2").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   s3Type1();
}
document.querySelector("#s3-type3").addEventListener("mouseout", type3Mout1);
document.querySelector("#s3-type4").addEventListener("mouseout", type3Mout1);
document.querySelector("#s3-type5").addEventListener("mouseout", type3Mout1);
document.querySelector("#s3-type6").addEventListener("mouseout", type3Mout1);
document.querySelector("#s3-type7").addEventListener("mouseout", type3Mout1);
document.querySelector("#s3-type8").addEventListener("mouseout", type3Mout1);
//Women Western Wear- Shorts & Skirts 4
var skirt3 = [
   "Images/women-sk4.jpg",
   "Images/women-sk4-2.jpg",
   "Images/women-sk4-3.jpg",
   "Images/women-sk4-4.jpg",
];
var s3 = 0;
document.skirt4.src = "Images/women-sk4.jpg";
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
   const buySkirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySkirt <= 10 && buySkirt > 0) {
      document.querySelector("#total-s4").textContent =
         "Total Price : " + "₹" + 598 * buySkirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySkirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Shorts 4)
document.querySelector("#s4-type1").addEventListener("mouseover", s4Type1);
function s4Type1() {
   document.skirt4.src = "Images/women-sk4-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Black";
}
document.querySelector("#s4-type2").addEventListener("mouseover", s4Type2);
function s4Type2() {
   document.skirt4.src = "Images/women-sk4-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Baby Pink";
}
document.querySelector("#s4-type3").addEventListener("mouseover", s4Type3);
function s4Type3() {
   document.skirt4.src = "Images/women-sk4-7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Sky Blue";
}
document.querySelector("#s4-type4").addEventListener("mouseover", s4Type4);
function s4Type4() {
   document.skirt4.src = "Images/women-sk4-8.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Maroon";
}
document.querySelector("#s4-type5").addEventListener("mouseover", s4Type5);
function s4Type5() {
   document.skirt4.src = "Images/women-sk4-9.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Sand";
}
document.querySelector("#s4-type6").addEventListener("mouseover", s4Type6);
function s4Type6() {
   document.skirt4.src = "Images/women-sk4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: White";
}
// -mouseout (Shorts 4)
document.querySelector("#s4-type1").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   s4Type6();
}
document.querySelector("#s4-type2").addEventListener("mouseout", type4Mout1);
document.querySelector("#s4-type3").addEventListener("mouseout", type4Mout1);
document.querySelector("#s4-type4").addEventListener("mouseout", type4Mout1);
document.querySelector("#s4-type5").addEventListener("mouseout", type4Mout1);
//Women Western Wear- Shorts & Skirts 5
var skirt4 = [
   "Images/women-sk5.jpg",
   "Images/women-sk5-2.jpg",
   "Images/women-sk5-3.jpg",
   "Images/women-sk5-4.jpg",
];
var s4 = 0;
document.skirt5.src = "Images/women-sk5.jpg";
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
   const buySkirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySkirt <= 10 && buySkirt > 0) {
      document.querySelector("#total-s5").textContent =
         "Total Price : " + "₹" + 599 * buySkirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySkirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Shorts 5)
document.querySelector("#s5-type1").addEventListener("mouseover", s5Type1);
function s5Type1() {
   document.skirt5.src = "Images/women-sk5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Dark Blue";
}
document.querySelector("#s5-type2").addEventListener("mouseover", s5Type2);
function s5Type2() {
   document.skirt5.src = "Images/women-sk5-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Light Blue";
}
// -mouseout (Shorts 5)
document.querySelector("#s5-type2").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   s5Type1();
}
// Out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
document.querySelector("#oos2").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of stock");
}
//Women Western Wear- Shorts & Skirts 6
var skirt5 = [
   "Images/women-sk6.jpg",
   "Images/women-sk6-2.jpg",
   "Images/women-sk6-3.jpg",
   "Images/women-sk6-4.jpg",
];
var s5 = 0;
document.skirt6.src = "Images/women-sk6.jpg";
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
   const buySkirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySkirt <= 10 && buySkirt > 0) {
      document.querySelector("#total-s6").textContent =
         "Total Price : " + "₹" + 629 * buySkirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySkirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Women Western Wear- Shorts & Skirts 7
var skirt6 = [
   "Images/women-sk7.jpg",
   "Images/women-sk7-2.jpg",
   "Images/women-sk7-3.jpg",
   "Images/women-sk7-4.jpg",
];
var s6 = 0;
document.skirt7.src = "Images/women-sk7.jpg";
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
   const buySkirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySkirt <= 10 && buySkirt > 0) {
      document.querySelector("#total-s7").textContent =
         "Total Price : " + "₹" + 729 * buySkirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySkirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Shorts 7)
document.querySelector("#s7-type1").addEventListener("mouseover", s7Type1);
function s7Type1() {
   document.skirt7.src = "Images/women-sk7.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Light Grey";
}
document.querySelector("#s7-type2").addEventListener("mouseover", s7Type2);
function s7Type2() {
   document.skirt7.src = "Images/women-sk7-5.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Black";
}
document.querySelector("#s7-type3").addEventListener("mouseover", s7Type3);
function s7Type3() {
   document.skirt7.src = "Images/women-sk7-6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Purple";
}
document.querySelector("#s7-type4").addEventListener("mouseover", s7Type4);
function s7Type4() {
   document.skirt7.src = "Images/women-sk7-7.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Sky Blue";
}
document.querySelector("#s7-type5").addEventListener("mouseover", s7Type5);
function s7Type5() {
   document.skirt7.src = "Images/women-sk7-8.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Dark Purple";
}
document.querySelector("#s7-type6").addEventListener("mouseover", s7Type6);
function s7Type6() {
   document.skirt7.src = "Images/women-sk7-9.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Silver";
}
document.querySelector("#s7-type7").addEventListener("mouseover", s7Type7);
function s7Type7() {
   document.skirt7.src = "Images/women-sk7-10.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Maroon";
}
// -mouseout (Shorts 7)
document.querySelector("#s7-type2").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   s7Type1();
}
document.querySelector("#s7-type3").addEventListener("mouseout", type7Mout1);
document.querySelector("#s7-type4").addEventListener("mouseout", type7Mout1);
document.querySelector("#s7-type5").addEventListener("mouseout", type7Mout1);
document.querySelector("#s7-type6").addEventListener("mouseout", type7Mout1);
document.querySelector("#s7-type7").addEventListener("mouseout", type7Mout1);
//Women Western Wear- Shorts & Skirts 8
var skirt7 = [
   "Images/women-sk8.jpg",
   "Images/women-sk8-2.jpg",
   "Images/women-sk8-3.jpg",
   "Images/women-sk8-4.jpg",
];
var s7 = 0;
document.skirt8.src = "Images/women-sk8.jpg";
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
   const buySkirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySkirt <= 10 && buySkirt > 0) {
      document.querySelector("#total-s8").textContent =
         "Total Price : " + "₹" + 1376 * buySkirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySkirt === 0) {
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
