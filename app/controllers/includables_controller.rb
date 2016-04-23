
class IncludablesController < ApplicationController

def index
  render json: current_user.available_currents
end


private

def includable_classes
  [NewsList, Placeholder, Journal]
end

end
