import { Controller } from "@hotwired/stimulus"
import { Sortable } from "sortablejs"

export default class extends Controller {
  connect() {
    this.sortable = Sortable.create(this.element, {
      handle: ".handle",
      ghostClass: "being-dragged",
      direction: "vertical",
      swapThreshold: 0.5,
      invertSwap: true,
      animation: 150,
      onEnd: this.moved.bind(this)
    })
  }

  moved(event) {
    console.log(`Moved ${event.item} to position ${event.newIndex + 1}`)
    event.item.querySelector("#fragment_position").value = event.newIndex + 1
    console.log(event.item.querySelector("form"))
    event.item.querySelector("form").requestSubmit()
  }
}
