class User < ActiveRecord::Base
  has_secure_password

  has_many :check_ins
  has_many :bottle_messages
  has_many :streams
  has_many :inclusions, through: :streams
  has_many :journal_entries
  has_many :trackers, foreign_key: :creator_id
  has_many :tracker_values

  has_many :custom_placeholders, class_name: "Placeholder", foreign_key: :creator_id
  has_many :custom_timers, class_name: "Timer", foreign_key: :creator_id
  has_many :custom_trackers, class_name: "Tracker", foreign_key: :creator_id

  # Other password validations are handled by has_secure_password
  validates :password, length: {minimum: 8}
  validates :first_name, :last_name, :email, presence: true
  validates :email, uniqueness: true


  def available_currents
    currents_array = []
    includable_classes.each do |klass|
      currents_array << klass.where(creator_id: 0)
      currents_array << klass.where(creator_id: self.id)
    end
    currents_array = currents_array.flatten.map! do |c|
      type = c.class.to_s
      {id: c.id, includable_type: type, label: c.label}
    end
    result = {}
    includable_classes.each do |klass|
      collection = currents_array.select {|c| c[:includable_type] == klass.to_s}
      result[klass.to_s] = collection
    end
    return result
  end

  def users_feels
    counts_hash = {}
    check_ins.map(&:feeling).each do |feel_string|
      if counts_hash[feel_string]
        counts_hash[feel_string] += 1
      else
        counts_hash[feel_string] = 1
      end
    end
    feels_frequency_array = counts_hash.sort_by { |feeling, count| count }.reverse
  end

  def users_gratitudes
    counts_hash = {}
    check_ins.map(&:thankful1).each do |thankful|
      if counts_hash[thankful]
        counts_hash[thankful] += 1
      else
        counts_hash[thankful] = 1
      end
    end
    check_ins.map(&:thankful2).each do |thankful|
      if counts_hash[thankful]
        counts_hash[thankful] += 1
      else
        counts_hash[thankful] = 1
      end
    end
    check_ins.map(&:thankful3).each do |thankful|
      if counts_hash[thankful]
        counts_hash[thankful] += 1
      else
        counts_hash[thankful] = 1
      end
    end
    gratitudes_frequency_array = counts_hash.sort_by { |thankful, count| count }.reverse
  end

  def users_tomorrows
    counts_hash = {}
    check_ins.map(&:horizon).each do |horizon_string|
      if counts_hash[horizon_string]
        counts_hash[horizon_string] += 1
      else
        counts_hash[horizon_string] = 1
      end
    end
    horizons_frequency_array = counts_hash.sort_by { |horizon, count| count }.reverse
  end

  def bottle_messages_today
    self.bottle_messages.where(seen: false).select{|bm| bm.delivery_date <= Date.today}
  end

  private

  def includable_classes
    [NewsList, Placeholder, Journal, Timer, Podcast, PhotoCollection, Tracker]
  end

end
