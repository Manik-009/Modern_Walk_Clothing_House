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
//Winter Wear Girls Clothing- Sweatshirts & Sweaters 1
var sweater = [
   "Images/kid-gs1.jpg",
   "Images/kid-gs1-2.jpg",
   "Images/kid-gs1-3.jpg",
];
var ss = 0;
document.sweater1.src = "Images/kid-gs1.jpg";
function setSweater() {
   document.sweater1.src = sweater[ss];
}
setInterval(function autoSlider() {
   if (ss < sweater.length - 1) {
      ss++;
   } else {
      ss = 0;
   }
   setSweater();
}, 10000);
document.querySelector("#leftbtn-ss1").addEventListener("click", leftbSweater);
function leftbSweater() {
   if (ss > 0) {
      ss--;
   } else {
      ss = sweater.length - 1;
   }
   setSweater();
}
document
   .querySelector("#rightbtn-ss1")
   .addEventListener("click", rightbSweater);
function rightbSweater() {
   if (ss < sweater.length - 1) {
      ss++;
   } else {
      ss = 0;
   }
   setSweater();
}
document.querySelector("#cart-ss1").addEventListener("click", cartss1);
function cartss1() {
   document.querySelector("#cart-ss1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss1").addEventListener("click", buyss1);
function buyss1() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-ss1").textContent =
         "Total Price : " + "₹" + 349 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sweater & Sweatshirt 1)
document.querySelector("#ss1-type1").addEventListener("mouseover", ss1Type1);
function ss1Type1() {
   document.sweater1.src = "Images/kid-gs1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black";
}
document.querySelector("#ss1-type2").addEventListener("mouseover", ss1Type2);
function ss1Type2() {
   document.sweater1.src = "Images/kid-gs1-4.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Pink";
}
document.querySelector("#ss1-type3").addEventListener("mouseover", ss1Type3);
function ss1Type3() {
   document.sweater1.src = "Images/kid-gs1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Blue";
}
document.querySelector("#ss1-type4").addEventListener("mouseover", ss1Type4);
function ss1Type4() {
   document.sweater1.src = "Images/kid-gs1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Sky Blue";
}
document.querySelector("#ss1-type5").addEventListener("mouseover", ss1Type5);
function ss1Type5() {
   document.sweater1.src = "Images/kid-gs1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Grey";
}
document.querySelector("#ss1-type6").addEventListener("mouseover", ss1Type6);
function ss1Type6() {
   document.sweater1.src = "Images/kid-gs1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Yellow";
}
// -mouseout(Sweater & Sweatshirt 1)
document.querySelector("#ss1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   ss1Type1();
}
document.querySelector("#ss1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#ss1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#ss1-type5").addEventListener("mouseout", type1Mout1);
document.querySelector("#ss1-type6").addEventListener("mouseout", type1Mout1);
//Winter Wear Girls Clothing- Sweatshirts & Sweaters 2
var sweater1 = [
   "Images/kid-gs2.jpg",
   "Images/kid-gs2-2.jpg",
   "Images/kid-gs2-3.jpg",
];
var ss1 = 0;
document.sweater2.src = "Images/kid-gs2.jpg";
function setSweater1() {
   document.sweater2.src = sweater1[ss1];
}
setInterval(function autoSlider1() {
   if (ss1 < sweater1.length - 1) {
      ss1++;
   } else {
      ss1 = 0;
   }
   setSweater1();
}, 10000);
document.querySelector("#leftbtn-ss2").addEventListener("click", leftbSweater1);
function leftbSweater1() {
   if (ss1 > 0) {
      ss1--;
   } else {
      ss1 = sweater1.length - 1;
   }
   setSweater1();
}
document
   .querySelector("#rightbtn-ss2")
   .addEventListener("click", rightbSweater1);
function rightbSweater1() {
   if (ss1 < sweater1.length - 1) {
      ss1++;
   } else {
      ss1 = 0;
   }
   setSweater1();
}
document.querySelector("#cart-ss2").addEventListener("click", cartss2);
function cartss2() {
   document.querySelector("#cart-ss2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss2").addEventListener("click", buyss2);
function buyss2() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-ss2").textContent =
         "Total Price : " + "₹" + 649 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sweater & Sweatshirt 2)
