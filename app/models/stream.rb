class Stream < ActiveRecord::Base
  belongs_to :user 
  has_many :inclusions 
  has_many :currents, through: :inclusions 
end
