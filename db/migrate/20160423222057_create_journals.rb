class CreateJournals < ActiveRecord::Migration
  def change
    create_table :journals do |t|
      t.string :label
      t.integer :creator_id
      t.timestamps null: false
    end
  end
end
