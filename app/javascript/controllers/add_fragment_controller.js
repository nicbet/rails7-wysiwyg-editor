import { Controller } from "@hotwired/stimulus"
import { show_add_fragment_menu } from "../lib/context_menus"

export default class extends Controller {
  showMenu(event) {
    event.preventDefault()
    show_add_fragment_menu(this.element.querySelector("button"))
  }

  paragraph(event) {
    event.preventDefault()
    this.create_fragment("p", "write something amazing ...")
  }

  h1(event) {
    event.preventDefault()
    this.create_fragment("h1", "Title")
  }

  h2(event) {
    event.preventDefault()
    this.create_fragment("h2", "Title")
  }

  h3(event) {
    event.preventDefault()
    this.create_fragment("h3", "Title")
  }

  pre(event) {
    event.preventDefault()
    var language = prompt("Syntax Highlighting", "plain");
    if (language == null) {
      language = "plain"
    }
    this.create_fragment("pre", "your code here ...", language)
  }

  create_fragment(element, data, meta = "") {
    this.element.querySelector("#fragment_element").value = element
    this.element.querySelector("#fragment_data").value = data
    this.element.querySelector("#fragment_meta").value = meta
    this.element.querySelector("form").requestSubmit()
  }
}
