let userscore = 0;
let computerscore = 0;
const choices = document.querySelectorAll(".choice");
const msg1 = document.querySelector("#Message")
const userscore1=document.querySelector("#userscore")
const compscore1=document.querySelector("#computerscore")




const showingwinner = (userwin) => {
  if (userwin) {
    // console.log("youwin");
   userscore++;
   userscore1.innerText=userscore
    msg1.innerText=` congratulations \n You win`
    msg1.style.backgroundColor="green"
} else {
    computerscore++;
    compscore1.innerText=computerscore
    // console.log("you loss");
    msg1.innerText="You lost";
    msg1.style.backgroundColor="red"
    
}
};

const gencompchoice = () => {
    const option = ["rock", "paper", "scissor"];
    let rannumber = Math.floor(Math.random() * 3);
    return option[rannumber];
};
const draw = () => {
    msg1.innerText="draw game";
    msg1.style.backgroundColor="blue"
  console.log("Game Draw");
};

const playgame = (userchoice) => {
  const compchoice = gencompchoice();
  // console.log("user",userchoice)
  // console.log("comp",compchoice)
  if (userchoice === compchoice) {
    //draw
    draw();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
        userwin = userwin =compchoice === "scissor" ? false : true;
    } else {
        userwin =compchoice === "rock" ? false : true;
    }
    showingwinner(userwin);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    // console.log("hello",userchoice)
    playgame(userchoice);
  });
});
