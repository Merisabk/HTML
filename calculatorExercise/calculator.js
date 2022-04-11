`use strict`
import * as DOM from './dom.js';

function result(){
    let num1 = DOM.inputOne.value;
    let num2 = DOM.inputTwo.value;
    let output = DOM.listOutput.value;

switch(operator) {
    case 1: 
    output.value = num1 + num2;
    break;
    case 2: 
    output.value = num1 - num2;
    break;
    case 3:
        output.value = num1 * num2;
        break;
    case 4:
        output.value = num1 / num2;
        break;
        default: 
        break;
}   

}