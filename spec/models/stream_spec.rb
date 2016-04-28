require 'rails_helper'

RSpec.describe Stream, type: :model do

  let! (:taylor){User.create(first_name: "Taylor", last_name: "Daug", email: "tdaug@something.com", password: "password")}

  let! (:stream) {taylor.streams.build(label: "Taylor Stream")}

  let! (:inclusion_stream) {stream.inclusions.build(order: 1,
                                              includable_id: 1,
                                              includable_type: "NewsList")
                                              }

  before(:each) do
    stream.sort_inclusions
  end

  xit "can have different types of currents(includable_type)" do
    pending
  end

  xit "has each current have a different rank" do
    pending
  end

  describe "#currents" do

    it 'returns an array' do
      expect(stream.currents).to be_an(Array)
    end

    xit 'has inclusions objects' do
      expect(inclusion_stream.currents.first[0]).to be_an(Includable)
    end
  end

  describe '#sort_inclusions' do
    before(:each) do
      stream.inclusions.build(order: 1,
                              includable_id: 1,
                              includable_type: "NewsList")
    end

    xit 'contains inclusion objects' do

    end
  end

end
