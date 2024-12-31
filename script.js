function Paper(){

    let ai;
    let num = Math.random();
    num = num * 100;
    if(num>=0 && num<=33){
        ai="rock"
    }

    if(num>33 && num<=66){
        ai="paper"
    }

    if(num>66){
        ai="scissor"
    }

    const resultElement = document.getElementById('result');

    const computerElement = document.getElementById('computer');

    if(ai=="rock"){

        resultElement.style.color = 'greenyellow';
        computerElement.style.color = 'greenyellow';

        document.getElementById('computer').innerHTML = "Computer has choosen: " + ai;

        document.getElementById('result').innerHTML="You Won"
        
    }

    if(ai=="paper"){

        resultElement.style.color = 'white';
        computerElement.style.color = 'white';

        document.getElementById('computer').innerHTML = "Computer has choosen: " + ai;

        document.getElementById('result').innerHTML="Game Drawn"
        
    }

    if(ai=="scissor"){

        resultElement.style.color = 'red';
        computerElement.style.color = 'red';

        document.getElementById('computer').innerHTML = "Computer has choosen: " + ai;

        document.getElementById('result').innerHTML="Computer won"
    }
}


function Scissor(){
    
    let ai;
    let num = Math.random();
    num = num * 100;
    if(num>=0 && num<=33){
        ai="rock"
    }

    if(num>33 && num<=66){
        ai="paper"
    }

    if(num>66){
        ai="scissor"
    }

    const resultElement = document.getElementById('result');

    const computerElement = document.getElementById('computer');

    if(ai=="rock"){

        resultElement.style.color = 'red';
        computerElement.style.color = 'red';

        document.getElementById('computer').innerHTML = "Computer has choosen: " + ai;

        document.getElementById('result').innerHTML="Computer Won"

        
    }

    if(ai=="paper"){

        resultElement.style.color = 'greenyellow';
        computerElement.style.color = 'greenyellow';

        document.getElementById('computer').innerHTML = "Computer has choosen: " + ai;

        document.getElementById('result').innerHTML="You won"
        
    }

    if(ai=="scissor"){

        resultElement.style.color = 'white';
        computerElement.style.color = 'white';

        document.getElementById('computer').innerHTML = "Computer has choosen: " + ai;

        document.getElementById('result').innerHTML="Game Drawn"
    }
}

function Rock(){
    
    let ai;
    let num = Math.random();
    num = num * 100;
    if(num>=0 && num<=33){
        ai="rock"
    }

    if(num>33 && num<=66){
        ai="paper"
    }

    if(num>66){
        ai="scissor"
    }

    const resultElement = document.getElementById('result');

    const computerElement = document.getElementById('computer');

    if(ai=="rock"){

        resultElement.style.color = 'white';
        computerElement.style.color = 'white';

        document.getElementById('computer').innerHTML = "Computer has choosen: " + ai;

        document.getElementById('result').innerHTML="Game drawn"

        
    }

    if(ai=="paper"){

        resultElement.style.color = 'red';
        computerElement.style.color = 'red';

        document.getElementById('computer').innerHTML = "Computer has choosen: " + ai;

        document.getElementById('result').innerHTML="Computer won"
        
    }

    if(ai=="scissor"){

        resultElement.style.color = 'greenyellow';
        computerElement.style.color = 'greenyellow';

        document.getElementById('computer').innerHTML = "Computer has choosen: " + ai;

        document.getElementById('result').innerHTML="You won"
    }
}