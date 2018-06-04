class PlayerImage < ApplicationRecord
  has_many :plays

  # paperclip image data
  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
