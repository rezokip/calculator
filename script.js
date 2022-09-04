let displayValue = ""
let newValue = ""
let operator


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
    
  else if(operator==='x'){
    result=multiply(a,b)
  }
    
  else if(operator==='÷'){
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


function showAtDisplay (){
  console.log('displayvalue',displayValue)
  console.log(typeof displayValue)
  
  if(displayValue !=""){
    displayCont.textContent += this.textContent
    console.log('displayCont', displayCont.textContent)
    displayValue = displayCont.textContent
  }

  
  
  if(displayValue===""){
    displayCont.textContent = this.textContent
    console.log('displayCont', displayCont.textContent)
    displayValue = displayCont.textContent
  }
  
 



  console.log('newvalue',newValue)

  console.log('displayvalue',displayValue)
  console.log(typeof displayValue)

 
    
   
  
  

  
   
  
  

  }

function clearFromDisplay (){
  displayCont.textContent = ""
  newValue = "";
  
  
 
}


function saveValuesAndOperate () {
  // if i dont have a display value (cleared, started new or clicked already an operator...) then do nothing (..dont save or operate)
  if(displayValue===""){
    return
  }

  // clicking the first time, there is no new value, so new value becomes displayValue
  if(newValue===""){
   newValue = Number(displayValue) 
   displayCont.textContent = newValue
  }

  // clicking after i have a new value, i can operate..
  else {
    operate(operator, newValue, Number(displayValue))
    newValue=result
    displayCont.textContent = newValue
  }

  // saving operator and clearing the displayValue at last place to not have issues with the if statements
    // 
  operator = this.textContent
  console.log(operator)
  console.log('newValue', newValue)
  displayValue = ""
  console.log('displayvalue', displayValue)

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

let result = ""

divideCont.addEventListener('click', saveValuesAndOperate)
multiplyCont.addEventListener('click', saveValuesAndOperate)
addCont.addEventListener('click', saveValuesAndOperate)
substractCont.addEventListener('click', saveValuesAndOperate)






/*function(){

  operator = this.textContent
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
*/

operateCont.addEventListener('click', function(){
 

  operate(operator, newValue, Number(displayValue))
    console.log(operator)
   
    displayCont.textContent = result
    newValue = result
    console.log(result)
    

    
    console.log('displayvalue',displayValue)    
    console.log('newValue', newValue)
  //displayCont.textContent = newValue
  //console.log(newValue)
})

