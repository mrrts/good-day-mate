class StreamsController < ActionController::Base

def show #Need to add authorization check
  @stream = Stream.find(params[:id])

  render json: @stream.get_currents_json
end

private


end
