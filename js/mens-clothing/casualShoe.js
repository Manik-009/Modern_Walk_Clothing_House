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
//Footwear -sneakers-shoe 1
var sneakerS = [
   "Images/men-sne1.jpg",
   "Images/men-sne1-2.jpg",
   "Images/men-sne1-3.jpg",
   "Images/men-sne1-5.jpg",
   "Images/men-sne1-6.jpg",
];
var ss = 0;
document.sneakerS1.src = "Images/men-sne1.jpg";
function setSneakerS() {
   document.sneakerS1.src = sneakerS[ss];
}
setInterval(function autoSlider() {
   if (ss < sneakerS.length - 1) {
      ss++;
   } else {
      ss = 0;
   }
   setSneakerS();
}, 10000);
document.querySelector("#leftbtn-ss1").addEventListener("click", leftbSneaker);
function leftbSneaker() {
   if (ss > 0) {
      ss--;
   } else {
      ss = sneakerS.length - 1;
   }
   setSneakerS();
}
document
   .querySelector("#rightbtn-ss1")
   .addEventListener("click", rightbSneaker);
function rightbSneaker() {
   if (ss < sneakerS.length - 1) {
      ss++;
   } else {
      ss = 0;
   }
   setSneakerS();
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
         "Total Price : " + "₹" + 2248 * buyShoes + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(sneaker-shoe1)
document.querySelector("#ss1-type1").addEventListener("mouseover", ss1Type1);
function ss1Type1() {
   document.sneakerS1.src = "Images/men-sne1.jpg";
   document.querySelector("#color-name").innerHTML = " Color:  Black/White";
}
document.querySelector("#ss1-type2").addEventListener("mouseover", ss1Type2);
function ss1Type2() {
   document.sneakerS1.src = "Images/men-sne1-7.jpg";
   document.querySelector("#color-name").innerHTML = " Color: White/White";
}
document.querySelector("#ss1-type3").addEventListener("mouseover", ss1Type3);
function ss1Type3() {
   document.sneakerS1.src = "Images/men-sne1-8.jpg";
   document.querySelector("#color-name").innerHTML = " Color: Black/Red";
}
document.querySelector("#ss1-type4").addEventListener("mouseover", ss1Type4);
function ss1Type4() {
   document.sneakerS1.src = "Images/men-sne1-9.jpg";
   document.querySelector("#color-name").innerHTML = " Color: White/Red";
}
document.querySelector("#ss1-type5").addEventListener("mouseover", ss1Type5);
function ss1Type5() {
   document.sneakerS1.src = "Images/men-sne1-10.jpg";
   document.querySelector("#color-name").innerHTML = " Color: White/Navy.Blue";
}
document.querySelector("#ss1-type6").addEventListener("mouseover", ss1Type6);
function ss1Type6() {
   document.sneakerS1.src = "Images/men-sne1-11.jpg";
   document.querySelector("#color-name").innerHTML = " Color: White/Sky.Blue";
}
// -mouseout from color images(sneaker-shoe1)
document.querySelector("#ss1-type2").addEventListener("mouseout", type1Mout1);
function type1Mout1() {
   ss1Type1();
}
document.querySelector("#ss1-type3").addEventListener("mouseout", type1Mout1);
document.querySelector("#ss1-type4").addEventListener("mouseout", type1Mout1);
document.querySelector("#ss1-type5").addEventListener("mouseout", type1Mout1);
document.querySelector("#ss1-type6").addEventListener("mouseout", type1Mout1);
//Footwear -sneakers-shoe 2
var sneakerS1 = [
   "Images/men-sne2.jpg",
   "Images/men-sne2-2.jpg",
   "Images/men-sne2-3.jpg",
   "Images/men-sne2-4.jpg",
   "Images/men-sne2-5.jpg",
];
var ss1 = 0;
document.sneakerS2.src = "Images/men-sne2.jpg";
function setSneakerS1() {
   document.sneakerS2.src = sneakerS1[ss1];
}
setInterval(function autoSlider1() {
   if (ss1 < sneakerS1.length - 1) {
      ss1++;
   } else {
      ss1 = 0;
   }
   setSneakerS1();
}, 10000);
document.querySelector("#leftbtn-ss2").addEventListener("click", leftbSneaker1);
function leftbSneaker1() {
   if (ss1 > 0) {
      ss1--;
   } else {
      ss1 = sneakerS1.length - 1;
   }
   setSneakerS1();
}
document
   .querySelector("#rightbtn-ss2")
   .addEventListener("click", rightbSneaker1);
function rightbSneaker1() {
   if (ss1 < sneakerS1.length - 1) {
      ss1++;
   } else {
      ss1 = 0;
   }
   setSneakerS1();
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
         "Total Price : " + "₹" + 949 * buyShoes + "  only";
      document.querySelector("#total-ss2").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(sneaker-shoe2)
document.querySelector("#ss2-type1").addEventListener("mouseover", ss2Type1);
function ss2Type1() {
   document.sneakerS2.src = "Images/men-sne2-7.jpg";
   document.querySelector("#color-name1").innerHTML = " Color:  Black";
}
document.querySelector("#ss2-type2").addEventListener("mouseover", ss2Type2);
function ss2Type2() {
   document.sneakerS2.src = "Images/men-sne2-6.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: Red";
}
document.querySelector("#ss2-type3").addEventListener("mouseover", ss2Type3);
function ss2Type3() {
   document.sneakerS2.src = "Images/men-sne2.jpg";
   document.querySelector("#color-name1").innerHTML = " Color: White";
}
// -mouseout from color images(sports-shoe2)
document.querySelector("#ss2-type1").addEventListener("mouseout", type2Mout1);
function type2Mout1() {
   ss2Type3();
}
document.querySelector("#ss2-type2").addEventListener("mouseout", type2Mout1);
//Footwear -sneakers-shoe 3
var sneakerS2 = [
   "Images/men-sne3.jpg",
   "Images/men-sne3-2.jpg",
   "Images/men-sne3-3.jpg",
   "Images/men-sne3-4.jpg",
   "Images/men-sne3-5.jpg",
];
var ss2 = 0;
document.sneakerS3.src = "Images/men-sne3.jpg";
function setSneakerS2() {
   document.sneakerS3.src = sneakerS2[ss2];
}
setInterval(function autoSlider2() {
   if (ss2 < sneakerS2.length - 1) {
      ss2++;
   } else {
      ss2 = 0;
   }
   setSneakerS2();
}, 10000);
document.querySelector("#leftbtn-ss3").addEventListener("click", leftbSneaker2);
function leftbSneaker2() {
   if (ss2 > 0) {
      ss2--;
   } else {
      ss2 = sneakerS2.length - 1;
   }
   setSneakerS2();
}
document
   .querySelector("#rightbtn-ss3")
   .addEventListener("click", rightbSneaker2);
function rightbSneaker2() {
   if (ss2 < sneakerS2.length - 1) {
      ss2++;
   } else {
      ss2 = 0;
   }
   setSneakerS2();
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
         "Total Price : " + "₹" + 499 * buyShoes + "  only";
      document.querySelector("#total-ss3").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(sneaker-shoe3)
document.querySelector("#ss3-type1").addEventListener("mouseover", ss3Type1);
function ss3Type1() {
   document.sneakerS3.src = "Images/men-sne3.jpg";
   document.querySelector("#color-name2").innerHTML = " Color:  Olive/White";
}
document.querySelector("#ss3-type2").addEventListener("mouseover", ss3Type2);
function ss3Type2() {
   document.sneakerS3.src = "Images/men-sne3-6.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Grey/White";
}
document.querySelector("#ss3-type3").addEventListener("mouseover", ss3Type3);
function ss3Type3() {
   document.sneakerS3.src = "Images/men-sne3-7.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Navy/White";
}
document.querySelector("#ss3-type4").addEventListener("mouseover", ss3Type4);
function ss3Type4() {
   document.sneakerS3.src = "Images/men-sne3-8.jpg";
   document.querySelector("#color-name2").innerHTML = " Color: Black/White   ";
}
// -mouseout from color images(sneaker-shoe3)
document.querySelector("#ss3-type2").addEventListener("mouseout", type3Mout1);
function type3Mout1() {
   ss3Type1();
}
document.querySelector("#ss3-type3").addEventListener("mouseout", type3Mout1);
document.querySelector("#ss3-type4").addEventListener("mouseout", type3Mout1);
//Footwear -sneakers-shoe 4
var sneakerS3 = [
   "Images/men-sne4.jpg",
   "Images/men-sne4-2.jpg",
   "Images/men-sne4-3.jpg",
   "Images/men-sne4-4.jpg",
   "Images/men-sne4-5.jpg",
];
var ss3 = 0;
document.sneakerS4.src = "Images/men-sne4.jpg";
function setSneakerS3() {
   document.sneakerS4.src = sneakerS3[ss3];
}
setInterval(function autoSlider3() {
   if (ss3 < sneakerS3.length - 1) {
      ss3++;
   } else {
      ss3 = 0;
   }
   setSneakerS3();
}, 10000);
document.querySelector("#leftbtn-ss4").addEventListener("click", leftbSneaker3);
function leftbSneaker3() {
   if (ss3 > 0) {
      ss3--;
   } else {
      ss3 = sneakerS3.length - 1;
   }
   setSneakerS3();
}
document
   .querySelector("#rightbtn-ss4")
   .addEventListener("click", rightbSneaker3);
function rightbSneaker3() {
   if (ss3 < sneakerS3.length - 1) {
      ss3++;
   } else {
      ss3 = 0;
   }
   setSneakerS3();
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
         "Total Price : " + "₹" + 9421 * buyShoes + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//out of stock
document.querySelector("#oos1").addEventListener("click", outOfstock);
function outOfstock() {
   alert("Out of stock");
}
document.querySelector("#oos2").addEventListener("click", outOfstock);
//Footwear -sneakers-shoe 5
var sneakerS4 = [
   "Images/men-sne5.jpg",
   "Images/men-sne5-2.jpg",
   "Images/men-sne5-3.jpg",
   "Images/men-sne5-4.jpg",
   "Images/men-sne5-5.jpg",
];
var ss4 = 0;
document.sneakerS5.src = "Images/men-sne5.jpg";
function setSneakerS4() {
   document.sneakerS5.src = sneakerS4[ss4];
}
setInterval(function autoSlider4() {
   if (ss4 < sneakerS4.length - 1) {
      ss4++;
   } else {
      ss4 = 0;
   }
   setSneakerS4();
}, 10000);
document.querySelector("#leftbtn-ss5").addEventListener("click", leftbSneaker4);
function leftbSneaker4() {
   if (ss4 > 0) {
      ss4--;
   } else {
      ss4 = sneakerS4.length - 1;
   }
   setSneakerS4();
}
document
   .querySelector("#rightbtn-ss5")
   .addEventListener("click", rightbSneaker4);
function rightbSneaker4() {
   if (ss4 < sneakerS4.length - 1) {
      ss4++;
   } else {
      ss4 = 0;
   }
   setSneakerS4();
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
         "Total Price : " + "₹" + 1139 * buyShoes + "  only";
      document.querySelector("#total-ss5").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//Footwear -sneakers-shoe 6
var sneakerS5 = [
   "Images/men-sne6.jpg",
   "Images/men-sne6-2.jpg",
   "Images/men-sne6-3.jpg",
   "Images/men-sne6-4.jpg",
   "Images/men-sne6-5.jpg",
];
var ss5 = 0;
document.sneakerS6.src = "Images/men-sne6.jpg";
function setSneakerS5() {
   document.sneakerS6.src = sneakerS5[ss5];
}
setInterval(function autoSlider5() {
   if (ss5 < sneakerS5.length - 1) {
      ss5++;
   } else {
      ss5 = 0;
   }
   setSneakerS5();
}, 10000);
document.querySelector("#leftbtn-ss6").addEventListener("click", leftbSneaker5);
function leftbSneaker5() {
   if (ss5 > 0) {
      ss5--;
   } else {
      ss5 = sneakerS5.length - 1;
   }
   setSneakerS5();
}
document
   .querySelector("#rightbtn-ss6")
   .addEventListener("click", rightbSneaker5);
function rightbSneaker5() {
   if (ss5 < sneakerS5.length - 1) {
      ss5++;
   } else {
      ss5 = 0;
   }
   setSneakerS5();
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
         "Total Price : " + "₹" + 5499 * buyShoes + "  only";
      document.querySelector("#total-ss6").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//Footwear -sneakers-shoe 7
var sneakerS6 = [
   "Images/men-sne7.jpg",
   "Images/men-sne7-2.jpg",
   "Images/men-sne7-3.jpg",
   "Images/men-sne7-4.jpg",
   "Images/men-sne7-5.jpg",
];
var ss6 = 0;
document.sneakerS7.src = "Images/men-sne7.jpg";
function setSneakerS6() {
   document.sneakerS7.src = sneakerS6[ss6];
}
setInterval(function autoSlider6() {
   if (ss6 < sneakerS6.length - 1) {
      ss6++;
   } else {
      ss6 = 0;
   }
   setSneakerS6();
}, 10000);
document.querySelector("#leftbtn-ss7").addEventListener("click", leftbSneaker6);
function leftbSneaker6() {
   if (ss6 > 0) {
      ss6--;
   } else {
      ss6 = sneakerS6.length - 1;
   }
   setSneakerS6();
}
document
   .querySelector("#rightbtn-ss7")
   .addEventListener("click", rightbSneaker6);
function rightbSneaker6() {
   if (ss6 < sneakerS6.length - 1) {
      ss6++;
   } else {
      ss6 = 0;
   }
   setSneakerS6();
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
         "Total Price : " + "₹" + 1299 * buyShoes + "  only";
      document.querySelector("#total-ss7").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(sneaker-shoe7)
document.querySelector("#ss7-type1").addEventListener("mouseover", ss7Type1);
function ss7Type1() {
   document.sneakerS7.src = "Images/men-sne7-6.jpg";
   document.querySelector("#color-name3").innerHTML = " Color:  Black";
}
document.querySelector("#ss7-type2").addEventListener("mouseover", ss7Type2);
function ss7Type2() {
   document.sneakerS7.src = "Images/men-sne7.jpg";
   document.querySelector("#color-name3").innerHTML = " Color: White/Red";
}
// -mouseout from color images(sports-shoe2)
document.querySelector("#ss7-type1").addEventListener("mouseout", type7Mout1);
function type7Mout1() {
   ss7Type2();
}
//out of stock
document.querySelector("#oos3").addEventListener("click", outOfstock);
//Footwear -sneakers-shoe 8
var sneakerS7 = [
   "Images/men-sne8.jpg",
   "Images/men-sne8-2.jpg",
   "Images/men-sne8-3.jpg",
   "Images/men-sne8-4.jpg",
   "Images/men-sne8-5.jpg",
];
var ss7 = 0;
document.sneakerS8.src = "Images/men-sne8.jpg";
function setSneakerS7() {
   document.sneakerS8.src = sneakerS7[ss7];
}
setInterval(function autoSlider7() {
   if (ss7 < sneakerS7.length - 1) {
      ss7++;
   } else {
      ss7 = 0;
   }
   setSneakerS7();
}, 10000);
document.querySelector("#leftbtn-ss8").addEventListener("click", leftbSneaker7);
function leftbSneaker7() {
   if (ss7 > 0) {
      ss7--;
   } else {
      ss7 = sneakerS7.length - 1;
   }
   setSneakerS7();
}
document
   .querySelector("#rightbtn-ss8")
   .addEventListener("click", rightbSneaker7);
function rightbSneaker7() {
   if (ss7 < sneakerS7.length - 1) {
      ss7++;
   } else {
      ss7 = 0;
   }
   setSneakerS7();
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
         "Total Price : " + "₹" + 7900 * buyShoes + "  only";
      document.querySelector("#total-ss8").style.marginTop = "13px";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//color variety
// -mouseover on color images(sneaker-shoe8)
document.querySelector("#ss8-type1").addEventListener("mouseover", ss8Type1);
function ss8Type1() {
   document.sneakerS8.src = "Images/men-sne8-6.jpg";
   document.querySelector("#color-name4").innerHTML =
      " Color:  Grey/Beige/White";
}
document.querySelector("#ss8-type2").addEventListener("mouseover", ss8Type2);
function ss8Type2() {
   document.sneakerS8.src = "Images/men-sne8-7.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: Black/White/Red";
}
document.querySelector("#ss8-type3").addEventListener("mouseover", ss8Type3);
function ss8Type3() {
   document.sneakerS8.src = "Images/men-sne8-8.jpg";
   document.querySelector("#color-name4").innerHTML = " Color: White/Red/Black";
}
document.querySelector("#ss8-type4").addEventListener("mouseover", ss8Type4);
function ss8Type4() {
   document.sneakerS8.src = "Images/men-sne8.jpg";
   document.querySelector("#color-name4").innerHTML =
      " Color:  Blue/White/Black";
}
// -mouseout from color images(sports-shoe2)
document.querySelector("#ss8-type1").addEventListener("mouseout", type8Mout1);
function type8Mout1() {
   ss8Type4();
}
document.querySelector("#ss8-type2").addEventListener("mouseout", type8Mout1);
document.querySelector("#ss8-type3").addEventListener("mouseout", type8Mout1);
//Footwear -sneakers-shoe 9
var sneakerS8 = [
   "Images/men-sne9.jpg",
   "Images/men-sne9-2.jpg",
   "Images/men-sne9-3.jpg",
   "Images/men-sne9-4.jpg",
   "Images/men-sne9-5.jpg",
];
var ss8 = 0;
document.sneakerS9.src = "Images/men-sne9.jpg";
function setSneakerS8() {
   document.sneakerS9.src = sneakerS8[ss8];
}
setInterval(function autoSlider8() {
   if (ss8 < sneakerS8.length - 1) {
      ss8++;
   } else {
      ss8 = 0;
   }
   setSneakerS8();
}, 10000);
document.querySelector("#leftbtn-ss9").addEventListener("click", leftbSneaker8);
function leftbSneaker8() {
   if (ss8 > 0) {
      ss8--;
   } else {
      ss8 = sneakerS8.length - 1;
   }
   setSneakerS8();
}
document
   .querySelector("#rightbtn-ss9")
   .addEventListener("click", rightbSneaker8);
function rightbSneaker8() {
   if (ss8 < sneakerS8.length - 1) {
      ss8++;
   } else {
      ss8 = 0;
   }
   setSneakerS8();
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
         "Total Price : " + "₹" + 11420 * buyShoes + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyShoes === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 5 item at a time !!!");
   }
}
//Footwear -sneakers-shoe 10
var sneakerS9 = [
   "Images/men-sne10.jpg",
   "Images/men-sne10-2.jpg",
   "Images/men-sne10-3.jpg",
   "Images/men-sne10-4.jpg",
   "Images/men-sne10-5.jpg",
];
var ss9 = 0;
document.sneakerS10.src = "Images/men-sne10.jpg";
function setSneakerS9() {
   document.sneakerS10.src = sneakerS9[ss9];
}
setInterval(function autoSlider9() {
   if (ss9 < sneakerS9.length - 1) {
      ss9++;
   } else {
      ss9 = 0;
   }
   setSneakerS9();
}, 10000);
document
   .querySelector("#leftbtn-ss10")
   .addEventListener("click", leftbSneaker9);
function leftbSneaker9() {
   if (ss9 > 0) {
      ss9--;
   } else {
      ss9 = sneakerS9.length - 1;
   }
   setSneakerS9();
}
document
   .querySelector("#rightbtn-ss10")
   .addEventListener("click", rightbSneaker9);
function rightbSneaker9() {
   if (ss9 < sneakerS9.length - 1) {
      ss9++;
   } else {
      ss9 = 0;
   }
   setSneakerS9();
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
         "Total Price : " + "₹" + 5196 * buyShoes + "  only";
      document.querySelector("#total-ss10").style.marginTop = "13px";
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
