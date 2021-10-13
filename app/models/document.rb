class Document < ApplicationRecord
  has_many :fragments, -> { order(position: :asc) }, dependent: :destroy
end
