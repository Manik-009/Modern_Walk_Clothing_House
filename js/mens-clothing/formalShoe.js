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
//Footwear -formal-shoe 1
var formalS = [
   "Images/men-l1.jpg",
   "Images/men-l1-2.jpg",
   "Images/men-l1-3.jpg",
   "Images/men-l1-4.jpg",
   "Images/men-l1-5.jpg",
];
var fs = 0;
document.formalS1.src = "Images/men-l1.jpg";
function setFormalS() {
   document.formalS1.src = formalS[fs];
}
setInterval(function autoSlider() {
   if (fs < formalS.length - 1) {
      fs++;
   } else {
      fs = 0;
   }
   setFormalS();
}, 10000);
document.querySelector("#leftbtn-fs1").addEventListener("click", leftbFormal);
function leftbFormal() {
   if (fs > 0) {
      fs--;
   } else {
      fs = formalS.length - 1;
   }
   setFormalS();
}
document.querySelector("#rightbtn-fs1").addEventListener("click", rightbFormal);
function rightbFormal() {
   if (fs < formalS.length - 1) {
      fs++;
   } else {
      fs = 0;
   }
   setFormalS();
}
document.querySelector("#cart-fs1").addEventListener("click", cartFormalS1);
function cartFormalS1() {
   document.querySelector("#cart-fs1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fs1").addEventListener("click", buyFormalS1);
function buyFormalS1() {
   const buyShoes = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoes <= 5 && buyShoes > 0) {
      document.querySelector("#total-fs1").textContent =
         "Total Price : " + "₹" + 499 * buyShoes + "  only";
      document.querySelector("#total-fs1").style.marginTop = "8px";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Formal-shoe1)
document.querySelector("#fs1-type1").addEventListener("mouseover", fs1Type1);
function fs1Type1() {
   document.formalS1.src = "Images/men-l1.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Black";
}
document.querySelector("#fs1-type2").addEventListener("mouseover", fs1Type2);
function fs1Type2() {
   document.formalS1.src = "Images/men-l1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Brown";
}
document.querySelector("#fs1-type3").addEventListener("mouseover", fs1Type3);
function fs1Type3() {
   document.formalS1.src = "Images/men-l1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Navy Blue";
}
document.querySelector("#fs1-type4").addEventListener("mouseover", fs1Type4);
function fs1Type4() {
   document.formalS1.src = "Images/men-l1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Tan";
}
// -mouseout from color images(Formal-shoe1)
document.querySelector("#fs1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   fs1Type1();
}
document.querySelector("#fs1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#fs1-type4").addEventListener("mouseout", type1Mout1);
//Footwear -formal-shoe 2
var formalS1 = [
   "Images/men-l2.jpg",
   "Images/men-l2-2.jpg",
   "Images/men-l2-3.jpg",
   "Images/men-l2-4.jpg",
   "Images/men-l2-5.jpg",
];
var fs1 = 0;
document.formalS2.src = "Images/men-l2.jpg";
function setFormalS1() {
   document.formalS2.src = formalS1[fs1];
}
setInterval(function autoSlider1() {
   if (fs1 < formalS1.length - 1) {
      fs1++;
   } else {
      fs1 = 0;
   }
   setFormalS1();
}, 10000);
document.querySelector("#leftbtn-fs2").addEventListener("click", leftbFormal1);
function leftbFormal1() {
   if (fs1 > 0) {
      fs1--;
   } else {
      fs1 = formalS1.length - 1;
   }
   setFormalS1();
}
document
   .querySelector("#rightbtn-fs2")
   .addEventListener("click", rightbFormal1);
function rightbFormal1() {
   if (fs1 < formalS1.length - 1) {
      fs1++;
   } else {
      fs1 = 0;
   }
   setFormalS1();
}
document.querySelector("#cart-fs2").addEventListener("click", cartFormalS2);
function cartFormalS2() {
   document.querySelector("#cart-fs2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fs2").addEventListener("click", buyFormalS2);
function buyFormalS2() {
   const buyShoes = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoes <= 5 && buyShoes > 0) {
      document.querySelector("#total-fs2").textContent =
         "Total Price : " + "₹" + 699 * buyShoes + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Formal-shoe2)
document.querySelector("#fs2-type1").addEventListener("mouseover", fs2Type1);
function fs2Type1() {
   document.formalS2.src = "Images/men-l2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Brown";
}
document.querySelector("#fs2-type2").addEventListener("mouseover", fs2Type2);
function fs2Type2() {
   document.formalS2.src = "Images/men-l2-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black";
}
document.querySelector("#fs2-type3").addEventListener("mouseover", fs2Type3);
function fs2Type3() {
   document.formalS2.src = "Images/men-l2-8.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Grey";
}
document.querySelector("#fs2-type4").addEventListener("mouseover", fs2Type4);
function fs2Type4() {
   document.formalS2.src = "Images/men-l2-9.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Maroon";
}
document.querySelector("#fs2-type5").addEventListener("mouseover", fs2Type5);
function fs2Type5() {
   document.formalS2.src = "Images/men-l2-10.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Mustard";
}
document.querySelector("#fs2-type6").addEventListener("mouseover", fs2Type6);
function fs2Type6() {
   document.formalS2.src = "Images/men-l2-11.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Navy Blue";
}
document.querySelector("#fs2-type7").addEventListener("mouseover", fs2Type7);
function fs2Type7() {
   document.formalS2.src = "Images/men-l2-12.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Sea Green";
}
document.querySelector("#fs2-type8").addEventListener("mouseover", fs2Type8);
function fs2Type8() {
   document.formalS2.src = "Images/men-l2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Beige";
}
// -mouseout from color images(Formal-shoe2)
document.querySelector("#fs2-type1").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   fs2Type8();
}
document.querySelector("#fs2-type2").addEventListener("mouseout", type2Mout1);
document.querySelector("#fs2-type3").addEventListener("mouseout", type2Mout1);
document.querySelector("#fs2-type4").addEventListener("mouseout", type2Mout1);
document.querySelector("#fs2-type5").addEventListener("mouseout", type2Mout1);
document.querySelector("#fs2-type6").addEventListener("mouseout", type2Mout1);
document.querySelector("#fs2-type7").addEventListener("mouseout", type2Mout1);
// out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of stock");
}
//Footwear -formal-shoe 3
var formalS2 = [
   "Images/men-l3.jpg",
   "Images/men-l3-2.jpg",
   "Images/men-l3-3.jpg",
   "Images/men-l3-4.jpg",
   "Images/men-l3-5.jpg",
];
var fs2 = 0;
document.formalS3.src = "Images/men-l3.jpg";
function setFormalS2() {
   document.formalS3.src = formalS2[fs2];
}
setInterval(function autoSlider2() {
   if (fs2 < formalS2.length - 1) {
      fs2++;
   } else {
      fs2 = 0;
   }
   setFormalS2();
}, 10000);
document.querySelector("#leftbtn-fs3").addEventListener("click", leftbFormal2);
function leftbFormal2() {
   if (fs2 > 0) {
      fs2--;
   } else {
      fs2 = formalS2.length - 1;
   }
   setFormalS2();
}
document
   .querySelector("#rightbtn-fs3")
   .addEventListener("click", rightbFormal2);
