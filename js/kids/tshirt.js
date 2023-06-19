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
//Boys Clothing- tshirt1
var tshirt = [
   "Images/kid-ts1.jpeg",
   "Images/kid-ts1-2.jpeg",
   "Images/kid-ts1-3.jpeg",
   "Images/kid-ts1-4.jpeg",
];
var ts = 0;
document.tshirt1.src = "Images/kid-ts1.jpeg";
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
         "Total Price : " + "₹" + 245 * buyTshirt + "  only";
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
   document.tshirt1.src = "Images/kid-ts1.jpeg";
   document.querySelector("#color-name").innerHTML = " Color: Dark Blue/Red";
}
document.querySelector("#ts1-type2").addEventListener("mouseover", ts1Type2);
function ts1Type2() {
   document.tshirt1.src = "Images/kid-ts1-5.jpeg";
   document.querySelector("#color-name").innerHTML = " Color: Black/White";
}
document.querySelector("#ts1-type3").addEventListener("mouseover", ts1Type3);
function ts1Type3() {
   document.tshirt1.src = "Images/kid-ts1-6.jpeg";
   document.querySelector("#color-name").innerHTML = " Color: White/Red";
}
// -mouseout from color images(tshirt1)
document.querySelector("#ts1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   ts1Type1();
}
document.querySelector("#ts1-type3").addEventListener("mouseout", type1Mout1);
//Boys Clothing- tshirt2
var tshirt1 = [
   "Images/kid-ts2.jpeg",
   "Images/kid-ts2-2.jpeg",
   "Images/kid-ts2-3.jpeg",
   "Images/kid-ts2-4.jpeg",
];
var ts1 = 0;
document.tshirt2.src = "Images/kid-ts2.jpeg";
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
         "Total Price : " + "₹" + 249 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(tshirt2)
document.querySelector("#ts2-type1").addEventListener("mouseover", ts2Type1);
function ts2Type1() {
   document.tshirt2.src = "Images/kid-ts2.jpeg";
   document.querySelector("#color-name1").innerHTML = " Color: Yellow/Black";
}
document.querySelector("#ts2-type2").addEventListener("mouseover", ts2Type2);
function ts2Type2() {
   document.tshirt2.src = "Images/kid-ts2-5.jpeg";
   document.querySelector("#color-name1").innerHTML = " Color: Green/Black";
}
document.querySelector("#ts2-type3").addEventListener("mouseover", ts2Type3);
function ts2Type3() {
   document.tshirt2.src = "Images/kid-ts2-6.jpeg";
   document.querySelector("#color-name1").innerHTML = " Color: Maroon/Black";
}
document.querySelector("#ts2-type4").addEventListener("mouseover", ts2Type4);
function ts2Type4() {
   document.tshirt2.src = "Images/kid-ts2-7.jpeg";
   document.querySelector("#color-name1").innerHTML = " Color: White/Black";
}
document.querySelector("#ts2-type5").addEventListener("mouseover", ts2Type5);
function ts2Type5() {
   document.tshirt2.src = "Images/kid-ts2-8.jpeg";
   document.querySelector("#color-name1").innerHTML = " Color: Blue/Black";
}
document.querySelector("#ts2-type6").addEventListener("mouseover", ts2Type6);
function ts2Type6() {
   document.tshirt2.src = "Images/kid-ts2-9.jpeg";
   document.querySelector("#color-name1").innerHTML = " Color: Red/Black";
}
// -mouseout from color images(tshirt2)
document.querySelector("#ts2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   ts2Type1();
}
document.querySelector("#ts2-type3").addEventListener("mouseout", type2Mout1);
document.querySelector("#ts2-type4").addEventListener("mouseout", type2Mout1);
document.querySelector("#ts2-type5").addEventListener("mouseout", type2Mout1);
document.querySelector("#ts2-type6").addEventListener("mouseout", type2Mout1);
//Boys Clothing- tshirt3
var tshirt2 = [
   "Images/kid-ts3.jpeg",
   "Images/kid-ts3-2.jpeg",
   "Images/kid-ts3-3.jpeg",
   "Images/kid-ts3-4.jpeg",
];
var ts2 = 0;
document.tshirt3.src = "Images/kid-ts3.jpeg";
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
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-ts3").textContent =
         "Total Price : " + "₹" + 199 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(tshirt3)
