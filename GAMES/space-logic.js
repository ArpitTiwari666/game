let stone=document.querySelector(".stone");
let paper=document.querySelector(".paper");
let scissors=document.querySelector(".scissors");
let me_score=document.querySelector("#you-num");
let oppo_score=document.querySelector("#oppo-num");

let msg=document.querySelector(".msg");



let me;

stone.addEventListener("click",()=>{
   me="stone";
   winner();
});
paper.addEventListener("click",()=>{
    me="paper";
    winner();
});
scissors.addEventListener("click",()=>{
    me="scissors";
    winner();
});

let count=0;
let anushka=0;
 let oppo;
function winner(){
    let score;
    let lis=["stone","paper","scissors"];
    let rand = Math.floor(Math.random()*lis.length);
     oppo=lis[rand];
    if(me===oppo){
       msg.innerText="Draw!";
    }
    else if(me==="stone"&&oppo==="scissors"){
       msg.innerText=`you win! - ${me} beats ${oppo}`;
       score="yes"

    }
    else if(me==="paper"&&oppo==="stone"){
       msg.innerText=`you win! - ${me} beats ${oppo}`;
       score="yes"
    }
    else if(me==="scissors"&&oppo==="paper"){
       msg.innerText=`you win! - ${me} beats ${oppo}`;
       score="yes"
    }
    else if(me==="stone"&&oppo==="paper"){
       msg.innerText=`you lose! - ${me} beats ${oppo}`;
       score="no"

    }
    else if(me==="paper"&&oppo==="scissors"){
       msg.innerText=`you lose! - ${me} beats ${oppo}`;
        score="no"

    }
    else if(me==="scissors"&&oppo==="stone"){
       msg.innerText=`you lose! - ${me} beats ${oppo}`;
        score="no"

    }

if (score==="yes"){
    count++;
    me_score.innerText=count;
}
else if(score==="no"){
    anushka++;
    oppo_score.innerText=anushka;

}
}