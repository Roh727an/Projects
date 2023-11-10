/*
var firstBtn=document.querySelector("button");
// Evenet Listner
firstBtn.addEventListener("click",handleClick);

function handleClick(){
    alert("I was Clicked");
}
*/
// Event Lisner & LOOPING
/*
function handleClick() {
    alert("I was Clicked");
    var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
}
// ADD SOUND


var noOfBtn = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfBtn; i++) {
    // Selecet the i'th Button
    var selectedBtn = document.querySelectorAll(".drum")[i];
    // Add Event Listner
    selectedBtn.addEventListener("click", handleClick);
}
*/



/*

//Adding Differnt Sound to Differnt Drums
var noOfBtn = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfBtn; i++) {
    // Selecet the i'th Button
    var selectedBtn = document.querySelectorAll(".drum")[i];
    // Add Event Listner
    selectedBtn.addEventListener("click", function (){

        var ButtonInnerHTML=this.innerHTML;
    
        switch (ButtonInnerHTML) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        
        case "a":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;

        case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log("Default");


    }

    });
}

*/
// ADD KEYBOARD KEYS TO PLAY DIFFERNT SOUNDS

// Target whole screen to read the Keyboard
// Event Listner to Detect Keyboard Strokes 
// We target the Whole Window/Documnet
document.addEventListener("keypress",function(event){
    // event-> event (KeyPressed)
    makeSound(event.key);
    btnAnimation(event.key);
});


// Click 
var noOfBtn = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfBtn; i++) {
    // Selecet the i'th Button
    var selectedBtn = document.querySelectorAll(".drum")[i];
    // Add Event Listner
    selectedBtn.addEventListener("click", function (){

        var ButtonInnerHTML=this.innerHTML;
        
        // event-> buttonInnerHTML(Clicked)
        makeSound(ButtonInnerHTML);
        btnAnimation(ButtonInnerHTML);

    });
}

// Function thake make Sound take input as Key-> either Clicked(then ButtonInnerHTML) or KeyPressed (then Event's key)
function makeSound(key){


    switch (key) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        
        case "a":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;

        case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log("Default");
    }
}

// ADD ANIMATIOn
function btnAnimation(key){
    // Select the keys/Drums
    var activeBtn=document.querySelector("."+key);

    // ADD THE CLASS PASSED TO THE CURRENT PRESSED BUTTON
    activeBtn.classList.add("pressed");

    // We want to remove the pressed class after some time
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100);
}



