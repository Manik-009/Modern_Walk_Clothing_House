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
//Women Western Wear- Dress 1
var dress = [
   "Images/women-d1.jpg",
   "Images/women-d1-2.jpg",
   "Images/women-d1-3.jpg",
   "Images/women-d1-4.jpg",
];
var d = 0;
document.dress1.src = "Images/women-d1.jpg";
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
document.querySelector("#cart-d1").addEventListener("click", cartd1);
function cartd1() {
   document.querySelector("#cart-d1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-d1").addEventListener("click", buyd1);
function buyd1() {
   const buyDress = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyDress <= 10 && buyDress > 0) {
      document.querySelector("#total-d1").textContent =
         "Total Price : " + "₹" + 426 * buyDress + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyDress === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Dress 1)
document.querySelector("#d1-type1").addEventListener("mouseover", d1Type1);
function d1Type1() {
   document.dress1.src = "Images/women-d1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Purple";
}
document.querySelector("#d1-type2").addEventListener("mouseover", d1Type2);
function d1Type2() {
   document.dress1.src = "Images/women-d1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Light Green";
}
document.querySelector("#d1-type3").addEventListener("mouseover", d1Type3);
function d1Type3() {
   document.dress1.src = "Images/women-d1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Mustard";
}
document.querySelector("#d1-type4").addEventListener("mouseover", d1Type4);
function d1Type4() {
   document.dress1.src = "Images/women-d1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Sky Blue";
}
document.querySelector("#d1-type5").addEventListener("mouseover", d1Type5);
function d1Type5() {
   document.dress1.src = "Images/women-d1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Light Wine";
}
// -mouseout (Dress 1)
document.querySelector("#d1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   d1Type1();
}
document.querySelector("#d1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#d1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#d1-type5").addEventListener("mouseout", type1Mout1);
//Women Western Wear- Dress 2
var dress1 = [
   "Images/women-d2.jpg",
   "Images/women-d2-2.jpg",
   "Images/women-d2-3.jpg",
   "Images/women-d2-4.jpg",
];
var d1 = 0;
document.dress2.src = "Images/women-d2.jpg";
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
document.querySelector("#cart-d2").addEventListener("click", cartd2);
function cartd2() {
   document.querySelector("#cart-d2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-d2").addEventListener("click", buyd2);
function buyd2() {
   const buyDress = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyDress <= 10 && buyDress > 0) {
      document.querySelector("#total-d2").textContent =
         "Total Price : " + "₹" + 595 * buyDress + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyDress === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Dress 2)
document.querySelector("#d2-type1").addEventListener("mouseover", d2Type1);
function d2Type1() {
   document.dress2.src = "Images/women-d2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black";
}
document.querySelector("#d2-type2").addEventListener("mouseover", d2Type2);
function d2Type2() {
   document.dress2.src = "Images/women-d2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Red";
}
// -mouseout (Dress 2)
document.querySelector("#d2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   d2Type1();
}
// Out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of stock");
}
document.querySelector("#oos2").addEventListener("click", outOfStock);
//Women Western Wear- Dress 3
var dress2 = [
   "Images/women-d3.jpg",
   "Images/women-d3-2.jpg",
   "Images/women-d3-3.jpg",
   "Images/women-d3-4.jpg",
];
var d2 = 0;
document.dress3.src = "Images/women-d3.jpg";
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
document.querySelector("#cart-d3").addEventListener("click", cartd3);
function cartd3() {
   document.querySelector("#cart-d3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-d3").addEventListener("click", buyd3);
function buyd3() {
   const buyDress = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyDress <= 10 && buyDress > 0) {
      document.querySelector("#total-d3").textContent =
         "Total Price : " + "₹" + 599 * buyDress + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyDress === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Dress 3)
document.querySelector("#d3-type1").addEventListener("mouseover", d3Type1);
function d3Type1() {
   document.dress3.src = "Images/women-d3-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Pink";
}
document.querySelector("#d3-type2").addEventListener("mouseover", d3Type2);
function d3Type2() {
   document.dress3.src = "Images/women-d3-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Yellow";
}
document.querySelector("#d3-type3").addEventListener("mouseover", d3Type3);
function d3Type3() {
   document.dress3.src = "Images/women-d3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Sea Blue";
}
// -mouseout (Dress 3)
document.querySelector("#d3-type1").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   d3Type3();
}
document.querySelector("#d3-type2").addEventListener("mouseout", type3Mout1);
//Women Western Wear- Dress 4
var dress3 = [
   "Images/women-d4.jpg",
   "Images/women-d4-2.jpg",
   "Images/women-d4-3.jpg",
   "Images/women-d4-4.jpg",
];
var d3 = 0;
document.dress4.src = "Images/women-d4.jpg";
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
document.querySelector("#cart-d4").addEventListener("click", cartd4);
function cartd4() {
   document.querySelector("#cart-d4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-d4").addEventListener("click", buyd4);
function buyd4() {
   const buyDress = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyDress <= 10 && buyDress > 0) {
      document.querySelector("#total-d4").textContent =
         "Total Price : " + "₹" + 594 * buyDress + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyDress === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Women Western Wear- Dress 5
var dress4 = [
   "Images/women-d5.jpg",
   "Images/women-d5-2.jpg",
   "Images/women-d5-3.jpg",
   "Images/women-d5-4.jpg",
];
var d4 = 0;
document.dress5.src = "Images/women-d5.jpg";
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
document.querySelector("#cart-d5").addEventListener("click", cartd5);
function cartd5() {
   document.querySelector("#cart-d5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-d5").addEventListener("click", buyd5);
function buyd5() {
   const buyDress = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyDress <= 10 && buyDress > 0) {
      document.querySelector("#total-d5").textContent =
         "Total Price : " + "₹" + 539 * buyDress + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyDress === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Women Western Wear- Dress 6
var dress5 = [
   "Images/women-d6.jpg",
   "Images/women-d6-2.jpg",
   "Images/women-d6-3.jpg",
   "Images/women-d6-4.jpg",
];
var d5 = 0;
document.dress6.src = "Images/women-d6.jpg";
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
document.querySelector("#cart-d6").addEventListener("click", cartd6);
function cartd6() {
   document.querySelector("#cart-d6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-d6").addEventListener("click", buyd6);
function buyd6() {
   const buyDress = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyDress <= 10 && buyDress > 0) {
      document.querySelector("#total-d6").textContent =
         "Total Price : " + "₹" + 640 * buyDress + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyDress === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Dress 6)
document.querySelector("#d6-type1").addEventListener("mouseover", d6Type1);
function d6Type1() {
   document.dress6.src = "Images/women-d6-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Black";
}
document.querySelector("#d6-type2").addEventListener("mouseover", d6Type2);
function d6Type2() {
   document.dress6.src = "Images/women-d6-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: White";
}
document.querySelector("#d6-type3").addEventListener("mouseover", d6Type3);
function d6Type3() {
   document.dress6.src = "Images/women-d6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Wine";
}
// -mouseout (Dress 6)
document.querySelector("#d6-type1").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   d6Type3();
}
document.querySelector("#d6-type2").addEventListener("mouseout", type6Mout1);
//Women Western Wear- Dress 7
var dress6 = [
   "Images/women-d7.jpg",
   "Images/women-d7-2.jpg",
   "Images/women-d7-3.jpg",
   "Images/women-d7-4.jpg",
];
var d6 = 0;
document.dress7.src = "Images/women-d7.jpg";
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
document.querySelector("#cart-d7").addEventListener("click", cartd7);
function cartd7() {
   document.querySelector("#cart-d7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-d7").addEventListener("click", buyd7);
function buyd7() {
   const buyDress = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyDress <= 10 && buyDress > 0) {
      document.querySelector("#total-d7").textContent =
         "Total Price : " + "₹" + 649 * buyDress + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyDress === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Dress 7)
document.querySelector("#d7-type1").addEventListener("mouseover", d7Type1);
function d7Type1() {
   document.dress7.src = "Images/women-d7-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Black/Red";
}
document.querySelector("#d7-type2").addEventListener("mouseover", d7Type2);
function d7Type2() {
   document.dress7.src = "Images/women-d7-6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Black/Blue";
}
document.querySelector("#d7-type3").addEventListener("mouseover", d7Type3);
function d7Type3() {
   document.dress7.src = "Images/women-d7-7.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Black/Yellow";
}
document.querySelector("#d7-type4").addEventListener("mouseover", d7Type4);
function d7Type4() {
   document.dress7.src = "Images/women-d7.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Black/White";
}
// -mouseout (Dress 7)
document.querySelector("#d7-type1").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   d7Type4();
}
document.querySelector("#d7-type2").addEventListener("mouseout", type7Mout1);
document.querySelector("#d7-type3").addEventListener("mouseout", type7Mout1);
//Women Western Wear- Dress 8
var dress7 = [
   "Images/women-d8.jpg",
   "Images/women-d8-2.jpg",
   "Images/women-d8-3.jpg",
   "Images/women-d8-4.jpg",
];
var d7 = 0;
document.dress8.src = "Images/women-d8.jpg";
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
document.querySelector("#cart-d8").addEventListener("click", cartd8);
function cartd8() {
   document.querySelector("#cart-d8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-d8").addEventListener("click", buyd8);
function buyd8() {
   const buyDress = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyDress <= 10 && buyDress > 0) {
      document.querySelector("#total-d8").textContent =
         "Total Price : " + "₹" + 690 * buyDress + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyDress === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Women Western Wear- Dress 9
var dress8 = [
   "Images/women-d9.jpg",
   "Images/women-d9-2.jpg",
   "Images/women-d9-3.jpg",
   "Images/women-d9-4.jpg",
];
var d8 = 0;
document.dress9.src = "Images/women-d9.jpg";
function setDress8() {
   document.dress9.src = dress8[d8];
}
setInterval(function autoSlider8() {
   if (d8 < dress8.length - 1) {
      d8++;
   } else {
      d8 = 0;
   }
   setDress8();
}, 10000);
document.querySelector("#leftbtn-d9").addEventListener("click", leftbDress8);
function leftbDress8() {
   if (d8 > 0) {
      d8--;
   } else {
      d8 = dress8.length - 1;
   }
   setDress8();
}
document.querySelector("#rightbtn-d9").addEventListener("click", rightbDress8);
function rightbDress8() {
   if (d8 < dress8.length - 1) {
      d8++;
   } else {
      d8 = 0;
   }
   setDress8();
}
document.querySelector("#cart-d9").addEventListener("click", cartd9);
function cartd9() {
   document.querySelector("#cart-d9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-d9").addEventListener("click", buyd9);
function buyd9() {
   const buyDress = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyDress <= 10 && buyDress > 0) {
      document.querySelector("#total-d9").textContent =
         "Total Price : " + "₹" + 599 * buyDress + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyDress === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//Women Western Wear- Dress 10
var dress9 = [
   "Images/women-d10.jpg",
   "Images/women-d10-2.jpg",
   "Images/women-d10-3.jpg",
   "Images/women-d10-4.jpg",
];
var d9 = 0;
document.dress10.src = "Images/women-d10.jpg";
function setDress9() {
   document.dress10.src = dress9[d9];
}
setInterval(function autoSlider9() {
   if (d9 < dress9.length - 1) {
      d9++;
   } else {
      d9 = 0;
   }
   setDress9();
}, 10000);
document.querySelector("#leftbtn-d10").addEventListener("click", leftbDress9);
function leftbDress9() {
   if (d9 > 0) {
      d9--;
   } else {
      d9 = dress9.length - 1;
   }
   setDress9();
}
document.querySelector("#rightbtn-d10").addEventListener("click", rightbDress9);
function rightbDress9() {
   if (d9 < dress9.length - 1) {
      d9++;
   } else {
      d9 = 0;
   }
   setDress9();
}
document.querySelector("#cart-d10").addEventListener("click", cartd10);
function cartd10() {
   document.querySelector("#cart-d10").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-d10").addEventListener("click", buyd10);
function buyd10() {
   const buyDress = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyDress <= 10 && buyDress > 0) {
      document.querySelector("#total-d10").textContent =
         "Total Price : " + "₹" + 699 * buyDress + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyDress === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Dress 10)
document.querySelector("#d10-type1").addEventListener("mouseover", d10Type1);
function d10Type1() {
   document.dress10.src = "Images/women-d10.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Pink";
}
document.querySelector("#d10-type2").addEventListener("mouseover", d10Type2);
function d10Type2() {
   document.dress10.src = "Images/women-d10-5.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Maroon";
}
document.querySelector("#d10-type3").addEventListener("mouseover", d10Type3);
function d10Type3() {
   document.dress10.src = "Images/women-d10-6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: Red";
}
document.querySelector("#d10-type4").addEventListener("mouseover", d10Type4);
function d10Type4() {
   document.dress10.src = "Images/women-d10-7.jpg";
   document.querySelector("#color-name5").innerHTML = " Color: White";
}
// -mouseout (Dress 10)
document.querySelector("#d10-type2").addEventListener("mouseout", type10Mout1);
function type10Mout1() {
   d10Type1();
}
document.querySelector("#d10-type3").addEventListener("mouseout", type10Mout1);
document.querySelector("#d10-type4").addEventListener("mouseout", type10Mout1);
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
