'use strict';


function triggerIngredient(event){
	var ingredientType = "Principal";
	var dishIngredient = document.getElementsByClassName("platoPrincipal")[0];
	if (event !== undefined){

		if (event.target.id === "option2"){
			ingredientType = "Principal";
			dishIngredient = document.getElementsByClassName("platoPrincipal")[0];
		}
			else if (event.target.id === "option3"){
				ingredientType = "Guarnición";
				dishIngredient = document.getElementsByClassName("guarnicion")[0];
			}
				else if (event.target.id === "option4"){
					ingredientType = "Salsas";
					dishIngredient = document.getElementsByClassName("salsas")[0];
				}
	};
	$.post( "/ingredients", ingredientType, function(data){
		changeIngredientsType(data, dishIngredient, ingredientType)
	})			
}

function changeIngredientsType(ingredients, dishIngredient, ingredientType) {

	deleteIngredients();

	var ingredientsClass = document.getElementsByClassName("btn-success");
	while (ingredientsClass.length > 0){
		ingredientsClass[0].remove();
	}

		dishIngredient.addEventListener('dragover', cancel);
		dishIngredient.addEventListener('dragenter', cancel); 	
		dishIngredient.addEventListener('drop', handleDragDrop.bind(this, ingredientType), false);

	
	for (var key in ingredients){
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

		label.addEventListener("click", changeIngredients.bind(this, ingredients, key,dishIngredient));
		
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
  		//a.addEventListener('drop', handleDragDrop, false);

	}
}

function deleteIngredients(){
	var ingredientsClass = document.getElementsByClassName("list-group-item");
	while (ingredientsClass.length > 0){
		ingredientsClass[0].remove();
	}	
}
