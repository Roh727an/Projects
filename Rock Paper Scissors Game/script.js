// ***********************Acess All Elements **************************
let userScore = 0;
let compScore = 0;
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");


// *********************** Logic **************************
// Access All the Choices from User Click
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}); 


// Function to Generate Computer Random Choice
const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    // Generate Random Number btw 0 to 1 -> Math.random()
    // Round Off - > Math.floor(X)
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}

// Function that show when the Game is Draw
const drawGame = () => {
    console.log("Draw");
    msg.innerHTML="Draw";
    msg.style.backgroundColor="#ffffff"; 
    msg.style.color="black"; 
}

// Function That shows Who Won the Game
const showWinner = (userWin,userChoice,compChoice) => {
    // IF User Won
    if (userWin) {
        //  Update user Score & Display
        userScore++;
        userScorePara.innerText=userScore;
        // Change The Text in Msg
        msg.innerHTML=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"; 
        msg.style.color="white"; 
    }
    // Else Computer Won
    else{
        //  Update Computer Score & Display
        compScore++;
        compScorePara.innerText=compScore;
        // Change The Text in Msg
        msg.innerHTML=`You Loose! Your ${userChoice} beaten by ${compChoice}`;
        msg.style.backgroundColor="Red"; 
        msg.style.color="white"; 
    }
}

// Function that implement Main Game Logic
const playGame = (userChoice) => {
    // console.log("User Choice is ", userChoice);
    // Generate Computer Choice
    const compChoice = generateComputerChoice();
    // console.log("Computer Choice is ", compChoice);

    // Both Choice are same then Call DrawGame Function
    if (userChoice === compChoice) {
        // Draw
        drawGame();
    }
    else {
        let userWin = true;
        // User has Rock
        if (userChoice === "rock") {
            // Computer Choices are : Paper & Scissors
            userWin = compChoice === "paper" ? false : true;
        }
        // User has Paper
        else if (userChoice === "paper") {
            // Computer Choices are : Rock & Scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        // User has Scissors
        else {
            // Computer Choices are : Paper & Rock
            userWin = compChoice === "rock" ? false : true;
        }
        // Call ShowWinner function to Show who is the Winner
        showWinner(userWin,userChoice,compChoice);
    }
};

