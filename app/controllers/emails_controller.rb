class EmailsController < ApplicationController
  def index
    @email = GmailAPI.new.grab_all
    render json: @emails
  end

end
