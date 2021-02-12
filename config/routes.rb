Rails.application.routes.draw do
  root 'static_pages#index'
  
  namespace :api, defaults: { format: 'json' } do
    resources :users, only: %i[create]
    resources :sessions, only: %i[create]
    match "sessions", to: "sessions#destroy", via: "delete", defaults: { id: nil }
    resources :carts, only: %i[create update show]
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
