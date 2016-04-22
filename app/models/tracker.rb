class Tracker < ActiveRecord::Base
  include Currentable
  include Creatable
  
  has_many :tracker_values
end
