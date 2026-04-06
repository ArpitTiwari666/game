
let input = document.querySelector(".in1");
let btn = document.querySelector(".who");
let randnum=Math.floor(Math.random()*101)+1;

btn.addEventListener("click", (e) => {
    e.preventDefault();  

    let num = Number(input.value);
    console.log(num);
    if(num===randnum){
        console.log("succes!");
         document.querySelector(".msg").innerText="succes!";
         document.querySelector(".msg").style.backgroundColor="#00470B";
         randnum=Math.floor(Math.random()*101)+1;
    }else if (num > randnum) {
    console.log("Too high!");
     document.querySelector(".msg").innerText="Too high!";
     document.querySelector(".msg").style.backgroundColor="#470000";
    } else {
    console.log("Too low!");
     document.querySelector(".msg").innerText="Too low!";
     document.querySelector(".msg").style.backgroundColor="#A30000";
    }
    input.value="";
});