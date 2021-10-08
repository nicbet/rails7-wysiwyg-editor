Rails.application.routes.draw do
  root "document#index"

  resources "fragments"
end
