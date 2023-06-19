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
//Winter Wear boys Clothing- Hoodie 1
var hoodie = [
   "Images/kid-h1.jpg",
   "Images/kid-h1-2.jpg",
   "Images/kid-h1-3.jpg",
];
var h = 0;
document.hoodie1.src = "Images/kid-h1.jpg";
function setHoodie() {
   document.hoodie1.src = hoodie[h];
}
setInterval(function autoSlider() {
   if (h < hoodie.length - 1) {
      h++;
   } else {
      h = 0;
   }
   setHoodie();
}, 10000);
document.querySelector("#leftbtn-h1").addEventListener("click", leftbHoodie);
function leftbHoodie() {
   if (h > 0) {
      h--;
   } else {
      h = hoodie.length - 1;
   }
   setHoodie();
}
document.querySelector("#rightbtn-h1").addEventListener("click", rightbHoodie);
function rightbHoodie() {
   if (h < hoodie.length - 1) {
      h++;
   } else {
      h = 0;
   }
   setHoodie();
}
document.querySelector("#cart-h1").addEventListener("click", carth1);
function carth1() {
   document.querySelector("#cart-h1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h1").addEventListener("click", buyh1);
function buyh1() {
   const buyHoodie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyHoodie <= 10 && buyHoodie > 0) {
      document.querySelector("#total-h1").textContent =
         "Total Price : " + "₹" + 332 * buyHoodie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyHoodie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Hoodie 1)
document.querySelector("#h1-type1").addEventListener("mouseover", h1Type1);
function h1Type1() {
   document.hoodie1.src = "Images/kid-h1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Royal Blue";
}
document.querySelector("#h1-type2").addEventListener("mouseover", h1Type2);
function h1Type2() {
   document.hoodie1.src = "Images/kid-h1-4.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black";
}
document.querySelector("#h1-type3").addEventListener("mouseover", h1Type3);
function h1Type3() {
   document.hoodie1.src = "Images/kid-h1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: White";
}
document.querySelector("#h1-type4").addEventListener("mouseover", h1Type4);
function h1Type4() {
   document.hoodie1.src = "Images/kid-h1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Green";
}
document.querySelector("#h1-type5").addEventListener("mouseover", h1Type5);
function h1Type5() {
   document.hoodie1.src = "Images/kid-h1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Yellow";
}
document.querySelector("#h1-type6").addEventListener("mouseover", h1Type6);
function h1Type6() {
   document.hoodie1.src = "Images/kid-h1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Navy Blue";
}
document.querySelector("#h1-type7").addEventListener("mouseover", h1Type7);
function h1Type7() {
   document.hoodie1.src = "Images/kid-h1-9.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Orange";
}
document.querySelector("#h1-type8").addEventListener("mouseover", h1Type8);
function h1Type8() {
   document.hoodie1.src = "Images/kid-h1-10.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Red";
}
// -mouseout (Hoodie 1)
document.querySelector("#h1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   h1Type1();
}
document.querySelector("#h1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#h1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#h1-type5").addEventListener("mouseout", type1Mout1);
document.querySelector("#h1-type6").addEventListener("mouseout", type1Mout1);
document.querySelector("#h1-type7").addEventListener("mouseout", type1Mout1);
document.querySelector("#h1-type8").addEventListener("mouseout", type1Mout1);
//Winter Wear boys Clothing- Hoodie 2
var hoodie1 = [
   "Images/kid-h2.jpg",
   "Images/kid-h2-2.jpg",
   "Images/kid-h2-3.jpg",
];
var h1 = 0;
document.hoodie2.src = "Images/kid-h2.jpg";
function setHoodie1() {
   document.hoodie2.src = hoodie1[h1];
}
setInterval(function autoSlider1() {
   if (h1 < hoodie1.length - 1) {
      h1++;
   } else {
      h1 = 0;
   }
   setHoodie1();
}, 10000);
document.querySelector("#leftbtn-h2").addEventListener("click", leftbHoodie1);
function leftbHoodie1() {
   if (h1 > 0) {
      h1--;
   } else {
      h1 = hoodie1.length - 1;
   }
   setHoodie1();
}
document.querySelector("#rightbtn-h2").addEventListener("click", rightbHoodie1);
function rightbHoodie1() {
   if (h1 < hoodie1.length - 1) {
      h1++;
   } else {
      h1 = 0;
   }
   setHoodie1();
}
document.querySelector("#cart-h2").addEventListener("click", carth2);
function carth2() {
   document.querySelector("#cart-h2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h2").addEventListener("click", buyh2);
function buyh2() {
   const buyHoodie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyHoodie <= 10 && buyHoodie > 0) {
      document.querySelector("#total-h2").textContent =
         "Total Price : " + "₹" + 899 * buyHoodie + "  only";
      document.querySelector("#total-h2").style.marginTop = "13px";

      alert("Thank ♥ you for Your Order");
   } else if (buyHoodie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter Wear boys Clothing- Hoodie 3
var hoodie2 = [
   "Images/kid-h3.jpg",
   "Images/kid-h3-2.jpg",
   "Images/kid-h3-3.jpg",
];
var h2 = 0;
document.hoodie3.src = "Images/kid-h3.jpg";
function setHoodie2() {
   document.hoodie3.src = hoodie2[h2];
}
setInterval(function autoSlider2() {
   if (h2 < hoodie2.length - 1) {
      h2++;
   } else {
      h2 = 0;
   }
   setHoodie2();
}, 10000);
document.querySelector("#leftbtn-h3").addEventListener("click", leftbHoodie2);
function leftbHoodie2() {
   if (h2 > 0) {
      h2--;
   } else {
      h2 = hoodie2.length - 1;
   }
   setHoodie2();
}
document.querySelector("#rightbtn-h3").addEventListener("click", rightbHoodie2);
function rightbHoodie2() {
   if (h2 < hoodie2.length - 1) {
      h2++;
   } else {
      h2 = 0;
   }
   setHoodie2();
}
document.querySelector("#cart-h3").addEventListener("click", carth3);
function carth3() {
   document.querySelector("#cart-h3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h3").addEventListener("click", buyh3);
function buyh3() {
   const buyHoodie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyHoodie <= 10 && buyHoodie > 0) {
      document.querySelector("#total-h3").textContent =
         "Total Price : " + "₹" + 1025 * buyHoodie + "  only";
      document.querySelector("#total-h3").style.marginTop = "37px";
      alert("Thank ♥ you for Your Order");
   } else if (buyHoodie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter Wear boys Clothing- Hoodie 4
var hoodie3 = [
   "Images/kid-h4.jpg",
   "Images/kid-h4-2.jpg",
   "Images/kid-h4-3.jpg",
];
var h3 = 0;
document.hoodie4.src = "Images/kid-h4.jpg";
function setHoodie3() {
   document.hoodie4.src = hoodie3[h3];
}
setInterval(function autoSlider3() {
   if (h3 < hoodie3.length - 1) {
      h3++;
   } else {
      h3 = 0;
   }
   setHoodie3();
}, 10000);
document.querySelector("#leftbtn-h4").addEventListener("click", leftbHoodie3);
function leftbHoodie3() {
   if (h3 > 0) {
      h3--;
   } else {
      h3 = hoodie3.length - 1;
   }
   setHoodie3();
}
document.querySelector("#rightbtn-h4").addEventListener("click", rightbHoodie3);
function rightbHoodie3() {
   if (h3 < hoodie3.length - 1) {
      h3++;
   } else {
      h3 = 0;
   }
   setHoodie3();
}
document.querySelector("#cart-h4").addEventListener("click", carth4);
function carth4() {
   document.querySelector("#cart-h4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h4").addEventListener("click", buyh4);
function buyh4() {
   const buyHoodie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyHoodie <= 10 && buyHoodie > 0) {
      document.querySelector("#total-h4").textContent =
         "Total Price : " + "₹" + 687 * buyHoodie + "  only";
      document.querySelector("#total-h4").style.marginTop = "37px";
      alert("Thank ♥ you for Your Order");
   } else if (buyHoodie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter Wear boys Clothing- Hoodie 5
var hoodie4 = [
   "Images/kid-h5.jpg",
   "Images/kid-h5-2.jpg",
   "Images/kid-h5-3.jpg",
];
var h4 = 0;
document.hoodie5.src = "Images/kid-h5.jpg";
function setHoodie4() {
   document.hoodie5.src = hoodie4[h4];
}
setInterval(function autoSlider4() {
   if (h4 < hoodie4.length - 1) {
      h4++;
   } else {
      h4 = 0;
   }
   setHoodie4();
}, 10000);
document.querySelector("#leftbtn-h5").addEventListener("click", leftbHoodie4);
function leftbHoodie4() {
   if (h4 > 0) {
      h4--;
   } else {
      h4 = hoodie4.length - 1;
   }
   setHoodie4();
}
document.querySelector("#rightbtn-h5").addEventListener("click", rightbHoodie4);
function rightbHoodie4() {
   if (h4 < hoodie4.length - 1) {
      h4++;
   } else {
      h4 = 0;
   }
   setHoodie4();
}
document.querySelector("#cart-h5").addEventListener("click", carth5);
function carth5() {
   document.querySelector("#cart-h5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h5").addEventListener("click", buyh5);
function buyh5() {
   const buyHoodie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyHoodie <= 10 && buyHoodie > 0) {
      document.querySelector("#total-h5").textContent =
         "Total Price : " + "₹" + 879 * buyHoodie + "  only";
      document.querySelector("#total-h5").style.marginTop = "7px";
      alert("Thank ♥ you for Your Order");
   } else if (buyHoodie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter Wear boys Clothing- Hoodie 6
var hoodie5 = [
   "Images/kid-h6.jpg",
   "Images/kid-h6-2.jpg",
   "Images/kid-h6-3.jpg",
];
var h5 = 0;
document.hoodie6.src = "Images/kid-h6.jpg";
function setHoodie5() {
   document.hoodie6.src = hoodie5[h5];
}
setInterval(function autoSlider5() {
   if (h5 < hoodie5.length - 1) {
      h5++;
   } else {
      h5 = 0;
   }
   setHoodie5();
}, 10000);
document.querySelector("#leftbtn-h6").addEventListener("click", leftbHoodie5);
function leftbHoodie5() {
   if (h5 > 0) {
      h5--;
   } else {
      h5 = hoodie5.length - 1;
   }
   setHoodie5();
}
document.querySelector("#rightbtn-h6").addEventListener("click", rightbHoodie5);
function rightbHoodie5() {
   if (h5 < hoodie5.length - 1) {
      h5++;
   } else {
      h5 = 0;
   }
   setHoodie5();
}
document.querySelector("#cart-h6").addEventListener("click", carth6);
function carth6() {
   document.querySelector("#cart-h6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h6").addEventListener("click", buyh6);
function buyh6() {
   const buyHoodie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyHoodie <= 10 && buyHoodie > 0) {
      document.querySelector("#total-h6").textContent =
         "Total Price : " + "₹" + 979 * buyHoodie + "  only";
      document.querySelector("#total-h6").style.marginTop = "7px";
      alert("Thank ♥ you for Your Order");
   } else if (buyHoodie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Hoodie 6)
document.querySelector("#h6-type1").addEventListener("mouseover", h6Type1);
function h6Type1() {
   document.hoodie6.src = "Images/kid-h6-4.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Blue";
}
document.querySelector("#h6-type2").addEventListener("mouseover", h6Type2);
function h6Type2() {
   document.hoodie6.src = "Images/kid-h6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Beige";
}
// -mouseout (Hoodie 6)
document.querySelector("#h6-type1").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   h6Type2();
}
//Winter Wear boys Clothing- Hoodie 7
var hoodie6 = [
   "Images/kid-h7.jpg",
   "Images/kid-h7-2.jpg",
   "Images/kid-h7-3.jpg",
];
var h6 = 0;
document.hoodie7.src = "Images/kid-h7.jpg";
function setHoodie6() {
   document.hoodie7.src = hoodie6[h6];
}
setInterval(function autoSlider6() {
   if (h6 < hoodie6.length - 1) {
      h6++;
   } else {
      h6 = 0;
   }
   setHoodie6();
}, 10000);
document.querySelector("#leftbtn-h7").addEventListener("click", leftbHoodie6);
function leftbHoodie6() {
   if (h6 > 0) {
      h6--;
   } else {
      h6 = hoodie6.length - 1;
   }
   setHoodie6();
}
document.querySelector("#rightbtn-h7").addEventListener("click", rightbHoodie6);
function rightbHoodie6() {
   if (h6 < hoodie6.length - 1) {
      h6++;
   } else {
      h6 = 0;
   }
   setHoodie6();
}
document.querySelector("#cart-h7").addEventListener("click", carth7);
function carth7() {
   document.querySelector("#cart-h7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h7").addEventListener("click", buyh7);
function buyh7() {
   const buyHoodie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyHoodie <= 10 && buyHoodie > 0) {
      document.querySelector("#total-h7").textContent =
         "Total Price : " + "₹" + 899 * buyHoodie + "  only";
      document.querySelector("#total-h7").style.marginTop = "40px";
      alert("Thank ♥ you for Your Order");
   } else if (buyHoodie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter Wear boys Clothing- Hoodie 8
var hoodie7 = [
   "Images/kid-h8.jpg",
   "Images/kid-h8-2.jpg",
   "Images/kid-h8-3.jpg",
];
var h7 = 0;
document.hoodie8.src = "Images/kid-h8.jpg";
function setHoodie7() {
   document.hoodie8.src = hoodie7[h7];
}
setInterval(function autoSlider7() {
   if (h7 < hoodie7.length - 1) {
      h7++;
   } else {
      h7 = 0;
   }
   setHoodie7();
}, 10000);
document.querySelector("#leftbtn-h8").addEventListener("click", leftbHoodie7);
function leftbHoodie7() {
   if (h7 > 0) {
      h7--;
   } else {
      h7 = hoodie7.length - 1;
   }
   setHoodie7();
}
document.querySelector("#rightbtn-h8").addEventListener("click", rightbHoodie7);
function rightbHoodie7() {
   if (h7 < hoodie7.length - 1) {
      h7++;
   } else {
      h7 = 0;
   }
   setHoodie7();
}
document.querySelector("#cart-h8").addEventListener("click", carth8);
function carth8() {
   document.querySelector("#cart-h8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h8").addEventListener("click", buyh8);
function buyh8() {
   const buyHoodie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyHoodie <= 10 && buyHoodie > 0) {
      document.querySelector("#total-h8").textContent =
         "Total Price : " + "₹" + 899 * buyHoodie + "  only";
      document.querySelector("#total-h8").style.marginTop = "7px";
      alert("Thank ♥ you for Your Order");
   } else if (buyHoodie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Hoodie 8)
document.querySelector("#h8-type1").addEventListener("mouseover", h8Type1);
function h8Type1() {
   document.hoodie8.src = "Images/kid-h8.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Green";
}
document.querySelector("#h8-type2").addEventListener("mouseover", h8Type2);
function h8Type2() {
   document.hoodie8.src = "Images/kid-h8-4.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Red";
}
document.querySelector("#h8-type3").addEventListener("mouseover", h8Type3);
function h8Type3() {
   document.hoodie8.src = "Images/kid-h8-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Yellow";
}
document.querySelector("#h8-type4").addEventListener("mouseover", h8Type4);
function h8Type4() {
   document.hoodie8.src = "Images/kid-h8-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Black";
}
document.querySelector("#h8-type5").addEventListener("mouseover", h8Type5);
function h8Type5() {
   document.hoodie8.src = "Images/kid-h8-7.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Blue";
}
document.querySelector("#h8-type5").addEventListener("mouseover", h8Type5);
function h8Type5() {
   document.hoodie8.src = "Images/kid-h8-7.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Blue";
}
document.querySelector("#h8-type6").addEventListener("mouseover", h8Type6);
function h8Type6() {
   document.hoodie8.src = "Images/kid-h8-8.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Orange";
}
// -mouseout (Hoodie 8)
document.querySelector("#h8-type2").addEventListener("mouseout", type8Mout1);
function type8Mout1() {
   h8Type1();
}
document.querySelector("#h8-type3").addEventListener("mouseout", type8Mout1);
document.querySelector("#h8-type4").addEventListener("mouseout", type8Mout1);
document.querySelector("#h8-type5").addEventListener("mouseout", type8Mout1);
document.querySelector("#h8-type6").addEventListener("mouseout", type8Mout1);
//Winter Wear boys Clothing- Hoodie 9
var hoodie8 = [
   "Images/kid-h9.jpg",
   "Images/kid-h9-2.jpg",
   "Images/kid-h9-3.jpg",
];
var h8 = 0;
document.hoodie9.src = "Images/kid-h9.jpg";
function setHoodie8() {
   document.hoodie9.src = hoodie8[h8];
}
setInterval(function autoSlider8() {
   if (h8 < hoodie8.length - 1) {
      h8++;
   } else {
      h8 = 0;
   }
   setHoodie8();
}, 10000);
document.querySelector("#leftbtn-h9").addEventListener("click", leftbHoodie8);
function leftbHoodie8() {
   if (h8 > 0) {
      h8--;
   } else {
      h8 = hoodie8.length - 1;
   }
   setHoodie8();
}
document.querySelector("#rightbtn-h9").addEventListener("click", rightbHoodie8);
function rightbHoodie8() {
   if (h8 < hoodie8.length - 1) {
      h8++;
   } else {
      h8 = 0;
   }
   setHoodie8();
}
document.querySelector("#cart-h9").addEventListener("click", carth9);
function carth9() {
   document.querySelector("#cart-h9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h9").addEventListener("click", buyh9);
function buyh9() {
   const buyHoodie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyHoodie <= 10 && buyHoodie > 0) {
      document.querySelector("#total-h9").textContent =
         "Total Price : " + "₹" + 246 * buyHoodie + "  only";
      document.querySelector("#total-h9").style.marginTop = "7px";
      alert("Thank ♥ you for Your Order");
   } else if (buyHoodie === 0) {
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
