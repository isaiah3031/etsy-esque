require 'bcrypt'

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6, allow_nil: true, message: 'is too short (minimum is 6 characters)'}
  before_validation :ensure_session_token

  attr_accessor :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      user
    else
      false
    end
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
  end

  def ensure_session_token
    self.session_token || self.session_token = User.generate_session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(self.password_digest)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end 
end
