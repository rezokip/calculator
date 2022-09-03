function add (a,b){
  return a + b 
}

function substract (a,b){
  return a-b
}

function multiply (a,b){
  return a*b
}

function divide (a,b){
  return a/b
}


function operate(operator,a,b){
  if(operator==='+'){
    result=add(a,b)
  }
  
  else if(operator==='-'){
    result=substract(a,b)
  }
    
  else if(operator==='*'){
    result=multiply(a,b)
  }
    
  else if(operator==='/'){
     result=divide(a,b)
  }
  return result
}

let displayCont=document.querySelector('.display p')



let clearCont=document.querySelector('.clear')
let divideCont=document.querySelector('.divide')
let multiplyCont=document.querySelector('.multiply')
 
let num1Cont=document.querySelector('.one')
let num2Cont=document.querySelector('.two')
let num3Cont=document.querySelector('.three')
let substractCont=document.querySelector('.substract')
 
let num4Cont=document.querySelector('.four')
let num5Cont=document.querySelector('.five')
let num6Cont=document.querySelector('.six')
let addCont=document.querySelector('.add')
 
let num7Cont=document.querySelector('.seven')
let num8Cont=document.querySelector('.eight')
let num9Cont=document.querySelector('.nine')
let operateCont=document.querySelector('.operate')
 
let num0Cont=document.querySelector('.zero')
let commaCont=document.querySelector('.comma')

let displayValue 
let newValue = 0
let operator
let endValue = 0

function showAtDisplay (){
   displayCont.textContent+=  this.textContent
   displayValue = Number(displayCont.textContent)
   console.log(displayValue)
   return displayValue  
  }

function clearFromDisplay (){
  displayCont.textContent = ""
  //displayValue 
  newValue = 0;
  endValue = 0;
  return displayValue 
}


clearCont.addEventListener('click', clearFromDisplay)
num1Cont.addEventListener('click', showAtDisplay)
num2Cont.addEventListener('click', showAtDisplay)
num3Cont.addEventListener('click', showAtDisplay)
num4Cont.addEventListener('click', showAtDisplay)
num5Cont.addEventListener('click', showAtDisplay)
num6Cont.addEventListener('click', showAtDisplay)
num7Cont.addEventListener('click', showAtDisplay)
num8Cont.addEventListener('click', showAtDisplay)
num9Cont.addEventListener('click', showAtDisplay)
num0Cont.addEventListener('click', showAtDisplay)
commaCont.addEventListener('click', showAtDisplay)



addCont.addEventListener('click', function(){
  operator = '+'
  console.log(operator)
  newValue = displayValue
  console.log(newValue)
  displayValue = 0
  console.log(displayValue)
  endValue += newValue
  console.log(endValue)
  //newValue+=displayValue
  displayCont.textContent = ""
  //displayValue 
  return endValue
 
})


operateCont.addEventListener('click', function(){
  operate(operator, endValue, displayValue)
    console.log(operator)
    displayCont.textContent = result
    console.log(result)
  //displayCont.textContent = newValue
  //console.log(newValue)
})

