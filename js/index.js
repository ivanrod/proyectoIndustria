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
Estos arrays se podrian rellenar a partir de un json una vez tengamos backend??

var mealRecipes = [new Recipe('Tacos de cerdo con tocineta',
	'./images/carnivoros/tacosCerdo.jpg',
	'Corta el lomo de cerdo en tacos y sazona. Extiende las lonchas de tocineta y enrosca con cada una un taco de cerdo. Pincha con un palillo para que no se suelten y cocina en una sartén con un chorrito de aceite. Para preparar la salsa de vino tinto: pela y pica una cebolleta y pon a pochar en una sartén con un chorro de aceite y una pizca de sal. Después, añade la nata y el vino y deja reducir. Sirve los tacos de cerdo con la tocineta frita y salsea con la salsa de vino. Espolvorea con perejil picado y ¡a disfrutar! Consejo sobre la receta de Tacos de cerdo con tocineta: Este plato es muy graso por lo que se recomienda un consumo moderado. Esta receta se puede acompañar con trozos de piña, una fruta que le va muy bien al lomo de cerdo. La tocineta o panceta le dará al lomo de cerdo un toque crujiente muy sabroso.',
	15,
	18,
	["Cerdo", "Tocino", "Aceite","Sal"]),
	new Recipe('Costillas de cordero adobadas',
		'./images/carnivoros/costillaCerdo.jpg',
		'El cordero, como el cerdo, va muy bien con la piña, como en esta receta de costillar de cordero asado con piña. Sin embargo, en esta ocasión se adoba la carne con una mezcla de pimentón, jengibre, ajo y comino macerado durante 2 horas para que coja todo el sabor del adobo. También es muy habitual darle al cordero distintos sabores con especias, en este costillar, además del pimentón, el jengibre y el comino para el adobo, se utiliza cilantro para salsear el plato.',
		20,
		20,
		["Costillas", "Piña", "Aceite", "Sal"]),
	new Recipe('Rollitos de ternera',
		'./images/carnivoros/rollitosTernera.jpg',
		'Extiende los filetes de ternera sobre un plato, sazónalos y coloca encima de cada uno una loncha de jamón serrano, otra de queso, cubre con otra de jamón y un poco de salsa de tomate. Enrosca y pincha con un palillo para que no se suelten. Fríe los rollitos de ternera en una sartén con un poco de aceite con un par dientes de ajo aplastados. Limpia las hojas de rúcula, alíñalas con aceite, sal y vinagre. Sirve un rollito de ternera por comensal, acompañado de la ensalada de rúcula. Consejo de la receta de Rollitos de ternera: Esta receta de rollitos de ternera se puede sustituir la ternera por pollo. A la hora de enrollar la ternera pincha los rollitos con un palillo para que a la hora de freírlos en la sartén no se desenrosquen.',
		10,
		10,
		["Ternera", "Jamón Serrano", "Queso", "Aceite", "Sal"]),
	];
var vegetarianRecipes = [new Recipe('Arroz con verduras',
		'./images/vegetarianos/arrozVerduras.jpg',
		'Se pone a hervir en una cazuela 4 puñados de arroz integral basmati para 2 personas, unos 40 minutos, en otra sartén con poco aceite de oliva se cocina a fuego lento espárragos, pimiento rojo y verde junto dos hojas de laurel, una vez pocha la verdura se añade la cebolla y se cocina a fuego lento todo. Cuando el arroz este en su punto de cocción, se escurre y se añade a la sartén junto a las verduras, se deja unos minutos en la sartén para poder mezclar bien los ingredientes con los sabores en la sartén,se rectifica de sal y pimienta si hiciera falta.', 
		5,
		5,
		["Arroz", "Aceite de Oliva", "Sal"]),
	new Recipe('Champis rellenos',
		'./images/vegetarianos/champisRellenos.jpg',
		'Limpiar los champiñones y cortarles la cola. Trocearla y guardarla.  Picar las cebollas y el pimiento. Junto con las colas de los champiñones ponerlo en una sartén a fuego medio con un poco de aceite. Darle unas vueltas hasta que empiece a cambiar de color. En una bandeja para el horno, poner un poco de aceite en el fondo. Los champiñones y encima las verduras rehogadas. Salpimentamos. Para terminar, lo espolvoreamos con el pan rallado y lo metemos en el horno unos 10 minutos a 180 o hasta que se doren.', 
		25,
		25,
		["Champiñones", "cebollas", "pimiento", "Aceite", "Sal"]),
	new Recipe('Cocarrois de verdura',
		'./images/vegetarianos/cocarrois.jpg',
		'En un bol añadir la harina y hacer un hueco en el centro para verter los líquidos (cerveza y aceite), con las manos mezclar bien ambos componentes hasta formar una masa manejable, amasando para que quede firme. Picar a trozos pequeños los ingredientes del relleno y aliñarlos con el aceite y el pimentón antes de meter en la masa.', 
		13,
		13,
		["Harina", "Cerveza","Aceite", "Sal"])
	];
