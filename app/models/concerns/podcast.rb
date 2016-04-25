class Podcast < ActiveRecord::Base
  include Includable

  # def get_podcast
  #   @content = URI.parse("http://api.npr.org/query?id=1048&title=Pop%20Culture%20Podcast&dateType=story&output=JSON&apiKey=#{ENV['NPR_API_KEY']}")
  #   http = Net::HTTP.new(@content.host, @content.port)
  #   request = Net::HTTP::Get.new(@content.request_uri)
  #   response = http.request(request)
  #   p json = JSON.parse(response.body)
  #   title = json['list']['title']['$text']
  #   url = json['list']['link'][1]['$text']
  #   pod_hash = {title: title, url: url, genre: 'Pop Culture'}
  # end

  # def get_wync
  #   @content = URI.parse("http://api.npr.org/query?orgId=552&apiKey=#{ENV['NPR_API_KEY']}")
  #   http = Net::HTTP.new(@content.host, @content.port)
  #   request = Net::HTTP::Get.new(@content.request_uri)
  #   response = http.request(request)
  #   p json = JSON.parse(response.body)
  # end



  def get_hash
    current_hash = {current_type: 'Podcast'}
    current_hash[:url] = "http://www.npr.org/podcasts"
    current_hash
  end

end
