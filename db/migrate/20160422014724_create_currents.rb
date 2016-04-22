class CreateCurrents < ActiveRecord::Migration
  def change
    create_table :currents do |t|
      t.string :label
      t.string :currentable_type
      t.integer :currentable_id

      t.timestamps null: false
    end
  end
end
