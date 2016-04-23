require "net/http"
require "uri"
class PagesController < ApplicationController

  def index
    news_list = NewsList.new

    # this call to get_hash is probably not necessary since the stream
    # will really do this...needed it to test
    news_list.get_hash
  end

end
