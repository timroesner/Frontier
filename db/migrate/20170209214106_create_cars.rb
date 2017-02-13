class CreateCars < ActiveRecord::Migration[5.0]
  def change
    create_table :cars do |t|
      t.string :licenseplate
      t.string :make
      t.string :model
      t.string :category
      t.string :doors

      t.timestamps
    end
  end
end
