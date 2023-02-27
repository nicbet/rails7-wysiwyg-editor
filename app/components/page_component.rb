# frozen_string_literal: true

class PageComponent < ApplicationComponent
  attr_accessor :title

  renders_one :breadcrumbs, "BreadcrumbsComponent"
  renders_one :actions

  def initialize(title:, **system_arguments)
    @title = title
    @system_arguments = system_arguments
  end
end