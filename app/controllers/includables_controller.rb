
class IncludablesController < ApplicationController
  include SessionHelper

  def index
    ac = User.first.available_currents
    render json: ac
  end

  def create

    user = current_user
    @stream = user.streams.create(label: "Test")

    params[:stuff].each_with_index do |thing, i|
      type = thing[1][:includable_type]
      id = thing[1][:includable_id]

      @stream.inclusions << Inclusion.create(includable_id: id, includable_type: type, order: i)
    end

    # @stream.addCurrents()
    render :nothing => true
  end


  private
  def includables_params
    params.require(:includable).permit(:includable_type, :includable_id)
  end

end
