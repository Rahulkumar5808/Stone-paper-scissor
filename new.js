let userScore=0;
let compScore=0;


const you=document.querySelector("#you");
const compS=document.querySelector("#comp");


const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");


const compChoice=()=>{
    const option=["rock","scissors","paper"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame=()=>{
    msg.innerText="Game was draw. Try again!";
    msg.style.backgroundColor="#081b31 ";
}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        you.innerText=userScore;
        msg.innerText="You win";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compS.innerText=compScore;
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }
}
const playGame=(id)=>{
    console.log("user choice",id);
    const comp= compChoice();
    console.log("computer choice",comp);

    if(id===comp){
        drawGame();
    }
    else{
        let userWin=true;
        if (id==="rock"){
            userWin= comp==="paper"?false:true;
        }
        else if (id==="paper"){
            userWin= comp==="scissors"?false:true;
        }
        else  if (id==="scissors"){
            userWin= comp==="rock"?false:true;
        }
        showWinner(userWin);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const id=choice.getAttribute("id");
        playGame(id);
    })
    
});
