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
//Top wear - cshirt1
var cshirt = [
   "Images/men-cs1.jpg",
   "Images/men-cs1-2.jpg",
   "Images/men-cs1-3.jpg",
   "Images/men-cs1-4.jpg",
];
var cs = 0;
document.cshirt1.src = "Images/men-cs1.jpg";
function setCshirt() {
   document.cshirt1.src = cshirt[cs];
}
setInterval(function autoSlider() {
   if (cs < cshirt.length - 1) {
      cs++;
   } else {
      cs = 0;
   }
   setCshirt();
}, 10000);
document.querySelector("#leftbtn-cs1").addEventListener("click", leftbCshirt);
function leftbCshirt() {
   if (cs > 0) {
      cs--;
   } else {
      cs = cshirt.length - 1;
   }
   setCshirt();
}
document.querySelector("#rightbtn-cs1").addEventListener("click", rightbCshirt);
function rightbCshirt() {
   if (cs < cshirt.length - 1) {
      cs++;
   } else {
      cs = 0;
   }
   setCshirt();
}
document.querySelector("#cart-cs1").addEventListener("click", cartCs1);
function cartCs1() {
   document.querySelector("#cart-cs1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-cs1").addEventListener("click", buyCs1);
function buyCs1() {
   const buyCshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCshirt <= 10 && buyCshirt > 0) {
      document.querySelector("#total-cs1").textContent =
         "Total Price : " + "₹" + 649 * buyCshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(cshirt1)
document.querySelector("#cs1-type1").addEventListener("mouseover", cs1Type1);
function cs1Type1() {
   document.cshirt1.src = "Images/men-cs1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Navy Blue";
}
document.querySelector("#cs1-type2").addEventListener("mouseover", cs1Type2);
function cs1Type2() {
   document.cshirt1.src = "Images/men-cs1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Red";
}
// -mouseout from color images(cshirt1)
document.querySelector("#cs1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   cs1Type1();
}
//Top wear - cshirt2
var cshirt1 = [
   "Images/men-cs2.jpg",
   "Images/men-cs2-2.jpg",
   "Images/men-cs2-3.jpg",
   "Images/men-cs2-4.jpg",
];
var cs1 = 0;
document.cshirt2.src = "Images/men-cs2.jpg";
function setCshirt1() {
   document.cshirt2.src = cshirt1[cs1];
}
setInterval(function autoSlider1() {
   if (cs1 < cshirt1.length - 1) {
      cs1++;
   } else {
      cs1 = 0;
   }
   setCshirt1();
}, 10000);
document.querySelector("#leftbtn-cs2").addEventListener("click", leftbCshirt1);
function leftbCshirt1() {
   if (cs1 > 0) {
      cs1--;
   } else {
      cs1 = cshirt1.length - 1;
   }
   setCshirt1();
}
document
   .querySelector("#rightbtn-cs2")
   .addEventListener("click", rightbCshirt1);
function rightbCshirt1() {
   if (cs1 < cshirt1.length - 1) {
      cs1++;
   } else {
      cs1 = 0;
   }
   setCshirt1();
}
document.querySelector("#cart-cs2").addEventListener("click", cartCs2);
function cartCs2() {
   document.querySelector("#cart-cs2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-cs2").addEventListener("click", buyCs2);
function buyCs2() {
   const buyCshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCshirt <= 2 && buyCshirt > 0) {
      document.querySelector("#total-cs2").textContent =
         "Total Price : " + "₹" + 971 * buyCshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 2 pieces left !!!");
   }
}
//Top wear - cshirt3
var cshirt2 = [
   "Images/men-cs3.jpg",
   "Images/men-cs3-2.jpg",
   "Images/men-cs3-3.jpg",
   "Images/men-cs3-4.jpg",
];
var cs2 = 0;
document.cshirt3.src = "Images/men-cs3.jpg";
function setCshirt2() {
   document.cshirt3.src = cshirt2[cs2];
}
setInterval(function autoSlider2() {
   if (cs2 < cshirt2.length - 1) {
      cs2++;
   } else {
      cs2 = 0;
   }
   setCshirt2();
}, 10000);
document.querySelector("#leftbtn-cs3").addEventListener("click", leftbCshirt2);
function leftbCshirt2() {
   if (cs2 > 0) {
      cs2--;
   } else {
      cs2 = cshirt2.length - 1;
   }
   setCshirt2();
}
document
   .querySelector("#rightbtn-cs3")
   .addEventListener("click", rightbCshirt2);
function rightbCshirt2() {
   if (cs2 < cshirt2.length - 1) {
      cs2++;
   } else {
      cs2 = 0;
   }
   setCshirt2();
}
document.querySelector("#cart-cs3").addEventListener("click", cartCs3);
function cartCs3() {
   document.querySelector("#cart-cs3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-cs3").addEventListener("click", buyCs3);
function buyCs3() {
   const buyCshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCshirt <= 10 && buyCshirt > 0) {
      document.querySelector("#total-cs3").textContent =
         "Total Price : " + "₹" + 499 * buyCshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(cshirt3)
document.querySelector("#cs3-type1").addEventListener("mouseover", cs3Type1);
function cs3Type1() {
   document.cshirt3.src = "Images/men-cs3-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Light Purple";
}
document.querySelector("#cs3-type2").addEventListener("mouseover", cs3Type2);
function cs3Type2() {
   document.cshirt3.src = "Images/men-cs3.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Teal Green";
}
document.querySelector("#cs3-type3").addEventListener("mouseover", cs3Type3);
function cs3Type3() {
   document.cshirt3.src = "Images/men-cs3-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Cream";
}
document.querySelector("#cs3-type4").addEventListener("mouseover", cs3Type4);
function cs3Type4() {
   document.cshirt3.src = "Images/men-cs3-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Pink";
}
// -mouseout from color images(cshirt3)
document.querySelector("#cs3-type1").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   cs3Type2();
}
document.querySelector("#cs3-type3").addEventListener("mouseout", type3Mout2);
function type3Mout2() {
   cs3Type2();
}
document.querySelector("#cs3-type4").addEventListener("mouseout", type3Mout3);
function type3Mout3() {
   cs3Type2();
}
//Top wear - cshirt4
var cshirt3 = [
   "Images/men-cs4.jpg",
   "Images/men-cs4-2.jpg",
   "Images/men-cs4-3.jpg",
   "Images/men-cs4-4.jpg",
];
var cs3 = 0;
document.cshirt4.src = "Images/men-cs4.jpg";
function setCshirt3() {
   document.cshirt4.src = cshirt3[cs3];
}
setInterval(function autoSlider3() {
   if (cs3 < cshirt3.length - 1) {
      cs3++;
   } else {
      cs3 = 0;
   }
   setCshirt3();
}, 10000);
document.querySelector("#leftbtn-cs4").addEventListener("click", leftbCshirt3);
function leftbCshirt3() {
   if (cs3 > 0) {
      cs3--;
   } else {
      cs3 = cshirt3.length - 1;
   }
   setCshirt3();
}
document
   .querySelector("#rightbtn-cs4")
   .addEventListener("click", rightbCshirt3);
function rightbCshirt3() {
   if (cs3 < cshirt3.length - 1) {
      cs3++;
   } else {
      cs3 = 0;
   }
   setCshirt3();
}
document.querySelector("#cart-cs4").addEventListener("click", cartCs4);
function cartCs4() {
   document.querySelector("#cart-cs4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-cs4").addEventListener("click", buyCs4);
function buyCs4() {
   const buyCshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCshirt <= 10 && buyCshirt > 0) {
      document.querySelector("#total-cs4").textContent =
         "Total Price : " + "₹" + 499 * buyCshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//out of stock
document.querySelector("#oos1").addEventListener("click", outOs1);
function outOs1() {
   alert("Out of stock");
}
//Top wear - cshirt5
var cshirt4 = [
   "Images/men-cs5.jpg",
   "Images/men-cs5-2.jpg",
   "Images/men-cs5-3.jpg",
   "Images/men-cs5-4.jpg",
];
var cs4 = 0;
document.cshirt5.src = "Images/men-cs5.jpg";
function setCshirt4() {
   document.cshirt5.src = cshirt4[cs4];
}
setInterval(function autoSlider4() {
   if (cs4 < cshirt4.length - 1) {
      cs4++;
   } else {
      cs4 = 0;
   }
   setCshirt4();
}, 10000);
document.querySelector("#leftbtn-cs5").addEventListener("click", leftbCshirt4);
function leftbCshirt4() {
   if (cs4 > 0) {
      cs4--;
   } else {
      cs4 = cshirt4.length - 1;
   }
   setCshirt4();
}
document
   .querySelector("#rightbtn-cs5")
   .addEventListener("click", rightbCshirt4);
function rightbCshirt4() {
   if (cs4 < cshirt4.length - 1) {
      cs4++;
   } else {
      cs4 = 0;
   }
   setCshirt4();
}
document.querySelector("#cart-cs5").addEventListener("click", cartCs5);
function cartCs5() {
   document.querySelector("#cart-cs5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-cs5").addEventListener("click", buyCs5);
function buyCs5() {
   const buyCshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCshirt <= 10 && buyCshirt > 0) {
      document.querySelector("#total-cs5").textContent =
         "Total Price : " + "₹" + 855 * buyCshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Top wear - cshirt6
var cshirt5 = [
   "Images/men-cs6.jpg",
   "Images/men-cs6-2.jpg",
   "Images/men-cs6-3.jpg",
   "Images/men-cs6-4.jpg",
];
var cs5 = 0;
document.cshirt6.src = "Images/men-cs6.jpg";
function setCshirt5() {
   document.cshirt6.src = cshirt5[cs5];
}
setInterval(function autoSlider5() {
   if (cs5 < cshirt5.length - 1) {
      cs5++;
   } else {
      cs5 = 0;
   }
   setCshirt5();
}, 10000);
document.querySelector("#leftbtn-cs6").addEventListener("click", leftbCshirt5);
function leftbCshirt5() {
   if (cs5 > 0) {
      cs5--;
   } else {
      cs5 = cshirt5.length - 1;
   }
   setCshirt5();
}
document
   .querySelector("#rightbtn-cs6")
   .addEventListener("click", rightbCshirt5);
function rightbCshirt5() {
   if (cs5 < cshirt5.length - 1) {
      cs5++;
   } else {
      cs5 = 0;
   }
   setCshirt5();
}
document.querySelector("#cart-cs6").addEventListener("click", cartCs6);
function cartCs6() {
   document.querySelector("#cart-cs6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-cs6").addEventListener("click", buyCs6);
function buyCs6() {
   const buyCshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCshirt <= 10 && buyCshirt > 0) {
      document.querySelector("#total-cs6").textContent =
         "Total Price : " + "₹" + 499 * buyCshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(cshirt6)
document.querySelector("#cs6-type1").addEventListener("mouseover", cs6Type1);
function cs6Type1() {
   document.cshirt6.src = "Images/men-cs6-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Sea Green";
}
document.querySelector("#cs6-type2").addEventListener("mouseover", cs6Type2);
function cs6Type2() {
   document.cshirt6.src = "Images/men-cs6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Rust Red";
}
document.querySelector("#cs6-type3").addEventListener("mouseover", cs6Type3);
function cs6Type3() {
   document.cshirt6.src = "Images/men-cs6-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Olive Green";
}
document.querySelector("#cs6-type4").addEventListener("mouseover", cs6Type4);
function cs6Type4() {
   document.cshirt6.src = "Images/men-cs6-7.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Maroon";
}
// -mouseout from color images(cshirt6)
document.querySelector("#cs6-type1").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   cs6Type2();
}
document.querySelector("#cs6-type3").addEventListener("mouseout", type6Mout2);
function type6Mout2() {
   cs6Type2();
}
document.querySelector("#cs6-type4").addEventListener("mouseout", type6Mout3);
function type6Mout3() {
   cs6Type2();
}
//Top wear - cshirt7
var cshirt6 = [
   "Images/men-cs7.jpg",
   "Images/men-cs7-2.jpg",
   "Images/men-cs7-3.jpg",
   "Images/men-cs7-4.jpg",
];
var cs6 = 0;
document.cshirt7.src = "Images/men-cs7.jpg";
function setCshirt6() {
   document.cshirt7.src = cshirt6[cs6];
}
setInterval(function autoSlider6() {
   if (cs6 < cshirt6.length - 1) {
      cs6++;
   } else {
      cs6 = 0;
   }
   setCshirt6();
}, 10000);
document.querySelector("#leftbtn-cs7").addEventListener("click", leftbCshirt6);
function leftbCshirt6() {
   if (cs6 > 0) {
      cs6--;
   } else {
      cs6 = cshirt6.length - 1;
   }
   setCshirt6();
}
document
   .querySelector("#rightbtn-cs7")
   .addEventListener("click", rightbCshirt6);
function rightbCshirt6() {
   if (cs6 < cshirt6.length - 1) {
      cs6++;
   } else {
      cs6 = 0;
   }
   setCshirt6();
}
document.querySelector("#cart-cs7").addEventListener("click", cartCs7);
function cartCs7() {
   document.querySelector("#cart-cs7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-cs7").addEventListener("click", buyCs7);
function buyCs7() {
   const buyCshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyCshirt <= 10 && buyCshirt > 0) {
      document.querySelector("#total-cs7").textContent =
         "Total Price : " + "₹" + 659 * buyCshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyCshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(cshirt7)
document.querySelector("#cs7-type1").addEventListener("mouseover", cs7Type1);
function cs7Type1() {
   document.cshirt7.src = "Images/men-cs7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Denim:Blue";
}
document.querySelector("#cs7-type2").addEventListener("mouseover", cs7Type2);
function cs7Type2() {
   document.cshirt7.src = "Images/men-cs7-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Black::Maroon";
}
document.querySelector("#cs7-type3").addEventListener("mouseover", cs7Type3);
function cs7Type3() {
   document.cshirt7.src = "Images/men-cs7-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Blue:Grey:Olive";
}
// -mouseout from color images(cshirt7)
document.querySelector("#cs7-type2").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   cs7Type1();
}
document.querySelector("#cs7-type3").addEventListener("mouseout", type7Mout2);
function type7Mout2() {
   cs7Type1();
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
