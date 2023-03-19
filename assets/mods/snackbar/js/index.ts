class Snackbar {
    private container: HTMLElement;

    getContainer() {
        if (!this.container) {
            this.container = document.createElement('div')
            this.container.className = 'snackbars'
            document.body.appendChild(this.container)
        }

        return this.container
    }

    add(text: string, duration = 2000) {
        const msg = document.createElement('div')
        msg.className = 'snackbar'
        msg.innerText = text
        this.getContainer().appendChild(msg)
        setTimeout(() => {
            msg.remove()
        }, duration)
    }
}

const snackbar = new Snackbar
export default snackbar
