class AddPrizeToIngredients < ActiveRecord::Migration
  def change
  	add_column :ingredients, :prize, :integer, default: 5
  end
end
