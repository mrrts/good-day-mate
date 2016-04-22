require 'rails_helper'

RSpec.describe Stream, type: :model do

  it "has many inclusions" do
    expect(Stream.first.inclusions.length).to have(2).things
  end

  it "has many currents" do
    expect(Stream.first.currents.length).to have(2).things
  end

  it "can have different types of currents(includable_type)" do
    pending
  end

  it "has each current have a different rank" do
    pending
  end

end
