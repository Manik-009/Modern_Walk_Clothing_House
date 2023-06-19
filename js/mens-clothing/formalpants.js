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
//Bottom wear - formal-pants1
var formalp = [
   "Images/men-fp1.jpg",
   "Images/men-fp1-2.jpg",
   "Images/men-fp1-3.jpg",
];
var fp = 0;
document.pants1.src = "Images/men-fp1.jpg";
function setFormalp() {
   document.pants1.src = formalp[fp];
}
setInterval(function autoSlider() {
   if (fp < formalp.length - 1) {
      fp++;
   } else {
      fp = 0;
   }
   setFormalp();
}, 10000);
document.querySelector("#leftbtn-fp1").addEventListener("click", leftbFormalp);
function leftbFormalp() {
   if (fp > 0) {
      fp--;
   } else {
      fp = formalp.length - 1;
   }
   setFormalp();
}
document
   .querySelector("#rightbtn-fp1")
   .addEventListener("click", rightbFleftbFormalp);
function rightbFleftbFormalp() {
   if (fp < formalp.length - 1) {
      fp++;
   } else {
      fp = 0;
   }
   setFormalp();
}
document.querySelector("#cart-fp1").addEventListener("click", cartFormalp1);
function cartFormalp1() {
   document.querySelector("#cart-fp1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fp1").addEventListener("click", buyFormalp1);
function buyFormalp1() {
   const buyFpants = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFpants <= 10 && buyFpants > 0) {
      document.querySelector("#total-fp1").textContent =
         "Total Price : " + "₹" + 621 * buyFpants + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFpants === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(formal-pant1)
document.querySelector("#fp1-type1").addEventListener("mouseover", fp1Type1);
function fp1Type1() {
   document.pants1.src = "Images/men-fp1.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Navy Blue";
}
document.querySelector("#fp1-type2").addEventListener("mouseover", fp1Type2);
function fp1Type2() {
   document.pants1.src = "Images/men-fp1-4.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black";
}
document.querySelector("#fp1-type3").addEventListener("mouseover", fp1Type3);
function fp1Type3() {
   document.pants1.src = "Images/men-fp1-5.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Brown";
}
document.querySelector("#fp1-type4").addEventListener("mouseover", fp1Type4);
function fp1Type4() {
   document.pants1.src = "Images/men-fp1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Light Grey";
}
document.querySelector("#fp1-type5").addEventListener("mouseover", fp1Type5);
function fp1Type5() {
   document.pants1.src = "Images/men-fp1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Khakhi ";
}
document.querySelector("#fp1-type6").addEventListener("mouseover", fp1Type6);
function fp1Type6() {
   document.pants1.src = "Images/men-fp1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Maroon";
}
document.querySelector("#fp1-type7").addEventListener("mouseover", fp1Type7);
function fp1Type7() {
   document.pants1.src = "Images/men-fp1-9.jpg";
   document.querySelector("#color-name").innerHTML = " Color: White ";
}
// -mouseout from color images(formal-pant1)
document.querySelector("#fp1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   fp1Type1();
}
document.querySelector("#fp1-type3").addEventListener("mouseout", type1Mout2);
function type1Mout2() {
   fp1Type1();
}
document.querySelector("#fp1-type4").addEventListener("mouseout", type1Mout3);
function type1Mout3() {
   fp1Type1();
}
document.querySelector("#fp1-type5").addEventListener("mouseout", type1Mout4);
function type1Mout4() {
   fp1Type1();
}
document.querySelector("#fp1-type6").addEventListener("mouseout", type1Mout5);
function type1Mout5() {
   fp1Type1();
}
document.querySelector("#fp1-type7").addEventListener("mouseout", type1Mout6);
function type1Mout6() {
   fp1Type1();
}
//Bottom wear - formal-pants2
var formalp1 = [
   "Images/men-fp2.jpg",
   "Images/men-fp2-2.jpg",
   "Images/men-fp2-3.jpg",
];
var fp1 = 0;
document.pants2.src = "Images/men-fp2.jpg";
function setFormalp1() {
   document.pants2.src = formalp1[fp1];
}
setInterval(function autoSlider1() {
   if (fp1 < formalp1.length - 1) {
      fp1++;
   } else {
      fp1 = 0;
   }
   setFormalp1();
}, 10000);
document.querySelector("#leftbtn-fp2").addEventListener("click", leftbFormalp1);
function leftbFormalp1() {
   if (fp1 > 0) {
      fp1--;
   } else {
      fp1 = formalp1.length - 1;
   }
   setFormalp1();
}
document
   .querySelector("#rightbtn-fp2")
   .addEventListener("click", rightbFleftbFormalp1);
function rightbFleftbFormalp1() {
   if (fp1 < formalp1.length - 1) {
      fp1++;
   } else {
      fp1 = 0;
   }
   setFormalp1();
}
document.querySelector("#cart-fp2").addEventListener("click", cartFormalp2);
function cartFormalp2() {
   document.querySelector("#cart-fp2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fp2").addEventListener("click", buyFormalp2);
function buyFormalp2() {
   const buyFpants = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFpants <= 10 && buyFpants > 0) {
      document.querySelector("#total-fp2").textContent =
         "Total Price : " + "₹" + 999 * buyFpants + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFpants === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(formal-pant2)
document.querySelector("#fp2-type1").addEventListener("mouseover", fp2Type1);
function fp2Type1() {
   document.pants2.src = "Images/men-fp2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Light Beige";
}
document.querySelector("#fp2-type2").addEventListener("mouseover", fp2Type2);
function fp2Type2() {
   document.pants2.src = "Images/men-fp2-4.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Beige";
}
document.querySelector("#fp2-type3").addEventListener("mouseover", fp2Type3);
function fp2Type3() {
   document.pants2.src = "Images/men-fp2-5.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Navy Blue";
}
document.querySelector("#fp2-type4").addEventListener("mouseover", fp2Type4);
function fp2Type4() {
   document.pants2.src = "Images/men-fp2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Brown";
}
document.querySelector("#fp2-type5").addEventListener("mouseover", fp2Type5);
function fp2Type5() {
   document.pants2.src = "Images/men-fp2-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black ";
}
document.querySelector("#fp2-type6").addEventListener("mouseover", fp2Type6);
function fp2Type6() {
   document.pants2.src = "Images/men-fp2-8.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Green";
}
document.querySelector("#fp2-type7").addEventListener("mouseover", fp2Type7);
function fp2Type7() {
   document.pants2.src = "Images/men-fp2-9.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Dark Grey ";
}
// -mouseout from color images(formal-pant2)
document.querySelector("#fp2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   fp2Type1();
}
document.querySelector("#fp2-type3").addEventListener("mouseout", type2Mout2);
function type2Mout2() {
   fp2Type1();
}
document.querySelector("#fp2-type4").addEventListener("mouseout", type2Mout3);
function type2Mout3() {
   fp2Type1();
}
document.querySelector("#fp2-type5").addEventListener("mouseout", type2Mout4);
function type2Mout4() {
   fp2Type1();
}
document.querySelector("#fp2-type6").addEventListener("mouseout", type2Mout5);
function type2Mout5() {
   fp2Type1();
}
document.querySelector("#fp2-type7").addEventListener("mouseout", type2Mout6);
function type2Mout6() {
   fp2Type1();
}
//Bottom wear - formal-pants3
var formalp2 = [
   "Images/men-fp3.jpg",
   "Images/men-fp3-2.jpg",
   "Images/men-fp3-3.jpg",
];
var fp2 = 0;
document.pants3.src = "Images/men-fp3.jpg";
function setFormalp2() {
   document.pants3.src = formalp2[fp2];
}
setInterval(function autoSlider2() {
   if (fp2 < formalp2.length - 1) {
      fp2++;
   } else {
      fp2 = 0;
   }
   setFormalp2();
}, 10000);
document.querySelector("#leftbtn-fp3").addEventListener("click", leftbFormalp2);
function leftbFormalp2() {
   if (fp2 > 0) {
      fp2--;
   } else {
      fp2 = formalp2.length - 1;
   }
   setFormalp2();
}
document
   .querySelector("#rightbtn-fp3")
   .addEventListener("click", rightbFleftbFormalp2);
function rightbFleftbFormalp2() {
   if (fp2 < formalp2.length - 1) {
      fp2++;
   } else {
      fp2 = 0;
   }
   setFormalp2();
}
document.querySelector("#cart-fp3").addEventListener("click", cartFormalp3);
function cartFormalp3() {
   document.querySelector("#cart-fp3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fp3").addEventListener("click", buyFormalp3);
function buyFormalp3() {
   const buyFpants = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFpants <= 10 && buyFpants > 0) {
      document.querySelector("#total-fp3").textContent =
         "Total Price : " + "₹" + 699 * buyFpants + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFpants === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//out of stock
document.querySelector("#oos1").addEventListener("click", outOfStock);
function outOfStock() {
   alert("Out of stock");
}
document.querySelector("#oos2").addEventListener("click", outOfStock);
document.querySelector("#oos3").addEventListener("click", outOfStock);
//Bottom wear - formal-pants4
var formalp3 = [
   "Images/men-fp4.jpg",
   "Images/men-fp4-2.jpg",
   "Images/men-fp4-3.jpg",
];
var fp3 = 0;
document.pants4.src = "Images/men-fp4.jpg";
function setFormalp3() {
   document.pants4.src = formalp3[fp3];
}
setInterval(function autoSlider3() {
   if (fp3 < formalp3.length - 1) {
      fp3++;
   } else {
      fp3 = 0;
   }
   setFormalp3();
}, 10000);
document.querySelector("#leftbtn-fp4").addEventListener("click", leftbFormalp3);
function leftbFormalp3() {
   if (fp3 > 0) {
      fp3--;
   } else {
      fp3 = formalp3.length - 1;
   }
   setFormalp3();
}
document
   .querySelector("#rightbtn-fp4")
   .addEventListener("click", rightbFleftbFormalp3);
function rightbFleftbFormalp3() {
   if (fp3 < formalp3.length - 1) {
      fp3++;
   } else {
      fp3 = 0;
   }
   setFormalp3();
}
document.querySelector("#cart-fp4").addEventListener("click", cartFormalp4);
function cartFormalp4() {
   document.querySelector("#cart-fp4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fp4").addEventListener("click", buyFormalp4);
function buyFormalp4() {
   const buyFpants = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFpants <= 10 && buyFpants > 0) {
      document.querySelector("#total-fp4").textContent =
         "Total Price : " + "₹" + 699 * buyFpants + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFpants === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(formal-pant4)
document.querySelector("#fp4-type1").addEventListener("mouseover", fp4Type1);
function fp4Type1() {
   document.pants4.src = "Images/men-fp4-4.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Light Beige";
}
document.querySelector("#fp4-type2").addEventListener("mouseover", fp4Type2);
function fp4Type2() {
   document.pants4.src = "Images/men-fp4.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Navy Blue ";
}
document.querySelector("#fp4-type3").addEventListener("mouseover", fp4Type3);
function fp4Type3() {
   document.pants4.src = "Images/men-fp4-5.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Green";
}
// -mouseout from color images(formal-pant4)
document.querySelector("#fp4-type1").addEventListener("mouseout", type4Mout1);
function type4Mout1() {
   fp4Type2();
}
document.querySelector("#fp4-type3").addEventListener("mouseout", type4Mout2);
function type4Mout2() {
   fp4Type2();
}
//Bottom wear - formal-pants5
var formalp4 = [
   "Images/men-fp5.jpg",
   "Images/men-fp5-2.jpg",
   "Images/men-fp5-3.jpg",
];
var fp4 = 0;
document.pants5.src = "Images/men-fp5.jpg";
function setFormalp4() {
   document.pants5.src = formalp4[fp4];
}
setInterval(function autoSlider4() {
   if (fp4 < formalp4.length - 1) {
      fp4++;
   } else {
      fp4 = 0;
   }
   setFormalp4();
}, 10000);
document.querySelector("#leftbtn-fp5").addEventListener("click", leftbFormalp4);
function leftbFormalp4() {
   if (fp4 > 0) {
      fp4--;
   } else {
      fp4 = formalp4.length - 1;
   }
   setFormalp4();
}
document
   .querySelector("#rightbtn-fp5")
   .addEventListener("click", rightbFleftbFormalp4);
function rightbFleftbFormalp4() {
   if (fp4 < formalp4.length - 1) {
      fp4++;
   } else {
      fp4 = 0;
   }
   setFormalp4();
}
document.querySelector("#cart-fp5").addEventListener("click", cartFormalp5);
function cartFormalp5() {
   document.querySelector("#cart-fp5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-fp5").addEventListener("click", buyFormalp5);
function buyFormalp5() {
   const buyFpants = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyFpants <= 10 && buyFpants > 0) {
      document.querySelector("#total-fp5").textContent =
         "Total Price : " + "₹" + 739 * buyFpants + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyFpants === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(formal-pant4)
document.querySelector("#fp5-type1").addEventListener("mouseover", fp5Type1);
function fp5Type1() {
   document.pants5.src = "Images/men-fp5-4.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Light Beige";
}
document.querySelector("#fp5-type2").addEventListener("mouseover", fp5Type2);
function fp5Type2() {
   document.pants5.src = "Images/men-fp5-5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Black ";
}
document.querySelector("#fp5-type3").addEventListener("mouseover", fp5Type3);
function fp5Type3() {
   document.pants5.src = "Images/men-fp5-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Khakhi";
}
document.querySelector("#fp5-type4").addEventListener("mouseover", fp5Type4);
function fp5Type4() {
   document.pants5.src = "Images/men-fp5-7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Light Grey";
}
document.querySelector("#fp5-type5").addEventListener("mouseover", fp5Type5);
function fp5Type5() {
   document.pants5.src = "Images/men-fp5-8.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Green ";
}
document.querySelector("#fp5-type6").addEventListener("mouseover", fp5Type6);
function fp5Type6() {
   document.pants5.src = "Images/men-fp5-9.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Navy Blue";
}
//
document.querySelector("#fp5-type7").addEventListener("mouseover", fp5Type7);
function fp5Type7() {
   document.pants5.src = "Images/men-fp5-10.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Brown";
}
document.querySelector("#fp5-type8").addEventListener("mouseover", fp5Type8);
function fp5Type8() {
   document.pants5.src = "Images/men-fp5-11.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: Olive Green ";
}
document.querySelector("#fp5-type9").addEventListener("mouseover", fp5Type9);
function fp5Type9() {
   document.pants5.src = "Images/men-fp5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: White";
}
// -mouseout from color images(formal-pant5)
document.querySelector("#fp5-type1").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   fp5Type9();
}
document.querySelector("#fp5-type2").addEventListener("mouseout", type5Mout2);
function type5Mout2() {
   fp5Type9();
}
document.querySelector("#fp5-type3").addEventListener("mouseout", type5Mout3);
function type5Mout3() {
   fp5Type9();
}
document.querySelector("#fp5-type4").addEventListener("mouseout", type5Mout4);
function type5Mout4() {
   fp5Type9();
}

document.querySelector("#fp5-type5").addEventListener("mouseout", type5Mout5);
function type5Mout5() {
   fp5Type9();
}
document.querySelector("#fp5-type6").addEventListener("mouseout", type5Mout6);
function type5Mout6() {
   fp5Type9();
}
document.querySelector("#fp5-type7").addEventListener("mouseout", type5Mout7);
function type5Mout7() {
   fp5Type9();
}
document.querySelector("#fp5-type8").addEventListener("mouseout", type5Mout8);
function type5Mout8() {
   fp5Type9();
}
// outOfStock
document.querySelector("#oos4").addEventListener("click", outOfStock);
document.querySelector("#oos5").addEventListener("click", outOfStock);
document.querySelector("#oos6").addEventListener("click", outOfStock);
document.querySelector("#oos7").addEventListener("click", outOfStock);
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
