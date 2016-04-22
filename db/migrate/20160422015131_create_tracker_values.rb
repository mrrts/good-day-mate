class CreateTrackerValues < ActiveRecord::Migration
  def change
    create_table :tracker_values do |t|
      t.integer :tracker_id
      t.decimal :value
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
