class IngredientsController < ApplicationController
	def postJson
		if request.xhr?
			@searchData = Ingredient.ingredientsJson(request.body.read.to_s)
			render json: @searchData
		else
			return 'error'
		end
	end

	def sendIngredients
		if request.xhr?
			@ingredients = request.body.read.to_s
			if user_signed_in?
				Recipe.createRecipe(@ingredients, current_user.id)
			else
				Recipe.createRecipe(@ingredients, "noUser")
			end
			render json: "Ok"
		else
			return 'error'
		end		
	end
end
