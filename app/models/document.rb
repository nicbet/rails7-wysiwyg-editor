class Document < ApplicationRecord
  has_many :fragments, dependent: :destroy
end
