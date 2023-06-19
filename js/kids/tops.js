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
//Girls Clothing- tshirt1
var tshirt = [
   "Images/kid-gt1.jpg",
   "Images/kid-gt1-2.jpg",
   "Images/kid-gt1-3.jpg",
];
var ts = 0;
document.tshirt1.src = "Images/kid-gt1.jpg";
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
document.querySelector("#leftbtn-t1").addEventListener("click", leftbTshirt);
function leftbTshirt() {
   if (ts > 0) {
      ts--;
   } else {
      ts = tshirt.length - 1;
   }
   setTshirt();
}
document.querySelector("#rightbtn-t1").addEventListener("click", rightbTshirt);
function rightbTshirt() {
   if (ts < tshirt.length - 1) {
      ts++;
   } else {
      ts = 0;
   }
   setTshirt();
}
document.querySelector("#cart-t1").addEventListener("click", cartT1);
function cartT1() {
   document.querySelector("#cart-t1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-t1").addEventListener("click", buyT1);
function buyT1() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 5 && buyTshirt > 0) {
      document.querySelector("#total-t1").textContent =
         "Total Price : " + "₹" + 764 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 5 pieces left !!!");
   }
}
//Girls Clothing- tshirt2
var tshirt1 = [
   "Images/kid-gt2.jpg",
   "Images/kid-gt2-2.jpg",
   "Images/kid-gt2-3.jpg",
];
var ts1 = 0;
document.tshirt2.src = "Images/kid-gt2.jpg";
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
document.querySelector("#leftbtn-t2").addEventListener("click", leftbTshirt1);
function leftbTshirt1() {
   if (ts1 > 0) {
      ts1--;
   } else {
      ts1 = tshirt1.length - 1;
   }
   setTshirt1();
}
document.querySelector("#rightbtn-t2").addEventListener("click", rightbTshirt1);
function rightbTshirt1() {
   if (ts1 < tshirt1.length - 1) {
      ts1++;
   } else {
      ts1 = 0;
   }
   setTshirt1();
}
document.querySelector("#cart-t2").addEventListener("click", cartT2);
function cartT2() {
   document.querySelector("#cart-t2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-t2").addEventListener("click", buyT2);
function buyT2() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-t2").textContent =
         "Total Price : " + "₹" + 399 * buyTshirt + "  only";
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
   document.tshirt2.src = "Images/kid-gt2.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Yellow";
}
document.querySelector("#ts2-type2").addEventListener("mouseover", ts2Type2);
function ts2Type2() {
   document.tshirt2.src = "Images/kid-gt2-4.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Cream ";
}
// - mouseout (tshirt2)
document.querySelector("#ts2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   ts2Type1();
}
//Girls Clothing- tshirt3
var tshirt2 = [
   "Images/kid-gt3.jpg",
   "Images/kid-gt3-2.jpg",
   "Images/kid-gt3-3.jpg",
];
var ts2 = 0;
document.tshirt3.src = "Images/kid-gt3.jpg";
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
document.querySelector("#leftbtn-t3").addEventListener("click", leftbTshirt2);
function leftbTshirt2() {
   if (ts2 > 0) {
      ts2--;
   } else {
      ts2 = tshirt2.length - 1;
   }
   setTshirt2();
}
document.querySelector("#rightbtn-t3").addEventListener("click", rightbTshirt2);
function rightbTshirt2() {
   if (ts2 < tshirt2.length - 1) {
      ts2++;
   } else {
      ts2 = 0;
   }
   setTshirt2();
}
document.querySelector("#cart-t3").addEventListener("click", cartT3);
function cartT3() {
   document.querySelector("#cart-t3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-t3").addEventListener("click", buyT3);
function buyT3() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-t3").textContent =
         "Total Price : " + "₹" + 359 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Girls Clothing- tshirt4
var tshirt3 = [
   "Images/kid-gt4.jpg",
   "Images/kid-gt4-2.jpg",
   "Images/kid-gt4-3.jpg",
];
var ts3 = 0;
document.tshirt4.src = "Images/kid-gt4.jpg";
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
document.querySelector("#leftbtn-t4").addEventListener("click", leftbTshirt3);
function leftbTshirt3() {
   if (ts3 > 0) {
      ts3--;
   } else {
      ts3 = tshirt3.length - 1;
   }
   setTshirt3();
}
document.querySelector("#rightbtn-t4").addEventListener("click", rightbTshirt3);
function rightbTshirt3() {
   if (ts3 < tshirt3.length - 1) {
      ts3++;
   } else {
      ts3 = 0;
   }
   setTshirt3();
}
document.querySelector("#cart-t4").addEventListener("click", cartT4);
function cartT4() {
   document.querySelector("#cart-t4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-t4").addEventListener("click", buyT4);
function buyT4() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-t4").textContent =
         "Total Price : " + "₹" + 349 * buyTshirt + "  only";
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
   document.tshirt4.src = "Images/kid-gt4-4.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Red";
}
document.querySelector("#ts4-type2").addEventListener("mouseover", ts4Type2);
function ts4Type2() {
   document.tshirt4.src = "Images/kid-gt4.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Sky Blue";
}
// -mouseout from color images(tshirt4)
document.querySelector("#ts4-type1").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   ts4Type2();
}
//Girls Clothing- tshirt5
var tshirt4 = [
   "Images/kid-gt5.jpg",
   "Images/kid-gt5-2.jpg",
   "Images/kid-gt5-3.jpg",
];
var ts4 = 0;
document.tshirt5.src = "Images/kid-gt5.jpg";
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
document.querySelector("#leftbtn-t5").addEventListener("click", leftbTshirt4);
function leftbTshirt4() {
   if (ts4 > 0) {
      ts4--;
   } else {
      ts4 = tshirt4.length - 1;
   }
   setTshirt4();
}
document.querySelector("#rightbtn-t5").addEventListener("click", rightbTshirt4);
function rightbTshirt4() {
   if (ts4 < tshirt4.length - 1) {
      ts4++;
   } else {
      ts4 = 0;
   }
   setTshirt4();
}
document.querySelector("#cart-t5").addEventListener("click", cartT5);
function cartT5() {
   document.querySelector("#cart-t5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-t5").addEventListener("click", buyT5);
function buyT5() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-t5").textContent =
         "Total Price : " + "₹" + 469 * buyTshirt + "  only";
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
   document.tshirt5.src = "Images/kid-gt5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Peach";
}
document.querySelector("#ts5-type2").addEventListener("mouseover", ts5Type2);
function ts5Type2() {
   document.tshirt5.src = "Images/kid-gt5-4.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: White";
}
document.querySelector("#ts5-type3").addEventListener("mouseover", ts5Type3);
function ts5Type3() {
   document.tshirt5.src = "Images/kid-gt5-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Blue";
}
document.querySelector("#ts5-type4").addEventListener("mouseover", ts5Type4);
function ts5Type4() {
   document.tshirt5.src = "Images/kid-gt5-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Yellow";
}
// -mouseout from color images(tshirt5)
document.querySelector("#ts5-type2").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   ts5Type1();
}
document.querySelector("#ts5-type3").addEventListener("mouseout", type5Mout1);
document.querySelector("#ts5-type4").addEventListener("mouseout", type5Mout1);
//Girls Clothing- tshirt6
var tshirt5 = [
   "Images/kid-gt6.jpg",
   "Images/kid-gt6-2.jpg",
   "Images/kid-gt6-3.jpg",
];
var ts5 = 0;
document.tshirt6.src = "Images/kid-gt6.jpg";
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
document.querySelector("#leftbtn-t6").addEventListener("click", leftbTshirt5);
function leftbTshirt5() {
   if (ts5 > 0) {
      ts5--;
   } else {
      ts5 = tshirt5.length - 1;
   }
   setTshirt5();
}
document.querySelector("#rightbtn-t6").addEventListener("click", rightbTshirt5);
function rightbTshirt5() {
   if (ts5 < tshirt5.length - 1) {
      ts5++;
   } else {
      ts5 = 0;
   }
   setTshirt5();
}
document.querySelector("#cart-t6").addEventListener("click", cartT6);
function cartT6() {
   document.querySelector("#cart-t6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-t6").addEventListener("click", buyT6);
function buyT6() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-t6").textContent =
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
   document.tshirt6.src = "Images/kid-gt6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Girl Sunglass";
}
document.querySelector("#ts6-type2").addEventListener("mouseover", ts6Type2);
function ts6Type2() {
   document.tshirt6.src = "Images/kid-gt6-4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Be Happy";
}
document.querySelector("#ts6-type3").addEventListener("mouseover", ts6Type3);
function ts6Type3() {
   document.tshirt6.src = "Images/kid-gt6-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Killer Eye";
}
document.querySelector("#ts6-type4").addEventListener("mouseover", ts6Type4);
function ts6Type4() {
   document.tshirt6.src = "Images/kid-gt6-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Heart";
}
document.querySelector("#ts6-type5").addEventListener("mouseover", ts6Type5);
function ts6Type5() {
   document.tshirt6.src = "Images/kid-gt6-7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Naughty Eye";
}
document.querySelector("#ts6-type6").addEventListener("mouseover", ts6Type6);
function ts6Type6() {
   document.tshirt6.src = "Images/kid-gt6-8.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Meow";
}
// -mouseout from color images(tshirt6)
document.querySelector("#ts6-type2").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   ts6Type1();
}
document.querySelector("#ts6-type3").addEventListener("mouseout", type6Mout1);
document.querySelector("#ts6-type4").addEventListener("mouseout", type6Mout1);
document.querySelector("#ts6-type5").addEventListener("mouseout", type6Mout1);
document.querySelector("#ts6-type6").addEventListener("mouseout", type6Mout1);
//Girls Clothing- tshirt7
var tshirt6 = [
   "Images/kid-gt7.jpg",
   "Images/kid-gt7-2.jpg",
   "Images/kid-gt7-3.jpg",
];
var ts6 = 0;
document.tshirt7.src = "Images/kid-gt7.jpg";
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
document.querySelector("#leftbtn-t7").addEventListener("click", leftbTshirt6);
function leftbTshirt6() {
   if (ts6 > 0) {
      ts6--;
   } else {
      ts6 = tshirt6.length - 1;
   }
   setTshirt6();
}
document.querySelector("#rightbtn-t7").addEventListener("click", rightbTshirt6);
function rightbTshirt6() {
   if (ts6 < tshirt6.length - 1) {
      ts6++;
   } else {
      ts6 = 0;
   }
   setTshirt6();
}
document.querySelector("#cart-t7").addEventListener("click", cartT7);
function cartT7() {
   document.querySelector("#cart-t7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-t7").addEventListener("click", buyT7);
function buyT7() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-t7").textContent =
         "Total Price : " + "₹" + 569 * buyTshirt + "  only";
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
   document.tshirt7.src = "Images/kid-gt7.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Black";
}
document.querySelector("#ts7-type2").addEventListener("mouseover", ts7Type2);
function ts7Type2() {
   document.tshirt7.src = "Images/kid-gt7-4.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Multicolor";
}
document.querySelector("#ts7-type3").addEventListener("mouseover", ts7Type3);
function ts7Type3() {
   document.tshirt7.src = "Images/kid-gt7-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Red";
}
// -mouseout from color images(tshirt7)
document.querySelector("#ts7-type2").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   ts7Type1();
}
document.querySelector("#ts7-type3").addEventListener("mouseout", type7Mout1);
//Girls Clothing- tshirt 8
var tshirt7 = [
   "Images/kid-gt8.jpg",
   "Images/kid-gt8-2.jpg",
   "Images/kid-gt8-3.jpg",
];
var ts7 = 0;
document.tshirt8.src = "Images/kid-gt8.jpg";
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
document.querySelector("#leftbtn-t8").addEventListener("click", leftbTshirt7);
function leftbTshirt7() {
   if (ts7 > 0) {
      ts7--;
   } else {
      ts7 = tshirt7.length - 1;
   }
   setTshirt7();
}
document.querySelector("#rightbtn-t8").addEventListener("click", rightbTshirt7);
function rightbTshirt7() {
   if (ts7 < tshirt7.length - 1) {
      ts7++;
   } else {
      ts7 = 0;
   }
   setTshirt7();
}
document.querySelector("#cart-t8").addEventListener("click", cartT8);
function cartT8() {
   document.querySelector("#cart-t8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-t8").addEventListener("click", buyT8);
function buyT8() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-t8").textContent =
         "Total Price : " + "₹" + 429 * buyTshirt + "  only";
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
   document.tshirt8.src = "Images/kid-gt8-4.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: White";
}
document.querySelector("#ts8-type2").addEventListener("mouseover", ts8Type2);
function ts8Type2() {
   document.tshirt8.src = "Images/kid-gt8.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Pink";
}
// -mouseout from color images(tshirt8)
document.querySelector("#ts8-type1").addEventListener("mouseout", type8Mout1);
function type8Mout1() {
   ts8Type2();
}
//Girls Clothing- tshirt 9
var tshirt8 = [
   "Images/kid-gt9.jpg",
   "Images/kid-gt9-2.jpg",
   "Images/kid-gt9-3.jpg",
];
var ts8 = 0;
document.tshirt9.src = "Images/kid-gt9.jpg";
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
document.querySelector("#leftbtn-t9").addEventListener("click", leftbTshirt8);
function leftbTshirt8() {
   if (ts8 > 0) {
      ts8--;
   } else {
      ts8 = tshirt8.length - 1;
   }
   setTshirt8();
}
document.querySelector("#rightbtn-t9").addEventListener("click", rightbTshirt8);
function rightbTshirt8() {
   if (ts8 < tshirt7.length - 1) {
      ts8++;
   } else {
      ts8 = 0;
   }
   setTshirt8();
}
document.querySelector("#cart-t9").addEventListener("click", cartT9);
function cartT9() {
   document.querySelector("#cart-t9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-t9").addEventListener("click", buyT9);
function buyT9() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-t9").textContent =
         "Total Price : " + "₹" + 136 * buyTshirt + "  only";
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
