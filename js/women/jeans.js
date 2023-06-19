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
//Women Western Wear- Jean 1
var jean = [
   "Images/women-j1.jpg",
   "Images/women-j1-2.jpg",
   "Images/women-j1-3.jpg",
   "Images/women-j1-4.jpg",
];
var j = 0;
document.jean1.src = "Images/women-j1.jpg";
function setJeans() {
   document.jean1.src = jean[j];
}
setInterval(function autoSlider() {
   if (j < jean.length - 1) {
      j++;
   } else {
      j = 0;
   }
   setJeans();
}, 10000);
document.querySelector("#leftbtn-j1").addEventListener("click", leftbJeans);
function leftbJeans() {
   if (j > 0) {
      j--;
   } else {
      j = jean.length - 1;
   }
   setJeans();
}
document.querySelector("#rightbtn-j1").addEventListener("click", rightbJeans);
function rightbJeans() {
   if (j < jean.length - 1) {
      j++;
   } else {
      j = 0;
   }
   setJeans();
}
document.querySelector("#cart-j1").addEventListener("click", cartj1);
function cartj1() {
   document.querySelector("#cart-j1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j1").addEventListener("click", buyj1);
function buyj1() {
   const buyJean = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJean <= 10 && buyJean > 0) {
      document.querySelector("#total-j1").textContent =
         "Total Price : " + "₹" + 597 * buyJean + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJean === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Jean 1)
document.querySelector("#j1-type1").addEventListener("mouseover", j1Type1);
function j1Type1() {
   document.jean1.src = "Images/women-j1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Blue";
}
document.querySelector("#j1-type2").addEventListener("mouseover", j1Type2);
function j1Type2() {
   document.jean1.src = "Images/women-j1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Light Blue";
}
document.querySelector("#j1-type3").addEventListener("mouseover", j1Type3);
function j1Type3() {
   document.jean1.src = "Images/women-j1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Navy ";
}
document.querySelector("#j1-type4").addEventListener("mouseover", j1Type4);
function j1Type4() {
   document.jean1.src = "Images/women-j1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black";
}
document.querySelector("#j1-type5").addEventListener("mouseover", j1Type5);
function j1Type5() {
   document.jean1.src = "Images/women-j1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Grey";
}
document.querySelector("#j1-type6").addEventListener("mouseover", j1Type6);
function j1Type6() {
   document.jean1.src = "Images/women-j1-9.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Medium Blue";
}
document.querySelector("#j1-type7").addEventListener("mouseover", j1Type7);
function j1Type7() {
   document.jean1.src = "Images/women-j1-10.jpg";
   document.querySelector("#color-name").innerHTML = " Color: White";
}
// -mouseout (Jean 1)
document.querySelector("#j1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   j1Type1();
}
document.querySelector("#j1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#j1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#j1-type5").addEventListener("mouseout", type1Mout1);
document.querySelector("#j1-type6").addEventListener("mouseout", type1Mout1);
document.querySelector("#j1-type7").addEventListener("mouseout", type1Mout1);
//Women Western Wear- Jean 2
var jean1 = [
   "Images/women-j2.jpg",
   "Images/women-j2-2.jpg",
   "Images/women-j2-3.jpg",
   "Images/women-j2-4.jpg",
];
var j1 = 0;
document.jean2.src = "Images/women-j2.jpg";
function setJeans1() {
   document.jean2.src = jean1[j1];
}
setInterval(function autoSlider1() {
   if (j1 < jean1.length - 1) {
      j1++;
   } else {
      j1 = 0;
   }
   setJeans1();
}, 10000);
document.querySelector("#leftbtn-j2").addEventListener("click", leftbJeans1);
function leftbJeans1() {
   if (j1 > 0) {
      j1--;
   } else {
      j1 = jean1.length - 1;
   }
   setJeans1();
}
document.querySelector("#rightbtn-j2").addEventListener("click", rightbJeans1);
function rightbJeans1() {
   if (j1 < jean1.length - 1) {
      j1++;
   } else {
      j1 = 0;
   }
   setJeans1();
}
document.querySelector("#cart-j2").addEventListener("click", cartj2);
function cartj2() {
   document.querySelector("#cart-j2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j2").addEventListener("click", buyj2);
function buyj2() {
   const buyJean = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJean <= 10 && buyJean > 0) {
      document.querySelector("#total-j2").textContent =
         "Total Price : " + "₹" + 699 * buyJean + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJean === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Jean 2)
document.querySelector("#j2-type1").addEventListener("mouseover", j2Type1);
function j2Type1() {
   document.jean2.src = "Images/women-j2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Grey";
}
document.querySelector("#j2-type2").addEventListener("mouseover", j2Type2);
function j2Type2() {
   document.jean2.src = "Images/women-j2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Blue";
}
document.querySelector("#j2-type3").addEventListener("mouseover", j2Type3);
function j2Type3() {
   document.jean2.src = "Images/women-j2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black ";
}
document.querySelector("#j2-type4").addEventListener("mouseover", j2Type4);
function j2Type4() {
   document.jean2.src = "Images/women-j2-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Light Blue";
}
// -mouseout (Jean 2)
document.querySelector("#j2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   j2Type1();
}
document.querySelector("#j2-type3").addEventListener("mouseout", type2Mout1);
document.querySelector("#j2-type4").addEventListener("mouseout", type2Mout1);
// Out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of stock");
}
document.querySelector("#oos2").addEventListener("click", outOfStock);
document.querySelector("#oos3").addEventListener("click", outOfStock);
document.querySelector("#oos4").addEventListener("click", outOfStock);
document.querySelector("#oos5").addEventListener("click", outOfStock);
document.querySelector("#oos6").addEventListener("click", outOfStock);
document.querySelector("#oos7").addEventListener("click", outOfStock);
//Women Western Wear- Jean 3
var jean2 = [
   "Images/women-j3.jpg",
   "Images/women-j3-2.jpg",
   "Images/women-j3-3.jpg",
   "Images/women-j3-4.jpg",
];
var j2 = 0;
document.jean3.src = "Images/women-j3.jpg";
function setJeans2() {
   document.jean3.src = jean2[j2];
}
setInterval(function autoSlider2() {
   if (j2 < jean2.length - 1) {
      j2++;
   } else {
      j2 = 0;
   }
   setJeans2();
}, 10000);
document.querySelector("#leftbtn-j3").addEventListener("click", leftbJeans2);
function leftbJeans2() {
   if (j2 > 0) {
      j2--;
   } else {
      j2 = jean2.length - 1;
   }
   setJeans2();
}
document.querySelector("#rightbtn-j3").addEventListener("click", rightbJeans2);
function rightbJeans2() {
   if (j2 < jean2.length - 1) {
      j2++;
   } else {
      j2 = 0;
   }
   setJeans2();
}
document.querySelector("#cart-j3").addEventListener("click", cartj3);
function cartj3() {
   document.querySelector("#cart-j3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j3").addEventListener("click", buyj3);
function buyj3() {
   const buyJean = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJean <= 10 && buyJean > 0) {
      document.querySelector("#total-j3").textContent =
         "Total Price : " + "₹" + 664 * buyJean + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJean === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Jean 3)
document.querySelector("#j3-type1").addEventListener("mouseover", j3Type1);
function j3Type1() {
   document.jean3.src = "Images/women-j3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: White";
}
document.querySelector("#j3-type2").addEventListener("mouseover", j3Type2);
function j3Type2() {
   document.jean3.src = "Images/women-j3-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Black";
}
document.querySelector("#j3-type3").addEventListener("mouseover", j3Type3);
function j3Type3() {
   document.jean3.src = "Images/women-j3-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Navy Blue ";
}
document.querySelector("#j3-type4").addEventListener("mouseover", j3Type4);
function j3Type4() {
   document.jean3.src = "Images/women-j3-7.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Grey";
}
document.querySelector("#j3-type5").addEventListener("mouseover", j3Type5);
function j3Type5() {
   document.jean3.src = "Images/women-j3-8.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Light Blue";
}
// -mouseout (Jean 3)
document.querySelector("#j3-type2").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   j3Type1();
}
document.querySelector("#j3-type3").addEventListener("mouseout", type3Mout1);
document.querySelector("#j3-type4").addEventListener("mouseout", type3Mout1);
document.querySelector("#j3-type5").addEventListener("mouseout", type3Mout1);
//Women Western Wear- Jean 4
var jean3 = [
   "Images/women-j4.jpg",
   "Images/women-j4-2.jpg",
   "Images/women-j4-3.jpg",
   "Images/women-j4-4.jpg",
];
var j3 = 0;
document.jean4.src = "Images/women-j4.jpg";
function setJeans3() {
   document.jean4.src = jean3[j3];
}
setInterval(function autoSlider3() {
   if (j3 < jean3.length - 1) {
      j3++;
   } else {
      j3 = 0;
   }
   setJeans3();
}, 10000);
document.querySelector("#leftbtn-j4").addEventListener("click", leftbJeans3);
function leftbJeans3() {
   if (j3 > 0) {
      j3--;
   } else {
      j3 = jean3.length - 1;
   }
   setJeans3();
}
document.querySelector("#rightbtn-j4").addEventListener("click", rightbJeans3);
function rightbJeans3() {
   if (j3 < jean3.length - 1) {
      j3++;
   } else {
      j3 = 0;
   }
   setJeans3();
}
document.querySelector("#cart-j4").addEventListener("click", cartj4);
function cartj4() {
   document.querySelector("#cart-j4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j4").addEventListener("click", buyj4);
function buyj4() {
   const buyJean = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJean <= 10 && buyJean > 0) {
      document.querySelector("#total-j4").textContent =
         "Total Price : " + "₹" + 849 * buyJean + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJean === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Jean 4)
document.querySelector("#j4-type1").addEventListener("mouseover", j4Type1);
function j4Type1() {
   document.jean4.src = "Images/women-j4-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Grey";
}
document.querySelector("#j4-type2").addEventListener("mouseover", j4Type2);
function j4Type2() {
   document.jean4.src = "Images/women-j4-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Blue";
}
document.querySelector("#j4-type3").addEventListener("mouseover", j4Type3);
function j4Type3() {
   document.jean4.src = "Images/women-j4-7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Light Blue ";
}
document.querySelector("#j4-type4").addEventListener("mouseover", j4Type4);
function j4Type4() {
   document.jean4.src = "Images/women-j4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Mid Stone";
}
// -mouseout (Jean 4)
document.querySelector("#j4-type1").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   j4Type4();
}
document.querySelector("#j4-type2").addEventListener("mouseout", type4Mout1);
document.querySelector("#j4-type3").addEventListener("mouseout", type4Mout1);
//Women Western Wear- Jean 5
var jean4 = [
   "Images/women-j5.jpg",
   "Images/women-j5-2.jpg",
   "Images/women-j5-3.jpg",
   "Images/women-j5-4.jpg",
];
var j4 = 0;
document.jean5.src = "Images/women-j5.jpg";
function setJeans4() {
   document.jean5.src = jean4[j4];
}
setInterval(function autoSlider4() {
   if (j4 < jean4.length - 1) {
      j4++;
   } else {
      j4 = 0;
   }
   setJeans4();
}, 10000);
document.querySelector("#leftbtn-j5").addEventListener("click", leftbJeans4);
function leftbJeans4() {
   if (j4 > 0) {
      j4--;
   } else {
      j4 = jean4.length - 1;
   }
   setJeans4();
}
document.querySelector("#rightbtn-j5").addEventListener("click", rightbJeans4);
function rightbJeans4() {
   if (j4 < jean4.length - 1) {
      j4++;
   } else {
      j4 = 0;
   }
   setJeans4();
}
document.querySelector("#cart-j5").addEventListener("click", cartj5);
function cartj5() {
   document.querySelector("#cart-j5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j5").addEventListener("click", buyj5);
function buyj5() {
   const buyJean = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJean <= 10 && buyJean > 0) {
      document.querySelector("#total-j5").textContent =
         "Total Price : " + "₹" + 789 * buyJean + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJean === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Jean 5)
document.querySelector("#j5-type1").addEventListener("mouseover", j5Type1);
function j5Type1() {
   document.jean5.src = "Images/women-j5-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Light Blue";
}
document.querySelector("#j5-type2").addEventListener("mouseover", j5Type2);
function j5Type2() {
   document.jean5.src = "Images/women-j5-6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Medium Blue";
}
document.querySelector("#j5-type3").addEventListener("mouseover", j5Type3);
function j5Type3() {
   document.jean5.src = "Images/women-j5-7.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Black ";
}
document.querySelector("#j5-type4").addEventListener("mouseover", j5Type4);
function j5Type4() {
   document.jean5.src = "Images/women-j5-8.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: White";
}
document.querySelector("#j5-type5").addEventListener("mouseover", j5Type5);
function j5Type5() {
   document.jean5.src = "Images/women-j5-9.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Mid Stone";
}
document.querySelector("#j5-type6").addEventListener("mouseover", j5Type6);
function j5Type6() {
   document.jean5.src = "Images/women-j5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Dark Blue";
}
// -mouseout (Jean 5)
document.querySelector("#j5-type1").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   j5Type6();
}
document.querySelector("#j5-type2").addEventListener("mouseout", type5Mout1);
document.querySelector("#j5-type3").addEventListener("mouseout", type5Mout1);
document.querySelector("#j5-type4").addEventListener("mouseout", type5Mout1);
document.querySelector("#j5-type5").addEventListener("mouseout", type5Mout1);
//Women Western Wear- Jean 6
var jean5 = [
   "Images/women-j6.jpg",
   "Images/women-j6-2.jpg",
   "Images/women-j6-3.jpg",
   "Images/women-j6-4.jpg",
];
var j5 = 0;
document.jean6.src = "Images/women-j6.jpg";
function setJeans5() {
   document.jean6.src = jean5[j5];
}
setInterval(function autoSlider5() {
   if (j5 < jean5.length - 1) {
      j5++;
   } else {
      j5 = 0;
   }
   setJeans5();
}, 10000);
document.querySelector("#leftbtn-j6").addEventListener("click", leftbJeans5);
function leftbJeans5() {
   if (j5 > 0) {
      j5--;
   } else {
      j5 = jean5.length - 1;
   }
   setJeans5();
}
document.querySelector("#rightbtn-j6").addEventListener("click", rightbJeans5);
function rightbJeans5() {
   if (j5 < jean5.length - 1) {
      j5++;
   } else {
      j5 = 0;
   }
   setJeans5();
}
document.querySelector("#cart-j6").addEventListener("click", cartj6);
function cartj6() {
   document.querySelector("#cart-j6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j6").addEventListener("click", buyj6);
function buyj6() {
   const buyJean = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJean <= 10 && buyJean > 0) {
      document.querySelector("#total-j6").textContent =
         "Total Price : " + "₹" + 799 * buyJean + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJean === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Women Western Wear- Jean 7
var jean6 = [
   "Images/women-j7.jpg",
   "Images/women-j7-2.jpg",
   "Images/women-j7-3.jpg",
   "Images/women-j7-4.jpg",
];
var j6 = 0;
document.jean7.src = "Images/women-j7.jpg";
function setJeans6() {
   document.jean7.src = jean6[j6];
}
setInterval(function autoSlider6() {
   if (j6 < jean6.length - 1) {
      j6++;
   } else {
      j6 = 0;
   }
   setJeans6();
}, 10000);
document.querySelector("#leftbtn-j7").addEventListener("click", leftbJeans6);
function leftbJeans6() {
   if (j6 > 0) {
      j6--;
   } else {
      j6 = jean6.length - 1;
   }
   setJeans6();
}
document.querySelector("#rightbtn-j7").addEventListener("click", rightbJeans6);
function rightbJeans6() {
   if (j6 < jean6.length - 1) {
      j6++;
   } else {
      j6 = 0;
   }
   setJeans6();
}
document.querySelector("#cart-j7").addEventListener("click", cartj7);
function cartj7() {
   document.querySelector("#cart-j7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j7").addEventListener("click", buyj7);
function buyj7() {
   const buyJean = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJean <= 10 && buyJean > 0) {
      document.querySelector("#total-j7").textContent =
         "Total Price : " + "₹" + 799 * buyJean + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJean === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Women Western Wear- Jean 8
var jean7 = [
   "Images/women-j8.jpg",
   "Images/women-j8-2.jpg",
   "Images/women-j8-3.jpg",
   "Images/women-j8-4.jpg",
];
var j7 = 0;
document.jean8.src = "Images/women-j8.jpg";
function setJeans7() {
   document.jean8.src = jean7[j7];
}
setInterval(function autoSlider7() {
   if (j7 < jean7.length - 1) {
      j7++;
   } else {
      j7 = 0;
   }
   setJeans7();
}, 10000);
document.querySelector("#leftbtn-j8").addEventListener("click", leftbJeans7);
function leftbJeans7() {
   if (j7 > 0) {
      j7--;
   } else {
      j7 = jean7.length - 1;
   }
   setJeans7();
}
document.querySelector("#rightbtn-j8").addEventListener("click", rightbJeans7);
function rightbJeans7() {
   if (j7 < jean7.length - 1) {
      j7++;
   } else {
      j7 = 0;
   }
   setJeans7();
}
document.querySelector("#cart-j8").addEventListener("click", cartj8);
function cartj8() {
   document.querySelector("#cart-j8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j8").addEventListener("click", buyj8);
function buyj8() {
   const buyJean = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJean <= 10 && buyJean > 0) {
      document.querySelector("#total-j8").textContent =
         "Total Price : " + "₹" + 1149 * buyJean + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJean === 0) {
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
