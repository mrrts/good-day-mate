class NewsList < ActiveRecord::Base
  include Includable


  def get_news()
    p "Hello!"

    p ENV['GUARDIAN_API_SECRET_KEY']
  end

end
