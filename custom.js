document.getElementById('pin-generate-btn').addEventListener('click',function(){
    var randomNumber = Math.random() * 9000;
    var output = 1000 + Math.round(randomNumber);
    document.getElementById('ganerated-pin').value = output;
})

function display(value){
    const numbers = document.getElementById('numDisplay');
    numbers.value = numbers.value + value;
}

const generateNumber = document.getElementById('ganerated-pin').value;
const inputNumber = document.getElementById('numDisplay').value;

document.getElementById('submit').addEventListener('click', function(){
    if(generateNumber == inputNumber){
        var rightNotify = document.getElementById('rightPinNotify');
        rightNotify.style.display = "block";
    }
    
    else{
        var wrongNotify = document.getElementById('wrongPinNotify');
        wrongNotify.style.display = "block";
    }
})
