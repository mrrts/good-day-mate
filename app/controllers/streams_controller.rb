class StreamsController < ApplicationController

def show #Need to add authorization check
  @stream = current_user.streams.last

  p @stream
  if @stream
    render json: @stream.get_currents_json << {current_type: "Good Day"}
  else
    render json: [{current_type: "Return Button"}]
  end

end

private


end
