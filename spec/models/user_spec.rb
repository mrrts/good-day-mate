require 'rails_helper'

RSpec.describe User, type: :model do
  let(:test_user){User.create(first_name: "Testy", last_name: "McTesterson", email: "Haha@yup.com", password: "password1234")}

  it "has a passing test" do
    expect(true).to be(true)
  end

  it "is a User object" do
    expect(User.first.class).to be(User)
  end

  it "has many streams" do
    expect(User.first.streams).to have_at_least(2).things
  end


  it "has many check_ins" do
    expect(User.first.check_ins).to have_at_least(2).things
  end

  it "has many bottle messages" do
    expect(User.first.bottle_messages).to have_at_least(2).things
  end

  it "has many journal entries" do
    expect(User.first.journal_entries).to have_at_least(2).things
  end

  it "has many trackers" do
    expect(User.first.trackers).to have_at_least(2).things
  end

  it "has many placeholders" do
    expect(User.first.placeholders).to have_at_least(2).things
  end

  it "has an encrypted password" do
    expect(test_user.password_digest).not_to eq("password")
  end


end
