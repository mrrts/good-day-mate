class Podcast < ActiveRecord::Base
  include Includable

  def get_hash
    current_hash = {
      current_type: 'Podcast',
      creator_id: self.creator_id,
      title: self.title,
      genre: self.genre,
      url: self.url,
      duration: self.duration
    }
  end

end
