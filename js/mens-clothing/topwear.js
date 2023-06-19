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
//Top wear - tshirt1
var tshirt = [
   "Images/men-ts1.jpg",
   "Images/men-ts1-2.jpg",
   "Images/men-ts1-3.jpg",
   "Images/men-ts1-4.jpg",
];
var ts = 0;
document.tshirt1.src = "Images/men-ts1.jpg";
function setTshirt() {
   document.tshirt1.src = tshirt[ts];
}
setInterval(function autoSlider() {
   if (ts < tshirt.length - 1) {
      ts++;
   } else {
      ts = 0;
   }
   setTshirt();
}, 10000);
document.querySelector("#leftbtn-ts1").addEventListener("click", leftbTshirt);
function leftbTshirt() {
   if (ts > 0) {
      ts--;
   } else {
      ts = tshirt.length - 1;
   }
   setTshirt();
}
document.querySelector("#rightbtn-ts1").addEventListener("click", rightbTshirt);
function rightbTshirt() {
   if (ts < tshirt.length - 1) {
      ts++;
   } else {
      ts = 0;
   }
   setTshirt();
}
document.querySelector("#cart-ts1").addEventListener("click", cartTs1);
function cartTs1() {
   document.querySelector("#cart-ts1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ts1").addEventListener("click", buyTs1);
function buyTs1() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-ts1").textContent =
         "Total Price : " + "₹" + 399 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(tshirt1)
document.querySelector("#ts1-type1").addEventListener("mouseover", ts1Type1);
function ts1Type1() {
   document.tshirt1.src = "Images/men-ts1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black";
}
document.querySelector("#ts1-type2").addEventListener("mouseover", ts1Type2);
function ts1Type2() {
   document.tshirt1.src = "Images/men-ts1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Maroon";
}
document.querySelector("#ts1-type3").addEventListener("mouseover", ts1Type3);
function ts1Type3() {
   document.tshirt1.src = "Images/men-ts1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Olive";
}
document.querySelector("#ts1-type4").addEventListener("mouseover", ts1Type4);
function ts1Type4() {
   document.tshirt1.src = "Images/men-ts1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Blue";
}
// -mouseout from color images(tshirt1)
document.querySelector("#ts1-type1").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   ts1Type3();
}
document.querySelector("#ts1-type2").addEventListener("mouseout", type1Mout2);
function type1Mout2() {
   ts1Type3();
}
document.querySelector("#ts1-type4").addEventListener("mouseout", type1Mout3);
function type1Mout3() {
   ts1Type3();
}
//Top wear - tshirt2
var tshirt1 = [
   "Images/men-ts2.jpg",
   "Images/men-ts2-2.jpg",
   "Images/men-ts2-3.jpg",
   "Images/men-ts2-4.jpg",
];
var ts1 = 0;
document.tshirt2.src = "Images/men-ts2.jpg";
function setTshirt1() {
   document.tshirt2.src = tshirt1[ts1];
}
setInterval(function autoSlider1() {
   if (ts1 < tshirt1.length - 1) {
      ts1++;
   } else {
      ts1 = 0;
   }
   setTshirt1();
}, 10000);
document.querySelector("#leftbtn-ts2").addEventListener("click", leftbTshirt1);
function leftbTshirt1() {
   if (ts1 > 0) {
      ts1--;
   } else {
      ts1 = tshirt1.length - 1;
   }
   setTshirt1();
}
document
   .querySelector("#rightbtn-ts2")
   .addEventListener("click", rightbTshirt1);
