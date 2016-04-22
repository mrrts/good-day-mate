class CreateTrackers < ActiveRecord::Migration
  def change
    create_table :trackers do |t|
      t.integer :creator_id
      t.string :label
      t.string :unit

      t.timestamps null: false
    end
  end
end
