class EmailsController < ApplicationController
  def index
    @emails = GmailAPI.new.grab_all
    render json: @emails
  end

end
