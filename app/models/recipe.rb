class Recipe < ActiveRecord::Base
  belongs_to :user
  has_many :recipe_ingredients
  has_many :ingredients, :through => :recipe_ingredients

  #Get the last3 Recipes of the type required and trasnform them into json
  def self.getJsonLast3(typePar)
  	last3 = self.where(recipeType: typePar).order(created_at: :desc).limit(3)
  	json = []
  	last3.each do |recipe|
  		json.push({"title" => recipe.title,
  			"img" => recipe.img, 
  			"description" => recipe.description, 
  			"delivery" => recipe.delivery, 
  			"prep" => recipe.prep, 
  			"like" => recipe.like, 
  			"ingredients" => recipe.getIngredientsNames})
  	end
  	json = json.to_json
  end

  #Gets an array with the ingredients names of the recipe
  def getIngredientsNames
  	ingArray = []
  	ingredients.each do |ingredient|
  		ingArray.push(ingredient.name)
  	end
  	return ingArray
  end

  #Creates a new Recipe with ingredients
  def self.createRecipe(inputJSON, user)
    data = JSON.parse!(inputJSON)
    if user != "noUser"
      puts "------"
      puts user
      newRecipe = self.create(title: data["title"],
        recipeType: translateDish(data["recipeType"]),
        img: data["img"],
        description: data["description"],
        prep: 10,
        user_id: user)
    else
      newRecipe = self.create(title: data["title"],
        recipeType: translateDish(data["recipeType"]),
        img: data["img"],
        description: data["description"],
        prep: 10)
    end
    puts data
    data["ingredients"].each do |ingredient|

      ing = Ingredient.where(name: ingredient["name"])
      RecipeIngredient.create(ingredient_id: ing[0].id,
        recipe_id: newRecipe.id
        )    
    end
  end

  #Gets all titles & prize
  def self.allTitles
    @@titles = []
    all.each do |recipe|
      @@titles.push([recipe.title, recipe.getPrize])
    end
    @@titles
  end

  #Gets the prize
  def getPrize
    @prize=0
    ingredients.each do |ingredient|
      @prize += ingredient.prize
    end
    @prize
  end

  #Changes the name of the type of the recipe
  def self.translateDish(input)
    if input == "Carnivoros"
      output = "mealRecipes"
    elsif input == "Vegetarianos"
      output = "vegetarianRecipes"
    else 
      output = "dessertRecipes"
    end
        
  end

end
