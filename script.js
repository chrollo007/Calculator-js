const text =document.querySelector("#text")
const text3=document.querySelector("#hold")
const text2=document.querySelector("#text2")
const result=document.querySelector("#ans")
const c=document.querySelectorAll(".btn");

let num1=parseInt(text.value)
let num2=parseInt(text.value)

c.forEach(c=>{
  c.addEventListener("click",()=>{
        if(c.textContent==="+"){
            text3.value="+"
        }
})
c.addEventListener("click",()=>{
    if(c.textContent==="-"){
        text3.value="-"
    }
})
c.addEventListener("click",()=>{
    if(c.textContent==="*"){
        text3.value="*"
    }
})
c.addEventListener("click",()=>{
    if(c.textContent==="/"){
        text3.value="/"
    }
})
c.addEventListener("click",()=>{
    if(c.textContent==="="){
        result.value=num1+c.textContent+num2;
    }
})
})
