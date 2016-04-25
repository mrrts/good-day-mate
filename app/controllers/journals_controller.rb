class JournalsController < ApplicationController

  def create_entry
    user = current_user

    text = params[:text]

    user.journal_entries << JournalEntry.create(content: text)

    render json: {saved: true}
  end



end
