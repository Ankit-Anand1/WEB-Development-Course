let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },1100);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },1300);
}
 

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx]
    let randbtn = document.querySelector(`.${randColor}`);
    //random btn choose
    gameseq.push(randColor);
    gameFlash(randbtn);
}

function checkAns(idx){
    //console.log("current level: ", level)
   
    if(userseq[idx] === gameseq[idx]){
       if(userseq.length == gameseq.length){
        setTimeout(levelUp,1000);
       }
    } else{
        h2.innerHTML = `Game Over! Your Score Was <b>${level}</b> Press any key to start.`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor = "#c8d3f6";
        }, 150);
    }
}

function btnPress (){
 let btn = this;
 userFlash(btn);

 usercolor = btn.getAttribute("id");
 console.log(usercolor);
 userseq.push(usercolor);

 checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}


function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}