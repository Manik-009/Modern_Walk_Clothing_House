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
//Winter Wear - Long coat 1
var coat = [
   "Images/women-c1.jpg",
   "Images/women-c1-2.jpg",
   "Images/women-c1-3.jpg",
   "Images/women-c1-4.jpg",
];
var c = 0;
document.coat1.src = "Images/women-c1.jpg";
function setCoat() {
   document.coat1.src = coat[c];
}
setInterval(function autoSlider() {
   if (c < coat.length - 1) {
      c++;
   } else {
      c = 0;
   }
   setCoat();
}, 10000);
document.querySelector("#leftbtn-c1").addEventListener("click", leftbCoat);
function leftbCoat() {
   if (c > 0) {
      c--;
   } else {
      c = coat.length - 1;
   }
   setCoat();
}
document.querySelector("#rightbtn-c1").addEventListener("click", rightbCoat);
function rightbCoat() {
   if (c < coat.length - 1) {
      c++;
   } else {
      c = 0;
   }
   setCoat();
}
document.querySelector("#cart-c1").addEventListener("click", cartc1);
function cartc1() {
   document.querySelector("#cart-c1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-c1").addEventListener("click", buyc1);
function buyc1() {
   const buyCoat = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCoat <= 5 && buyCoat > 0) {
      document.querySelector("#total-c1").textContent =
         "Total Price : " + "₹" + 1839 * buyCoat + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCoat === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Long Coat 1)
document.querySelector("#c1-type1").addEventListener("mouseover", c1Type1);
function c1Type1() {
   document.coat1.src = "Images/women-c1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Grey";
}
document.querySelector("#c1-type2").addEventListener("mouseover", c1Type2);
function c1Type2() {
   document.coat1.src = "Images/women-c1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Sand";
}
// -mouseout (Long Coat 1)
document.querySelector("#c1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   c1Type1();
}
//Winter Wear - Long coat 2
var coat1 = [
   "Images/women-c2.jpg",
   "Images/women-c2-2.jpg",
   "Images/women-c2-3.jpg",
   "Images/women-c2-4.jpg",
];
var c1 = 0;
document.coat2.src = "Images/women-c2.jpg";
function setCoat1() {
   document.coat2.src = coat1[c1];
}
setInterval(function autoSlider1() {
   if (c1 < coat1.length - 1) {
      c1++;
   } else {
      c1 = 0;
   }
   setCoat1();
}, 10000);
document.querySelector("#leftbtn-c2").addEventListener("click", leftbCoat1);
function leftbCoat1() {
   if (c1 > 0) {
      c1--;
   } else {
      c1 = coat1.length - 1;
   }
   setCoat1();
}
document.querySelector("#rightbtn-c2").addEventListener("click", rightbCoat1);
function rightbCoat1() {
   if (c1 < coat1.length - 1) {
      c1++;
   } else {
      c1 = 0;
   }
   setCoat1();
}
document.querySelector("#cart-c2").addEventListener("click", cartc2);
function cartc2() {
   document.querySelector("#cart-c2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-c2").addEventListener("click", buyc2);
function buyc2() {
   const buyCoat = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCoat <= 5 && buyCoat > 0) {
      document.querySelector("#total-c2").textContent =
         "Total Price : " + "₹" + 430 * buyCoat + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCoat === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Long Coat 2)
document.querySelector("#c2-type1").addEventListener("mouseover", c2Type1);
function c2Type1() {
   document.coat2.src = "Images/women-c2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Pink";
}
document.querySelector("#c2-type2").addEventListener("mouseover", c2Type2);
function c2Type2() {
   document.coat2.src = "Images/women-c2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Brown";
}
// -mouseout (Long Coat 2)
document.querySelector("#c2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   c2Type1();
}
//Winter Wear - Long coat 3
var coat2 = [
   "Images/women-c3.jpg",
   "Images/women-c3-2.jpg",
   "Images/women-c3-3.jpg",
   "Images/women-c3-4.jpg",
];
var c2 = 0;
document.coat3.src = "Images/women-c3.jpg";
function setCoat2() {
   document.coat3.src = coat2[c2];
}
setInterval(function autoSlider2() {
   if (c2 < coat2.length - 1) {
      c2++;
   } else {
      c2 = 0;
   }
   setCoat2();
}, 10000);
document.querySelector("#leftbtn-c3").addEventListener("click", leftbCoat2);
function leftbCoat2() {
   if (c2 > 0) {
      c2--;
   } else {
      c2 = coat2.length - 1;
   }
   setCoat2();
}
document.querySelector("#rightbtn-c3").addEventListener("click", rightbCoat2);
function rightbCoat2() {
   if (c2 < coat2.length - 1) {
      c2++;
   } else {
      c2 = 0;
   }
   setCoat2();
}
document.querySelector("#cart-c3").addEventListener("click", cartc3);
function cartc3() {
   document.querySelector("#cart-c3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-c3").addEventListener("click", buyc3);
function buyc3() {
   const buyCoat = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCoat <= 5 && buyCoat > 0) {
      document.querySelector("#total-c3").textContent =
         "Total Price : " + "₹" + 2399 * buyCoat + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCoat === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
// out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of stock");
}
document.querySelector("#oos2").addEventListener("click", outOfStock);
document.querySelector("#oos3").addEventListener("click", outOfStock);
document.querySelector("#oos4").addEventListener("click", outOfStock);
//Winter Wear - Long coat 4
var coat3 = [
   "Images/women-c4.jpg",
   "Images/women-c4-2.jpg",
   "Images/women-c4-3.jpg",
   "Images/women-c4-4.jpg",
];
var c3 = 0;
document.coat4.src = "Images/women-c4.jpg";
function setCoat3() {
   document.coat4.src = coat3[c3];
}
setInterval(function autoSlider3() {
   if (c3 < coat3.length - 1) {
      c3++;
   } else {
      c3 = 0;
   }
   setCoat3();
}, 10000);
document.querySelector("#leftbtn-c4").addEventListener("click", leftbCoat3);
function leftbCoat3() {
   if (c3 > 0) {
      c3--;
   } else {
      c3 = coat3.length - 1;
   }
   setCoat3();
}
document.querySelector("#rightbtn-c4").addEventListener("click", rightbCoat3);
function rightbCoat3() {
   if (c3 < coat3.length - 1) {
      c3++;
   } else {
      c3 = 0;
   }
   setCoat3();
}
document.querySelector("#cart-c4").addEventListener("click", cartc4);
function cartc4() {
   document.querySelector("#cart-c4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-c4").addEventListener("click", buyc4);
function buyc4() {
   const buyCoat = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCoat <= 5 && buyCoat > 0) {
      document.querySelector("#total-c4").textContent =
         "Total Price : " + "₹" + 2649 * buyCoat + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCoat === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//Winter Wear - Long coat 5
var coat4 = [
   "Images/women-c5.jpg",
   "Images/women-c5-2.jpg",
   "Images/women-c5-3.jpg",
   "Images/women-c5-4.jpg",
];
var c4 = 0;
document.coat5.src = "Images/women-c5.jpg";
function setCoat4() {
   document.coat5.src = coat4[c4];
}
setInterval(function autoSlider4() {
   if (c4 < coat4.length - 1) {
      c4++;
   } else {
      c4 = 0;
   }
   setCoat4();
}, 10000);
document.querySelector("#leftbtn-c5").addEventListener("click", leftbCoat4);
function leftbCoat4() {
   if (c4 > 0) {
      c4--;
   } else {
      c4 = coat4.length - 1;
   }
   setCoat4();
}
document.querySelector("#rightbtn-c5").addEventListener("click", rightbCoat4);
function rightbCoat4() {
   if (c4 < coat4.length - 1) {
      c4++;
   } else {
      c4 = 0;
   }
   setCoat4();
}
document.querySelector("#cart-c5").addEventListener("click", cartc5);
function cartc5() {
   document.querySelector("#cart-c5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-c5").addEventListener("click", buyc5);
function buyc5() {
   const buyCoat = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCoat <= 5 && buyCoat > 0) {
      document.querySelector("#total-c5").textContent =
         "Total Price : " + "₹" + 2519 * buyCoat + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCoat === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//Winter Wear - Long coat 6
var coat5 = [
   "Images/women-c6.jpg",
   "Images/women-c6-2.jpg",
   "Images/women-c6-3.jpg",
   "Images/women-c6-4.jpg",
];
var c5 = 0;
document.coat6.src = "Images/women-c6.jpg";
function setCoat5() {
   document.coat6.src = coat5[c5];
}
setInterval(function autoSlider5() {
   if (c5 < coat5.length - 1) {
      c5++;
   } else {
      c5 = 0;
   }
   setCoat5();
}, 10000);
document.querySelector("#leftbtn-c6").addEventListener("click", leftbCoat5);
function leftbCoat5() {
   if (c5 > 0) {
      c5--;
   } else {
      c5 = coat5.length - 1;
   }
   setCoat5();
}
document.querySelector("#rightbtn-c6").addEventListener("click", rightbCoat5);
function rightbCoat5() {
   if (c5 < coat5.length - 1) {
      c5++;
   } else {
      c5 = 0;
   }
   setCoat5();
}
document.querySelector("#cart-c6").addEventListener("click", cartc6);
function cartc6() {
   document.querySelector("#cart-c6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-c6").addEventListener("click", buyc6);
function buyc6() {
   const buyCoat = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCoat <= 5 && buyCoat > 0) {
      document.querySelector("#total-c6").textContent =
         "Total Price : " + "₹" + 3250 * buyCoat + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCoat === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//Winter Wear - Long coat 7
var coat6 = [
   "Images/women-c7.jpg",
   "Images/women-c7-2.jpg",
   "Images/women-c7-3.jpg",
   "Images/women-c7-4.jpg",
];
var c6 = 0;
document.coat7.src = "Images/women-c7.jpg";
function setCoat6() {
   document.coat7.src = coat6[c6];
}
setInterval(function autoSlider6() {
   if (c6 < coat6.length - 1) {
      c6++;
   } else {
      c6 = 0;
   }
   setCoat6();
}, 10000);
document.querySelector("#leftbtn-c7").addEventListener("click", leftbCoat6);
function leftbCoat6() {
   if (c6 > 0) {
      c6--;
   } else {
      c6 = coat6.length - 1;
   }
   setCoat6();
}
document.querySelector("#rightbtn-c7").addEventListener("click", rightbCoat6);
function rightbCoat6() {
   if (c6 < coat6.length - 1) {
      c6++;
   } else {
      c6 = 0;
   }
   setCoat6();
}
document.querySelector("#cart-c7").addEventListener("click", cartc7);
function cartc7() {
   document.querySelector("#cart-c7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-c7").addEventListener("click", buyc7);
function buyc7() {
   const buyCoat = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCoat <= 5 && buyCoat > 0) {
      document.querySelector("#total-c7").textContent =
         "Total Price : " + "₹" + 2199 * buyCoat + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCoat === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//Winter Wear - Long coat 8
var coat7 = [
   "Images/women-c8.jpg",
   "Images/women-c8-2.jpg",
   "Images/women-c8-3.jpg",
   "Images/women-c8-4.jpg",
];
var c7 = 0;
document.coat8.src = "Images/women-c8.jpg";
function setCoat7() {
   document.coat8.src = coat7[c7];
}
setInterval(function autoSlider7() {
   if (c7 < coat7.length - 1) {
      c7++;
   } else {
      c7 = 0;
   }
   setCoat7();
}, 10000);
document.querySelector("#leftbtn-c8").addEventListener("click", leftbCoat7);
function leftbCoat7() {
   if (c7 > 0) {
      c7--;
   } else {
      c7 = coat7.length - 1;
   }
   setCoat7();
}
document.querySelector("#rightbtn-c8").addEventListener("click", rightbCoat7);
function rightbCoat7() {
   if (c7 < coat7.length - 1) {
      c7++;
   } else {
      c7 = 0;
   }
   setCoat7();
}
document.querySelector("#cart-c8").addEventListener("click", cartc8);
function cartc8() {
   document.querySelector("#cart-c8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-c8").addEventListener("click", buyc8);
function buyc8() {
   const buyCoat = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCoat <= 5 && buyCoat > 0) {
      document.querySelector("#total-c8").textContent =
         "Total Price : " + "₹" + 4256 * buyCoat + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCoat === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
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