function rightbFormal2() {
   if (fs2 < formalS2.length - 1) {
      fs2++;
   } else {
      fs2 = 0;
   }
   setFormalS2();
}
document.querySelector("#cart-fs3").addEventListener("click", cartFormalS3);
function cartFormalS3() {
   document.querySelector("#cart-fs3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fs3").addEventListener("click", buyFormalS3);
function buyFormalS3() {
   const buyShoes = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoes <= 5 && buyShoes > 0) {
      document.querySelector("#total-fs3").textContent =
         "Total Price : " + "₹" + 1072 * buyShoes + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Formal-shoe3)
document.querySelector("#fs3-type1").addEventListener("mouseover", fs3Type1);
function fs3Type1() {
   document.formalS3.src = "Images/men-l3-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Black";
}
document.querySelector("#fs3-type2").addEventListener("mouseover", fs3Type2);
function fs3Type2() {
   document.formalS3.src = "Images/men-l3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Tan";
}
// -mouseout from color images(Formal-shoe3)
document.querySelector("#fs3-type1").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   fs3Type2();
}
//Footwear -formal-shoe 4
var formalS3 = [
   "Images/men-l4.jpg",
   "Images/men-l4-2.jpg",
   "Images/men-l4-3.jpg",
   "Images/men-l4-4.jpg",
   "Images/men-l4-5.jpg",
];
var fs3 = 0;
document.formalS4.src = "Images/men-l4.jpg";
function setFormalS3() {
   document.formalS4.src = formalS3[fs3];
}
setInterval(function autoSlider3() {
   if (fs3 < formalS3.length - 1) {
      fs3++;
   } else {
      fs3 = 0;
   }
   setFormalS3();
}, 10000);
document.querySelector("#leftbtn-fs4").addEventListener("click", leftbFormal3);
function leftbFormal3() {
   if (fs3 > 0) {
      fs3--;
   } else {
      fs3 = formalS3.length - 1;
   }
   setFormalS3();
}
document
   .querySelector("#rightbtn-fs4")
   .addEventListener("click", rightbFormal3);
