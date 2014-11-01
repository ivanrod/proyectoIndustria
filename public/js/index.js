'use strict';
/*     -----Recipe Class-----
title: string     --->Recipe Title
img: string       ---->Image file
description: string -->Recipe description
delivery: int -->Delivery time (minuts)
prep: int -->Preparation time (minuts)
ingredients: array -->Ingredients list
like: int -->Number of likes/dislikes
*/
function Recipe(title, img, description, delivery, prep, ingredients){
	this.title = title;
	this.img = img;
	this.description = description;
	this.delivery = delivery;
	this.prep = prep;
	this.ingredients = ingredients;
	this.like = 0;
	return this;
};




/* ----Meal, Vegetarian, Dessert recipes (arrays)-----
Ahora se crean los arrays con las recetas para carnivoros, vegetarianos, etc.
Se importan las recetas en formato JSON de forma síncrona (ver syncJsonDownload.js)
*/

var Recipes = JSON.parse(makeCorsRequest("https://dl.dropboxusercontent.com/s/aj9f9i7qdc30buf/Recipes.json?dl=0"));
var mealRecipes = Recipes.mealRecipes;
var vegetarianRecipes = Recipes.vegetarianRecipes;
var dessertRecipes = Recipes.dessertRecipes;
 /*Poner bastantes recetas por cada tipo (carnivoro, ...)
 y que elija aleatoriamente 3 recetas para mostrar segun el tipo*/



/* changeRecipe function
Changes the Recipe in the apropiate Element
recipeId: string  --> recipe div id
recipeObject: Recipe --> Recipe Object 
*/
function changeRecipe(recipeId, recipeObject){
	var container = document.getElementById(recipeId);
	//Title
	container.children[1].children[0].textContent = recipeObject.title;
	//Image
	container.children[0].src = recipeObject.img;
	//Description
	container.children[1].children[1].textContent = recipeObject.description;
	//Event listener to change the modal information calling changeModal() function
	//We use bind method to wrap a function which allow us to pass the object recipeObject
	container.children[0].addEventListener("click", changeModal.bind(this, recipeObject));


	//Falta añaidir los botones de Pedir e Info
}


/* changeModal function
Function to add information to the modal 
recipeObject: Recipe --> Recipe Object 
*/
function changeModal(recipeObject){
	/*Adding ingredients*/
	var ingredients = document.getElementById("ingredients");
	var ing = recipeObject.ingredients;
	ingredients.innerHTML = ""
	for(var i=0; i<ing.length; i++) {
		var li = document.createElement("li")
		li.innerHTML=ing[i];
		ingredients.appendChild(li);
	}
	/* Adding Preparation, delivery and total time */
	var minutes = document.getElementById("recipeTime");
	minutes.children[0].children[1].innerHTML = recipeObject.prep + " minutos";

	minutes.children[1].children[1].innerHTML = recipeObject.delivery + " minutos";
    
    minutes.children[2].children[1].innerHTML = recipeObject.prep + recipeObject.delivery + " minutos";

    /* Adding a description */
    var description = document.getElementById("description");
    description.children[1].innerHTML = recipeObject.description;

    // Adding the image
    var imgRecipe = document.getElementById("imgRecipe");
    imgRecipe.src = recipeObject.img;

    //Adding the title
    var myRecipeTitle1=document.getElementById("myRecipeTitle1");
    myRecipeTitle1.innerHTML=recipeObject.title;

    var likeButton2 = document.getElementById("likeButton");
    likeButton2.addEventListener("click", likeButton.bind(this, recipeObject));

    var likeButton3 =document.getElementById("DislikeButton");
    likeButton3.addEventListener("click",likeButton.bind(this,recipeObject));  

   document.getElementsByClassName("likeClick")[0].style.display="block";
};



/* likeButton function

*/
function likeButton (recipesObject,event){
	console.log(event.target)
	if (event.target === document.getElementById("likeButton")){
		recipesObject.like = recipesObject.like + 1;
		document.getElementsByClassName("likeClick")[0].style.display="none";
	}else {
		recipesObject.like = recipesObject.like - 1;
		document.getElementsByClassName("likeClick")[0].style.display="none";

	}
}

/* threeRecipes function
Changes the three recipe containers 
*/
function threeRecipes(event){
	//We initiate recipesType variable with mealRecipes by default
	var recipesType = mealRecipes;
	/* If the function is initialized by a Event Listener then 'event' paramenter
		won't be undefined so we can pick the target id
	*/
	
	if (event !== undefined){
	
	if (event.target.id === 'carnivorosButton'){recipesType = mealRecipes}
		else if(event.target.id === 'vegetarianosButton') {recipesType = vegetarianRecipes}
			else if (event.target.id === 'golosonesButton') {recipesType = dessertRecipes};
	};
	for (var i = 0; i < 3; i++) {
		changeRecipe('recipe' + (i+1), recipesType[i]) ;
		};
	};


/*Event listeners*/
document.getElementById("carnivorosButton").addEventListener("click", threeRecipes);
document.getElementById("vegetarianosButton").addEventListener("click", threeRecipes);
document.getElementById("golosonesButton").addEventListener("click", threeRecipes);

//Call to threeRecipes to start the page with mealRecipes
threeRecipes();






/*Scroll Down JQuery (pasar a JS)*/
	$(document).ready(function(){


		$( '.searchbychar' ).on('click', function(event) {
		    event.preventDefault();
		    var target = "#" + $(this).data('target');
		    $('html, body').animate({
		        scrollTop: $(target).offset().top
		    }, 2000);
		});

	});


/*PRUEBAS*/
//document.getElementById("clicker1").addEventListener("click", scrollDown);

function scrollDown(){
	console.log(document.getElementById('id2').offsetTop)
		
	setTimeout(function() { window.scrollTo(0,document.getElementById('id2').offsetTop); }, 1000);
}


/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

