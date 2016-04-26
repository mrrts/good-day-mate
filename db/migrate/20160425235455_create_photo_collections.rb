class CreatePhotoCollections < ActiveRecord::Migration
  def change
    create_table :photo_collections do |t|
      t.integer :creator_id
      t.string :label

      t.timestamps null: false
    end
  end
end
