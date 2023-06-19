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
//Ethnic & Party Wears - Kurti 1
var kurti = [
   "Images/women-k1.jpg",
   "Images/women-k1-2.jpg",
   "Images/women-k1-3.jpg",
   "Images/women-k1-4.jpg",
];
var k = 0;
document.kurti1.src = "Images/women-k1.jpg";
function setKurti() {
   document.kurti1.src = kurti[k];
}
setInterval(function autoSlider() {
   if (k < kurti.length - 1) {
      k++;
   } else {
      k = 0;
   }
   setKurti();
}, 10000);
document.querySelector("#leftbtn-k1").addEventListener("click", leftbKurti);
function leftbKurti() {
   if (k > 0) {
      k--;
   } else {
      k = kurti.length - 1;
   }
   setKurti();
}
document.querySelector("#rightbtn-k1").addEventListener("click", rightbKurti);
function rightbKurti() {
   if (k < kurti.length - 1) {
      k++;
   } else {
      k = 0;
   }
   setKurti();
}
document.querySelector("#cart-k1").addEventListener("click", cartk1);
function cartk1() {
   document.querySelector("#cart-k1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-k1").addEventListener("click", buyk1);
function buyk1() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-k1").textContent =
         "Total Price : " + "₹" + 419 * buyEthnic + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Kurti 1)
document.querySelector("#k1-type1").addEventListener("mouseover", k1Type1);
function k1Type1() {
   document.kurti1.src = "Images/women-k1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Pink";
}
document.querySelector("#k1-type2").addEventListener("mouseover", k1Type2);
function k1Type2() {
   document.kurti1.src = "Images/women-k1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: White";
}
document.querySelector("#k1-type3").addEventListener("mouseover", k1Type3);
function k1Type3() {
   document.kurti1.src = "Images/women-k1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Yellow";
}
document.querySelector("#k1-type4").addEventListener("mouseover", k1Type4);
function k1Type4() {
   document.kurti1.src = "Images/women-k1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Beige";
}
document.querySelector("#k1-type5").addEventListener("mouseover", k1Type5);
function k1Type5() {
   document.kurti1.src = "Images/women-k1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Silver";
}
// -mouseout (Kurti 1)
document.querySelector("#k1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   k1Type1();
}
document.querySelector("#k1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#k1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#k1-type5").addEventListener("mouseout", type1Mout1);
//Ethnic & Party Wears - Kurti 2
var kurti1 = [
   "Images/women-k2.jpg",
   "Images/women-k2-2.jpg",
   "Images/women-k2-3.jpg",
   "Images/women-k2-4.jpg",
];
var k1 = 0;
document.kurti2.src = "Images/women-k2.jpg";
function setKurti1() {
   document.kurti2.src = kurti1[k1];
}
setInterval(function autoSlider1() {
   if (k1 < kurti1.length - 1) {
      k1++;
   } else {
      k1 = 0;
   }
   setKurti1();
}, 10000);
document.querySelector("#leftbtn-k2").addEventListener("click", leftbKurti1);
function leftbKurti1() {
   if (k1 > 0) {
      k1--;
   } else {
      k1 = kurti1.length - 1;
   }
   setKurti1();
}
document.querySelector("#rightbtn-k2").addEventListener("click", rightbKurti1);
function rightbKurti1() {
   if (k1 < kurti1.length - 1) {
      k1++;
   } else {
      k1 = 0;
   }
   setKurti1();
}
document.querySelector("#cart-k2").addEventListener("click", cartk2);
function cartk2() {
   document.querySelector("#cart-k2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-k2").addEventListener("click", buyk2);
function buyk2() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-k2").textContent =
         "Total Price : " + "₹" + 469 * buyEthnic + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Kurti 2)
