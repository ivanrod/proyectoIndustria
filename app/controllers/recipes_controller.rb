class RecipesController < ApplicationController
	def index
		@title = "Crea tu receta | Custom Cook"
	end

	def sendRecipes
		if request.xhr?
			@searchData = Recipe.allTitles
			render json: @searchData
		else
			return 'error'
		end	
	end
end
