Rails.application.routes.draw do
  root "documents#index"

  resources :documents do
    resources :fragments
  end

  get '/documents/:id/markdown', to: "documents#markdown", as: 'document_markdown'
end
