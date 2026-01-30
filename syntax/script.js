import { muvelet,muveletLetrehoz } from "./functions.js"


const input = document.createElement('input')
const input2 = document.createElement('input')
document.body.appendChild(input)
document.body.appendChild(input2)
const div = document.createElement('div')
document.body.appendChild(div)
const button = document.createElement('button')
document.body.appendChild(button)
button.innerText = 'button'
button.addEventListener('click',function(){
    const in1value = Number(input.value)
    const in2value = Number(input2.value)
    // div.innerText = muvelet(in1value,in2value,(szam1,szam2)=>  {return szam1+szam2})//muvelet
    //függvényt meghívjuk, harmadik paraméterbr arrowfunctionnel a callback az összeadja a 2 számot
    const {result} = muvelet(in1value,in2value,muveletLetrehoz('+'))
     div.innerText = result //callback függvénynek
    //megadunk muveletletrehozt és mivel a paramétere plusz lesz, ez érvényesül -> return (a,b)=> {return a+b}
})
const fv = muveletLetrehoz('+')
console.log(fv(1,2))

