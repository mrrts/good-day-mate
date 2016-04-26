
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
      object = thing[1]
      type = object[:includable_type]

      if object[:custom]
        # klass = type.constantize
        label = object[:label]
        data = object[:data]

        case type
          when "Timer"
            duration = (data[:duration].to_i * 60)
            current = Timer.create(label: label, duration: duration)
            id = current.id
          when "Placeholder"
            icon = data[:icon]
            current = Placeholder.create(label: label, icon: icon)
            id = current.id
          when "Tracker"
            unit = data[:unit]
            current = Timer.create(label: label, unit: unit)
            id = current.id
          else
        end

      else
        id = object[:includable_id]
      end
        @stream.inclusions << Inclusion.create(includable_id: id, includable_type: type, order: i)
    end
    render :nothing => true
  end


  private



end
