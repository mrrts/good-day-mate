class JournalEntry < ActiveRecord::Base
  belongs_to :user

  def get_hash
    current_hash = {
      current_type: "Journal",
      content: self.content,
      creator: self.user_id
    }
  end
end
