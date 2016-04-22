class Current < ActiveRecord::Base
  belongs_to :currentable, polymorphic: true

  validates :label, :currentable_type, :currentable_id, presence: true 
end
