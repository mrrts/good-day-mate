
class IncludablesController < ApplicationController
  include SessionHelper

  def index
    ac = User.first.available_currents
    render json: ac
  end


  private

end
