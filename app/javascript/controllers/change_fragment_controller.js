import { Controller } from "@hotwired/stimulus"
import { show_change_fragment_menu } from "../lib/context_menus"

export default class extends Controller {

  fragment_type = "p"

  connect() {
    let classes = this.element.classList
    if (classes.contains("h1")) { this.fragment_type = "h1" }
    if (classes.contains("h2")) { this.fragment_type = "h2" }
    if (classes.contains("h3")) { this.fragment_type = "h3" }
    if (classes.contains("p")) { this.fragment_type = "p" }
    if (classes.contains("pre")) { this.fragment_type = "pre" }
  }

  showMenu(event) {
    event.preventDefault()
    show_change_fragment_menu(this.element.querySelector("button"))
  }

  h1(event) {
    event.preventDefault()
    this.change_to("h1")
  }

  h2(event) {
    event.preventDefault()
    this.change_to("h2")
  }

  h3(event) {
    event.preventDefault()
    this.change_to("h3")
  }

  paragraph(event) {
    event.preventDefault()
    this.change_to("p")
  }

  pre(event) {
    event.preventDefault()
    var language = prompt("Language", "plain");
    if (language == null) {
      language = "plain"
    }
    this.change_to("pre", language)
  }

  change_to(element, meta="") {
    this.element.querySelector("#fragment_element").value = element
    this.element.querySelector("#fragment_meta").value = meta
    this.element.querySelector("form").requestSubmit()
  }
}
