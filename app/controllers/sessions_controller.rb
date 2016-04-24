class SessionsController < ActionController::Base

  def new
     @user = User.new
  end

  def create
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      log_in(@user)
      render :nothing => true
    else
      @errors = ["Invalid Credentials"]
      render json: {errors: @errors}
    end
  end

  def destroy
    log_out
    # reload page
  end

  def log_in(user)
    session[:user_id] = user.id
  end

  def log_out
    session.delete(:user_id)
  end

end
