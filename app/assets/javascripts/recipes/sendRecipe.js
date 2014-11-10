'use strict';
//Sends the recipe data to the server



//Sends the data to the server in JSON format
function saveRecipe(){
	var jsonRecipe = {
		"title": document.getElementById("recipeTitle").value,
		"recipeType": document.getElementById("recipeType").value,
		"img": "/assets/defaultRecipe.gif",
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
	$.post( "/sendIngredients", JSON.stringify(jsonRecipe), createAlert())	
}

//Creates an alert wich dissappear in 4 seconds
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