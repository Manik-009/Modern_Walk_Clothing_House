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
//Footwear - Sports-shoe 1
var sportsS = [
   "Images/men-sshoe1.jpg",
   "Images/men-sshoe1-2.jpg",
   "Images/men-sshoe1-3.jpg",
   "Images/men-sshoe1-4.jpg",
   "Images/men-sshoe1-5.jpg",
];
var ss = 0;
document.sportsS1.src = "Images/men-sshoe1.jpg";
function setSportsS() {
   document.sportsS1.src = sportsS[ss];
}
setInterval(function autoSlider() {
   if (ss < sportsS.length - 1) {
      ss++;
   } else {
      ss = 0;
   }
   setSportsS();
}, 10000);
document.querySelector("#leftbtn-ss1").addEventListener("click", leftbSports);
function leftbSports() {
   if (ss > 0) {
      ss--;
   } else {
      ss = sportsS.length - 1;
   }
   setSportsS();
}
document.querySelector("#rightbtn-ss1").addEventListener("click", rightbSports);
function rightbSports() {
   if (ss < sportsS.length - 1) {
      ss++;
   } else {
      ss = 0;
   }
   setSportsS();
}
document.querySelector("#cart-ss1").addEventListener("click", cartSportsS1);
function cartSportsS1() {
   document.querySelector("#cart-ss1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss1").addEventListener("click", buySportsS1);
function buySportsS1() {
   const buyShoes = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoes <= 5 && buyShoes > 0) {
      document.querySelector("#total-ss1").textContent =
         "Total Price : " + "₹" + 7035 * buyShoes + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sports-shoe1)
document.querySelector("#ss1-type1").addEventListener("mouseover", ss1Type1);
function ss1Type1() {
   document.sportsS1.src = "Images/men-sshoe1.jpg";
   document.querySelector("#color-name").innerHTML =
      " Color:  WHITE/LASER ORAN";
}
document.querySelector("#ss1-type2").addEventListener("mouseover", ss1Type2);
function ss1Type2() {
   document.sportsS1.src = "Images/men-sshoe1-6.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black/Silver";
}
document.querySelector("#ss1-type3").addEventListener("mouseover", ss1Type3);
function ss1Type3() {
   document.sportsS1.src = "Images/men-sshoe1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: White/Blue";
}
document.querySelector("#ss1-type4").addEventListener("mouseover", ss1Type4);
function ss1Type4() {
   document.sportsS1.src = "Images/men-sshoe1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black/Neon Green";
}
document.querySelector("#ss1-type5").addEventListener("mouseover", ss1Type5);
function ss1Type5() {
   document.sportsS1.src = "Images/men-sshoe1-9.jpg";
   document.querySelector("#color-name").innerHTML = " Color: White/Silver";
}
document.querySelector("#ss1-type6").addEventListener("mouseover", ss1Type6);
function ss1Type6() {
   document.sportsS1.src = "Images/men-sshoe1-10.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Grey/Red";
}
document.querySelector("#ss1-type7").addEventListener("mouseover", ss1Type7);
function ss1Type7() {
   document.sportsS1.src = "Images/men-sshoe1-11.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Teal/Crimson";
}
// -mouseout from color images(sports-shoe1)
document.querySelector("#ss1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   ss1Type1();
}
document.querySelector("#ss1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#ss1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#ss1-type5").addEventListener("mouseout", type1Mout1);
document.querySelector("#ss1-type6").addEventListener("mouseout", type1Mout1);
document.querySelector("#ss1-type7").addEventListener("mouseout", type1Mout1);
//Footwear - Sports-shoe 2
var sportsS1 = [
   "Images/men-sshoe2.jpg",
   "Images/men-sshoe2-2.jpg",
   "Images/men-sshoe2-3.jpg",
   "Images/men-sshoe2-4.jpg",
   "Images/men-sshoe2-5.jpg",
];
var ss1 = 0;
document.sportsS2.src = "Images/men-sshoe2.jpg";
function setSportsS1() {
   document.sportsS2.src = sportsS1[ss1];
}
setInterval(function autoSlider1() {
   if (ss1 < sportsS1.length - 1) {
      ss1++;
   } else {
      ss1 = 0;
   }
   setSportsS1();
}, 10000);
document.querySelector("#leftbtn-ss2").addEventListener("click", leftbSports1);
function leftbSports1() {
   if (ss1 > 0) {
      ss1--;
   } else {
      ss1 = sportsS1.length - 1;
   }
   setSportsS1();
}
document
   .querySelector("#rightbtn-ss2")
   .addEventListener("click", rightbSports1);
function rightbSports1() {
   if (ss1 < sportsS1.length - 1) {
      ss1++;
   } else {
      ss1 = 0;
   }
   setSportsS1();
}
document.querySelector("#cart-ss2").addEventListener("click", cartSportsS2);
function cartSportsS2() {
   document.querySelector("#cart-ss2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss2").addEventListener("click", buySportsS2);
function buySportsS2() {
   const buyShoes = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoes <= 5 && buyShoes > 0) {
      document.querySelector("#total-ss2").textContent =
         "Total Price : " + "₹" + 3729 * buyShoes + "  only";
      document.querySelector("#total-ss2").style.marginTop = "11px";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sports-shoe2)
document.querySelector("#ss2-type1").addEventListener("mouseover", ss2Type1);
function ss2Type1() {
   document.sportsS2.src = "Images/men-sshoe2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Anthra/White";
}
document.querySelector("#ss2-type2").addEventListener("mouseover", ss2Type2);
function ss2Type2() {
   document.sportsS2.src = "Images/men-sshoe2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Black/White";
}
// -mouseout from color images(sports-shoe2)
document.querySelector("#ss2-type2").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   ss2Type1();
}
/// out of stock
document.querySelector("#oos1").addEventListener("click", outOfstock);
function outOfstock() {
   alert("Out of stock");
}
document.querySelector("#oos2").addEventListener("click", outOfstock);
document.querySelector("#oos3").addEventListener("click", outOfstock);
document.querySelector("#oos4").addEventListener("click", outOfstock);
//Footwear - Sports-shoe 3
var sportsS2 = [
   "Images/men-sshoe3.jpg",
   "Images/men-sshoe3-2.jpg",
   "Images/men-sshoe3-3.jpg",
   "Images/men-sshoe3-4.jpg",
   "Images/men-sshoe3-5.jpg",
];
var ss2 = 0;
document.sportsS3.src = "Images/men-sshoe3.jpg";
function setSportsS2() {
   document.sportsS3.src = sportsS2[ss2];
}
setInterval(function autoSlider2() {
   if (ss2 < sportsS2.length - 1) {
      ss2++;
   } else {
      ss2 = 0;
   }
   setSportsS2();
}, 10000);
document.querySelector("#leftbtn-ss3").addEventListener("click", leftbSports2);
function leftbSports2() {
   if (ss2 > 0) {
      ss2--;
   } else {
      ss2 = sportsS2.length - 1;
   }
   setSportsS2();
}
document
   .querySelector("#rightbtn-ss3")
   .addEventListener("click", rightbSports2);
function rightbSports2() {
   if (ss2 < sportsS2.length - 1) {
      ss2++;
   } else {
      ss2 = 0;
   }
   setSportsS2();
}
document.querySelector("#cart-ss3").addEventListener("click", cartSportsS3);
function cartSportsS3() {
   document.querySelector("#cart-ss3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss3").addEventListener("click", buySportsS3);
function buySportsS3() {
   const buyShoes = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoes <= 5 && buyShoes > 0) {
      document.querySelector("#total-ss3").textContent =
         "Total Price : " + "₹" + 3279 * buyShoes + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sports-shoe3)
document.querySelector("#ss3-type1").addEventListener("mouseover", ss3Type1);
function ss3Type1() {
   document.sportsS3.src = "Images/men-sshoe3-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  White/Black";
}
document.querySelector("#ss3-type2").addEventListener("mouseover", ss3Type2);
function ss3Type2() {
   document.sportsS3.src = "Images/men-sshoe3-7.jpg";
   document.querySelector("#color-name2").innerHTML =
      " Color: Black/White-Anthracite";
}
document.querySelector("#ss3-type3").addEventListener("mouseover", ss3Type3);
function ss3Type3() {
   document.sportsS3.src = "Images/men-sshoe3-8.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Wolf Grey";
}
document.querySelector("#ss3-type4").addEventListener("mouseover", ss3Type4);
function ss3Type4() {
   document.sportsS3.src = "Images/men-sshoe3.jpg";
   document.querySelector("#color-name2").innerHTML =
      " Color: Beige/White/Black   ";
}
// -mouseout from color images(sports-shoe3)
document.querySelector("#ss3-type1").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   ss3Type4();
}
document.querySelector("#ss3-type2").addEventListener("mouseout", type3Mout1);
document.querySelector("#ss3-type3").addEventListener("mouseout", type3Mout1);
//Footwear - Sports-shoe 4
var sportsS3 = [
   "Images/men-sshoe4.jpg",
   "Images/men-sshoe4-2.jpg",
   "Images/men-sshoe4-3.jpg",
   "Images/men-sshoe4-4.jpg",
   "Images/men-sshoe4-5.jpg",
];
var ss3 = 0;
document.sportsS4.src = "Images/men-sshoe4.jpg";
function setSportsS3() {
   document.sportsS4.src = sportsS3[ss3];
}
setInterval(function autoSlider3() {
   if (ss3 < sportsS3.length - 1) {
      ss3++;
   } else {
      ss3 = 0;
   }
   setSportsS3();
}, 10000);
document.querySelector("#leftbtn-ss4").addEventListener("click", leftbSports3);
function leftbSports3() {
   if (ss3 > 0) {
      ss3--;
   } else {
      ss3 = sportsS3.length - 1;
   }
   setSportsS3();
}
document
   .querySelector("#rightbtn-ss4")
   .addEventListener("click", rightbSports3);
function rightbSports3() {
   if (ss3 < sportsS3.length - 1) {
      ss3++;
   } else {
      ss3 = 0;
   }
   setSportsS3();
}
document.querySelector("#cart-ss4").addEventListener("click", cartSportsS4);
function cartSportsS4() {
   document.querySelector("#cart-ss4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss4").addEventListener("click", buySportsS4);
function buySportsS4() {
   const buyShoes = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoes <= 5 && buyShoes > 0) {
      document.querySelector("#total-ss4").textContent =
         "Total Price : " + "₹" + 980 * buyShoes + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//Footwear - Sports-shoe 5
var sportsS4 = [
   "Images/men-sshoe5.jpg",
   "Images/men-sshoe5-2.jpg",
   "Images/men-sshoe5-3.jpg",
   "Images/men-sshoe5-4.jpg",
   "Images/men-sshoe5-5.jpg",
];
var ss4 = 0;
document.sportsS5.src = "Images/men-sshoe5.jpg";
function setSportsS4() {
   document.sportsS5.src = sportsS4[ss4];
}
setInterval(function autoSlider4() {
   if (ss4 < sportsS4.length - 1) {
      ss4++;
   } else {
      ss4 = 0;
   }
   setSportsS4();
}, 10000);
document.querySelector("#leftbtn-ss5").addEventListener("click", leftbSports4);
function leftbSports4() {
   if (ss4 > 0) {
      ss4--;
   } else {
      ss4 = sportsS4.length - 1;
   }
   setSportsS4();
}
document
   .querySelector("#rightbtn-ss5")
   .addEventListener("click", rightbSports4);
function rightbSports4() {
   if (ss4 < sportsS4.length - 1) {
      ss4++;
   } else {
      ss4 = 0;
   }
   setSportsS4();
}
document.querySelector("#cart-ss5").addEventListener("click", cartSportsS5);
function cartSportsS5() {
   document.querySelector("#cart-ss5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss5").addEventListener("click", buySportsS5);
function buySportsS5() {
   const buyShoes = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoes <= 5 && buyShoes > 0) {
      document.querySelector("#total-ss5").textContent =
         "Total Price : " + "₹" + 1931 * buyShoes + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sports-shoe5)
document.querySelector("#ss5-type1").addEventListener("mouseover", ss5Type1);
function ss5Type1() {
   document.sportsS5.src = "Images/men-sshoe5.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  BT.Green/Black";
}
document.querySelector("#ss5-type2").addEventListener("mouseover", ss5Type2);
function ss5Type2() {
   document.sportsS5.src = "Images/men-sshoe5-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Grey/Black";
}
document.querySelector("#ss5-type3").addEventListener("mouseover", ss5Type3);
function ss5Type3() {
   document.sportsS5.src = "Images/men-sshoe5-7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Navy/Sky.Blue";
}
document.querySelector("#ss5-type4").addEventListener("mouseover", ss5Type4);
function ss5Type4() {
   document.sportsS5.src = "Images/men-sshoe5-8.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Red/Black";
}
// -mouseout from color images(sports-shoe5)
document.querySelector("#ss5-type2").addEventListener("mouseout", type5Mout1);
function type5Mout1() {
   ss5Type1();
}
document.querySelector("#ss5-type3").addEventListener("mouseout", type5Mout1);
document.querySelector("#ss5-type4").addEventListener("mouseout", type5Mout1);
//Footwear - Sports-shoe 6
var sportsS5 = [
   "Images/men-sshoe6.jpg",
   "Images/men-sshoe6-2.jpg",
   "Images/men-sshoe6-3.jpg",
   "Images/men-sshoe6-4.jpg",
   "Images/men-sshoe6-5.jpg",
];
var ss5 = 0;
document.sportsS6.src = "Images/men-sshoe6.jpg";
function setSportsS5() {
   document.sportsS6.src = sportsS5[ss5];
}
setInterval(function autoSlider5() {
   if (ss5 < sportsS5.length - 1) {
      ss5++;
   } else {
      ss5 = 0;
   }
   setSportsS5();
}, 10000);
document.querySelector("#leftbtn-ss6").addEventListener("click", leftbSports5);
function leftbSports5() {
   if (ss5 > 0) {
      ss5--;
   } else {
      ss5 = sportsS5.length - 1;
   }
   setSportsS5();
}
document
   .querySelector("#rightbtn-ss6")
   .addEventListener("click", rightbSports5);
function rightbSports5() {
   if (ss5 < sportsS5.length - 1) {
      ss5++;
   } else {
      ss5 = 0;
   }
   setSportsS5();
}
document.querySelector("#cart-ss6").addEventListener("click", cartSportsS6);
function cartSportsS6() {
   document.querySelector("#cart-ss6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss6").addEventListener("click", buySportsS6);
function buySportsS6() {
   const buyShoes = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoes <= 5 && buyShoes > 0) {
      document.querySelector("#total-ss6").textContent =
         "Total Price : " + "₹" + 1347 * buyShoes + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//Footwear - Sports-shoe 7
var sportsS6 = [
   "Images/men-sshoe7.jpg",
   "Images/men-sshoe7-2.jpg",
   "Images/men-sshoe7-3.jpg",
   "Images/men-sshoe7-4.jpg",
   "Images/men-sshoe7-5.jpg",
];
var ss6 = 0;
document.sportsS7.src = "Images/men-sshoe7.jpg";
function setSportsS6() {
   document.sportsS7.src = sportsS6[ss6];
}
setInterval(function autoSlider6() {
   if (ss6 < sportsS6.length - 1) {
      ss6++;
   } else {
      ss6 = 0;
   }
   setSportsS6();
}, 10000);
document.querySelector("#leftbtn-ss7").addEventListener("click", leftbSports6);
function leftbSports6() {
   if (ss6 > 0) {
      ss6--;
   } else {
      ss6 = sportsS6.length - 1;
   }
   setSportsS6();
}
document
   .querySelector("#rightbtn-ss7")
   .addEventListener("click", rightbSports6);
function rightbSports6() {
   if (ss6 < sportsS6.length - 1) {
      ss6++;
   } else {
      ss6 = 0;
   }
   setSportsS6();
}
document.querySelector("#cart-ss7").addEventListener("click", cartSportsS7);
function cartSportsS7() {
   document.querySelector("#cart-ss7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss7").addEventListener("click", buySportsS7);
function buySportsS7() {
   const buyShoes = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoes <= 5 && buyShoes > 0) {
      document.querySelector("#total-ss7").textContent =
         "Total Price : " + "₹" + 555 * buyShoes + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//Footwear - Sports-shoe 8
var sportsS7 = [
   "Images/men-sshoe8.jpg",
   "Images/men-sshoe8-2.jpg",
   "Images/men-sshoe8-3.jpg",
   "Images/men-sshoe8-4.jpg",
   "Images/men-sshoe8-5.jpg",
];
var ss7 = 0;
document.sportsS8.src = "Images/men-sshoe8.jpg";
function setSportsS7() {
   document.sportsS8.src = sportsS7[ss7];
}
setInterval(function autoSlider7() {
   if (ss7 < sportsS7.length - 1) {
      ss7++;
   } else {
      ss7 = 0;
   }
   setSportsS7();
}, 10000);
document.querySelector("#leftbtn-ss8").addEventListener("click", leftbSports7);
function leftbSports7() {
   if (ss7 > 0) {
      ss7--;
   } else {
      ss7 = sportsS7.length - 1;
   }
   setSportsS7();
}
document
   .querySelector("#rightbtn-ss8")
   .addEventListener("click", rightbSports7);
function rightbSports7() {
   if (ss7 < sportsS7.length - 1) {
      ss7++;
   } else {
      ss7 = 0;
   }
   setSportsS7();
}
document.querySelector("#cart-ss8").addEventListener("click", cartSportsS8);
function cartSportsS8() {
   document.querySelector("#cart-ss8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss8").addEventListener("click", buySportsS8);
function buySportsS8() {
   const buyShoes = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoes <= 5 && buyShoes > 0) {
      document.querySelector("#total-ss8").textContent =
         "Total Price : " + "₹" + 9857 * buyShoes + "  only";
      document.querySelector("#total-ss8").style.marginTop = "11px";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(Sports-shoe8)
document.querySelector("#ss8-type1").addEventListener("mouseover", ss8Type1);
function ss8Type1() {
   document.sportsS8.src = "Images/men-sshoe8-10.jpg";
   document.querySelector("#color-name4").innerHTML =
      " Color:  Blk/Blue Lagoon   ";
}
document.querySelector("#ss8-type2").addEventListener("mouseover", ss8Type2);
function ss8Type2() {
   document.sportsS8.src = "Images/men-sshoe8-9.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Midnight Navy ";
}
document.querySelector("#ss8-type3").addEventListener("mouseover", ss8Type3);
function ss8Type3() {
   document.sportsS8.src = "Images/men-sshoe8-8.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Black ";
}
document.querySelector("#ss8-type4").addEventListener("mouseover", ss8Type4);
function ss8Type4() {
   document.sportsS8.src = "Images/men-sshoe8-7.jpg";
   document.querySelector("#color-name4").innerHTML =
      " Color: Black/White-volt ";
}
document.querySelector("#ss8-type5").addEventListener("mouseover", ss8Type5);
function ss8Type5() {
   document.sportsS8.src = "Images/men-sshoe8-6.jpg";
   document.querySelector("#color-name4").innerHTML =
      " Color: Navy/Midnight Grey ";
}
document.querySelector("#ss8-type6").addEventListener("mouseover", ss8Type6);
function ss8Type6() {
   document.sportsS8.src = "Images/men-sshoe8.jpg";
   document.querySelector("#color-name4").innerHTML =
      " Color: White/Flash Crim ";
}
// -mouseout from color images(sports-shoe8)
document.querySelector("#ss8-type1").addEventListener("mouseout", type8Mout1);
function type8Mout1() {
   ss8Type6();
}
document.querySelector("#ss8-type2").addEventListener("mouseout", type8Mout1);
document.querySelector("#ss8-type3").addEventListener("mouseout", type8Mout1);
document.querySelector("#ss8-type4").addEventListener("mouseout", type8Mout1);
document.querySelector("#ss8-type5").addEventListener("mouseout", type8Mout1);
//Footwear - Sports-shoe 9
var sportsS8 = [
   "Images/men-sshoe9.jpg",
   "Images/men-sshoe9-2.jpg",
   "Images/men-sshoe9-3.jpg",
   "Images/men-sshoe9-4.jpg",
   "Images/men-sshoe9-5.jpg",
];
var ss8 = 0;
document.sportsS9.src = "Images/men-sshoe9.jpg";
function setSportsS8() {
   document.sportsS9.src = sportsS8[ss8];
}
setInterval(function autoSlider8() {
   if (ss8 < sportsS8.length - 1) {
      ss8++;
   } else {
      ss8 = 0;
   }
   setSportsS8();
}, 10000);
document.querySelector("#leftbtn-ss9").addEventListener("click", leftbSports8);
function leftbSports8() {
   if (ss8 > 0) {
      ss8--;
   } else {
      ss8 = sportsS8.length - 1;
   }
   setSportsS8();
}
document
   .querySelector("#rightbtn-ss9")
   .addEventListener("click", rightbSports8);
function rightbSports8() {
   if (ss8 < sportsS8.length - 1) {
      ss8++;
   } else {
      ss8 = 0;
   }
   setSportsS8();
}
document.querySelector("#cart-ss9").addEventListener("click", cartSportsS9);
function cartSportsS9() {
   document.querySelector("#cart-ss9").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss9").addEventListener("click", buySportsS9);
function buySportsS9() {
   const buyShoes = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoes <= 5 && buyShoes > 0) {
      document.querySelector("#total-ss9").textContent =
         "Total Price : " + "₹" + 4859 * buyShoes + "  only";
      document.querySelector("#total-ss9").style.marginTop = "11px";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//Footwear - Sports-shoe 10
var sportsS9 = [
   "Images/men-sshoe10.jpg",
   "Images/men-sshoe10-2.jpg",
   "Images/men-sshoe10-3.jpg",
   "Images/men-sshoe10-4.jpg",
   "Images/men-sshoe10-5.jpg",
];
var ss9 = 0;
document.sportsS10.src = "Images/men-sshoe10.jpg";
function setSportsS9() {
   document.sportsS10.src = sportsS9[ss9];
}
setInterval(function autoSlider9() {
   if (ss9 < sportsS9.length - 1) {
      ss9++;
   } else {
      ss9 = 0;
   }
   setSportsS9();
}, 10000);
document.querySelector("#leftbtn-ss10").addEventListener("click", leftbSports9);
function leftbSports9() {
   if (ss9 > 0) {
      ss9--;
   } else {
      ss9 = sportsS9.length - 1;
   }
   setSportsS9();
}
document
   .querySelector("#rightbtn-ss10")
   .addEventListener("click", rightbSports9);
function rightbSports9() {
   if (ss9 < sportsS9.length - 1) {
      ss9++;
   } else {
      ss9 = 0;
   }
   setSportsS9();
}
document.querySelector("#cart-ss10").addEventListener("click", cartSportsS10);
function cartSportsS10() {
   document.querySelector("#cart-ss10").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-ss10").addEventListener("click", buySportsS10);
function buySportsS10() {
   const buyShoes = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyShoes <= 5 && buyShoes > 0) {
      document.querySelector("#total-ss10").textContent =
         "Total Price : " + "₹" + 6312 * buyShoes + "  only";
      document.querySelector("#total-ss10").style.marginTop = "11px";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
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
