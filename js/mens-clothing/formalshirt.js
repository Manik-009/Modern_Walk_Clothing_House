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
//Top wear - fshirt1
var fshirt = [
   "Images/men-fs1.jpg",
   "Images/men-fs1-2.jpg",
   "Images/men-fs1-3.jpg",
   "Images/men-fs1-4.jpg",
];
var fs = 0;
document.fshirt1.src = "Images/men-fs1.jpg";
function setFshirt() {
   document.fshirt1.src = fshirt[fs];
}
setInterval(function autoSlider() {
   if (fs < fshirt.length - 1) {
      fs++;
   } else {
      fs = 0;
   }
   setFshirt();
}, 10000);
document.querySelector("#leftbtn-fs1").addEventListener("click", leftbFshirt);
function leftbFshirt() {
   if (fs > 0) {
      fs--;
   } else {
      fs = fshirt.length - 1;
   }
   setFshirt();
}
document.querySelector("#rightbtn-fs1").addEventListener("click", rightbFshirt);
function rightbFshirt() {
   if (fs < fshirt.length - 1) {
      fs++;
   } else {
      fs = 0;
   }
   setFshirt();
}
document.querySelector("#cart-fs1").addEventListener("click", cartFs1);
function cartFs1() {
   document.querySelector("#cart-fs1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fs1").addEventListener("click", buyFs1);
function buyFs1() {
   const buyFshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFshirt <= 10 && buyFshirt > 0) {
      document.querySelector("#total-fs1").textContent =
         "Total Price : " + "₹" + 279 * buyFshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Top wear - fshirt2
var fshirt1 = [
   "Images/men-fs2.jpg",
   "Images/men-fs2-2.jpg",
   "Images/men-fs2-3.jpg",
   "Images/men-fs2-4.jpg",
];
var fs1 = 0;
document.fshirt2.src = "Images/men-fs2.jpg";
function setFshirt1() {
   document.fshirt2.src = fshirt1[fs1];
}
setInterval(function autoSlider1() {
   if (fs1 < fshirt1.length - 1) {
      fs1++;
   } else {
      fs1 = 0;
   }
   setFshirt1();
}, 10000);
document.querySelector("#leftbtn-fs2").addEventListener("click", leftbFshirt1);
function leftbFshirt1() {
   if (fs1 > 0) {
      fs1--;
   } else {
      fs1 = fshirt1.length - 1;
   }
   setFshirt1();
}
document
   .querySelector("#rightbtn-fs2")
   .addEventListener("click", rightbFshirt1);
function rightbFshirt1() {
   if (fs1 < fshirt1.length - 1) {
      fs1++;
   } else {
      fs1 = 0;
   }
   setFshirt1();
}
document.querySelector("#cart-fs2").addEventListener("click", cartFs2);
function cartFs2() {
   document.querySelector("#cart-fs2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fs2").addEventListener("click", buyFs2);
function buyFs2() {
   const buyFshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFshirt <= 10 && buyFshirt > 0) {
      document.querySelector("#total-fs2").textContent =
         "Total Price : " + "₹" + 809 * buyFshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//out of stock size
document.querySelector("#oos1").addEventListener("click", oos1);
function oos1() {
   alert("Out of stock");
}
//Top wear - fshirt3
var fshirt2 = [
   "Images/men-fs3.jpg",
   "Images/men-fs3-2.jpg",
   "Images/men-fs3-3.jpg",
   "Images/men-fs3-4.jpg",
];
var fs2 = 0;
document.fshirt3.src = "Images/men-fs3.jpg";
function setFshirt2() {
   document.fshirt3.src = fshirt2[fs2];
}
setInterval(function autoSlider2() {
   if (fs2 < fshirt2.length - 1) {
      fs2++;
   } else {
      fs2 = 0;
   }
   setFshirt2();
}, 10000);
document.querySelector("#leftbtn-fs3").addEventListener("click", leftbFshirt2);
function leftbFshirt2() {
   if (fs2 > 0) {
      fs2--;
   } else {
      fs2 = fshirt2.length - 1;
   }
   setFshirt2();
}
document
   .querySelector("#rightbtn-fs3")
   .addEventListener("click", rightbFshirt2);
function rightbFshirt2() {
   if (fs2 < fshirt2.length - 1) {
      fs2++;
   } else {
      fs2 = 0;
   }
   setFshirt2();
}
document.querySelector("#cart-fs3").addEventListener("click", cartFs3);
function cartFs3() {
   document.querySelector("#cart-fs3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fs3").addEventListener("click", buyFs3);
function buyFs3() {
   const buyFshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFshirt <= 10 && buyFshirt > 0) {
      document.querySelector("#total-fs3").textContent =
         "Total Price : " + "₹" + 799 * buyFshirt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(fshirt3)
document.querySelector("#fs3-type1").addEventListener("mouseover", fs3Type1);
function fs3Type1() {
   document.fshirt3.src = "Images/men-fs3-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black";
}
document.querySelector("#fs3-type2").addEventListener("mouseover", fs3Type2);
function fs3Type2() {
   document.fshirt3.src = "Images/men-fs3-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Navy Blue";
}
document.querySelector("#fs3-type3").addEventListener("mouseover", fs3Type3);
function fs3Type3() {
   document.fshirt3.src = "Images/men-fs3-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Cream";
}
document.querySelector("#fs3-type4").addEventListener("mouseover", fs3Type4);
function fs3Type4() {
   document.fshirt3.src = "Images/men-fs3-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Light Pink";
}
document.querySelector("#fs3-type5").addEventListener("mouseover", fs3Type5);
function fs3Type5() {
   document.fshirt3.src = "Images/men-fs3-9.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Blue";
}
document.querySelector("#fs3-type6").addEventListener("mouseover", fs3Type6);
function fs3Type6() {
   document.fshirt3.src = "Images/men-fs3.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Maroon";
}
// -mouseout from color images(fshirt3)
document.querySelector("#fs3-type1").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   fs3Type6();
}
document.querySelector("#fs3-type2").addEventListener("mouseout", type1Mout2);
function type1Mout2() {
   fs3Type6();
}
document.querySelector("#fs3-type3").addEventListener("mouseout", type1Mout3);
function type1Mout3() {
   fs3Type6();
}
document.querySelector("#fs3-type4").addEventListener("mouseout", type1Mout4);
function type1Mout4() {
   fs3Type6();
}
document.querySelector("#fs3-type5").addEventListener("mouseout", type1Mout5);
function type1Mout5() {
   fs3Type6();
}
//Top wear - fshirt4
var fshirt3 = [
   "Images/men-fs4.jpg",
   "Images/men-fs4-2.jpg",
   "Images/men-fs4-3.jpg",
   "Images/men-fs4-4.jpg",
];
var fs3 = 0;
document.fshirt4.src = "Images/men-fs4.jpg";
function setFshirt3() {
   document.fshirt4.src = fshirt3[fs3];
}
setInterval(function autoSlider3() {
   if (fs3 < fshirt3.length - 1) {
      fs3++;
   } else {
      fs3 = 0;
   }
   setFshirt3();
}, 10000);
document.querySelector("#leftbtn-fs4").addEventListener("click", leftbFshirt3);
function leftbFshirt3() {
   if (fs3 > 0) {
      fs3--;
   } else {
      fs3 = fshirt3.length - 1;
   }
   setFshirt3();
}
document
   .querySelector("#rightbtn-fs4")
   .addEventListener("click", rightbFshirt3);
function rightbFshirt3() {
   if (fs3 < fshirt3.length - 1) {
      fs3++;
   } else {
      fs3 = 0;
   }
   setFshirt3();
}
document.querySelector("#cart-fs4").addEventListener("click", cartFs4);
function cartFs4() {
   document.querySelector("#cart-fs4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fs4").addEventListener("click", buyFs4);
function buyFs4() {
   const buyFshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFshirt <= 7 && buyFshirt > 0) {
      document.querySelector("#total-fs4").textContent =
         "Total Price : " + "₹" + 244 * buyFshirt + "  only";
      document.querySelector("#total-fs4").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyFshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 7 pieces left !!!");
   }
}
//color variety
// -mouseover on color images(fshirt4)
document.querySelector("#fs4-type1").addEventListener("mouseover", fs4Type1);
function fs4Type1() {
   document.fshirt4.src = "Images/men-fs4-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Dark Grey";
}
document.querySelector("#fs4-type2").addEventListener("mouseover", fs4Type2);
function fs4Type2() {
   document.fshirt4.src = "Images/men-fs4-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Navy Blue";
}
document.querySelector("#fs4-type3").addEventListener("mouseover", fs4Type3);
function fs4Type3() {
   document.fshirt4.src = "Images/men-fs4.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Red";
}
document.querySelector("#fs4-type4").addEventListener("mouseover", fs4Type4);
function fs4Type4() {
   document.fshirt4.src = "Images/men-fs4-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Violet";
}
// -mouseout from color images(fshirt4)
document.querySelector("#fs4-type1").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   fs4Type3();
}
document.querySelector("#fs4-type2").addEventListener("mouseout", type2Mout2);
function type2Mout2() {
   fs4Type3();
}
document.querySelector("#fs4-type4").addEventListener("mouseout", type2Mout3);
function type2Mout3() {
   fs4Type3();
}
//Top wear - fshirt5
var fshirt4 = [
   "Images/men-fs5.jpg",
   "Images/men-fs5-2.jpg",
   "Images/men-fs5-3.jpg",
   "Images/men-fs5-4.jpg",
];
var fs4 = 0;
document.fshirt5.src = "Images/men-fs5.jpg";
function setFshirt4() {
   document.fshirt5.src = fshirt4[fs4];
}
setInterval(function autoSlider4() {
   if (fs4 < fshirt4.length - 1) {
      fs4++;
   } else {
      fs4 = 0;
   }
   setFshirt4();
}, 10000);
document.querySelector("#leftbtn-fs5").addEventListener("click", leftbFshirt4);
function leftbFshirt4() {
   if (fs4 > 0) {
      fs4--;
   } else {
      fs4 = fshirt4.length - 1;
   }
   setFshirt4();
}
document
   .querySelector("#rightbtn-fs5")
   .addEventListener("click", rightbFshirt4);
function rightbFshirt4() {
   if (fs4 < fshirt4.length - 1) {
      fs4++;
   } else {
      fs4 = 0;
   }
   setFshirt4();
}
document.querySelector("#cart-fs5").addEventListener("click", cartFs5);
function cartFs5() {
   document.querySelector("#cart-fs5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fs5").addEventListener("click", buyFs5);
function buyFs5() {
   const buyFshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFshirt <= 10 && buyFshirt > 0) {
      document.querySelector("#total-fs5").textContent =
         "Total Price : " + "₹" + 479 * buyFshirt + "  only";
      document.querySelector("#total-fs4").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyFshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Top wear - fshirt6
var fshirt5 = [
   "Images/men-fs6.jpg",
   "Images/men-fs6-2.jpg",
   "Images/men-fs6-3.jpg",
   "Images/men-fs6-4.jpg",
];
var fs5 = 0;
document.fshirt6.src = "Images/men-fs6.jpg";
function setFshirt5() {
   document.fshirt6.src = fshirt5[fs5];
}
setInterval(function autoSlider5() {
   if (fs5 < fshirt5.length - 1) {
      fs5++;
   } else {
      fs5 = 0;
   }
   setFshirt5();
}, 10000);
document.querySelector("#leftbtn-fs6").addEventListener("click", leftbFshirt5);
function leftbFshirt5() {
   if (fs5 > 0) {
      fs5--;
   } else {
      fs5 = fshirt5.length - 1;
   }
   setFshirt5();
}
document
   .querySelector("#rightbtn-fs6")
   .addEventListener("click", rightbFshirt5);
function rightbFshirt5() {
   if (fs5 < fshirt5.length - 1) {
      fs5++;
   } else {
      fs5 = 0;
   }
   setFshirt5();
}
document.querySelector("#cart-fs6").addEventListener("click", cartFs6);
function cartFs6() {
   document.querySelector("#cart-fs6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fs6").addEventListener("click", buyFs6);
function buyFs6() {
   const buyFshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFshirt <= 4 && buyFshirt > 0) {
      document.querySelector("#total-fs6").textContent =
         "Total Price : " + "₹" + 558 * buyFshirt + "  only";
      document.querySelector("#total-fs4").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyFshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 4 pieces left !!!");
   }
}
//out of stock
function outOs() {
   alert("Out of stock");
}
document.querySelector("#oos2").addEventListener("click", oos2);
function oos2() {
   outOs();
}
document.querySelector("#oos3").addEventListener("click", oos3);
function oos3() {
   outOs();
}
document.querySelector("#oos4").addEventListener("click", oos4);
function oos4() {
   outOs();
}
//color variety
// -mouseover on color images(fshirt6)
document.querySelector("#fs6-type1").addEventListener("mouseover", fs6Type1);
function fs6Type1() {
   document.fshirt6.src = "Images/men-fs6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Green";
}
document.querySelector("#fs6-type2").addEventListener("mouseover", fs6Type2);
function fs6Type2() {
   document.fshirt6.src = "Images/men-fs6-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Black";
}
// -mouseout from color images(fshirt6)
document.querySelector("#fs6-type2").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   fs6Type1();
}
//Top wear - fshirt7
var fshirt6 = [
   "Images/men-fs7.jpg",
   "Images/men-fs7-2.jpg",
   "Images/men-fs7-3.jpg",
   "Images/men-fs7-4.jpg",
];
var fs6 = 0;
document.fshirt7.src = "Images/men-fs7.jpg";
function setFshirt6() {
   document.fshirt7.src = fshirt6[fs6];
}
setInterval(function autoSlider6() {
   if (fs6 < fshirt6.length - 1) {
      fs6++;
   } else {
      fs6 = 0;
   }
   setFshirt6();
}, 10000);
document.querySelector("#leftbtn-fs7").addEventListener("click", leftbFshirt6);
function leftbFshirt6() {
   if (fs6 > 0) {
      fs6--;
   } else {
      fs6 = fshirt6.length - 1;
   }
   setFshirt6();
}
document
   .querySelector("#rightbtn-fs7")
   .addEventListener("click", rightbFshirt6);
function rightbFshirt6() {
   if (fs6 < fshirt6.length - 1) {
      fs6++;
   } else {
      fs6 = 0;
   }
   setFshirt6();
}
document.querySelector("#cart-fs7").addEventListener("click", cartFs7);
function cartFs7() {
   document.querySelector("#cart-fs7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fs7").addEventListener("click", buyFs7);
function buyFs7() {
   const buyFshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFshirt <= 10 && buyFshirt > 0) {
      document.querySelector("#total-fs7").textContent =
         "Total Price : " + "₹" + 429 * buyFshirt + "  only";
      document.querySelector("#total-fs4").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyFshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(fshirt7)
document.querySelector("#fs7-type1").addEventListener("mouseover", fs7Type1);
function fs7Type1() {
   document.fshirt7.src = "Images/men-fs7-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Maroon";
}
document.querySelector("#fs7-type2").addEventListener("mouseover", fs7Type2);
function fs7Type2() {
   document.fshirt7.src = "Images/men-fs7-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Blue";
}
document.querySelector("#fs7-type3").addEventListener("mouseover", fs7Type3);
function fs7Type3() {
   document.fshirt7.src = "Images/men-fs7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Purple";
}
// -mouseout from color images(fshirt7)
document.querySelector("#fs7-type1").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   fs7Type3();
}
document.querySelector("#fs7-type2").addEventListener("mouseout", type7Mout2);
function type7Mout2() {
   fs7Type3();
}
//Top wear - fshirt8
var fshirt7 = [
   "Images/men-fs8.jpg",
   "Images/men-fs8-2.jpg",
   "Images/men-fs8-3.jpg",
   "Images/men-fs8-4.jpg",
];
var fs7 = 0;
document.fshirt8.src = "Images/men-fs8.jpg";
function setFshirt7() {
   document.fshirt8.src = fshirt7[fs7];
}
setInterval(function autoSlider7() {
   if (fs7 < fshirt7.length - 1) {
      fs7++;
   } else {
      fs7 = 0;
   }
   setFshirt7();
}, 10000);
document.querySelector("#leftbtn-fs8").addEventListener("click", leftbFshirt7);
function leftbFshirt7() {
   if (fs7 > 0) {
      fs7--;
   } else {
      fs7 = fshirt7.length - 1;
   }
   setFshirt7();
}
document
   .querySelector("#rightbtn-fs8")
   .addEventListener("click", rightbFshirt7);
function rightbFshirt7() {
   if (fs7 < fshirt7.length - 1) {
      fs7++;
   } else {
      fs7 = 0;
   }
   setFshirt7();
}
document.querySelector("#cart-fs8").addEventListener("click", cartFs8);
function cartFs8() {
   document.querySelector("#cart-fs8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fs8").addEventListener("click", buyFs8);
function buyFs8() {
   const buyFshirt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFshirt <= 10 && buyFshirt > 0) {
      document.querySelector("#total-fs8").textContent =
         "Total Price : " + "₹" + 549 * buyFshirt + "  only";
      document.querySelector("#total-fs4").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyFshirt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(fshirt8)
document.querySelector("#fs8-type1").addEventListener("mouseover", fs8Type1);
function fs8Type1() {
   document.fshirt8.src = "Images/men-fs8-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Sky Blue";
}
document.querySelector("#fs8-type2").addEventListener("mouseover", fs8Type2);
function fs8Type2() {
   document.fshirt8.src = "Images/men-fs8-6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Hot Pink";
}
document.querySelector("#fs8-type3").addEventListener("mouseover", fs8Type3);
function fs8Type3() {
   document.fshirt8.src = "Images/men-fs8.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Mint Green";
}
document.querySelector("#fs8-type4").addEventListener("mouseover", fs8Type4);
function fs8Type4() {
   document.fshirt8.src = "Images/men-fs8-7.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Yellow";
}
document.querySelector("#fs8-type5").addEventListener("mouseover", fs8Type5);
function fs8Type5() {
   document.fshirt8.src = "Images/men-fs8-8.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Light Purple";
}
// -mouseout from color images(fshirt8)
document.querySelector("#fs8-type1").addEventListener("mouseout", type8Mout1);
function type8Mout1() {
   fs8Type3();
}
document.querySelector("#fs8-type2").addEventListener("mouseout", type8Mout2);
function type8Mout2() {
   fs8Type3();
}
document.querySelector("#fs8-type4").addEventListener("mouseout", type8Mout3);
function type8Mout3() {
   fs8Type3();
}
document.querySelector("#fs8-type5").addEventListener("mouseout", type8Mout4);
function type8Mout4() {
   fs8Type3();
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
