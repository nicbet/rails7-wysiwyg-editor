json.extract! document, :id, :title, :note, :created_at, :updated_at
json.url document_url(document, format: :json)
