class CreateCars < ActiveRecord::Migration[5.0]
  def change
    create_table :cars do |t|
      t.string :model
      t.string :make
      t.string :door
      t.string :year
      t.string :price
      t.string :location

      t.timestamps
    end
  end
end
