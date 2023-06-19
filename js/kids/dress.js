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
//Girls Clothing- Dress 1
var dress = [
   "Images/kid-d1.jpg",
   "Images/kid-d1-2.jpg",
   "Images/kid-d1-3.jpg",
   "Images/kid-d1-4.jpg",
];
var d = 0;
document.dress1.src = "Images/kid-d1.jpg";
function setDress() {
   document.dress1.src = dress[d];
}
setInterval(function autoSlider() {
   if (d < dress.length - 1) {
      d++;
   } else {
      d = 0;
   }
   setDress();
}, 10000);
document.querySelector("#leftbtn-d1").addEventListener("click", leftbDress);
function leftbDress() {
   if (d > 0) {
      d--;
   } else {
      d = dress.length - 1;
   }
   setDress();
}
document.querySelector("#rightbtn-d1").addEventListener("click", rightbDress);
function rightbDress() {
   if (d < dress.length - 1) {
      d++;
   } else {
      d = 0;
   }
   setDress();
}
document.querySelector("#cart-d1").addEventListener("click", cartD1);
function cartD1() {
   document.querySelector("#cart-d1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-d1").addEventListener("click", buyD1);
function buyD1() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-d1").textContent =
         "Total Price : " + "₹" + 476 * buyTshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Dress 1)
