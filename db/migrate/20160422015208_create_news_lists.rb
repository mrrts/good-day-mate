class CreateNewsLists < ActiveRecord::Migration
  def change
    create_table :news_lists do |t|

      t.timestamps null: false
    end
  end
end
