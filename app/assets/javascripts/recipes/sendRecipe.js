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
	$.post( "/sendIngredients", JSON.stringify(jsonRecipe), createAlert());

	resetFields();
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

//Reset the new Recipe fields
function resetFields(){
	document.getElementById("recipeTitle").value = "";
	document.getElementById("recipeType").value = "";
	document.getElementById("recipeDescription").value = "";
	document.getElementById("Principal").value = "";
	document.getElementById("Guarnición").value = "";
	document.getElementById("Salsas").value = "";
	document.getElementsByClassName("platoPrincipal")[0].children[0].innerHTML = "Principal";
	document.getElementsByClassName("guarnicion")[0].children[0].innerHTML = "Guarnición";
	document.getElementsByClassName("salsas")[0].children[0].innerHTML = "Salsa";
}

//Hide & Show function
function hideShow(sectionClass){
	var section = document.getElementsByClassName(sectionClass);
	for (var i = 0; i<section.length; i++){
		if (section[i].classList.contains("hidden")){
			section[i].classList.remove('hidden');
		} else {
			section[i].classList.add('hidden');
		}
	}
}

//Show Send Section / Hide Recipe Section
function showSend(){
	sendRecipes();
	var sectionSend = document.getElementsByClassName("newSend");
	var sectionRecipe = document.getElementsByClassName("newRecipe");
	
	for (var i = 0; i<sectionRecipe.length; i++){
		sectionRecipe[i].classList.add('hidden');
	}
	for (var i = 0; i<sectionSend.length; i++){
		sectionSend[i].classList.remove('hidden');
	}
	document.getElementById("envioPanel").classList.add('active')
	document.getElementById("recetasPanel").classList.remove('active')
}


//Show Recipe Section / Hide Send Section
function showRecipe(){
	var sectionSend = document.getElementsByClassName("newSend");
	var sectionRecipe = document.getElementsByClassName("newRecipe");
	
	for (var i = 0; i<sectionRecipe.length; i++){
		sectionRecipe[i].classList.remove('hidden');
	}
	for (var i = 0; i<sectionSend.length; i++){
		sectionSend[i].classList.add('hidden');
	}

	document.getElementById("recetasPanel").classList.add('active')
	document.getElementById("envioPanel").classList.remove('active')
}