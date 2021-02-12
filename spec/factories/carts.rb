FactoryBot.define do
  factory :cart do
    author_id { 1 }
    contents { "" }
    ordered { false }
  end
end
