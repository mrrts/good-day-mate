class CheckInsController < ApplicationController
  def new
    @check_in = CheckIn.new
  end

  def create
    user = current_user
    @check_in = user.check_ins.create(check_in_params)
    render :nothing => true
  end

  private
  def check_in_params
    params.require(:check_in).permit(:feeling, :thankful1, :thankful2, :thankful3, :horizon)
  end
end
