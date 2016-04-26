class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :photo_collection_id
      t.string :filename

      t.timestamps null: false
    end
  end
end
