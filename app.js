let userscore=0;
let computerscore=0;


const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userscorepara = document.querySelector("#user-score");
const computerscorepara = document.querySelector("#computer-score");


const genComputerChoice = () =>{
    const options =["rock","paper","scissor"];
    const random = Math.floor(Math.random()*3); 
    return options[random];
    //rock,paper,scissor
};

const showWinner = (userWin,userchoice,computerchoice) =>{
    if(userWin){
        userscore++;
        userscorepara.innerText =userscore;
        // console.log("You Win");

        msg.innerText = `You Win! Your ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerscore++;
        computerscorepara.innerText=computerscore;
        //console.log("You lose");
        msg.innerText = `You Lose! ${computerchoice} beats Your  ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = ()=>{ 
   //console.log("game was draw."); 
   msg.innerText = " Game was Draw. Play again";
   msg.style.backgroundColor = "blue";
}

const playGame = (userchoice)=>{
console.log("userchoice =",userchoice);
//Generate computer choice
const computerchoice = genComputerChoice();
console.log("computer choice=",computerchoice);
if(userchoice===computerchoice){
    //Draw Game
    drawGame();
}else{
  let userWin = true ;
   if(userchoice=== "rock"){
    //scissor,paper
    userWin = computerchoice === "paper" ? false : true;

   }
   else if(userchoice === "paper"){
    //scissor.rock
    userWin = computerchoice === "scissor" ? false : true;
   }
   else{
    //rock,paper
    userWin = computerchoice === "rock" ? false : true;
   }
   showWinner(userWin,userchoice,computerchoice);
}

};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
    //  console.log("choice was clicked",userchoice);
     playGame(userchoice);   
    });

});