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


end
