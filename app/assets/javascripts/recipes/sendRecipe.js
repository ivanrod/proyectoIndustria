'use strict';
//Sends the recipe data to the server

var jsonRecipe = {
	"title": document.getElementById("recipeTitle").value,
	"recipeType": document.getElementById("recipeType").value,
	"img": "",
	"description": document.getElementById("recipeDescription").value,
	"ingredients": 
		[{
			"name": document.getElementById("Principal").value,
			"met": document.getElementById("disabledSelect1").value,
			"dishType": "Principal"
		},{
			"name": document.getElementById("Guarnición").value,
			"met": document.getElementById("disabledSelect2").value,
			"dishType": "Guarnición"
		},{
			"name": document.getElementById("Salsas").value,
			"met": document.getElementById("disabledSelect3").value,
			"dishType": "Salsas"
		}]
}

function saveRecipe(){
	$.post( "/sendIngredients", JSON.stringify(jsonRecipe), createAlert())	
}

function createAlert(){
	var section = document.getElementsByClassName("dataSection")[0];
	var div = document.createElement("div");
	div.className = "alert alert-success col-md-8 col-md-offset-2";
	div.setAttribute("role", "alert");
	div.id = "recipeAlert"
	div.innerHTML = "Receta guardada correctamente";

	var newChild = section.appendChild(div);

	var timeoutID = window.setTimeout(function(){section.removeChild(document.getElementById("recipeAlert"))}, 4000);
}