function rightbTshirt1() {
   if (ts1 < tshirt1.length - 1) {
      ts1++;
   } else {
      ts1 = 0;
   }
   setTshirt1();
}
document.querySelector("#cart-ts2").addEventListener("click", cartTs2);
function cartTs2() {
   document.querySelector("#cart-ts2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ts2").addEventListener("click", buyTs2);
function buyTs2() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-ts2").textContent =
         "Total Price : " + "₹" + 395 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//size which is outstock
document.querySelector("#oos1").addEventListener("click", outOfstock);
function outOfstock() {
   alert("Out of stock");
}
//color variety
// -mouseover on color images(tshirt2)
document.querySelector("#ts2-type1").addEventListener("mouseover", ts2Type1);
function ts2Type1() {
   document.tshirt2.src = "Images/men-ts2-5.jpg";
   document.querySelector("#color-name1").innerHTML =
      " Color: Bottle Green::Sea Green";
}
document.querySelector("#ts2-type2").addEventListener("mouseover", ts2Type2);
function ts2Type2() {
   document.tshirt2.src = "Images/men-ts2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Bottle Green";
}
document.querySelector("#ts2-type3").addEventListener("mouseover", ts2Type3);
function ts2Type3() {
   document.tshirt2.src = "Images/men-ts2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Charcoal::Grey";
}
// -mouseout from color images(tshirt2)
document.querySelector("#ts2-type1").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   ts2Type2();
}
document.querySelector("#ts2-type3").addEventListener("mouseout", type2Mout2);
function type2Mout2() {
   ts2Type2();
}
//Top wear - tshirt3
var tshirt2 = [
   "Images/men-ts3.jpg",
   "Images/men-ts3-2.jpg",
   "Images/men-ts3-3.jpg",
   "Images/men-ts3-4.jpg",
];
var ts2 = 0;
document.tshirt3.src = "Images/men-ts3.jpg";
function setTshirt2() {
   document.tshirt3.src = tshirt2[ts2];
}
setInterval(function autoSlider2() {
   if (ts2 < tshirt2.length - 1) {
      ts2++;
   } else {
      ts2 = 0;
   }
   setTshirt2();
}, 10000);
document.querySelector("#leftbtn-ts3").addEventListener("click", leftbTshirt2);
function leftbTshirt2() {
   if (ts2 > 0) {
      ts2--;
   } else {
      ts2 = tshirt2.length - 1;
   }
   setTshirt2();
}
document
   .querySelector("#rightbtn-ts3")
   .addEventListener("click", rightbTshirt2);
function rightbTshirt2() {
   if (ts2 < tshirt2.length - 1) {
      ts2++;
   } else {
      ts2 = 0;
   }
   setTshirt2();
}
document.querySelector("#cart-ts3").addEventListener("click", cartTs3);
function cartTs3() {
   document.querySelector("#cart-ts3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ts3").addEventListener("click", buyTs3);
function buyTs3() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 3 && buyTshirt > 0) {
      document.querySelector("#total-ts3").textContent =
         "Total Price : " + "₹" + 674 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 3 pieces left !!!");
   }
}
//Top wear - tshirt4
var tshirt3 = [
   "Images/men-ts4.jpg",
   "Images/men-ts4-2.jpg",
   "Images/men-ts4-3.jpg",
   "Images/men-ts4-4.jpg",
];
var ts3 = 0;
document.tshirt4.src = "Images/men-ts4.jpg";
function setTshirt3() {
   document.tshirt4.src = tshirt3[ts3];
}
setInterval(function autoSlider3() {
   if (ts3 < tshirt3.length - 1) {
      ts3++;
   } else {
      ts3 = 0;
   }
   setTshirt3();
}, 10000);
document.querySelector("#leftbtn-ts4").addEventListener("click", leftbTshirt3);
function leftbTshirt3() {
   if (ts3 > 0) {
      ts3--;
   } else {
      ts3 = tshirt3.length - 1;
   }
   setTshirt3();
}
document
   .querySelector("#rightbtn-ts4")
   .addEventListener("click", rightbTshirt3);
