class PlaysController < ApplicationController
  def create
    image = PlayerImage.find(plays_params[:image_id])
    play = Play.create(
                        player_image_id: image.id,
                        timer_value: plays_params[:timer_value]
                      )
  end

  private
  def plays_params
    params.require(:plays).permit(:image_id, :timer_value)
  end
end
