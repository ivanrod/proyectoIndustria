class CreateIngredients < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
    	t.string :name
    	t.string :ingredientType
    	t.string :dishType
  
      t.timestamps
    end
  end
end
