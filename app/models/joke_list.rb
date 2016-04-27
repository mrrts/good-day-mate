class JokeList < ActiveRecord::Base
  include Includable

  has_many :jokes

  def get_hash
    joke = self.jokes.sample.joke
    return {current_type: "JokeList", label: self.label, joke: joke }
  end
end
