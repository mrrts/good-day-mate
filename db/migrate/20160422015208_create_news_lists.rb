class CreateNewsLists < ActiveRecord::Migration
  def change
    create_table :news_lists do |t|
      t.string :label
      t.integer :creator_id
      t.timestamps null: false
    end
  end
end
