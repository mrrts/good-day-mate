class SessionsController < ActionController::Base

  include SessionHelper

  def new
     @user = User.new
  end

  def create
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      log_in(@user)
      render json: {result: "success", user_id: @user.id}
    else
      @errors = ["Invalid Credentials"]
      render json: {errors: @errors}
    end
  end


  def info
    session_id = logged_in? ? session[:user_id] : false
    render json: {session_id: session_id}
  end


  def destroy
    log_out
    redirect_to '/'
  end


  def log_in(user)
    session[:user_id] = user.id
  end

  def log_out
    session.delete(:user_id)
  end

end
