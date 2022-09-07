
function add (a,b){
// create mathamatical Functions

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
// function to operate based on operator

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


// create variables
let displayValue = ""
let newValue = ""
let operator
let clickedCalculate
let clickedComma
let result 



// assign js variables to html elements
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
let calculateCont=document.querySelector('.operate')
 
let num0Cont=document.querySelector('.zero')
let commaCont=document.querySelector('.comma')



function showAtDisplay (){
// Function to show the nums and comma button  

  // resetting values if already operated
  if(clickedCalculate ===true){
    displayValue = ""
    newValue = ""
  }

  // when starting without a displayValue (done operation or assigned operator) the value should be the clicked button
  if(displayValue===""){      
    displayCont.textContent = this.textContent
    console.log('displayCont', displayCont.textContent)
    displayValue = displayCont.textContent
  }

  // when already clicked a button, add the value of the next button to the display
    else if (displayValue !="" ){
    displayCont.textContent += this.textContent
    console.log('displayCont', displayCont.textContent)
    displayValue = displayCont.textContent
  }
  
  // reset the clickedCalculate var
    clickedCalculate = false  
  }



function clearFromDisplay (){
// function for the clear button    
  displayCont.textContent = ""
  newValue = "";
  displayValue = ""; 
  result = ""
  clickedCalculate = false
}



function saveValuesAndOperate () {
// function for the operator (+,-,*,/)  

  // if dont have a displayvalue (cleared, started new or clicked already an operator...) then do nothing (..dont save or operate)
  if(displayValue===""){
    return
  }

  // after clicking the calculate button, displayValue needs to be the newvalue and newValue reset for the next if statement to work
  if(clickedCalculate ===true){
    displayValue = newValue
    newValue = ""
  }

  // clicking the first time or when there is no new value (reset or calculated), the new value becomes displayValue
  if(newValue==="" ){
   newValue = Number(displayValue) 
   displayCont.textContent = newValue
  }

  // clicking after there is a new value, i can operate..
  else {
    operate(operator, newValue, Number(displayValue))
    newValue=result
    displayCont.textContent = newValue
  }

  // saving operator and clearing the displayValue at last place to not have issues with the if statements
    // clearing displayValue for the If statements of the showAtDisplay function (Check if displayValue exist, to show or add textcontent)
    // reseting the clickedCalculate
  operator = this.textContent
  displayValue = ""
  clickedCalculate = false
}


// assigning the functions to the DOM variables  

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

divideCont.addEventListener('click', saveValuesAndOperate)
multiplyCont.addEventListener('click', saveValuesAndOperate)
addCont.addEventListener('click', saveValuesAndOperate)
substractCont.addEventListener('click', saveValuesAndOperate)




calculateCont.addEventListener('click', function(){
// After calculate gets clicked assign the clickedCalculat to true (for further functions to know it got clicked)
// operate and change the result to new Value, so after pressing multiple times it operates further

  clickedCalculate = true
  operate(operator, Number(newValue), Number(displayValue)) 
    displayCont.textContent = result  
    console.log(displayCont.textContent)
    newValue = result  
    console.log(newValue)
})

