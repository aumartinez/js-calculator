
let keys = document.getElementsByClassName('cal-keys');

let newNumb = 0;
let prevNumb = 0;
let operation = null;
let operator = false;
let computed = false;

function run(){        
    addEventListenerToList(keys, 'click', mouseAction);    
}

function addEventListenerToList(list, evt, func){
    for (let i = 0, len = list.length; i < len; i++){
      list[i].addEventListener(evt, func, false);
    }
}

function mouseAction(evt){
    //console.log("Key pressed");    
    let display = document.getElementById('cal-display');
    
    let key = evt.target;
    let action = key.dataset.action;
    let keyContent = key.textContent.replace(/\s+/g,'');
    let displayedNumb = display.textContent.replace(/\s+/g,'');       
    
    if(!action && !operator){
        //console.log("Number pressed");
        if(displayedNumb === '0'){
           display.textContent = keyContent; 
           prevNumb = 0;
        }
        
        else{
            if(computed){
                displayedNumb = '';
            }
            display.textContent = displayedNumb + keyContent;            
        }
        newNumb = '';
    }
    else if(!action && operator){        
        display.textContent = newNumb + keyContent;
        newNumb = display.textContent.replace(/\s+/g,'');        
    }
    
    switch(action){
        case 'add':
            operation = action; 
             if(!operator){
                operator = true;            
                prevNumb = displayedNumb;
            }
            else{                                
                prevNumb = parseFloat(prevNumb);
                newNumb = parseFloat(displayedNumb); 
                display.textContent = calculate(prevNumb, operation, newNumb);                        
            }
            newNumb = ''; 
            break;
            
        case 'subtract':
            operation = action; 
            if(!operator){
                operator = true;            
                prevNumb = displayedNumb;
            }
            else{
                prevNumb = parseFloat(prevNumb);
                newNumb = parseFloat(displayedNumb); 
                display.textContent = calculate(prevNumb, operation, newNumb);
            }            
            newNumb = '';
            break;
            
        case 'multiply':
            operation = action; 
            if(!operator){
                operator = true;            
                prevNumb = displayedNumb;
            }
            else{
                prevNumb = parseFloat(prevNumb);
                newNumb = parseFloat(displayedNumb); 
                display.textContent = calculate(prevNumb, operation, newNumb);
            }      
            newNumb = '';
            break;
            
        case 'divide':
            operation = action; 
            if(!operator){
                operator = true;            
                prevNumb = displayedNumb;
            }
            else{
                prevNumb = parseFloat(prevNumb);
                newNumb = parseFloat(displayedNumb); 
                display.textContent = calculate(prevNumb, operation, newNumb);
            }    
            newNumb = '';
            break;
        
        case 'decimal':            
            let getNumb =  display[0].textContent;
            let hasDecimal = getNumb.match(/\./);                       
            
            if(!hasDecimal){
                displayedNumb += '.';    
                display.textContent = displayedNumb;
                newNumb = displayedNumb;
            }
            break;
            
        case 'clear':
            prevNumb = 0;
            newNumb = 0;
            operator = false;
            computed = false;
            display.textContent = '0';            
            break;
        
        case 'equals':
            if(prevNumb !== 0){
              prevNumb = parseFloat(prevNumb);
              newNumb = parseFloat(displayedNumb);            
              display.textContent = calculate(prevNumb, operation, newNumb);
              operator = false;
              computed = true;
              newNumb = '';
            }      
            break;
    }
}

function calculate(firstVal, operation, secondVal){
    let result = '';    
    
    switch(operation){
        case 'add':
            result = firstVal + secondVal;
            break;
            
        case 'subtract':
            result = firstVal - secondVal;
            break;
            
        case 'multiply':
            result = firstVal * secondVal;
            break;
            
        case 'divide':
            result = firstVal / secondVal;
            break;
    }
        
    return result;
    //console.log("Print result");
}

window.onload = run;
