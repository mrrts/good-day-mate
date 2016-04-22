class Inclusion < ActiveRecord::Base
  belongs_to :stream 
  belongs_to :current
end
