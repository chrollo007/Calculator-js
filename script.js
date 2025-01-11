const text=document.querySelector("#text")
const ans=document.querySelector("#ans")
const clear=document.querySelector(".cancel")

const buttons=document.querySelectorAll(".btn")

let sign;
let res;
let num1;
let num2;
let op=false;
buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        const value=button.textContent;
        if(value==="="){
            return;
        }
        if(value==="+" || value==="-" || value==="*" || value==="/"){
            if(num1===undefined)return;
            sign=value;
            op=true;
            text.value+=value;
            return;
        } 
        if(!op){
        num1=num1?num1+value:value;
        text.value+=value;
        }
        else{
            num2=num2?num2+value:value;
            text.value+=value;
        }
    })   
})

const equal=document.querySelector(".btn-equal");
    equal.addEventListener("click",()=>{

        if (num2 === undefined) return; 
        calculate();

        
    })
function calculate(){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch(sign){
        case "+":
        res=num1+num2;
        break;
        case "-":
        res=num1-num2;
        break;
        case "*":
        res=num1*num2;
        break;
        case "/":
        res=num1/num2;
        break;
        default:
            res="wrong input";
            break;
    }
    
 ans.value=res;
}

clear.addEventListener("click",()=>{
    text.value="";
    ans.value="";
    num1=undefined;
    num2=undefined;
    sign=undefined;
    op=false;
})