class SessionsController < ActionController::Base

  def new
     @user = User.new
  end

  def create
    p "hello"
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      render :nothing => true
      # login user & reload page, set state to home page
    else
      @errors = ["Invalid Credentials"]
      # figure this out later
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
