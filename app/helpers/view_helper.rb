# frozen_string_literal: true

module ViewHelper
  def page(*args, **kwargs, &block)
    render PageComponent.new(*args, **kwargs), &block
  end
end