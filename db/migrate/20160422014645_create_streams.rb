class CreateStreams < ActiveRecord::Migration
  def change
    create_table :streams do |t|
      t.string :label
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
