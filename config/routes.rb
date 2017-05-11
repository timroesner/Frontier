Rails.application.routes.draw do
  get 'welcome/index'
  root 'welcome#index'
  get '/search/request' => 'search#request'
  get '/iphone/search' => 'iphone#search'
   get '/iphone/request' => 'iphone#request'

  resources :cars
  resources :search
  resources :iphone
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
