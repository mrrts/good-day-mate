class PhotoCollection < ActiveRecord::Base
  include Includable

  has_many :photos

  def get_hash
    return {
      current_type: "PhotoCollection",
      label: self.label,
      filename: self.photos.sample.filename
    }
  end

end