document.querySelector("#ss2-type1").addEventListener("mouseover", ss2Type1);
function ss2Type1() {
   document.sweater2.src = "Images/kid-gs2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Grey";
}
document.querySelector("#ss2-type2").addEventListener("mouseover", ss2Type2);
function ss2Type2() {
   document.sweater2.src = "Images/kid-gs2-4.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black";
}
document.querySelector("#ss2-type3").addEventListener("mouseover", ss2Type3);
function ss2Type3() {
   document.sweater2.src = "Images/kid-gs2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Navy Blue";
}
document.querySelector("#ss2-type4").addEventListener("mouseover", ss2Type4);
function ss2Type4() {
   document.sweater2.src = "Images/kid-gs2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Royal Blue";
}
// -mouseout(Sweater & Sweatshirt 2)
document.querySelector("#ss2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   ss2Type1();
}
document.querySelector("#ss2-type3").addEventListener("mouseout", type2Mout1);
document.querySelector("#ss2-type4").addEventListener("mouseout", type2Mout1);
//Winter Wear Girls Clothing- Sweatshirts & Sweaters 3
var sweater2 = [
   "Images/kid-gs3.jpg",
   "Images/kid-gs3-2.jpg",
   "Images/kid-gs3-3.jpg",
];
var ss2 = 0;
document.sweater3.src = "Images/kid-gs3.jpg";
function setSweater2() {
   document.sweater3.src = sweater2[ss2];
}
setInterval(function autoSlider2() {
   if (ss2 < sweater2.length - 1) {
      ss2++;
   } else {
      ss2 = 0;
   }
   setSweater2();
}, 10000);
document.querySelector("#leftbtn-ss3").addEventListener("click", leftbSweater2);
function leftbSweater2() {
   if (ss2 > 0) {
      ss2--;
   } else {
      ss2 = sweater2.length - 1;
   }
   setSweater2();
}
document
   .querySelector("#rightbtn-ss3")
   .addEventListener("click", rightbSweater2);
function rightbSweater2() {
   if (ss2 < sweater2.length - 1) {
      ss2++;
   } else {
      ss2 = 0;
   }
   setSweater2();
}
document.querySelector("#cart-ss3").addEventListener("click", cartss3);
function cartss3() {
   document.querySelector("#cart-ss3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss3").addEventListener("click", buyss3);
function buyss3() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-ss3").textContent =
         "Total Price : " + "₹" + 918 * buySweater + "  only";
      document.querySelector("#total-ss3").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sweater & Sweatshirt 3)
document.querySelector("#ss3-type1").addEventListener("mouseover", ss3Type1);
function ss3Type1() {
   document.sweater3.src = "Images/kid-gs3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Red";
}
document.querySelector("#ss3-type2").addEventListener("mouseover", ss3Type2);
function ss3Type2() {
   document.sweater3.src = "Images/kid-gs3-4.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Baby Pink";
}
document.querySelector("#ss3-type3").addEventListener("mouseover", ss3Type3);
function ss3Type3() {
   document.sweater3.src = "Images/kid-gs3-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Purple";
}
// -mouseout(Sweater & Sweatshirt 3)
document.querySelector("#ss3-type2").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   ss3Type1();
}
document.querySelector("#ss3-type3").addEventListener("mouseout", type3Mout1);
//Winter Wear Girls Clothing- Sweatshirts & Sweaters 4
var sweater3 = [
   "Images/kid-gs4.jpg",
   "Images/kid-gs4-2.jpg",
   "Images/kid-gs4-3.jpg",
];
var ss3 = 0;
document.sweater4.src = "Images/kid-gs4.jpg";
function setSweater3() {
   document.sweater4.src = sweater3[ss3];
}
setInterval(function autoSlider3() {
   if (ss3 < sweater3.length - 1) {
      ss3++;
   } else {
      ss3 = 0;
   }
   setSweater3();
}, 10000);
document.querySelector("#leftbtn-ss4").addEventListener("click", leftbSweater3);
function leftbSweater3() {
   if (ss3 > 0) {
      ss3--;
   } else {
      ss3 = sweater3.length - 1;
   }
   setSweater3();
}
document
   .querySelector("#rightbtn-ss4")
   .addEventListener("click", rightbSweater3);
