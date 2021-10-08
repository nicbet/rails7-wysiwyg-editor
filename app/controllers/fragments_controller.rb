class FragmentsController < ApplicationController
  before_action :set_fragment, only: [:update]

  def create
    @fragment = Fragment.new(fragment_params)
    if @fragment.valid?
      @fragment.save
    end
    redirect_to(root_path)
  end

  def update
    @fragment.update(data: params[:data])
    render @fragment
  end

  private

  def set_fragment
    @fragment = Fragment.find(params[:id])
  end

  def fragment_params
    params.require(:fragment).permit(:element, :data, :meta, :position)
  end
end
