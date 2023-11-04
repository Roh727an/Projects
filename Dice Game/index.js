var num1 = Math.round((Math.random() * 6) )+ 1;
var num2 = Math.round((Math.random() * 6) )+ 1;

// String Concatination
var dice1Img = "./images/dice" + num1 + ".png";
var dice2Img = "./images/dice" + num2 + ".png";

// Select Image Tag
// First image
var image1 = document.querySelectorAll("img")[0]; 
// Second image
var image2 = document.querySelectorAll("img")[1]; 

// Change Images
image1.setAttribute("src", dice1Img);
image2.setAttribute("src", dice2Img);

// Change Text
var textMain=document.querySelectorAll("h1")[0];

if(num1==num2)
textMain.textContent="Draw";
if(num1>num2)
textMain.textContent="Player 1 Won 🎉";
if(num2>num1)
textMain.textContent="🎉 Player 2 Won";

var BTN = document.querySelectorAll("button")[0];
BTN.setAttribute("onclick","window.location.reload()");
