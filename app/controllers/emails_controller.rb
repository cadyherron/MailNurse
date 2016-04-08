class EmailsController < ApplicationController
  def index
    @emails = GmailAPI.new(current_user).grab_all
    render json: @emails
  end

end
