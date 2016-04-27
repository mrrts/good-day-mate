class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      p @user
      session[:user_id] = @user.id
      render :nothing => true
      # redirect to home page
    else
      @errors = @user.errors.full_messages
      p @errors
      render json: {errors: @errors}
    end
  end

  def history
    @user = User.find(session[:user_id])
    p @user
  end

private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :password, :email)
    end

  # write a private method that creates a series of
  # inclusions for a user; we'll call that method whenever
  # we create a new user so they have some defaults in
  # their stream
end
