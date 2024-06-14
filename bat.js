let user=document.getElementById('user');
let computer=document.getElementById('computer');
let result=document.getElementById('result');

function computerchoices(){
    let computerchoice;
    let val=Math.round(Math.random()*3);
    if(val>0&&val<=1){
      computerchoice='bat';
    }
   else if(val>1&&val<=2){
    computerchoice='ball';
   }
    else{
        computerchoice='stump';
    }
    return computerchoice;
}
 let msg;
function batresult(){
    let computerchoice =computerchoices();
    if(computerchoice=='bat'){
        msg='match is tie';
    }else if(computerchoice=='ball'){
        msg='user win';
    }else{
        msg='computer win';
    }
user.innerText='user choice = bat';
computer.innerText=`computer choice = ${computerchoice}`;
result.innerText=`result == ${msg}`;
}
function ballresult(){
    let computerchoice =computerchoices();

    if(computerchoice=='bat'){
        msg='computer win';
     }else if(computerchoice=='ball'){
        msg='match is tie';
     }else{
        msg='user win';
     }
     user.innerText='user choice = ball';
     computer.innerText=`computer choice = ${computerchoice}`;
     result.innerText=`result == ${msg}`;
         
}
function stumpresult(){
    let computerchoice =computerchoices();
    if(computerchoice=='bat'){
        msg='user win';
     }else if(computerchoice=='ball'){
        msg='computer win';
     }else{
        msg='match is tie';
     }
     user.innerText='user choice = stump';
     computer.innerText=`computer choice = ${computerchoice}`;
     result.innerText=`result == ${msg}`;
     
}
