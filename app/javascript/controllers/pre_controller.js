import Editablecontroller from "./editable_controller";

export default class extends Editablecontroller {
  keyDown(event) {
    event.preventDefault()
    document.execCommand("insertText", false, "\n\r")
  }
}