function rightbTshirt3() {
   if (ts3 < tshirt3.length - 1) {
      ts3++;
   } else {
      ts3 = 0;
   }
   setTshirt3();
}
document.querySelector("#cart-ts4").addEventListener("click", cartTs4);
function cartTs4() {
   document.querySelector("#cart-ts4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ts4").addEventListener("click", buyTs4);
function buyTs4() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-ts4").textContent =
         "Total Price : " + "₹" + 799 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Top wear - tshirt5
var tshirt4 = [
   "Images/men-ts5.jpg",
   "Images/men-ts5-2.jpg",
   "Images/men-ts5-3.jpg",
   "Images/men-ts5-4.jpg",
];
var ts4 = 0;
document.tshirt5.src = "Images/men-ts5.jpg";
function setTshirt4() {
   document.tshirt5.src = tshirt4[ts4];
}
setInterval(function autoSlider4() {
   if (ts4 < tshirt4.length - 1) {
      ts4++;
   } else {
      ts4 = 0;
   }
   setTshirt4();
}, 10000);
document.querySelector("#leftbtn-ts5").addEventListener("click", leftbTshirt4);
function leftbTshirt4() {
   if (ts4 > 0) {
      ts4--;
   } else {
      ts4 = tshirt4.length - 1;
   }
   setTshirt4();
}
document
   .querySelector("#rightbtn-ts5")
   .addEventListener("click", rightbTshirt4);
function rightbTshirt4() {
   if (ts4 < tshirt4.length - 1) {
      ts4++;
   } else {
      ts4 = 0;
   }
   setTshirt4();
}
document.querySelector("#cart-ts5").addEventListener("click", cartTs5);
function cartTs5() {
   document.querySelector("#cart-ts5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ts5").addEventListener("click", buyTs5);
function buyTs5() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-ts5").textContent =
         "Total Price : " + "₹" + 539 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//size which is outstock
document.querySelector("#oos2").addEventListener("click", outOfstock1);
function outOfstock1() {
   alert("Out of stock");
}
//color variety
// -mouseover on color images(tshirt5)
document.querySelector("#ts5-type1").addEventListener("mouseover", ts5Type1);
function ts5Type1() {
   document.tshirt5.src = "Images/men-ts5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Mint";
}
document.querySelector("#ts5-type2").addEventListener("mouseover", ts5Type2);
function ts5Type2() {
   document.tshirt5.src = "Images/men-ts5-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Coral";
}
document.querySelector("#ts5-type3").addEventListener("mouseover", ts5Type3);
function ts5Type3() {
   document.tshirt5.src = "Images/men-ts5-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Black";
}
document.querySelector("#ts5-type4").addEventListener("mouseover", ts5Type4);
function ts5Type4() {
   document.tshirt5.src = "Images/men-ts5-7.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Orchid Pink";
}
// -mouseout from color images(tshirt5)
document.querySelector("#ts5-type2").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   ts5Type1();
}
document.querySelector("#ts5-type3").addEventListener("mouseout", type5Mout2);
function type5Mout2() {
   ts5Type1();
}
document.querySelector("#ts5-type4").addEventListener("mouseout", type5Mout3);
function type5Mout3() {
   ts5Type1();
}
//Top wear - tshirt6
var tshirt5 = [
   "Images/men-ts6.jpg",
   "Images/men-ts6-2.jpg",
   "Images/men-ts6-3.jpg",
   "Images/men-ts6-4.jpg",
];
var ts5 = 0;
document.tshirt6.src = "Images/men-ts6.jpg";
function setTshirt5() {
   document.tshirt6.src = tshirt5[ts5];
}
setInterval(function autoSlider5() {
   if (ts5 < tshirt5.length - 1) {
      ts5++;
   } else {
      ts5 = 0;
   }
   setTshirt5();
}, 10000);
document.querySelector("#leftbtn-ts6").addEventListener("click", leftbTshirt5);
function leftbTshirt5() {
   if (ts5 > 0) {
      ts5--;
   } else {
      ts5 = tshirt5.length - 1;
   }
   setTshirt5();
}
document
   .querySelector("#rightbtn-ts6")
   .addEventListener("click", rightbTshirt5);
function rightbTshirt5() {
   if (ts5 < tshirt5.length - 1) {
      ts5++;
   } else {
      ts5 = 0;
   }
   setTshirt5();
}
document.querySelector("#cart-ts6").addEventListener("click", cartTs6);
function cartTs6() {
   document.querySelector("#cart-ts6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ts6").addEventListener("click", buyTs6);
function buyTs6() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 8 && buyTshirt > 0) {
      document.querySelector("#total-ts6").textContent =
         "Total Price : " + "₹" + 767 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 8 pieces left !!!");
   }
}
//Top wear - tshirt7
var tshirt6 = [
   "Images/men-ts7.jpg",
   "Images/men-ts7-2.jpg",
   "Images/men-ts7-3.jpg",
   "Images/men-ts7-4.jpg",
];
var ts6 = 0;
document.tshirt7.src = "Images/men-ts7.jpg";
function setTshirt6() {
   document.tshirt7.src = tshirt6[ts6];
}
setInterval(function autoSlider5() {
   if (ts6 < tshirt6.length - 1) {
      ts6++;
   } else {
      ts6 = 0;
   }
   setTshirt6();
}, 10000);
document.querySelector("#leftbtn-ts7").addEventListener("click", leftbTshirt6);
function leftbTshirt6() {
   if (ts6 > 0) {
      ts6--;
   } else {
      ts6 = tshirt6.length - 1;
   }
   setTshirt6();
}
document
   .querySelector("#rightbtn-ts7")
   .addEventListener("click", rightbTshirt6);
