'use strict';

var ingredients = JSON.parse(makeCorsRequest("https://dl.dropboxusercontent.com/s/xav0qrdh44zpz7l/Ingredientes.json?dl=0") );

window.addEventListener("load", changeIngredientsType);

document.getElementById("option2").addEventListener("click", changeIngredientsType);
document.getElementById("option3").addEventListener("click", changeIngredientsType);
document.getElementById("option4").addEventListener("click", changeIngredientsType);




