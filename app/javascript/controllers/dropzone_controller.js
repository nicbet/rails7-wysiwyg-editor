import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ 'input' ]

  connect() {
    this.inputTarget.style.display = "none"
    console.log(this.inputTarget)
  }
}
