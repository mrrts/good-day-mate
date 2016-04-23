class AddColumnsToNewsLists < ActiveRecord::Migration
  def change
    add_column :news_lists, :url, :string
    add_column :news_lists, :search_term, :string
  end
end
