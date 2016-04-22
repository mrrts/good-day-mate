require 'rails_helper'

RSpec.describe Tracker, type: :model do


  it "has many tracker values" do
    expect(Tracker.first.tracker_values.length).to have(2).things
  end


end
