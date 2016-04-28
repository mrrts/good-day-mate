class Inclusion < ActiveRecord::Base
  belongs_to :includable, polymorphic: true
  belongs_to :stream
  validates :includable_id, presence: true
end
