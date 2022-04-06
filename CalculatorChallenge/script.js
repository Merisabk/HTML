import * as DOM from './dom.js';



function updateOutput(){
    let form = document.getElementById("calc");
    let output = form.elements["z"];

    let num1 = parseInt(form.elements["x"].value);
    let num2 = parseInt(form.elements["y"].value);
    let operator = parseInt(form.elements["op"].value);

    switch(operator) {
        case add: 
        output.value = num1 + num2;
        break;
        case sub: 
        output.value = num1 - num2;
        break;
        case mul:
            output.value = num1 * num2;
            break;
        case div:
            output.value = num1 / num2;
            break;
            default: 
            break;

    }   
}
updateOutput();