var dessertRecipes = [new Recipe('Bizcocho ligero de Chocolate con Mango y Lima ',
		'./images/postres/bizcochoChocolate.jpg',
		'Rallar finamente la cáscara de la piel de la lima. Pelar y cortar los mangos en dados. En un bol, partir el chocolate, añadir la mantequilla en trozos y fundirlo en el microondas 2 minutos a 500W. Agregar los huevos, el azúcar y la harina. Mezclar bien y añadir la levadura y la ralladura de la lima. Verter la mezcla en un molde cuadrado, apto para el microondas, con mantequilla y enharinado. Añadir el mango picado por encima, presionando ligeramente. Cocerlo en el microondas de 9 a 10 minutos a 900 W.', 
		7,
		7,
		["Lima", "Mango", "Chocolate", "mantequilla"]),
	new Recipe('Crema de chocolate',
		'./images/postres/cremaChocolate.jpg',
		'En un bol,  partir el chocolate en trozos pequeños. Calentar la leche evaporada sin que llegue a hervir. Verterla sobre el chocolate, cubriéndolo todo y tapar el recipiente con una tapa o plato. Esperar 2 minutos y mezclar fuertemente con un tenedor o un batidor. Dejarla reposar en el refrigerador para que se solidifique un poco.', 
		8,
		8,
		["Chocolate", "leche", "huevos"]),
	new Recipe('Magdalenas de chocolate',
		'./images/postres/magdalenasChocolate.jpg',
		'Precalentar el horno a  200 ° C. Derretir la mantequilla y dejar que se enfríe. En un bol, mezclar los huevos, el azúcar y la harina. Añadir la levadura y la mantequilla. Mezclar y dejar reposar 1 hora 30 en el refrigerador. Engrasar las cápsulas para magdalenas y enharinarlas ligeramente. Llenarlas con la masa hasta la mitad y cocerlas  unos 15 minutos. Derretir el chocolate con leche en el microondas. Desmoldar las magdalenas y bañar un lado con chocolate y espolvorearlo con coco. Colocar en la nevera 30 minutos.', 
		11,
		11,
		["coco", "mantequilla", "azúcar", "Harina"])
	];
*/

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var Recipes = JSON.parse(makeCorsRequest());
var mealRecipes = Recipes.mealRecipes;
var vegetarianRecipes = Recipes.vegetarianRecipes;
var dessertRecipes = Recipes.dessertRecipes;
 /*Poner bastantes recetas por cada tipo (carnivoro, ...)
 y que elija aleatoriamente 3 recetas para mostrar segun el tipo*/



/* changeRecipe function
Changes the Recipe in the apropiate ID
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

	container.children[0].addEventListener("click", changeModal.bind(this, recipeObject));


	//Falta añaidir los botones de Pedir e Info
}

function changeModal(recipesObject){
	var ingredients = document.getElementById("ingredients");
	var ing = recipesObject.ingredients;
	ingredients.innerHTML = ""
	for(var i=0; i<ing.length; i++) {
		var li = document.createElement("li")
		li.innerHTML=ing[i];
		ingredients.appendChild(li);
	}

	var minutes = document.getElementById("recipeTime");
	minutes.children[0].children[1].innerHTML = recipesObject.prep + " minutos";

	minutes.children[1].children[1].innerHTML = recipesObject.delivery + " minutos";
    
    minutes.children[2].children[1].innerHTML = recipesObject.prep + recipesObject.delivery + " minutos";

    var description = document.getElementById("description");
    description.children[1].innerHTML = recipesObject.description;

    var imgRecipe = document.getElementById("imgRecipe");
    imgRecipe.src = recipesObject.img;

    var myRecipeTitle1=document.getElementById("myRecipeTitle1");
    myRecipeTitle1.innerHTML=recipesObject.title;

};

function likeButton (recipesObject){
	if (this.id === document.getElementById("likeButton")){
		recipesObject.like = recipesObject + 1;

	}
}

/* threeRecipes function
Changes the three recipe containers 
*/
function threeRecipes(event){
	var recipesType = mealRecipes;

	var trigger = event.target;
	if (event.target === undefined){trigger=event;};
	
	if (trigger.id === 'carnivorosButton'){recipesType = mealRecipes}
		else if(trigger.id === 'vegetarianosButton') {recipesType = vegetarianRecipes}
			else if (trigger.id === 'golosonesButton') {recipesType = dessertRecipes};
	for (var i = 0; i < 3; i++) {
		changeRecipe('recipe' + (i+1), recipesType[i]) ;
		};
	};


/*Event listeners*/
document.getElementById("carnivorosButton").addEventListener("click", threeRecipes);
document.getElementById("vegetarianosButton").addEventListener("click", threeRecipes);
document.getElementById("golosonesButton").addEventListener("click", threeRecipes);

//Call to threeRecipes to start the page with mealRecipes
threeRecipes(document.getElementById("carnivorosButton"));






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




