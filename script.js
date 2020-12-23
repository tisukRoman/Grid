"use strict";

//DOM
let body = document.querySelector('body');
let cont1 = document.querySelector('.first_content');
let cont2 = document.querySelector('.twitter');
let cont3 = document.querySelector('footer');
let button = document.querySelector('.visit_button');
let parag = document.querySelectorAll('p');
let heads = document.querySelectorAll('h2');

let scrollButt = document.querySelectorAll('.button_scroll');
let twitter = document.querySelector('.twitt_wrap');
let facebook = document.querySelector('.face_wrap');
let myPage = document.querySelector('.my_wrap');
//DOM ^

//night-mode 
function setBlack(item){
    item.classList.toggle("setBlack");
}
function setWhite(item){
    item.forEach(function(elem){
        elem.classList.toggle("setWhite");
    });
}
button.addEventListener('click', function(){
    setBlack(body);
    setBlack(cont1);
    setBlack(cont2);
    setBlack(cont3);
    setWhite(parag);
    setWhite(heads);
});
//night mode ^


scrollButt[1].addEventListener('click', function(){
    facebook.style.display = 'flex';
    twitter.style.display = 'none';
    myPage.style.display = 'none';
});
scrollButt[0].addEventListener('click', function(){
    facebook.style.display = 'none';
    twitter.style.display = 'flex';
    myPage.style.display = 'none';
});
scrollButt[2].addEventListener('click', function(){
    facebook.style.display = 'none';
    twitter.style.display = 'none';
    myPage.style.display = 'flex';
});