document.querySelector("#k2-type1").addEventListener("mouseover", k2Type1);
function k2Type1() {
   document.kurti2.src = "Images/women-k2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Sea Blue";
}
document.querySelector("#k2-type2").addEventListener("mouseover", k2Type2);
function k2Type2() {
   document.kurti2.src = "Images/women-k2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Light Green";
}
document.querySelector("#k2-type3").addEventListener("mouseover", k2Type3);
function k2Type3() {
   document.kurti2.src = "Images/women-k2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Grey";
}
document.querySelector("#k2-type4").addEventListener("mouseover", k2Type4);
function k2Type4() {
   document.kurti2.src = "Images/women-k2-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Pink";
}
document.querySelector("#k2-type5").addEventListener("mouseover", k2Type5);
function k2Type5() {
   document.kurti2.src = "Images/women-k2-8.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Yellow";
}
// -mouseout (Kurti 2)
document.querySelector("#k2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   k2Type1();
}
document.querySelector("#k2-type3").addEventListener("mouseout", type2Mout1);
document.querySelector("#k2-type4").addEventListener("mouseout", type2Mout1);
document.querySelector("#k2-type5").addEventListener("mouseout", type2Mout1);
//Ethnic & Party Wears - Kurti 3
var kurti2 = [
   "Images/women-k3.jpg",
   "Images/women-k3-2.jpg",
   "Images/women-k3-3.jpg",
   "Images/women-k3-4.jpg",
];
var k2 = 0;
document.kurti3.src = "Images/women-k3.jpg";
function setKurti2() {
   document.kurti3.src = kurti2[k2];
}
setInterval(function autoSlider2() {
   if (k2 < kurti2.length - 1) {
      k2++;
   } else {
      k2 = 0;
   }
   setKurti2();
}, 10000);
document.querySelector("#leftbtn-k3").addEventListener("click", leftbKurti2);
function leftbKurti2() {
   if (k2 > 0) {
      k2--;
   } else {
      k2 = kurti2.length - 1;
   }
   setKurti2();
}
document.querySelector("#rightbtn-k3").addEventListener("click", rightbKurti2);
function rightbKurti2() {
   if (k2 < kurti2.length - 1) {
      k2++;
   } else {
      k2 = 0;
   }
   setKurti2();
}
document.querySelector("#cart-k3").addEventListener("click", cartk3);
function cartk3() {
   document.querySelector("#cart-k3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-k3").addEventListener("click", buyk3);
function buyk3() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-k3").textContent =
         "Total Price : " + "₹" + 384 * buyEthnic + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Kurti 3)
document.querySelector("#k3-type1").addEventListener("mouseover", k3Type1);
function k3Type1() {
   document.kurti3.src = "Images/women-k3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Green";
}
document.querySelector("#k3-type2").addEventListener("mouseover", k3Type2);
function k3Type2() {
   document.kurti3.src = "Images/women-k3-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Brown/Silver";
}
// -mouseout (Kurti 3)
document.querySelector("#k3-type2").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   k3Type1();
}
//Ethnic & Party Wears - Kurti 4
var kurti3 = [
   "Images/women-k4.jpg",
   "Images/women-k4-2.jpg",
   "Images/women-k4-3.jpg",
   "Images/women-k4-4.jpg",
];
var k3 = 0;
document.kurti4.src = "Images/women-k4.jpg";
function setKurti3() {
   document.kurti4.src = kurti3[k3];
}
setInterval(function autoSlider3() {
   if (k3 < kurti3.length - 1) {
      k3++;
   } else {
      k3 = 0;
   }
   setKurti3();
}, 10000);
document.querySelector("#leftbtn-k4").addEventListener("click", leftbKurti3);
function leftbKurti3() {
   if (k3 > 0) {
      k3--;
   } else {
      k3 = kurti3.length - 1;
   }
   setKurti3();
}
document.querySelector("#rightbtn-k4").addEventListener("click", rightbKurti3);
function rightbKurti3() {
   if (k3 < kurti3.length - 1) {
      k3++;
   } else {
      k3 = 0;
   }
   setKurti3();
}
document.querySelector("#cart-k4").addEventListener("click", cartk4);
function cartk4() {
   document.querySelector("#cart-k4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-k4").addEventListener("click", buyk4);
function buyk4() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-k4").textContent =
         "Total Price : " + "₹" + 539 * buyEthnic + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Kurti 4)
