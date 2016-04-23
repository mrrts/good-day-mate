class Tracker < ActiveRecord::Base
  include Includable
  include Creatable

  has_many :tracker_values

  def get_hash
    return {current_type: "Tracker", label: self.label, unit: self.unit}
  end
end