function rightbFormal3() {
   if (fs3 < formalS3.length - 1) {
      fs3++;
   } else {
      fs3 = 0;
   }
   setFormalS3();
}
document.querySelector("#cart-fs4").addEventListener("click", cartFormalS4);
function cartFormalS4() {
   document.querySelector("#cart-fs4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fs4").addEventListener("click", buyFormalS4);
function buyFormalS4() {
   const buyShoes = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoes <= 5 && buyShoes > 0) {
      document.querySelector("#total-fs4").textContent =
         "Total Price : " + "₹" + 559 * buyShoes + "  only";
      document.querySelector("#total-fs4").style.marginTop = "8px";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Formal-shoe4)
document.querySelector("#fs4-type1").addEventListener("mouseover", fs4Type1);
function fs4Type1() {
   document.formalS4.src = "Images/men-l4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  White";
}
document.querySelector("#fs4-type2").addEventListener("mouseover", fs4Type2);
function fs4Type2() {
   document.formalS4.src = "Images/men-l4-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Tan";
}
// -mouseout from color images(Formal-shoe4)
document.querySelector("#fs4-type2").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   fs4Type1();
}
//Footwear -formal-shoe 5
var formalS4 = [
   "Images/men-l5.jpg",
   "Images/men-l5-2.jpg",
   "Images/men-l5-3.jpg",
   "Images/men-l5-4.jpg",
   "Images/men-l5-5.jpg",
];
var fs4 = 0;
document.formalS5.src = "Images/men-l5.jpg";
function setFormalS4() {
   document.formalS5.src = formalS4[fs4];
}
setInterval(function autoSlider4() {
   if (fs4 < formalS4.length - 1) {
      fs4++;
   } else {
      fs4 = 0;
   }
   setFormalS4();
}, 10000);
document.querySelector("#leftbtn-fs5").addEventListener("click", leftbFormal4);
function leftbFormal4() {
   if (fs4 > 0) {
      fs4--;
   } else {
      fs4 = formalS4.length - 1;
   }
   setFormalS4();
}
document
   .querySelector("#rightbtn-fs5")
   .addEventListener("click", rightbFormal4);
