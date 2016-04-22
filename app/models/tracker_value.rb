class TrackerValue < ActiveRecord::Base
  belongs_to :tracker 
  belongs_to :user
end
