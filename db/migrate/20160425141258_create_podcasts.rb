class CreatePodcasts < ActiveRecord::Migration
  def change
    create_table :podcasts do |t|
      t.string   :label
      t.string   :genre
      t.string   :url
      t.string   :duration
      t.integer  :creator_id

      t.timestamps null:false
    end
  end
end