document.querySelector("#ts3-type1").addEventListener("mouseover", ts3Type1);
function ts3Type1() {
   document.tshirt3.src = "Images/kid-ts3-5.jpeg";
   document.querySelector("#color-name2").innerHTML = " Color: Red";
}
document.querySelector("#ts3-type2").addEventListener("mouseover", ts3Type2);
function ts3Type2() {
   document.tshirt3.src = "Images/kid-ts3.jpeg";
   document.querySelector("#color-name2").innerHTML = " Color: Grey";
}
// -mouseout from color images(tshirt3)
document.querySelector("#ts3-type1").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   ts3Type2();
}
//Boys Clothing- tshirt4
var tshirt3 = [
   "Images/kid-ts4.jpeg",
   "Images/kid-ts4-2.jpeg",
   "Images/kid-ts4-3.jpeg",
   "Images/kid-ts4-4.jpeg",
];
var ts3 = 0;
document.tshirt4.src = "Images/kid-ts4.jpeg";
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
         "Total Price : " + "₹" + 229 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(tshirt4)
document.querySelector("#ts4-type1").addEventListener("mouseover", ts4Type1);
function ts4Type1() {
   document.tshirt4.src = "Images/kid-ts4.jpeg";
   document.querySelector("#color-name3").innerHTML = " Color: Sky Blue";
}
document.querySelector("#ts4-type2").addEventListener("mouseover", ts4Type2);
function ts4Type2() {
   document.tshirt4.src = "Images/kid-ts4-5.jpeg";
   document.querySelector("#color-name3").innerHTML =
      " Color: White/Grey/Black";
}
document.querySelector("#ts4-type3").addEventListener("mouseover", ts4Type3);
function ts4Type3() {
   document.tshirt4.src = "Images/kid-ts4-6.jpeg";
   document.querySelector("#color-name3").innerHTML = " Color: Red/Black";
}
// -mouseout from color images(tshirt4)
document.querySelector("#ts4-type2").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   ts4Type1();
}
document.querySelector("#ts4-type3").addEventListener("mouseout", type4Mout1);
//Boys Clothing- tshirt5
var tshirt4 = [
   "Images/kid-ts5.jpeg",
   "Images/kid-ts5-3.jpeg",
   "Images/kid-ts5-2.jpeg",
   "Images/kid-ts5-4.jpeg",
];
var ts4 = 0;
document.tshirt5.src = "Images/kid-ts5.jpeg";
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
         "Total Price : " + "₹" + 219 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(tshirt5)
document.querySelector("#ts5-type1").addEventListener("mouseover", ts5Type1);
function ts5Type1() {
   document.tshirt5.src = "Images/kid-ts5.jpeg";
   document.querySelector("#color-name4").innerHTML = " Color: Peach";
}
document.querySelector("#ts5-type2").addEventListener("mouseover", ts5Type2);
function ts5Type2() {
   document.tshirt5.src = "Images/kid-ts5-5.jpeg";
   document.querySelector("#color-name4").innerHTML = " Color: White/Blue";
}
// -mouseout from color images(tshirt5)
document.querySelector("#ts5-type2").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   ts5Type1();
}
//Boys Clothing- tshirt6
var tshirt5 = [
   "Images/kid-ts6.jpeg",
   "Images/kid-ts6-2.jpeg",
   "Images/kid-ts6-3.jpeg",
   "Images/kid-ts6-4.jpeg",
];
var ts5 = 0;
document.tshirt6.src = "Images/kid-ts6.jpeg";
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
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-ts6").textContent =
         "Total Price : " + "₹" + 209 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(tshirt6)
