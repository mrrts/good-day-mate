class JournalsController < ApplicationController

  def create_entry
    user = current_user

    text = params[:text]

    user.journal_entries << JournalEntry.create(content: text)

    render json: {saved: true}
  end


  def review

    user = current_user

    entries = JournalEntry.where(user_id: user.id).sample(3)

    entries = entries.map {|entry| {content: entry.content}}

    render json: entries


  end



end
