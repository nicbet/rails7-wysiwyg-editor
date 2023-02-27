# frozen_string_literal: true

class BreadcrumbComponent < ApplicationComponent
  attr_accessor :label, :href, :active

  def initialize(label:, href: "#", active: false, **system_arguments)
    @label = label
    @href = href
    @active = active
    @system_arguments = system_arguments
  end

  def classes
    active ? "is-active" : ""
  end
end