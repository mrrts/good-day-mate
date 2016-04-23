class CreateNewsUpdates < ActiveRecord::Migration
  def change
    create_table :news_updates do |t|
      t.integer :news_list_id
      t.string :type
      t.string :sectionName
      t.string :url
      t.string :title
    end
  end
end
