class DocumentController < ApplicationController
  def index
    @fragments = Fragment.order(position: :asc)
  end
end
