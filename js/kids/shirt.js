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
//Boys Clothing- Shirt1
var shirt = [
   "Images/kid-s1.png",
   "Images/kid-s1-2.jpeg",
   "Images/kid-s1-3.jpeg",
   "Images/kid-s1-4.jpeg",
];
var s = 0;
document.shirt1.src = "Images/kid-s1.png";
function setShirt() {
   document.shirt1.src = shirt[s];
}
setInterval(function autoSlider() {
   if (s < shirt.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setShirt();
}, 10000);
document.querySelector("#leftbtn-s1").addEventListener("click", leftbShirt);
function leftbShirt() {
   if (s > 0) {
      s--;
   } else {
      s = shirt.length - 1;
   }
   setShirt();
}
document.querySelector("#rightbtn-s1").addEventListener("click", rightbShirt);
function rightbShirt() {
   if (s < shirt.length - 1) {
      s++;
   } else {
      s = 0;
   }
   setShirt();
}
document.querySelector("#cart-s1").addEventListener("click", cartS1);
function cartS1() {
   document.querySelector("#cart-s1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s1").addEventListener("click", buyS1);
function buyS1() {
   const buyShirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShirt <= 10 && buyShirt > 0) {
      document.querySelector("#total-s1").textContent =
         "Total Price : " + "₹" + 501 * buyShirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Boys Clothing- Shirt2
var shirt1 = [
   "Images/kid-s2.png",
   "Images/kid-s2-2.jpeg",
   "Images/kid-s2-3.jpeg",
   "Images/kid-s2-4.jpeg",
];
var s1 = 0;
document.shirt2.src = "Images/kid-s2.png";
function setShirt1() {
   document.shirt2.src = shirt1[s1];
}
setInterval(function autoSlider1() {
   if (s1 < shirt1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setShirt1();
}, 10000);
document.querySelector("#leftbtn-s2").addEventListener("click", leftbShirt1);
function leftbShirt1() {
   if (s1 > 0) {
      s1--;
   } else {
      s1 = shirt1.length - 1;
   }
   setShirt1();
}
document.querySelector("#rightbtn-s2").addEventListener("click", rightbShirt1);
function rightbShirt1() {
   if (s1 < shirt1.length - 1) {
      s1++;
   } else {
      s1 = 0;
   }
   setShirt1();
}
document.querySelector("#cart-s2").addEventListener("click", cartS2);
function cartS2() {
   document.querySelector("#cart-s2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s2").addEventListener("click", buyS2);
function buyS2() {
   const buyShirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShirt <= 7 && buyShirt > 0) {
      document.querySelector("#total-s2").textContent =
         "Total Price : " + "₹" + 516 * buyShirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShirt === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 7 pieces left !!!");
   }
}
//Boys Clothing- Shirt3
var shirt2 = [
   "Images/kid-s3.jpeg",
   "Images/kid-s3-2.jpeg",
   "Images/kid-s3-3.jpeg",
   "Images/kid-s3-4.jpeg",
];
var s2 = 0;
document.shirt3.src = "Images/kid-s3.jpeg";
function setShirt2() {
   document.shirt3.src = shirt2[s2];
}
setInterval(function autoSlider2() {
   if (s2 < shirt2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setShirt2();
}, 10000);
document.querySelector("#leftbtn-s3").addEventListener("click", leftbShirt2);
function leftbShirt2() {
   if (s2 > 0) {
      s2--;
   } else {
      s2 = shirt2.length - 1;
   }
   setShirt2();
}
document.querySelector("#rightbtn-s3").addEventListener("click", rightbShirt2);
function rightbShirt2() {
   if (s2 < shirt2.length - 1) {
      s2++;
   } else {
      s2 = 0;
   }
   setShirt2();
}
document.querySelector("#cart-s3").addEventListener("click", cartS3);
function cartS3() {
   document.querySelector("#cart-s3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s3").addEventListener("click", buyS3);
function buyS3() {
   const buyShirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShirt <= 5 && buyShirt > 0) {
      document.querySelector("#total-s3").textContent =
         "Total Price : " + "₹" + 529 * buyShirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShirt === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 5 pieces left !!!");
   }
}
//Boys Clothing- Shirt4
var shirt3 = [
   "Images/kid-s4.png",
   "Images/kid-s4-2.jpeg",
   "Images/kid-s4-3.jpeg",
   "Images/kid-s4-4.jpeg",
];
var s3 = 0;
document.shirt4.src = "Images/kid-s4.png";
function setShirt3() {
   document.shirt4.src = shirt3[s3];
}
setInterval(function autoSlider3() {
   if (s3 < shirt3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setShirt3();
}, 10000);
document.querySelector("#leftbtn-s4").addEventListener("click", leftbShirt3);
function leftbShirt3() {
   if (s3 > 0) {
      s3--;
   } else {
      s3 = shirt3.length - 1;
   }
   setShirt3();
}
document.querySelector("#rightbtn-s4").addEventListener("click", rightbShirt3);
function rightbShirt3() {
   if (s3 < shirt3.length - 1) {
      s3++;
   } else {
      s3 = 0;
   }
   setShirt3();
}
document.querySelector("#cart-s4").addEventListener("click", cartS4);
function cartS4() {
   document.querySelector("#cart-s4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s4").addEventListener("click", buyS4);
function buyS4() {
   const buyShirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShirt <= 10 && buyShirt > 0) {
      document.querySelector("#total-s4").textContent =
         "Total Price : " + "₹" + 379 * buyShirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Boys Clothing- Shirt5
var shirt4 = [
   "Images/kid-s5.png",
   "Images/kid-s5-2.jpeg",
   "Images/kid-s5-3.jpeg",
   "Images/kid-s5-4.jpeg",
];
var s4 = 0;
document.shirt5.src = "Images/kid-s5.png";
function setShirt4() {
   document.shirt5.src = shirt4[s4];
}
setInterval(function autoSlider4() {
   if (s4 < shirt4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setShirt4();
}, 10000);
document.querySelector("#leftbtn-s5").addEventListener("click", leftbShirt4);
function leftbShirt4() {
   if (s4 > 0) {
      s4--;
   } else {
      s4 = shirt4.length - 1;
   }
   setShirt4();
}
document.querySelector("#rightbtn-s5").addEventListener("click", rightbShirt4);
function rightbShirt4() {
   if (s4 < shirt4.length - 1) {
      s4++;
   } else {
      s4 = 0;
   }
   setShirt4();
}
document.querySelector("#cart-s5").addEventListener("click", cartS5);
function cartS5() {
   document.querySelector("#cart-s5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s5").addEventListener("click", buyS5);
function buyS5() {
   const buyShirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShirt <= 10 && buyShirt > 0) {
      document.querySelector("#total-s5").textContent =
         "Total Price : " + "₹" + 501 * buyShirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Boys Clothing- Shirt6
var shirt5 = [
   "Images/kid-s6.png",
   "Images/kid-s6-2.jpeg",
   "Images/kid-s6-3.jpeg",
   "Images/kid-s6-4.jpeg",
];
var s5 = 0;
document.shirt6.src = "Images/kid-s6.png";
function setShirt5() {
   document.shirt6.src = shirt5[s5];
}
setInterval(function autoSlider5() {
   if (s5 < shirt5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setShirt5();
}, 10000);
document.querySelector("#leftbtn-s6").addEventListener("click", leftbShirt5);
function leftbShirt5() {
   if (s5 > 0) {
      s5--;
   } else {
      s5 = shirt5.length - 1;
   }
   setShirt5();
}
document.querySelector("#rightbtn-s6").addEventListener("click", rightbShirt5);
function rightbShirt5() {
   if (s5 < shirt5.length - 1) {
      s5++;
   } else {
      s5 = 0;
   }
   setShirt5();
}
document.querySelector("#cart-s6").addEventListener("click", cartS6);
function cartS6() {
   document.querySelector("#cart-s6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s6").addEventListener("click", buyS6);
function buyS6() {
   const buyShirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShirt <= 10 && buyShirt > 0) {
      document.querySelector("#total-s6").textContent =
         "Total Price : " + "₹" + 559 * buyShirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Boys Clothing- Shirt7
var shirt6 = [
   "Images/kid-s7.png",
   "Images/kid-s7-2.jpeg",
   "Images/kid-s7-3.jpeg",
   "Images/kid-s7-4.jpeg",
];
var s6 = 0;
document.shirt7.src = "Images/kid-s7.png";
function setShirt6() {
   document.shirt7.src = shirt6[s6];
}
setInterval(function autoSlider6() {
   if (s6 < shirt6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setShirt6();
}, 10000);
document.querySelector("#leftbtn-s7").addEventListener("click", leftbShirt6);
function leftbShirt6() {
   if (s6 > 0) {
      s6--;
   } else {
      s6 = shirt6.length - 1;
   }
   setShirt6();
}
document.querySelector("#rightbtn-s7").addEventListener("click", rightbShirt6);
function rightbShirt6() {
   if (s6 < shirt6.length - 1) {
      s6++;
   } else {
      s6 = 0;
   }
   setShirt6();
}
document.querySelector("#cart-s7").addEventListener("click", cartS7);
function cartS7() {
   document.querySelector("#cart-s7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s7").addEventListener("click", buyS7);
function buyS7() {
   const buyShirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShirt <= 10 && buyShirt > 0) {
      document.querySelector("#total-s7").textContent =
         "Total Price : " + "₹" + 339 * buyShirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Boys Clothing- Shirt8
var shirt7 = [
   "Images/kid-s8.png",
   "Images/kid-s8-2.jpeg",
   "Images/kid-s8-3.jpeg",
   "Images/kid-s8-4.jpeg",
];
var s7 = 0;
document.shirt8.src = "Images/kid-s8.png";
function setShirt7() {
   document.shirt8.src = shirt7[s7];
}
setInterval(function autoSlider7() {
   if (s7 < shirt7.length - 1) {
      s7++;
   } else {
      s7 = 0;
   }
   setShirt7();
}, 10000);
document.querySelector("#leftbtn-s8").addEventListener("click", leftbShirt7);
function leftbShirt7() {
   if (s7 > 0) {
      s7--;
   } else {
      s7 = shirt7.length - 1;
   }
   setShirt7();
}
document.querySelector("#rightbtn-s8").addEventListener("click", rightbShirt7);
function rightbShirt7() {
   if (s7 < shirt7.length - 1) {
      s7++;
   } else {
      s7 = 0;
   }
   setShirt7();
}
document.querySelector("#cart-s8").addEventListener("click", cartS8);
function cartS8() {
   document.querySelector("#cart-s8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s8").addEventListener("click", buyS8);
function buyS8() {
   const buyShirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShirt <= 10 && buyShirt > 0) {
      document.querySelector("#total-s8").textContent =
         "Total Price : " + "₹" + 569 * buyShirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Boys Clothing- Shirt9
var shirt8 = [
   "Images/kid-s9.jpeg",
   "Images/kid-s9-2.jpeg",
   "Images/kid-s9-3.jpeg",
   "Images/kid-s9-4.jpeg",
];
var s8 = 0;
document.shirt9.src = "Images/kid-s9.jpeg";
function setShirt8() {
   document.shirt9.src = shirt8[s8];
}
setInterval(function autoSlider8() {
   if (s8 < shirt8.length - 1) {
      s8++;
   } else {
      s8 = 0;
   }
   setShirt8();
}, 10000);
document.querySelector("#leftbtn-s9").addEventListener("click", leftbShirt8);
function leftbShirt8() {
   if (s8 > 0) {
      s8--;
   } else {
      s8 = shirt8.length - 1;
   }
   setShirt8();
}
document.querySelector("#rightbtn-s9").addEventListener("click", rightbShirt8);
function rightbShirt8() {
   if (s8 < shirt8.length - 1) {
      s8++;
   } else {
      s8 = 0;
   }
   setShirt8();
}
document.querySelector("#cart-s9").addEventListener("click", cartS9);
function cartS9() {
   document.querySelector("#cart-s9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s9").addEventListener("click", buyS9);
function buyS9() {
   const buyShirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShirt <= 10 && buyShirt > 0) {
      document.querySelector("#total-s9").textContent =
         "Total Price : " + "₹" + 489 * buyShirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Boys Clothing- Shirt10
var shirt9 = [
   "Images/kid-s10.jpeg",
   "Images/kid-s10-2.jpeg",
   "Images/kid-s10-3.jpeg",
   "Images/kid-s10-4.jpeg",
];
var s9 = 0;
document.shirt10.src = "Images/kid-s10.jpeg";
function setShirt9() {
   document.shirt10.src = shirt9[s9];
}
setInterval(function autoSlider9() {
   if (s9 < shirt9.length - 1) {
      s9++;
   } else {
      s9 = 0;
   }
   setShirt9();
}, 10000);
document.querySelector("#leftbtn-s10").addEventListener("click", leftbShirt9);
function leftbShirt9() {
   if (s9 > 0) {
      s9--;
   } else {
      s9 = shirt9.length - 1;
   }
   setShirt9();
}
document.querySelector("#rightbtn-s10").addEventListener("click", rightbShirt9);
function rightbShirt9() {
   if (s9 < shirt9.length - 1) {
      s9++;
   } else {
      s9 = 0;
   }
   setShirt9();
}
document.querySelector("#cart-s10").addEventListener("click", cartS10);
function cartS10() {
   document.querySelector("#cart-s10").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-s10").addEventListener("click", buyS10);
function buyS10() {
   const buyShirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShirt <= 2 && buyShirt > 0) {
      document.querySelector("#total-s10").textContent =
         "Total Price : " + "₹" + 559 * buyShirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShirt === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 2 pieces left !!!");
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
