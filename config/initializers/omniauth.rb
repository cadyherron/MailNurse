OmniAuth.config.logger = Rails.logger
OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE if Rails.env.development?

OmniAuth.config.full_host = Rails.env.production? ? 'https://domain.com' : 'http://localhost:3000'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV['GOOGLE_CLIENT_ID'], ENV['GOOGLE_CLIENT_SECRET'], :provider_ignores_state => true, scope: 'https://mail.google.com/,email,profile'
end
