function ingredientes (event) {

	var ingredientType = principal;

	if (event !== undefined){

		if (event.target.id === "option2"){ingredientType = principal}
			else if (event.target.id === "option3"){ingredientType = guarnicion}
				else if (event.target.id === "option4"){ingredientType = salsas}
	},		

	var azules = document.getElementsByClassName("azul");
	while (azules.length > 0){
		azules[0].remove();
	}

	
	for (var i = 0; i < ingredientType.length; i++){
		var limon = document.createElement('label');
		var pera = limon.appendChild('input');
		limon.className = 'btn btn-success azul'
	}



		
	}

	};



document.getElementById("option2").addEventListener("click", ingredientes);
document.getElementById("option3").addEventListener("click", ingredientes);
document.getElementById("option4").addEventListener("click", ingredientes);

ingredientes();