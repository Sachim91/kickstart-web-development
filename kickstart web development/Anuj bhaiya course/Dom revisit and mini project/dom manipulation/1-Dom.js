 //Get element by id

const box2 = document.getElementById('box-2');
console.log(box2);


 //get element by ttag name
const divs = document.getElementsByTagName('div');
console.log(divs);

//get element by class name

const ele = document.getElementsByClassName('box');
console.log(ele);

//finding element by quary selector
const box3 = document.querySelector('.container #box-3');
console.log(box3);

//finding element by quary selector all
const boxmultiple = document.querySelectorAll('.container div')
console.log(boxmultiple[1]);

//changing html

box2.innerHTML = "this is box";

//add or remove a class
//box2.classList.add('fancy');

//remove
box2.classList.toggle('box');