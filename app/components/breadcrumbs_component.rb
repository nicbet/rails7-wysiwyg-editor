# frozen_string_literal: true

class BreadcrumbsComponent < ApplicationComponent
  renders_many :breadcrumbs, "BreadcrumbComponent"
end