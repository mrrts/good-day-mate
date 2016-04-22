class CreateTimers < ActiveRecord::Migration
  def change
    create_table :timers do |t|
      t.integer :creator_id
      t.string :label
      t.integer :duration

      t.timestamps null: false
    end
  end
end
