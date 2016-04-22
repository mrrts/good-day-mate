class CreateJournalEntries < ActiveRecord::Migration
  def change
    create_table :journal_entries do |t|
      t.integer :user_id
      t.text :content

      t.timestamps null: false
    end
  end
end