document.querySelector("#ts6-type1").addEventListener("mouseover", ts6Type1);
function ts6Type1() {
   document.tshirt6.src = "Images/kid-ts6-5.jpeg";
   document.querySelector("#color-name5").innerHTML = " Color: Blue/White";
}
document.querySelector("#ts6-type2").addEventListener("mouseover", ts6Type2);
function ts6Type2() {
   document.tshirt6.src = "Images/kid-ts6-6.jpeg";
   document.querySelector("#color-name5").innerHTML = " Color: Grey/Black";
}
document.querySelector("#ts6-type3").addEventListener("mouseover", ts6Type3);
function ts6Type3() {
   document.tshirt6.src = "Images/kid-ts6-7.jpeg";
   document.querySelector("#color-name5").innerHTML = " Color: White/Black";
}
document.querySelector("#ts6-type4").addEventListener("mouseover", ts6Type4);
function ts6Type4() {
   document.tshirt6.src = "Images/kid-ts6-8.jpeg";
   document.querySelector("#color-name5").innerHTML = " Color: Red/White";
}
document.querySelector("#ts6-type5").addEventListener("mouseover", ts6Type5);
function ts6Type5() {
   document.tshirt6.src = "Images/kid-ts6-9.jpeg";
   document.querySelector("#color-name5").innerHTML = " Color: White/Blue";
}
document.querySelector("#ts6-type6").addEventListener("mouseover", ts6Type6);
function ts6Type6() {
   document.tshirt6.src = "Images/kid-ts6.jpeg";
   document.querySelector("#color-name5").innerHTML =
      " Color: Light Grey/Black";
}
// -mouseout from color images(tshirt6)
document.querySelector("#ts6-type1").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   ts6Type6();
}
document.querySelector("#ts6-type2").addEventListener("mouseout", type6Mout1);
document.querySelector("#ts6-type3").addEventListener("mouseout", type6Mout1);
document.querySelector("#ts6-type4").addEventListener("mouseout", type6Mout1);
document.querySelector("#ts6-type5").addEventListener("mouseout", type6Mout1);
//Boys Clothing- tshirt7
var tshirt6 = [
   "Images/kid-ts7.jpeg",
   "Images/kid-ts7-2.jpeg",
   "Images/kid-ts7-3.jpeg",
   "Images/kid-ts7-4.jpeg",
];
var ts6 = 0;
document.tshirt7.src = "Images/kid-ts7.jpeg";
function setTshirt6() {
   document.tshirt7.src = tshirt6[ts6];
}
setInterval(function autoSlider6() {
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
         "Total Price : " + "₹" + 179 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(tshirt7)
document.querySelector("#ts7-type1").addEventListener("mouseover", ts7Type1);
function ts7Type1() {
   document.tshirt7.src = "Images/kid-ts7-5.jpeg";
   document.querySelector("#color-name6").innerHTML = " Color: Black";
}
document.querySelector("#ts7-type2").addEventListener("mouseover", ts7Type2);
function ts7Type2() {
   document.tshirt7.src = "Images/kid-ts7-6.jpeg";
   document.querySelector("#color-name6").innerHTML = " Color: Light Grey";
}
document.querySelector("#ts7-type3").addEventListener("mouseover", ts7Type3);
function ts7Type3() {
   document.tshirt7.src = "Images/kid-ts7.jpeg";
   document.querySelector("#color-name6").innerHTML = " Color: Red";
}
// -mouseout from color images(tshirt7)
document.querySelector("#ts7-type1").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   ts7Type3();
}
document.querySelector("#ts7-type2").addEventListener("mouseout", type7Mout1);
//Boys Clothing- tshirt 8
var tshirt7 = [
   "Images/kid-ts8.jpeg",
   "Images/kid-ts8-2.jpeg",
   "Images/kid-ts8-3.jpeg",
   "Images/kid-ts8-4.jpeg",
];
var ts7 = 0;
document.tshirt8.src = "Images/kid-ts8.jpeg";
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
         "Total Price : " + "₹" + 199 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
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
