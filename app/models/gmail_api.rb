require 'gmail'
include ActionView::Helpers::SanitizeHelper


class GmailAPI
  def initialize(user)
    @gmail = Gmail.connect(:xoauth2, user.email, user.oauth_token)
  end

  def grab_all
    @arr = []
    @email_objects = []
    @emails = @gmail.inbox.emails
    @emails.each do |email|
      begin
        body = Premailer.new(email.html_part.try(:body).try(:decoded), with_html_string: true).to_inline_css
      rescue
        next
      end
      obj = {
        name: email.from[0].name,
        from: "#{email.from[0].mailbox}@#{email.from[0].host}",
        subject: email.subject,
        body: body,
        date: email.date
      }
      @email_objects << obj
    end
    @email_objects
  end

end
