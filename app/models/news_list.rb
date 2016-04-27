class NewsList < ActiveRecord::Base
  include Includable

  has_many :news_updates

  # returns array of hashes with keys "headline_text" and "url"
  def get_news
    @content = URI.parse("http://content.guardianapis.com/search?order-by=newest&api-key=#{ENV['GUARDIAN_CONTENT_API_KEY']}")
    http = Net::HTTP.new(@content.host, @content.port)
    request = Net::HTTP::Get.new(@content.request_uri)
    response = http.request(request)
    json = JSON.parse(response.body)
    headlines = []
    test = false
    if json["response"]["results"]
      json["response"]["results"].each do |thing|
        if thing["type"] == "article"
          article_hash = {headline_text: thing["webTitle"], url: thing["webUrl"]}
          headlines << article_hash
        end
      end
    else
      headlines << {headline_text: "Sorry, we could not find any stories", url: "#"}
    end
    headlines
  end

  def get_times_news
    content = URI.parse("http://api.nytimes.com/svc/topstories/v1/home.json?api-key=#{ENV['NY_TIMES_TOP_STORIES']}")
    p content
  end

  def get_hash
    current_hash = {current_type: "News"}
    current_hash[:headlines] = self.get_news
    current_hash[:label] = self.label
    current_hash
  end



end
