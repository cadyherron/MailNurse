require 'gmail'

class GmailAPI

  def initialize
    @gmail = Gmail.connect(ENV["email"], ENV["password"])

  end

  def grab_all
    @arr = []
    @email_objects = []
    @emails = @gmail.inbox.emails(:from => "thomasjinlo@gmail.com", :subject => 'hi')
    @emails.each do |email|
      obj = {
        from: email.from[0].name,
        subject: email.subject,
        body: email.body.raw_source,
        date: email.date
      }
      @email_objects << obj
    end
    @email_objects
  end

end
