
class IncludablesController < ApplicationController
  include SessionHelper

  def index
    ac = current_user.available_currents
    render json: ac
  end

  def create
    user = current_user
    @stream = user.streams.create(label: "Test")

    params[:stuff].each_with_index do |thing, i|
      type = thing[1][:includable_type]
      id = thing[1][:includable_id]
      if thing[1][:custom]
        klass = Object.cont_get(type)
        label = thing[1][:label]
        data = thing[1][:data]
        klass.create(label: label, icon: label)
      else
        @stream.inclusions << Inclusion.create(includable_id: id, includable_type: type, order: i)
      end
    end
    render :nothing => true
  end


  private
  def includables_params
    params.require(:includable).permit(:includable_type, :includable_id)
  end


end
