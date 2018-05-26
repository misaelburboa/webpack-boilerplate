import suma from './src/js/testing';
//import './src/js/BurgerMenu';
import { openNav, closeNav } from './src/js/BurgerMenu';

const globalFunctions = [
    openNav,
    closeNav
]

//pass the functions to the global object in order to make it available for html events i.e: onclick=functionName()
globalFunctions.forEach((fn) => {
    window[fn.name] = fn;
});

$(document).ready(function () {
    $('.square-block').html(suma(2, 20));
});