function rightbFormal4() {
   if (fs4 < formalS4.length - 1) {
      fs4++;
   } else {
      fs4 = 0;
   }
   setFormalS4();
}
document.querySelector("#cart-fs5").addEventListener("click", cartFormalS5);
function cartFormalS5() {
   document.querySelector("#cart-fs5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fs5").addEventListener("click", buyFormalS5);
function buyFormalS5() {
   const buyShoes = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoes <= 5 && buyShoes > 0) {
      document.querySelector("#total-fs5").textContent =
         "Total Price : " + "₹" + 431 * buyShoes + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Formal-shoe5)
document.querySelector("#fs5-type1").addEventListener("mouseover", fs5Type1);
function fs5Type1() {
   document.formalS5.src = "Images/men-l5.jpg";
   document.querySelector("#color-name4").innerHTML = " Color:  Black";
}
document.querySelector("#fs5-type2").addEventListener("mouseover", fs5Type2);
function fs5Type2() {
   document.formalS5.src = "Images/men-l5-6.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: White";
}
document.querySelector("#fs5-type3").addEventListener("mouseover", fs5Type3);
function fs5Type3() {
   document.formalS5.src = "Images/men-l5-7.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Brown";
}
// -mouseout from color images(Formal-shoe5)
document.querySelector("#fs5-type2").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   fs5Type1();
}
document.querySelector("#fs5-type3").addEventListener("mouseout", type5Mout1);
//Footwear -formal-shoe 6
var formalS5 = [
   "Images/men-l6.jpg",
   "Images/men-l4-2.jpg",
   "Images/men-l6-2.jpg",
   "Images/men-l6-3.jpg",
   "Images/men-l6-4.jpg",
];
var fs5 = 0;
document.formalS6.src = "Images/men-l6.jpg";
function setFormalS5() {
   document.formalS6.src = formalS5[fs5];
}
setInterval(function autoSlider5() {
   if (fs5 < formalS5.length - 1) {
      fs5++;
   } else {
      fs5 = 0;
   }
   setFormalS5();
}, 10000);
document.querySelector("#leftbtn-fs6").addEventListener("click", leftbFormal5);
function leftbFormal5() {
   if (fs5 > 0) {
      fs5--;
   } else {
      fs5 = formalS5.length - 1;
   }
   setFormalS5();
}
document
   .querySelector("#rightbtn-fs6")
   .addEventListener("click", rightbFormal5);
