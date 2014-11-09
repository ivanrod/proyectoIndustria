# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
 
#Ingredients seeds
Ingredient.create(name: "Solomillo",
	ingredientType: "Carnes",
	dishType: "Principal")
Ingredient.create(name: "Bistec",
	ingredientType: "Carnes",
	dishType: "Principal")
Ingredient.create(name: "Entrecot",
	ingredientType: "Carnes",
	dishType: "Principal")
Ingredient.create(name: "Chuletas",
	ingredientType: "Carnes",
	dishType: "Principal")

Ingredient.create(name: "Gallo",
	ingredientType: "Pescados",
	dishType: "Principal")
Ingredient.create(name: "Lubina",
	ingredientType: "Pescados",
	dishType: "Principal")
Ingredient.create(name: "Bienmesabe",
	ingredientType: "Pescados",
	dishType: "Principal")
Ingredient.create(name: "Trucha",
	ingredientType: "Pescados",
	dishType: "Principal")

Ingredient.create(name: "Judias verdes",
	ingredientType: "Verduras",
	dishType: "Principal")
Ingredient.create(name: "Brocoli",
	ingredientType: "Verduras",
	dishType: "Principal")
Ingredient.create(name: "Acelgas",
	ingredientType: "Verduras",
	dishType: "Principal")
Ingredient.create(name: "Espinacas",
	ingredientType: "Verduras",
	dishType: "Principal")

Ingredient.create(name: "Fritas",
	ingredientType: "Patatas",
	dishType: "Guarnición")
Ingredient.create(name: "Cocidas",
	ingredientType: "Patatas",
	dishType: "Guarnición")
Ingredient.create(name: "En puré",
	ingredientType: "Patatas",
	dishType: "Guarnición")
Ingredient.create(name: "Chips",
	ingredientType: "Patatas",
	dishType: "Guarnición")
Ingredient.create(name: "Gajo",
	ingredientType: "Patatas",
	dishType: "Guarnición")

Ingredient.create(name: "César",
	ingredientType: "Ensalada",
	dishType: "Guarnición")
Ingredient.create(name: "Mixta",
	ingredientType: "Ensalada",
	dishType: "Guarnición")
Ingredient.create(name: "Rosa",
	ingredientType: "Ensalada",
	dishType: "Guarnición")
Ingredient.create(name: "Campera",
	ingredientType: "Ensalada",
	dishType: "Guarnición")
Ingredient.create(name: "En pasta",
	ingredientType: "Ensalada",
	dishType: "Guarnición")

Ingredient.create(name: "Basmati",
	ingredientType: "Arroces",
	dishType: "Guarnición")
Ingredient.create(name: "Silvestre",
	ingredientType: "Arroces",
	dishType: "Guarnición")
Ingredient.create(name: "Normal",
	ingredientType: "Arroces",
	dishType: "Guarnición")
Ingredient.create(name: "Integral",
	ingredientType: "Arroces",
	dishType: "Guarnición")

Ingredient.create(name: "Tabasco",
	ingredientType: "Picante",
	dishType: "Salsas")
Ingredient.create(name: "Chile",
	ingredientType: "Picante",
	dishType: "Salsas")
Ingredient.create(name: "Valentina",
	ingredientType: "Picante",
	dishType: "Salsas")

Ingredient.create(name: "Tomate",
	ingredientType: "No Picante",
	dishType: "Salsas")
Ingredient.create(name: "Mahonesa",
	ingredientType: "No Picante",
	dishType: "Salsas")
Ingredient.create(name: "Pesto",
	ingredientType: "No Picante",
	dishType: "Salsas")
Ingredient.create(name: "Ali Oli",
	ingredientType: "No Picante",
	dishType: "Salsas")
Ingredient.create(name: "Barbacoa",
	ingredientType: "No Picante",
	dishType: "Salsas")

#Recipes seeds
Recipe.create(title: "Bizcocho ligero de Chocolate con Mango y Lima ",
	recipeType: "dessertRecipes",
	img: "/assets/postres/bizcochoChocolate.jpg",
	description: "Rallar finamente la cáscara de la piel de la lima. Pelar y cortar los mangos en dados. En un bol, partir el chocolate, añadir la mantequilla en trozos y fundirlo en el microondas 2 minutos a 500W. Agregar los huevos, el azúcar y la harina. Mezclar bien y añadir la levadura y la ralladura de la lima. Verter la mezcla en un molde cuadrado, apto para el microondas, con mantequilla y enharinado. Añadir el mango picado por encima, presionando ligeramente. Cocerlo en el microondas de 9 a 10 minutos a 900 W.",
	delivery: 7,
	prep: 10,)
Recipe.create(title: "Crema de chocolate",
	recipeType: "dessertRecipes",
	img: "/assets/postres/cremaChocolate.jpg",
	description: "En un bol,  partir el chocolate en trozos pequeños. Calentar la leche evaporada sin que llegue a hervir. Verterla sobre el chocolate, cubriéndolo todo y tapar el recipiente con una tapa o plato. Esperar 2 minutos y mezclar fuertemente con un tenedor o un batidor. Dejarla reposar en el refrigerador para que se solidifique un poco.",)
