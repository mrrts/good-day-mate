require "net/http"
require "uri"
class PagesController < ApplicationController

  def index

  end

  def test
    news_list = NewsList.new
    stream = Stream.create(label: "Test", user_id: 1)
    stream.news_lists << news_list
    render json: stream.get_currents_json
  end

end
