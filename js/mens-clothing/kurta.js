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
//Ethnic wear - Kurta 1
var kurta = [
   "Images/men-k1.jpg",
   "Images/men-k1-2.jpg",
   "Images/men-k1-3.jpg",
   "Images/men-k1-4.jpg",
];
var k = 0;
document.kurta1.src = "Images/men-k1.jpg";
function setKurta() {
   document.kurta1.src = kurta[k];
}
setInterval(function autoSlider() {
   if (k < kurta.length - 1) {
      k++;
   } else {
      k = 0;
   }
   setKurta();
}, 10000);
document.querySelector("#leftbtn-k1").addEventListener("click", leftbKurta);
function leftbKurta() {
   if (k > 0) {
      k--;
   } else {
      k = kurta.length - 1;
   }
   setKurta();
}
document.querySelector("#rightbtn-k1").addEventListener("click", rightbKurta);
function rightbKurta() {
   if (k < kurta.length - 1) {
      k++;
   } else {
      k = 0;
   }
   setKurta();
}
document.querySelector("#cart-k1").addEventListener("click", cartKurta1);
function cartKurta1() {
   document.querySelector("#cart-k1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-k1").addEventListener("click", buyKurta1);
function buyKurta1() {
   const buyKurta = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyKurta <= 10 && buyKurta > 0) {
      document.querySelector("#total-k1").textContent =
         "Total Price : " + "₹" + 549 * buyKurta + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyKurta === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(kurta 1)
document.querySelector("#k1-type1").addEventListener("mouseover", k1Type1);
function k1Type1() {
   document.kurta1.src = "Images/men-k1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Black";
}
document.querySelector("#k1-type2").addEventListener("mouseover", k1Type2);
function k1Type2() {
   document.kurta1.src = "Images/men-k1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Brown";
}
document.querySelector("#k1-type3").addEventListener("mouseover", k1Type3);
function k1Type3() {
   document.kurta1.src = "Images/men-k1.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Maroon";
}
document.querySelector("#k1-type4").addEventListener("mouseover", k1Type4);
function k1Type4() {
   document.kurta1.src = "Images/men-k1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Light Green";
}
document.querySelector("#k1-type5").addEventListener("mouseover", k1Type5);
function k1Type5() {
   document.kurta1.src = "Images/men-k1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Blue";
}
document.querySelector("#k1-type6").addEventListener("mouseover", k1Type6);
function k1Type6() {
   document.kurta1.src = "Images/men-k1-9.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Orange";
}
document.querySelector("#k1-type7").addEventListener("mouseover", k1Type7);
function k1Type7() {
   document.kurta1.src = "Images/men-k1-10.jpg";
   document.querySelector("#color-name").innerHTML = " Color: White";
}
// -mouseout from color images(Kurta 1)
document.querySelector("#k1-type1").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   k1Type3();
}
document.querySelector("#k1-type2").addEventListener("mouseout", type1Mout1);
document.querySelector("#k1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#k1-type5").addEventListener("mouseout", type1Mout1);
document.querySelector("#k1-type6").addEventListener("mouseout", type1Mout1);
document.querySelector("#k1-type7").addEventListener("mouseout", type1Mout1);
//Ethnic wear - Kurta 2
var kurta1 = [
   "Images/men-k2.jpg",
   "Images/men-k2-2.jpg",
   "Images/men-k2-3.jpg",
   "Images/men-k2-4.jpg",
];
var k1 = 0;
document.kurta2.src = "Images/men-k2.jpg";
function setKurta1() {
   document.kurta2.src = kurta1[k1];
}
setInterval(function autoSlider1() {
   if (k1 < kurta1.length - 1) {
      k1++;
   } else {
      k1 = 0;
   }
   setKurta1();
}, 10000);
document.querySelector("#leftbtn-k2").addEventListener("click", leftbKurta1);
function leftbKurta1() {
   if (k1 > 0) {
      k1--;
   } else {
      k1 = kurta1.length - 1;
   }
   setKurta1();
}
document.querySelector("#rightbtn-k2").addEventListener("click", rightbKurta1);
function rightbKurta1() {
   if (k1 < kurta1.length - 1) {
      k1++;
   } else {
      k1 = 0;
   }
   setKurta1();
}
document.querySelector("#cart-k2").addEventListener("click", cartKurta2);
function cartKurta2() {
   document.querySelector("#cart-k2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-k2").addEventListener("click", buyKurta2);
function buyKurta2() {
   const buyKurta = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyKurta <= 10 && buyKurta > 0) {
      document.querySelector("#total-k2").textContent =
         "Total Price : " + "₹" + 407 * buyKurta + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyKurta === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(kurta 2)
document.querySelector("#k2-type1").addEventListener("mouseover", k2Type1);
function k2Type1() {
   document.kurta2.src = "Images/men-k2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  White";
}
document.querySelector("#k2-type2").addEventListener("mouseover", k2Type2);
function k2Type2() {
   document.kurta2.src = "Images/men-k2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Orange";
}
document.querySelector("#k2-type3").addEventListener("mouseover", k2Type3);
function k2Type3() {
   document.kurta2.src = "Images/men-k2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Yellow";
}
document.querySelector("#k2-type4").addEventListener("mouseover", k2Type4);
function k2Type4() {
   document.kurta2.src = "Images/men-k2-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Navy Blue";
}
document.querySelector("#k2-type5").addEventListener("mouseover", k2Type5);
function k2Type5() {
   document.kurta2.src = "Images/men-k2-8.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Maroon";
}
document.querySelector("#k2-type6").addEventListener("mouseover", k2Type6);
function k2Type6() {
   document.kurta2.src = "Images/men-k2-9.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Brown";
}
document.querySelector("#k2-type7").addEventListener("mouseover", k2Type7);
function k2Type7() {
   document.kurta2.src = "Images/men-k2-10.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Royal Blue";
}
document.querySelector("#k2-type8").addEventListener("mouseover", k2Type8);
function k2Type8() {
   document.kurta2.src = "Images/men-k2-11.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black";
}
// -mouseout from color images(Kurta 2)
document.querySelector("#k2-type1").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   k2Type3();
}
document.querySelector("#k2-type2").addEventListener("mouseout", type2Mout1);
document.querySelector("#k2-type4").addEventListener("mouseout", type2Mout1);
document.querySelector("#k2-type5").addEventListener("mouseout", type2Mout1);
document.querySelector("#k2-type6").addEventListener("mouseout", type2Mout1);
document.querySelector("#k2-type7").addEventListener("mouseout", type2Mout1);
document.querySelector("#k2-type8").addEventListener("mouseout", type2Mout1);
// out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of stock");
}
//Ethnic wear - Kurta 3
var kurta2 = [
   "Images/men-k3.jpg",
   "Images/men-k3-2.jpg",
   "Images/men-k3-3.jpg",
   "Images/men-k3-4.jpg",
];
var k2 = 0;
document.kurta3.src = "Images/men-k3.jpg";
function setKurta2() {
   document.kurta3.src = kurta2[k2];
}
setInterval(function autoSlider2() {
   if (k2 < kurta2.length - 1) {
      k2++;
   } else {
      k2 = 0;
   }
   setKurta2();
}, 10000);
document.querySelector("#leftbtn-k3").addEventListener("click", leftbKurta2);
function leftbKurta2() {
   if (k2 > 0) {
      k2--;
   } else {
      k2 = kurta2.length - 1;
   }
   setKurta2();
}
document.querySelector("#rightbtn-k3").addEventListener("click", rightbKurta2);
function rightbKurta2() {
   if (k2 < kurta2.length - 1) {
      k2++;
   } else {
      k2 = 0;
   }
   setKurta2();
}
document.querySelector("#cart-k3").addEventListener("click", cartKurta3);
function cartKurta3() {
   document.querySelector("#cart-k3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-k3").addEventListener("click", buyKurta3);
function buyKurta3() {
   const buyKurta = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyKurta <= 10 && buyKurta > 0) {
      document.querySelector("#total-k3").textContent =
         "Total Price : " + "₹" + 1399 * buyKurta + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyKurta === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(kurta 3)
document.querySelector("#k3-type1").addEventListener("mouseover", k3Type1);
function k3Type1() {
   document.kurta3.src = "Images/men-k3-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Cream";
}
document.querySelector("#k3-type2").addEventListener("mouseover", k3Type2);
function k3Type2() {
   document.kurta3.src = "Images/men-k3-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Red";
}
document.querySelector("#k3-type3").addEventListener("mouseover", k3Type3);
function k3Type3() {
   document.kurta3.src = "Images/men-k3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Firozi";
}
document.querySelector("#k3-type4").addEventListener("mouseover", k3Type4);
function k3Type4() {
   document.kurta3.src = "Images/men-k3-7.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Yellow";
}
document.querySelector("#k3-type5").addEventListener("mouseover", k3Type5);
function k3Type5() {
   document.kurta3.src = "Images/men-k3-8.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: White";
}
// -mouseout from color images(Kurta 3)
document.querySelector("#k3-type1").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   k3Type3();
}
document.querySelector("#k3-type2").addEventListener("mouseout", type3Mout1);
document.querySelector("#k3-type4").addEventListener("mouseout", type3Mout1);
document.querySelector("#k3-type5").addEventListener("mouseout", type3Mout1);
//Ethnic wear - Kurta 4
var kurta3 = [
   "Images/men-k4.jpg",
   "Images/men-k4-2.jpg",
   "Images/men-k4-3.jpg",
   "Images/men-k4-4.jpg",
];
var k3 = 0;
document.kurta4.src = "Images/men-k4.jpg";
function setKurta3() {
   document.kurta4.src = kurta3[k3];
}
setInterval(function autoSlider3() {
   if (k3 < kurta3.length - 1) {
      k3++;
   } else {
      k3 = 0;
   }
   setKurta3();
}, 10000);
document.querySelector("#leftbtn-k4").addEventListener("click", leftbKurta3);
function leftbKurta3() {
   if (k3 > 0) {
      k3--;
   } else {
      k3 = kurta3.length - 1;
   }
   setKurta3();
}
document.querySelector("#rightbtn-k4").addEventListener("click", rightbKurta3);
function rightbKurta3() {
   if (k3 < kurta3.length - 1) {
      k3++;
   } else {
      k3 = 0;
   }
   setKurta3();
}
document.querySelector("#cart-k4").addEventListener("click", cartKurta4);
function cartKurta4() {
   document.querySelector("#cart-k4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-k4").addEventListener("click", buyKurta4);
function buyKurta4() {
   const buyKurta = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyKurta <= 10 && buyKurta > 0) {
      document.querySelector("#total-k4").textContent =
         "Total Price : " + "₹" + 349 * buyKurta + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyKurta === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(kurta 4)
document.querySelector("#k4-type1").addEventListener("mouseover", k4Type1);
function k4Type1() {
   document.kurta4.src = "Images/men-k4-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Yellow";
}
document.querySelector("#k4-type2").addEventListener("mouseover", k4Type2);
function k4Type2() {
   document.kurta4.src = "Images/men-k4-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: White";
}
document.querySelector("#k4-type3").addEventListener("mouseover", k4Type3);
function k4Type3() {
   document.kurta4.src = "Images/men-k4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Black";
}
document.querySelector("#k4-type4").addEventListener("mouseover", k4Type4);
function k4Type4() {
   document.kurta4.src = "Images/men-k4-7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Red";
}
document.querySelector("#k4-type5").addEventListener("mouseover", k4Type5);
function k4Type5() {
   document.kurta4.src = "Images/men-k4-8.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Orange";
}
document.querySelector("#k4-type6").addEventListener("mouseover", k4Type6);
function k4Type6() {
   document.kurta4.src = "Images/men-k4-9.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Blue";
}
document.querySelector("#k4-type7").addEventListener("mouseover", k4Type7);
function k4Type7() {
   document.kurta4.src = "Images/men-k4-10.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Maroon";
}
document.querySelector("#k4-type8").addEventListener("mouseover", k4Type8);
function k4Type8() {
   document.kurta4.src = "Images/men-k4-11.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Royal Blue";
}
document.querySelector("#k4-type9").addEventListener("mouseover", k4Type9);
function k4Type9() {
   document.kurta4.src = "Images/men-k4-12.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Sky Blue";
}
// -mouseout from color images(Kurta 4)
document.querySelector("#k4-type1").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   k4Type3();
}
document.querySelector("#k4-type2").addEventListener("mouseout", type4Mout1);
document.querySelector("#k4-type4").addEventListener("mouseout", type4Mout1);
document.querySelector("#k4-type5").addEventListener("mouseout", type4Mout1);
document.querySelector("#k4-type6").addEventListener("mouseout", type4Mout1);
document.querySelector("#k4-type7").addEventListener("mouseout", type4Mout1);
document.querySelector("#k4-type8").addEventListener("mouseout", type4Mout1);
document.querySelector("#k4-type9").addEventListener("mouseout", type4Mout1);
//Ethnic wear - Kurta 5
var kurta4 = [
   "Images/men-k5.jpg",
   "Images/men-k5-2.jpg",
   "Images/men-k5-3.jpg",
   "Images/men-k5-4.jpg",
];
var k4 = 0;
document.kurta5.src = "Images/men-k5.jpg";
function setKurta4() {
   document.kurta5.src = kurta4[k4];
}
setInterval(function autoSlider4() {
   if (k4 < kurta4.length - 1) {
      k4++;
   } else {
      k4 = 0;
   }
   setKurta4();
}, 10000);
document.querySelector("#leftbtn-k5").addEventListener("click", leftbKurta4);
function leftbKurta4() {
   if (k4 > 0) {
      k4--;
   } else {
      k4 = kurta4.length - 1;
   }
   setKurta4();
}
document.querySelector("#rightbtn-k5").addEventListener("click", rightbKurta4);
function rightbKurta4() {
   if (k4 < kurta4.length - 1) {
      k4++;
   } else {
      k4 = 0;
   }
   setKurta4();
}
document.querySelector("#cart-k5").addEventListener("click", cartKurta5);
function cartKurta5() {
   document.querySelector("#cart-k5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-k5").addEventListener("click", buyKurta5);
function buyKurta5() {
   const buyKurta = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyKurta <= 10 && buyKurta > 0) {
      document.querySelector("#total-k5").textContent =
         "Total Price : " + "₹" + 1349 * buyKurta + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyKurta === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
// out of stock
document.querySelector("#oos2").addEventListener("click", outOfStock);
document.querySelector("#oos3").addEventListener("click", outOfStock);
//Ethnic wear - Kurta 6
var kurta5 = [
   "Images/men-k6.jpg",
   "Images/men-k6-2.jpg",
   "Images/men-k6-3.jpg",
   "Images/men-k6-4.jpg",
];
var k5 = 0;
document.kurta6.src = "Images/men-k6.jpg";
function setKurta5() {
   document.kurta6.src = kurta5[k5];
}
setInterval(function autoSlider5() {
   if (k5 < kurta5.length - 1) {
      k5++;
   } else {
      k5 = 0;
   }
   setKurta5();
}, 10000);
document.querySelector("#leftbtn-k6").addEventListener("click", leftbKurta5);
function leftbKurta5() {
   if (k5 > 0) {
      k5--;
   } else {
      k5 = kurta5.length - 1;
   }
   setKurta5();
}
document.querySelector("#rightbtn-k6").addEventListener("click", rightbKurta5);
function rightbKurta5() {
   if (k5 < kurta5.length - 1) {
      k5++;
   } else {
      k5 = 0;
   }
   setKurta5();
}
document.querySelector("#cart-k6").addEventListener("click", cartKurta6);
function cartKurta6() {
   document.querySelector("#cart-k6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-k6").addEventListener("click", buyKurta6);
function buyKurta6() {
   const buyKurta = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyKurta <= 10 && buyKurta > 0) {
      document.querySelector("#total-k6").textContent =
         "Total Price : " + "₹" + 530 * buyKurta + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyKurta === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(kurta 6)
document.querySelector("#k6-type1").addEventListener("mouseover", k6Type1);
function k6Type1() {
   document.kurta6.src = "Images/men-k6-5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color:  Black";
}
document.querySelector("#k6-type2").addEventListener("mouseover", k6Type2);
function k6Type2() {
   document.kurta6.src = "Images/men-k6-6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Green";
}
document.querySelector("#k6-type3").addEventListener("mouseover", k6Type3);
function k6Type3() {
   document.kurta6.src = "Images/men-k6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color:  Pink";
}
document.querySelector("#k6-type4").addEventListener("mouseover", k6Type4);
function k6Type4() {
   document.kurta6.src = "Images/men-k6-7.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Light Green";
}
document.querySelector("#k6-type5").addEventListener("mouseover", k6Type5);
function k6Type5() {
   document.kurta6.src = "Images/men-k6-8.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Yellow";
}
document.querySelector("#k6-type6").addEventListener("mouseover", k6Type6);
function k6Type6() {
   document.kurta6.src = "Images/men-k6-9.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Maroon";
}
document.querySelector("#k6-type7").addEventListener("mouseover", k6Type7);
function k6Type7() {
   document.kurta6.src = "Images/men-k6-10.jpg";
   document.querySelector("#color-name4").innerHTML = " Color:  Navy Blue";
}
document.querySelector("#k6-type8").addEventListener("mouseover", k6Type8);
function k6Type8() {
   document.kurta6.src = "Images/men-k6-11.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Orange";
}
document.querySelector("#k6-type9").addEventListener("mouseover", k6Type9);
function k6Type9() {
   document.kurta6.src = "Images/men-k6-12.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Hot Pink";
}
document.querySelector("#k6-type10").addEventListener("mouseover", k6Type10);
function k6Type10() {
   document.kurta6.src = "Images/men-k6-13.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Royal Blue";
}
document.querySelector("#k6-type11").addEventListener("mouseover", k6Type11);
function k6Type11() {
   document.kurta6.src = "Images/men-k6-14.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Sky Blue";
}
document.querySelector("#k6-type12").addEventListener("mouseover", k6Type12);
function k6Type12() {
   document.kurta6.src = "Images/men-k6-15.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: White";
}
// -mouseout from color images(Kurta 6)
document.querySelector("#k6-type1").addEventListener("mouseout", type6Mout1);
function type6Mout1() {
   k6Type3();
}
document.querySelector("#k6-type2").addEventListener("mouseout", type6Mout1);
document.querySelector("#k6-type4").addEventListener("mouseout", type6Mout1);
document.querySelector("#k6-type5").addEventListener("mouseout", type6Mout1);
document.querySelector("#k6-type6").addEventListener("mouseout", type6Mout1);
document.querySelector("#k6-type7").addEventListener("mouseout", type6Mout1);
document.querySelector("#k6-type8").addEventListener("mouseout", type6Mout1);
document.querySelector("#k6-type9").addEventListener("mouseout", type6Mout1);
document.querySelector("#k6-type10").addEventListener("mouseout", type6Mout1);
document.querySelector("#k6-type11").addEventListener("mouseout", type6Mout1);
document.querySelector("#k6-type12").addEventListener("mouseout", type6Mout1);
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
