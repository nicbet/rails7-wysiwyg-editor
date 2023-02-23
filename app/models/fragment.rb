class Fragment < ApplicationRecord
  belongs_to :document
  acts_as_list scope: :document
  has_one_attached :image

  attr_accessor :saved

  def to_md
    Wysiwyg::Markdown::MAPPINGS[element] % {data: data, meta: meta}
  end

  def render
    Wysiwyg::Markdown::Renderer.md_to_html(to_md)
  end
end
