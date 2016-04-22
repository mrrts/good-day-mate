class CreateInclusions < ActiveRecord::Migration
  def change
    create_table :inclusions do |t|
      t.integer :stream_id
      t.integer :order
      t.integer :includable_id
      t.string :includable_type

      t.timestamps null: false
    end
  end
end
