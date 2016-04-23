class Tracker < ActiveRecord::Base
  include Includable
  include Creatable

  has_many :tracker_values
end
