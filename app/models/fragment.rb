class Fragment < ApplicationRecord
  belongs_to :document
  attr_accessor :saved

  acts_as_list scope: :document

   MD_MAPPING = {
    "h1" => "# %{data}",
    "h2" => "## %{data}",
    "h3" => "### %{data}",
    "p" => "%{data}",
    "ol" => "%{data}",
    "ul" => "%{data}",
    "pre" => "```%{meta}\n%{data}\n```",
    "img" => "![%{meta}](%{data})"
  }.freeze

  def to_md
    MD_MAPPING[element] % {data: data, meta: meta}
  end

  def render
    MarkdownRenderer.md_to_html(to_md)
  end
end