document.querySelector("#d1-type1").addEventListener("mouseover", d1Type1);
function d1Type1() {
   document.dress1.src = "Images/kid-d1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Pink Print";
}
document.querySelector("#d1-type2").addEventListener("mouseover", d1Type2);
function d1Type2() {
   document.dress1.src = "Images/kid-d1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Sky Blue Print";
}
document.querySelector("#d1-type3").addEventListener("mouseover", d1Type3);
function d1Type3() {
   document.dress1.src = "Images/kid-d1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Aqua Print";
}
document.querySelector("#d1-type4").addEventListener("mouseover", d1Type4);
function d1Type4() {
   document.dress1.src = "Images/kid-d1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Green Print";
}
document.querySelector("#d1-type5").addEventListener("mouseover", d1Type5);
function d1Type5() {
   document.dress1.src = "Images/kid-d1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black Print";
}
document.querySelector("#d1-type6").addEventListener("mouseover", d1Type6);
function d1Type6() {
   document.dress1.src = "Images/kid-d1-9.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Navy Print";
}
// -mouseout (Dress 1)
document.querySelector("#d1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   d1Type1();
}
document.querySelector("#d1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#d1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#d1-type5").addEventListener("mouseout", type1Mout1);
document.querySelector("#d1-type6").addEventListener("mouseout", type1Mout1);
//Girls Clothing- Dress 2
var dress1 = [
   "Images/kid-d2.jpg",
   "Images/kid-d2-2.jpg",
   "Images/kid-d2-3.jpg",
   "Images/kid-d2-4.jpg",
];
var d1 = 0;
document.dress2.src = "Images/kid-d2.jpg";
function setDress1() {
   document.dress2.src = dress1[d1];
}
setInterval(function autoSlider1() {
   if (d1 < dress1.length - 1) {
      d1++;
   } else {
      d1 = 0;
   }
   setDress1();
}, 10000);
document.querySelector("#leftbtn-d2").addEventListener("click", leftbDress1);
function leftbDress1() {
   if (d1 > 0) {
      d1--;
   } else {
      d1 = dress1.length - 1;
   }
   setDress1();
}
document.querySelector("#rightbtn-d2").addEventListener("click", rightbDress1);
function rightbDress1() {
   if (d1 < dress1.length - 1) {
      d1++;
   } else {
      d1 = 0;
   }
   setDress1();
}
document.querySelector("#cart-d2").addEventListener("click", cartD2);
function cartD2() {
   document.querySelector("#cart-d2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-d2").addEventListener("click", buyD2);
function buyD2() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-d2").textContent =
         "Total Price : " + "₹" + 320 * buyTshirt + "  only";
      document.querySelector("#total-d2").style.marginTop = "40px";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Girls Clothing- Dress 3
var dress2 = [
   "Images/kid-d3.jpg",
   "Images/kid-d3-2.jpg",
   "Images/kid-d3-3.jpg",
   "Images/kid-d3-4.jpg",
];
var d2 = 0;
document.dress3.src = "Images/kid-d3.jpg";
function setDress2() {
   document.dress3.src = dress2[d2];
}
setInterval(function autoSlider2() {
   if (d2 < dress2.length - 1) {
      d2++;
   } else {
      d2 = 0;
   }
   setDress2();
}, 10000);
document.querySelector("#leftbtn-d3").addEventListener("click", leftbDress2);
function leftbDress2() {
   if (d2 > 0) {
      d2--;
   } else {
      d2 = dress2.length - 1;
   }
   setDress2();
}
document.querySelector("#rightbtn-d3").addEventListener("click", rightbDress2);
function rightbDress2() {
   if (d2 < dress2.length - 1) {
      d2++;
   } else {
      d2 = 0;
   }
   setDress2();
}
document.querySelector("#cart-d3").addEventListener("click", cartD3);
function cartD3() {
   document.querySelector("#cart-d3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-d3").addEventListener("click", buyD3);
function buyD3() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-d3").textContent =
         "Total Price : " + "₹" + 499 * buyTshirt + "  only";
      document.querySelector("#total-d3").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Dress 3)
document.querySelector("#d3-type1").addEventListener("mouseover", d3Type1);
function d3Type1() {
   document.dress3.src = "Images/kid-d3.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Maroon";
}
document.querySelector("#d3-type2").addEventListener("mouseover", d3Type2);
function d3Type2() {
   document.dress3.src = "Images/kid-d3-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black";
}
// -mouseout (Dress 3)
document.querySelector("#d3-type2").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   d3Type1();
}
//Girls Clothing- Dress 4
var dress3 = [
   "Images/kid-d4.jpg",
   "Images/kid-d4-2.jpg",
   "Images/kid-d4-3.jpg",
   "Images/kid-d4-4.jpg",
];
var d3 = 0;
document.dress4.src = "Images/kid-d4.jpg";
function setDress3() {
   document.dress4.src = dress3[d3];
}
setInterval(function autoSlider3() {
   if (d3 < dress3.length - 1) {
      d3++;
   } else {
      d3 = 0;
   }
   setDress3();
}, 10000);
document.querySelector("#leftbtn-d4").addEventListener("click", leftbDress3);
function leftbDress3() {
   if (d3 > 0) {
      d3--;
   } else {
      d3 = dress3.length - 1;
   }
   setDress3();
}
document.querySelector("#rightbtn-d4").addEventListener("click", rightbDress3);
function rightbDress3() {
   if (d3 < dress3.length - 1) {
      d3++;
   } else {
      d3 = 0;
   }
   setDress3();
}
document.querySelector("#cart-d4").addEventListener("click", cartD4);
function cartD4() {
   document.querySelector("#cart-d4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-d4").addEventListener("click", buyD4);
function buyD4() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 5 && buyTshirt > 0) {
      document.querySelector("#total-d4").textContent =
         "Total Price : " + "₹" + 430 * buyTshirt + "  only";
      document.querySelector("#total-d4").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 5 pieces left !!!");
   }
}
//Girls Clothing- Dress 5
var dress4 = [
   "Images/kid-d5.jpg",
   "Images/kid-d5-2.jpg",
   "Images/kid-d5-3.jpg",
   "Images/kid-d5-4.jpg",
];
var d4 = 0;
document.dress5.src = "Images/kid-d5.jpg";
function setDress4() {
   document.dress5.src = dress4[d4];
}
setInterval(function autoSlider4() {
   if (d4 < dress4.length - 1) {
      d4++;
   } else {
      d4 = 0;
   }
   setDress4();
}, 10000);
document.querySelector("#leftbtn-d5").addEventListener("click", leftbDress4);
function leftbDress4() {
   if (d4 > 0) {
      d4--;
   } else {
      d4 = dress4.length - 1;
   }
   setDress4();
}
document.querySelector("#rightbtn-d5").addEventListener("click", rightbDress4);
function rightbDress4() {
   if (d4 < dress4.length - 1) {
      d4++;
   } else {
      d4 = 0;
   }
   setDress4();
}
document.querySelector("#cart-d5").addEventListener("click", cartD5);
function cartD5() {
   document.querySelector("#cart-d5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-d5").addEventListener("click", buyD5);
function buyD5() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-d5").textContent =
         "Total Price : " + "₹" + 530 * buyTshirt + "  only";
      document.querySelector("#total-d5").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Girls Clothing- Dress 6
var dress5 = [
   "Images/kid-d6.jpg",
   "Images/kid-d6-2.jpg",
   "Images/kid-d6-3.jpg",
   "Images/kid-d6-4.jpg",
];
var d5 = 0;
document.dress6.src = "Images/kid-d6.jpg";
function setDress5() {
   document.dress6.src = dress5[d5];
}
setInterval(function autoSlider5() {
   if (d5 < dress5.length - 1) {
      d5++;
   } else {
      d5 = 0;
   }
   setDress5();
}, 10000);
document.querySelector("#leftbtn-d6").addEventListener("click", leftbDress5);
function leftbDress5() {
   if (d5 > 0) {
      d5--;
   } else {
      d5 = dress5.length - 1;
   }
   setDress5();
}
document.querySelector("#rightbtn-d6").addEventListener("click", rightbDress5);
function rightbDress5() {
   if (d5 < dress5.length - 1) {
      d5++;
   } else {
      d5 = 0;
   }
   setDress5();
}
document.querySelector("#cart-d6").addEventListener("click", cartD6);
function cartD6() {
   document.querySelector("#cart-d6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-d6").addEventListener("click", buyD6);
function buyD6() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-d6").textContent =
         "Total Price : " + "₹" + 768 * buyTshirt + "  only";
      document.querySelector("#total-d6").style.marginTop = "10px";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Girls Clothing- Dress 7
var dress6 = [
   "Images/kid-d7.jpg",
   "Images/kid-d7-2.jpg",
   "Images/kid-d7-3.jpg",
   "Images/kid-d7-4.jpg",
];
var d6 = 0;
document.dress7.src = "Images/kid-d7.jpg";
function setDress6() {
   document.dress7.src = dress6[d6];
}
setInterval(function autoSlider6() {
   if (d6 < dress6.length - 1) {
      d6++;
   } else {
      d6 = 0;
   }
   setDress6();
}, 10000);
document.querySelector("#leftbtn-d7").addEventListener("click", leftbDress6);
function leftbDress6() {
   if (d6 > 0) {
      d6--;
   } else {
      d6 = dress6.length - 1;
   }
   setDress6();
}
document.querySelector("#rightbtn-d7").addEventListener("click", rightbDress6);
function rightbDress6() {
   if (d6 < dress6.length - 1) {
      d6++;
   } else {
      d6 = 0;
   }
   setDress6();
}
document.querySelector("#cart-d7").addEventListener("click", cartD7);
function cartD7() {
   document.querySelector("#cart-d7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-d7").addEventListener("click", buyD7);
function buyD7() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-d7").textContent =
         "Total Price : " + "₹" + 369 * buyTshirt + "  only";
      document.querySelector("#total-d7").style.marginTop = "10px";
      alert("Thank ♥ you for Your Order");
   } else if (buyTshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Girls Clothing- Dress 8
var dress7 = [
   "Images/kid-d8.jpg",
   "Images/kid-d8-2.jpg",
   "Images/kid-d8-3.jpg",
   "Images/kid-d8-4.jpg",
];
var d7 = 0;
document.dress8.src = "Images/kid-d8.jpg";
function setDress7() {
   document.dress8.src = dress7[d7];
}
setInterval(function autoSlider7() {
   if (d7 < dress7.length - 1) {
      d7++;
   } else {
      d7 = 0;
   }
   setDress7();
}, 10000);
document.querySelector("#leftbtn-d8").addEventListener("click", leftbDress7);
function leftbDress7() {
   if (d7 > 0) {
      d7--;
   } else {
      d7 = dress7.length - 1;
   }
   setDress7();
}
document.querySelector("#rightbtn-d8").addEventListener("click", rightbDress7);
function rightbDress7() {
   if (d7 < dress7.length - 1) {
      d7++;
   } else {
      d7 = 0;
   }
   setDress7();
}
document.querySelector("#cart-d8").addEventListener("click", cartD8);
function cartD8() {
   document.querySelector("#cart-d8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-d8").addEventListener("click", buyD8);
function buyD8() {
   const buyTshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTshirt <= 10 && buyTshirt > 0) {
      document.querySelector("#total-d8").textContent =
         "Total Price : " + "₹" + 845 * buyTshirt + "  only";
      document.querySelector("#total-d8").style.marginTop = "40px";
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
