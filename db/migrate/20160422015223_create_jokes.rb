class CreateJokes < ActiveRecord::Migration
  def change
    create_table :jokes do |t|
      t.string   :joke
      t.integer  :joke_list_id, default: 1
      t.timestamps null: false
    end
  end
end
