Rails.application.routes.draw do
  root 'application#home'
  resources :player_images, only: [:index, :create]
  resources :game, only: [:index]
  resources :plays, only: [:create]
end
