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

	def welcome
	end
end
