module Includable
  extend ActiveSupport::Concern

  included do
    has_many :inclusions, as: :includable
  end

  # Place methods here that are shared by all includable models

end
