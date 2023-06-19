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
      document.querySelector("#tbl1").style.display = "block";
      document.querySelector("#table1").style.display = "block";
      document.querySelector("#table2").style.display = "block";
      document.querySelector("#tbl1").style.animation =
         "sizeCh 1s ease-in .01s";

      document.querySelector("#tbl").style.animation = "sizeCh 1s ease-in .01s";
   } else {
      document.querySelector("#tbl").style.display = "none";
      document.querySelector("#tbl1").style.display = "none";
      document.querySelector("#table1").style.display = "none";
      document.querySelector("#table2").style.display = "none";
   }
}
//Business Wear - Suit 1
var suit = [
   "Images/men-cp1.jpg",
   "Images/men-cp1-2.jpg",
   "Images/men-cp1-3.jpg",
   "Images/men-cp1-4.jpg",
];
var su = 0;
document.suit1.src = "Images/men-cp1.jpg";
function setSuit() {
   document.suit1.src = suit[su];
}
setInterval(function autoSlider() {
   if (su < suit.length - 1) {
      su++;
   } else {
      su = 0;
   }
   setSuit();
}, 10000);
document.querySelector("#leftbtn-su1").addEventListener("click", leftbSuit);
function leftbSuit() {
   if (su > 0) {
      su--;
   } else {
      su = suit.length - 1;
   }
   setSuit();
}
document.querySelector("#rightbtn-su1").addEventListener("click", rightbSuit);
function rightbSuit() {
   if (su < suit.length - 1) {
      su++;
   } else {
      su = 0;
   }
   setSuit();
}
document.querySelector("#cart-su1").addEventListener("click", cartSuit1);
function cartSuit1() {
   document.querySelector("#cart-su1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-su1").addEventListener("click", buySuit1);
function buySuit1() {
   const buySuit = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySuit <= 5 && buySuit > 0) {
      document.querySelector("#total-su1").textContent =
         "Total Price : " + "₹" + 3499 * buySuit + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySuit === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//Business Wear - Suit 2
var suit1 = [
   "Images/men-cp2.jpg",
   "Images/men-cp2-2.jpg",
   "Images/men-cp2-3.jpg",
   "Images/men-cp2-4.jpg",
];
var su1 = 0;
document.suit2.src = "Images/men-cp2.jpg";
function setSuit1() {
   document.suit2.src = suit1[su1];
}
setInterval(function autoSlider1() {
   if (su1 < suit1.length - 1) {
      su1++;
   } else {
      su1 = 0;
   }
   setSuit1();
}, 10000);
document.querySelector("#leftbtn-su2").addEventListener("click", leftbSuit1);
function leftbSuit1() {
   if (su1 > 0) {
      su1--;
   } else {
      su1 = suit1.length - 1;
   }
   setSuit1();
}
document.querySelector("#rightbtn-su2").addEventListener("click", rightbSuit1);
function rightbSuit1() {
   if (su1 < suit1.length - 1) {
      su1++;
   } else {
      su1 = 0;
   }
   setSuit1();
}
document.querySelector("#cart-su2").addEventListener("click", cartSuit2);
function cartSuit2() {
   document.querySelector("#cart-su2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-su2").addEventListener("click", buySuit2);
function buySuit2() {
   const buySuit = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySuit <= 2 && buySuit > 0) {
      document.querySelector("#total-su2").textContent =
         "Total Price : " + "₹" + 11999 * buySuit + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySuit === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 2 pieces left !!!");
   }
}
//Business Wear - Suit 3
var suit2 = [
   "Images/men-cp3.jpg",
   "Images/men-cp3-2.jpg",
   "Images/men-cp3-3.jpg",
   "Images/men-cp3-4.jpg",
];
var su2 = 0;
document.suit3.src = "Images/men-cp3.jpg";
function setSuit2() {
   document.suit3.src = suit2[su2];
}
setInterval(function autoSlider2() {
   if (su2 < suit2.length - 1) {
      su2++;
   } else {
      su2 = 0;
   }
   setSuit2();
}, 10000);
document.querySelector("#leftbtn-su3").addEventListener("click", leftbSuit2);
function leftbSuit2() {
   if (su2 > 0) {
      su2--;
   } else {
      su2 = suit2.length - 1;
   }
   setSuit2();
}
document.querySelector("#rightbtn-su3").addEventListener("click", rightbSuit2);
function rightbSuit2() {
   if (su2 < suit2.length - 1) {
      su2++;
   } else {
      su2 = 0;
   }
   setSuit2();
}
document.querySelector("#cart-su3").addEventListener("click", cartSuit3);
function cartSuit3() {
   document.querySelector("#cart-su3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-su3").addEventListener("click", buySuit3);
function buySuit3() {
   const buySuit = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySuit <= 5 && buySuit > 0) {
      document.querySelector("#total-su3").textContent =
         "Total Price : " + "₹" + 3235 * buySuit + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySuit === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Suit 3)
document.querySelector("#su3-type1").addEventListener("mouseover", su3Type1);
function su3Type1() {
   document.suit3.src = "Images/men-cp3-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Blue";
}
document.querySelector("#su3-type2").addEventListener("mouseover", su3Type2);
function su3Type2() {
   document.suit3.src = "Images/men-cp3.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Green";
}
// -mouseout from color images(Suit 3)
document.querySelector("#su3-type1").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   su3Type2();
}
//Business Wear - Suit 4
var suit3 = [
   "Images/men-cp4.jpg",
   "Images/men-cp4-2.jpg",
   "Images/men-cp4-3.jpg",
   "Images/men-cp4-4.jpg",
];
var su3 = 0;
document.suit4.src = "Images/men-cp4.jpg";
function setSuit3() {
   document.suit4.src = suit3[su3];
}
setInterval(function autoSlider3() {
   if (su3 < suit3.length - 1) {
      su3++;
   } else {
      su3 = 0;
   }
   setSuit3();
}, 10000);
document.querySelector("#leftbtn-su4").addEventListener("click", leftbSuit3);
function leftbSuit3() {
   if (su3 > 0) {
      su3--;
   } else {
      su3 = suit3.length - 1;
   }
   setSuit3();
}
document.querySelector("#rightbtn-su4").addEventListener("click", rightbSuit3);
function rightbSuit3() {
   if (su3 < suit3.length - 1) {
      su3++;
   } else {
      su3 = 0;
   }
   setSuit3();
}
document.querySelector("#cart-su4").addEventListener("click", cartSuit4);
function cartSuit4() {
   document.querySelector("#cart-su4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-su4").addEventListener("click", buySuit4);
function buySuit4() {
   const buySuit = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySuit <= 5 && buySuit > 0) {
      document.querySelector("#total-su4").textContent =
         "Total Price : " + "₹" + 4800 * buySuit + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySuit === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//Business Wear - Suit 5
var suit4 = [
   "Images/men-cp5.jpg",
   "Images/men-cp5-2.jpg",
   "Images/men-cp5-3.jpg",
   "Images/men-cp5-4.jpg",
];
var su4 = 0;
document.suit5.src = "Images/men-cp5.jpg";
function setSuit4() {
   document.suit5.src = suit4[su4];
}
setInterval(function autoSlider4() {
   if (su4 < suit4.length - 1) {
      su4++;
   } else {
      su4 = 0;
   }
   setSuit4();
}, 10000);
document.querySelector("#leftbtn-su5").addEventListener("click", leftbSuit4);
function leftbSuit4() {
   if (su4 > 0) {
      su4--;
   } else {
      su4 = suit4.length - 1;
   }
   setSuit4();
}
document.querySelector("#rightbtn-su5").addEventListener("click", rightbSuit4);
function rightbSuit4() {
   if (su4 < suit4.length - 1) {
      su4++;
   } else {
      su4 = 0;
   }
   setSuit4();
}
document.querySelector("#cart-su5").addEventListener("click", cartSuit5);
function cartSuit5() {
   document.querySelector("#cart-su5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-su5").addEventListener("click", buySuit5);
function buySuit5() {
   const buySuit = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySuit <= 5 && buySuit > 0) {
      document.querySelector("#total-su5").textContent =
         "Total Price : " + "₹" + 2999 * buySuit + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySuit === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Suit 5)
document.querySelector("#su5-type1").addEventListener("mouseover", su5Type1);
function su5Type1() {
   document.suit5.src = "Images/men-cp5-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Royal Blue";
}
document.querySelector("#su5-type2").addEventListener("mouseover", su5Type2);
function su5Type2() {
   document.suit5.src = "Images/men-cp5-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black";
}
document.querySelector("#su5-type3").addEventListener("mouseover", su5Type3);
function su5Type3() {
   document.suit5.src = "Images/men-cp5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Wine";
}
// -mouseout from color images(Suit 5)
document.querySelector("#su5-type1").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   su5Type3();
}
document.querySelector("#su5-type2").addEventListener("mouseout", type5Mout1);
//Business Wear - Suit 6
var suit5 = [
   "Images/men-cp6.jpg",
   "Images/men-cp6-2.jpg",
   "Images/men-cp6-3.jpg",
   "Images/men-cp6-4.jpg",
];
var su5 = 0;
document.suit6.src = "Images/men-cp6.jpg";
function setSuit5() {
   document.suit6.src = suit5[su5];
}
setInterval(function autoSlider5() {
   if (su5 < suit5.length - 1) {
      su5++;
   } else {
      su5 = 0;
   }
   setSuit5();
}, 10000);
document.querySelector("#leftbtn-su6").addEventListener("click", leftbSuit5);
function leftbSuit5() {
   if (su5 > 0) {
      su5--;
   } else {
      su5 = suit5.length - 1;
   }
   setSuit5();
}
document.querySelector("#rightbtn-su6").addEventListener("click", rightbSuit5);
function rightbSuit5() {
   if (su5 < suit5.length - 1) {
      su5++;
   } else {
      su5 = 0;
   }
   setSuit5();
}
document.querySelector("#cart-su6").addEventListener("click", cartSuit6);
function cartSuit6() {
   document.querySelector("#cart-su6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-su6").addEventListener("click", buySuit6);
function buySuit6() {
   const buySuit = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySuit <= 5 && buySuit > 0) {
      document.querySelector("#total-su6").textContent =
         "Total Price : " + "₹" + 8249 * buySuit + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySuit === 0) {
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
//Business Wear - Suit 7
var suit6 = [
   "Images/men-cp7.jpg",
   "Images/men-cp7-2.jpg",
   "Images/men-cp7-3.jpg",
   "Images/men-cp7-4.jpg",
];
var su6 = 0;
document.suit7.src = "Images/men-cp7.jpg";
function setSuit6() {
   document.suit7.src = suit6[su6];
}
setInterval(function autoSlider6() {
   if (su6 < suit6.length - 1) {
      su6++;
   } else {
      su6 = 0;
   }
   setSuit6();
}, 10000);
document.querySelector("#leftbtn-su7").addEventListener("click", leftbSuit6);
function leftbSuit6() {
   if (su6 > 0) {
      su6--;
   } else {
      su6 = suit6.length - 1;
   }
   setSuit6();
}
document.querySelector("#rightbtn-su7").addEventListener("click", rightbSuit6);
function rightbSuit6() {
   if (su6 < suit6.length - 1) {
      su6++;
   } else {
      su6 = 0;
   }
   setSuit6();
}
document.querySelector("#cart-su7").addEventListener("click", cartSuit7);
function cartSuit7() {
   document.querySelector("#cart-su7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-su7").addEventListener("click", buySuit7);
function buySuit7() {
   const buySuit = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySuit <= 5 && buySuit > 0) {
      document.querySelector("#total-su7").textContent =
         "Total Price : " + "₹" + 8452 * buySuit + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySuit === 0) {
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
