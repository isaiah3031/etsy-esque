class Cart < ApplicationRecord
  belongs_to :user,
    foreign_key: 'owner_id'
  validates :owner_id, :ordered, :contents, presence: true
end
