import suma from './src/js/testing';
//import './src/js/BurgerMenu';


$(document).ready(function () {
    $('.square-block').html(suma(2, 20));
    // $('#nav').burgerMenu({
    //     translate: true,
    //     menuWidth: '50%',
    //     menuHeight: '100%',
    //     menuBorder: 'none',
    //     animateSpeed: 500,
    //     linkBorderBottom: 'none',
    //     keepButtonNextToMenu: true,
    //     overlay: '#ffffff'
    // });
});