function rightbTshirt6() {
   if (ts6 < tshirt6.length - 1) {
      ts6++;
   } else {
      ts6 = 0;
   }
   setTshirt6();
}
document.querySelector("#cart-ts7").addEventListener("click", cartTs7);
function cartTs7() {
   document.querySelector("#cart-ts7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ts7").addEventListener("click", buyTs7);
function buyTs7() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-ts7").textContent =
         "Total Price : " + "₹" + 569 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//size which is outstock
document.querySelector("#oos3").addEventListener("click", outOfstock2);
function outOfstock2() {
   alert("Out of stock");
}
//color variety
// -mouseover on color images(tshirt7)
document.querySelector("#ts7-type1").addEventListener("mouseover", ts7Type1);
function ts7Type1() {
   document.tshirt7.src = "Images/men-ts7-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Lemon Yellow";
}
document.querySelector("#ts7-type2").addEventListener("mouseover", ts7Type2);
function ts7Type2() {
   document.tshirt7.src = "Images/men-ts7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Teal Green";
}
document.querySelector("#ts7-type3").addEventListener("mouseover", ts7Type3);
function ts7Type3() {
   document.tshirt7.src = "Images/men-ts7-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Sky Blue";
}
document.querySelector("#ts7-type4").addEventListener("mouseover", ts7Type4);
function ts7Type4() {
   document.tshirt7.src = "Images/men-ts7-8.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Red";
}
document.querySelector("#ts7-type5").addEventListener("mouseover", ts7Type5);
function ts7Type5() {
   document.tshirt7.src = "Images/men-ts7-7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Orange";
}
// -mouseout from color images(tshirt7)
document.querySelector("#ts7-type1").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   ts7Type2();
}
document.querySelector("#ts7-type3").addEventListener("mouseout", type7Mout2);
function type7Mout2() {
   ts7Type2();
}
document.querySelector("#ts7-type4").addEventListener("mouseout", type7Mout3);
function type7Mout3() {
   ts7Type2();
}
document.querySelector("#ts7-type5").addEventListener("mouseout", type7Mout4);
function type7Mout4() {
   ts7Type2();
}
//Top wear - tshirt8
var tshirt7 = [
   "Images/men-ts8.jpg",
   "Images/men-ts8-2.jpg",
   "Images/men-ts8-3.jpg",
   "Images/men-ts8-4.jpg",
];
var ts7 = 0;
document.tshirt8.src = "Images/men-ts8.jpg";
function setTshirt7() {
   document.tshirt8.src = tshirt7[ts7];
}
setInterval(function autoSlider7() {
   if (ts7 < tshirt7.length - 1) {
      ts7++;
   } else {
      ts7 = 0;
   }
   setTshirt7();
}, 10000);
document.querySelector("#leftbtn-ts8").addEventListener("click", leftbTshirt7);
function leftbTshirt7() {
   if (ts7 > 0) {
      ts7--;
   } else {
      ts7 = tshirt7.length - 1;
   }
   setTshirt7();
}
document
   .querySelector("#rightbtn-ts8")
   .addEventListener("click", rightbTshirt7);
