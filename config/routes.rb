Rails.application.routes.draw do
  get 'welcome/index'
  root 'welcome#index'
  get '/search/request' => 'search#request'

  resources :cars
  resources :search
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
