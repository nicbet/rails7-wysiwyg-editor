import { Controller } from "@hotwired/stimulus"
import rangy from "rangy"
import "rangy/lib/rangy-classapplier"

export default class extends Controller {
  bold(event) {
    event.preventDefault()
    let applier = rangy.createClassApplier("bold", { elementTagName: "strong" })
    applier.toggleSelection()
  }

  italic(event) {
    event.preventDefault()
    let applier = rangy.createClassApplier("italic", { elementTagName: "em" })
    applier.toggleSelection()
  }

  strikethrough(event) {
    event.preventDefault()
    let applier = rangy.createClassApplier("strikethrough", { elementTagName: "s" })
    applier.toggleSelection()
  }

  code(event) {
    event.preventDefault()
    let applier = rangy.createClassApplier("code", { elementTagName: "code" })
    applier.toggleSelection()
  }
}
