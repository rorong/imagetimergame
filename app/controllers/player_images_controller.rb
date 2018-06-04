class PlayerImagesController < ApplicationController
  def index
    @player_image = PlayerImage.new
  end

  # Upload multiple selected images to server
  def create
    error = nil
    image_params[:filearrays].each do |file|
      @player_image = PlayerImage.new(image: file)      
      unless @player_image.save
        error = @player_image.errors.full_messages
        break
      end
    end

    if error
      render json: { data: error.join(', ')}, status: 422
    else
      render :index, status: 200
    end
  end

  private
  def image_params
    params.require(:player_image).permit(filearrays: [])
  end
end
