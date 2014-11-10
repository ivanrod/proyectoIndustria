class Recipe < ActiveRecord::Base
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

  #Get an array with the ingredients names of the recipe
  def getIngredientsNames
  	ingArray = []
  	ingredients.each do |ingredient|
  		ingArray.push(ingredient.name)
  	end
  	return ingArray
  end

end
