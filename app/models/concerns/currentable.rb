module Currentable 
  extend ActiveSupport::Concern

  included do 
    has_many :currents, as: :currentable
  end
  
  # Place methods here that are shared by all currentable models

end