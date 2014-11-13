'use strict';
//Drag N Drop event functions

function handleDragStart(dishIngredient, event) {
  // this / event.target is the current hover target.
  dishIngredient.classList.add('dishInnOver');

  //event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', event.target.innerHTML);
}

function handleDragEnd(dishIngredient, event) {
  dishIngredient.classList.remove('dishInnOver');  // this / e.target is previous target element.
}


function handleDragDrop(dishIngredient,event) {
    event.target.innerHTML = event.dataTransfer.getData('text/html') + ' <img src="http://lorempixel.com/100/100/food/" /> ';
    document.getElementById(dishIngredient).setAttribute("value", event.dataTransfer.getData('text/html'))
}
//Function to cancel the dragover and dragenter event
function cancel(event) {
  if (event.preventDefault) {
    event.preventDefault();
  }
  return false;
}