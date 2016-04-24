class Journal < ActiveRecord::Base

  def get_hash
    return {current_type: "Journal", label: self.label}
  end

end
