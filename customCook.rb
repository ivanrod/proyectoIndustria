require 'sinatra'
require 'sinatra/reloader'

get '/' do 
	@title = "Custom Cook"
	@cssFiles = ['"./css/index.css"']
	@jsFiles = ['"./js/syncJsonDownload.js"', 
		'"./js/index/changeRecipe.js"', 
		'"./js/index/changeModal.js"', 
		'"./js/index/likeButton.js"', 
		'"./js/index/index.js"']
	erb :index
end

get '/crearecetas' do 
	@title = "Crea tu receta"
	@cssFiles = ['"./css/crearRecetas.css"']
	@jsFiles = ['"./js/crearRecetas/syncJsonDownload.js"',
		'"./js/crearRecetas/changeIngredients.js"', 
		'"./js/crearRecetas/dragDrop.js"', 
		'"./js/crearRecetas/crearRecetas.js"']
	erb :crearRecetas
end