Recipe.create(title: "Magdalenas de chocolate",
	recipeType: "dessertRecipes",
	img: "/assets/postres/magdalenasChocolate.jpg",
	description: "Precalentar el horno a  200 ° C. Derretir la mantequilla y dejar que se enfríe. En un bol, mezclar los huevos, el azúcar y la harina. Añadir la levadura y la mantequilla. Mezclar y dejar reposar 1 hora 30 en el refrigerador. Engrasar las cápsulas para magdalenas y enharinarlas ligeramente. Llenarlas con la masa hasta la mitad y cocerlas  unos 15 minutos. Derretir el chocolate con leche en el microondas. Desmoldar las magdalenas y bañar un lado con chocolate y espolvorearlo con coco. Colocar en la nevera 30 minutos.",)

Recipe.create(title: "Tacos de cerdo con tocineta",
	recipeType: "mealRecipes",
	img: "/assets/carnivoros/tacosCerdo.jpg",
	description: "Corta el lomo de cerdo en tacos y sazona. Extiende las lonchas de tocineta y enrosca con cada una un taco de cerdo. Pincha con un palillo para que no se suelten y cocina en una sartén con un chorrito de aceite. Para preparar la salsa de vino tinto: pela y pica una cebolleta y pon a pochar en una sartén con un chorro de aceite y una pizca de sal. Después, añade la nata y el vino y deja reducir. Sirve los tacos de cerdo con la tocineta frita y salsea con la salsa de vino. Espolvorea con perejil picado y ¡a disfrutar! Consejo sobre la receta de Tacos de cerdo con tocineta: Este plato es muy graso por lo que se recomienda un consumo moderado. Esta receta se puede acompañar con trozos de piña, una fruta que le va muy bien al lomo de cerdo. La tocineta o panceta le dará al lomo de cerdo un toque crujiente muy sabroso.",)
Recipe.create(title: "Costillas de cordero adobadas",
	recipeType: "mealRecipes",
	img: "/assets/carnivoros/costillaCerdo.jpg",
	description: "El cordero, como el cerdo, va muy bien con la piña, como en esta receta de costillar de cordero asado con piña. Sin embargo, en esta ocasión se adoba la carne con una mezcla de pimentón, jengibre, ajo y comino macerado durante 2 horas para que coja todo el sabor del adobo. También es muy habitual darle al cordero distintos sabores con especias, en este costillar, además del pimentón, el jengibre y el comino para el adobo, se utiliza cilantro para salsear el plato.",
	prep: 10,)
Recipe.create(title: "Rollitos de ternera",
	recipeType: "mealRecipes",
	img: "/assets/carnivoros/rollitosTernera.jpg",
	description: "Extiende los filetes de ternera sobre un plato, sazónalos y coloca encima de cada uno una loncha de jamón serrano, otra de queso, cubre con otra de jamón y un poco de salsa de tomate. Enrosca y pincha con un palillo para que no se suelten. Fríe los rollitos de ternera en una sartén con un poco de aceite con un par dientes de ajo aplastados. Limpia las hojas de rúcula, alíñalas con aceite, sal y vinagre. Sirve un rollito de ternera por comensal, acompañado de la ensalada de rúcula. Consejo de la receta de Rollitos de ternera: Esta receta de rollitos de ternera se puede sustituir la ternera por pollo. A la hora de enrollar la ternera pincha los rollitos con un palillo para que a la hora de freírlos en la sartén no se desenrosquen.",
	prep: 15,)

Recipe.create(title: "Arroz con verduras",
	recipeType: "vegetarianRecipes",
	img: "/assets/vegetarianos/arrozVerduras.jpg",
	description: "Se pone a hervir en una cazuela 4 puñados de arroz integral basmati para 2 personas, unos 40 minutos, en otra sartén con poco aceite de oliva se cocina a fuego lento espárragos, pimiento rojo y verde junto dos hojas de laurel, una vez pocha la verdura se añade la cebolla y se cocina a fuego lento todo. Cuando el arroz este en su punto de cocción, se escurre y se añade a la sartén junto a las verduras, se deja unos minutos en la sartén para poder mezclar bien los ingredientes con los sabores en la sartén,se rectifica de sal y pimienta si hiciera falta.",
	prep: 20,)
Recipe.create(title: "Champis rellenos",
	recipeType: "vegetarianRecipes",
	img: "/assets/vegetarianos/champisRellenos.jpg",
	description: "Limpiar los champiñones y cortarles la cola. Trocearla y guardarla.  Picar las cebollas y el pimiento. Junto con las colas de los champiñones ponerlo en una sartén a fuego medio con un poco de aceite. Darle unas vueltas hasta que empiece a cambiar de color. En una bandeja para el horno, poner un poco de aceite en el fondo. Los champiñones y encima las verduras rehogadas. Salpimentamos. Para terminar, lo espolvoreamos con el pan rallado y lo metemos en el horno unos 10 minutos a 180 o hasta que se doren.",
	prep: 15,)
Recipe.create(title: "Cocarrois de verdura",
	recipeType: "vegetarianRecipes",
	img: "/assets/vegetarianos/cocarrois.jpg",
	description: "En un bol añadir la harina y hacer un hueco en el centro para verter los líquidos (cerveza y aceite), con las manos mezclar bien ambos componentes hasta formar una masa manejable, amasando para que quede firme. Picar a trozos pequeños los ingredientes del relleno y aliñarlos con el aceite y el pimentón antes de meter en la masa.",
	prep: 17,)