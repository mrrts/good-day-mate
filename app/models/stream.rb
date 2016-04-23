class Stream < ActiveRecord::Base
  belongs_to :user
  has_many :inclusions
  has_many :includables, through: :inclusions, source_type: "NewsList"

  def get_currents_json
    return_array = []
    self.inclusions.each do |current|
      return_array << current.includable.get_hash
    end
    return return_array
  end
end
