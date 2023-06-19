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
//Footwear - Heel 1
var heels = [
   "Images/women-heel1.jpg",
   "Images/women-heel1-2.jpg",
   "Images/women-heel1-3.jpg",
   "Images/women-heel1-4.jpg",
];
var h = 0;
document.heels1.src = "Images/women-heel1.jpg";
function setHeel() {
   document.heels1.src = heels[h];
}
setInterval(function autoSlider() {
   if (h < heels.length - 1) {
      h++;
   } else {
      h = 0;
   }
   setHeel();
}, 10000);
document.querySelector("#leftbtn-h1").addEventListener("click", leftbHeel);
function leftbHeel() {
   if (h > 0) {
      h--;
   } else {
      h = heels.length - 1;
   }
   setHeel();
}
document.querySelector("#rightbtn-h1").addEventListener("click", rightbHeel);
function rightbHeel() {
   if (h < heels.length - 1) {
      h++;
   } else {
      h = 0;
   }
   setHeel();
}
document.querySelector("#cart-h1").addEventListener("click", carth1);
function carth1() {
   document.querySelector("#cart-h1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h1").addEventListener("click", buyh1);
function buyh1() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-h1").textContent =
         "Total Price : " + "₹" + 499 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about heel 1
document.querySelector("#heels1").addEventListener("mouseover", info);
function info() {
   document.querySelector("#heels1").style.height = "770px";
   document.querySelector("#heels1").style.transition = "height .5s";
   document.querySelector("#info1").style.display = "block";
   document.querySelector("#info1").style.animation = "info 1s ease";
}
//mouseout from more detail about heel 1(Hidden-info)
document.querySelector("#heels1").addEventListener("mouseout", infoHide);
function infoHide() {
   document.querySelector("#info1").style.display = "none";
   document.querySelector("#heels1").style.transition = "height .7s";
   document.querySelector("#heels1").style.height = "670px";
}
//color variety
// -mouseover on color images(Heel 1)
document.querySelector("#h1-type1").addEventListener("mouseover", h1Type1);
function h1Type1() {
   document.heels1.src = "Images/women-heel1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: White";
}
document.querySelector("#h1-type2").addEventListener("mouseover", h1Type2);
function h1Type2() {
   document.heels1.src = "Images/women-heel1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black";
}
document.querySelector("#h1-type3").addEventListener("mouseover", h1Type3);
function h1Type3() {
   document.heels1.src = "Images/women-heel1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Navy";
}
// -mouseout (Heel 1)
document.querySelector("#h1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   h1Type1();
}
document.querySelector("#h1-type3").addEventListener("mouseout", type1Mout1);
//Footwear - Heel 2
var heels1 = [
   "Images/women-heel2.jpg",
   "Images/women-heel2-2.jpg",
   "Images/women-heel2-3.jpg",
   "Images/women-heel2-4.jpg",
];
var h1 = 0;
document.heels2.src = "Images/women-heel2.jpg";
function setHeel1() {
   document.heels2.src = heels1[h1];
}
setInterval(function autoSlider1() {
   if (h1 < heels1.length - 1) {
      h1++;
   } else {
      h1 = 0;
   }
   setHeel1();
}, 10000);
document.querySelector("#leftbtn-h2").addEventListener("click", leftbHeel1);
function leftbHeel1() {
   if (h1 > 0) {
      h1--;
   } else {
      h1 = heels1.length - 1;
   }
   setHeel1();
}
document.querySelector("#rightbtn-h2").addEventListener("click", rightbHeel1);
function rightbHeel1() {
   if (h1 < heels1.length - 1) {
      h1++;
   } else {
      h1 = 0;
   }
   setHeel1();
}
document.querySelector("#cart-h2").addEventListener("click", carth2);
function carth2() {
   document.querySelector("#cart-h2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h2").addEventListener("click", buyh2);
function buyh2() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-h2").textContent =
         "Total Price : " + "₹" + 599 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about heel 2
document.querySelector("#heels2").addEventListener("mouseover", info1);
function info1() {
   document.querySelector("#heels2").style.height = "770px";
   document.querySelector("#heels2").style.transition = "height .5s";
   document.querySelector("#info2").style.display = "block";
   document.querySelector("#info2").style.animation = "info 1s ease";
}
//mouseout from more detail about heel 2(Hidden-info)
document.querySelector("#heels2").addEventListener("mouseout", infoHide1);
function infoHide1() {
   document.querySelector("#info2").style.display = "none";
   document.querySelector("#heels2").style.transition = "height .7s";
   document.querySelector("#heels2").style.height = "670px";
}
//color variety
// -mouseover on color images(Heel 2)
document.querySelector("#h2-type1").addEventListener("mouseover", h2Type1);
function h2Type1() {
   document.heels2.src = "Images/women-heel2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Beige";
}
document.querySelector("#h2-type2").addEventListener("mouseover", h2Type2);
function h2Type2() {
   document.heels2.src = "Images/women-heel2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black";
}
// -mouseout (Heel 2)
document.querySelector("#h2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   h2Type1();
}
//Footwear - Heel 3
var heels2 = [
   "Images/women-heel3.jpg",
   "Images/women-heel3-2.jpg",
   "Images/women-heel3-3.jpg",
   "Images/women-heel3-4.jpg",
];
var h2 = 0;
document.heels3.src = "Images/women-heel3.jpg";
function setHeel2() {
   document.heels3.src = heels2[h2];
}
setInterval(function autoSlider2() {
   if (h2 < heels2.length - 1) {
      h2++;
   } else {
      h2 = 0;
   }
   setHeel2();
}, 10000);
document.querySelector("#leftbtn-h3").addEventListener("click", leftbHeel2);
function leftbHeel2() {
   if (h2 > 0) {
      h2--;
   } else {
      h2 = heels2.length - 1;
   }
   setHeel2();
}
document.querySelector("#rightbtn-h3").addEventListener("click", rightbHeel2);
function rightbHeel2() {
   if (h2 < heels2.length - 1) {
      h2++;
   } else {
      h2 = 0;
   }
   setHeel2();
}
document.querySelector("#cart-h3").addEventListener("click", carth3);
function carth3() {
   document.querySelector("#cart-h3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h3").addEventListener("click", buyh3);
function buyh3() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-h3").textContent =
         "Total Price : " + "₹" + 402 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about heel 3
document.querySelector("#heels3").addEventListener("mouseover", info2);
function info2() {
   document.querySelector("#heels3").style.height = "770px";
   document.querySelector("#heels3").style.transition = "height .5s";
   document.querySelector("#info3").style.display = "block";
   document.querySelector("#info3").style.animation = "info 1s ease";
}
//mouseout from more detail about heel 3(Hidden-info)
document.querySelector("#heels3").addEventListener("mouseout", infoHide2);
function infoHide2() {
   document.querySelector("#info3").style.display = "none";
   document.querySelector("#heels3").style.transition = "height .7s";
   document.querySelector("#heels3").style.height = "670px";
}
//color variety
// -mouseover on color images(Heel 3)
document.querySelector("#h3-type1").addEventListener("mouseover", h3Type1);
function h3Type1() {
   document.heels3.src = "Images/women-heel3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Black";
}
document.querySelector("#h3-type2").addEventListener("mouseover", h3Type2);
function h3Type2() {
   document.heels3.src = "Images/women-heel3-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Beige";
}
document.querySelector("#h3-type3").addEventListener("mouseover", h3Type3);
function h3Type3() {
   document.heels3.src = "Images/women-heel3-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Brown";
}
// -mouseout (Heel 3)
document.querySelector("#h3-type2").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   h3Type1();
}
document.querySelector("#h3-type3").addEventListener("mouseout", type3Mout1);
//Footwear - Heel 4
var heels3 = [
   "Images/women-heel4.jpg",
   "Images/women-heel4-2.jpg",
   "Images/women-heel4-3.jpg",
   "Images/women-heel4-4.jpg",
];
var h3 = 0;
document.heels4.src = "Images/women-heel4.jpg";
function setHeel3() {
   document.heels4.src = heels3[h3];
}
setInterval(function autoSlider3() {
   if (h3 < heels3.length - 1) {
      h3++;
   } else {
      h3 = 0;
   }
   setHeel3();
}, 10000);
document.querySelector("#leftbtn-h4").addEventListener("click", leftbHeel3);
function leftbHeel3() {
   if (h3 > 0) {
      h3--;
   } else {
      h3 = heels3.length - 1;
   }
   setHeel3();
}
document.querySelector("#rightbtn-h4").addEventListener("click", rightbHeel3);
function rightbHeel3() {
   if (h3 < heels3.length - 1) {
      h3++;
   } else {
      h3 = 0;
   }
   setHeel3();
}
document.querySelector("#cart-h4").addEventListener("click", carth4);
function carth4() {
   document.querySelector("#cart-h4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h4").addEventListener("click", buyh4);
function buyh4() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-h4").textContent =
         "Total Price : " + "₹" + 361 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about heel 4
document.querySelector("#heels4").addEventListener("mouseover", info3);
function info3() {
   document.querySelector("#heels4").style.height = "770px";
   document.querySelector("#heels4").style.transition = "height .5s";
   document.querySelector("#info4").style.display = "block";
   document.querySelector("#info4").style.animation = "info 1s ease";
}
//mouseout from more detail about heel 4(Hidden-info)
document.querySelector("#heels4").addEventListener("mouseout", infoHide3);
function infoHide3() {
   document.querySelector("#info4").style.display = "none";
   document.querySelector("#heels4").style.transition = "height .7s";
   document.querySelector("#heels4").style.height = "670px";
}
//color variety
// -mouseover on color images(Heel 4)
document.querySelector("#h4-type1").addEventListener("mouseover", h4Type1);
function h4Type1() {
   document.heels4.src = "Images/women-heel4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Cgreen";
}
document.querySelector("#h4-type2").addEventListener("mouseover", h4Type2);
function h4Type2() {
   document.heels4.src = "Images/women-heel4-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Navy Blue";
}
document.querySelector("#h4-type3").addEventListener("mouseover", h4Type3);
function h4Type3() {
   document.heels4.src = "Images/women-heel4-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Pink";
}
document.querySelector("#h4-type4").addEventListener("mouseover", h4Type4);
function h4Type4() {
   document.heels4.src = "Images/women-heel4-7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Black";
}
document.querySelector("#h4-type5").addEventListener("mouseover", h4Type5);
function h4Type5() {
   document.heels4.src = "Images/women-heel4-8.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Maroon";
}
document.querySelector("#h4-type6").addEventListener("mouseover", h4Type6);
function h4Type6() {
   document.heels4.src = "Images/women-heel4-9.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Mustard";
}
// -mouseout (Heel 4)
document.querySelector("#h4-type2").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   h4Type1();
}
document.querySelector("#h4-type3").addEventListener("mouseout", type4Mout1);
document.querySelector("#h4-type4").addEventListener("mouseout", type4Mout1);
document.querySelector("#h4-type5").addEventListener("mouseout", type4Mout1);
document.querySelector("#h4-type6").addEventListener("mouseout", type4Mout1);
//Footwear - Heel 5
var heels4 = [
   "Images/women-heel5.jpg",
   "Images/women-heel5-2.jpg",
   "Images/women-heel5-3.jpg",
   "Images/women-heel5-4.jpg",
];
var h4 = 0;
document.heels5.src = "Images/women-heel5.jpg";
function setHeel4() {
   document.heels5.src = heels4[h4];
}
setInterval(function autoSlider4() {
   if (h4 < heels4.length - 1) {
      h4++;
   } else {
      h4 = 0;
   }
   setHeel4();
}, 10000);
document.querySelector("#leftbtn-h5").addEventListener("click", leftbHeel4);
function leftbHeel4() {
   if (h4 > 0) {
      h4--;
   } else {
      h4 = heels4.length - 1;
   }
   setHeel4();
}
document.querySelector("#rightbtn-h5").addEventListener("click", rightbHeel4);
function rightbHeel4() {
   if (h4 < heels4.length - 1) {
      h4++;
   } else {
      h4 = 0;
   }
   setHeel4();
}
document.querySelector("#cart-h5").addEventListener("click", carth5);
function carth5() {
   document.querySelector("#cart-h5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h5").addEventListener("click", buyh5);
function buyh5() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-h5").textContent =
         "Total Price : " + "₹" + 1934 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about heel 5
document.querySelector("#heels5").addEventListener("mouseover", info4);
function info4() {
   document.querySelector("#heels5").style.height = "770px";
   document.querySelector("#heels5").style.transition = "height .5s";
   document.querySelector("#info5").style.display = "block";
   document.querySelector("#info5").style.animation = "info 1s ease";
}
//mouseout from more detail about heel 5(Hidden-info)
document.querySelector("#heels5").addEventListener("mouseout", infoHide4);
function infoHide4() {
   document.querySelector("#info5").style.display = "none";
   document.querySelector("#heels5").style.transition = "height .7s";
   document.querySelector("#heels5").style.height = "670px";
}
//color variety
// -mouseover on color images(Heel 5)
document.querySelector("#h5-type1").addEventListener("mouseover", h5Type1);
function h5Type1() {
   document.heels5.src = "Images/women-heel5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Pink";
}
document.querySelector("#h5-type2").addEventListener("mouseover", h5Type2);
function h5Type2() {
   document.heels5.src = "Images/women-heel5-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Black";
}
document.querySelector("#h5-type3").addEventListener("mouseover", h5Type3);
function h5Type3() {
   document.heels5.src = "Images/women-heel5-6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Beige";
}
document.querySelector("#h5-type4").addEventListener("mouseover", h5Type4);
function h5Type4() {
   document.heels5.src = "Images/women-heel5-7.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Sky Blue";
}
// -mouseout (Heel 5)
document.querySelector("#h5-type2").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   h5Type1();
}
document.querySelector("#h5-type3").addEventListener("mouseout", type5Mout1);
document.querySelector("#h5-type4").addEventListener("mouseout", type5Mout1);
//Footwear - Heel 6
var heels5 = [
   "Images/women-heel6.jpg",
   "Images/women-heel6-2.jpg",
   "Images/women-heel6-3.jpg",
   "Images/women-heel6-4.jpg",
];
var h5 = 0;
document.heels6.src = "Images/women-heel6.jpg";
function setHeel5() {
   document.heels6.src = heels5[h5];
}
setInterval(function autoSlider5() {
   if (h5 < heels5.length - 1) {
      h5++;
   } else {
      h5 = 0;
   }
   setHeel5();
}, 10000);
document.querySelector("#leftbtn-h6").addEventListener("click", leftbHeel5);
function leftbHeel5() {
   if (h5 > 0) {
      h5--;
   } else {
      h5 = heels5.length - 1;
   }
   setHeel5();
}
document.querySelector("#rightbtn-h6").addEventListener("click", rightbHeel5);
function rightbHeel5() {
   if (h5 < heels5.length - 1) {
      h5++;
   } else {
      h5 = 0;
   }
   setHeel5();
}
document.querySelector("#cart-h6").addEventListener("click", carth6);
function carth6() {
   document.querySelector("#cart-h6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h6").addEventListener("click", buyh6);
function buyh6() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-h6").textContent =
         "Total Price : " + "₹" + 616 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about heel 6
document.querySelector("#heels6").addEventListener("mouseover", info5);
function info5() {
   document.querySelector("#heels6").style.height = "770px";
   document.querySelector("#heels6").style.transition = "height .5s";
   document.querySelector("#info6").style.display = "block";
   document.querySelector("#info6").style.animation = "info 1s ease";
}
//mouseout from more detail about heel 6(Hidden-info)
document.querySelector("#heels6").addEventListener("mouseout", infoHide5);
function infoHide5() {
   document.querySelector("#info6").style.display = "none";
   document.querySelector("#heels6").style.transition = "height .7s";
   document.querySelector("#heels6").style.height = "670px";
}
//Footwear - Heel 7
var heels6 = [
   "Images/women-heel7.jpg",
   "Images/women-heel7-2.jpg",
   "Images/women-heel7-3.jpg",
   "Images/women-heel7-4.jpg",
];
var h6 = 0;
document.heels7.src = "Images/women-heel7.jpg";
function setHeel6() {
   document.heels7.src = heels6[h6];
}
setInterval(function autoSlider6() {
   if (h6 < heels6.length - 1) {
      h6++;
   } else {
      h6 = 0;
   }
   setHeel6();
}, 10000);
document.querySelector("#leftbtn-h7").addEventListener("click", leftbHeel6);
function leftbHeel6() {
   if (h6 > 0) {
      h6--;
   } else {
      h6 = heels6.length - 1;
   }
   setHeel6();
}
document.querySelector("#rightbtn-h7").addEventListener("click", rightbHeel6);
function rightbHeel6() {
   if (h6 < heels6.length - 1) {
      h6++;
   } else {
      h6 = 0;
   }
   setHeel6();
}
document.querySelector("#cart-h7").addEventListener("click", carth7);
function carth7() {
   document.querySelector("#cart-h7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h7").addEventListener("click", buyh7);
function buyh7() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-h7").textContent =
         "Total Price : " + "₹" + 1270 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about heel 7
document.querySelector("#heels7").addEventListener("mouseover", info6);
function info6() {
   document.querySelector("#heels7").style.height = "770px";
   document.querySelector("#heels7").style.transition = "height .5s";
   document.querySelector("#info7").style.display = "block";
   document.querySelector("#info7").style.animation = "info 1s ease";
}
//mouseout from more detail about heel 7(Hidden-info)
document.querySelector("#heels7").addEventListener("mouseout", infoHide6);
function infoHide6() {
   document.querySelector("#info7").style.display = "none";
   document.querySelector("#heels7").style.transition = "height .7s";
   document.querySelector("#heels7").style.height = "670px";
}
//Footwear - Heel 8
var heels7 = [
   "Images/women-heel8.jpg",
   "Images/women-heel8-2.jpg",
   "Images/women-heel8-3.jpg",
   "Images/women-heel8-4.jpg",
];
var h7 = 0;
document.heels8.src = "Images/women-heel8.jpg";
function setHeel7() {
   document.heels8.src = heels7[h7];
}
setInterval(function autoSlider7() {
   if (h7 < heels7.length - 1) {
      h7++;
   } else {
      h7 = 0;
   }
   setHeel7();
}, 10000);
document.querySelector("#leftbtn-h8").addEventListener("click", leftbHeel7);
function leftbHeel7() {
   if (h7 > 0) {
      h7--;
   } else {
      h7 = heels7.length - 1;
   }
   setHeel7();
}
document.querySelector("#rightbtn-h8").addEventListener("click", rightbHeel7);
function rightbHeel7() {
   if (h7 < heels7.length - 1) {
      h7++;
   } else {
      h7 = 0;
   }
   setHeel7();
}
document.querySelector("#cart-h8").addEventListener("click", carth8);
function carth8() {
   document.querySelector("#cart-h8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h8").addEventListener("click", buyh8);
function buyh8() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-h8").textContent =
         "Total Price : " + "₹" + 569 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of stock");
}
document.querySelector("#oos2").addEventListener("click", outOfStock);
document.querySelector("#oos3").addEventListener("click", outOfStock);
//mouseover for more detail about heel 8
document.querySelector("#heels8").addEventListener("mouseover", info7);
function info7() {
   document.querySelector("#heels8").style.height = "770px";
   document.querySelector("#heels8").style.transition = "height .5s";
   document.querySelector("#info8").style.display = "block";
   document.querySelector("#info8").style.animation = "info 1s ease";
}
//mouseout from more detail about heel 8(Hidden-info)
document.querySelector("#heels8").addEventListener("mouseout", infoHide7);
function infoHide7() {
   document.querySelector("#info8").style.display = "none";
   document.querySelector("#heels8").style.transition = "height .7s";
   document.querySelector("#heels8").style.height = "670px";
}
//Footwear - Heel 9
var heels8 = [
   "Images/women-heel9.jpg",
   "Images/women-heel9-2.jpg",
   "Images/women-heel9-3.jpg",
   "Images/women-heel9-4.jpg",
];
var h8 = 0;
document.heels9.src = "Images/women-heel9.jpg";
function setHeel8() {
   document.heels9.src = heels8[h8];
}
setInterval(function autoSlider8() {
   if (h8 < heels8.length - 1) {
      h8++;
   } else {
      h8 = 0;
   }
   setHeel8();
}, 10000);
document.querySelector("#leftbtn-h9").addEventListener("click", leftbHeel8);
function leftbHeel8() {
   if (h8 > 0) {
      h8--;
   } else {
      h8 = heels8.length - 1;
   }
   setHeel8();
}
document.querySelector("#rightbtn-h9").addEventListener("click", rightbHeel8);
function rightbHeel8() {
   if (h8 < heels8.length - 1) {
      h8++;
   } else {
      h8 = 0;
   }
   setHeel8();
}
document.querySelector("#cart-h9").addEventListener("click", carth9);
function carth9() {
   document.querySelector("#cart-h9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h9").addEventListener("click", buyh9);
function buyh9() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-h9").textContent =
         "Total Price : " + "₹" + 629 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about heel 9
document.querySelector("#heels9").addEventListener("mouseover", info8);
function info8() {
   document.querySelector("#heels9").style.height = "770px";
   document.querySelector("#heels9").style.transition = "height .5s";
   document.querySelector("#info9").style.display = "block";
   document.querySelector("#info9").style.animation = "info 1s ease";
}
//mouseout from more detail about heel 9(Hidden-info)
document.querySelector("#heels9").addEventListener("mouseout", infoHide8);
function infoHide8() {
   document.querySelector("#info9").style.display = "none";
   document.querySelector("#heels9").style.transition = "height .7s";
   document.querySelector("#heels9").style.height = "670px";
}
//Footwear - Heel 10
var heels9 = [
   "Images/women-heel10.jpg",
   "Images/women-heel10-2.jpg",
   "Images/women-heel10-3.jpg",
   "Images/women-heel10-4.jpg",
];
var h9 = 0;
document.heels10.src = "Images/women-heel10.jpg";
function setHeel9() {
   document.heels10.src = heels9[h9];
}
setInterval(function autoSlider9() {
   if (h9 < heels9.length - 1) {
      h9++;
   } else {
      h9 = 0;
   }
   setHeel9();
}, 10000);
document.querySelector("#leftbtn-h10").addEventListener("click", leftbHeel9);
function leftbHeel9() {
   if (h9 > 0) {
      h9--;
   } else {
      h9 = heels9.length - 1;
   }
   setHeel9();
}
document.querySelector("#rightbtn-h10").addEventListener("click", rightbHeel9);
function rightbHeel9() {
   if (h9 < heels9.length - 1) {
      h9++;
   } else {
      h9 = 0;
   }
   setHeel9();
}
document.querySelector("#cart-h10").addEventListener("click", carth10);
function carth10() {
   document.querySelector("#cart-h10").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h10").addEventListener("click", buyh10);
function buyh10() {
   const buyFootwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFootwear <= 10 && buyFootwear > 0) {
      document.querySelector("#total-h10").textContent =
         "Total Price : " + "₹" + 912 * buyFootwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFootwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//mouseover for more detail about heel 10
document.querySelector("#heels10").addEventListener("mouseover", info9);
function info9() {
   document.querySelector("#heels10").style.height = "770px";
   document.querySelector("#heels10").style.transition = "height .5s";
   document.querySelector("#info10").style.display = "block";
   document.querySelector("#info10").style.animation = "info 1s ease";
}
//mouseout from more detail about heel 10(Hidden-info)
document.querySelector("#heels10").addEventListener("mouseout", infoHide9);
function infoHide9() {
   document.querySelector("#info10").style.display = "none";
   document.querySelector("#heels10").style.transition = "height .7s";
   document.querySelector("#heels10").style.height = "670px";
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
