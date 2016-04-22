class Timer < ActiveRecord::Base
  include Currentable
  include Creatable 
end
