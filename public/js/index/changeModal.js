'use strict';
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
