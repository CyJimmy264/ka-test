import { Controller } from "@hotwired/stimulus"
import { Toast } from "bootstrap"

export default class extends Controller {
  connect() {
    addEventListener("turbo:before-stream-render", ((event) => {
      const defaultActions = event.detail.render

      event.detail.render = function (streamElement) {
        defaultActions(streamElement)
        if (
          streamElement.action == "append" &&
          streamElement.target == "toast_container"
        ) {
          const toasts = document.querySelectorAll('.toast')
          const toast = new Toast(toasts[toasts.length - 1])
          toast.show()

          var sound = new Audio('/message.oga')
          sound.play()
        }
      }
    }))
  }
}
