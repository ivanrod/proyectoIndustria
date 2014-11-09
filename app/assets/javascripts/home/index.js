'use strict';

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

/*Event listeners*/
document.getElementById("carnivorosButton").addEventListener("click", threeRecipes);
document.getElementById("vegetarianosButton").addEventListener("click", threeRecipes);
document.getElementById("golosonesButton").addEventListener("click", threeRecipes);

//Call to threeRecipes to start the page with mealRecipes
window.addEventListener('load', threeRecipes)


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

