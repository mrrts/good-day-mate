class User < ActiveRecord::Base
  has_secure_password

  has_many :check_ins
  has_many :bottle_messages
  has_many :streams
  has_many :inclusions, through: :streams  
  has_many :journal_entries
  has_many :tracker_values

  has_many :custom_placeholders, class_name: "Placeholder", foreign_key: :creator_id
  has_many :custom_timers, class_name: "Timer", foreign_key: :creator_id
  has_many :custom_trackers, class_name: "Tracker", foreign_key: :creator_id 

  # Other password validations are handled by has_secure_password
  validates :password, length: {minimum: 8}
  validates :first_name, :last_name, :email, presence: true 
  validates :email, uniqueness: true
end
