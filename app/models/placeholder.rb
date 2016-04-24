class Placeholder < ActiveRecord::Base
  include Includable
  include Creatable

  def get_hash
    current_hash = {
      current_type: "Placeholder",
      icon: self.icon,
      label: self.label,
      creator_id: self.creator_id }
  end



end
