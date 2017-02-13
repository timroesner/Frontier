class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :First
      t.string :Last
      t.string :Street
      t.string :City
      t.string :Country
      t.string :DL

      t.timestamps
    end
  end
end
