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
			render json: "Ok"
		else
			return 'error'
		end		
	end
end
