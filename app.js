let game_seq=[];
let user_seq=[];
let started=false;
let level=0;
let btns=["red","yellow","green","purple"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game has started!");
        started=true;
        levelUp();
    }
})
function btnflash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);

}
function levelUp(){
    user_seq=[];
    level++;
h2.innerText=`Level ${level}`;
let randomIdx=Math.floor(Math.random()*3);
let randomcolor=btns[randomIdx];
let randombtn=document.querySelector(`.${randomcolor}`);
// console.log(randomIdx);
// console.log(randomcolor);
// console.log(randombtn);
game_seq.push(randomcolor);
console.log(game_seq);
btnflash(randombtn);
}
function checklevel(idx){
    // console.log(`The current level is ${level}`);
    if(game_seq[idx]==user_seq[idx]){
       if(game_seq.length==user_seq.length){
        setTimeout(levelUp,1000);
       }
    }else{
        h2.innerHTML=`Game over! Your score is <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }

}
function btnpress(){
    // console.log(this);
    btnflash(this);
    usercolor=this.getAttribute("id");
    user_seq.push(usercolor);
    checklevel(user_seq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    user_seq=[];
    game_seq=[];
    level=0;

}