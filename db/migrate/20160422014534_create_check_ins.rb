class CreateCheckIns < ActiveRecord::Migration
  def change
    create_table :check_ins do |t|
      t.integer :user_id
      t.string :feeling
      t.string :thankful1
      t.string :thankful2
      t.string :thankful3
      t.string :horizon

      t.timestamps null: false
    end
  end
end
