//pin generate btn event handler
document.getElementById('pin-generate-btn').addEventListener('click',function(){
    var randomNumber = Math.random() * 9000;
    var output = 1000 + Math.round(randomNumber);
    document.getElementById('ganerated-pin').value = output;
})


//clear and back space btn event handler
document.getElementById('cal-main').addEventListener('click', function(event){
    const num = event.target.innerText;
    const typedNumber = document.getElementById('numDisplay');
    const preTypedNumber = typedNumber.value;

    if(num == '<'){
        const digit = preTypedNumber.split('');
        digit.pop();
        const remainingDigit = digit.join('');
        typedNumber.value = remainingDigit;
    }

    else if(num == "C"){
        typedNumber.value = '';
    }

    else if(num == "Submit"){
        
    }
    
    
})

// display numbers 
function display(value){
    const numbers = document.getElementById('numDisplay');
    numbers.value = numbers.value + value;
}


//submit btn event handler
document.getElementById('cal-main').addEventListener('click', function(event){
    
    var attempt = 3;
    const btn = event.target.innerText;
    const generateNumber = document.getElementById('ganerated-pin').value;
    const inputNumber = document.getElementById('numDisplay').value;
    const rightNotify = document.getElementById('rightPinNotify');
    const wrongNotify = document.getElementById('wrongPinNotify');
    const attemptLeft = document.getElementById('attemtCount');

    if (btn == "Submit"){
        if(generateNumber == inputNumber){   
            rightNotify.style.display = "block";  
            wrongNotify.style.display = "none";
            
        }
        
        else{
            rightNotify.style.display = "none";
            wrongNotify.style.display = "block";
            attempt --;          
            console.log(attempt); 
            if (attempt == 0) {
                document.getElementById('submit').disabled = true;
                return false;
            }
        }
    }

    
})