function rightbSweater3() {
   if (ss3 < sweater3.length - 1) {
      ss3++;
   } else {
      ss3 = 0;
   }
   setSweater3();
}
document.querySelector("#cart-ss4").addEventListener("click", cartss4);
function cartss4() {
   document.querySelector("#cart-ss4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss4").addEventListener("click", buyss4);
function buyss4() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-ss4").textContent =
         "Total Price : " + "₹" + 499 * buySweater + "  only";
      document.querySelector("#total-ss4").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter Wear Girls Clothing- Sweatshirts & Sweaters 5
var sweater4 = [
   "Images/kid-gs5.jpg",
   "Images/kid-gs5-2.jpg",
   "Images/kid-gs5-3.jpg",
];
var ss4 = 0;
document.sweater5.src = "Images/kid-gs5.jpg";
function setSweater4() {
   document.sweater5.src = sweater4[ss4];
}
setInterval(function autoSlider4() {
   if (ss4 < sweater4.length - 1) {
      ss4++;
   } else {
      ss4 = 0;
   }
   setSweater4();
}, 10000);
document.querySelector("#leftbtn-ss5").addEventListener("click", leftbSweater4);
function leftbSweater4() {
   if (ss4 > 0) {
      ss4--;
   } else {
      ss4 = sweater4.length - 1;
   }
   setSweater4();
}
document
   .querySelector("#rightbtn-ss5")
   .addEventListener("click", rightbSweater4);
function rightbSweater4() {
   if (ss4 < sweater4.length - 1) {
      ss4++;
   } else {
      ss4 = 0;
   }
   setSweater4();
}
document.querySelector("#cart-ss5").addEventListener("click", cartss5);
function cartss5() {
   document.querySelector("#cart-ss5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss5").addEventListener("click", buyss5);
function buyss5() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-ss5").textContent =
         "Total Price : " + "₹" + 1350 * buySweater + "  only";
      document.querySelector("#total-ss5").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter Wear Girls Clothing- Sweatshirts & Sweaters 6
var sweater5 = [
   "Images/kid-gs6.jpg",
   "Images/kid-gs6-2.jpg",
   "Images/kid-gs6-3.jpg",
];
var ss5 = 0;
document.sweater6.src = "Images/kid-gs6.jpg";
function setSweater5() {
   document.sweater6.src = sweater5[ss5];
}
setInterval(function autoSlider5() {
   if (ss5 < sweater5.length - 1) {
      ss5++;
   } else {
      ss5 = 0;
   }
   setSweater5();
}, 10000);
document.querySelector("#leftbtn-ss6").addEventListener("click", leftbSweater5);
function leftbSweater5() {
   if (ss5 > 0) {
      ss5--;
   } else {
      ss5 = sweater5.length - 1;
   }
   setSweater5();
}
document
   .querySelector("#rightbtn-ss6")
   .addEventListener("click", rightbSweater5);
function rightbSweater5() {
   if (ss5 < sweater5.length - 1) {
      ss5++;
   } else {
      ss5 = 0;
   }
   setSweater5();
}
document.querySelector("#cart-ss6").addEventListener("click", cartss6);
function cartss6() {
   document.querySelector("#cart-ss6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss6").addEventListener("click", buyss6);
function buyss6() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-ss6").textContent =
         "Total Price : " + "₹" + 849 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sweater & Sweatshirt 6)
document.querySelector("#ss6-type1").addEventListener("mouseover", ss6Type1);
function ss6Type1() {
   document.sweater6.src = "Images/kid-gs6-4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Mustard";
}
document.querySelector("#ss6-type2").addEventListener("mouseover", ss6Type2);
function ss6Type2() {
   document.sweater6.src = "Images/kid-gs6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Navy Blue";
}
// -mouseout(Sweater & Sweatshirt 6)
document.querySelector("#ss6-type1").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   ss6Type2();
}
//Winter Wear Girls Clothing- Sweatshirts & Sweaters 7
var sweater6 = [
   "Images/kid-gs7.jpg",
   "Images/kid-gs7-2.jpg",
   "Images/kid-gs7-3.jpg",
];
var ss6 = 0;
document.sweater7.src = "Images/kid-gs7.jpg";
function setSweater6() {
   document.sweater7.src = sweater6[ss6];
}
setInterval(function autoSlider6() {
   if (ss6 < sweater6.length - 1) {
      ss6++;
   } else {
      ss6 = 0;
   }
   setSweater6();
}, 10000);
document.querySelector("#leftbtn-ss7").addEventListener("click", leftbSweater6);
function leftbSweater6() {
   if (ss6 > 0) {
      ss6--;
   } else {
      ss6 = sweater6.length - 1;
   }
   setSweater6();
}
document
   .querySelector("#rightbtn-ss7")
   .addEventListener("click", rightbSweater6);
function rightbSweater6() {
   if (ss6 < sweater6.length - 1) {
      ss6++;
   } else {
      ss6 = 0;
   }
   setSweater6();
}
document.querySelector("#cart-ss7").addEventListener("click", cartss7);
function cartss7() {
   document.querySelector("#cart-ss7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss7").addEventListener("click", buyss7);
function buyss7() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-ss7").textContent =
         "Total Price : " + "₹" + 499 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sweater & Sweatshirt 7)
document.querySelector("#ss7-type1").addEventListener("mouseover", ss7Type1);
function ss7Type1() {
   document.sweater7.src = "Images/kid-gs7-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Red";
}
document.querySelector("#ss7-type2").addEventListener("mouseover", ss7Type2);
function ss7Type2() {
   document.sweater7.src = "Images/kid-gs7-4.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Navy Blue";
}
document.querySelector("#ss7-type3").addEventListener("mouseover", ss7Type3);
function ss7Type3() {
   document.sweater7.src = "Images/kid-gs7.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Yellow";
}
// -mouseout(Sweater & Sweatshirt 7)
document.querySelector("#ss7-type1").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   ss7Type3();
}
document.querySelector("#ss7-type2").addEventListener("mouseout", type7Mout1);
// out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of stock");
}
document.querySelector("#oos2").addEventListener("click", outOfStock);
//Winter Wear Girls Clothing- Sweatshirts & Sweaters 8
var sweater7 = [
   "Images/kid-gs8.jpg",
   "Images/kid-gs8-2.jpg",
   "Images/kid-gs8-3.jpg",
];
var ss7 = 0;
document.sweater8.src = "Images/kid-gs8.jpg";
function setSweater7() {
   document.sweater8.src = sweater7[ss7];
}
setInterval(function autoSlider7() {
   if (ss7 < sweater7.length - 1) {
      ss7++;
   } else {
      ss7 = 0;
   }
   setSweater7();
}, 10000);
document.querySelector("#leftbtn-ss8").addEventListener("click", leftbSweater7);
function leftbSweater7() {
   if (ss7 > 0) {
      ss7--;
   } else {
      ss7 = sweater7.length - 1;
   }
   setSweater7();
}
document
   .querySelector("#rightbtn-ss8")
   .addEventListener("click", rightbSweater7);
