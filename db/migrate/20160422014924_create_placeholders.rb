class CreatePlaceholders < ActiveRecord::Migration
  def change
    create_table :placeholders do |t|
      t.integer :creator_id
      t.string :icon
      t.string :label

      t.timestamps null: false
    end
  end
end