function rightbTshirt7() {
   if (ts7 < tshirt7.length - 1) {
      ts7++;
   } else {
      ts7 = 0;
   }
   setTshirt7();
}
document.querySelector("#cart-ts8").addEventListener("click", cartTs8);
function cartTs8() {
   document.querySelector("#cart-ts8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ts8").addEventListener("click", buyTs8);
function buyTs8() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-ts8").textContent =
         "Total Price : " + "₹" + 449 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(tshirt8)
document.querySelector("#ts8-type1").addEventListener("mouseover", ts8Type1);
function ts8Type1() {
   document.tshirt8.src = "Images/men-ts8-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Dark Green";
}
document.querySelector("#ts8-type2").addEventListener("mouseover", ts8Type2);
function ts8Type2() {
   document.tshirt8.src = "Images/men-ts8.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Mustard";
}
document.querySelector("#ts8-type3").addEventListener("mouseover", ts8Type3);
function ts8Type3() {
   document.tshirt8.src = "Images/men-ts8-6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Purple";
}
document.querySelector("#ts8-type4").addEventListener("mouseover", ts8Type4);
function ts8Type4() {
   document.tshirt8.src = "Images/men-ts8-8.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Sky Blue";
}
document.querySelector("#ts8-type5").addEventListener("mouseover", ts8Type5);
function ts8Type5() {
   document.tshirt8.src = "Images/men-ts8-7.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: White";
}
document.querySelector("#ts8-type6").addEventListener("mouseover", ts8Type6);
function ts8Type6() {
   document.tshirt8.src = "Images/men-ts8-9.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Black";
}
// -mouseout from color images(tshirt8)
document.querySelector("#ts8-type1").addEventListener("mouseout", type8Mout1);
function type8Mout1() {
   ts8Type2();
}
document.querySelector("#ts8-type3").addEventListener("mouseout", type8Mout2);
function type8Mout2() {
   ts8Type2();
}
document.querySelector("#ts8-type4").addEventListener("mouseout", type8Mout3);
function type8Mout3() {
   ts8Type2();
}
document.querySelector("#ts8-type5").addEventListener("mouseout", type8Mout4);
function type8Mout4() {
   ts8Type2();
}
document.querySelector("#ts8-type6").addEventListener("mouseout", type8Mout5);
function type8Mout5() {
   ts8Type2();
}
//Top wear - tshirt9
var tshirt8 = [
   "Images/men-ts9.jpg",
   "Images/men-ts9-2.jpg",
   "Images/men-ts9-3.jpg",
   "Images/men-ts9-4.jpg",
];
var ts8 = 0;
document.tshirt9.src = "Images/men-ts9.jpg";
function setTshirt8() {
   document.tshirt9.src = tshirt8[ts8];
}
setInterval(function autoSlider8() {
   if (ts8 < tshirt8.length - 1) {
      ts8++;
   } else {
      ts8 = 0;
   }
   setTshirt8();
}, 10000);
document.querySelector("#leftbtn-ts9").addEventListener("click", leftbTshirt8);
function leftbTshirt8() {
   if (ts8 > 0) {
      ts8--;
   } else {
      ts8 = tshirt8.length - 1;
   }
   setTshirt8();
}
document
   .querySelector("#rightbtn-ts9")
   .addEventListener("click", rightbTshirt8);
function rightbTshirt8() {
   if (ts8 < tshirt8.length - 1) {
      ts8++;
   } else {
      ts8 = 0;
   }
   setTshirt8();
}
document.querySelector("#cart-ts9").addEventListener("click", cartTs9);
function cartTs9() {
   document.querySelector("#cart-ts9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ts9").addEventListener("click", buyTs9);
function buyTs9() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-ts9").textContent =
         "Total Price : " + "₹" + 839 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Top wear - tshirt10
var tshirt9 = [
   "Images/men-ts10.jpg",
   "Images/men-ts10-2.jpg",
   "Images/men-ts10-3.jpg",
   "Images/men-ts10-4.jpg",
];
var ts9 = 0;
document.tshirt10.src = "Images/men-ts10.jpg";
function setTshirt9() {
   document.tshirt10.src = tshirt9[ts9];
}
setInterval(function autoSlider9() {
   if (ts9 < tshirt9.length - 1) {
      ts9++;
   } else {
      ts9 = 0;
   }
   setTshirt9();
}, 10000);
document.querySelector("#leftbtn-ts10").addEventListener("click", leftbTshirt9);
function leftbTshirt9() {
   if (ts9 > 0) {
      ts9--;
   } else {
      ts9 = tshirt9.length - 1;
   }
   setTshirt9();
}
document
   .querySelector("#rightbtn-ts10")
   .addEventListener("click", rightbTshirt9);
function rightbTshirt9() {
   if (ts9 < tshirt9.length - 1) {
      ts9++;
   } else {
      ts9 = 0;
   }
   setTshirt9();
}
document.querySelector("#cart-ts10").addEventListener("click", cartTs10);
function cartTs10() {
   document.querySelector("#cart-ts10").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ts10").addEventListener("click", buyTs10);
function buyTs10() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-ts10").textContent =
         "Total Price : " + "₹" + 339 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//size which is outstock
document.querySelector("#oos4").addEventListener("click", outOfstock3);
function outOfstock3() {
   alert("Out of stock");
}
document.querySelector("#oos5").addEventListener("click", outOfstock4);
function outOfstock4() {
   alert("Out of stock");
}
//color variety
// -mouseover on color images(tshirt10)
document.querySelector("#ts10-type1").addEventListener("mouseover", ts10Type1);
function ts10Type1() {
   document.tshirt10.src = "Images/men-ts10-5.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Sky Blue";
}
document.querySelector("#ts10-type2").addEventListener("mouseover", ts10Type2);
function ts10Type2() {
   document.tshirt10.src = "Images/men-ts10-6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Red";
}
document.querySelector("#ts10-type3").addEventListener("mouseover", ts10Type3);
function ts10Type3() {
   document.tshirt10.src = "Images/men-ts10.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Navy Blue";
}
// -mouseout from color images(tshirt8)
document.querySelector("#ts10-type1").addEventListener("mouseout", type10Mout1);
function type10Mout1() {
   ts10Type3();
}
document.querySelector("#ts10-type2").addEventListener("mouseout", type10Mout2);
function type10Mout2() {
   ts10Type3();
}
//Top wear - tshirt11
var tshirt10 = [
   "Images/men-ts11.jpg",
   "Images/men-ts11-2.jpg",
   "Images/men-ts11-3.jpg",
   "Images/men-ts11-4.jpg",
];
var ts10 = 0;
document.tshirt11.src = "Images/men-ts11.jpg";
function setTshirt10() {
   document.tshirt11.src = tshirt10[ts10];
}
setInterval(function autoSlider10() {
   if (ts10 < tshirt10.length - 1) {
      ts10++;
   } else {
      ts10 = 0;
   }
   setTshirt10();
}, 10000);
document
   .querySelector("#leftbtn-ts11")
   .addEventListener("click", leftbTshirt10);
function leftbTshirt10() {
   if (ts10 > 0) {
      ts10--;
   } else {
      ts10 = tshirt10.length - 1;
   }
   setTshirt10();
}
document
   .querySelector("#rightbtn-ts11")
   .addEventListener("click", rightbTshirt10);
function rightbTshirt10() {
   if (ts10 < tshirt10.length - 1) {
      ts10++;
   } else {
      ts10 = 0;
   }
   setTshirt10();
}
document.querySelector("#cart-ts11").addEventListener("click", cartTs11);
function cartTs11() {
   document.querySelector("#cart-ts11").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ts11").addEventListener("click", buyTs11);
function buyTs11() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-ts11").textContent =
         "Total Price : " + "₹" + 315 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Top wear - tshirt12
var tshirt11 = [
   "Images/men-ts12.jpg",
   "Images/men-ts12-2.jpg",
   "Images/men-ts12-3.jpg",
   "Images/men-ts12-4.jpg",
];
var ts11 = 0;
document.tshirt12.src = "Images/men-ts12.jpg";
function setTshirt11() {
   document.tshirt12.src = tshirt11[ts11];
}
setInterval(function autoSlider11() {
   if (ts11 < tshirt11.length - 1) {
      ts11++;
   } else {
      ts11 = 0;
   }
   setTshirt11();
}, 10000);
document
   .querySelector("#leftbtn-ts12")
   .addEventListener("click", leftbTshirt11);
function leftbTshirt11() {
   if (ts11 > 0) {
      ts11--;
   } else {
      ts11 = tshirt11.length - 1;
   }
   setTshirt11();
}
document
   .querySelector("#rightbtn-ts12")
   .addEventListener("click", rightbTshirt11);
function rightbTshirt11() {
   if (ts11 < tshirt11.length - 1) {
      ts11++;
   } else {
      ts11 = 0;
   }
   setTshirt11();
}
document.querySelector("#cart-ts12").addEventListener("click", cartTs12);
function cartTs12() {
   document.querySelector("#cart-ts12").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ts12").addEventListener("click", buyTs12);
function buyTs12() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 3 && buyTshirt > 0) {
      document.querySelector("#total-ts12").textContent =
         "Total Price : " + "₹" + 710 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 3 pieces left !!!");
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
//item 11
const heart11 = () => {
   if (document.querySelector("#hrt11").innerHTML != "❤️") {
      document.querySelector("#hrt11").innerHTML = "❤️";
      document.querySelector("#hrt11").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#hrt11").innerHTML = "🤍";
      document.querySelector("#hrt11").style.animation = "none";
   }
};
document.querySelector("#hrt11").addEventListener("click", heart11);
//item 12
const heart12 = () => {
   if (document.querySelector("#hrt12").innerHTML != "❤️") {
      document.querySelector("#hrt12").innerHTML = "❤️";
      document.querySelector("#hrt12").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#hrt12").innerHTML = "🤍";
      document.querySelector("#hrt12").style.animation = "none";
   }
};
document.querySelector("#hrt12").addEventListener("click", heart12);