function rightbSweater7() {
   if (ss7 < sweater7.length - 1) {
      ss7++;
   } else {
      ss7 = 0;
   }
   setSweater7();
}
document.querySelector("#cart-ss8").addEventListener("click", cartss8);
function cartss8() {
   document.querySelector("#cart-ss8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss8").addEventListener("click", buyss8);
function buyss8() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-ss8").textContent =
         "Total Price : " + "₹" + 845 * buySweater + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter Wear Girls Clothing- Sweatshirts & Sweaters 9
var sweater8 = [
   "Images/kid-gs9.jpg",
   "Images/kid-gs9-2.jpg",
   "Images/kid-gs9-3.jpg",
];
var ss8 = 0;
document.sweater9.src = "Images/kid-gs9.jpg";
function setSweater8() {
   document.sweater9.src = sweater8[ss8];
}
setInterval(function autoSlider8() {
   if (ss8 < sweater8.length - 1) {
      ss8++;
   } else {
      ss8 = 0;
   }
   setSweater8();
}, 10000);
document.querySelector("#leftbtn-ss9").addEventListener("click", leftbSweater8);
function leftbSweater8() {
   if (ss8 > 0) {
      ss8--;
   } else {
      ss8 = sweater8.length - 1;
   }
   setSweater8();
}
document
   .querySelector("#rightbtn-ss9")
   .addEventListener("click", rightbSweater8);
function rightbSweater8() {
   if (ss8 < sweater8.length - 1) {
      ss8++;
   } else {
      ss8 = 0;
   }
   setSweater8();
}
document.querySelector("#cart-ss9").addEventListener("click", cartss9);
function cartss9() {
   document.querySelector("#cart-ss9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss9").addEventListener("click", buyss9);
function buyss9() {
   const buySweater = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySweater <= 10 && buySweater > 0) {
      document.querySelector("#total-ss9").textContent =
         "Total Price : " + "₹" + 1244 * buySweater + "  only";
      document.querySelector("#total-ss9").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buySweater === 0) {
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
