class GameController < ApplicationController
  def index
    @images = PlayerImage.limit(10).order("RANDOM()")
    @plays = Play.includes(:player_image)
  end
end
