class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
    	t.string :title
    	t.string :recipeType
    	t.string :img
    	t.text :description
    	t.integer :delivery
    	t.integer :prep
    	t.integer :like

      t.timestamps
    end
  end
end
