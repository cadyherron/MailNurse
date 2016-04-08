class EmailsController < ApplicationController
  def index
  end

  def show
    gmail = GmailAPI.new(env["omniauth.auth"])
    @emails = gmail.grab_all
    render json: @emails
  end
end
