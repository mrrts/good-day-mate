class StreamsController < ApplicationController

def show #Need to add authorization check
  @stream = current_user.streams.last
  p "--------------------------"
  p current_user
  render json: @stream.get_currents_json
end

private


end
