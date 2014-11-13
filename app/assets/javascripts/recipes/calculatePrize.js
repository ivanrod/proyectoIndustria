'use strict';

//Get the recipes from the server
function sendRecipes(){
	deleteList("showList");
	$.getJSON( "/sendRecipes", function(data){
			addToList(data)});
};

//Adds the recipes to the list with their prize
function addToList(data){
	for (var i in data){
		var option = document.createElement('option');
		option.className = "showList";
		option.innerHTML = data[i][0];
		option.setAttribute('value', data[i][1]);
		document.getElementById('recipeList').appendChild(option);
	}
}

//Delete all elements from the list
function deleteList(className){
	var showList = document.getElementsByClassName(className);
	
	while (showList.length > 0){
		showList[0].remove();
	};
}

//Add recipes to table
function addToTable(){
	var tableInput = [];
	var table = document.getElementsByTagName("tbody")[0];
	var row = document.createElement('tr')
	for (var i=0; i<3; i++){
		tableInput.push(document.createElement('td')
		)};
	tableInput[0].innerHTML = "1";
	tableInput[2].innerHTML = document.getElementById('recipeList').value + " €";
	tableInput[2].className = "itemPrice";
	tableInput[2].setAttribute("data-item", document.getElementById('recipeList').value)
	var selected = document.getElementById('recipeList');
	tableInput[1].innerHTML = selected.options[selected.selectedIndex].text;
	
	for (var i=0; i<3; i++){
		row.appendChild(tableInput[i]);
		};
	table.appendChild(row);
	totalPrice();
}	

//Gets total price 
function totalPrice(){
	var items = document.getElementsByClassName("itemPrice");
	var result = 0;
	for (var i=0; i<items.length; i++){
		//console.log(items[i])
		result += parseInt(items[i].getAttribute('data-item'));
	}
	document.getElementById('resultPrice').innerHTML =  String(result) + " €";
}

document.getElementById('addRecipeButton').addEventListener('click', addToTable);
window.addEventListener('load', sendRecipes)