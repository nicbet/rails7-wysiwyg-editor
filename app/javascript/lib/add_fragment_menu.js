import tippy from "tippy.js"

const add_fragment_h1 = `
<a class="dropdown-item" data-action="mousedown->add-fragment#h1">
  <span class="has-text-weight-bold">Heading 1</span>
</a>
`

const add_fragment_h2 = `
<a class="dropdown-item" data-action="mousedown->add-fragment#h2">
  <span class="has-text-weight-semibold">Heading 2</span>
</a>
`

const add_fragment_h3 = `
<a class="dropdown-item" data-action="mousedown->add-fragment#h3">
  <span class="has-text-weight-semibold">Heading 3</span>
</a>
`

const add_fragment_p = `
<a class="dropdown-item" data-action="mousedown->add-fragment#paragraph">
  Paragraph
</a>
`

const add_fragment_pre = `
<a class="dropdown-item" data-action="mousedown->add-fragment#pre">
  Code Block
</a>
`

function add_fragment_menu() {
  return(`
  <div class="add-fragment-menu">
    <div class="dropdown-content context-menu">
      ${add_fragment_h1}
      ${add_fragment_h2}
      ${add_fragment_h3}
      ${add_fragment_p}
      ${add_fragment_pre}
    </div>
  </div>
  `)
}

export function show_add_fragment_menu(element) {
  return tippy(element, {
    allowHTML: true,
    content: add_fragment_menu(),
    interactive: true,
    interactiveBorder: 100,
    inlinePositioning: true,
    hideOnClick: true,
    placement: "bottom",
    offset: [0,0],
    theme: "light",
    onHidden: (instance) => {instance.destroy()}
  }).show()
}
