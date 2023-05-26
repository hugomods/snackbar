class Snackbar {
  private readonly container: HTMLElement

  constructor () {
    this.container = document.createElement('div')
    this.container.className = 'snackbars'
    document.body.appendChild(this.container)
  }

  add (text: string, duration = 2000): void {
    const msg = document.createElement('div')
    msg.className = 'snackbar'
    msg.innerText = text
    this.container.appendChild(msg)
    setTimeout(() => {
      msg.remove()
    }, duration)
  }
}

const snackbar = new Snackbar()
export default snackbar
