require 'rails_helper'

RSpec.describe User, type: :model do
  # let(:test_user){User.create(first_name: "Testy", last_name: "McTesterson", email: "Haha@yup.com", password: "password1234")}
  let! (:ryan){User.create(first_name: "Ryan", last_name: "Smith", email: "ryan@something.com", password: "password")}

  it "is a User object" do
    expect(ryan.class).to be(User)
  end

  it "has a user called Ryan" do
    expect(ryan.first_name).to eq("Ryan")
  end

  it "has many trackers" do
    Tracker.create(creator_id: ryan.id, label: "test" ,unit: "inches")
    expect(ryan.trackers.count).to be >=1
  end


  it "has an encrypted password" do
    expect(ryan.password_digest).not_to eq("password")
  end

   describe "#users_feels" do
    before do
      CheckIn.create(user_id: ryan.id, feeling: "happy", thankful1: "books", thankful2: "coffee", thankful3: "coffee", horizon: "graduation")
      CheckIn.create(user_id: ryan.id, feeling: "happy", thankful1: "books", thankful2: "coffee", thankful3: "coffee", horizon: "graduation")
      CheckIn.create(user_id: ryan.id, feeling: "happy", thankful1: "books", thankful2: "coffee", thankful3: "coffee", horizon: "graduation")
      CheckIn.create(user_id: ryan.id, feeling: "sad", thankful1: "books", thankful2: "coffee", thankful3: "coffee", horizon: "graduation")
      CheckIn.create(user_id: ryan.id, feeling: "sad", thankful1: "books", thankful2: "coffee", thankful3: "coffee", horizon: "graduation")

      @feels = ryan.users_feels
    end

    it "collects the correct number of feeling entries" do
      total_feels = 0
      @feels.each do |feeling_array|
        total_feels += feeling_array[1]
      end
      expect(total_feels).to eq 5
    end

    it "shows repeat entries only once in the array" do
      expect(@feels.length).to eq 2
    end

    it "sorts & correctly counts repeat entries" do
      # if it's sorting correctly, 'coffee' should be first
      expect(@feels[0][1]).to eq 3
    end

  end


  describe "#users_gratitudes" do
    before do
      5.times do
        CheckIn.create(user_id: ryan.id, feeling: "happy", thankful1: "books", thankful2: "coffee", thankful3: "coffee", horizon: "graduation")
      end
      @grats = ryan.users_gratitudes
    end

    it "collects the correct number of gratitude entries" do
      total_grats = 0
      @grats.each do |gratitude_array|
        total_grats += gratitude_array[1]
      end
      expect(total_grats).to eq 15
    end

    it "shows repeat entries only once in the array" do
      expect(@grats.length).to eq 2
    end

    it "sorts & correctly counts repeat entries" do
      # if it's sorting correctly, 'coffee' should be first
      expect(@grats[0][1]).to eq 10
    end

  end

  describe "#users_tomorrows" do
    before do
      CheckIn.create(user_id: ryan.id, feeling: "happy", thankful1: "books", thankful2: "coffee", thankful3: "coffee", horizon: "sleep")
      CheckIn.create(user_id: ryan.id, feeling: "happy", thankful1: "books", thankful2: "coffee", thankful3: "coffee", horizon: "sleep")
      CheckIn.create(user_id: ryan.id, feeling: "happy", thankful1: "books", thankful2: "coffee", thankful3: "coffee", horizon: "sleep")
      CheckIn.create(user_id: ryan.id, feeling: "sad", thankful1: "books", thankful2: "coffee", thankful3: "coffee", horizon: "graduation")
      CheckIn.create(user_id: ryan.id, feeling: "sad", thankful1: "books", thankful2: "coffee", thankful3: "coffee", horizon: "being done")
      CheckIn.create(user_id: ryan.id, feeling: "sad", thankful1: "books", thankful2: "coffee", thankful3: "coffee", horizon: "being done")

      @tomorrows = ryan.users_tomorrows
    end

    it "collects the correct number of horizon entries" do
      total_tomorrows = 0
      @tomorrows.each do |horizons_array|
        total_tomorrows += horizons_array[1]
      end
      expect(total_tomorrows).to eq 6
    end

    it "shows repeat entries only once in the array" do
      expect(@tomorrows.length).to eq 3
    end

    it "sorts & correctly counts repeat entries" do
      # if it's sorting correctly, 'sleep' should be first
      expect(@tomorrows[0][1]).to eq 3
    end

  end


end
