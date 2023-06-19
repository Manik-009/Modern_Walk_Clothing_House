document
   .querySelector(".fa-shopping-cart")
   .addEventListener("click", shoppingCart);
function shoppingCart() {
   alert("Your cart is empty ! Add items to it now.");
}
setTimeout(function () {
   document.querySelector(".alert-box").style.display = "flex";
}, 1000);
document.querySelector("#cancelBtn").addEventListener("click", cancel);
function cancel() {
   document.querySelector(".alert-box").style.display = "none";
}
var images = [
   "Images/main.jpg",
   "Images/main11.jpg",
   "Images/main5.jpg",
   "Images/main3.jpg",
   "Images/main4.jpg",
   "Images/main6.jpg",
   "Images/main1.png",
   "Images/main7.jpg",
   "Images/main8.jpg",
   "Images/main9.png",
   "Images/main10.jpg",
   "Images/main12.jpg",
];
document.slider.src = "Images/main.jpg";
var i = 0;
function setImage() {
   document.slider.src = images[i];
}
document.querySelector("#right-btn").addEventListener("click", right);
function right() {
   if (i < images.length - 1) {
      i++;
   } else {
      i = 0;
   }
   setImage();
}
document.querySelector("#left-btn").addEventListener("click", left);
function left() {
   if (i > 0) {
      i--;
   } else {
      i = images.length - 1;
   }
   setImage();
}
setInterval(() => {
   if (i < images.length - 1) {
      i++;
   } else {
      i = 0;
   }
   setImage();
}, 7000);
//footer
document.querySelector("#footer-logo").addEventListener("mouseover", logo);
function logo() {
   document.querySelector("#footer-logo").style.animation =
      "flogo 3s ease-in .1s infinite alternate";
}
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
setInterval(function time() {
   const main = new Date();
   const sec = main.getSeconds();
   const min = main.getMinutes();
   const hour = main.getHours();
   const finSec = 60 - sec;
   const finMin = 60 - min;
   const finHour = 24 - hour;
   document.querySelector("#time").textContent =
      "	\u23F1 " + finHour + "h " + finMin + "m " + finSec + "s " + "remaining";
   document.querySelector("#time").style.textAlign = "center";
   document.querySelector("#time").style.backgroundColor = "white";
   document.querySelector("#time").style.color = "black";
   document.querySelector("#time").style.fontWeight = "bold";
   document.querySelector("#time").style.borderRadius = "50px";
}, 500);
setInterval(function time1() {
   const main1 = new Date();
   const sec1 = main1.getSeconds();
   const min1 = main1.getMinutes();
   const hour1 = main1.getHours();
   const finSec1 = 60 - sec1;
   const finMin1 = 60 - min1;
   const finHour1 = 48 - hour1;
   document.querySelector("#time1").textContent =
      "	\u23F1 " +
      finHour1 +
      "h " +
      finMin1 +
      "m " +
      finSec1 +
      "s " +
      "remaining";
   document.querySelector("#time1").style.textAlign = "center";
   document.querySelector("#time1").style.backgroundColor = "white";
   document.querySelector("#time1").style.color = "black";
   document.querySelector("#time1").style.fontWeight = "bold";
   document.querySelector("#time1").style.borderRadius = "50px";
}, 500);
document.querySelector("#X").addEventListener("click", x);
function x() {
   if (document.querySelector("#X").textContent != "✖") {
      document.querySelector("#X").textContent = "✖";
      document.querySelector("#X").style.transform = "rotateZ(180deg)";
      document.querySelector("#X").style.transition = "transform .9s";
   } else {
      document.querySelector("#X").textContent = "\u2630";
      document.querySelector("#X").style.transform = "rotateZ(0deg)";
   }
}
//some important info
// count 1
function count1() {
   setTimeout(() => {
      document.querySelector("#count1").textContent = 0;
      document.querySelector("#count1").style.animation =
         "count 2s linear .1s alternate";
   }, 14000);
   setTimeout(() => {
      document.querySelector("#count1").textContent = 768;
      document.querySelector("#count1").style.animation =
         "count 2s linear .1s alternate";
   }, 14400);
   setTimeout(() => {
      document.querySelector("#count1").textContent = 4563;
      document.querySelector("#count1").style.animation =
         "count 2s linear .1s alternate";
   }, 14800);
   setTimeout(() => {
      document.querySelector("#count1").textContent = 7222;
      document.querySelector("#count1").style.animation =
         "count 2s linear .1s alternate";
   }, 15200);
   setTimeout(() => {
      document.querySelector("#count1").textContent = 10245;
      document.querySelector("#count1").style.animation =
         "count 2s linear .1s alternate";
   }, 15600);
   setTimeout(() => {
      document.querySelector("#count1").textContent = "11,443";
      document.querySelector("#count1").style.animation =
         "count 2s linear .1s alternate";
   }, 16000);
   setTimeout(() => {
      document.querySelector("#count1").textContent = "11,445";
      document.querySelector("#count1").style.animation =
         "count 2s linear .1s alternate";
   }, 40000);
}
count1();
// count 2
function count2() {
   setTimeout(() => {
      document.querySelector("#count2").textContent = 0;
      document.querySelector("#count2").style.animation =
         "count 2s linear .1s alternate";
   }, 14000);
   setTimeout(() => {
      document.querySelector("#count2").textContent = 666;
      document.querySelector("#count2").style.animation =
         "count 2s linear .1s alternate";
   }, 14400);
   setTimeout(() => {
      document.querySelector("#count2").textContent = 3863;
      document.querySelector("#count2").style.animation =
         "count 2s linear .1s alternate";
   }, 14800);
   setTimeout(() => {
      document.querySelector("#count2").textContent = 8222;
      document.querySelector("#count2").style.animation =
         "count 2s linear .1s alternate";
   }, 15200);
   setTimeout(() => {
      document.querySelector("#count2").textContent = 11895;
      document.querySelector("#count2").style.animation =
         "count 2s linear .1s alternate";
   }, 15600);
   setTimeout(() => {
      document.querySelector("#count2").textContent = "14,982";
      document.querySelector("#count2").style.animation =
         "count 2s linear .1s alternate";
   }, 16000);
}
count2();
// count 3
function count3() {
   setTimeout(() => {
      document.querySelector("#count3").textContent = 0;
      document.querySelector("#count3").style.animation =
         "count 2s linear .1s alternate";
   }, 14000);
   setTimeout(() => {
      document.querySelector("#count3").textContent = 246;
      document.querySelector("#count3").style.animation =
         "count 2s linear .1s alternate";
   }, 14400);
   setTimeout(() => {
      document.querySelector("#count3").textContent = 783;
      document.querySelector("#count3").style.animation =
         "count 2s linear .1s alternate";
   }, 14800);
   setTimeout(() => {
      document.querySelector("#count3").textContent = 1222;
      document.querySelector("#count3").style.animation =
         "count 2s linear .1s alternate";
   }, 15200);
   setTimeout(() => {
      document.querySelector("#count3").textContent = 1895;
      document.querySelector("#count3").style.animation =
         "count 2s linear .1s alternate";
   }, 15600);
   setTimeout(() => {
      document.querySelector("#count3").textContent = "2,112";
      document.querySelector("#count3").style.animation =
         "count 2s linear .1s alternate";
   }, 16000);
   setTimeout(() => {
      document.querySelector("#count3").textContent = "2,117";
      document.querySelector("#count3").style.animation =
         "count 2s linear .1s alternate";
   }, 35000);
}
count3();
// count 4
function count4() {
   setTimeout(() => {
      document.querySelector("#count4").textContent = 0;
      document.querySelector("#count4").style.animation =
         "count 2s linear .1s alternate";
   }, 14000);
   setTimeout(() => {
      document.querySelector("#count4").textContent = 416;
      document.querySelector("#count4").style.animation =
         "count 2s linear .1s alternate";
   }, 14400);
   setTimeout(() => {
      document.querySelector("#count4").textContent = 1073;
      document.querySelector("#count4").style.animation =
         "count 2s linear .1s alternate";
   }, 14800);
   setTimeout(() => {
      document.querySelector("#count4").textContent = 2222;
      document.querySelector("#count4").style.animation =
         "count 2s linear .1s alternate";
   }, 15200);
   setTimeout(() => {
      document.querySelector("#count4").textContent = 4095;
      document.querySelector("#count4").style.animation =
         "count 2s linear .1s alternate";
   }, 15600);
   setTimeout(() => {
      document.querySelector("#count4").textContent = "5,180";
      document.querySelector("#count4").style.animation =
         "count 2s linear .1s alternate";
   }, 16000);
   setTimeout(() => {
      document.querySelector("#count4").textContent = "5,185";
      document.querySelector("#count4").style.animation =
         "count 2s linear .1s alternate";
   }, 60000);
}
count4();
document.querySelector("#pin-btn").addEventListener("click", submitPincode);
function submitPincode() {
   const innerValue = document.querySelector("#input-box").value;
   if (innerValue == 184101 || innerValue == 184102) {
      document.querySelector("#save-data").textContent =
         innerValue + ", " + "Kathua(J&K)";
      document.querySelector(".address").style.height = "12ch";
   } else if (innerValue == 140307) {
      document.querySelector("#save-data").textContent =
         innerValue + ", " + "Mohali(Punjab)";
      document.querySelector(".address").style.height = "12ch";
   } else if (innerValue == 160036) {
      document.querySelector("#save-data").textContent =
         innerValue + ", " + "Chandigarh(Punjab)";
      document.querySelector(".address").style.height = "12ch";
   } else if (innerValue == 180001) {
      document.querySelector("#save-data").textContent =
         innerValue + ", " + "Jammu(J&K)";
      document.querySelector(".address").style.height = "12ch";
   } else if (innerValue == 145001) {
      document.querySelector("#save-data").textContent =
         innerValue + ", " + "Pathankot(Punjab)";
      document.querySelector(".address").style.height = "12ch";
   } else if (innerValue == 110038) {
      document.querySelector("#save-data").textContent =
         innerValue + ", " + "Delhi";
      document.querySelector(".address").style.height = "12ch";
   } else if (innerValue == 110001) {
      document.querySelector("#save-data").textContent =
         innerValue + ", " + "New Delhi";
      document.querySelector(".address").style.height = "12ch";
   } else if (innerValue == 530068) {
      document.querySelector("#save-data").textContent =
         innerValue + ", " + "Bangalore(Karnataka)";
      document.querySelector(".address").style.height = "12ch";
   } else if (innerValue == 244413) {
      document.querySelector("#save-data").textContent =
         innerValue + ", " + "Haryana";
      document.querySelector(".address").style.height = "12ch";
   } else if (innerValue == 176402) {
      document.querySelector("#save-data").textContent =
         innerValue + ", " + "Indora(H.P)";
      document.querySelector(".address").style.height = "12ch";
   } else if (innerValue == "" || innerValue == " ") {
      alert("Please enter you're pin code");
   } else {
      alert(
         "Sorry we have very limited Pin-Code Store.\n Try (184101,110001,160036,176402) etc"
      );
   }
}
document.querySelector(".fa-info-circle").addEventListener("click", info);
function info() {
   alert("Enter You're 6 digit Pin Code!!!");
}
document.querySelector(".address").style.display = "none";
document.querySelector("#camera").addEventListener("click", addressShown);
function addressShown() {
   document.querySelector(".address").style.display = "flex";
   document.querySelector(".address").style.animation = "pin-box .5s linear ";
}
