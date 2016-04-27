class BottleMessagesController < ApplicationController

  def new
  end

  def create
    @message = current_user.bottle_messages.create(bottle_params)
    render :nothing => true
  end

  def today
    render json: current_user.bottle_messages_today
  end

  def update
    message = current_user.bottle_messages.find_by(id: params[:id])
    message.update(bottle_update_params) if message
    render :nothing => true
  end

  private

  def bottle_params
    params.require(:bottle_message).permit(:content, :delivery_date)
  end

  def bottle_update_params
    params.require(:bottle_message).permit(:seen)
  end

end
