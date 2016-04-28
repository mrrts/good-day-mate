class PhotoCollection < ActiveRecord::Base
  include Includable

  has_many :photos

  def get_hash
    filename = self.photos.sample.filename
    return {
      current_type: "PhotoCollection",
      label: self.label,
      filename: ActionController::Base.helpers.image_path(filename)
    }
  end

end
