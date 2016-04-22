class CreateHealthTips < ActiveRecord::Migration
  def change
    create_table :health_tips do |t|

      t.timestamps null: false
    end
  end
end
