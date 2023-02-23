# frozen_string_literal: true

module Wysiwyg
  module Markdown
    MAPPINGS = {
      "h1" => "# %{data}",
      "h2" => "## %{data}",
      "h3" => "### %{data}",
      "p" => "%{data}",
      "ol" => "%{data}",
      "ul" => "%{data}",
      "pre" => "```%{meta}\n%{data}\n```",
      "image" => "%{data}"
    }.freeze
  end
end