document.querySelector("#k4-type1").addEventListener("mouseover", k4Type1);
function k4Type1() {
   document.kurti4.src = "Images/women-k4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Maroon";
}
document.querySelector("#k4-type2").addEventListener("mouseover", k4Type2);
function k4Type2() {
   document.kurti4.src = "Images/women-k4-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Green";
}
// -mouseout (Kurti 4)
document.querySelector("#k4-type2").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   k4Type1();
}
//Ethnic & Party Wears - Kurti 5
var kurti4 = [
   "Images/women-k5.jpg",
   "Images/women-k5-2.jpg",
   "Images/women-k5-3.jpg",
   "Images/women-k5-4.jpg",
];
var k4 = 0;
document.kurti5.src = "Images/women-k5.jpg";
function setKurti4() {
   document.kurti5.src = kurti4[k4];
}
setInterval(function autoSlider4() {
   if (k4 < kurti4.length - 1) {
      k4++;
   } else {
      k4 = 0;
   }
   setKurti4();
}, 10000);
document.querySelector("#leftbtn-k5").addEventListener("click", leftbKurti4);
function leftbKurti4() {
   if (k4 > 0) {
      k4--;
   } else {
      k4 = kurti4.length - 1;
   }
   setKurti4();
}
document.querySelector("#rightbtn-k5").addEventListener("click", rightbKurti4);
function rightbKurti4() {
   if (k4 < kurti4.length - 1) {
      k4++;
   } else {
      k4 = 0;
   }
   setKurti4();
}
document.querySelector("#cart-k5").addEventListener("click", cartk5);
function cartk5() {
   document.querySelector("#cart-k5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-k5").addEventListener("click", buyk5);
function buyk5() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-k5").textContent =
         "Total Price : " + "₹" + 509 * buyEthnic + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Kurti 5)
document.querySelector("#k5-type1").addEventListener("mouseover", k5Type1);
function k5Type1() {
   document.kurti5.src = "Images/women-k5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Yellow";
}
document.querySelector("#k5-type2").addEventListener("mouseover", k5Type2);
function k5Type2() {
   document.kurti5.src = "Images/women-k5-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: White";
}
// -mouseout (Kurti 5)
document.querySelector("#k5-type2").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   k5Type1();
}
//Ethnic & Party Wears - Kurti 6
var kurti5 = [
   "Images/women-k6.jpg",
   "Images/women-k6-2.jpg",
   "Images/women-k6-3.jpg",
   "Images/women-k6-4.jpg",
];
var k5 = 0;
document.kurti6.src = "Images/women-k6.jpg";
function setKurti5() {
   document.kurti6.src = kurti5[k5];
}
setInterval(function autoSlider5() {
   if (k5 < kurti5.length - 1) {
      k5++;
   } else {
      k5 = 0;
   }
   setKurti5();
}, 10000);
document.querySelector("#leftbtn-k6").addEventListener("click", leftbKurti5);
function leftbKurti5() {
   if (k5 > 0) {
      k5--;
   } else {
      k5 = kurti5.length - 1;
   }
   setKurti5();
}
document.querySelector("#rightbtn-k6").addEventListener("click", rightbKurti5);
function rightbKurti5() {
   if (k5 < kurti5.length - 1) {
      k5++;
   } else {
      k5 = 0;
   }
   setKurti5();
}
document.querySelector("#cart-k6").addEventListener("click", cartk6);
function cartk6() {
   document.querySelector("#cart-k6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-k6").addEventListener("click", buyk6);
function buyk6() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-k6").textContent =
         "Total Price : " + "₹" + 389 * buyEthnic + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Kurti 6)
