let userScore = 0;
let compScore = 0;


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const drawGame = ()=>{
    console.log("Game was a Draw");
    msg.innerText = "Game was Draw play again";
    msg.style.backgroundColor = "yellow"
    msg.style.color = "#665687"
}
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win");
        msg.innerText = `You win! Your ${userChoice} beats Computers ${compChoice}`;
        msg.style.backgroundColor = "green"
        msg.style.color = "white";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("Computer Wins");
        msg.innerText = `Computer Wins Computers ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red"
        msg.style.color = "#665687"

    }
}
const genCompChoice = () => {
    const options = ["rock","paper", "scicssors"];
    const randIdx= Math.floor(Math.random() * 3);
    const compChoice = options[randIdx];
    return compChoice; 
}

const playGame = (userChoice) =>{
    console.log("user's Choice = ", userChoice)
    const compChoice = genCompChoice();
    console.log("Computer's choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice ==="scissor" ? false : true;
        }
        else {
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice) =>{
    choice.addEventListener("click" ,()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice)
    });
});