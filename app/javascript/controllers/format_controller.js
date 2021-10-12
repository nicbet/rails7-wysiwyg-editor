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

  link(event) {
    event.preventDefault()

    var documentSelection = document.getSelection()
    var range = document.getSelection().getRangeAt(0)
    var node = documentSelection.focusNode

    while (['A', 'DIV'].indexOf(node.nodeName) < 0) {
      node = node.parentNode;
    }

    if (node && node.nodeName === 'A') {
      console.log(`found link ${node}`)

      var range = document.createRange()
      range.selectNode(node)
      documentSelection.removeAllRanges()
      documentSelection.addRange(range)
      document.execCommand('unlink', false)
    } else {
      let url = window.prompt("Link URL")
      if (url) {
        let aNode = document.createElement("a")
        let title = document.createTextNode(documentSelection.toString())
        aNode.setAttribute("href", url)
        aNode.appendChild(title)

        range.deleteContents()
        range.insertNode(aNode)
      }
    }
  }
}
