class Play < ApplicationRecord
  belongs_to :player_image

  delegate :image, to: :player_image
end
