class CreateJokeLists < ActiveRecord::Migration
  def change
    create_table :joke_lists do |t|
        t.integer :creator_id, default: 0
        t.string :label

        t.timestamps null: false
    end
  end
end
