import tippy from "tippy.js"

const format_selection_bold = `
<a class="has-text-white" data-action="mousedown->format#bold">
  Bold
</a>
`

const format_selection_italic = `
<a class="has-text-white" data-action="mousedown->format#italic">
  Italic
</a>
`
const format_selection_strikethrough = `
<a class="has-text-white" data-action="mousedown->format#strikethrough">
  Strike
</a>
`

const format_selection_link = `
<a class="has-text-white" data-action="mousedown->format#link">
  Link
</a>
`

const format_selection_code = `
<a class="has-text-white" data-action="mousedown->format#code">
  Code
</a>
`

function format_selection_menu() {
  return(`
  <div class="p-1" data-controller="format">
    ${format_selection_bold}
    <span class="ml-1 mr-1 has-text-grey">|</span>
    ${format_selection_italic}
    <span class="ml-1 mr-1 has-text-grey">|</span>
    ${format_selection_strikethrough}
    <span class="ml-1 mr-1 has-text-grey">|</span>
    ${format_selection_code}
    <span class="ml-1 mr-1 has-text-grey">|</span>
    ${format_selection_link}
  </div>
  `)
}

export function show_format_selection_menu(element) {
  let box = window.getSelection().getRangeAt(0).getBoundingClientRect()
  return tippy(element, {
    allowHTML: true,
    content: format_selection_menu(),
    interactive: true,
    interactiveBorder: 100,
    inlinePositioning: true,
    maxWidth: 500,
    getReferenceClientRect: () => box,
    onHidden: (instance) => {instance.destroy()}
  }).show()
}
