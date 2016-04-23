class Stream < ActiveRecord::Base
  belongs_to :user
  has_many :inclusions
  # we need a has_many for each includable type, then add it to the currents method
  has_many :news_lists, through: :inclusions, source: :includable ,source_type: "NewsList"

  def get_currents_json
    return_array = []
    self.currents.each do |current|
      return_array << current.get_hash
    end
    return return_array
  end

  def currents

    currents = []
    currents += self.news_lists

    currents.sort
    return currents
  end
end
