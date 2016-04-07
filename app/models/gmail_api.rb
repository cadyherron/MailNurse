require 'gmail'

class GmailAPI

  def initialize
    @gmail = Gmail.connect(ENV["email"], ENV["password"])

  end

  def grab_all
    @arr = []
    @email_objects = []
    @emails = @gmail.inbox.emails
    @emails.each do |email|
      obj = {
        name: email.from[0].name,
        from: "#{email.from[0].mailbox}@#{email.from[0].host}",
        subject: email.subject,
        body: email.html_part.body.raw_source,
        date: email.date
      }
      @email_objects << obj
    end
    @email_objects
  end

end
