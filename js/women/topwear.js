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
//Women Western Wear- Topwear 1
var topwear = [
   "Images/women-tw1.jpg",
   "Images/women-tw1-2.jpg",
   "Images/women-tw1-3.jpg",
   "Images/women-tw1-4.jpg",
];
var tw = 0;
document.topwear1.src = "Images/women-tw1.jpg";
function setTopwear() {
   document.topwear1.src = topwear[tw];
}
setInterval(function autoSlider() {
   if (tw < topwear.length - 1) {
      tw++;
   } else {
      tw = 0;
   }
   setTopwear();
}, 10000);
document.querySelector("#leftbtn-tw1").addEventListener("click", leftbTopwear);
function leftbTopwear() {
   if (tw > 0) {
      tw--;
   } else {
      tw = topwear.length - 1;
   }
   setTopwear();
}
document
   .querySelector("#rightbtn-tw1")
   .addEventListener("click", rightbTopwear);
function rightbTopwear() {
   if (tw < topwear.length - 1) {
      tw++;
   } else {
      tw = 0;
   }
   setTopwear();
}
document.querySelector("#cart-tw1").addEventListener("click", carttw1);
function carttw1() {
   document.querySelector("#cart-tw1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-tw1").addEventListener("click", buytw1);
function buytw1() {
   const buyTopwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTopwear <= 10 && buyTopwear > 0) {
      document.querySelector("#total-tw1").textContent =
         "Total Price : " + "₹" + 370 * buyTopwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTopwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Topwear 1)
document.querySelector("#tw1-type1").addEventListener("mouseover", tw1Type1);
function tw1Type1() {
   document.topwear1.src = "Images/women-tw1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: White";
}
document.querySelector("#tw1-type2").addEventListener("mouseover", tw1Type2);
function tw1Type2() {
   document.topwear1.src = "Images/women-tw1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black";
}
document.querySelector("#tw1-type3").addEventListener("mouseover", tw1Type3);
function tw1Type3() {
   document.topwear1.src = "Images/women-tw1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Khaki";
}
document.querySelector("#tw1-type4").addEventListener("mouseover", tw1Type4);
function tw1Type4() {
   document.topwear1.src = "Images/women-tw1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Pink";
}
document.querySelector("#tw1-type5").addEventListener("mouseover", tw1Type5);
function tw1Type5() {
   document.topwear1.src = "Images/women-tw1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Red";
}
// -mouseout (Topwear 1)
document.querySelector("#tw1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   tw1Type1();
}
document.querySelector("#tw1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#tw1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#tw1-type5").addEventListener("mouseout", type1Mout1);
//Women Western Wear- Topwear 2
var topwear1 = [
   "Images/women-tw2.jpg",
   "Images/women-tw2-2.jpg",
   "Images/women-tw2-3.jpg",
   "Images/women-tw2-4.jpg",
];
var tw1 = 0;
document.topwear2.src = "Images/women-tw2.jpg";
function setTopwear1() {
   document.topwear2.src = topwear1[tw1];
}
setInterval(function autoSlider1() {
   if (tw1 < topwear1.length - 1) {
      tw1++;
   } else {
      tw1 = 0;
   }
   setTopwear1();
}, 10000);
document.querySelector("#leftbtn-tw2").addEventListener("click", leftbTopwear1);
function leftbTopwear1() {
   if (tw1 > 0) {
      tw1--;
   } else {
      tw1 = topwear1.length - 1;
   }
   setTopwear1();
}
document
   .querySelector("#rightbtn-tw2")
   .addEventListener("click", rightbTopwear1);
function rightbTopwear1() {
   if (tw1 < topwear1.length - 1) {
      tw1++;
   } else {
      tw1 = 0;
   }
   setTopwear1();
}
document.querySelector("#cart-tw2").addEventListener("click", carttw2);
function carttw2() {
   document.querySelector("#cart-tw2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-tw2").addEventListener("click", buytw2);
function buytw2() {
   const buyTopwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTopwear <= 10 && buyTopwear > 0) {
      document.querySelector("#total-tw2").textContent =
         "Total Price : " + "₹" + 299 * buyTopwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTopwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Topwear 2)
document.querySelector("#tw2-type1").addEventListener("mouseover", tw2Type1);
function tw2Type1() {
   document.topwear2.src = "Images/women-tw2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Light Green";
}
document.querySelector("#tw2-type2").addEventListener("mouseover", tw2Type2);
function tw2Type2() {
   document.topwear2.src = "Images/women-tw2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Maroon";
}
document.querySelector("#tw2-type3").addEventListener("mouseover", tw2Type3);
function tw2Type3() {
   document.topwear2.src = "Images/women-tw2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Baby Pink";
}
document.querySelector("#tw2-type4").addEventListener("mouseover", tw2Type4);
function tw2Type4() {
   document.topwear2.src = "Images/women-tw2-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Red";
}
// -mouseout (Topwear 2)
document.querySelector("#tw2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   tw2Type1();
}
document.querySelector("#tw2-type3").addEventListener("mouseout", type2Mout1);
document.querySelector("#tw2-type4").addEventListener("mouseout", type2Mout1);
//Women Western Wear- Topwear 3
var topwear2 = [
   "Images/women-tw3.jpg",
   "Images/women-tw3-2.jpg",
   "Images/women-tw3-3.jpg",
   "Images/women-tw3-4.jpg",
];
var tw2 = 0;
document.topwear3.src = "Images/women-tw3.jpg";
function setTopwear2() {
   document.topwear3.src = topwear2[tw2];
}
setInterval(function autoSlider2() {
   if (tw2 < topwear2.length - 1) {
      tw2++;
   } else {
      tw2 = 0;
   }
   setTopwear2();
}, 10000);
document.querySelector("#leftbtn-tw3").addEventListener("click", leftbTopwear2);
function leftbTopwear2() {
   if (tw2 > 0) {
      tw2--;
   } else {
      tw2 = topwear2.length - 1;
   }
   setTopwear2();
}
document
   .querySelector("#rightbtn-tw3")
   .addEventListener("click", rightbTopwear2);
function rightbTopwear2() {
   if (tw2 < topwear2.length - 1) {
      tw2++;
   } else {
      tw2 = 0;
   }
   setTopwear2();
}
document.querySelector("#cart-tw3").addEventListener("click", carttw3);
function carttw3() {
   document.querySelector("#cart-tw3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-tw3").addEventListener("click", buytw3);
function buytw3() {
   const buyTopwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTopwear <= 10 && buyTopwear > 0) {
      document.querySelector("#total-tw3").textContent =
         "Total Price : " + "₹" + 449 * buyTopwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTopwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Topwear 3)
document.querySelector("#tw3-type1").addEventListener("mouseover", tw3Type1);
function tw3Type1() {
   document.topwear3.src = "Images/women-tw3-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Blue";
}
document.querySelector("#tw3-type2").addEventListener("mouseover", tw3Type2);
function tw3Type2() {
   document.topwear3.src = "Images/women-tw3-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Green";
}
document.querySelector("#tw3-type3").addEventListener("mouseover", tw3Type3);
function tw3Type3() {
   document.topwear3.src = "Images/women-tw3-7.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Maroon";
}
document.querySelector("#tw3-type4").addEventListener("mouseover", tw3Type4);
function tw3Type4() {
   document.topwear3.src = "Images/women-tw3-8.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Red";
}
document.querySelector("#tw3-type5").addEventListener("mouseover", tw3Type5);
function tw3Type5() {
   document.topwear3.src = "Images/women-tw3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Black";
}
// -mouseout (Topwear 3)
document.querySelector("#tw3-type1").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   tw3Type5();
}
document.querySelector("#tw3-type2").addEventListener("mouseout", type3Mout1);
document.querySelector("#tw3-type3").addEventListener("mouseout", type3Mout1);
document.querySelector("#tw3-type4").addEventListener("mouseout", type3Mout1);
//Women Western Wear- Topwear 4
var topwear3 = [
   "Images/women-tw4.jpg",
   "Images/women-tw4-2.jpg",
   "Images/women-tw4-3.jpg",
   "Images/women-tw4-4.jpg",
];
var tw3 = 0;
document.topwear4.src = "Images/women-tw4.jpg";
function setTopwear3() {
   document.topwear4.src = topwear3[tw3];
}
setInterval(function autoSlider3() {
   if (tw3 < topwear3.length - 1) {
      tw3++;
   } else {
      tw3 = 0;
   }
   setTopwear3();
}, 10000);
document.querySelector("#leftbtn-tw4").addEventListener("click", leftbTopwear3);
function leftbTopwear3() {
   if (tw3 > 0) {
      tw3--;
   } else {
      tw3 = topwear3.length - 1;
   }
   setTopwear3();
}
document
   .querySelector("#rightbtn-tw4")
   .addEventListener("click", rightbTopwear3);
function rightbTopwear3() {
   if (tw3 < topwear3.length - 1) {
      tw3++;
   } else {
      tw3 = 0;
   }
   setTopwear3();
}
document.querySelector("#cart-tw4").addEventListener("click", carttw4);
function carttw4() {
   document.querySelector("#cart-tw4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-tw4").addEventListener("click", buytw4);
function buytw4() {
   const buyTopwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTopwear <= 10 && buyTopwear > 0) {
      document.querySelector("#total-tw4").textContent =
         "Total Price : " + "₹" + 499 * buyTopwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTopwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Topwear 4)
document.querySelector("#tw4-type1").addEventListener("mouseover", tw4Type1);
function tw4Type1() {
   document.topwear4.src = "Images/women-tw4-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Baby Pink";
}
document.querySelector("#tw4-type2").addEventListener("mouseover", tw4Type2);
function tw4Type2() {
   document.topwear4.src = "Images/women-tw4-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Light Green";
}
document.querySelector("#tw4-type3").addEventListener("mouseover", tw4Type3);
function tw4Type3() {
   document.topwear4.src = "Images/women-tw4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: White";
}
// -mouseout (Topwear 4)
document.querySelector("#tw4-type1").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   tw4Type3();
}
document.querySelector("#tw4-type2").addEventListener("mouseout", type4Mout1);
// out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of stock");
}
document.querySelector("#oos2").addEventListener("click", outOfStock);
//Women Western Wear- Topwear 5
var topwear4 = [
   "Images/women-tw5.jpg",
   "Images/women-tw5-2.jpg",
   "Images/women-tw5-3.jpg",
   "Images/women-tw5-4.jpg",
];
var tw4 = 0;
document.topwear5.src = "Images/women-tw5.jpg";
function setTopwear4() {
   document.topwear5.src = topwear4[tw4];
}
setInterval(function autoSlider4() {
   if (tw4 < topwear4.length - 1) {
      tw4++;
   } else {
      tw4 = 0;
   }
   setTopwear4();
}, 10000);
document.querySelector("#leftbtn-tw5").addEventListener("click", leftbTopwear4);
function leftbTopwear4() {
   if (tw4 > 0) {
      tw4--;
   } else {
      tw4 = topwear4.length - 1;
   }
   setTopwear4();
}
document
   .querySelector("#rightbtn-tw5")
   .addEventListener("click", rightbTopwear4);
function rightbTopwear4() {
   if (tw4 < topwear4.length - 1) {
      tw4++;
   } else {
      tw4 = 0;
   }
   setTopwear4();
}
document.querySelector("#cart-tw5").addEventListener("click", carttw5);
function carttw5() {
   document.querySelector("#cart-tw5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-tw5").addEventListener("click", buytw5);
function buytw5() {
   const buyTopwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTopwear <= 10 && buyTopwear > 0) {
      document.querySelector("#total-tw5").textContent =
         "Total Price : " + "₹" + 499 * buyTopwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTopwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Topwear 5)
document.querySelector("#tw5-type1").addEventListener("mouseover", tw5Type1);
function tw5Type1() {
   document.topwear5.src = "Images/women-tw5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Royal Blue";
}
document.querySelector("#tw5-type2").addEventListener("mouseover", tw5Type2);
function tw5Type2() {
   document.topwear5.src = "Images/women-tw5-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Black";
}
document.querySelector("#tw5-type3").addEventListener("mouseover", tw5Type3);
function tw5Type3() {
   document.topwear5.src = "Images/women-tw5-6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Green";
}
document.querySelector("#tw5-type4").addEventListener("mouseover", tw5Type4);
function tw5Type4() {
   document.topwear5.src = "Images/women-tw5-7.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Maroon";
}
document.querySelector("#tw5-type5").addEventListener("mouseover", tw5Type5);
function tw5Type5() {
   document.topwear5.src = "Images/women-tw5-8.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Mehendi";
}
document.querySelector("#tw5-type6").addEventListener("mouseover", tw5Type6);
function tw5Type6() {
   document.topwear5.src = "Images/women-tw5-9.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Red";
}
document.querySelector("#tw5-type7").addEventListener("mouseover", tw5Type7);
function tw5Type7() {
   document.topwear5.src = "Images/women-tw5-10.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: White";
}
// -mouseout (Topwear 5)
document.querySelector("#tw5-type2").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   tw5Type1();
}
document.querySelector("#tw5-type3").addEventListener("mouseout", type5Mout1);
document.querySelector("#tw5-type4").addEventListener("mouseout", type5Mout1);
document.querySelector("#tw5-type5").addEventListener("mouseout", type5Mout1);
document.querySelector("#tw5-type6").addEventListener("mouseout", type5Mout1);
document.querySelector("#tw5-type7").addEventListener("mouseout", type5Mout1);
//Women Western Wear- Topwear 6
var topwear5 = [
   "Images/women-tw6.jpg",
   "Images/women-tw6-2.jpg",
   "Images/women-tw6-3.jpg",
   "Images/women-tw6-4.jpg",
];
var tw5 = 0;
document.topwear6.src = "Images/women-tw6.jpg";
function setTopwear5() {
   document.topwear6.src = topwear5[tw5];
}
setInterval(function autoSlider5() {
   if (tw5 < topwear5.length - 1) {
      tw5++;
   } else {
      tw5 = 0;
   }
   setTopwear5();
}, 10000);
document.querySelector("#leftbtn-tw6").addEventListener("click", leftbTopwear5);
function leftbTopwear5() {
   if (tw5 > 0) {
      tw5--;
   } else {
      tw5 = topwear5.length - 1;
   }
   setTopwear5();
}
document
   .querySelector("#rightbtn-tw6")
   .addEventListener("click", rightbTopwear5);
function rightbTopwear5() {
   if (tw5 < topwear5.length - 1) {
      tw5++;
   } else {
      tw5 = 0;
   }
   setTopwear5();
}
document.querySelector("#cart-tw6").addEventListener("click", carttw6);
function carttw6() {
   document.querySelector("#cart-tw6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-tw6").addEventListener("click", buytw6);
function buytw6() {
   const buyTopwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTopwear <= 10 && buyTopwear > 0) {
      document.querySelector("#total-tw6").textContent =
         "Total Price : " + "₹" + 350 * buyTopwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTopwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Topwear 6)
document.querySelector("#tw6-type1").addEventListener("mouseover", tw6Type1);
function tw6Type1() {
   document.topwear6.src = "Images/women-tw6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Yellow";
}
document.querySelector("#tw6-type2").addEventListener("mouseover", tw6Type2);
function tw6Type2() {
   document.topwear6.src = "Images/women-tw6-5.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Coral";
}
document.querySelector("#tw6-type3").addEventListener("mouseover", tw6Type3);
function tw6Type3() {
   document.topwear6.src = "Images/women-tw6-6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Navy Blue";
}
// -mouseout (Topwear 6)
document.querySelector("#tw6-type2").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   tw6Type1();
}
document.querySelector("#tw6-type3").addEventListener("mouseout", type6Mout1);
//Women Western Wear- Topwear 7
var topwear6 = [
   "Images/women-tw7.jpg",
   "Images/women-tw7-2.jpg",
   "Images/women-tw7-3.jpg",
   "Images/women-tw7-4.jpg",
];
var tw6 = 0;
document.topwear7.src = "Images/women-tw7.jpg";
function setTopwear6() {
   document.topwear7.src = topwear6[tw6];
}
setInterval(function autoSlider6() {
   if (tw6 < topwear6.length - 1) {
      tw6++;
   } else {
      tw6 = 0;
   }
   setTopwear6();
}, 10000);
document.querySelector("#leftbtn-tw7").addEventListener("click", leftbTopwear6);
function leftbTopwear6() {
   if (tw6 > 0) {
      tw6--;
   } else {
      tw6 = topwear6.length - 1;
   }
   setTopwear6();
}
document
   .querySelector("#rightbtn-tw7")
   .addEventListener("click", rightbTopwear6);
function rightbTopwear6() {
   if (tw6 < topwear6.length - 1) {
      tw6++;
   } else {
      tw6 = 0;
   }
   setTopwear6();
}
document.querySelector("#cart-tw7").addEventListener("click", carttw7);
function carttw7() {
   document.querySelector("#cart-tw7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-tw7").addEventListener("click", buytw7);
function buytw7() {
   const buyTopwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTopwear <= 10 && buyTopwear > 0) {
      document.querySelector("#total-tw7").textContent =
         "Total Price : " + "₹" + 435 * buyTopwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTopwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Topwear 7)
document.querySelector("#tw7-type1").addEventListener("mouseover", tw7Type1);
function tw7Type1() {
   document.topwear7.src = "Images/women-tw7.jpg";
   document.querySelector("#color-name6").innerHTML = " Color: Multicolour 1";
}
document.querySelector("#tw7-type2").addEventListener("mouseover", tw7Type2);
function tw7Type2() {
   document.topwear7.src = "Images/women-tw7-5.jpg";
   document.querySelector("#color-name6").innerHTML = " Color: Multicolour 2";
}
document.querySelector("#tw7-type3").addEventListener("mouseover", tw7Type3);
function tw7Type3() {
   document.topwear7.src = "Images/women-tw7-6.jpg";
   document.querySelector("#color-name6").innerHTML = " Color: Multicolour 3";
}
// -mouseout (Topwear 7)
document.querySelector("#tw7-type2").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   tw7Type1();
}
document.querySelector("#tw7-type3").addEventListener("mouseout", type7Mout1);
//Women Western Wear- Topwear 8
var topwear7 = [
   "Images/women-tw8.jpg",
   "Images/women-tw8-2.jpg",
   "Images/women-tw8-3.jpg",
   "Images/women-tw8-4.jpg",
];
var tw7 = 0;
document.topwear8.src = "Images/women-tw8.jpg";
function setTopwear7() {
   document.topwear8.src = topwear7[tw7];
}
setInterval(function autoSlider7() {
   if (tw7 < topwear7.length - 1) {
      tw7++;
   } else {
      tw7 = 0;
   }
   setTopwear7();
}, 10000);
document.querySelector("#leftbtn-tw8").addEventListener("click", leftbTopwear7);
function leftbTopwear7() {
   if (tw7 > 0) {
      tw7--;
   } else {
      tw7 = topwear7.length - 1;
   }
   setTopwear7();
}
document
   .querySelector("#rightbtn-tw8")
   .addEventListener("click", rightbTopwear7);
function rightbTopwear7() {
   if (tw7 < topwear7.length - 1) {
      tw7++;
   } else {
      tw7 = 0;
   }
   setTopwear7();
}
document.querySelector("#cart-tw8").addEventListener("click", carttw8);
function carttw8() {
   document.querySelector("#cart-tw8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-tw8").addEventListener("click", buytw8);
function buytw8() {
   const buyTopwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTopwear <= 10 && buyTopwear > 0) {
      document.querySelector("#total-tw8").textContent =
         "Total Price : " + "₹" + 329 * buyTopwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTopwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Women Western Wear- Topwear 9
var topwear8 = [
   "Images/women-tw9.jpg",
   "Images/women-tw9-2.jpg",
   "Images/women-tw9-3.jpg",
   "Images/women-tw9-4.jpg",
];
var tw8 = 0;
document.topwear9.src = "Images/women-tw9.jpg";
function setTopwear8() {
   document.topwear9.src = topwear8[tw8];
}
setInterval(function autoSlider8() {
   if (tw8 < topwear8.length - 1) {
      tw8++;
   } else {
      tw8 = 0;
   }
   setTopwear8();
}, 10000);
document.querySelector("#leftbtn-tw9").addEventListener("click", leftbTopwear8);
function leftbTopwear8() {
   if (tw8 > 0) {
      tw8--;
   } else {
      tw8 = topwear8.length - 1;
   }
   setTopwear8();
}
document
   .querySelector("#rightbtn-tw9")
   .addEventListener("click", rightbTopwear8);
function rightbTopwear8() {
   if (tw8 < topwear8.length - 1) {
      tw8++;
   } else {
      tw8 = 0;
   }
   setTopwear8();
}
document.querySelector("#cart-tw9").addEventListener("click", carttw9);
function carttw9() {
   document.querySelector("#cart-tw9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-tw9").addEventListener("click", buytw9);
function buytw9() {
   const buyTopwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTopwear <= 10 && buyTopwear > 0) {
      document.querySelector("#total-tw9").textContent =
         "Total Price : " + "₹" + 499 * buyTopwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTopwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Women Western Wear- Topwear 10
var topwear9 = [
   "Images/women-tw10.jpg",
   "Images/women-tw10-2.jpg",
   "Images/women-tw10-3.jpg",
   "Images/women-tw10-4.jpg",
];
var tw9 = 0;
document.topwear10.src = "Images/women-tw10.jpg";
function setTopwear9() {
   document.topwear10.src = topwear9[tw9];
}
setInterval(function autoSlider9() {
   if (tw9 < topwear9.length - 1) {
      tw9++;
   } else {
      tw9 = 0;
   }
   setTopwear9();
}, 10000);
document
   .querySelector("#leftbtn-tw10")
   .addEventListener("click", leftbTopwear9);
function leftbTopwear9() {
   if (tw9 > 0) {
      tw9--;
   } else {
      tw9 = topwear9.length - 1;
   }
   setTopwear9();
}
document
   .querySelector("#rightbtn-tw10")
   .addEventListener("click", rightbTopwear9);
function rightbTopwear9() {
   if (tw9 < topwear9.length - 1) {
      tw9++;
   } else {
      tw9 = 0;
   }
   setTopwear9();
}
document.querySelector("#cart-tw10").addEventListener("click", carttw10);
function carttw10() {
   document.querySelector("#cart-tw10").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-tw10").addEventListener("click", buytw10);
function buytw10() {
   const buyTopwear = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyTopwear <= 10 && buyTopwear > 0) {
      document.querySelector("#total-tw10").textContent =
         "Total Price : " + "₹" + 329 * buyTopwear + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyTopwear === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//wishlist hearts
//item 1
const topWearheart1 = () => {
   if (document.querySelector("#topwhrt1").innerHTML != "❤️") {
      document.querySelector("#topwhrt1").innerHTML = "❤️";
      document.querySelector("#topwhrt1").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#topwhrt1").innerHTML = "🤍";
      document.querySelector("#topwhrt1").style.animation = "none";
   }
};
document.querySelector("#topwhrt1").addEventListener("click", topWearheart1);
//item 2
const topWearheart2 = () => {
   if (document.querySelector("#topwhrt2").innerHTML != "❤️") {
      document.querySelector("#topwhrt2").innerHTML = "❤️";
      document.querySelector("#topwhrt2").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#topwhrt2").innerHTML = "🤍";
      document.querySelector("#topwhrt2").style.animation = "none";
   }
};
document.querySelector("#topwhrt2").addEventListener("click", topWearheart2);
//item 3
const topWearheart3 = () => {
   if (document.querySelector("#topwhrt3").innerHTML != "❤️") {
      document.querySelector("#topwhrt3").innerHTML = "❤️";
      document.querySelector("#topwhrt3").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#topwhrt3").innerHTML = "🤍";
      document.querySelector("#topwhrt3").style.animation = "none";
   }
};
document.querySelector("#topwhrt3").addEventListener("click", topWearheart3);
//item 4
const topWearheart4 = () => {
   if (document.querySelector("#topwhrt4").innerHTML != "❤️") {
      document.querySelector("#topwhrt4").innerHTML = "❤️";
      document.querySelector("#topwhrt4").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#topwhrt4").innerHTML = "🤍";
      document.querySelector("#topwhrt4").style.animation = "none";
   }
};
document.querySelector("#topwhrt4").addEventListener("click", topWearheart4);
//item 5
const topWearheart5 = () => {
   if (document.querySelector("#topwhrt5").innerHTML != "❤️") {
      document.querySelector("#topwhrt5").innerHTML = "❤️";
      document.querySelector("#topwhrt5").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#topwhrt5").innerHTML = "🤍";
      document.querySelector("#topwhrt5").style.animation = "none";
   }
};
document.querySelector("#topwhrt5").addEventListener("click", topWearheart5);
//item 6
const topWearheart6 = () => {
   if (document.querySelector("#topwhrt6").innerHTML != "❤️") {
      document.querySelector("#topwhrt6").innerHTML = "❤️";
      document.querySelector("#topwhrt6").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#topwhrt6").innerHTML = "🤍";
      document.querySelector("#topwhrt6").style.animation = "none";
   }
};
document.querySelector("#topwhrt6").addEventListener("click", topWearheart6);
//item 7
const topWearheart7 = () => {
   if (document.querySelector("#topwhrt7").innerHTML != "❤️") {
      document.querySelector("#topwhrt7").innerHTML = "❤️";
      document.querySelector("#topwhrt7").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#topwhrt7").innerHTML = "🤍";
      document.querySelector("#topwhrt7").style.animation = "none";
   }
};
document.querySelector("#topwhrt7").addEventListener("click", topWearheart7);
//item 8
const topWearheart8 = () => {
   if (document.querySelector("#topwhrt8").innerHTML != "❤️") {
      document.querySelector("#topwhrt8").innerHTML = "❤️";
      document.querySelector("#topwhrt8").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#topwhrt8").innerHTML = "🤍";
      document.querySelector("#topwhrt8").style.animation = "none";
   }
};
document.querySelector("#topwhrt8").addEventListener("click", topWearheart8);
//item 9
const topWearheart9 = () => {
   if (document.querySelector("#topwhrt9").innerHTML != "❤️") {
      document.querySelector("#topwhrt9").innerHTML = "❤️";
      document.querySelector("#topwhrt9").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#topwhrt9").innerHTML = "🤍";
      document.querySelector("#topwhrt9").style.animation = "none";
   }
};
document.querySelector("#topwhrt9").addEventListener("click", topWearheart9);
//item 10
const topWearheart10 = () => {
   if (document.querySelector("#topwhrt10").innerHTML != "❤️") {
      document.querySelector("#topwhrt10").innerHTML = "❤️";
      document.querySelector("#topwhrt10").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#topwhrt10").innerHTML = "🤍";
      document.querySelector("#topwhrt10").style.animation = "none";
   }
};
document.querySelector("#topwhrt10").addEventListener("click", topWearheart10);
