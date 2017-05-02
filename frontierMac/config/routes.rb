Rails.application.routes.draw do
  get 'search/index'

  get 'welcome/index'
  root 'welcome#index'

  resources :cars
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
