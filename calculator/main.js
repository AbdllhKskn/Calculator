let display = document.getElementById('display')

let buttons = Array.from(document.getElementsByClassName('button'))

buttons.map( button => {
    button.addEventListener('click', (e) => { // I added eventlistener every button in my array / callback function(e) 
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                display.innerText = display.innerText.slice(0, -1); //sayı sayı siler
                break;
            case '=':
                try{
                display.innerText = eval(display.innerText);  //eval = equal value cano
                }
                catch {
                    alert("Error");
                    display.innerText = '';
                    break;
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
