class Cart < ApplicationRecord
  belongs_to :user,
    foreign_key: 'owner_id'
  validates :owner_id, :ordered, :contents, presence: true
  after_initialize :set_defaults, unless: :persisted?

  def set_defaults
    self.contents ||= []
    self.ordered ||= false
  end
end
