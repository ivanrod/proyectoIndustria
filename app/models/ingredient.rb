class Ingredient < ActiveRecord::Base
  has_many :recipe_ingredients
  has_many :recipes, :through => :recipe_ingredients

  #Get the ingredients of the dishType required and transform then into json
  def self.ingredientsJson(dishType)
  	json = {}
  	self.where(dishType: dishType).each do |ingredient|
  		if json[ingredient.ingredientType] == nil
  			json[ingredient.ingredientType] = [ingredient.name]
  		elsif json[ingredient.ingredientType] != nil
  		  json[ingredient.ingredientType].push(ingredient.name)
  		end
  	end
  	json.to_json
  end

  #

end
