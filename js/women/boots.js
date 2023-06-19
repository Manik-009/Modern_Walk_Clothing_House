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
//Footwear - Boot 1
var boots = [
   "Images/women-boot1.jpg",
   "Images/women-boot1-2.jpg",
   "Images/women-boot1-3.jpg",
   "Images/women-boot1-4.jpg",
];
var b = 0;
document.boots1.src = "Images/women-boot1.jpg";
function setBoots() {
   document.boots1.src = boots[b];
}
setInterval(function autoSlider() {
   if (b < boots.length - 1) {
      b++;
   } else {
      b = 0;
   }
   setBoots();
}, 10000);
document.querySelector("#leftbtn-b1").addEventListener("click", leftbBoots);
function leftbBoots() {
   if (b > 0) {
      b--;
   } else {
      b = boots.length - 1;
   }
   setBoots();
}
document.querySelector("#rightbtn-b1").addEventListener("click", rightbBoots);
function rightbBoots() {
   if (b < boots.length - 1) {
      b++;
   } else {
      b = 0;
   }
   setBoots();
}
document.querySelector("#cart-b1").addEventListener("click", cartb1);
function cartb1() {
   document.querySelector("#cart-b1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-b1").addEventListener("click", buyb1);
function buyb1() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-b1").textContent =
         "Total Price : " + "₹" + 499 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about Boot 1
document.querySelector("#boots1").addEventListener("mouseover", info1);
function info1() {
   document.querySelector("#boots1").style.height = "770px";
   document.querySelector("#boots1").style.transition = "height .5s";
   document.querySelector("#info1").style.display = "block";
   document.querySelector("#info1").style.animation = "info 1s ease";
}
//mouseout from more detail about Boot 1(Hidden-info)
document.querySelector("#boots1").addEventListener("mouseout", infoHide1);
function infoHide1() {
   document.querySelector("#info1").style.display = "none";
   document.querySelector("#boots1").style.transition = "height .7s";
   document.querySelector("#boots1").style.height = "670px";
}
//color variety
//mouseover on color images(Boot 1)
document.querySelector("#b1-type1").addEventListener("mouseover", b1Type1);
function b1Type1() {
   document.boots1.src = "Images/women-boot1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Red";
}
document.querySelector("#b1-type2").addEventListener("mouseover", b1Type2);
function b1Type2() {
   document.boots1.src = "Images/women-boot1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Teek";
}
document.querySelector("#b1-type3").addEventListener("mouseover", b1Type3);
function b1Type3() {
   document.boots1.src = "Images/women-boot1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Coffee";
}
document.querySelector("#b1-type4").addEventListener("mouseover", b1Type4);
function b1Type4() {
   document.boots1.src = "Images/women-boot1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black";
}
document.querySelector("#b1-type5").addEventListener("mouseover", b1Type5);
function b1Type5() {
   document.boots1.src = "Images/women-boot1-9.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Navy Blue";
}
document.querySelector("#b1-type6").addEventListener("mouseover", b1Type6);
function b1Type6() {
   document.boots1.src = "Images/women-boot1-10.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Brown";
}
//mouseout (Boot 1)
document.querySelector("#b1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   b1Type1();
}
document.querySelector("#b1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#b1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#b1-type5").addEventListener("mouseout", type1Mout1);
document.querySelector("#b1-type6").addEventListener("mouseout", type1Mout1);
//Footwear - Boot 2
var boots1 = [
   "Images/women-boot2.jpg",
   "Images/women-boot2-2.jpg",
   "Images/women-boot2-3.jpg",
   "Images/women-boot2-4.jpg",
];
var b1 = 0;
document.boots2.src = "Images/women-boot2.jpg";
function setBoots1() {
   document.boots2.src = boots1[b1];
}
setInterval(function autoSlider1() {
   if (b1 < boots1.length - 1) {
      b1++;
   } else {
      b1 = 0;
   }
   setBoots1();
}, 10000);
document.querySelector("#leftbtn-b2").addEventListener("click", leftbBoots1);
function leftbBoots1() {
   if (b1 > 0) {
      b1--;
   } else {
      b1 = boots1.length - 1;
   }
   setBoots1();
}
document.querySelector("#rightbtn-b2").addEventListener("click", rightbBoots1);
function rightbBoots1() {
   if (b1 < boots1.length - 1) {
      b1++;
   } else {
      b1 = 0;
   }
   setBoots1();
}
document.querySelector("#cart-b2").addEventListener("click", cartb2);
function cartb2() {
   document.querySelector("#cart-b2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-b2").addEventListener("click", buyb2);
function buyb2() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-b2").textContent =
         "Total Price : " + "₹" + 494 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about Boot 2
document.querySelector("#boots2").addEventListener("mouseover", info2);
function info2() {
   document.querySelector("#boots2").style.height = "770px";
   document.querySelector("#boots2").style.transition = "height .5s";
   document.querySelector("#info2").style.display = "block";
   document.querySelector("#info2").style.animation = "info 1s ease";
}
//mouseout from more detail about Boot 2(Hidden-info)
document.querySelector("#boots2").addEventListener("mouseout", infoHide2);
function infoHide2() {
   document.querySelector("#info2").style.display = "none";
   document.querySelector("#boots2").style.transition = "height .7s";
   document.querySelector("#boots2").style.height = "670px";
}
//color variety
//mouseover on color images(Boot 2)
document.querySelector("#b2-type1").addEventListener("mouseover", b2Type1);
function b2Type1() {
   document.boots2.src = "Images/women-boot2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: White";
}
document.querySelector("#b2-type2").addEventListener("mouseover", b2Type2);
function b2Type2() {
   document.boots2.src = "Images/women-boot2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Pink";
}
document.querySelector("#b2-type3").addEventListener("mouseover", b2Type3);
function b2Type3() {
   document.boots2.src = "Images/women-boot2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Grey";
}
document.querySelector("#b2-type4").addEventListener("mouseover", b2Type4);
function b2Type4() {
   document.boots2.src = "Images/women-boot2-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Brown";
}
document.querySelector("#b2-type5").addEventListener("mouseover", b2Type5);
function b2Type5() {
   document.boots2.src = "Images/women-boot2-8.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black";
}
//mouseout (Boot 2)
document.querySelector("#b2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   b2Type1();
}
document.querySelector("#b2-type3").addEventListener("mouseout", type2Mout1);
document.querySelector("#b2-type4").addEventListener("mouseout", type2Mout1);
document.querySelector("#b2-type5").addEventListener("mouseout", type2Mout1);
//Footwear - Boot 3
var boots2 = [
   "Images/women-boot3.jpg",
   "Images/women-boot3-2.jpg",
   "Images/women-boot3-3.jpg",
   "Images/women-boot3-4.jpg",
];
var b2 = 0;
document.boots3.src = "Images/women-boot3.jpg";
function setBoots2() {
   document.boots3.src = boots2[b2];
}
setInterval(function autoSlider2() {
   if (b2 < boots2.length - 1) {
      b2++;
   } else {
      b2 = 0;
   }
   setBoots2();
}, 10000);
document.querySelector("#leftbtn-b3").addEventListener("click", leftbBoots2);
function leftbBoots2() {
   if (b2 > 0) {
      b2--;
   } else {
      b2 = boots2.length - 1;
   }
   setBoots2();
}
document.querySelector("#rightbtn-b3").addEventListener("click", rightbBoots2);
function rightbBoots2() {
   if (b2 < boots2.length - 1) {
      b2++;
   } else {
      b2 = 0;
   }
   setBoots2();
}
document.querySelector("#cart-b3").addEventListener("click", cartb3);
function cartb3() {
   document.querySelector("#cart-b3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-b3").addEventListener("click", buyb3);
function buyb3() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-b3").textContent =
         "Total Price : " + "₹" + 499 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about Boot 3
document.querySelector("#boots3").addEventListener("mouseover", info3);
function info3() {
   document.querySelector("#boots3").style.height = "770px";
   document.querySelector("#boots3").style.transition = "height .5s";
   document.querySelector("#info3").style.display = "block";
   document.querySelector("#info3").style.animation = "info 1s ease";
}
//mouseout from more detail about Boot 3(Hidden-info)
document.querySelector("#boots3").addEventListener("mouseout", infoHide3);
function infoHide3() {
   document.querySelector("#info3").style.display = "none";
   document.querySelector("#boots3").style.transition = "height .7s";
   document.querySelector("#boots3").style.height = "670px";
}
//color variety
//mouseover on color images(Boot 3)
document.querySelector("#b3-type1").addEventListener("mouseover", b3Type1);
function b3Type1() {
   document.boots3.src = "Images/women-boot3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Pink";
}
document.querySelector("#b3-type2").addEventListener("mouseover", b3Type2);
function b3Type2() {
   document.boots3.src = "Images/women-boot3-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Sky Blue";
}
document.querySelector("#b3-type3").addEventListener("mouseover", b3Type3);
function b3Type3() {
   document.boots3.src = "Images/women-boot3-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Cherry";
}
document.querySelector("#b3-type4").addEventListener("mouseover", b3Type4);
function b3Type4() {
   document.boots3.src = "Images/women-boot3-7.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Pista";
}
document.querySelector("#b3-type5").addEventListener("mouseover", b3Type5);
function b3Type5() {
   document.boots3.src = "Images/women-boot3-8.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Beige";
}
document.querySelector("#b3-type6").addEventListener("mouseover", b3Type6);
function b3Type6() {
   document.boots3.src = "Images/women-boot3-9.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Black";
}
//mouseout (Boot 3)
document.querySelector("#b3-type2").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   b3Type1();
}
document.querySelector("#b3-type3").addEventListener("mouseout", type3Mout1);
document.querySelector("#b3-type4").addEventListener("mouseout", type3Mout1);
document.querySelector("#b3-type5").addEventListener("mouseout", type3Mout1);
document.querySelector("#b3-type6").addEventListener("mouseout", type3Mout1);
//Out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of stock");
}
document.querySelector("#oos2").addEventListener("click", outOfStock);
document.querySelector("#oos3").addEventListener("click", outOfStock);
//Footwear - Boot 4
var boots3 = [
   "Images/women-boot4.jpg",
   "Images/women-boot4-2.jpg",
   "Images/women-boot4-3.jpg",
   "Images/women-boot4-4.jpg",
];
var b3 = 0;
document.boots4.src = "Images/women-boot4.jpg";
function setBoots3() {
   document.boots4.src = boots3[b3];
}
setInterval(function autoSlider3() {
   if (b3 < boots3.length - 1) {
      b3++;
   } else {
      b3 = 0;
   }
   setBoots3();
}, 10000);
document.querySelector("#leftbtn-b4").addEventListener("click", leftbBoots3);
function leftbBoots3() {
   if (b3 > 0) {
      b3--;
   } else {
      b3 = boots3.length - 1;
   }
   setBoots3();
}
document.querySelector("#rightbtn-b4").addEventListener("click", rightbBoots3);
function rightbBoots3() {
   if (b3 < boots3.length - 1) {
      b3++;
   } else {
      b3 = 0;
   }
   setBoots3();
}
document.querySelector("#cart-b4").addEventListener("click", cartb4);
function cartb4() {
   document.querySelector("#cart-b4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-b4").addEventListener("click", buyb4);
function buyb4() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-b4").textContent =
         "Total Price : " + "₹" + 446 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about Boot 4
document.querySelector("#boots4").addEventListener("mouseover", info4);
function info4() {
   document.querySelector("#boots4").style.height = "770px";
   document.querySelector("#boots4").style.transition = "height .5s";
   document.querySelector("#info4").style.display = "block";
   document.querySelector("#info4").style.animation = "info 1s ease";
}
//mouseout from more detail about Boot 4(Hidden-info)
document.querySelector("#boots4").addEventListener("mouseout", infoHide4);
function infoHide4() {
   document.querySelector("#info4").style.display = "none";
   document.querySelector("#boots4").style.transition = "height .7s";
   document.querySelector("#boots4").style.height = "670px";
}
//color variety
//mouseover on color images(Boot 4)
document.querySelector("#b4-type1").addEventListener("mouseover", b4Type1);
function b4Type1() {
   document.boots4.src = "Images/women-boot4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Floral-Pink";
}
document.querySelector("#b4-type2").addEventListener("mouseover", b4Type2);
function b4Type2() {
   document.boots4.src = "Images/women-boot4-5.jpg";
   document.querySelector("#color-name3").innerHTML =
      " Color: Dark Blue with Buckle";
}
document.querySelector("#b4-type3").addEventListener("mouseover", b4Type3);
function b4Type3() {
   document.boots4.src = "Images/women-boot4-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Floral-Black";
}
document.querySelector("#b4-type4").addEventListener("mouseover", b4Type4);
function b4Type4() {
   document.boots4.src = "Images/women-boot4-7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Floral-Tan";
}
document.querySelector("#b4-type5").addEventListener("mouseover", b4Type5);
function b4Type5() {
   document.boots4.src = "Images/women-boot4-8.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Jeans Blue";
}
document.querySelector("#b4-type6").addEventListener("mouseover", b4Type6);
function b4Type6() {
   document.boots4.src = "Images/women-boot4-9.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Printed-White";
}
//mouseout (Boot 4)
document.querySelector("#b4-type2").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   b4Type1();
}
document.querySelector("#b4-type3").addEventListener("mouseout", type4Mout1);
document.querySelector("#b4-type4").addEventListener("mouseout", type4Mout1);
document.querySelector("#b4-type5").addEventListener("mouseout", type4Mout1);
document.querySelector("#b4-type6").addEventListener("mouseout", type4Mout1);
//Footwear - Boot 5
var boots4 = [
   "Images/women-boot5.jpg",
   "Images/women-boot5-2.jpg",
   "Images/women-boot5-3.jpg",
   "Images/women-boot5-4.jpg",
];
var b4 = 0;
document.boots5.src = "Images/women-boot5.jpg";
function setBoots4() {
   document.boots5.src = boots4[b4];
}
setInterval(function autoSlider4() {
   if (b4 < boots4.length - 1) {
      b4++;
   } else {
      b4 = 0;
   }
   setBoots4();
}, 10000);
document.querySelector("#leftbtn-b5").addEventListener("click", leftbBoots4);
function leftbBoots4() {
   if (b4 > 0) {
      b4--;
   } else {
      b4 = boots4.length - 1;
   }
   setBoots4();
}
document.querySelector("#rightbtn-b5").addEventListener("click", rightbBoots4);
function rightbBoots4() {
   if (b4 < boots4.length - 1) {
      b4++;
   } else {
      b4 = 0;
   }
   setBoots4();
}
document.querySelector("#cart-b5").addEventListener("click", cartb5);
function cartb5() {
   document.querySelector("#cart-b5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-b5").addEventListener("click", buyb5);
function buyb5() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-b5").textContent =
         "Total Price : " + "₹" + 599 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about Boot 5
document.querySelector("#boots5").addEventListener("mouseover", info5);
function info5() {
   document.querySelector("#boots5").style.height = "770px";
   document.querySelector("#boots5").style.transition = "height .5s";
   document.querySelector("#info5").style.display = "block";
   document.querySelector("#info5").style.animation = "info 1s ease";
}
//mouseout from more detail about Boot 5(Hidden-info)
document.querySelector("#boots5").addEventListener("mouseout", infoHide5);
function infoHide5() {
   document.querySelector("#info5").style.display = "none";
   document.querySelector("#boots5").style.transition = "height .7s";
   document.querySelector("#boots5").style.height = "670px";
}
//color variety
//mouseover on color images(Boot 5)
document.querySelector("#b5-type1").addEventListener("mouseover", b5Type1);
function b5Type1() {
   document.boots5.src = "Images/women-boot5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Black";
}
document.querySelector("#b5-type2").addEventListener("mouseover", b5Type2);
function b5Type2() {
   document.boots5.src = "Images/women-boot5-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Cherry";
}
document.querySelector("#b5-type3").addEventListener("mouseover", b5Type3);
function b5Type3() {
   document.boots5.src = "Images/women-boot5-6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Tan";
}
document.querySelector("#b5-type4").addEventListener("mouseover", b5Type4);
function b5Type4() {
   document.boots5.src = "Images/women-boot5-7.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Brown";
}
document.querySelector("#b5-type5").addEventListener("mouseover", b5Type5);
function b5Type5() {
   document.boots5.src = "Images/women-boot5-8.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Pink";
}
//mouseout (Boot 5)
document.querySelector("#b5-type2").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   b5Type1();
}
document.querySelector("#b5-type3").addEventListener("mouseout", type5Mout1);
document.querySelector("#b5-type4").addEventListener("mouseout", type5Mout1);
document.querySelector("#b5-type5").addEventListener("mouseout", type5Mout1);
//Footwear - Boot 6
var boots5 = [
   "Images/women-boot6.jpg",
   "Images/women-boot6-2.jpg",
   "Images/women-boot6-3.jpg",
   "Images/women-boot6-4.jpg",
];
var b5 = 0;
document.boots6.src = "Images/women-boot6.jpg";
function setBoots5() {
   document.boots6.src = boots5[b5];
}
setInterval(function autoSlider5() {
   if (b5 < boots5.length - 1) {
      b5++;
   } else {
      b5 = 0;
   }
   setBoots5();
}, 10000);
document.querySelector("#leftbtn-b6").addEventListener("click", leftbBoots5);
function leftbBoots5() {
   if (b5 > 0) {
      b5--;
   } else {
      b5 = boots5.length - 1;
   }
   setBoots5();
}
document.querySelector("#rightbtn-b6").addEventListener("click", rightbBoots5);
function rightbBoots5() {
   if (b5 < boots5.length - 1) {
      b5++;
   } else {
      b5 = 0;
   }
   setBoots5();
}
document.querySelector("#cart-b6").addEventListener("click", cartb6);
function cartb6() {
   document.querySelector("#cart-b6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-b6").addEventListener("click", buyb6);
function buyb6() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-b6").textContent =
         "Total Price : " + "₹" + 480 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about Boot 6
document.querySelector("#boots6").addEventListener("mouseover", info6);
function info6() {
   document.querySelector("#boots6").style.height = "770px";
   document.querySelector("#boots6").style.transition = "height .5s";
   document.querySelector("#info6").style.display = "block";
   document.querySelector("#info6").style.animation = "info 1s ease";
}
//mouseout from more detail about Boot 6(Hidden-info)
document.querySelector("#boots6").addEventListener("mouseout", infoHide6);
function infoHide6() {
   document.querySelector("#info6").style.display = "none";
   document.querySelector("#boots6").style.transition = "height .7s";
   document.querySelector("#boots6").style.height = "670px";
}
//color variety
//mouseover on color images(Boot 6)
document.querySelector("#b6-type1").addEventListener("mouseover", b6Type1);
function b6Type1() {
   document.boots6.src = "Images/women-boot6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Tan";
}
document.querySelector("#b6-type2").addEventListener("mouseover", b6Type2);
function b6Type2() {
   document.boots6.src = "Images/women-boot6-5.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Grey";
}
document.querySelector("#b6-type3").addEventListener("mouseover", b6Type3);
function b6Type3() {
   document.boots6.src = "Images/women-boot6-6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Brown";
}
document.querySelector("#b6-type4").addEventListener("mouseover", b6Type4);
function b6Type4() {
   document.boots6.src = "Images/women-boot6-7.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Blue";
}
document.querySelector("#b6-type5").addEventListener("mouseover", b6Type5);
function b6Type5() {
   document.boots6.src = "Images/women-boot6-8.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Black";
}
//mouseout (Boot 6)
document.querySelector("#b6-type2").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   b6Type1();
}
document.querySelector("#b6-type3").addEventListener("mouseout", type6Mout1);
document.querySelector("#b6-type4").addEventListener("mouseout", type6Mout1);
document.querySelector("#b6-type5").addEventListener("mouseout", type6Mout1);
//Footwear - Boot 7
var boots6 = [
   "Images/women-boot7.jpg",
   "Images/women-boot7-2.jpg",
   "Images/women-boot7-3.jpg",
   "Images/women-boot7-4.jpg",
];
var b6 = 0;
document.boots7.src = "Images/women-boot7.jpg";
function setBoots6() {
   document.boots7.src = boots6[b6];
}
setInterval(function autoSlider6() {
   if (b6 < boots6.length - 1) {
      b6++;
   } else {
      b6 = 0;
   }
   setBoots6();
}, 10000);
document.querySelector("#leftbtn-b7").addEventListener("click", leftbBoots6);
function leftbBoots6() {
   if (b6 > 0) {
      b6--;
   } else {
      b6 = boots6.length - 1;
   }
   setBoots6();
}
document.querySelector("#rightbtn-b7").addEventListener("click", rightbBoots6);
function rightbBoots6() {
   if (b6 < boots6.length - 1) {
      b6++;
   } else {
      b6 = 0;
   }
   setBoots6();
}
document.querySelector("#cart-b7").addEventListener("click", cartb7);
function cartb7() {
   document.querySelector("#cart-b7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-b7").addEventListener("click", buyb7);
function buyb7() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 4 && buyFootwear > 0) {
      document.querySelector("#total-b7").textContent =
         "Total Price : " + "₹" + 4099 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 4 pieces left !!!");
   }
}
//mouseover for more detail about Boot 7
document.querySelector("#boots7").addEventListener("mouseover", info7);
function info7() {
   document.querySelector("#boots7").style.height = "770px";
   document.querySelector("#boots7").style.transition = "height .5s";
   document.querySelector("#info7").style.display = "block";
   document.querySelector("#info7").style.animation = "info 1s ease";
}
//mouseout from more detail about Boot 7(Hidden-info)
document.querySelector("#boots7").addEventListener("mouseout", infoHide7);
function infoHide7() {
   document.querySelector("#info7").style.display = "none";
   document.querySelector("#boots7").style.transition = "height .7s";
   document.querySelector("#boots7").style.height = "670px";
}
//color variety
//mouseover on color images(Boot 7)
document.querySelector("#b7-type1").addEventListener("mouseover", b7Type1);
function b7Type1() {
   document.boots7.src = "Images/women-boot7.jpg";
   document.querySelector("#color-name6").innerHTML = " Color: Black";
}
document.querySelector("#b7-type2").addEventListener("mouseover", b7Type2);
function b7Type2() {
   document.boots7.src = "Images/women-boot7-5.jpg";
   document.querySelector("#color-name6").innerHTML = " Color: Tan";
}
//mouseout (Boot 7)
document.querySelector("#b7-type2").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   b7Type1();
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
