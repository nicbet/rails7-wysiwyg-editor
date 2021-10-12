import tippy from "tippy.js"

function format_selection_menu() {
  return(`
  <div class="p-1" data-controller="format">
    <a class="has-text-white" data-action="mousedown->format#bold">
      Bold
    </a>
    <span class="ml-1 mr-1 has-text-grey">|</span>
    <a class="has-text-white" data-action="mousedown->format#italic">
      Italic
    </a>
    <span class="ml-1 mr-1 has-text-grey">|</span>
    <a class="has-text-white" data-action="mousedown->format#strikethrough">
      Strike
    </a>
    <span class="ml-1 mr-1 has-text-grey">|</span>
    <a class="has-text-white" data-action="mousedown->format#link">
      Link
    </a>
    <span class="ml-1 mr-1 has-text-grey">|</span>
    <a class="has-text-white" data-action="mousedown->format#code">
      Code
    </a>
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

function add_fragment_menu() {
  return(`
  <div class="add-fragment-menu">
    <div class="dropdown-content context-menu">
      <a class="dropdown-item" data-action="mousedown->add-fragment#h1">
        <span class="has-text-weight-bold">Heading 1</span>
      </a>
      <a class="dropdown-item" data-action="mousedown->add-fragment#h2">
        <span class="has-text-weight-semibold">Heading 2</span>
      </a>
      <a class="dropdown-item" data-action="mousedown->add-fragment#h3">
        Heading 3
      </a>
      <hr class="dropdown-divider">
      <a class="dropdown-item" data-action="mousedown->add-fragment#paragraph">
        Paragraph
      </a>
      <hr class="dropdown-divider">
      <a class="dropdown-item" data-action="mousedown->add-fragment#pre">
        Code Block
      </a>
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

function change_fragment_menu() {
  return(`
  <div class="change-fragment-menu">
    <div class="dropdown-content context-menu">
      <a class="dropdown-item" data-action="mousedown->change-fragment#h1">
        <span class="has-text-weight-bold">Heading 1</span>
      </a>
      <a class="dropdown-item" data-action="mousedown->change-fragment#h2">
        <span class="has-text-weight-semibold">Heading 2</span>
      </a>
      <a class="dropdown-item" data-action="mousedown->change-fragment#h3">
        Heading 3
      </a>
      <hr class="dropdown-divider">
      <a class="dropdown-item" data-action="mousedown->change-fragment#paragraph">
        Paragraph
      </a>
    </div>
  </div>
  `)
}

export function show_change_fragment_menu(element) {
  return tippy(element, {
    allowHTML: true,
    content: change_fragment_menu(),
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
