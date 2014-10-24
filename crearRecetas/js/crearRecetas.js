'use strict';
window.addEventListener("load", changeIngredientsType);

document.getElementById("option2").addEventListener("click", changeIngredientsType);
document.getElementById("option3").addEventListener("click", changeIngredientsType);
document.getElementById("option4").addEventListener("click", changeIngredientsType);



var ingredients = JSON.parse(makeCorsRequest("https://dl.dropboxusercontent.com/s/xav0qrdh44zpz7l/Ingredientes.json?dl=0") );


function changeIngredientsType(event) {

	var ingredientType = ingredients.Principal;

	if (event !== undefined){

		if (event.target.id === "option2"){ingredientType = ingredients.Principal}
			else if (event.target.id === "option3"){ingredientType = ingredients.Guarnición}
				else if (event.target.id === "option4"){ingredientType = ingredients.Salsas}
	};	

	var ingredientsClass = document.getElementsByClassName("btn-success");
	while (ingredientsClass.length > 0){
		ingredientsClass[0].remove();
	}

	
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

		label.addEventListener("click", changeIngredients.bind(this, ingredientType, key))	
	}

};

function changeIngredients(ingredientType, ingredientKey, event){
	var ingredientsClass = document.getElementsByClassName("list-group-item");
	while (ingredientsClass.length > 0){
		ingredientsClass[0].remove();
	}	

	for (var key in ingredientType[ingredientKey]){
		var container = document.getElementById("ingredientKey");

		var a = document.createElement('a');
		a.setAttribute('href','#');
		a.className = 'list-group-item';
		a.innerHTML = ingredientType[ingredientKey][key];

		container.appendChild(a)
	}
}

function drawCanvas() {
var circle_canvas = document.getElementById("canvas");
var context = circle_canvas.getContext("2d");
// Fill Style
context.fillStyle = "rgba(93,179,199,0.20)";
// Begin path
context.beginPath();
//Canvas shape
context.arc(225,225,115,0,Math.PI*2,true);
// Close path
context.closePath();
// Fill shape
context.fill();
// Draw Image function
var img = new Image();
img.src = "./images/plato.jpg";
img.onload = function() {
context.drawImage(img, 145, 145);
      };
}