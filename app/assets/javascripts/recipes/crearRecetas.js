'use strict';

//var ingredients = JSON.parse(makeCorsRequest("https://dl.dropboxusercontent.com/s/xav0qrdh44zpz7l/Ingredientes.json?dl=0") );

window.addEventListener("load", triggerIngredient);
window.addEventListener("load", showRecipe);



document.getElementById("option2").addEventListener("click", triggerIngredient);
document.getElementById("option3").addEventListener("click", triggerIngredient);
document.getElementById("option4").addEventListener("click", triggerIngredient);
document.getElementById("saveButton").addEventListener("click", saveRecipe);
document.getElementById("saveButton").addEventListener("click", resetFields);
document.getElementById("saveAndSendButton").addEventListener("click", saveRecipe);
document.getElementById("saveAndSendButton").addEventListener("click", showSend);
document.getElementById("noSaveAndSendButton").addEventListener("click", showSend);

document.getElementById("anotherRecipe").addEventListener("click", showRecipe);





