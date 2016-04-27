Rails.application.routes.draw do

  get '/' => 'pages#index'
  get '/test' => 'pages#test'
  get '/streams/show' => 'streams#show'

  get '/login' => 'sessions#new'
  get '/logout' => 'sessions#destroy'
  post '/sessions' => 'sessions#create'
  get '/sessions/info' => 'sessions#info'

  get '/users/new' => 'users#new'
  post '/users' => 'users#create'
  get '/users/history' => 'users#history'


  get '/check_ins/new' => 'check_ins#new'
  post '/check_ins' => 'check_ins#create'
  get '/check_ins/:id' => 'check_ins#show'

  post '/journals' => 'journals#create_entry'

  get '/includables/index' => 'includables#index'
  post '/includables' => 'includables#create'
  post 'includables/tracker' => 'includables#tracker'

  get '/bottle_messages/new' => 'bottle_messages#new'
  post '/bottle_messages' => 'bottle_messages#create'
  get '/bottle_messages/today' => 'bottle_messages#today'
  put '/bottle_messages/:id' => 'bottle_messages#update'


  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
