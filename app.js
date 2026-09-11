console.log("JS FILE CONNECTED");
let GameSeq=[];
let userSeq=[];
let color=["red","yellow","green","purple"];

let started=false;
let level=0;

 let h2=document.querySelector("h2");

document.addEventListener("keydown",function(){
    if(started==false){
    console.log("Game started");
     started=true;
     levelup();
    }
   
})
function buttonflash(btns){
    btns.classList.add("flash");
    setTimeout(function(){
        btns.classList.remove("flash");
    },250);

}

function userbuttonflash(btns){
    btns.classList.add("userflash");
    setTimeout(function(){
        btns.classList.remove("userflash");
    },250);

}


function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`your level is ${level}`;
     let randomnum=Math.floor(Math.random()*4);
    let colorarr=color[randomnum];
    
    let btn=document.querySelector(`.${colorarr}`);
    GameSeq.push(btn.id);
    console.log(GameSeq);

     buttonflash(btn);

}
function checkans(btns){
    // console.log("your level is :" ,level );
    let idx=btns;
    if(userSeq[idx]===GameSeq[idx]){
       if(userSeq.length==GameSeq.length ){
        setTimeout(levelup,1000);
       }
       else{

       }
        
    }
    else{
        h2.innerHTML =`Game Over !!  your level is <b> ${level} <b> <br> Please press any key to start the game.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white"},1000);
         reset();
    }
   
}

function btnpress(){
   let  btn=this;
    userbuttonflash(btn);
   let usercolor=btn.getAttribute("id");
   userSeq.push(usercolor);
   console.log(userSeq);
   checkans(userSeq.length-1);

}

let btns=document.querySelectorAll(".btn");
for( let btn of btns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    GameSeq=[];
    userSeq=[];
    level=0;

}

