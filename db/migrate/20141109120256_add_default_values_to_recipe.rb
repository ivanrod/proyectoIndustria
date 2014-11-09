class AddDefaultValuesToRecipe < ActiveRecord::Migration
  def change
  	remove_column :recipes, :prep
  	remove_column :recipes, :delivery
  	remove_column :recipes, :like

  	add_column :recipes, :prep, :integer, default: 10
  	add_column :recipes, :delivery, :integer, default: 10
  	add_column :recipes, :like, :integer, default: 0
  end
end
