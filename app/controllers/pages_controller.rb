require "net/http"
require "uri"
class PagesController < ApplicationController

  def index
    news_list = NewsList.new
    stream = Stream.create(label: "Test", user_id: 1)
    stream.includables << news_list
    # this call to get_hash is probably not necessary since the stream
    # will really do this...needed it to test
    p JSON stream.get_currents_json
  end

end
