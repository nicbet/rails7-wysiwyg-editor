import { Controller } from "@hotwired/stimulus"
import { turndownService } from "../lib/turndown_service"

import rangy from "rangy"
import "rangy/lib/rangy-textrange"

import { show_format_selection_menu } from "../lib/format_selection_menu"

export default class extends Controller {
  static targets = ["editable"]
  fragment_type = ""
  editor = null

  connect () {
    this.set_fragment_type()
    setTimeout(() => { this.element.classList.remove("saved") }, 500)
  }

  click (event) {
    this.editableTarget.setAttribute("contenteditable", "true")
    this.editableTarget.classList.add("is-editing")
    this.editableTarget.focus()
  }

  blur (event) {
    this.editableTarget.removeAttribute("contenteditable")
    this.editableTarget.classList.remove("is-editing")
    this.save()
  }

  keyDown (event) {
    if (event.keyCode == 13) {
      event.preventDefault()
      if (this.fragment_type === "pre") {
        document.execCommand("insertLineBreak")
      } else {
        this.editableTarget.removeAttribute("contenteditable")
      }
    }
    if (event.keyCode == 9) {
      if (this.fragment_type === "pre") {
        event.preventDefault()
        document.execCommand("insertText", false, "  ")
      }
    }
  }

  mouseDown (event) {
    rangy.getSelection().removeAllRanges()
  }

  mouseUp (event) {
    // get the current selection from window
    let selection = rangy.getSelection()

    // we can return early when the selection is collapsed
    if (selection.isCollapsed) {
      return
    }

    rangy.getSelection().trim()

    // show format selection menu
    show_format_selection_menu(this.editableTarget)
  }

  paste (event) {
    event.preventDefault()
    if (event.clipboardData) {
      let content = event.clipboardData.getData('text/plain');
      let selObj = window.getSelection()
      let selRange = selObj.getRangeAt(0)
      selRange.deleteContents()
      selRange.insertNode(document.createTextNode(content))

    }
  }

  set_fragment_type () {
    let classes = this.element.classList

    if (classes.contains("h1")) { this.fragment_type = "h1" }
    if (classes.contains("h2")) { this.fragment_type = "h2" }
    if (classes.contains("h3")) { this.fragment_type = "h3" }
    if (classes.contains("p")) { this.fragment_type = "p" }
    if (classes.contains("pre")) { this.fragment_type = "pre" }
  }

  save () {
    // Convert the element this controller is attached to
    let markdown = turndownService().turndown(this.editableTarget)

    // Dynamically fill out the form data and submit
    this.element.querySelector("#fragment_data").value = markdown
    this.element.querySelector("form").querySelector('input[type="submit"]').click()
  }
}