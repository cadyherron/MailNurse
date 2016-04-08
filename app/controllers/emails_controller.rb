class EmailsController < ApplicationController
  def index
    @emails = GmailAPI.new(current_user).grab_all
    render json: @emails
  end

  def create
    @emails = GmailAPI.new(current_user).send(email_params)
  end

  private

  def email_params
    params.require(:email).permit(:to, :subject, :body)
  end
end
