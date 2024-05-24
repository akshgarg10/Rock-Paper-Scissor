let one = document.querySelector("#one"); //rock
let two = document.querySelector("#two") //paper
let three = document.querySelector("#three") //scissor

let name = prompt("Enter your name : ");
let userName = document.querySelector("#user-name-box");
userName.innerText = `${name} Score:`

one.addEventListener("click", () => {
    userValue = 1;
    // console.log(`It's Rock and user value is ${userValue}`);
    answerFn(userValue);
})
two.addEventListener("click", () => {
    userValue = 2;
    // console.log(`It's Paper and user value is ${userValue}`);
    answerFn(userValue);
});
three.addEventListener("click", () => {
    userValue = 3;
    // console.log(`It's Scissors user value is ${userValue}`);
    answerFn(userValue);
});

// Main logic
const answerFn = (userValue) => {

    let userScore = document.querySelector("#user-score-one");
    let computerScore = document.querySelector("#computer-score-two");
    // let userName = document.querySelector("#user-name-box");

    let reason = document.querySelector("#reason");
    let computerArray = [1,2,3];
    let computerArrayMeaning =["Rock", "Paper", "Scissor"]
    //making sure that both userValue and computerAnswer are not equal
    let computerAnswer = computerArray[Math.floor(Math.random()*computerArray.length)];// randome value from the array
    while(userValue === computerAnswer){
        computerAnswer = computerArray[Math.floor(Math.random()*computerArray.length)]; //random value from the array
    }
    console.log(`Value from computer is ${computerArrayMeaning[computerAnswer-1]} and value from user is ${computerArrayMeaning[userValue-1]}`);

    // condition if computer wins
    if(userValue===1 && computerAnswer ===2 || userValue===3 && computerAnswer===1 || userValue===2 && computerAnswer===3){
        console.log("Computer wins");
        computerScore.innerText++; // update computer score

        reason.innerText = `Computer wins because ${computerArrayMeaning[computerAnswer-1]} beats ${computerArrayMeaning[userValue-1]}`;
        reason.style.backgroundColor="red";
    }
    // user wins
    else{
        console.log("User wins");
        userScore.innerText++; // update user score
        
        reason.innerText = `${name} wins because ${computerArrayMeaning[userValue-1]} beats ${computerArrayMeaning[computerAnswer-1]}`;
        reason.style.backgroundColor="green";
    }
}