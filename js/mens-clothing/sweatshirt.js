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
//Winter wear  - Sweatshirt1
var sshirt = [
   "Images/men-ss1.jpg",
   "Images/men-ss1-2.jpg",
   "Images/men-ss1-3.jpg",
   "Images/men-ss1-4.jpg",
];
var ss = 0;
document.sweatS1.src = "Images/men-ss1.jpg";
function setSshirt() {
   document.sweatS1.src = sshirt[ss];
}
setInterval(function autoSlider() {
   if (ss < sshirt.length - 1) {
      ss++;
   } else {
      ss = 0;
   }
   setSshirt();
}, 10000);
document.querySelector("#leftbtn-ss1").addEventListener("click", leftbSshirt);
function leftbSshirt() {
   if (ss > 0) {
      ss--;
   } else {
      ss = sshirt.length - 1;
   }
   setSshirt();
}
document.querySelector("#rightbtn-ss1").addEventListener("click", rightbSshirt);
function rightbSshirt() {
   if (ss < sshirt.length - 1) {
      ss++;
   } else {
      ss = 0;
   }
   setSshirt();
}
document.querySelector("#cart-ss1").addEventListener("click", cartSshirt1);
function cartSshirt1() {
   document.querySelector("#cart-ss1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss1").addEventListener("click", buySshirt1);
function buySshirt1() {
   const buySshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySshirt <= 10 && buySshirt > 0) {
      document.querySelector("#total-ss1").textContent =
         "Total Price : " + "₹" + 1028 * buySshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter wear  - Sweatshirt2
var sshirt1 = [
   "Images/men-ss2.jpg",
   "Images/men-ss2-2.jpg",
   "Images/men-ss2-3.jpg",
   "Images/men-ss2-4.jpg",
];
var ss1 = 0;
document.sweatS2.src = "Images/men-ss2.jpg";
function setSshirt1() {
   document.sweatS2.src = sshirt1[ss1];
}
setInterval(function autoSlider1() {
   if (ss1 < sshirt1.length - 1) {
      ss1++;
   } else {
      ss1 = 0;
   }
   setSshirt1();
}, 10000);
document.querySelector("#leftbtn-ss2").addEventListener("click", leftbSshirt1);
function leftbSshirt1() {
   if (ss1 > 0) {
      ss1--;
   } else {
      ss1 = sshirt1.length - 1;
   }
   setSshirt1();
}
document
   .querySelector("#rightbtn-ss2")
   .addEventListener("click", rightbSshirt1);
function rightbSshirt1() {
   if (ss1 < sshirt1.length - 1) {
      ss1++;
   } else {
      ss1 = 0;
   }
   setSshirt1();
}
document.querySelector("#cart-ss2").addEventListener("click", cartSshirt2);
function cartSshirt2() {
   document.querySelector("#cart-ss2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss2").addEventListener("click", buySshirt2);
function buySshirt2() {
   const buySshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySshirt <= 10 && buySshirt > 0) {
      document.querySelector("#total-ss2").textContent =
         "Total Price : " + "₹" + 699 * buySshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sweatshirt2)
document.querySelector("#ss2-type1").addEventListener("mouseover", ss2Type1);
function ss2Type1() {
   document.sweatS2.src = "Images/men-ss2.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Orange";
}
document.querySelector("#ss2-type2").addEventListener("mouseover", ss2Type2);
function ss2Type2() {
   document.sweatS2.src = "Images/men-ss2-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black";
}
document.querySelector("#ss2-type3").addEventListener("mouseover", ss2Type3);
function ss2Type3() {
   document.sweatS2.src = "Images/men-ss2-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Green";
}
document.querySelector("#ss2-type4").addEventListener("mouseover", ss2Type4);
function ss2Type4() {
   document.sweatS2.src = "Images/men-ss2-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Light Grey";
}
document.querySelector("#ss2-type5").addEventListener("mouseover", ss2Type5);
function ss2Type5() {
   document.sweatS2.src = "Images/men-ss2-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: White";
}
document.querySelector("#ss2-type6").addEventListener("mouseover", ss2Type6);
function ss2Type6() {
   document.sweatS2.src = "Images/men-ss2-9.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Maroon";
}
// -mouseout from color images(sweatshirt2)
document.querySelector("#ss2-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   ss2Type1();
}
document.querySelector("#ss2-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#ss2-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#ss2-type5").addEventListener("mouseout", type1Mout1);
document.querySelector("#ss2-type6").addEventListener("mouseout", type1Mout1);
//Winter wear  - Sweatshirt3
var sshirt2 = [
   "Images/men-ss3.jpg",
   "Images/men-ss3-2.jpg",
   "Images/men-ss3-3.jpg",
   "Images/men-ss3-4.jpg",
];
var ss2 = 0;
document.sweatS3.src = "Images/men-ss3.jpg";
function setSshirt2() {
   document.sweatS3.src = sshirt2[ss2];
}
setInterval(function autoSlider2() {
   if (ss2 < sshirt2.length - 1) {
      ss2++;
   } else {
      ss2 = 0;
   }
   setSshirt2();
}, 10000);
document.querySelector("#leftbtn-ss3").addEventListener("click", leftbSshirt2);
function leftbSshirt2() {
   if (ss2 > 0) {
      ss2--;
   } else {
      ss2 = sshirt2.length - 1;
   }
   setSshirt2();
}
document
   .querySelector("#rightbtn-ss3")
   .addEventListener("click", rightbSshirt2);
function rightbSshirt2() {
   if (ss2 < sshirt2.length - 1) {
      ss2++;
   } else {
      ss2 = 0;
   }
   setSshirt2();
}
document.querySelector("#cart-ss3").addEventListener("click", cartSshirt3);
function cartSshirt3() {
   document.querySelector("#cart-ss3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss3").addEventListener("click", buySshirt3);
function buySshirt3() {
   const buySshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySshirt <= 10 && buySshirt > 0) {
      document.querySelector("#total-ss3").textContent =
         "Total Price : " + "₹" + 900 * buySshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter wear  - Sweatshirt4
var sshirt3 = [
   "Images/men-ss4.jpg",
   "Images/men-ss4-2.jpg",
   "Images/men-ss4-3.jpg",
   "Images/men-ss4-4.jpg",
];
var ss3 = 0;
document.sweatS4.src = "Images/men-ss4.jpg";
function setSshirt3() {
   document.sweatS4.src = sshirt3[ss3];
}
setInterval(function autoSlider3() {
   if (ss3 < sshirt3.length - 1) {
      ss3++;
   } else {
      ss3 = 0;
   }
   setSshirt3();
}, 10000);
document.querySelector("#leftbtn-ss4").addEventListener("click", leftbSshirt3);
function leftbSshirt3() {
   if (ss3 > 0) {
      ss3--;
   } else {
      ss3 = sshirt3.length - 1;
   }
   setSshirt3();
}
document
   .querySelector("#rightbtn-ss4")
   .addEventListener("click", rightbSshirt3);
function rightbSshirt3() {
   if (ss3 < sshirt3.length - 1) {
      ss3++;
   } else {
      ss3 = 0;
   }
   setSshirt3();
}
document.querySelector("#cart-ss4").addEventListener("click", cartSshirt4);
function cartSshirt4() {
   document.querySelector("#cart-ss4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss4").addEventListener("click", buySshirt4);
function buySshirt4() {
   const buySshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySshirt <= 10 && buySshirt > 0) {
      document.querySelector("#total-ss4").textContent =
         "Total Price : " + "₹" + 759 * buySshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sweatshirt4)
document.querySelector("#ss4-type1").addEventListener("mouseover", ss4Type1);
function ss4Type1() {
   document.sweatS4.src = "Images/men-ss4-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Dark Grey";
}
document.querySelector("#ss4-type2").addEventListener("mouseover", ss4Type2);
function ss4Type2() {
   document.sweatS4.src = "Images/men-ss4.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Light Grey";
}
document.querySelector("#ss4-type3").addEventListener("mouseover", ss4Type3);
function ss4Type3() {
   document.sweatS4.src = "Images/men-ss4-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black";
}
// -mouseout from color images(sweatshirt4)
document.querySelector("#ss4-type1").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   ss4Type2();
}
document.querySelector("#ss4-type3").addEventListener("mouseout", type4Mout1);
//Winter wear  - Sweatshirt5
var sshirt4 = [
   "Images/men-ss5.jpg",
   "Images/men-ss5-2.jpg",
   "Images/men-ss5-3.jpg",
   "Images/men-ss5-4.jpg",
];
var ss4 = 0;
document.sweatS5.src = "Images/men-ss5.jpg";
function setSshirt4() {
   document.sweatS5.src = sshirt4[ss4];
}
setInterval(function autoSlider4() {
   if (ss4 < sshirt4.length - 1) {
      ss4++;
   } else {
      ss4 = 0;
   }
   setSshirt4();
}, 10000);
document.querySelector("#leftbtn-ss5").addEventListener("click", leftbSshirt4);
function leftbSshirt4() {
   if (ss4 > 0) {
      ss4--;
   } else {
      ss4 = sshirt4.length - 1;
   }
   setSshirt4();
}
document
   .querySelector("#rightbtn-ss5")
   .addEventListener("click", rightbSshirt4);
function rightbSshirt4() {
   if (ss4 < sshirt4.length - 1) {
      ss4++;
   } else {
      ss4 = 0;
   }
   setSshirt4();
}
document.querySelector("#cart-ss5").addEventListener("click", cartSshirt5);
function cartSshirt5() {
   document.querySelector("#cart-ss5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss5").addEventListener("click", buySshirt5);
function buySshirt5() {
   const buySshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySshirt <= 10 && buySshirt > 0) {
      document.querySelector("#total-ss5").textContent =
         "Total Price : " + "₹" + 659 * buySshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter wear  - Sweatshirt6
var sshirt5 = [
   "Images/men-ss6.jpg",
   "Images/men-ss6-2.jpg",
   "Images/men-ss6-3.jpg",
   "Images/men-ss6-4.jpg",
];
var ss5 = 0;
document.sweatS6.src = "Images/men-ss6.jpg";
function setSshirt5() {
   document.sweatS6.src = sshirt5[ss5];
}
setInterval(function autoSlider5() {
   if (ss5 < sshirt5.length - 1) {
      ss5++;
   } else {
      ss5 = 0;
   }
   setSshirt5();
}, 10000);
document.querySelector("#leftbtn-ss6").addEventListener("click", leftbSshirt5);
function leftbSshirt5() {
   if (ss5 > 0) {
      ss5--;
   } else {
      ss5 = sshirt5.length - 1;
   }
   setSshirt5();
}
document
   .querySelector("#rightbtn-ss6")
   .addEventListener("click", rightbSshirt5);
function rightbSshirt5() {
   if (ss5 < sshirt5.length - 1) {
      ss5++;
   } else {
      ss5 = 0;
   }
   setSshirt5();
}
document.querySelector("#cart-ss6").addEventListener("click", cartSshirt6);
function cartSshirt6() {
   document.querySelector("#cart-ss6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss6").addEventListener("click", buySshirt6);
function buySshirt6() {
   const buySshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySshirt <= 10 && buySshirt > 0) {
      document.querySelector("#total-ss6").textContent =
         "Total Price : " + "₹" + 719 * buySshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Winter wear  - Sweatshirt7
var sshirt6 = [
   "Images/men-ss7.jpg",
   "Images/men-ss7-2.jpg",
   "Images/men-ss7-3.jpg",
   "Images/men-ss7-4.jpg",
];
var ss6 = 0;
document.sweatS7.src = "Images/men-ss7.jpg";
function setSshirt6() {
   document.sweatS7.src = sshirt6[ss6];
}
setInterval(function autoSlider6() {
   if (ss6 < sshirt6.length - 1) {
      ss6++;
   } else {
      ss6 = 0;
   }
   setSshirt6();
}, 10000);
document.querySelector("#leftbtn-ss7").addEventListener("click", leftbSshirt6);
function leftbSshirt6() {
   if (ss6 > 0) {
      ss6--;
   } else {
      ss6 = sshirt6.length - 1;
   }
   setSshirt6();
}
document
   .querySelector("#rightbtn-ss7")
   .addEventListener("click", rightbSshirt6);
function rightbSshirt6() {
   if (ss6 < sshirt6.length - 1) {
      ss6++;
   } else {
      ss6 = 0;
   }
   setSshirt6();
}
document.querySelector("#cart-ss7").addEventListener("click", cartSshirt7);
function cartSshirt7() {
   document.querySelector("#cart-ss7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss7").addEventListener("click", buySshirt7);
function buySshirt7() {
   const buySshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buySshirt <= 10 && buySshirt > 0) {
      document.querySelector("#total-ss7").textContent =
         "Total Price : " + "₹" + 619 * buySshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sweatshirt7)
document.querySelector("#ss7-type1").addEventListener("mouseover", ss7Type1);
function ss7Type1() {
   document.sweatS7.src = "Images/men-ss7-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: White and Grey";
}
document.querySelector("#ss7-type2").addEventListener("mouseover", ss7Type2);
function ss7Type2() {
   document.sweatS7.src = "Images/men-ss7-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: White and Black";
}
document.querySelector("#ss7-type3").addEventListener("mouseover", ss7Type3);
function ss7Type3() {
   document.sweatS7.src = "Images/men-ss7-7.jpg";
   document.querySelector("#color-name2").innerHTML =
      " Color: Yellow and Black";
}
document.querySelector("#ss7-type4").addEventListener("mouseover", ss7Type4);
function ss7Type4() {
   document.sweatS7.src = "Images/men-ss7.jpg";
   document.querySelector("#color-name2").innerHTML =
      " Color: Maroon and Black";
}
// -mouseout from color images(sweatshirt7)
document.querySelector("#ss7-type1").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   ss7Type4();
}
document.querySelector("#ss7-type2").addEventListener("mouseout", type7Mout1);
document.querySelector("#ss7-type3").addEventListener("mouseout", type7Mout1);
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
