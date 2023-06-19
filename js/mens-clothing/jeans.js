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
//size chart
document.querySelector("#show-schart").addEventListener("click", showSch);
function showSch() {
   if (document.querySelector("#tbl").style.display != "block") {
      document.querySelector("#tbl").style.display = "block";
      document.querySelector("#tbl").style.animation = "sizeCh 1s ease-in .01s";
   } else {
      document.querySelector("#tbl").style.display = "none";
   }
}
//Bottom wear - jean1
var jean = [
   "Images/men-jean1.jpg",
   "Images/men-jean1-2.jpg",
   "Images/men-jean1-3.jpg",
   "Images/men-jean1-4.jpg",
   "Images/men-jean1-5.jpg",
   "Images/men-jean1-6.jpg",
];
var je = 0;
document.jean1.src = "Images/men-jean1.jpg";
function setJean() {
   document.jean1.src = jean[je];
}
setInterval(function autoSlider() {
   if (je < jean.length - 1) {
      je++;
   } else {
      je = 0;
   }
   setJean();
}, 10000);
document.querySelector("#leftbtn-j1").addEventListener("click", leftbJean);
function leftbJean() {
   if (je > 0) {
      je--;
   } else {
      je = jean.length - 1;
   }
   setJean();
}
document.querySelector("#rightbtn-j1").addEventListener("click", rightbJean);
function rightbJean() {
   if (je < jean.length - 1) {
      je++;
   } else {
      je = 0;
   }
   setJean();
}
document.querySelector("#cart-j1").addEventListener("click", cartJean1);
function cartJean1() {
   document.querySelector("#cart-j1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j1").addEventListener("click", buyJean1);
function buyJean1() {
   const buyCshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCshirt <= 10 && buyCshirt > 0) {
      document.querySelector("#total-j1").textContent =
         "Total Price : " + "₹" + 1017 * buyCshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(jean1)
document.querySelector("#j1-type1").addEventListener("mouseover", j1Type1);
function j1Type1() {
   document.jean1.src = "Images/men-jean1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Medium Blue";
}
document.querySelector("#j1-type2").addEventListener("mouseover", j1Type2);
function j1Type2() {
   document.jean1.src = "Images/men-jean1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Light Blue";
}
document.querySelector("#j1-type3").addEventListener("mouseover", j1Type3);
function j1Type3() {
   document.jean1.src = "Images/men-jean1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Navy Blue";
}
document.querySelector("#j1-type4").addEventListener("mouseover", j1Type4);
function j1Type4() {
   document.jean1.src = "Images/men-jean1-9.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Dark Grey";
}
document.querySelector("#j1-type5").addEventListener("mouseover", j1Type5);
function j1Type5() {
   document.jean1.src = "Images/men-jean1-10.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Aqua Green ";
}
// -mouseout from color images(jean1)
document.querySelector("#j1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   j1Type1();
}
document.querySelector("#j1-type3").addEventListener("mouseout", type1Mout2);
function type1Mout2() {
   j1Type1();
}
document.querySelector("#j1-type4").addEventListener("mouseout", type1Mout3);
function type1Mout3() {
   j1Type1();
}
document.querySelector("#j1-type5").addEventListener("mouseout", type1Mout4);
function type1Mout4() {
   j1Type1();
}
//Bottom wear - jean2
var jean1 = [
   "Images/men-jean2.jpg",
   "Images/men-jean2-2.jpg",
   "Images/men-jean2-3.jpg",
   "Images/men-jean2-4.jpg",
   "Images/men-jean2-5.jpg",
   "Images/men-jean2-6.jpg",
];
var je1 = 0;
document.jean2.src = "Images/men-jean2.jpg";
function setJean1() {
   document.jean2.src = jean1[je1];
}
setInterval(function autoSlider1() {
   if (je1 < jean1.length - 1) {
      je1++;
   } else {
      je1 = 0;
   }
   setJean1();
}, 10000);
document.querySelector("#leftbtn-j2").addEventListener("click", leftbJean1);
function leftbJean1() {
   if (je1 > 0) {
      je1--;
   } else {
      je1 = jean1.length - 1;
   }
   setJean1();
}
document.querySelector("#rightbtn-j2").addEventListener("click", rightbJean1);
function rightbJean1() {
   if (je1 < jean1.length - 1) {
      je1++;
   } else {
      je1 = 0;
   }
   setJean1();
}
document.querySelector("#cart-j2").addEventListener("click", cartJean2);
function cartJean2() {
   document.querySelector("#cart-j2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j2").addEventListener("click", buyJean2);
function buyJean2() {
   const buyCshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCshirt <= 10 && buyCshirt > 0) {
      document.querySelector("#total-j2").textContent =
         "Total Price : " + "₹" + 719 * buyCshirt + "  only";
      document.querySelector("#total-j2").style.marginTop = "5px";
      alert("Thank ♥ you for Your Order");
   } else if (buyCshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(jean2)
document.querySelector("#j2-type1").addEventListener("mouseover", j2Type1);
function j2Type1() {
   document.jean2.src = "Images/men-jean2-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Teal Green";
}
document.querySelector("#j2-type2").addEventListener("mouseover", j2Type2);
function j2Type2() {
   document.jean2.src = "Images/men-jean2-8.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Light Grey";
}
document.querySelector("#j2-type3").addEventListener("mouseover", j2Type3);
function j2Type3() {
   document.jean2.src = "Images/men-jean2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Peacock Green";
}
// -mouseout from color images(jean2)
document.querySelector("#j2-type1").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   j2Type3();
}
document.querySelector("#j2-type2").addEventListener("mouseout", type2Mout2);
function type2Mout2() {
   j2Type3();
}
//Bottom wear - jean3
var jean2 = [
   "Images/men-jean3.jpg",
   "Images/men-jean3-2.jpg",
   "Images/men-jean3-3.jpg",
   "Images/men-jean3-4.jpg",
   "Images/men-jean3-5.jpg",
   "Images/men-jean3-6.jpg",
];
var je2 = 0;
document.jean3.src = "Images/men-jean3.jpg";
function setJean2() {
   document.jean3.src = jean2[je2];
}
setInterval(function autoSlider2() {
   if (je2 < jean2.length - 1) {
      je2++;
   } else {
      je2 = 0;
   }
   setJean2();
}, 10000);
document.querySelector("#leftbtn-j3").addEventListener("click", leftbJean2);
function leftbJean2() {
   if (je2 > 0) {
      je2--;
   } else {
      je2 = jean2.length - 1;
   }
   setJean2();
}
document.querySelector("#rightbtn-j3").addEventListener("click", rightbJean2);
function rightbJean2() {
   if (je2 < jean2.length - 1) {
      je2++;
   } else {
      je2 = 0;
   }
   setJean2();
}
document.querySelector("#cart-j3").addEventListener("click", cartJean3);
function cartJean3() {
   document.querySelector("#cart-j3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j3").addEventListener("click", buyJean3);
function buyJean3() {
   const buyCshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCshirt <= 10 && buyCshirt > 0) {
      document.querySelector("#total-j3").textContent =
         "Total Price : " + "₹" + 1518 * buyCshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Bottom wear - jean4
var jean3 = [
   "Images/men-jean4.jpg",
   "Images/men-jean4-2.jpg",
   "Images/men-jean4-3.jpg",
   "Images/men-jean4-4.jpg",
   "Images/men-jean4-5.jpg",
   "Images/men-jean4-6.jpg",
];
var je3 = 0;
document.jean4.src = "Images/men-jean4.jpg";
function setJean3() {
   document.jean4.src = jean3[je3];
}
setInterval(function autoSlider3() {
   if (je3 < jean3.length - 1) {
      je3++;
   } else {
      je3 = 0;
   }
   setJean3();
}, 10000);
document.querySelector("#leftbtn-j4").addEventListener("click", leftbJean3);
function leftbJean3() {
   if (je3 > 0) {
      je3--;
   } else {
      je3 = jean3.length - 1;
   }
   setJean3();
}
document.querySelector("#rightbtn-j4").addEventListener("click", rightbJean3);
function rightbJean3() {
   if (je3 < jean3.length - 1) {
      je3++;
   } else {
      je3 = 0;
   }
   setJean3();
}
document.querySelector("#cart-j4").addEventListener("click", cartJean4);
function cartJean4() {
   document.querySelector("#cart-j4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j4").addEventListener("click", buyJean4);
function buyJean4() {
   const buyCshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCshirt <= 5 && buyCshirt > 0) {
      document.querySelector("#total-j4").textContent =
         "Total Price : " + "₹" + 794 * buyCshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 5 pieces left !!!");
   }
}
//Bottom wear - jean5
var jean4 = [
   "Images/men-jean5.jpg",
   "Images/men-jean5-2.jpg",
   "Images/men-jean5-3.jpg",
   "Images/men-jean5-4.jpg",
   "Images/men-jean5-5.jpg",
   "Images/men-jean5-6.jpg",
];
var je4 = 0;
document.jean5.src = "Images/men-jean5.jpg";
function setJean4() {
   document.jean5.src = jean4[je4];
}
setInterval(function autoSlider4() {
   if (je4 < jean4.length - 1) {
      je4++;
   } else {
      je4 = 0;
   }
   setJean4();
}, 10000);
document.querySelector("#leftbtn-j5").addEventListener("click", leftbJean4);
function leftbJean4() {
   if (je4 > 0) {
      je4--;
   } else {
      je4 = jean4.length - 1;
   }
   setJean4();
}
document.querySelector("#rightbtn-j5").addEventListener("click", rightbJean4);
function rightbJean4() {
   if (je4 < jean4.length - 1) {
      je4++;
   } else {
      je4 = 0;
   }
   setJean4();
}
document.querySelector("#cart-j5").addEventListener("click", cartJean5);
function cartJean5() {
   document.querySelector("#cart-j5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j5").addEventListener("click", buyJean5);
function buyJean5() {
   const buyCshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCshirt <= 10 && buyCshirt > 0) {
      document.querySelector("#total-j5").textContent =
         "Total Price : " + "₹" + 799 * buyCshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Bottom wear - jean6
var jean5 = [
   "Images/men-jean6.jpg",
   "Images/men-jean6-2.jpg",
   "Images/men-jean6-3.jpg",
   "Images/men-jean6-4.jpg",
   "Images/men-jean6-5.jpg",
   "Images/men-jean6-6.jpg",
];
var je5 = 0;
document.jean6.src = "Images/men-jean6.jpg";
function setJean5() {
   document.jean6.src = jean5[je5];
}
setInterval(function autoSlider5() {
   if (je5 < jean5.length - 1) {
      je5++;
   } else {
      je5 = 0;
   }
   setJean5();
}, 10000);
document.querySelector("#leftbtn-j6").addEventListener("click", leftbJean5);
function leftbJean5() {
   if (je5 > 0) {
      je5--;
   } else {
      je5 = jean5.length - 1;
   }
   setJean5();
}
document.querySelector("#rightbtn-j6").addEventListener("click", rightbJean5);
function rightbJean5() {
   if (je5 < jean5.length - 1) {
      je5++;
   } else {
      je5 = 0;
   }
   setJean5();
}
document.querySelector("#cart-j6").addEventListener("click", cartJean6);
function cartJean6() {
   document.querySelector("#cart-j6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j6").addEventListener("click", buyJean6);
function buyJean6() {
   const buyCshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCshirt <= 2 && buyCshirt > 0) {
      document.querySelector("#total-j6").textContent =
         "Total Price : " + "₹" + 788 * buyCshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 2 pieces left !!!");
   }
}
//Bottom wear - jean7
var jean6 = [
   "Images/men-jean7.jpg",
   "Images/men-jean7-2.jpg",
   "Images/men-jean7-3.jpg",
   "Images/men-jean7-4.jpg",
   "Images/men-jean7-5.jpg",
   "Images/men-jean7-6.jpg",
];
var je6 = 0;
document.jean7.src = "Images/men-jean7.jpg";
function setJean6() {
   document.jean7.src = jean6[je6];
}
setInterval(function autoSlider6() {
   if (je6 < jean6.length - 1) {
      je6++;
   } else {
      je6 = 0;
   }
   setJean6();
}, 10000);
document.querySelector("#leftbtn-j7").addEventListener("click", leftbJean6);
function leftbJean6() {
   if (je6 > 0) {
      je6--;
   } else {
      je6 = jean6.length - 1;
   }
   setJean6();
}
document.querySelector("#rightbtn-j7").addEventListener("click", rightbJean6);
function rightbJean6() {
   if (je6 < jean6.length - 1) {
      je6++;
   } else {
      je6 = 0;
   }
   setJean6();
}
document.querySelector("#cart-j7").addEventListener("click", cartJean7);
function cartJean7() {
   document.querySelector("#cart-j7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-j7").addEventListener("click", buyJean7);
function buyJean7() {
   const buyCshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCshirt <= 10 && buyCshirt > 0) {
      document.querySelector("#total-j7").textContent =
         "Total Price : " + "₹" + 675 * buyCshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCshirt === 0) {
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
