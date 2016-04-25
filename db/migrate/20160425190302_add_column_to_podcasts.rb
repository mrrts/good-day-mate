class AddColumnToPodcasts < ActiveRecord::Migration
  def change
    add_column :podcasts, :icon, :string
  end
end
