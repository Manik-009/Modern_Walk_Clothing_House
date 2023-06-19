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
//size charts
document.querySelector("#show-schart").addEventListener("click", showSch);
function showSch() {
   if (document.querySelector("#tbl").style.display != "block") {
      document.querySelector("#tbl").style.display = "block";
      document.querySelector("#tbl").style.animation = "sizeCh 1s ease-in .01s";
   } else {
      document.querySelector("#tbl").style.display = "none";
   }
}
//Winter wear - Hoodie 1
var hoodie = [
   "Images/men-h1.jpeg",
   "Images/men-h1-2.jpeg",
   "Images/men-h1-3.jpeg",
   "Images/men-h1-4.jpeg",
];
var h = 0;
document.hoodie1.src = "Images/men-h1.jpeg";
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
document.querySelector("#cart-h1").addEventListener("click", cartHoodie1);
function cartHoodie1() {
   document.querySelector("#cart-h1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h1").addEventListener("click", buyHoodie1);
function buyHoodie1() {
   const buyHoodie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyHoodie <= 10 && buyHoodie > 0) {
      document.querySelector("#total-h1").textContent =
         "Total Price : " + "₹" + 759 * buyHoodie + "  only";
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
   document.hoodie1.src = "Images/men-h1.jpeg";
   document.querySelector("#color-name").innerHTML = " Color:  Black";
}
document.querySelector("#h1-type2").addEventListener("mouseover", h1Type2);
function h1Type2() {
   document.hoodie1.src = "Images/men-h1-5.jpeg";
   document.querySelector("#color-name").innerHTML = " Color: Olive Green";
}
// -mouseout from color images(Hoodie 1)
document.querySelector("#h1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   h1Type1();
}
//Winter wear - Hoodie 2
var hoodie1 = [
   "Images/men-h2.jpg",
   "Images/men-h2-2.jpg",
   "Images/men-h2-3.jpg",
   "Images/men-h2-4.jpg",
];
var h1 = 0;
document.hoodie2.src = "Images/men-h2.jpg";
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
document.querySelector("#cart-h2").addEventListener("click", cartHoodie2);
function cartHoodie2() {
   document.querySelector("#cart-h2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h2").addEventListener("click", buyHoodie2);
function buyHoodie2() {
   const buyHoodie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyHoodie <= 10 && buyHoodie > 0) {
      document.querySelector("#total-h2").textContent =
         "Total Price : " + "₹" + 599 * buyHoodie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyHoodie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter wear - Hoodie 3
var hoodie2 = [
   "Images/men-h3.jpg",
   "Images/men-h3-2.jpg",
   "Images/men-h3-3.jpg",
   "Images/men-h3-4.jpg",
];
var h2 = 0;
document.hoodie3.src = "Images/men-h3.jpg";
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
document.querySelector("#cart-h3").addEventListener("click", cartHoodie3);
function cartHoodie3() {
   document.querySelector("#cart-h3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h3").addEventListener("click", buyHoodie3);
function buyHoodie3() {
   const buyJacket = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyJacket <= 10 && buyJacket > 0) {
      document.querySelector("#total-h3").textContent =
         "Total Price : " + "₹" + 1199 * buyJacket + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyJacket === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter wear - Hoodie 4
var hoodie3 = [
   "Images/men-h4.jpg",
   "Images/men-h4-2.jpg",
   "Images/men-h4-3.jpg",
   "Images/men-h4-4.jpg",
];
var h3 = 0;
document.hoodie4.src = "Images/men-h4.jpg";
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
document.querySelector("#cart-h4").addEventListener("click", cartHoodie4);
function cartHoodie4() {
   document.querySelector("#cart-h4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h4").addEventListener("click", buyHoodie4);
function buyHoodie4() {
   const buyHoodie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyHoodie <= 10 && buyHoodie > 0) {
      document.querySelector("#total-h4").textContent =
         "Total Price : " + "₹" + 338 * buyHoodie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyHoodie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter wear - Hoodie 5
var hoodie4 = [
   "Images/men-h5.jpg",
   "Images/men-h5-2.jpg",
   "Images/men-h5-3.jpg",
   "Images/men-h5-4.jpg",
];
var h4 = 0;
document.hoodie5.src = "Images/men-h5.jpg";
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
document.querySelector("#cart-h5").addEventListener("click", cartHoodie5);
function cartHoodie5() {
   document.querySelector("#cart-h5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h5").addEventListener("click", buyHoodie5);
function buyHoodie5() {
   const buyHoodie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyHoodie <= 10 && buyHoodie > 0) {
      document.querySelector("#total-h5").textContent =
         "Total Price : " + "₹" + 2335 * buyHoodie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyHoodie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter wear - Hoodie 6
var hoodie5 = [
   "Images/men-h6.jpg",
   "Images/men-h6-2.jpg",
   "Images/men-h6-3.jpg",
   "Images/men-h6-4.jpg",
];
var h5 = 0;
document.hoodie6.src = "Images/men-h6.jpg";
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
document.querySelector("#cart-h6").addEventListener("click", cartHoodie6);
function cartHoodie6() {
   document.querySelector("#cart-h6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h6").addEventListener("click", buyHoodie6);
function buyHoodie6() {
   const buyHoodie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyHoodie <= 10 && buyHoodie > 0) {
      document.querySelector("#total-h6").textContent =
         "Total Price : " + "₹" + 699 * buyHoodie + "  only";
      document.querySelector("#total-h6").style.marginTop = "15px";
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
   document.hoodie6.src = "Images/men-h6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Cream";
}
document.querySelector("#h6-type2").addEventListener("mouseover", h6Type2);
function h6Type2() {
   document.hoodie6.src = "Images/men-h6-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Maroon";
}
document.querySelector("#h6-type3").addEventListener("mouseover", h6Type3);
function h6Type3() {
   document.hoodie6.src = "Images/men-h6-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Blue";
}
document.querySelector("#h6-type4").addEventListener("mouseover", h6Type4);
function h6Type4() {
   document.hoodie6.src = "Images/men-h6-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Green";
}
document.querySelector("#h6-type5").addEventListener("mouseover", h6Type5);
function h6Type5() {
   document.hoodie6.src = "Images/men-h6-8.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black";
}
document.querySelector("#h6-type6").addEventListener("mouseover", h6Type6);
function h6Type6() {
   document.hoodie6.src = "Images/men-h6-9.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Teal Green";
}
document.querySelector("#h6-type7").addEventListener("mouseover", h6Type7);
function h6Type7() {
   document.hoodie6.src = "Images/men-h6-10.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Forest Green";
}
// -mouseout from color images(hoodie 6)
document.querySelector("#h6-type2").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   h6Type1();
}
document.querySelector("#h6-type3").addEventListener("mouseout", type6Mout1);
document.querySelector("#h6-type4").addEventListener("mouseout", type6Mout1);
document.querySelector("#h6-type5").addEventListener("mouseout", type6Mout1);
document.querySelector("#h6-type6").addEventListener("mouseout", type6Mout1);
document.querySelector("#h6-type7").addEventListener("mouseout", type6Mout1);
//Winter wear - Hoodie 7
var hoodie6 = [
   "Images/men-h7.jpg",
   "Images/men-h7-2.jpg",
   "Images/men-h7-3.jpg",
   "Images/men-h7-4.jpg",
];
var h6 = 0;
document.hoodie7.src = "Images/men-h7.jpg";
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
document.querySelector("#cart-h7").addEventListener("click", cartHoodie7);
function cartHoodie7() {
   document.querySelector("#cart-h7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-h7").addEventListener("click", buyHoodie7);
function buyHoodie7() {
   const buyHoodie = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyHoodie <= 10 && buyHoodie > 0) {
      document.querySelector("#total-h7").textContent =
         "Total Price : " + "₹" + 399 * buyHoodie + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyHoodie === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Hoodie 7)
document.querySelector("#h7-type1").addEventListener("mouseover", h7Type1);
function h7Type1() {
   document.hoodie7.src = "Images/men-h7.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Red";
}
document.querySelector("#h7-type2").addEventListener("mouseover", h7Type2);
function h7Type2() {
   document.hoodie7.src = "Images/men-h7-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: White";
}
document.querySelector("#h7-type3").addEventListener("mouseover", h7Type3);
function h7Type3() {
   document.hoodie7.src = "Images/men-h7-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Yellow";
}
document.querySelector("#h7-type4").addEventListener("mouseover", h7Type4);
function h7Type4() {
   document.hoodie7.src = "Images/men-h7-7.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Black";
}
// -mouseout from color images(hoodie 7)
document.querySelector("#h7-type2").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   h7Type1();
}
document.querySelector("#h7-type3").addEventListener("mouseout", type7Mout1);
document.querySelector("#h7-type4").addEventListener("mouseout", type7Mout1);
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
