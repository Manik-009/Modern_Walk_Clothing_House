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
// slider img1
var img1 = [
   "Images/acc-1.png",
   "Images/acc-2.jpg",
   "Images/acc-3.jpg",
   "Images/acc-4.jpg",
   "Images/acc-5.jpg",
   "Images/acc-6.jpg",
   "Images/acc-7.jpg",
];
var x1 = 0;
document.img1.src = "Images/acc-1.png";
function setImg() {
   document.img1.src = img1[x1];
}
setInterval(function autoSlide() {
   if (x1 < img1.length - 1) {
      x1++;
   } else {
      x1 = 0;
   }
   setImg();
}, 5000);
// slider img2
var img2 = [
   "Images/acc-2.jpg",
   "Images/acc-3.jpg",
   "Images/acc-4.jpg",
   "Images/acc-5.jpg",
   "Images/acc-6.jpg",
   "Images/acc-7.jpg",
   "Images/acc-1.png",
];
var x2 = 0;
document.img2.src = "Images/acc-2.jpg";
function setImg1() {
   document.img2.src = img2[x2];
}
setInterval(function autoSlide1() {
   if (x2 < img2.length - 1) {
      x2++;
   } else {
      x2 = 0;
   }
   setImg1();
}, 5000);
// slider img3
var img3 = [
   "Images/acc-3.jpg",
   "Images/acc-4.jpg",
   "Images/acc-5.jpg",
   "Images/acc-6.jpg",
   "Images/acc-7.jpg",
   "Images/acc-1.png",
   "Images/acc-2.jpg",
];
var x3 = 0;
document.img3.src = "Images/acc-3.jpg";
function setImg2() {
   document.img3.src = img3[x3];
}
setInterval(function autoSlide2() {
   if (x3 < img3.length - 1) {
      x3++;
   } else {
      x3 = 0;
   }
   setImg2();
}, 5000);
// slider img4
var img4 = [
   "Images/acc-4.jpg",
   "Images/acc-5.jpg",
   "Images/acc-6.jpg",
   "Images/acc-7.jpg",
   "Images/acc-1.png",
   "Images/acc-2.jpg",
   "Images/acc-3.jpg",
];
var x4 = 0;
document.img4.src = "Images/acc-4.jpg";
function setImg3() {
   document.img4.src = img4[x4];
}
setInterval(function autoSlide3() {
   if (x4 < img4.length - 1) {
      x4++;
   } else {
      x4 = 0;
   }
   setImg3();
}, 5000);
// slider img5
var img5 = [
   "Images/acc-5.jpg",
   "Images/acc-6.jpg",
   "Images/acc-7.jpg",
   "Images/acc-1.png",
   "Images/acc-2.jpg",
   "Images/acc-3.jpg",
   "Images/acc-4.jpg",
];
var x5 = 0;
document.img5.src = "Images/acc-5.jpg";
function setImg4() {
   document.img5.src = img5[x5];
}
setInterval(function autoSlide4() {
   if (x5 < img5.length - 1) {
      x5++;
   } else {
      x5 = 0;
   }
   setImg4();
}, 5000);
// slider img6
var img6 = [
   "Images/acc-6.jpg",
   "Images/acc-7.jpg",
   "Images/acc-1.png",
   "Images/acc-2.jpg",
   "Images/acc-3.jpg",
   "Images/acc-4.jpg",
   "Images/acc-5.jpg",
];
var x6 = 0;
document.img6.src = "Images/acc-6.jpg";
function setImg5() {
   document.img6.src = img6[x6];
}
setInterval(function autoSlide5() {
   if (x6 < img6.length - 1) {
      x6++;
   } else {
      x6 = 0;
   }
   setImg5();
}, 5000);
// slider img7
var img7 = [
   "Images/acc-7.jpg",
   "Images/acc-1.png",
   "Images/acc-2.jpg",
   "Images/acc-3.jpg",
   "Images/acc-4.jpg",
   "Images/acc-5.jpg",
   "Images/acc-6.jpg",
];
var x7 = 0;
document.img7.src = "Images/acc-7.jpg";
function setImg6() {
   document.img7.src = img7[x7];
}
setInterval(function autoSlide6() {
   if (x7 < img7.length - 1) {
      x7++;
   } else {
      x7 = 0;
   }
   setImg6();
}, 5000);
//mens accessories
//watch1
var image1 = ["Images/men-acc1.jpeg", "Images/men-acc1-2.jpeg"];
var a = 0;
document.watch1.src = "Images/men-acc1.jpeg";
function setImage1() {
   document.watch1.src = image1[a];
}
setInterval(() => {
   if (a < image1.length - 1) {
      a++;
   } else {
      a = 0;
   }
   setImage1();
}, 10000);
document.querySelector("#left-btn").addEventListener("click", leftBtn1);
function leftBtn1() {
   if (a > 0) {
      a--;
   } else {
      a = image1.length - 1;
   }
   setImage1();
}
document.querySelector("#right-btn").addEventListener("click", rightBtn1);
function rightBtn1() {
   if (a < image1.length - 1) {
      a++;
   } else {
      a = 0;
   }
   setImage1();
}
document.querySelector("#cart").addEventListener("click", cartW);
function cartW() {
   document.querySelector("#cart").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy").addEventListener("click", buyW);
function buyW() {
   const buyWatch = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWatch <= 4 && buyWatch > 0) {
      document.querySelector("#total").textContent =
         "Total Price : " + "₹" + 5577 * buyWatch + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWatch === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 4 pieces left !!!");
   }
}
//watch 2
var image2 = ["Images/men-acc5.jpeg", "Images/men-acc5-2.jpeg"];
var b = 0;
document.watch2.src = "Images/men-acc5.jpeg";
function setImage2() {
   document.watch2.src = image2[b];
}
setInterval(() => {
   if (b < image2.length - 1) {
      b++;
   } else {
      b = 0;
   }
   setImage2();
}, 10000);
document.querySelector("#left-btn1").addEventListener("click", leftBtn2);
function leftBtn2() {
   if (b > 0) {
      b--;
   } else {
      b = image2.length - 1;
   }
   setImage2();
}
document.querySelector("#right-btn1").addEventListener("click", rightBtn2);
function rightBtn2() {
   if (b < image2.length - 1) {
      b++;
   } else {
      b = 0;
   }
   setImage2();
}
document.querySelector("#cart1").addEventListener("click", cartW1);
function cartW1() {
   document.querySelector("#cart1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy1").addEventListener("click", buyW1);
function buyW1() {
   const buyWatch = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWatch <= 7 && buyWatch > 0) {
      document.querySelector("#total1").textContent =
         "Total Price : " + "₹" + 5577 * buyWatch + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWatch === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 7 pieces left !!!");
   }
}
//watch 3
var image3 = ["Images/men-acc9.jpeg", "Images/men-acc9-2.jpeg"];
var c = 0;
document.watch3.src = "Images/men-acc9.jpeg";
function setImage3() {
   document.watch3.src = image3[c];
}
setInterval(() => {
   if (c < image3.length - 1) {
      c++;
   } else {
      c = 0;
   }
   setImage3();
}, 10000);
document.querySelector("#left-btn2").addEventListener("click", leftBtn3);
function leftBtn3() {
   if (c > 0) {
      c--;
   } else {
      c = image3.length - 1;
   }
   setImage3();
}
document.querySelector("#right-btn2").addEventListener("click", rightBtn3);
function rightBtn3() {
   if (c < image3.length - 1) {
      c++;
   } else {
      c = 0;
   }
   setImage3();
}
document.querySelector("#cart2").addEventListener("click", cartW2);
function cartW2() {
   document.querySelector("#cart2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy2").addEventListener("click", buyW2);
function buyW2() {
   const buyWatch = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWatch <= 10 && buyWatch > 0) {
      document.querySelector("#total2").textContent =
         "Total Price : " + "₹" + 499 * buyWatch + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWatch === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//watch 4
var image4 = ["Images/men-acc3.jpeg", "Images/men-acc3-2.jpeg"];
var d = 0;
document.watch4.src = "Images/men-acc3.jpeg";
function setImage4() {
   document.watch4.src = image4[d];
}
setInterval(() => {
   if (d < image4.length - 1) {
      d++;
   } else {
      d = 0;
   }
   setImage4();
}, 10000);
document.querySelector("#left-btn3").addEventListener("click", leftBtn4);
function leftBtn4() {
   if (d > 0) {
      d--;
   } else {
      d = image4.length - 1;
   }
   setImage4();
}
document.querySelector("#right-btn3").addEventListener("click", rightBtn4);
function rightBtn4() {
   if (d < image4.length - 1) {
      d++;
   } else {
      d = 0;
   }
   setImage4();
}
document.querySelector("#cart3").addEventListener("click", cartW3);
function cartW3() {
   document.querySelector("#cart3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy3").addEventListener("click", buyW3);
function buyW3() {
   const buyWatch = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWatch <= 10 && buyWatch > 0) {
      document.querySelector("#total3").textContent =
         "Total Price : " + "₹" + 999 * buyWatch + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWatch === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//watch 5
var image5 = [
   "Images/men-acc2.jpeg",
   "Images/men-acc2-2.jpeg",
   "Images/men-acc2-3.jpeg",
];
var e = 0;
document.watch5.src = "Images/men-acc2.jpeg";
function setImage5() {
   document.watch5.src = image5[e];
}
setInterval(() => {
   if (e < image5.length - 1) {
      e++;
   } else {
      e = 0;
   }
   setImage5();
}, 10000);
document.querySelector("#left-btn4").addEventListener("click", leftBtn5);
function leftBtn5() {
   if (e > 0) {
      e--;
   } else {
      e = image5.length - 1;
   }
   setImage5();
}
document.querySelector("#right-btn4").addEventListener("click", rightBtn5);
function rightBtn5() {
   if (e < image5.length - 1) {
      e++;
   } else {
      e = 0;
   }
   setImage5();
}
document.querySelector("#cart4").addEventListener("click", cartW4);
function cartW4() {
   document.querySelector("#cart4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy4").addEventListener("click", buyW4);
function buyW4() {
   const buyWatch = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWatch <= 5 && buyWatch > 0) {
      document.querySelector("#total4").textContent =
         "Total Price : " + "₹" + 2862 * buyWatch + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWatch === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 5 pieces left !!!");
   }
}
//watch 6
var image6 = [
   "Images/men-acc8.jpeg",
   "Images/men-acc8-2.jpeg",
   "Images/men-acc8-3.jpeg",
];
var f = 0;
document.watch6.src = "Images/men-acc8.jpeg";
function setImage6() {
   document.watch6.src = image6[f];
}
setInterval(() => {
   if (f < image6.length - 1) {
      f++;
   } else {
      f = 0;
   }
   setImage6();
}, 10000);
document.querySelector("#left-btn5").addEventListener("click", leftBtn6);
function leftBtn6() {
   if (f > 0) {
      f--;
   } else {
      f = image6.length - 1;
   }
   setImage6();
}
document.querySelector("#right-btn5").addEventListener("click", rightBtn6);
function rightBtn6() {
   if (f < image6.length - 1) {
      f++;
   } else {
      f = 0;
   }
   setImage6();
}
document.querySelector("#cart5").addEventListener("click", cartW5);
function cartW5() {
   document.querySelector("#cart5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy5").addEventListener("click", buyW5);
function buyW5() {
   const buyWatch = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWatch <= 10 && buyWatch > 0) {
      document.querySelector("#total5").textContent =
         "Total Price : " + "₹" + 4747 * buyWatch + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWatch === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//watch 7
var image7 = [
   "Images/men-acc6.jpeg",
   "Images/men-acc6-2.jpeg",
   "Images/men-acc6-3.jpeg",
];
var g = 0;
document.watch7.src = "Images/men-acc6.jpeg";
function setImage7() {
   document.watch7.src = image7[g];
}
setInterval(() => {
   if (g < image7.length - 1) {
      g++;
   } else {
      g = 0;
   }
   setImage7();
}, 10000);
document.querySelector("#left-btn6").addEventListener("click", leftBtn7);
function leftBtn7() {
   if (g > 0) {
      g--;
   } else {
      g = image7.length - 1;
   }
   setImage7();
}
document.querySelector("#right-btn6").addEventListener("click", rightBtn7);
function rightBtn7() {
   if (g < image7.length - 1) {
      g++;
   } else {
      g = 0;
   }
   setImage7();
}
document.querySelector("#cart6").addEventListener("click", cartW6);
function cartW6() {
   document.querySelector("#cart6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy6").addEventListener("click", buyW6);
function buyW6() {
   const buyWatch = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWatch <= 2 && buyWatch > 0) {
      document.querySelector("#total6").textContent =
         "Total Price : " + "₹" + 925 * buyWatch + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWatch === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 2 pieces left !!!");
   }
}
//watch 8
var image8 = [
   "Images/men-acc4.jpeg",
   "Images/men-acc4-2.jpeg",
   "Images/men-acc4-3.jpeg",
];
var h = 0;
document.watch8.src = "Images/men-acc4.jpeg";
function setImage8() {
   document.watch8.src = image8[h];
}
setInterval(() => {
   if (h < image8.length - 1) {
      h++;
   } else {
      h = 0;
   }
   setImage8();
}, 10000);
document.querySelector("#left-btn7").addEventListener("click", leftBtn8);
function leftBtn8() {
   if (h > 0) {
      h--;
   } else {
      h = image8.length - 1;
   }
   setImage8();
}
document.querySelector("#right-btn7").addEventListener("click", rightBtn8);
function rightBtn8() {
   if (h < image8.length - 1) {
      h++;
   } else {
      h = 0;
   }
   setImage8();
}
document.querySelector("#cart7").addEventListener("click", cartW7);
function cartW7() {
   document.querySelector("#cart7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy7").addEventListener("click", buyW7);
function buyW7() {
   const buyWatch = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWatch <= 10 && buyWatch > 0) {
      document.querySelector("#total7").textContent =
         "Total Price : " + "₹" + 2437 * buyWatch + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWatch === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//watch 9
var image9 = [
   "Images/men-acc7.jpeg",
   "Images/men-acc7-2.jpeg",
   "Images/men-acc7-3.jpeg",
];
var i = 0;
document.watch9.src = "Images/men-acc7.jpeg";
function setImage9() {
   document.watch9.src = image9[i];
}
setInterval(() => {
   if (i < image9.length - 1) {
      i++;
   } else {
      i = 0;
   }
   setImage9();
}, 10000);
document.querySelector("#left-btn8").addEventListener("click", leftBtn9);
function leftBtn9() {
   if (i > 0) {
      i--;
   } else {
      i = image9.length - 1;
   }
   setImage9();
}
document.querySelector("#right-btn8").addEventListener("click", rightBtn9);
function rightBtn9() {
   if (i < image9.length - 1) {
      i++;
   } else {
      i = 0;
   }
   setImage9();
}
document.querySelector("#cart8").addEventListener("click", cartW8);
function cartW8() {
   document.querySelector("#cart8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy8").addEventListener("click", buyW8);
function buyW8() {
   const buyWatch = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWatch <= 10 && buyWatch > 0) {
      document.querySelector("#total8").textContent =
         "Total Price : " + "₹" + 5697 * buyWatch + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWatch === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//onclick -shown watches
document.querySelector("#watch-h3").addEventListener("click", clickOnWatch);
function clickOnWatch() {
   if (document.querySelector("#watch1").style.display != "block") {
      document.querySelector(".watches").style.display = "flex";
      document.querySelector(".watches").style.animation =
         "afterclick 1s ease .01s";
      document.querySelector("#watch1").style.display = "block";
      document.querySelector("#watch2").style.display = "block";
      document.querySelector("#watch3").style.display = "block";
      document.querySelector("#watch4").style.display = "block";
      document.querySelector("#watch5").style.display = "block";
      document.querySelector("#watch6").style.display = "block";
      document.querySelector("#watch7").style.display = "block";
      document.querySelector("#watch8").style.display = "block";
      document.querySelector("#watch9").style.display = "block";
      document.querySelector("#watch-h3").innerHTML = "Watches &#9650;";
   } else {
      document.querySelector(".watches").style.display = "block";
      document.querySelector(".watches").style.animation =
         "Elseafterclick 1s ease .01s";
      document.querySelector("#watch1").style.display = "none";
      document.querySelector("#watch2").style.display = "none";
      document.querySelector("#watch3").style.display = "none";
      document.querySelector("#watch4").style.display = "none";
      document.querySelector("#watch5").style.display = "none";
      document.querySelector("#watch6").style.display = "none";
      document.querySelector("#watch7").style.display = "none";
      document.querySelector("#watch8").style.display = "none";
      document.querySelector("#watch9").style.display = "none";
      document.querySelector("#watch-h3").innerHTML = "Watches &#9660;";
   }
}
//backpack1
var backp1 = [
   "Images/men-accbag1.jpeg",
   "Images/men-accbag1-2.jpeg",
   "Images/men-accbag1-3.jpeg",
];
var bp1 = 0;
document.backpack1.src = "Images/men-accbag1.jpeg";
function bpImg() {
   document.backpack1.src = backp1[bp1];
}
setInterval(() => {
   if (bp1 < backp1.length - 1) {
      bp1++;
   } else {
      bp1 = 0;
   }
   bpImg();
}, 10000);
document.querySelector("#left-bpbtn").addEventListener("click", leftBp);
function leftBp() {
   if (bp1 > 0) {
      bp1--;
   } else {
      bp1 = backp1.length - 1;
   }
   bpImg();
}
document.querySelector("#right-bpbtn").addEventListener("click", rightBp);
function rightBp() {
   if (bp1 < backp1.length - 1) {
      bp1++;
   } else {
      bp1 = 0;
   }
   bpImg();
}
document.querySelector("#cart-bp").addEventListener("click", cartBp);
function cartBp() {
   document.querySelector("#cart-bp").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-bp").addEventListener("click", buyBp);
function buyBp() {
   const buyBackpack = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBackpack <= 10 && buyBackpack > 0) {
      document.querySelector("#total-bp").textContent =
         "Total Price : " + "₹" + 674 * buyBackpack + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyBackpack === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//backpack2
var backp2 = [
   "Images/men-accbag3.jpeg",
   "Images/men-accbag3-2.jpeg",
   "Images/men-accbag3-3.jpeg",
];
var bp2 = 0;
document.backpack2.src = "Images/men-accbag3.jpeg";
function bpImg1() {
   document.backpack2.src = backp2[bp2];
}
setInterval(() => {
   if (bp2 < backp2.length - 1) {
      bp2++;
   } else {
      bp2 = 0;
   }
   bpImg1();
}, 10000);
document.querySelector("#left-bpbtn1").addEventListener("click", leftBp1);
function leftBp1() {
   if (bp2 > 0) {
      bp2--;
   } else {
      bp2 = backp2.length - 1;
   }
   bpImg1();
}
document.querySelector("#right-bpbtn1").addEventListener("click", rightBp1);
function rightBp1() {
   if (bp2 < backp2.length - 1) {
      bp2++;
   } else {
      bp2 = 0;
   }
   bpImg1();
}
document.querySelector("#cart-bp1").addEventListener("click", cartBp1);
function cartBp1() {
   document.querySelector("#cart-bp1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-bp1").addEventListener("click", buyBp1);
function buyBp1() {
   const buyBackpack = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBackpack <= 10 && buyBackpack > 0) {
      document.querySelector("#total-bp1").textContent =
         "Total Price : " + "₹" + 399 * buyBackpack + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyBackpack === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//backpack3
var backp3 = [
   "Images/men-accbag5.jpeg",
   "Images/men-accbag5-2.jpeg",
   "Images/men-accbag5-3.jpeg",
];
var bp3 = 0;
document.backpack3.src = "Images/men-accbag5.jpeg";
function bpImg2() {
   document.backpack3.src = backp3[bp3];
}
setInterval(() => {
   if (bp3 < backp3.length - 1) {
      bp3++;
   } else {
      bp3 = 0;
   }
   bpImg2();
}, 10000);
document.querySelector("#left-bpbtn2").addEventListener("click", leftBp2);
function leftBp2() {
   if (bp3 > 0) {
      bp3--;
   } else {
      bp3 = backp3.length - 1;
   }
   bpImg2();
}
document.querySelector("#right-bpbtn2").addEventListener("click", rightBp2);
function rightBp2() {
   if (bp3 < backp3.length - 1) {
      bp3++;
   } else {
      bp3 = 0;
   }
   bpImg2();
}
document.querySelector("#cart-bp2").addEventListener("click", cartBp2);
function cartBp2() {
   document.querySelector("#cart-bp2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-bp2").addEventListener("click", buyBp2);
function buyBp2() {
   const buyBackpack = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBackpack <= 6 && buyBackpack > 0) {
      document.querySelector("#total-bp2").textContent =
         "Total Price : " + "₹" + 1065 * buyBackpack + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyBackpack === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 6 pieces left !!!");
   }
}
//backpack4
var backp4 = [
   "Images/men-accbag4.jpeg",
   "Images/men-accbag4-2.jpeg",
   "Images/men-accbag4-3.jpeg",
];
var bp4 = 0;
document.backpack4.src = "Images/men-accbag4.jpeg";
function bpImg3() {
   document.backpack4.src = backp4[bp4];
}
setInterval(() => {
   if (bp4 < backp4.length - 1) {
      bp4++;
   } else {
      bp4 = 0;
   }
   bpImg3();
}, 10000);
document.querySelector("#left-bpbtn3").addEventListener("click", leftBp3);
function leftBp3() {
   if (bp4 > 0) {
      bp4--;
   } else {
      bp4 = backp4.length - 1;
   }
   bpImg3();
}
document.querySelector("#right-bpbtn3").addEventListener("click", rightBp3);
function rightBp3() {
   if (bp4 < backp4.length - 1) {
      bp4++;
   } else {
      bp4 = 0;
   }
   bpImg3();
}
document.querySelector("#cart-bp3").addEventListener("click", cartBp3);
function cartBp3() {
   document.querySelector("#cart-bp3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-bp3").addEventListener("click", buyBp3);
function buyBp3() {
   const buyBackpack = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBackpack <= 10 && buyBackpack > 0) {
      document.querySelector("#total-bp3").textContent =
         "Total Price : " + "₹" + 1240 * buyBackpack + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyBackpack === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//backpack5
var backp5 = [
   "Images/men-accbag6.jpeg",
   "Images/men-accbag6-2.jpeg",
   "Images/men-accbag6-3.jpeg",
];
var bp5 = 0;
document.backpack5.src = "Images/men-accbag6.jpeg";
function bpImg4() {
   document.backpack5.src = backp5[bp5];
}
setInterval(() => {
   if (bp5 < backp5.length - 1) {
      bp5++;
   } else {
      bp5 = 0;
   }
   bpImg4();
}, 10000);
document.querySelector("#left-bpbtn4").addEventListener("click", leftBp4);
function leftBp4() {
   if (bp5 > 0) {
      bp5--;
   } else {
      bp5 = backp5.length - 1;
   }
   bpImg4();
}
document.querySelector("#right-bpbtn4").addEventListener("click", rightBp4);
function rightBp4() {
   if (bp5 < backp5.length - 1) {
      bp5++;
   } else {
      bp5 = 0;
   }
   bpImg4();
}
document.querySelector("#cart-bp4").addEventListener("click", cartBp4);
function cartBp4() {
   document.querySelector("#cart-bp4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-bp4").addEventListener("click", buyBp4);
function buyBp4() {
   const buyBackpack = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBackpack <= 10 && buyBackpack > 0) {
      document.querySelector("#total-bp4").textContent =
         "Total Price : " + "₹" + 1290 * buyBackpack + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyBackpack === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//onclick -shown backpacks
document
   .querySelector("#backpack-h3")
   .addEventListener("click", clickOnBackpack);
function clickOnBackpack() {
   if (document.querySelector("#backpack1").style.display != "block") {
      document.querySelector(".backpack").style.display = "flex";
      document.querySelector(".backpack").style.animation =
         "afterclick 1s ease .01s";
      document.querySelector("#backpack1").style.display = "block";
      document.querySelector("#backpack2").style.display = "block";
      document.querySelector("#backpack3").style.display = "block";
      document.querySelector("#backpack4").style.display = "block";
      document.querySelector("#backpack5").style.display = "block";
      document.querySelector("#backpack-h3").innerHTML = "Backpacks &#9650;";
   } else {
      document.querySelector(".backpack").style.display = "block";
      document.querySelector(".backpack").style.animation =
         "Elseafterclick 1s ease .01s";
      document.querySelector("#backpack1").style.display = "none";
      document.querySelector("#backpack2").style.display = "none";
      document.querySelector("#backpack3").style.display = "none";
      document.querySelector("#backpack4").style.display = "none";
      document.querySelector("#backpack5").style.display = "none";
      document.querySelector("#backpack-h3").innerHTML = "Backpacks &#9660;";
   }
}
//wallet1
var wallet1 = [
   "Images/men-accwal1-5.jpeg",
   "Images/men-accwal1-2.jpeg",
   "Images/men-accwal1-3.jpeg",
   "Images/men-accwal1-4.jpeg",
   "Images/men-accwal1.jpeg",
];
var wl1 = 0;
document.wallet1.src = "Images/men-accwal1-5.jpeg";
function walImg() {
   document.wallet1.src = wallet1[wl1];
}
setInterval(() => {
   if (wl1 < wallet1.length - 1) {
      wl1++;
   } else {
      wl1 = 0;
   }
   walImg();
}, 10000);
document.querySelector("#left-wlbtn").addEventListener("click", leftWal);
function leftWal() {
   if (wl1 > 0) {
      wl1--;
   } else {
      wl1 = wallet1.length - 1;
   }
   walImg();
}
document.querySelector("#right-wlbtn").addEventListener("click", rightWal);
function rightWal() {
   if (wl1 < wallet1.length - 1) {
      wl1++;
   } else {
      wl1 = 0;
   }
   walImg();
}
document.querySelector("#cart-wl").addEventListener("click", cartWal);
function cartWal() {
   document.querySelector("#cart-wl").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-wl").addEventListener("click", buyWal);
function buyWal() {
   const buyWallet = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWallet <= 10 && buyWallet > 0) {
      document.querySelector("#total-wl").textContent =
         "Total Price : " + "₹" + 599 * buyWallet + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWallet === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//wallet2
var wallet2 = [
   "Images/men-accwal2.jpeg",
   "Images/men-accwal2-3.jpeg",
   "Images/men-accwal2-2.jpeg",
   "Images/men-accwal2-4.jpeg",
   "Images/men-accwal2-5.jpeg",
];
var wl2 = 0;
document.wallet2.src = "Images/men-accwal2.jpeg";
function walImg1() {
   document.wallet2.src = wallet2[wl2];
}
setInterval(() => {
   if (wl2 < wallet2.length - 1) {
      wl2++;
   } else {
      wl2 = 0;
   }
   walImg1();
}, 10000);
document.querySelector("#left-wlbtn1").addEventListener("click", leftWal1);
function leftWal1() {
   if (wl2 > 0) {
      wl2--;
   } else {
      wl2 = wallet2.length - 1;
   }
   walImg1();
}
document.querySelector("#right-wlbtn1").addEventListener("click", rightWal1);
function rightWal1() {
   if (wl2 < wallet2.length - 1) {
      wl2++;
   } else {
      wl2 = 0;
   }
   walImg1();
}
document.querySelector("#cart-wl1").addEventListener("click", cartWal1);
function cartWal1() {
   document.querySelector("#cart-wl1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-wl1").addEventListener("click", buyWal1);
function buyWal1() {
   const buyWallet = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWallet <= 8 && buyWallet > 0) {
      document.querySelector("#total-wl1").textContent =
         "Total Price : " + "₹" + 490 * buyWallet + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWallet === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 8 pieces left !!!");
   }
}
//wallet3
var wallet3 = [
   "Images/men-accwal3.jpeg",
   "Images/men-accwal3-2.jpeg",
   "Images/men-accwal3-3.jpeg",
   "Images/men-accwal3-4.jpeg",
   "Images/men-accwal3-2.jpeg",
];
var wl3 = 0;
document.wallet3.src = "Images/men-accwal3.jpeg";
function walImg2() {
   document.wallet3.src = wallet3[wl3];
}
setInterval(() => {
   if (wl3 < wallet3.length - 1) {
      wl3++;
   } else {
      wl3 = 0;
   }
   walImg2();
}, 10000);
document.querySelector("#left-wlbtn2").addEventListener("click", leftWal2);
function leftWal2() {
   if (wl3 > 0) {
      wl3--;
   } else {
      wl3 = wallet3.length - 1;
   }
   walImg2();
}
document.querySelector("#right-wlbtn2").addEventListener("click", rightWal2);
function rightWal2() {
   if (wl3 < wallet3.length - 1) {
      wl3++;
   } else {
      wl3 = 0;
   }
   walImg2();
}
document.querySelector("#cart-wl2").addEventListener("click", cartWal2);
function cartWal2() {
   document.querySelector("#cart-wl2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-wl2").addEventListener("click", buyWal2);
function buyWal2() {
   const buyWallet = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWallet <= 10 && buyWallet > 0) {
      document.querySelector("#total-wl2").textContent =
         "Total Price : " + "₹" + 493 * buyWallet + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWallet === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//wallet4
var wallet4 = [
   "Images/men-accwal4.jpeg",
   "Images/men-accwal4-2.jpeg",
   "Images/men-accwal4-3.jpeg",
   "Images/men-accwal4-4.jpeg",
   "Images/men-accwal4-5.jpeg",
];
var wl4 = 0;
document.wallet4.src = "Images/men-accwal4.jpeg";
function walImg3() {
   document.wallet4.src = wallet4[wl4];
}
setInterval(() => {
   if (wl4 < wallet4.length - 1) {
      wl4++;
   } else {
      wl4 = 0;
   }
   walImg3();
}, 10000);
document.querySelector("#left-wlbtn3").addEventListener("click", leftWal3);
function leftWal3() {
   if (wl4 > 0) {
      wl4--;
   } else {
      wl4 = wallet4.length - 1;
   }
   walImg3();
}
document.querySelector("#right-wlbtn3").addEventListener("click", rightWal3);
function rightWal3() {
   if (wl4 < wallet4.length - 1) {
      wl4++;
   } else {
      wl4 = 0;
   }
   walImg3();
}
document.querySelector("#cart-wl3").addEventListener("click", cartWal3);
function cartWal3() {
   document.querySelector("#cart-wl3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-wl3").addEventListener("click", buyWal3);
function buyWal3() {
   const buyWallet = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWallet <= 10 && buyWallet > 0) {
      document.querySelector("#total-wl3").textContent =
         "Total Price : " + "₹" + 557 * buyWallet + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWallet === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//onclick -shown wallets
document.querySelector("#wallet-h3").addEventListener("click", clickOnWallet);
function clickOnWallet() {
   if (document.querySelector("#wallet1").style.display != "block") {
      document.querySelector(".wallet").style.display = "flex";
      document.querySelector(".wallet").style.animation =
         "afterclick 1s ease .01s";
      document.querySelector("#wallet1").style.display = "block";
      document.querySelector("#wallet2").style.display = "block";
      document.querySelector("#wallet3").style.display = "block";
      document.querySelector("#wallet4").style.display = "block";

      document.querySelector("#wallet-h3").innerHTML = "Wallets &#9650;";
   } else {
      document.querySelector(".wallet").style.display = "block";
      document.querySelector(".wallet").style.animation =
         "Elseafterclick 1s ease .01s";
      document.querySelector("#wallet1").style.display = "none";
      document.querySelector("#wallet2").style.display = "none";
      document.querySelector("#wallet3").style.display = "none";
      document.querySelector("#wallet4").style.display = "none";
      document.querySelector("#wallet-h3").innerHTML = "Wallets &#9660;";
   }
}
//belt1
var belt1 = [
   "Images/men-accbel1.jpeg",
   "Images/men-accbel1-2.jpeg",
   "Images/men-accbel1-3.jpeg",
   "Images/men-accbel1-4.jpeg",
];
var bel1 = 0;
document.belt1.src = "Images/men-accbel1.jpeg";
function belImg() {
   document.belt1.src = belt1[bel1];
}
setInterval(() => {
   if (bel1 < belt1.length - 1) {
      bel1++;
   } else {
      bel1 = 0;
   }
   belImg();
}, 10000);
document.querySelector("#left-belbtn").addEventListener("click", leftBel);
function leftBel() {
   if (bel1 > 0) {
      bel1--;
   } else {
      bel1 = belt1.length - 1;
   }
   belImg();
}
document.querySelector("#right-belbtn").addEventListener("click", rightBel);
function rightBel() {
   if (bel1 < belt1.length - 1) {
      bel1++;
   } else {
      bel1 = 0;
   }
   belImg();
}
document.querySelector("#cart-bel").addEventListener("click", cartBel);
function cartBel() {
   document.querySelector("#cart-bel").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-bel").addEventListener("click", buyBel);
function buyBel() {
   const buyBelt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBelt <= 10 && buyBelt > 0) {
      document.querySelector("#total-bel").textContent =
         "Total Price : " + "₹" + 599 * buyBelt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyBelt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//belt2
var belt2 = [
   "Images/men-accbel2.jpeg",
   "Images/men-accbel2-2.jpeg",
   "Images/men-accbel2-3.jpeg",
   "Images/men-accbel2-4.jpeg",
];
var bel2 = 0;
document.belt2.src = "Images/men-accbel2.jpeg";
function belImg1() {
   document.belt2.src = belt2[bel2];
}
setInterval(() => {
   if (bel2 < belt2.length - 1) {
      bel2++;
   } else {
      bel2 = 0;
   }
   belImg1();
}, 10000);
document.querySelector("#left-belbtn1").addEventListener("click", leftBel1);
function leftBel1() {
   if (bel2 > 0) {
      bel2--;
   } else {
      bel2 = belt2.length - 1;
   }
   belImg1();
}
document.querySelector("#right-belbtn1").addEventListener("click", rightBel1);
function rightBel1() {
   if (bel2 < belt2.length - 1) {
      bel2++;
   } else {
      bel2 = 0;
   }
   belImg1();
}
document.querySelector("#cart-bel1").addEventListener("click", cartBel1);
function cartBel1() {
   document.querySelector("#cart-bel1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-bel1").addEventListener("click", buyBel1);
function buyBel1() {
   const buyBelt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBelt <= 5 && buyBelt > 0) {
      document.querySelector("#total-bel1").textContent =
         "Total Price : " + "₹" + 399 * buyBelt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyBelt === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 5 pieces left !!!");
   }
}
//belt3
var belt3 = [
   "Images/men-accbel3.jpeg",
   "Images/men-accbel3-2.jpeg",
   "Images/men-accbel3-3.jpeg",
   "Images/men-accbel3-4.jpeg",
];
var bel3 = 0;
document.belt3.src = "Images/men-accbel3.jpeg";
function belImg2() {
   document.belt3.src = belt3[bel3];
}
setInterval(() => {
   if (bel3 < belt3.length - 1) {
      bel3++;
   } else {
      bel3 = 0;
   }
   belImg2();
}, 10000);
document.querySelector("#left-belbtn2").addEventListener("click", leftBel2);
function leftBel2() {
   if (bel3 > 0) {
      bel3--;
   } else {
      bel3 = belt3.length - 1;
   }
   belImg2();
}
document.querySelector("#right-belbtn2").addEventListener("click", rightBel2);
function rightBel2() {
   if (bel3 < belt3.length - 1) {
      bel3++;
   } else {
      bel3 = 0;
   }
   belImg2();
}
document.querySelector("#cart-bel2").addEventListener("click", cartBel2);
function cartBel2() {
   document.querySelector("#cart-bel2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-bel2").addEventListener("click", buyBel2);
function buyBel2() {
   const buyBelt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBelt <= 10 && buyBelt > 0) {
      document.querySelector("#total-bel2").textContent =
         "Total Price : " + "₹" + 474 * buyBelt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyBelt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//belt4
var belt4 = [
   "Images/men-accbel4.jpeg",
   "Images/men-accbel4-2.jpeg",
   "Images/men-accbel4-3.jpeg",
   "Images/men-accbel4-4.jpeg",
];
var bel4 = 0;
document.belt4.src = "Images/men-accbel4.jpeg";
function belImg3() {
   document.belt4.src = belt4[bel4];
}
setInterval(() => {
   if (bel4 < belt4.length - 1) {
      bel4++;
   } else {
      bel4 = 0;
   }
   belImg3();
}, 10000);
document.querySelector("#left-belbtn3").addEventListener("click", leftBel3);
function leftBel3() {
   if (bel4 > 0) {
      bel4--;
   } else {
      bel4 = belt4.length - 1;
   }
   belImg3();
}
document.querySelector("#right-belbtn3").addEventListener("click", rightBel3);
function rightBel3() {
   if (bel4 < belt4.length - 1) {
      bel4++;
   } else {
      bel4 = 0;
   }
   belImg3();
}
document.querySelector("#cart-bel3").addEventListener("click", cartBel3);
function cartBel3() {
   document.querySelector("#cart-bel3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-bel3").addEventListener("click", buyBel3);
function buyBel3() {
   const buyBelt = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBelt <= 10 && buyBelt > 0) {
      document.querySelector("#total-bel3").textContent =
         "Total Price : " + "₹" + 436 * buyBelt + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyBelt === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//onclick -shown belts
document.querySelector("#belt-h3").addEventListener("click", clickOnBelt);
function clickOnBelt() {
   if (document.querySelector("#belt1").style.display != "block") {
      document.querySelector(".belt").style.display = "flex";
      document.querySelector(".belt").style.animation =
         "afterclick 1s ease .01s";
      document.querySelector("#belt1").style.display = "block";
      document.querySelector("#belt2").style.display = "block";
      document.querySelector("#belt3").style.display = "block";
      document.querySelector("#belt4").style.display = "block";

      document.querySelector("#belt-h3").innerHTML = "Belts &#9650;";
   } else {
      document.querySelector(".belt").style.display = "block";
      document.querySelector(".belt").style.animation =
         "Elseafterclick 1s ease .01s";
      document.querySelector("#belt1").style.display = "none";
      document.querySelector("#belt2").style.display = "none";
      document.querySelector("#belt3").style.display = "none";
      document.querySelector("#belt4").style.display = "none";
      document.querySelector("#belt-h3").innerHTML = "Belts &#9660;";
   }
}
//sunglasses1
var sung1 = [
   "Images/men-accsg1.jpeg",
   "Images/men-accsg1-2.jpeg",
   "Images/men-accsg1-3.jpeg",
   "Images/men-accsg1-4.jpeg",
];
var sg1 = 0;
document.sunglasses1.src = "Images/men-accsg1.jpeg";
function sgImg() {
   document.sunglasses1.src = sung1[sg1];
}
setInterval(() => {
   if (sg1 < sung1.length - 1) {
      sg1++;
   } else {
      sg1 = 0;
   }
   sgImg();
}, 10000);
document.querySelector("#left-sgbtn").addEventListener("click", leftSg);
function leftSg() {
   if (sg1 > 0) {
      sg1--;
   } else {
      sg1 = sung1.length - 1;
   }
   sgImg();
}
document.querySelector("#right-sgbtn").addEventListener("click", rightSg);
function rightSg() {
   if (sg1 < sung1.length - 1) {
      sg1++;
   } else {
      sg1 = 0;
   }
   sgImg();
}
document.querySelector("#cart-sg").addEventListener("click", cartSg);
function cartSg() {
   document.querySelector("#cart-sg").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sg").addEventListener("click", buySg);
function buySg() {
   const buySunglasses = parseInt(
      prompt("How much pieces do you want to buy ?")
   );
   if (buySunglasses <= 10 && buySunglasses > 0) {
      document.querySelector("#total-sg").textContent =
         "Total Price : " + "₹" + 759 * buySunglasses + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySunglasses === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//sunglasses2
var sung2 = [
   "Images/men-accsg2.jpeg",
   "Images/men-accsg2-4.jpg",
   "Images/men-accsg2-2.jpeg",
   "Images/men-accsg2-3.jpeg",
];
var sg2 = 0;
document.sunglasses2.src = "Images/men-accsg2.jpeg";
function sgImg1() {
   document.sunglasses2.src = sung2[sg2];
}
setInterval(() => {
   if (sg2 < sung2.length - 1) {
      sg2++;
   } else {
      sg2 = 0;
   }
   sgImg1();
}, 10000);
document.querySelector("#left-sgbtn1").addEventListener("click", leftSg1);
function leftSg1() {
   if (sg2 > 0) {
      sg2--;
   } else {
      sg2 = sung2.length - 1;
   }
   sgImg1();
}
document.querySelector("#right-sgbtn1").addEventListener("click", rightSg1);
function rightSg1() {
   if (sg2 < sung2.length - 1) {
      sg2++;
   } else {
      sg2 = 0;
   }
   sgImg1();
}
document.querySelector("#cart-sg1").addEventListener("click", cartSg1);
function cartSg1() {
   document.querySelector("#cart-sg1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sg1").addEventListener("click", buySg1);
function buySg1() {
   const buySunglasses = parseInt(
      prompt("How much pieces do you want to buy ?")
   );
   if (buySunglasses <= 10 && buySunglasses > 0) {
      document.querySelector("#total-sg1").textContent =
         "Total Price : " + "₹" + 499 * buySunglasses + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySunglasses === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//sunglasses3
var sung3 = [
   "Images/men-accsg3.jpeg",
   "Images/men-accsg3-4.jpeg",
   "Images/men-accsg3-3.jpeg",
   "Images/men-accsg1-4.jpeg",
];
var sg3 = 0;
document.sunglasses3.src = "Images/men-accsg3.jpeg";
function sgImg2() {
   document.sunglasses3.src = sung3[sg3];
}
setInterval(() => {
   if (sg3 < sung3.length - 1) {
      sg3++;
   } else {
      sg3 = 0;
   }
   sgImg2();
}, 10000);
document.querySelector("#left-sgbtn2").addEventListener("click", leftSg2);
function leftSg2() {
   if (sg3 > 0) {
      sg3--;
   } else {
      sg3 = sung3.length - 1;
   }
   sgImg2();
}
document.querySelector("#right-sgbtn2").addEventListener("click", rightSg2);
function rightSg2() {
   if (sg3 < sung3.length - 1) {
      sg3++;
   } else {
      sg3 = 0;
   }
   sgImg2();
}
document.querySelector("#cart-sg2").addEventListener("click", cartSg2);
function cartSg2() {
   document.querySelector("#cart-sg2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sg2").addEventListener("click", buySg2);
function buySg2() {
   const buySunglasses = parseInt(
      prompt("How much pieces do you want to buy ?")
   );
   if (buySunglasses <= 4 && buySunglasses > 0) {
      document.querySelector("#total-sg2").textContent =
         "Total Price : " + "₹" + 1123 * buySunglasses + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySunglasses === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 4 pieces left !!!");
   }
}
//sunglasses4
var sung4 = [
   "Images/men-accsg4.jpeg",
   "Images/men-accsg4-3.jpeg",
   "Images/men-accsg4-2.jpeg",
   "Images/men-accsg4-4.jpeg",
];
var sg4 = 0;
document.sunglasses4.src = "Images/men-accsg4.jpeg";
function sgImg3() {
   document.sunglasses4.src = sung4[sg4];
}
setInterval(() => {
   if (sg4 < sung4.length - 1) {
      sg4++;
   } else {
      sg4 = 0;
   }
   sgImg3();
}, 10000);
document.querySelector("#left-sgbtn3").addEventListener("click", leftSg3);
function leftSg3() {
   if (sg4 > 0) {
      sg4--;
   } else {
      sg4 = sung4.length - 1;
   }
   sgImg3();
}
document.querySelector("#right-sgbtn3").addEventListener("click", rightSg3);
function rightSg3() {
   if (sg4 < sung4.length - 1) {
      sg4++;
   } else {
      sg4 = 0;
   }
   sgImg3();
}
document.querySelector("#cart-sg3").addEventListener("click", cartSg3);
function cartSg3() {
   document.querySelector("#cart-sg3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sg3").addEventListener("click", buySg3);
function buySg3() {
   const buySunglasses = parseInt(
      prompt("How much pieces do you want to buy ?")
   );
   if (buySunglasses <= 10 && buySunglasses > 0) {
      document.querySelector("#total-sg3").textContent =
         "Total Price : " + "₹" + 759 * buySunglasses + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySunglasses === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//sunglasses5
var sung5 = [
   "Images/men-accsg5.jpeg",
   "Images/men-accsg5-3.jpeg",
   "Images/men-accsg5-2.jpeg",
   "Images/men-accsg5-4.jpeg",
];
var sg5 = 0;
document.sunglasses5.src = "Images/men-accsg5.jpeg";
function sgImg4() {
   document.sunglasses5.src = sung5[sg5];
}
setInterval(() => {
   if (sg5 < sung5.length - 1) {
      sg5++;
   } else {
      sg5 = 0;
   }
   sgImg4();
}, 10000);
document.querySelector("#left-sgbtn4").addEventListener("click", leftSg4);
function leftSg4() {
   if (sg5 > 0) {
      sg5--;
   } else {
      sg5 = sung5.length - 1;
   }
   sgImg4();
}
document.querySelector("#right-sgbtn4").addEventListener("click", rightSg4);
function rightSg4() {
   if (sg5 < sung5.length - 1) {
      sg5++;
   } else {
      sg5 = 0;
   }
   sgImg4();
}
document.querySelector("#cart-sg4").addEventListener("click", cartSg4);
function cartSg4() {
   document.querySelector("#cart-sg4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sg4").addEventListener("click", buySg4);
function buySg4() {
   const buySunglasses = parseInt(
      prompt("How much pieces do you want to buy ?")
   );
   if (buySunglasses <= 10 && buySunglasses > 0) {
      document.querySelector("#total-sg4").textContent =
         "Total Price : " + "₹" + 499 * buySunglasses + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySunglasses === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//sunglasses6
var sung6 = [
   "Images/men-accsg6.jpeg",
   "Images/men-accsg6-2.jpeg",
   "Images/men-accsg6-3.jpeg",
   "Images/men-accsg6-4.jpeg",
];
var sg6 = 0;
document.sunglasses6.src = "Images/men-accsg6.jpeg";
function sgImg5() {
   document.sunglasses6.src = sung6[sg6];
}
setInterval(() => {
   if (sg6 < sung6.length - 1) {
      sg6++;
   } else {
      sg6 = 0;
   }
   sgImg5();
}, 10000);
document.querySelector("#left-sgbtn5").addEventListener("click", leftSg5);
function leftSg5() {
   if (sg6 > 0) {
      sg6--;
   } else {
      sg6 = sung6.length - 1;
   }
   sgImg5();
}
document.querySelector("#right-sgbtn5").addEventListener("click", rightSg5);
function rightSg5() {
   if (sg6 < sung6.length - 1) {
      sg6++;
   } else {
      sg6 = 0;
   }
   sgImg5();
}
document.querySelector("#cart-sg5").addEventListener("click", cartSg5);
function cartSg5() {
   document.querySelector("#cart-sg5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sg5").addEventListener("click", buySg5);
function buySg5() {
   const buySunglasses = parseInt(
      prompt("How much pieces do you want to buy ?")
   );
   if (buySunglasses <= 10 && buySunglasses > 0) {
      document.querySelector("#total-sg5").textContent =
         "Total Price : " + "₹" + 289 * buySunglasses + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySunglasses === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//sunglasses7
var sung7 = [
   "Images/men-accsg7.jpeg",
   "Images/men-accsg7-3.jpeg",
   "Images/men-accsg7-2.jpeg",
   "Images/men-accsg7-4.jpeg",
];
var sg7 = 0;
document.sunglasses7.src = "Images/men-accsg7.jpeg";
function sgImg6() {
   document.sunglasses7.src = sung7[sg7];
}
setInterval(() => {
   if (sg7 < sung7.length - 1) {
      sg7++;
   } else {
      sg7 = 0;
   }
   sgImg6();
}, 10000);
document.querySelector("#left-sgbtn6").addEventListener("click", leftSg6);
function leftSg6() {
   if (sg7 > 0) {
      sg7--;
   } else {
      sg7 = sung7.length - 1;
   }
   sgImg6();
}
document.querySelector("#right-sgbtn6").addEventListener("click", rightSg6);
function rightSg6() {
   if (sg7 < sung7.length - 1) {
      sg7++;
   } else {
      sg7 = 0;
   }
   sgImg6();
}
document.querySelector("#cart-sg6").addEventListener("click", cartSg6);
function cartSg6() {
   document.querySelector("#cart-sg6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#buy-sg6").addEventListener("click", buySg6);
function buySg6() {
   const buySunglasses = parseInt(
      prompt("How much pieces do you want to buy ?")
   );
   if (buySunglasses <= 7 && buySunglasses > 0) {
      document.querySelector("#total-sg6").textContent =
         "Total Price : " + "₹" + 499 * buySunglasses + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buySunglasses === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 7 pieces left !!!");
   }
}
//onclick -shown sunglasses
document
   .querySelector("#sunglasses-h3")
   .addEventListener("click", clickOnSunglasses);
function clickOnSunglasses() {
   if (document.querySelector("#sunglasses1").style.display != "block") {
      document.querySelector(".sunglasses").style.display = "flex";
      document.querySelector(".sunglasses").style.animation =
         "afterclick 1s ease .01s";
      document.querySelector("#sunglasses1").style.display = "block";
      document.querySelector("#sunglasses2").style.display = "block";
      document.querySelector("#sunglasses3").style.display = "block";
      document.querySelector("#sunglasses4").style.display = "block";
      document.querySelector("#sunglasses5").style.display = "block";
      document.querySelector("#sunglasses6").style.display = "block";
      document.querySelector("#sunglasses7").style.display = "block";
      document.querySelector("#sunglasses-h3").innerHTML = "Sunglasses &#9650;";
   } else {
      document.querySelector(".sunglasses").style.display = "block";
      document.querySelector(".sunglasses").style.animation =
         "Elseafterclick 1s ease .01s";
      document.querySelector("#sunglasses1").style.display = "none";
      document.querySelector("#sunglasses2").style.display = "none";
      document.querySelector("#sunglasses3").style.display = "none";
      document.querySelector("#sunglasses4").style.display = "none";
      document.querySelector("#sunglasses5").style.display = "none";
      document.querySelector("#sunglasses6").style.display = "none";
      document.querySelector("#sunglasses7").style.display = "none";
      document.querySelector("#sunglasses-h3").innerHTML = "Sunglasses &#9660;";
   }
}
// women accessories
//watch1
var wWatch1 = [
   "Images/women-acc1.jpeg",
   "Images/women-acc1-2.jpeg",
   "Images/women-acc1-3.jpeg",
   "Images/women-acc1-4.jpeg",
];
var wW1 = 0;
document.wWatch1.src = "Images/women-acc1.jpeg";
function wwatchImg() {
   document.wWatch1.src = wWatch1[wW1];
}
setInterval(function womenW() {
   if (wW1 < wWatch1.length - 1) {
      wW1++;
   } else {
      wW1 = 0;
   }
   wwatchImg();
}, 10000);
document.querySelector("#wleft-btn").addEventListener("click", leftwWatch);
function leftwWatch() {
   if (wW1 > 0) {
      wW1--;
   } else {
      wW1 = wWatch1.length - 1;
   }
   wwatchImg();
}
document.querySelector("#wright-btn").addEventListener("click", rightwWatch);
function rightwWatch() {
   if (wW1 < wWatch1.length - 1) {
      wW1++;
   } else {
      wW1 = 0;
   }
   wwatchImg();
}
document.querySelector("#wcart").addEventListener("click", cartWw);
function cartWw() {
   document.querySelector("#wcart").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#wbuy").addEventListener("click", buyWw);
function buyWw() {
   const buyWwatch = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWwatch <= 3 && buyWwatch > 0) {
      document.querySelector("#wtotal").textContent =
         "Total Price : " + "₹" + 1627 * buyWwatch + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWwatch === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 3 pieces left !!!");
   }
}
//watch2
var wWatch2 = [
   "Images/women-acc2.jpeg",
   "Images/women-acc2-2.jpeg",
   "Images/women-acc2-3.jpeg",
   "Images/women-acc2-4.jpeg",
];
var wW2 = 0;
document.wWatch2.src = "Images/women-acc2.jpeg";
function wwatchImg1() {
   document.wWatch2.src = wWatch2[wW2];
}
setInterval(function womenW1() {
   if (wW2 < wWatch2.length - 1) {
      wW2++;
   } else {
      wW2 = 0;
   }
   wwatchImg1();
}, 10000);
document.querySelector("#wleft-btn1").addEventListener("click", leftwWatch1);
function leftwWatch1() {
   if (wW2 > 0) {
      wW2--;
   } else {
      wW2 = wWatch2.length - 1;
   }
   wwatchImg1();
}
document.querySelector("#wright-btn1").addEventListener("click", rightwWatch1);
function rightwWatch1() {
   if (wW2 < wWatch2.length - 1) {
      wW2++;
   } else {
      wW2 = 0;
   }
   wwatchImg1();
}
document.querySelector("#wcart1").addEventListener("click", cartWw1);
function cartWw1() {
   document.querySelector("#wcart1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#wbuy1").addEventListener("click", buyWw1);
function buyWw1() {
   const buyWwatch = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWwatch <= 10 && buyWwatch > 0) {
      document.querySelector("#wtotal1").textContent =
         "Total Price : " + "₹" + 1025 * buyWwatch + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWwatch === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//watch3
var wWatch3 = [
   "Images/women-acc3.jpeg",
   "Images/women-acc3-2.jpeg",
   "Images/women-acc3-3.jpeg",
   "Images/women-acc3-4.jpeg",
];
var wW3 = 0;
document.wWatch3.src = "Images/women-acc3.jpeg";
function wwatchImg2() {
   document.wWatch3.src = wWatch3[wW3];
}
setInterval(function womenW2() {
   if (wW3 < wWatch3.length - 1) {
      wW3++;
   } else {
      wW3 = 0;
   }
   wwatchImg2();
}, 10000);
document.querySelector("#wleft-btn2").addEventListener("click", leftwWatch2);
function leftwWatch2() {
   if (wW3 > 0) {
      wW3--;
   } else {
      wW3 = wWatch3.length - 1;
   }
   wwatchImg2();
}
document.querySelector("#wright-btn2").addEventListener("click", rightwWatch2);
function rightwWatch2() {
   if (wW3 < wWatch3.length - 1) {
      wW3++;
   } else {
      wW3 = 0;
   }
   wwatchImg2();
}
document.querySelector("#wcart2").addEventListener("click", cartWw2);
function cartWw2() {
   document.querySelector("#wcart2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#wbuy2").addEventListener("click", buyWw2);
function buyWw2() {
   const buyWwatch = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWwatch <= 10 && buyWwatch > 0) {
      document.querySelector("#wtotal2").textContent =
         "Total Price : " + "₹" + 1995 * buyWwatch + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWwatch === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//watch4
var wWatch4 = [
   "Images/women-acc4.jpeg",
   "Images/women-acc4-3.jpeg",
   "Images/women-acc4-2.jpeg",
   "Images/women-acc4-4.jpeg",
];
var wW4 = 0;
document.wWatch4.src = "Images/women-acc4.jpeg";
function wwatchImg3() {
   document.wWatch4.src = wWatch4[wW4];
}
setInterval(function womenW3() {
   if (wW4 < wWatch4.length - 1) {
      wW4++;
   } else {
      wW4 = 0;
   }
   wwatchImg3();
}, 10000);
document.querySelector("#wleft-btn3").addEventListener("click", leftwWatch3);
function leftwWatch3() {
   if (wW4 > 0) {
      wW4--;
   } else {
      wW4 = wWatch4.length - 1;
   }
   wwatchImg3();
}
document.querySelector("#wright-btn3").addEventListener("click", rightwWatch3);
function rightwWatch3() {
   if (wW4 < wWatch4.length - 1) {
      wW4++;
   } else {
      wW4 = 0;
   }
   wwatchImg3();
}
document.querySelector("#wcart3").addEventListener("click", cartWw3);
function cartWw3() {
   document.querySelector("#wcart3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#wbuy3").addEventListener("click", buyWw3);
function buyWw3() {
   const buyWwatch = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWwatch <= 10 && buyWwatch > 0) {
      document.querySelector("#wtotal3").textContent =
         "Total Price : " + "₹" + 995 * buyWwatch + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWwatch === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//watch5
var wWatch5 = [
   "Images/women-acc5.jpeg",
   "Images/women-acc5-3.jpeg",
   "Images/women-acc5-2.jpeg",
   "Images/women-acc5-4.jpeg",
];
var wW5 = 0;
document.wWatch5.src = "Images/women-acc5.jpeg";
function wwatchImg4() {
   document.wWatch5.src = wWatch5[wW5];
}
setInterval(function womenW4() {
   if (wW5 < wWatch5.length - 1) {
      wW5++;
   } else {
      wW5 = 0;
   }
   wwatchImg4();
}, 10000);
document.querySelector("#wleft-btn4").addEventListener("click", leftwWatch4);
function leftwWatch4() {
   if (wW5 > 0) {
      wW5--;
   } else {
      wW5 = wWatch5.length - 1;
   }
   wwatchImg4();
}
document.querySelector("#wright-btn4").addEventListener("click", rightwWatch4);
function rightwWatch4() {
   if (wW5 < wWatch5.length - 1) {
      wW5++;
   } else {
      wW5 = 0;
   }
   wwatchImg4();
}
document.querySelector("#wcart4").addEventListener("click", cartWw4);
function cartWw4() {
   document.querySelector("#wcart4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#wbuy4").addEventListener("click", buyWw4);
function buyWw4() {
   const buyWwatch = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWwatch <= 10 && buyWwatch > 0) {
      document.querySelector("#wtotal4").textContent =
         "Total Price : " + "₹" + 1387 * buyWwatch + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWwatch === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//watch6
var wWatch6 = [
   "Images/women-acc6.jpeg",
   "Images/women-acc6-2.jpeg",
   "Images/women-acc6-3.jpeg",
   "Images/women-acc6-4.jpeg",
];
var wW6 = 0;
document.wWatch6.src = "Images/women-acc6.jpeg";
function wwatchImg5() {
   document.wWatch6.src = wWatch6[wW6];
}
setInterval(function womenW5() {
   if (wW6 < wWatch6.length - 1) {
      wW6++;
   } else {
      wW6 = 0;
   }
   wwatchImg5();
}, 10000);
document.querySelector("#wleft-btn5").addEventListener("click", leftwWatch5);
function leftwWatch5() {
   if (wW6 > 0) {
      wW6--;
   } else {
      wW6 = wWatch6.length - 1;
   }
   wwatchImg5();
}
document.querySelector("#wright-btn5").addEventListener("click", rightwWatch5);
function rightwWatch5() {
   if (wW6 < wWatch6.length - 1) {
      wW6++;
   } else {
      wW6 = 0;
   }
   wwatchImg5();
}
document.querySelector("#wcart5").addEventListener("click", cartWw5);
function cartWw5() {
   document.querySelector("#wcart5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#wbuy5").addEventListener("click", buyWw5);
function buyWw5() {
   const buyWwatch = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWwatch <= 10 && buyWwatch > 0) {
      document.querySelector("#wtotal5").textContent =
         "Total Price : " + "₹" + 1260 * buyWwatch + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWwatch === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//watch7
var wWatch7 = [
   "Images/women-acc8.jpeg",
   "Images/women-acc8-2.jpeg",
   "Images/women-acc8-3.jpeg",
   "Images/women-acc8-4.jpeg",
];
var wW7 = 0;
document.wWatch7.src = "Images/women-acc8.jpeg";
function wwatchImg6() {
   document.wWatch7.src = wWatch7[wW7];
}
setInterval(function womenW6() {
   if (wW7 < wWatch7.length - 1) {
      wW7++;
   } else {
      wW7 = 0;
   }
   wwatchImg6();
}, 10000);
document.querySelector("#wleft-btn6").addEventListener("click", leftwWatch6);
function leftwWatch6() {
   if (wW7 > 0) {
      wW7--;
   } else {
      wW7 = wWatch7.length - 1;
   }
   wwatchImg6();
}
document.querySelector("#wright-btn6").addEventListener("click", rightwWatch6);
function rightwWatch6() {
   if (wW7 < wWatch7.length - 1) {
      wW7++;
   } else {
      wW7 = 0;
   }
   wwatchImg6();
}
document.querySelector("#wcart6").addEventListener("click", cartWw6);
function cartWw6() {
   document.querySelector("#wcart6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#wbuy6").addEventListener("click", buyWw6);
function buyWw6() {
   const buyWwatch = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWwatch <= 2 && buyWwatch > 0) {
      document.querySelector("#wtotal6").textContent =
         "Total Price : " + "₹" + 3798 * buyWwatch + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWwatch === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 2 pieces left !!!");
   }
}
//watch8
var wWatch8 = [
   "Images/women-acc7.jpeg",
   "Images/women-acc7-2.jpeg",
   "Images/women-acc7-3.jpeg",
   "Images/women-acc7-4.jpeg",
];
var wW8 = 0;
document.wWatch8.src = "Images/women-acc7.jpeg";
function wwatchImg7() {
   document.wWatch8.src = wWatch8[wW8];
}
setInterval(function womenW6() {
   if (wW8 < wWatch8.length - 1) {
      wW8++;
   } else {
      wW8 = 0;
   }
   wwatchImg7();
}, 10000);
document.querySelector("#wleft-btn7").addEventListener("click", leftwWatch7);
function leftwWatch7() {
   if (wW8 > 0) {
      wW8--;
   } else {
      wW8 = wWatch8.length - 1;
   }
   wwatchImg7();
}
document.querySelector("#wright-btn7").addEventListener("click", rightwWatch7);
function rightwWatch7() {
   if (wW8 < wWatch8.length - 1) {
      wW8++;
   } else {
      wW8 = 0;
   }
   wwatchImg7();
}
document.querySelector("#wcart7").addEventListener("click", cartWw7);
function cartWw7() {
   document.querySelector("#wcart7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#wbuy7").addEventListener("click", buyWw7);
function buyWw7() {
   const buyWwatch = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWwatch <= 10 && buyWwatch > 0) {
      document.querySelector("#wtotal7").textContent =
         "Total Price : " + "₹" + 4947 * buyWwatch + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWwatch === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//onclick -shown women watches
document.querySelector("#wWatch-h3").addEventListener("click", clickOnWwatch);
function clickOnWwatch() {
   if (document.querySelector("#wWatch1").style.display != "block") {
      document.querySelector(".women-watches").style.display = "flex";
      document.querySelector(".women-watches").style.animation =
         "afterclick 1s ease .01s";
      document.querySelector("#wWatch1").style.display = "block";
      document.querySelector("#wWatch2").style.display = "block";
      document.querySelector("#wWatch3").style.display = "block";
      document.querySelector("#wWatch4").style.display = "block";
      document.querySelector("#wWatch5").style.display = "block";
      document.querySelector("#wWatch6").style.display = "block";
      document.querySelector("#wWatch7").style.display = "block";
      document.querySelector("#wWatch8").style.display = "block";
      document.querySelector("#wWatch-h3").innerHTML = "Watches &#9650;";
   } else {
      document.querySelector(".women-watches").style.display = "block";
      document.querySelector(".women-watches").style.animation =
         "Elseafterclick 1s ease .01s";
      document.querySelector("#wWatch1").style.display = "none";
      document.querySelector("#wWatch2").style.display = "none";
      document.querySelector("#wWatch3").style.display = "none";
      document.querySelector("#wWatch4").style.display = "none";
      document.querySelector("#wWatch5").style.display = "none";
      document.querySelector("#wWatch6").style.display = "none";
      document.querySelector("#wWatch7").style.display = "none";
      document.querySelector("#wWatch8").style.display = "none";
      document.querySelector("#wWatch-h3").innerHTML = "Watches &#9660;";
   }
}
//handbags1
var hBag = [
   "Images/women-accbag1.jpeg",
   "Images/women-accbag1-2.jpeg",
   "Images/women-accbag1-3.jpeg",
   "Images/women-accbag1-4.jpeg",
];
var hb = 0;
document.bag1.src = "Images/women-accbag1.jpeg";
function bagImg() {
   document.bag1.src = hBag[hb];
}
setInterval(function handbag() {
   if (hb < hBag.length - 1) {
      hb++;
   } else {
      hb = 0;
   }
   bagImg();
}, 10000);
document.querySelector("#bagleft-btn").addEventListener("click", leftBag);
function leftBag() {
   if (hb > 0) {
      hb--;
   } else {
      hb = hBag.length - 1;
   }
   bagImg();
}
document.querySelector("#bagright-btn").addEventListener("click", rightBag);
function rightBag() {
   if (hb < hBag.length - 1) {
      hb++;
   } else {
      hb = 0;
   }
   bagImg();
}
document.querySelector("#bagcart").addEventListener("click", cartBag);
function cartBag() {
   document.querySelector("#bagcart").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#bagbuy").addEventListener("click", buyBag);
function buyBag() {
   const buyBag = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBag <= 10 && buyBag > 0) {
      document.querySelector("#bagtotal").textContent =
         "Total Price : " + "₹" + 699 * buyBag + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyBag === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//handbags2
var hBag1 = [
   "Images/women-accbag2.jpeg",
   "Images/women-accbag2-2.jpeg",
   "Images/women-accbag2-3.jpeg",
   "Images/women-accbag2-4.jpeg",
];
var hb1 = 0;
document.bag2.src = "Images/women-accbag2.jpeg";
function bagImg1() {
   document.bag2.src = hBag1[hb1];
}
setInterval(function handbag1() {
   if (hb1 < hBag1.length - 1) {
      hb1++;
   } else {
      hb1 = 0;
   }
   bagImg1();
}, 10000);
document.querySelector("#bagleft-btn1").addEventListener("click", leftBag1);
function leftBag1() {
   if (hb1 > 0) {
      hb1--;
   } else {
      hb1 = hBag1.length - 1;
   }
   bagImg1();
}
document.querySelector("#bagright-btn1").addEventListener("click", rightBag1);
function rightBag1() {
   if (hb1 < hBag1.length - 1) {
      hb1++;
   } else {
      hb1 = 0;
   }
   bagImg1();
}
document.querySelector("#bagcart1").addEventListener("click", cartBag1);
function cartBag1() {
   document.querySelector("#bagcart1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#bagbuy1").addEventListener("click", buyBag1);
function buyBag1() {
   const buyBag = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBag <= 3 && buyBag > 0) {
      document.querySelector("#bagtotal1").textContent =
         "Total Price : " + "₹" + 1299 * buyBag + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyBag === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 3 pieces left !!!");
   }
}
//handbags3
var hBag2 = [
   "Images/women-accbag3.jpeg",
   "Images/women-accbag3-2.jpeg",
   "Images/women-accbag3-3.jpeg",
   "Images/women-accbag3-4.jpeg",
];
var hb2 = 0;
document.bag3.src = "Images/women-accbag3.jpeg";
function bagImg2() {
   document.bag3.src = hBag2[hb2];
}
setInterval(function handbag2() {
   if (hb2 < hBag2.length - 1) {
      hb2++;
   } else {
      hb2 = 0;
   }
   bagImg2();
}, 10000);
document.querySelector("#bagleft-btn2").addEventListener("click", leftBag2);
function leftBag2() {
   if (hb2 > 0) {
      hb2--;
   } else {
      hb2 = hBag2.length - 1;
   }
   bagImg2();
}
document.querySelector("#bagright-btn2").addEventListener("click", rightBag2);
function rightBag2() {
   if (hb2 < hBag2.length - 1) {
      hb2++;
   } else {
      hb2 = 0;
   }
   bagImg2();
}
document.querySelector("#bagcart2").addEventListener("click", cartBag2);
function cartBag2() {
   document.querySelector("#bagcart2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#bagbuy2").addEventListener("click", buyBag2);
function buyBag2() {
   const buyBag = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBag <= 9 && buyBag > 0) {
      document.querySelector("#bagtotal2").textContent =
         "Total Price : " + "₹" + 949 * buyBag + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyBag === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 9 pieces left !!!");
   }
}
//handbags4
var hBag3 = [
   "Images/women-accbag4.jpeg",
   "Images/women-accbag4-2.jpeg",
   "Images/women-accbag4-3.jpeg",
   "Images/women-accbag4-4.jpeg",
];
var hb3 = 0;
document.bag4.src = "Images/women-accbag4.jpeg";
function bagImg3() {
   document.bag4.src = hBag3[hb3];
}
setInterval(function handbag3() {
   if (hb3 < hBag3.length - 1) {
      hb3++;
   } else {
      hb3 = 0;
   }
   bagImg3();
}, 10000);
document.querySelector("#bagleft-btn3").addEventListener("click", leftBag3);
function leftBag3() {
   if (hb3 > 0) {
      hb3--;
   } else {
      hb3 = hBag3.length - 1;
   }
   bagImg3();
}
document.querySelector("#bagright-btn3").addEventListener("click", rightBag3);
function rightBag3() {
   if (hb3 < hBag3.length - 1) {
      hb3++;
   } else {
      hb3 = 0;
   }
   bagImg3();
}
document.querySelector("#bagcart3").addEventListener("click", cartBag3);
function cartBag3() {
   document.querySelector("#bagcart3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#bagbuy3").addEventListener("click", buyBag3);
function buyBag3() {
   const buyBag = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBag <= 10 && buyBag > 0) {
      document.querySelector("#bagtotal3").textContent =
         "Total Price : " + "₹" + 445 * buyBag + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyBag === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//handbags5
var hBag4 = [
   "Images/women-accbag5.jpeg",
   "Images/women-accbag5-2.jpeg",
   "Images/women-accbag5-3.jpeg",
   "Images/women-accbag5-4.jpeg",
];
var hb4 = 0;
document.bag5.src = "Images/women-accbag5.jpeg";
function bagImg4() {
   document.bag5.src = hBag4[hb4];
}
setInterval(function handbag4() {
   if (hb4 < hBag4.length - 1) {
      hb4++;
   } else {
      hb4 = 0;
   }
   bagImg4();
}, 10000);
document.querySelector("#bagleft-btn4").addEventListener("click", leftBag4);
function leftBag4() {
   if (hb4 > 0) {
      hb4--;
   } else {
      hb4 = hBag4.length - 1;
   }
   bagImg4();
}
document.querySelector("#bagright-btn4").addEventListener("click", rightBag4);
function rightBag4() {
   if (hb4 < hBag4.length - 1) {
      hb4++;
   } else {
      hb4 = 0;
   }
   bagImg4();
}
document.querySelector("#bagcart4").addEventListener("click", cartBag4);
function cartBag4() {
   document.querySelector("#bagcart4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#bagbuy4").addEventListener("click", buyBag4);
function buyBag4() {
   const buyBag = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBag <= 10 && buyBag > 0) {
      document.querySelector("#bagtotal4").textContent =
         "Total Price : " + "₹" + 565 * buyBag + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyBag === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//handbags6
var hBag5 = [
   "Images/women-accbag6.jpeg",
   "Images/women-accbag6-2.jpeg",
   "Images/women-accbag6-3.jpeg",
   "Images/women-accbag6-4.jpeg",
];
var hb5 = 0;
document.bag6.src = "Images/women-accbag6.jpeg";
function bagImg5() {
   document.bag6.src = hBag5[hb5];
}
setInterval(function handbag5() {
   if (hb5 < hBag5.length - 1) {
      hb5++;
   } else {
      hb5 = 0;
   }
   bagImg5();
}, 10000);
document.querySelector("#bagleft-btn5").addEventListener("click", leftBag5);
function leftBag5() {
   if (hb5 > 0) {
      hb5--;
   } else {
      hb5 = hBag5.length - 1;
   }
   bagImg5();
}
document.querySelector("#bagright-btn5").addEventListener("click", rightBag5);
function rightBag5() {
   if (hb5 < hBag5.length - 1) {
      hb5++;
   } else {
      hb5 = 0;
   }
   bagImg5();
}
document.querySelector("#bagcart5").addEventListener("click", cartBag5);
function cartBag5() {
   document.querySelector("#bagcart5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#bagbuy5").addEventListener("click", buyBag5);
function buyBag5() {
   const buyBag = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBag <= 10 && buyBag > 0) {
      document.querySelector("#bagtotal5").textContent =
         "Total Price : " + "₹" + 799 * buyBag + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyBag === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//handbags7
var hBag6 = [
   "Images/women-accbag7.jpeg",
   "Images/women-accbag7-2.jpeg",
   "Images/women-accbag7-3.jpeg",
   "Images/women-accbag7-4.jpeg",
];
var hb6 = 0;
document.bag7.src = "Images/women-accbag7.jpeg";
function bagImg6() {
   document.bag7.src = hBag6[hb6];
}
setInterval(function handbag6() {
   if (hb6 < hBag6.length - 1) {
      hb6++;
   } else {
      hb6 = 0;
   }
   bagImg6();
}, 10000);
document.querySelector("#bagleft-btn6").addEventListener("click", leftBag6);
function leftBag6() {
   if (hb6 > 0) {
      hb6--;
   } else {
      hb6 = hBag6.length - 1;
   }
   bagImg6();
}
document.querySelector("#bagright-btn6").addEventListener("click", rightBag6);
function rightBag6() {
   if (hb6 < hBag6.length - 1) {
      hb6++;
   } else {
      hb6 = 0;
   }
   bagImg6();
}
document.querySelector("#bagcart6").addEventListener("click", cartBag6);
function cartBag6() {
   document.querySelector("#bagcart6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#bagbuy6").addEventListener("click", buyBag6);
function buyBag6() {
   const buyBag = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyBag <= 10 && buyBag > 0) {
      document.querySelector("#bagtotal6").textContent =
         "Total Price : " + "₹" + 279 * buyBag + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyBag === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//onclick -shown women handbags
document.querySelector("#bag-h3").addEventListener("click", clickOnWbag);
function clickOnWbag() {
   if (document.querySelector("#bag1").style.display != "block") {
      document.querySelector(".women-bag").style.display = "flex";
      document.querySelector(".women-bag").style.animation =
         "afterclick 1s ease .01s";
      document.querySelector("#bag1").style.display = "block";
      document.querySelector("#bag2").style.display = "block";
      document.querySelector("#bag3").style.display = "block";
      document.querySelector("#bag4").style.display = "block";
      document.querySelector("#bag5").style.display = "block";
      document.querySelector("#bag6").style.display = "block";
      document.querySelector("#bag7").style.display = "block";
      document.querySelector("#bag-h3").innerHTML =
         "Handbags & Shoulder Bags &#9650;";
   } else {
      document.querySelector(".women-bag").style.display = "block";
      document.querySelector(".women-bag").style.animation =
         "Elseafterclick 1s ease .01s";
      document.querySelector("#bag1").style.display = "none";
      document.querySelector("#bag2").style.display = "none";
      document.querySelector("#bag3").style.display = "none";
      document.querySelector("#bag4").style.display = "none";
      document.querySelector("#bag5").style.display = "none";
      document.querySelector("#bag6").style.display = "none";
      document.querySelector("#bag7").style.display = "none";
      document.querySelector("#bag-h3").innerHTML =
         "Handbags & Shoulder Bags &#9660;";
   }
}
//women wallet1
var clutches = [
   "Images/women-accpar1.jpeg",
   "Images/women-accpar1-2.jpeg",
   "Images/women-accpar1-3.jpeg",
   "Images/women-accpar1-4.jpeg",
];
var cl = 0;
document.wal1.src = "Images/women-accpar1.jpeg";
function cluImg() {
   document.wal1.src = clutches[cl];
}
setInterval(function clutch() {
   if (cl < clutches.length - 1) {
      cl++;
   } else {
      cl = 0;
   }
   cluImg();
}, 10000);
document.querySelector("#walleft-btn").addEventListener("click", leftClu);
function leftClu() {
   if (cl > 0) {
      cl--;
   } else {
      cl = clutches.length - 1;
   }
   cluImg();
}
document.querySelector("#walright-btn").addEventListener("click", rightClu);
function rightClu() {
   if (cl < clutches.length - 1) {
      cl++;
   } else {
      cl = 0;
   }
   cluImg();
}
document.querySelector("#walcart").addEventListener("click", cartClutches);
function cartClutches() {
   document.querySelector("#walcart").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#walbuy").addEventListener("click", buyClutches);
function buyClutches() {
   const buyClutches = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyClutches <= 10 && buyClutches > 0) {
      document.querySelector("#waltotal").textContent =
         "Total Price : " + "₹" + 359 * buyClutches + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyClutches === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//women wallet2
var clutches1 = [
   "Images/women-accpar2.jpeg",
   "Images/women-accpar2-2.jpeg",
   "Images/women-accpar2-3.jpeg",
   "Images/women-accpar2-4.jpeg",
];
var cl1 = 0;
document.wal2.src = "Images/women-accpar2.jpeg";
function cluImg1() {
   document.wal2.src = clutches1[cl1];
}
setInterval(function clutch1() {
   if (cl1 < clutches1.length - 1) {
      cl1++;
   } else {
      cl1 = 0;
   }
   cluImg1();
}, 10000);
document.querySelector("#walleft-btn1").addEventListener("click", leftClu1);
function leftClu1() {
   if (cl1 > 0) {
      cl1--;
   } else {
      cl1 = clutches1.length - 1;
   }
   cluImg1();
}
document.querySelector("#walright-btn1").addEventListener("click", rightClu1);
function rightClu1() {
   if (cl1 < clutches1.length - 1) {
      cl1++;
   } else {
      cl1 = 0;
   }
   cluImg1();
}
document.querySelector("#walcart1").addEventListener("click", cartClutches1);
function cartClutches1() {
   document.querySelector("#walcart1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#walbuy1").addEventListener("click", buyClutches1);
function buyClutches1() {
   const buyClutches = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyClutches <= 4 && buyClutches > 0) {
      document.querySelector("#waltotal1").textContent =
         "Total Price : " + "₹" + 322 * buyClutches + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyClutches === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 4 pieces left !!!");
   }
}
//women wallet3
var clutches2 = [
   "Images/women-accpar3.jpeg",
   "Images/women-accpar3-2.jpeg",
   "Images/women-accpar3-3.jpeg",
   "Images/women-accpar3-4.jpeg",
];
var cl2 = 0;
document.wal3.src = "Images/women-accpar3.jpeg";
function cluImg2() {
   document.wal3.src = clutches2[cl2];
}
setInterval(function clutch2() {
   if (cl2 < clutches2.length - 1) {
      cl2++;
   } else {
      cl2 = 0;
   }
   cluImg2();
}, 10000);
document.querySelector("#walleft-btn2").addEventListener("click", leftClu2);
function leftClu2() {
   if (cl2 > 0) {
      cl2--;
   } else {
      cl2 = clutches2.length - 1;
   }
   cluImg2();
}
document.querySelector("#walright-btn2").addEventListener("click", rightClu2);
function rightClu2() {
   if (cl2 < clutches2.length - 1) {
      cl2++;
   } else {
      cl2 = 0;
   }
   cluImg2();
}
document.querySelector("#walcart2").addEventListener("click", cartClutches2);
function cartClutches2() {
   document.querySelector("#walcart2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#walbuy2").addEventListener("click", buyClutches2);
function buyClutches2() {
   const buyClutches = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyClutches <= 7 && buyClutches > 0) {
      document.querySelector("#waltotal2").textContent =
         "Total Price : " + "₹" + 1549 * buyClutches + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyClutches === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 4 pieces left !!!");
   }
}
//women wallet4
var clutches3 = [
   "Images/women-accpar4.jpeg",
   "Images/women-accpar4-2.jpeg",
   "Images/women-accpar4-3.jpeg",
   "Images/women-accpar4-4.jpeg",
];
var cl3 = 0;
document.wal4.src = "Images/women-accpar4.jpeg";
function cluImg3() {
   document.wal4.src = clutches3[cl3];
}
setInterval(function clutch3() {
   if (cl3 < clutches3.length - 1) {
      cl3++;
   } else {
      cl3 = 0;
   }
   cluImg3();
}, 10000);
document.querySelector("#walleft-btn3").addEventListener("click", leftClu3);
function leftClu3() {
   if (cl3 > 0) {
      cl3--;
   } else {
      cl3 = clutches3.length - 1;
   }
   cluImg3();
}
document.querySelector("#walright-btn3").addEventListener("click", rightClu3);
function rightClu3() {
   if (cl3 < clutches3.length - 1) {
      cl3++;
   } else {
      cl3 = 0;
   }
   cluImg3();
}
document.querySelector("#walcart3").addEventListener("click", cartClutches3);
function cartClutches3() {
   document.querySelector("#walcart3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#walbuy3").addEventListener("click", buyClutches3);
function buyClutches3() {
   const buyClutches = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyClutches <= 10 && buyClutches > 0) {
      document.querySelector("#waltotal3").textContent =
         "Total Price : " + "₹" + 389 * buyClutches + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyClutches === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//women wallet5
var clutches4 = [
   "Images/women-accpar5.jpeg",
   "Images/women-accpar5-2.jpeg",
   "Images/women-accpar5-3.jpeg",
   "Images/women-accpar5-4.jpeg",
];
var cl4 = 0;
document.wal5.src = "Images/women-accpar5.jpeg";
function cluImg4() {
   document.wal5.src = clutches4[cl4];
}
setInterval(function clutch4() {
   if (cl4 < clutches4.length - 1) {
      cl4++;
   } else {
      cl4 = 0;
   }
   cluImg4();
}, 10000);
document.querySelector("#walleft-btn4").addEventListener("click", leftClu4);
function leftClu4() {
   if (cl4 > 0) {
      cl4--;
   } else {
      cl4 = clutches4.length - 1;
   }
   cluImg4();
}
document.querySelector("#walright-btn4").addEventListener("click", rightClu4);
function rightClu4() {
   if (cl4 < clutches4.length - 1) {
      cl4++;
   } else {
      cl4 = 0;
   }
   cluImg4();
}
document.querySelector("#walcart4").addEventListener("click", cartClutches4);
function cartClutches4() {
   document.querySelector("#walcart4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#walbuy4").addEventListener("click", buyClutches4);
function buyClutches4() {
   const buyClutches = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyClutches <= 10 && buyClutches > 0) {
      document.querySelector("#waltotal4").textContent =
         "Total Price : " + "₹" + 579 * buyClutches + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyClutches === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//women wallet6
var clutches5 = [
   "Images/women-accpar6.jpeg",
   "Images/women-accpar6-2.jpeg",
   "Images/women-accpar6-3.jpeg",
   "Images/women-accpar6-4.jpeg",
];
var cl5 = 0;
document.wal6.src = "Images/women-accpar6.jpeg";
function cluImg5() {
   document.wal6.src = clutches5[cl5];
}
setInterval(function clutch5() {
   if (cl5 < clutches5.length - 1) {
      cl5++;
   } else {
      cl5 = 0;
   }
   cluImg5();
}, 10000);
document.querySelector("#walleft-btn5").addEventListener("click", leftClu5);
function leftClu5() {
   if (cl5 > 0) {
      cl5--;
   } else {
      cl5 = clutches5.length - 1;
   }
   cluImg5();
}
document.querySelector("#walright-btn5").addEventListener("click", rightClu5);
function rightClu5() {
   if (cl5 < clutches5.length - 1) {
      cl5++;
   } else {
      cl5 = 0;
   }
   cluImg5();
}
document.querySelector("#walcart5").addEventListener("click", cartClutches5);
function cartClutches5() {
   document.querySelector("#walcart5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#walbuy5").addEventListener("click", buyClutches5);
function buyClutches5() {
   const buyClutches = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyClutches <= 1 && buyClutches > 0) {
      document.querySelector("#waltotal5").textContent =
         "Total Price : " + "₹" + 779 * buyClutches + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyClutches === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 1 pieces left !!!");
   }
}
//women wallet7
var clutches6 = [
   "Images/women-accpar7.jpeg",
   "Images/women-accpar7-2.jpeg",
   "Images/women-accpar7-3.jpeg",
   "Images/women-accpar7-4.jpeg",
];
var cl6 = 0;
document.wal7.src = "Images/women-accpar7.jpeg";
function cluImg6() {
   document.wal7.src = clutches6[cl6];
}
setInterval(function clutch6() {
   if (cl6 < clutches6.length - 1) {
      cl6++;
   } else {
      cl6 = 0;
   }
   cluImg6();
}, 10000);
document.querySelector("#walleft-btn6").addEventListener("click", leftClu6);
function leftClu6() {
   if (cl6 > 0) {
      cl6--;
   } else {
      cl6 = clutches6.length - 1;
   }
   cluImg6();
}
document.querySelector("#walright-btn6").addEventListener("click", rightClu6);
function rightClu6() {
   if (cl6 < clutches6.length - 1) {
      cl6++;
   } else {
      cl6 = 0;
   }
   cluImg6();
}
document.querySelector("#walcart6").addEventListener("click", cartClutches6);
function cartClutches6() {
   document.querySelector("#walcart6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#walbuy6").addEventListener("click", buyClutches6);
function buyClutches6() {
   const buyClutches = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyClutches <= 10 && buyClutches > 0) {
      document.querySelector("#waltotal6").textContent =
         "Total Price : " + "₹" + 325 * buyClutches + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyClutches === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//onclick -shown women clutches
document
   .querySelector("#wwallet-h3")
   .addEventListener("click", clickOnWclutches);
function clickOnWclutches() {
   if (document.querySelector("#wwallet1").style.display != "block") {
      document.querySelector(".women-wallet").style.display = "flex";
      document.querySelector(".women-wallet").style.animation =
         "afterclick 1s ease .01s";
      document.querySelector("#wwallet1").style.display = "block";
      document.querySelector("#wwallet2").style.display = "block";
      document.querySelector("#wwallet3").style.display = "block";
      document.querySelector("#wwallet4").style.display = "block";
      document.querySelector("#wwallet5").style.display = "block";
      document.querySelector("#wwallet6").style.display = "block";
      document.querySelector("#wwallet7").style.display = "block";
      document.querySelector("#wwallet-h3").innerHTML = "Clutches &#9650;";
   } else {
      document.querySelector(".women-wallet").style.display = "block";
      document.querySelector(".women-wallet").style.animation =
         "Elseafterclick 1s ease .01s";
      document.querySelector("#wwallet1").style.display = "none";
      document.querySelector("#wwallet2").style.display = "none";
      document.querySelector("#wwallet3").style.display = "none";
      document.querySelector("#wwallet4").style.display = "none";
      document.querySelector("#wwallet5").style.display = "none";
      document.querySelector("#wwallet6").style.display = "none";
      document.querySelector("#wwallet7").style.display = "none";
      document.querySelector("#wwallet-h3").innerHTML = "Clutches &#9660;";
   }
}
//women sunglasses1
var wSunglasses = [
   "Images/women-accsg1.jpeg",
   "Images/women-accsg1-2.jpeg",
   "Images/women-accsg1-3.jpeg",
   "Images/women-accsg1-4.jpeg",
];
var wsg = 0;
document.wsunglasses1.src = "Images/women-accsg1.jpeg";
function wSung() {
   document.wsunglasses1.src = wSunglasses[wsg];
}
setInterval(function womenSg() {
   if (wsg < wSunglasses.length - 1) {
      wsg++;
   } else {
      wsg = 0;
   }
   wSung();
}, 10000);
document.querySelector("#wsgleft-btn").addEventListener("click", leftWsg);
function leftWsg() {
   if (wsg > 0) {
      wsg--;
   } else {
      wsg = wSunglasses.length - 1;
   }
   wSung();
}
document.querySelector("#wsgright-btn").addEventListener("click", rightWsg);
function rightWsg() {
   if (wsg < wSunglasses.length - 1) {
      wsg++;
   } else {
      wsg = 0;
   }
   wSung();
}
document.querySelector("#wsgcart").addEventListener("click", cartWsg);
function cartWsg() {
   document.querySelector("#wsgcart").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#wsgbuy").addEventListener("click", buyWomenSg);
function buyWomenSg() {
   const buyWsg = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWsg <= 10 && buyWsg > 0) {
      document.querySelector("#wsgtotal").textContent =
         "Total Price : " + "₹" + 301 * buyWsg + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWsg === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//women sunglasses2
var wSunglasses1 = [
   "Images/women-accsg2.jpeg",
   "Images/women-accsg2-2.jpeg",
   "Images/women-accsg2-3.jpeg",
   "Images/women-accsg2-4.jpeg",
];
var wsg1 = 0;
document.wsunglasses2.src = "Images/women-accsg2.jpeg";
function wSung1() {
   document.wsunglasses2.src = wSunglasses1[wsg1];
}
setInterval(function womenSg1() {
   if (wsg1 < wSunglasses1.length - 1) {
      wsg1++;
   } else {
      wsg1 = 0;
   }
   wSung1();
}, 10000);
document.querySelector("#wsgleft-btn1").addEventListener("click", leftWsg1);
function leftWsg1() {
   if (wsg1 > 0) {
      wsg1--;
   } else {
      wsg1 = wSunglasses1.length - 1;
   }
   wSung1();
}
document.querySelector("#wsgright-btn1").addEventListener("click", rightWsg1);
function rightWsg1() {
   if (wsg1 < wSunglasses1.length - 1) {
      wsg1++;
   } else {
      wsg1 = 0;
   }
   wSung1();
}
document.querySelector("#wsgcart1").addEventListener("click", cartWsg1);
function cartWsg1() {
   document.querySelector("#wsgcart1").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#wsgbuy1").addEventListener("click", buyWomenSg1);
function buyWomenSg1() {
   const buyWsg = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWsg <= 7 && buyWsg > 0) {
      document.querySelector("#wsgtotal1").textContent =
         "Total Price : " + "₹" + 292 * buyWsg + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWsg === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 7 pieces left !!!");
   }
}
//women sunglasses3
var wSunglasses2 = [
   "Images/women-accsg3.jpeg",
   "Images/women-accsg3-2.jpeg",
   "Images/women-accsg3-3.jpeg",
   "Images/women-accsg3-4.jpeg",
];
var wsg2 = 0;
document.wsunglasses3.src = "Images/women-accsg3.jpeg";
function wSung2() {
   document.wsunglasses3.src = wSunglasses2[wsg2];
}
setInterval(function womenSg2() {
   if (wsg2 < wSunglasses2.length - 1) {
      wsg2++;
   } else {
      wsg2 = 0;
   }
   wSung2();
}, 10000);
document.querySelector("#wsgleft-btn2").addEventListener("click", leftWsg2);
function leftWsg2() {
   if (wsg2 > 0) {
      wsg2--;
   } else {
      wsg2 = wSunglasses2.length - 1;
   }
   wSung2();
}
document.querySelector("#wsgright-btn2").addEventListener("click", rightWsg2);
function rightWsg2() {
   if (wsg2 < wSunglasses2.length - 1) {
      wsg2++;
   } else {
      wsg2 = 0;
   }
   wSung2();
}
document.querySelector("#wsgcart2").addEventListener("click", cartWsg2);
function cartWsg2() {
   document.querySelector("#wsgcart2").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#wsgbuy2").addEventListener("click", buyWomenSg2);
function buyWomenSg2() {
   const buyWsg = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWsg <= 4 && buyWsg > 0) {
      document.querySelector("#wsgtotal2").textContent =
         "Total Price : " + "₹" + 2299 * buyWsg + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWsg === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 4 pieces left !!!");
   }
}
//women sunglasses4
var wSunglasses3 = [
   "Images/women-accsg4.jpeg",
   "Images/women-accsg4-2.jpeg",
   "Images/women-accsg4-3.jpeg",
   "Images/women-accsg4-4.jpeg",
];
var wsg3 = 0;
document.wsunglasses4.src = "Images/women-accsg4.jpeg";
function wSung3() {
   document.wsunglasses4.src = wSunglasses3[wsg3];
}
setInterval(function womenSg3() {
   if (wsg3 < wSunglasses3.length - 1) {
      wsg3++;
   } else {
      wsg3 = 0;
   }
   wSung3();
}, 10000);
document.querySelector("#wsgleft-btn3").addEventListener("click", leftWsg3);
function leftWsg3() {
   if (wsg3 > 0) {
      wsg3--;
   } else {
      wsg3 = wSunglasses3.length - 1;
   }
   wSung3();
}
document.querySelector("#wsgright-btn3").addEventListener("click", rightWsg3);
function rightWsg3() {
   if (wsg3 < wSunglasses3.length - 1) {
      wsg3++;
   } else {
      wsg3 = 0;
   }
   wSung3();
}
document.querySelector("#wsgcart3").addEventListener("click", cartWsg3);
function cartWsg3() {
   document.querySelector("#wsgcart3").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#wsgbuy3").addEventListener("click", buyWomenSg3);
function buyWomenSg3() {
   const buyWsg = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWsg <= 2 && buyWsg > 0) {
      document.querySelector("#wsgtotal3").textContent =
         "Total Price : " + "₹" + 1800 * buyWsg + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWsg === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 2 pieces left !!!");
   }
}
//women sunglasses5
var wSunglasses4 = [
   "Images/women-accsg5.jpeg",
   "Images/women-accsg5-2.jpeg",
   "Images/women-accsg5-3.jpeg",
   "Images/women-accsg5-4.jpeg",
];
var wsg4 = 0;
document.wsunglasses5.src = "Images/women-accsg5.jpeg";
function wSung4() {
   document.wsunglasses5.src = wSunglasses4[wsg4];
}
setInterval(function womenSg4() {
   if (wsg4 < wSunglasses4.length - 1) {
      wsg4++;
   } else {
      wsg4 = 0;
   }
   wSung4();
}, 10000);
document.querySelector("#wsgleft-btn4").addEventListener("click", leftWsg4);
function leftWsg4() {
   if (wsg4 > 0) {
      wsg4--;
   } else {
      wsg4 = wSunglasses4.length - 1;
   }
   wSung4();
}
document.querySelector("#wsgright-btn4").addEventListener("click", rightWsg4);
function rightWsg4() {
   if (wsg4 < wSunglasses4.length - 1) {
      wsg4++;
   } else {
      wsg4 = 0;
   }
   wSung4();
}
document.querySelector("#wsgcart4").addEventListener("click", cartWsg4);
function cartWsg4() {
   document.querySelector("#wsgcart4").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#wsgbuy4").addEventListener("click", buyWomenSg4);
function buyWomenSg4() {
   const buyWsg = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWsg <= 10 && buyWsg > 0) {
      document.querySelector("#wsgtotal4").textContent =
         "Total Price : " + "₹" + 356 * buyWsg + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWsg === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//women sunglasses6
var wSunglasses5 = [
   "Images/women-accsg6.jpeg",
   "Images/women-accsg6-2.jpeg",
   "Images/women-accsg6-3.jpeg",
   "Images/women-accsg6-4.jpeg",
];
var wsg5 = 0;
document.wsunglasses6.src = "Images/women-accsg6.jpeg";
function wSung5() {
   document.wsunglasses6.src = wSunglasses5[wsg5];
}
setInterval(function womenSg5() {
   if (wsg5 < wSunglasses5.length - 1) {
      wsg5++;
   } else {
      wsg5 = 0;
   }
   wSung5();
}, 10000);
document.querySelector("#wsgleft-btn5").addEventListener("click", leftWsg5);
function leftWsg5() {
   if (wsg5 > 0) {
      wsg5--;
   } else {
      wsg5 = wSunglasses5.length - 1;
   }
   wSung5();
}
document.querySelector("#wsgright-btn5").addEventListener("click", rightWsg5);
function rightWsg5() {
   if (wsg5 < wSunglasses5.length - 1) {
      wsg5++;
   } else {
      wsg5 = 0;
   }
   wSung5();
}
document.querySelector("#wsgcart5").addEventListener("click", cartWsg5);
function cartWsg5() {
   document.querySelector("#wsgcart5").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#wsgbuy5").addEventListener("click", buyWomenSg5);
function buyWomenSg5() {
   const buyWsg = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWsg <= 10 && buyWsg > 0) {
      document.querySelector("#wsgtotal5").textContent =
         "Total Price : " + "₹" + 375 * buyWsg + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWsg === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//women sunglasses7
var wSunglasses6 = [
   "Images/women-accsg7.jpeg",
   "Images/women-accsg7-2.jpeg",
   "Images/women-accsg7-3.jpeg",
   "Images/women-accsg7-4.jpeg",
];
var wsg6 = 0;
document.wsunglasses7.src = "Images/women-accsg7.jpeg";
function wSung6() {
   document.wsunglasses7.src = wSunglasses6[wsg6];
}
setInterval(function womenSg6() {
   if (wsg6 < wSunglasses6.length - 1) {
      wsg6++;
   } else {
      wsg6 = 0;
   }
   wSung6();
}, 10000);
document.querySelector("#wsgleft-btn6").addEventListener("click", leftWsg6);
function leftWsg6() {
   if (wsg6 > 0) {
      wsg6--;
   } else {
      wsg6 = wSunglasses6.length - 1;
   }
   wSung6();
}
document.querySelector("#wsgright-btn6").addEventListener("click", rightWsg6);
function rightWsg6() {
   if (wsg6 < wSunglasses6.length - 1) {
      wsg6++;
   } else {
      wsg6 = 0;
   }
   wSung6();
}
document.querySelector("#wsgcart6").addEventListener("click", cartWsg6);
function cartWsg6() {
   document.querySelector("#wsgcart6").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#wsgbuy6").addEventListener("click", buyWomenSg6);
function buyWomenSg6() {
   const buyWsg = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWsg <= 9 && buyWsg > 0) {
      document.querySelector("#wsgtotal6").textContent =
         "Total Price : " + "₹" + 449 * buyWsg + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWsg === 0) {
      alert("Enter valid number");
   } else {
      alert("Only 9 pieces left !!!");
   }
}
//women sunglasses8
var wSunglasses7 = [
   "Images/women-accsg8.jpeg",
   "Images/women-accsg8-2.jpeg",
   "Images/women-accsg8-3.jpeg",
   "Images/women-accsg8-4.jpeg",
];
var wsg7 = 0;
document.wsunglasses8.src = "Images/women-accsg8.jpeg";
function wSung7() {
   document.wsunglasses8.src = wSunglasses7[wsg7];
}
setInterval(function womenSg7() {
   if (wsg7 < wSunglasses7.length - 1) {
      wsg7++;
   } else {
      wsg7 = 0;
   }
   wSung7();
}, 10000);
document.querySelector("#wsgleft-btn7").addEventListener("click", leftWsg7);
function leftWsg7() {
   if (wsg7 > 0) {
      wsg7--;
   } else {
      wsg7 = wSunglasses7.length - 1;
   }
   wSung7();
}
document.querySelector("#wsgright-btn7").addEventListener("click", rightWsg7);
function rightWsg7() {
   if (wsg7 < wSunglasses7.length - 1) {
      wsg7++;
   } else {
      wsg7 = 0;
   }
   wSung7();
}
document.querySelector("#wsgcart7").addEventListener("click", cartWsg7);
function cartWsg7() {
   document.querySelector("#wsgcart7").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#wsgbuy7").addEventListener("click", buyWomenSg7);
function buyWomenSg7() {
   const buyWsg = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWsg <= 10 && buyWsg > 0) {
      document.querySelector("#wsgtotal7").textContent =
         "Total Price : " + "₹" + 664 * buyWsg + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWsg === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//women sunglasses9
var wSunglasses8 = [
   "Images/women-accsg9.jpeg",
   "Images/women-accsg9-2.jpeg",
   "Images/women-accsg9-3.jpeg",
   "Images/women-accsg9-4.jpeg",
];
var wsg8 = 0;
document.wsunglasses9.src = "Images/women-accsg9.jpeg";
function wSung8() {
   document.wsunglasses9.src = wSunglasses8[wsg8];
}
setInterval(function womenSg8() {
   if (wsg8 < wSunglasses8.length - 1) {
      wsg8++;
   } else {
      wsg8 = 0;
   }
   wSung8();
}, 10000);
document.querySelector("#wsgleft-btn8").addEventListener("click", leftWsg8);
function leftWsg8() {
   if (wsg8 > 0) {
      wsg8--;
   } else {
      wsg8 = wSunglasses8.length - 1;
   }
   wSung8();
}
document.querySelector("#wsgright-btn8").addEventListener("click", rightWsg8);
function rightWsg8() {
   if (wsg8 < wSunglasses8.length - 1) {
      wsg8++;
   } else {
      wsg8 = 0;
   }
   wSung8();
}
document.querySelector("#wsgcart8").addEventListener("click", cartWsg8);
function cartWsg8() {
   document.querySelector("#wsgcart8").innerHTML = "&#128722; Go to cart";
   alert("You're item has been added to cart!!!");
}
document.querySelector("#wsgbuy8").addEventListener("click", buyWomenSg8);
function buyWomenSg8() {
   const buyWsg = parseInt(prompt("How much pieces do you want to buy ?"));
   if (buyWsg <= 10 && buyWsg > 0) {
      document.querySelector("#wsgtotal8").textContent =
         "Total Price : " + "₹" + 238 * buyWsg + "  only";
      alert("Thank ♥ you for Your Order");
   } else if (buyWsg === 0) {
      alert("Enter valid number");
   } else {
      alert("You can buy only 10 item at a time !!!");
   }
}
//onclick -shown women sunglassses
document
   .querySelector("#wsunglasses-h3")
   .addEventListener("click", clickOnWsunglasses);
function clickOnWsunglasses() {
   if (document.querySelector("#wsunglasses1").style.display != "block") {
      document.querySelector(".women-sunglasses").style.display = "flex";
      document.querySelector(".women-sunglasses").style.animation =
         "afterclick 1s ease .01s";
      document.querySelector("#wsunglasses1").style.display = "block";
      document.querySelector("#wsunglasses2").style.display = "block";
      document.querySelector("#wsunglasses3").style.display = "block";
      document.querySelector("#wsunglasses4").style.display = "block";
      document.querySelector("#wsunglasses5").style.display = "block";
      document.querySelector("#wsunglasses6").style.display = "block";
      document.querySelector("#wsunglasses7").style.display = "block";
      document.querySelector("#wsunglasses8").style.display = "block";
      document.querySelector("#wsunglasses9").style.display = "block";
      document.querySelector("#wsunglasses-h3").innerHTML =
         "Sunglasses &#9650;";
   } else {
      document.querySelector(".women-sunglasses").style.display = "block";
      document.querySelector(".women-sunglasses").style.animation =
         "Elseafterclick 1s ease .01s";
      document.querySelector("#wsunglasses1").style.display = "none";
      document.querySelector("#wsunglasses2").style.display = "none";
      document.querySelector("#wsunglasses3").style.display = "none";
      document.querySelector("#wsunglasses4").style.display = "none";
      document.querySelector("#wsunglasses5").style.display = "none";
      document.querySelector("#wsunglasses6").style.display = "none";
      document.querySelector("#wsunglasses7").style.display = "none";
      document.querySelector("#wsunglasses8").style.display = "none";
      document.querySelector("#wsunglasses9").style.display = "none";
      document.querySelector("#wsunglasses-h3").innerHTML =
         "Sunglasses &#9660;";
   }
}
//footer
document.querySelector(".fa-phone-alt").addEventListener("mouseover", phone);
function phone() {
   document.querySelector(".fa-phone-alt").style.animation =
      "phone 10s ease-in .1s infinite alternate";
}
document.querySelector(".fa-phone-alt").addEventListener("mouseover", phone);
function phone() {
   document.querySelector(".fa-phone-alt").style.animation =
      "phone 10s ease-in .1s infinite alternate";
}
document.querySelector(".fa-envelope").addEventListener("mouseover", mail);
function mail() {
   document.querySelector(".fa-envelope").style.animation =
      "mail 10s ease-in .1s infinite alternate";
}
document.querySelector(".fa-map-marker-alt").addEventListener("mouseover", map);
function map() {
   document.querySelector(".fa-map-marker-alt").style.animation =
      "map 10s ease-in .1s infinite alternate";
}
//wishlist hearts of watches(Men)
//Watch 1- Men
const watchHeart1 = () => {
   if (document.querySelector("#wathrt1").innerHTML != "❤️") {
      document.querySelector("#wathrt1").innerHTML = "❤️";

      document.querySelector("#wathrt1").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wathrt1").innerHTML = "🤍";
      document.querySelector("#wathrt1").style.animation = "none";
   }
};
document.querySelector("#wathrt1").addEventListener("click", watchHeart1);
//Watch 2- Men
const watchHeart2 = () => {
   if (document.querySelector("#wathrt2").innerHTML != "❤️") {
      document.querySelector("#wathrt2").innerHTML = "❤️";
      document.querySelector("#wathrt2").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wathrt2").innerHTML = "🤍";
      document.querySelector("#wathrt2").style.animation = "none";
   }
};
document.querySelector("#wathrt2").addEventListener("click", watchHeart2);
//Watch 3- Men
const watchHeart3 = () => {
   if (document.querySelector("#wathrt3").innerHTML != "❤️") {
      document.querySelector("#wathrt3").innerHTML = "❤️";
      document.querySelector("#wathrt3").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wathrt3").innerHTML = "🤍";
      document.querySelector("#wathrt3").style.animation = "none";
   }
};
document.querySelector("#wathrt3").addEventListener("click", watchHeart3);
//Watch 4- Men
const watchHeart4 = () => {
   if (document.querySelector("#wathrt4").innerHTML != "❤️") {
      document.querySelector("#wathrt4").innerHTML = "❤️";
      document.querySelector("#wathrt4").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wathrt4").innerHTML = "🤍";
      document.querySelector("#wathrt4").style.animation = "none";
   }
};
document.querySelector("#wathrt4").addEventListener("click", watchHeart4);
//Watch 5- Men
const watchHeart5 = () => {
   if (document.querySelector("#wathrt5").innerHTML != "❤️") {
      document.querySelector("#wathrt5").innerHTML = "❤️";
      document.querySelector("#wathrt5").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wathrt5").innerHTML = "🤍";
      document.querySelector("#wathrt5").style.animation = "none";
   }
};
document.querySelector("#wathrt5").addEventListener("click", watchHeart5);
//Watch 6- Men
const watchHeart6 = () => {
   if (document.querySelector("#wathrt6").innerHTML != "❤️") {
      document.querySelector("#wathrt6").innerHTML = "❤️";
      document.querySelector("#wathrt6").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wathrt6").innerHTML = "🤍";
      document.querySelector("#wathrt6").style.animation = "none";
   }
};
document.querySelector("#wathrt6").addEventListener("click", watchHeart6);
//Watch 7- Men
const watchHeart7 = () => {
   if (document.querySelector("#wathrt7").innerHTML != "❤️") {
      document.querySelector("#wathrt7").innerHTML = "❤️";
      document.querySelector("#wathrt7").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wathrt7").innerHTML = "🤍";
      document.querySelector("#wathrt7").style.animation = "none";
   }
};
document.querySelector("#wathrt7").addEventListener("click", watchHeart7);
//Watch 8- Men
const watchHeart8 = () => {
   if (document.querySelector("#wathrt8").innerHTML != "❤️") {
      document.querySelector("#wathrt8").innerHTML = "❤️";
      document.querySelector("#wathrt8").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wathrt8").innerHTML = "🤍";
      document.querySelector("#wathrt8").style.animation = "none";
   }
};
document.querySelector("#wathrt8").addEventListener("click", watchHeart8);
//Watch 9- Men
const watchHeart9 = () => {
   if (document.querySelector("#wathrt9").innerHTML != "❤️") {
      document.querySelector("#wathrt9").innerHTML = "❤️";
      document.querySelector("#wathrt9").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wathrt9").innerHTML = "🤍";
      document.querySelector("#wathrt9").style.animation = "none";
   }
};
document.querySelector("#wathrt9").addEventListener("click", watchHeart9);
//wishlist hearts of Backpack(Men)
//Backpack 1- Men
const backpHeart1 = () => {
   if (document.querySelector("#backphrt1").innerHTML != "❤️") {
      document.querySelector("#backphrt1").innerHTML = "❤️";
      document.querySelector("#backphrt1").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#backphrt1").innerHTML = "🤍";
      document.querySelector("#backphrt1").style.animation = "none";
   }
};
document.querySelector("#backphrt1").addEventListener("click", backpHeart1);
//Backpack 2- Men
const backpHeart2 = () => {
   if (document.querySelector("#backphrt2").innerHTML != "❤️") {
      document.querySelector("#backphrt2").innerHTML = "❤️";
      document.querySelector("#backphrt2").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#backphrt2").innerHTML = "🤍";
      document.querySelector("#backphrt2").style.animation = "none";
   }
};
document.querySelector("#backphrt2").addEventListener("click", backpHeart2);
//Backpack 3- Men
const backpHeart3 = () => {
   if (document.querySelector("#backphrt3").innerHTML != "❤️") {
      document.querySelector("#backphrt3").innerHTML = "❤️";
      document.querySelector("#backphrt3").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#backphrt3").innerHTML = "🤍";
      document.querySelector("#backphrt3").style.animation = "none";
   }
};
document.querySelector("#backphrt3").addEventListener("click", backpHeart3);
//Backpack 4- Men
const backpHeart4 = () => {
   if (document.querySelector("#backphrt4").innerHTML != "❤️") {
      document.querySelector("#backphrt4").innerHTML = "❤️";
      document.querySelector("#backphrt4").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#backphrt4").innerHTML = "🤍";
      document.querySelector("#backphrt4").style.animation = "none";
   }
};
document.querySelector("#backphrt4").addEventListener("click", backpHeart4);
//Backpack 5- Men
const backpHeart5 = () => {
   if (document.querySelector("#backphrt5").innerHTML != "❤️") {
      document.querySelector("#backphrt5").innerHTML = "❤️";
      document.querySelector("#backphrt5").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#backphrt5").innerHTML = "🤍";
      document.querySelector("#backphrt5").style.animation = "none";
   }
};
document.querySelector("#backphrt5").addEventListener("click", backpHeart5);
//wishlist hearts of Wallet(Men)
//Wallet 1- Men
const walletHeart1 = () => {
   if (document.querySelector("#wallhrt1").innerHTML != "❤️") {
      document.querySelector("#wallhrt1").innerHTML = "❤️";
      document.querySelector("#wallhrt1").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wallhrt1").innerHTML = "🤍";
      document.querySelector("#wallhrt1").style.animation = "none";
   }
};
document.querySelector("#wallhrt1").addEventListener("click", walletHeart1);
//Wallet 2- Men
const walletHeart2 = () => {
   if (document.querySelector("#wallhrt2").innerHTML != "❤️") {
      document.querySelector("#wallhrt2").innerHTML = "❤️";
      document.querySelector("#wallhrt2").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wallhrt2").innerHTML = "🤍";
      document.querySelector("#wallhrt2").style.animation = "none";
   }
};
document.querySelector("#wallhrt2").addEventListener("click", walletHeart2);
//Wallet 3- Men
const walletHeart3 = () => {
   if (document.querySelector("#wallhrt3").innerHTML != "❤️") {
      document.querySelector("#wallhrt3").innerHTML = "❤️";
      document.querySelector("#wallhrt3").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wallhrt3").innerHTML = "🤍";
      document.querySelector("#wallhrt3").style.animation = "none";
   }
};
document.querySelector("#wallhrt3").addEventListener("click", walletHeart3);
//Wallet 4- Men
const walletHeart4 = () => {
   if (document.querySelector("#wallhrt4").innerHTML != "❤️") {
      document.querySelector("#wallhrt4").innerHTML = "❤️";
      document.querySelector("#wallhrt4").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wallhrt4").innerHTML = "🤍";
      document.querySelector("#wallhrt4").style.animation = "none";
   }
};
document.querySelector("#wallhrt4").addEventListener("click", walletHeart4);
//wishlist hearts of Belt(Men)
//Belt 1- Men
const beltHeart1 = () => {
   if (document.querySelector("#belthrt1").innerHTML != "❤️") {
      document.querySelector("#belthrt1").innerHTML = "❤️";
      document.querySelector("#belthrt1").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#belthrt1").innerHTML = "🤍";
      document.querySelector("#belthrt1").style.animation = "none";
   }
};
document.querySelector("#belthrt1").addEventListener("click", beltHeart1);
//Belt 2- Men
const beltHeart2 = () => {
   if (document.querySelector("#belthrt2").innerHTML != "❤️") {
      document.querySelector("#belthrt2").innerHTML = "❤️";
      document.querySelector("#belthrt2").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#belthrt2").innerHTML = "🤍";
      document.querySelector("#belthrt2").style.animation = "none";
   }
};
document.querySelector("#belthrt2").addEventListener("click", beltHeart2);
//Belt 3- Men
const beltHeart3 = () => {
   if (document.querySelector("#belthrt3").innerHTML != "❤️") {
      document.querySelector("#belthrt3").innerHTML = "❤️";
      document.querySelector("#belthrt3").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#belthrt3").innerHTML = "🤍";
      document.querySelector("#belthrt3").style.animation = "none";
   }
};
document.querySelector("#belthrt3").addEventListener("click", beltHeart3);
//Belt 4- Men
const beltHeart4 = () => {
   if (document.querySelector("#belthrt4").innerHTML != "❤️") {
      document.querySelector("#belthrt4").innerHTML = "❤️";
      document.querySelector("#belthrt4").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#belthrt4").innerHTML = "🤍";
      document.querySelector("#belthrt4").style.animation = "none";
   }
};
document.querySelector("#belthrt4").addEventListener("click", beltHeart4);
//wishlist hearts of Sunglasses(Men)
//Sunglasses 1- Men
const sunglassesHeart1 = () => {
   if (document.querySelector("#sunghrt1").innerHTML != "❤️") {
      document.querySelector("#sunghrt1").innerHTML = "❤️";
      document.querySelector("#sunghrt1").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#sunghrt1").innerHTML = "🤍";
      document.querySelector("#sunghrt1").style.animation = "none";
   }
};
document.querySelector("#sunghrt1").addEventListener("click", sunglassesHeart1);
//Sunglasses 2- Men
const sunglassesHeart2 = () => {
   if (document.querySelector("#sunghrt2").innerHTML != "❤️") {
      document.querySelector("#sunghrt2").innerHTML = "❤️";
      document.querySelector("#sunghrt2").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#sunghrt2").innerHTML = "🤍";
      document.querySelector("#sunghrt2").style.animation = "none";
   }
};
document.querySelector("#sunghrt2").addEventListener("click", sunglassesHeart2);
//Sunglasses 3- Men
const sunglassesHeart3 = () => {
   if (document.querySelector("#sunghrt3").innerHTML != "❤️") {
      document.querySelector("#sunghrt3").innerHTML = "❤️";
      document.querySelector("#sunghrt3").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#sunghrt3").innerHTML = "🤍";
      document.querySelector("#sunghrt3").style.animation = "none";
   }
};
document.querySelector("#sunghrt3").addEventListener("click", sunglassesHeart3);
//Sunglasses 4- Men
const sunglassesHeart4 = () => {
   if (document.querySelector("#sunghrt4").innerHTML != "❤️") {
      document.querySelector("#sunghrt4").innerHTML = "❤️";
      document.querySelector("#sunghrt4").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#sunghrt4").innerHTML = "🤍";
      document.querySelector("#sunghrt4").style.animation = "none";
   }
};
document.querySelector("#sunghrt4").addEventListener("click", sunglassesHeart4);
//Sunglasses 5- Men
const sunglassesHeart5 = () => {
   if (document.querySelector("#sunghrt5").innerHTML != "❤️") {
      document.querySelector("#sunghrt5").innerHTML = "❤️";
      document.querySelector("#sunghrt5").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#sunghrt5").innerHTML = "🤍";
      document.querySelector("#sunghrt5").style.animation = "none";
   }
};
document.querySelector("#sunghrt5").addEventListener("click", sunglassesHeart5);
//Sunglasses 6- Men
const sunglassesHeart6 = () => {
   if (document.querySelector("#sunghrt6").innerHTML != "❤️") {
      document.querySelector("#sunghrt6").innerHTML = "❤️";
      document.querySelector("#sunghrt6").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#sunghrt6").innerHTML = "🤍";
      document.querySelector("#sunghrt6").style.animation = "none";
   }
};
document.querySelector("#sunghrt6").addEventListener("click", sunglassesHeart6);
//Sunglasses 7- Men
const sunglassesHeart7 = () => {
   if (document.querySelector("#sunghrt7").innerHTML != "❤️") {
      document.querySelector("#sunghrt7").innerHTML = "❤️";
      document.querySelector("#sunghrt7").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#sunghrt7").innerHTML = "🤍";
      document.querySelector("#sunghrt7").style.animation = "none";
   }
};
document.querySelector("#sunghrt7").addEventListener("click", sunglassesHeart7);
//wishlist hearts of watches(Women)
//Watch 1- Women
const wWatchHeart1 = () => {
   if (document.querySelector("#wwathrt1").innerHTML != "❤️") {
      document.querySelector("#wwathrt1").innerHTML = "❤️";
      document.querySelector("#wwathrt1").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wwathrt1").innerHTML = "🤍";
      document.querySelector("#wwathrt1").style.animation = "none";
   }
};
document.querySelector("#wwathrt1").addEventListener("click", wWatchHeart1);
//Watch 2- Women
const wWatchHeart2 = () => {
   if (document.querySelector("#wwathrt2").innerHTML != "❤️") {
      document.querySelector("#wwathrt2").innerHTML = "❤️";
      document.querySelector("#wwathrt2").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wwathrt2").innerHTML = "🤍";
      document.querySelector("#wwathrt2").style.animation = "none";
   }
};
document.querySelector("#wwathrt2").addEventListener("click", wWatchHeart2);
//Watch 3- Women
const wWatchHeart3 = () => {
   if (document.querySelector("#wwathrt3").innerHTML != "❤️") {
      document.querySelector("#wwathrt3").innerHTML = "❤️";
      document.querySelector("#wwathrt3").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wwathrt3").innerHTML = "🤍";
      document.querySelector("#wwathrt3").style.animation = "none";
   }
};
document.querySelector("#wwathrt3").addEventListener("click", wWatchHeart3);
//Watch 4- Women
const wWatchHeart4 = () => {
   if (document.querySelector("#wwathrt4").innerHTML != "❤️") {
      document.querySelector("#wwathrt4").innerHTML = "❤️";
      document.querySelector("#wwathrt4").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wwathrt4").innerHTML = "🤍";
      document.querySelector("#wwathrt4").style.animation = "none";
   }
};
document.querySelector("#wwathrt4").addEventListener("click", wWatchHeart4);
//Watch 5- Women
const wWatchHeart5 = () => {
   if (document.querySelector("#wwathrt5").innerHTML != "❤️") {
      document.querySelector("#wwathrt5").innerHTML = "❤️";
      document.querySelector("#wwathrt5").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wwathrt5").innerHTML = "🤍";
      document.querySelector("#wwathrt5").style.animation = "none";
   }
};
document.querySelector("#wwathrt5").addEventListener("click", wWatchHeart5);
//Watch 6- Women
const wWatchHeart6 = () => {
   if (document.querySelector("#wwathrt6").innerHTML != "❤️") {
      document.querySelector("#wwathrt6").innerHTML = "❤️";
      document.querySelector("#wwathrt6").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wwathrt6").innerHTML = "🤍";
      document.querySelector("#wwathrt6").style.animation = "none";
   }
};
document.querySelector("#wwathrt6").addEventListener("click", wWatchHeart6);
//Watch 7- Women
const wWatchHeart7 = () => {
   if (document.querySelector("#wwathrt7").innerHTML != "❤️") {
      document.querySelector("#wwathrt7").innerHTML = "❤️";
      document.querySelector("#wwathrt7").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wwathrt7").innerHTML = "🤍";
      document.querySelector("#wwathrt7").style.animation = "none";
   }
};
document.querySelector("#wwathrt7").addEventListener("click", wWatchHeart7);
//Watch 8- Women
const wWatchHeart8 = () => {
   if (document.querySelector("#wwathrt8").innerHTML != "❤️") {
      document.querySelector("#wwathrt8").innerHTML = "❤️";
      document.querySelector("#wwathrt8").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wwathrt8").innerHTML = "🤍";
      document.querySelector("#wwathrt8").style.animation = "none";
   }
};
document.querySelector("#wwathrt8").addEventListener("click", wWatchHeart8);
//wishlist hearbagHandbags(Women)
// Handbags 1- Women
const bagHeart1 = () => {
   if (document.querySelector("#baghrt1").innerHTML != "❤️") {
      document.querySelector("#baghrt1").innerHTML = "❤️";
      document.querySelector("#baghrt1").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#baghrt1").innerHTML = "🤍";
      document.querySelector("#baghrt1").style.animation = "none";
   }
};
document.querySelector("#baghrt1").addEventListener("click", bagHeart1);
// Handbags 2- Women
const bagHeart2 = () => {
   if (document.querySelector("#baghrt2").innerHTML != "❤️") {
      document.querySelector("#baghrt2").innerHTML = "❤️";
      document.querySelector("#baghrt2").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#baghrt2").innerHTML = "🤍";
      document.querySelector("#baghrt2").style.animation = "none";
   }
};
document.querySelector("#baghrt2").addEventListener("click", bagHeart2);
// Handbags 3- Women
const bagHeart3 = () => {
   if (document.querySelector("#baghrt3").innerHTML != "❤️") {
      document.querySelector("#baghrt3").innerHTML = "❤️";
      document.querySelector("#baghrt3").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#baghrt3").innerHTML = "🤍";
      document.querySelector("#baghrt3").style.animation = "none";
   }
};
document.querySelector("#baghrt3").addEventListener("click", bagHeart3);
// Handbags 4- Women
const bagHeart4 = () => {
   if (document.querySelector("#baghrt4").innerHTML != "❤️") {
      document.querySelector("#baghrt4").innerHTML = "❤️";
      document.querySelector("#baghrt4").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#baghrt4").innerHTML = "🤍";
      document.querySelector("#baghrt4").style.animation = "none";
   }
};
document.querySelector("#baghrt4").addEventListener("click", bagHeart4);
// Handbags 5- Women
const bagHeart5 = () => {
   if (document.querySelector("#baghrt5").innerHTML != "❤️") {
      document.querySelector("#baghrt5").innerHTML = "❤️";
      document.querySelector("#baghrt5").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#baghrt5").innerHTML = "🤍";
      document.querySelector("#baghrt5").style.animation = "none";
   }
};
document.querySelector("#baghrt5").addEventListener("click", bagHeart5);
// Handbags 6- Women
const bagHeart6 = () => {
   if (document.querySelector("#baghrt6").innerHTML != "❤️") {
      document.querySelector("#baghrt6").innerHTML = "❤️";
      document.querySelector("#baghrt6").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#baghrt6").innerHTML = "🤍";
      document.querySelector("#baghrt6").style.animation = "none";
   }
};
document.querySelector("#baghrt6").addEventListener("click", bagHeart6);
// Handbags 7- Women
const bagHeart7 = () => {
   if (document.querySelector("#baghrt7").innerHTML != "❤️") {
      document.querySelector("#baghrt7").innerHTML = "❤️";
      document.querySelector("#baghrt7").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#baghrt7").innerHTML = "🤍";
      document.querySelector("#baghrt7").style.animation = "none";
   }
};
document.querySelector("#baghrt7").addEventListener("click", bagHeart7);
//wishlist hearts of Wallet(Women)
//Wallet 1- Women
const wWalletHeart1 = () => {
   if (document.querySelector("#wwallhrt1").innerHTML != "❤️") {
      document.querySelector("#wwallhrt1").innerHTML = "❤️";
      document.querySelector("#wwallhrt1").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wwallhrt1").innerHTML = "🤍";
      document.querySelector("#wwallhrt1").style.animation = "none";
   }
};
document.querySelector("#wwallhrt1").addEventListener("click", wWalletHeart1);
//Wallet 2- Women
const wWalletHeart2 = () => {
   if (document.querySelector("#wwallhrt2").innerHTML != "❤️") {
      document.querySelector("#wwallhrt2").innerHTML = "❤️";
      document.querySelector("#wwallhrt2").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wwallhrt2").innerHTML = "🤍";
      document.querySelector("#wwallhrt2").style.animation = "none";
   }
};
document.querySelector("#wwallhrt2").addEventListener("click", wWalletHeart2);
//Wallet 3- Women
const wWalletHeart3 = () => {
   if (document.querySelector("#wwallhrt3").innerHTML != "❤️") {
      document.querySelector("#wwallhrt3").innerHTML = "❤️";
      document.querySelector("#wwallhrt3").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wwallhrt3").innerHTML = "🤍";
      document.querySelector("#wwallhrt3").style.animation = "none";
   }
};
document.querySelector("#wwallhrt3").addEventListener("click", wWalletHeart3);
//Wallet 4- Women
const wWalletHeart4 = () => {
   if (document.querySelector("#wwallhrt4").innerHTML != "❤️") {
      document.querySelector("#wwallhrt4").innerHTML = "❤️";
      document.querySelector("#wwallhrt4").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wwallhrt4").innerHTML = "🤍";
      document.querySelector("#wwallhrt4").style.animation = "none";
   }
};
document.querySelector("#wwallhrt4").addEventListener("click", wWalletHeart4);
//Wallet 5- Women
const wWalletHeart5 = () => {
   if (document.querySelector("#wwallhrt5").innerHTML != "❤️") {
      document.querySelector("#wwallhrt5").innerHTML = "❤️";
      document.querySelector("#wwallhrt5").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wwallhrt5").innerHTML = "🤍";
      document.querySelector("#wwallhrt5").style.animation = "none";
   }
};
document.querySelector("#wwallhrt5").addEventListener("click", wWalletHeart5);
//Wallet 6- Women
const wWalletHeart6 = () => {
   if (document.querySelector("#wwallhrt6").innerHTML != "❤️") {
      document.querySelector("#wwallhrt6").innerHTML = "❤️";
      document.querySelector("#wwallhrt6").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wwallhrt6").innerHTML = "🤍";
      document.querySelector("#wwallhrt6").style.animation = "none";
   }
};
document.querySelector("#wwallhrt6").addEventListener("click", wWalletHeart6);
//Wallet 7- Women
const wWalletHeart7 = () => {
   if (document.querySelector("#wwallhrt7").innerHTML != "❤️") {
      document.querySelector("#wwallhrt7").innerHTML = "❤️";
      document.querySelector("#wwallhrt7").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wwallhrt7").innerHTML = "🤍";
      document.querySelector("#wwallhrt7").style.animation = "none";
   }
};
document.querySelector("#wwallhrt7").addEventListener("click", wWalletHeart7);
//wishlist hearts of Sunglasses(Women)
//Sunglasses 1- Women
const wSunglassesHeart1 = () => {
   if (document.querySelector("#wsunghrt1").innerHTML != "❤️") {
      document.querySelector("#wsunghrt1").innerHTML = "❤️";
      document.querySelector("#wsunghrt1").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wsunghrt1").innerHTML = "🤍";
      document.querySelector("#wsunghrt1").style.animation = "none";
   }
};
document
   .querySelector("#wsunghrt1")
   .addEventListener("click", wSunglassesHeart1);
//Sunglasses 2- Women
const wSunglassesHeart2 = () => {
   if (document.querySelector("#wsunghrt2").innerHTML != "❤️") {
      document.querySelector("#wsunghrt2").innerHTML = "❤️";
      document.querySelector("#wsunghrt2").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wsunghrt2").innerHTML = "🤍";
      document.querySelector("#wsunghrt2").style.animation = "none";
   }
};
document
   .querySelector("#wsunghrt2")
   .addEventListener("click", wSunglassesHeart2);
//Sunglasses 3- Women
const wSunglassesHeart3 = () => {
   if (document.querySelector("#wsunghrt3").innerHTML != "❤️") {
      document.querySelector("#wsunghrt3").innerHTML = "❤️";
      document.querySelector("#wsunghrt3").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wsunghrt3").innerHTML = "🤍";
      document.querySelector("#wsunghrt3").style.animation = "none";
   }
};
document
   .querySelector("#wsunghrt3")
   .addEventListener("click", wSunglassesHeart3);
//Sunglasses 4- Women
const wSunglassesHeart4 = () => {
   if (document.querySelector("#wsunghrt4").innerHTML != "❤️") {
      document.querySelector("#wsunghrt4").innerHTML = "❤️";
      document.querySelector("#wsunghrt4").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wsunghrt4").innerHTML = "🤍";
      document.querySelector("#wsunghrt4").style.animation = "none";
   }
};
document
   .querySelector("#wsunghrt4")
   .addEventListener("click", wSunglassesHeart4);
//Sunglasses 5- Women
const wSunglassesHeart5 = () => {
   if (document.querySelector("#wsunghrt5").innerHTML != "❤️") {
      document.querySelector("#wsunghrt5").innerHTML = "❤️";
      document.querySelector("#wsunghrt5").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wsunghrt5").innerHTML = "🤍";
      document.querySelector("#wsunghrt5").style.animation = "none";
   }
};
document
   .querySelector("#wsunghrt5")
   .addEventListener("click", wSunglassesHeart5);
//Sunglasses 6- Women
const wSunglassesHeart6 = () => {
   if (document.querySelector("#wsunghrt6").innerHTML != "❤️") {
      document.querySelector("#wsunghrt6").innerHTML = "❤️";
      document.querySelector("#wsunghrt6").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wsunghrt6").innerHTML = "🤍";
      document.querySelector("#wsunghrt6").style.animation = "none";
   }
};
document
   .querySelector("#wsunghrt6")
   .addEventListener("click", wSunglassesHeart6);
//Sunglasses 7- Women
const wSunglassesHeart7 = () => {
   if (document.querySelector("#wsunghrt7").innerHTML != "❤️") {
      document.querySelector("#wsunghrt7").innerHTML = "❤️";
      document.querySelector("#wsunghrt7").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wsunghrt7").innerHTML = "🤍";
      document.querySelector("#wsunghrt7").style.animation = "none";
   }
};
document
   .querySelector("#wsunghrt7")
   .addEventListener("click", wSunglassesHeart7);
//Sunglasses 8- Women
const wSunglassesHeart8 = () => {
   if (document.querySelector("#wsunghrt8").innerHTML != "❤️") {
      document.querySelector("#wsunghrt8").innerHTML = "❤️";
      document.querySelector("#wsunghrt8").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wsunghrt8").innerHTML = "🤍";
      document.querySelector("#wsunghrt8").style.animation = "none";
   }
};
document
   .querySelector("#wsunghrt8")
   .addEventListener("click", wSunglassesHeart8);
//Sunglasses 9- Women
const wSunglassesHeart9 = () => {
   if (document.querySelector("#wsunghrt9").innerHTML != "❤️") {
      document.querySelector("#wsunghrt9").innerHTML = "❤️";
      document.querySelector("#wsunghrt9").style.animation = "shake .5s ease 1";
   } else {
      document.querySelector("#wsunghrt9").innerHTML = "🤍";
      document.querySelector("#wsunghrt9").style.animation = "none";
   }
};
document
   .querySelector("#wsunghrt9")
   .addEventListener("click", wSunglassesHeart9);
