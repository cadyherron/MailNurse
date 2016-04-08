class AngularController < ApplicationController
  def index
    redirect_to '/auth/google_oauth2', id: 'sign_in' unless current_user
  end
end
