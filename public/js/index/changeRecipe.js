'use strict';
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
