class Stream < ActiveRecord::Base
  belongs_to :user
  has_many :inclusions

  def get_currents_json
    return_array = []
    self.currents.each do |current|
      return_array << current.get_hash
    end
    return return_array
  end

  def currents
    currents = []

    self.sort_inclusions.each do |inclusion|
      currents << inclusion.includable
    end

    return currents
  end

  def sort_inclusions
    inclusions = self.inclusions
    inclusions = inclusions.order(:order)
    inclusions
  end
end