document.querySelector("#k6-type1").addEventListener("mouseover", k6Type1);
function k6Type1() {
   document.kurti6.src = "Images/women-k6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Black";
}
document.querySelector("#k6-type2").addEventListener("mouseover", k6Type2);
function k6Type2() {
   document.kurti6.src = "Images/women-k6-5.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Yellow";
}
document.querySelector("#k6-type3").addEventListener("mouseover", k6Type3);
function k6Type3() {
   document.kurti6.src = "Images/women-k6-6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Navy Blue";
}
document.querySelector("#k6-type4").addEventListener("mouseover", k6Type4);
function k6Type4() {
   document.kurti6.src = "Images/women-k6-7.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Red";
}
// -mouseout (Kurti 6)
document.querySelector("#k6-type2").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   k6Type1();
}
document.querySelector("#k6-type3").addEventListener("mouseout", type6Mout1);
document.querySelector("#k6-type4").addEventListener("mouseout", type6Mout1);
// out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of stock");
}
//Ethnic & Party Wears - Kurti 7
var kurti6 = [
   "Images/women-k7.jpg",
   "Images/women-k7-2.jpg",
   "Images/women-k7-3.jpg",
   "Images/women-k7-4.jpg",
];
var k6 = 0;
document.kurti7.src = "Images/women-k7.jpg";
function setKurti6() {
   document.kurti7.src = kurti6[k6];
}
setInterval(function autoSlider6() {
   if (k6 < kurti6.length - 1) {
      k6++;
   } else {
      k6 = 0;
   }
   setKurti6();
}, 10000);
document.querySelector("#leftbtn-k7").addEventListener("click", leftbKurti6);
function leftbKurti6() {
   if (k6 > 0) {
      k6--;
   } else {
      k6 = kurti6.length - 1;
   }
   setKurti6();
}
document.querySelector("#rightbtn-k7").addEventListener("click", rightbKurti6);
function rightbKurti6() {
   if (k6 < kurti6.length - 1) {
      k6++;
   } else {
      k6 = 0;
   }
   setKurti6();
}
document.querySelector("#cart-k7").addEventListener("click", cartk7);
function cartk7() {
   document.querySelector("#cart-k7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-k7").addEventListener("click", buyk7);
function buyk7() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-k7").textContent =
         "Total Price : " + "₹" + 299 * buyEthnic + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Ethnic & Party Wears - Kurti 8
var kurti7 = [
   "Images/women-k8.jpg",
   "Images/women-k8-2.jpg",
   "Images/women-k8-3.jpg",
   "Images/women-k8-4.jpg",
];
var k7 = 0;
document.kurti8.src = "Images/women-k8.jpg";
function setKurti7() {
   document.kurti8.src = kurti7[k7];
}
setInterval(function autoSlider7() {
   if (k7 < kurti7.length - 1) {
      k7++;
   } else {
      k7 = 0;
   }
   setKurti7();
}, 10000);
document.querySelector("#leftbtn-k8").addEventListener("click", leftbKurti7);
function leftbKurti7() {
   if (k7 > 0) {
      k7--;
   } else {
      k7 = kurti7.length - 1;
   }
   setKurti7();
}
document.querySelector("#rightbtn-k8").addEventListener("click", rightbKurti7);
function rightbKurti7() {
   if (k7 < kurti7.length - 1) {
      k7++;
   } else {
      k7 = 0;
   }
   setKurti7();
}
document.querySelector("#cart-k8").addEventListener("click", cartk8);
function cartk8() {
   document.querySelector("#cart-k8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-k8").addEventListener("click", buyk8);
function buyk8() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-k8").textContent =
         "Total Price : " + "₹" + 599 * buyEthnic + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Ethnic & Party Wears - Kurti 9
var kurti8 = [
   "Images/women-k9.jpg",
   "Images/women-k9-2.jpg",
   "Images/women-k9-3.jpg",
   "Images/women-k9-4.jpg",
];
var k8 = 0;
document.kurti9.src = "Images/women-k9.jpg";
function setKurti8() {
   document.kurti9.src = kurti8[k8];
}
setInterval(function autoSlider8() {
   if (k8 < kurti8.length - 1) {
      k8++;
   } else {
      k8 = 0;
   }
   setKurti8();
}, 10000);
document.querySelector("#leftbtn-k9").addEventListener("click", leftbKurti8);
function leftbKurti8() {
   if (k8 > 0) {
      k8--;
   } else {
      k8 = kurti8.length - 1;
   }
   setKurti8();
}
document.querySelector("#rightbtn-k9").addEventListener("click", rightbKurti8);
function rightbKurti8() {
   if (k8 < kurti8.length - 1) {
      k8++;
   } else {
      k8 = 0;
   }
   setKurti8();
}
document.querySelector("#cart-k9").addEventListener("click", cartk9);
function cartk9() {
   document.querySelector("#cart-k9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-k9").addEventListener("click", buyk9);
function buyk9() {
   const buyEthnic = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyEthnic <= 10 && buyEthnic > 0) {
      document.querySelector("#total-k9").textContent =
         "Total Price : " + "₹" + 749 * buyEthnic + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyEthnic === 0) {
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
