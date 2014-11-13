class HomeController < ApplicationController

	@@searchData=''

	def postJson
		if request.xhr?
			@searchData = Recipe.getJsonLast3(request.body.read.to_s)
			respond_to do |format|
				format.json {@searchData}
			end
		else
			return 'error'
		end
	end

	def postLikes
		if request.xhr?
			@recipe = JSON.parse!(request.body.read.to_s)
			Recipe.where(title: @recipe["title"])[0].update_attributes(like: @recipe["like"]) 
			puts Recipe.where(title: @recipe["title"])[0]
			render json: @recipe["like"]
		else
			return 'error'
		end
	end

	def welcome
	end
end
