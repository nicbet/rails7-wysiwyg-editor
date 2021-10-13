class FragmentsController < ApplicationController
  before_action :set_document
  before_action :set_fragment, only: [:update, :destroy]

  def create
    @fragment = @document.fragments.build(fragment_params)
    @fragment.save

    redirect_to(document_path(@document))
  end

  def update
    @fragment.update(fragment_params)
    @fragment.saved = true

    render @fragment
  end

  def destroy
    @fragment.destroy
    redirect_to(document_path(@document))
  end

  private

  def set_fragment
    @fragment = @document.fragments.find(params[:id])
  end

  def set_document
    @document = Document.find(params[:document_id])
  end

  def fragment_params
    params.require(:fragment).permit(:element, :data, :meta, :position)
  end
end
