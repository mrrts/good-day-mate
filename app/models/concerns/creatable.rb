module Creatable 
  extend ActiveSupport::Concern

  included do 
    belongs_to :creator, class_name: "User", foreign_key: :creator_id
  end
end