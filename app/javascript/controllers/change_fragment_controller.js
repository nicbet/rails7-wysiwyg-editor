import { Controller } from "@hotwired/stimulus"
import { show_change_fragment_menu } from "../lib/context_menus"

export default class extends Controller {
  showMenu(event) {
    event.preventDefault()
    show_change_fragment_menu(this.element.querySelector("button"))
  }

  paragraph(event) {
    event.preventDefault()
    this.change_to("p")
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

  change_to(element) {
    this.element.querySelector("#fragment_element").value = element
    this.element.querySelector("form").requestSubmit()
  }
}
