class CreateBottleMessages < ActiveRecord::Migration
  def change
    create_table :bottle_messages do |t|
      t.integer :user_id
      t.text :content
      t.date :delivery_date
      t.boolean :seen, default: false

      t.timestamps null: false
    end
  end
end
