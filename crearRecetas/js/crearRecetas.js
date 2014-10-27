'use strict';
window.addEventListener("load", changeIngredientsType);

document.getElementById("option2").addEventListener("click", changeIngredientsType);
document.getElementById("option3").addEventListener("click", changeIngredientsType);
document.getElementById("option4").addEventListener("click", changeIngredientsType);



var ingredients = JSON.parse(makeCorsRequest("https://dl.dropboxusercontent.com/s/xav0qrdh44zpz7l/Ingredientes.json?dl=0") );


function changeIngredientsType(event) {

	deleteIngredients();

	var ingredientType = ingredients.Principal;
	var dishIngredient = document.getElementsByClassName("platoPrincipal")[0];
	if (event !== undefined){

		if (event.target.id === "option2"){
			ingredientType = ingredients.Principal;
			dishIngredient = document.getElementsByClassName("platoPrincipal")[0];
		}
			else if (event.target.id === "option3"){
				ingredientType = ingredients.Guarnición;
				dishIngredient = document.getElementsByClassName("guarnicion")[0];
			}
				else if (event.target.id === "option4"){
					ingredientType = ingredients.Salsas;
					dishIngredient = document.getElementsByClassName("salsas")[0];
				}
	};	

	var ingredientsClass = document.getElementsByClassName("btn-success");
	while (ingredientsClass.length > 0){
		ingredientsClass[0].remove();
	}

		dishIngredient.addEventListener('dragover', cancel);
		dishIngredient.addEventListener('dragenter', cancel); 	
		dishIngredient.addEventListener('drop', handleDragDrop, false);

	
	for (var key in ingredientType){
		var container = document.getElementById("ingredientType");

		var label = document.createElement('label');
		label.className = 'btn btn-success';
		var input = document.createElement('input');
		input.setAttribute('type','radio');
		input.setAttribute('name','options');
		label.setAttribute('id', key)
		label.innerHTML = key;

		label.appendChild(input);	
		container.appendChild(label);

		label.addEventListener("click", changeIngredients.bind(this, ingredientType, key,dishIngredient));
		
	}

};

function changeIngredients(ingredientType, ingredientKey, dishIngredient, event){
	deleteIngredients();

	for (var key in ingredientType[ingredientKey]){
		var container = document.getElementById("ingredientKey");

		var a = document.createElement('a');
		a.setAttribute('href','#');
		a.className = 'list-group-item';
		a.innerHTML = ingredientType[ingredientKey][key];

		container.appendChild(a);

		a.addEventListener('dragstart', handleDragStart.bind(this,dishIngredient), false);
  		a.addEventListener('dragend', handleDragEnd.bind(this,dishIngredient), false);	
  		a.addEventListener('drop', handleDragDrop, false);

	}
}

function deleteIngredients(){
	var ingredientsClass = document.getElementsByClassName("list-group-item");
	while (ingredientsClass.length > 0){
		ingredientsClass[0].remove();
	}	
}


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


function handleDragDrop(event) {
    event.target.innerHTML = event.dataTransfer.getData('text/html');
}
//Function to cancel the dragover and dragenter event
function cancel(event) {
  if (event.preventDefault) {
    event.preventDefault();
  }
  return false;
}