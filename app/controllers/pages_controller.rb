require "net/http"
require "uri"
class PagesController < ApplicationController

  def index

  end

  def test
    news_list1 = NewsList.new
    news_list2 = NewsList.new
    stream = Stream.create(label: "Test", user_id: 1)
    stream.news_lists << news_list1
    stream.news_lists << news_list2
    render json: stream.get_currents_json
  end

end