function rightbFormal5() {
   if (fs5 < formalS5.length - 1) {
      fs5++;
   } else {
      fs5 = 0;
   }
   setFormalS5();
}
document.querySelector("#cart-fs6").addEventListener("click", cartFormalS6);
function cartFormalS6() {
   document.querySelector("#cart-fs6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fs6").addEventListener("click", buyFormalS6);
function buyFormalS6() {
   const buyShoes = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoes <= 5 && buyShoes > 0) {
      document.querySelector("#total-fs6").textContent =
         "Total Price : " + "₹" + 599 * buyShoes + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//Footwear -formal-shoe 7
var formalS6 = [
   "Images/men-l7.jpg",
   "Images/men-l1-2.jpg",
   "Images/men-l7-2.jpg",
   "Images/men-l7-3.jpg",
   "Images/men-l7-4.jpg",
];
var fs6 = 0;
document.formalS7.src = "Images/men-l7.jpg";
function setFormalS6() {
   document.formalS7.src = formalS6[fs6];
}
setInterval(function autoSlider6() {
   if (fs6 < formalS6.length - 1) {
      fs6++;
   } else {
      fs6 = 0;
   }
   setFormalS6();
}, 10000);
document.querySelector("#leftbtn-fs7").addEventListener("click", leftbFormal6);
function leftbFormal6() {
   if (fs6 > 0) {
      fs6--;
   } else {
      fs6 = formalS6.length - 1;
   }
   setFormalS6();
}
document
   .querySelector("#rightbtn-fs7")
   .addEventListener("click", rightbFormal6);
function rightbFormal6() {
   if (fs6 < formalS6.length - 1) {
      fs6++;
   } else {
      fs6 = 0;
   }
   setFormalS6();
}
document.querySelector("#cart-fs7").addEventListener("click", cartFormalS7);
function cartFormalS7() {
   document.querySelector("#cart-fs7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fs7").addEventListener("click", buyFormalS7);
function buyFormalS7() {
   const buyShoes = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoes <= 5 && buyShoes > 0) {
      document.querySelector("#total-fs7").textContent =
         "Total Price : " + "₹" + 998 * buyShoes + "  only";
      document.querySelector("#total-fs7").style.marginTop = "8px";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Formal-shoe7)
document.querySelector("#fs7-type1").addEventListener("mouseover", fs7Type1);
function fs7Type1() {
   document.formalS7.src = "Images/men-l7-5.jpg";
   document.querySelector("#color-name5").innerHTML = " Color:  Brown";
}
document.querySelector("#fs7-type2").addEventListener("mouseover", fs7Type2);
function fs7Type2() {
   document.formalS7.src = "Images/men-l7-6.jpg";
   document.querySelector("#color-name5").innerHTML = " Color:  Black";
}
document.querySelector("#fs7-type3").addEventListener("mouseover", fs7Type3);
function fs7Type3() {
   document.formalS7.src = "Images/men-l7-7.jpg";
   document.querySelector("#color-name5").innerHTML = " Color:  Red";
}
document.querySelector("#fs7-type4").addEventListener("mouseover", fs7Type4);
function fs7Type4() {
   document.formalS7.src = "Images/men-l7.jpg";
   document.querySelector("#color-name5").innerHTML = " Color:  Blue";
}
// -mouseout from color images(Formal-shoe7)
document.querySelector("#fs7-type1").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   fs7Type4();
}
document.querySelector("#fs7-type2").addEventListener("mouseout", type7Mout1);
document.querySelector("#fs7-type3").addEventListener("mouseout", type7Mout1);
//Footwear -formal-shoe 8
var formalS7 = [
   "Images/men-l8.jpg",
   "Images/men-l3-2.jpg",
   "Images/men-l8-2.jpg",
   "Images/men-l8-3.jpg",
   "Images/men-l8-4.jpg",
];
var fs7 = 0;
document.formalS8.src = "Images/men-l8.jpg";
function setFormalS7() {
   document.formalS8.src = formalS7[fs7];
}
setInterval(function autoSlider7() {
   if (fs7 < formalS7.length - 1) {
      fs7++;
   } else {
      fs7 = 0;
   }
   setFormalS7();
}, 10000);
document.querySelector("#leftbtn-fs8").addEventListener("click", leftbFormal7);
function leftbFormal7() {
   if (fs7 > 0) {
      fs7--;
   } else {
      fs7 = formalS7.length - 1;
   }
   setFormalS7();
}
document
   .querySelector("#rightbtn-fs8")
   .addEventListener("click", rightbFormal7);
function rightbFormal7() {
   if (fs7 < formalS7.length - 1) {
      fs7++;
   } else {
      fs7 = 0;
   }
   setFormalS7();
}
document.querySelector("#cart-fs8").addEventListener("click", cartFormalS8);
function cartFormalS8() {
   document.querySelector("#cart-fs8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fs8").addEventListener("click", buyFormalS8);
function buyFormalS8() {
   const buyShoes = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoes <= 5 && buyShoes > 0) {
      document.querySelector("#total-fs8").textContent =
         "Total Price : " + "₹" + 893 * buyShoes + "  only";
      document.querySelector("#total-fs8").style.marginTop = "8px";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Formal-shoe8)
document.querySelector("#fs8-type1").addEventListener("mouseover", fs8Type1);
function fs8Type1() {
   document.formalS8.src = "Images/men-l8-5.jpg";
   document.querySelector("#color-name6").innerHTML = " Color:  Black";
}
document.querySelector("#fs8-type2").addEventListener("mouseover", fs8Type2);
function fs8Type2() {
   document.formalS8.src = "Images/men-l8-6.jpg";
   document.querySelector("#color-name6").innerHTML = " Color:  Blue";
}
document.querySelector("#fs8-type3").addEventListener("mouseover", fs8Type3);
function fs8Type3() {
   document.formalS8.src = "Images/men-l8-7.jpg";
   document.querySelector("#color-name6").innerHTML = " Color:  Brown";
}
document.querySelector("#fs8-type4").addEventListener("mouseover", fs8Type4);
function fs8Type4() {
   document.formalS8.src = "Images/men8.jpg";
   document.querySelector("#color-name6").innerHTML = " Color:  Red";
}
// -mouseout from color images(Formal-shoe7)
document.querySelector("#fs8-type1").addEventListener("mouseout", type8Mout1);
function type8Mout1() {
   fs8Type4();
}
document.querySelector("#fs8-type2").addEventListener("mouseout", type8Mout1);
document.querySelector("#fs8-type3").addEventListener("mouseout", type8Mout1);
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
