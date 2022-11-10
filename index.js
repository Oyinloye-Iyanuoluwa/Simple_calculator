const buttons = document.querySelectorAll('button');

const display = document.querySelector('.display');
let x ='';
buttons.forEach(function(button){
    button.addEventListener('click',calculate);
})

function calculate(event){
    const clickedButtonValue = event.target.value;
    console.log(event.target.value);

    if(clickedButtonValue ==='='){

        
        if(display.value !== ''){
            display.value = eval(display.value);
x='equal';


        }
    }
    else if (clickedButtonValue === 'AC'){
        display.value = "";
    }
    else if(clickedButtonValue ==='del'){
        display.value= display.value.substring(0,display.value.length-1);
    }
    
    else if(clickedButtonValue ==='%'){
        display.value=eval( display.value/100);
    }
    
    else{
        
console.log( x);
        if(x==='equal'){
            display.value = clickedButtonValue;
            x='';  
        }else{
        display.value += clickedButtonValue;}
    }
}