class ProgressBar {
  progress = document.getElementById('progress') as HTMLDivElement
  prev = document.getElementById('prev') as HTMLButtonElement
  next = document.getElementById('next') as HTMLButtonElement
  circles = document.querySelectorAll('.circle')
  currentActive = 1

  increaseProgressBar(): void {
    this.next.addEventListener('click', () => {
      this.currentActive++

      if (this.currentActive > this.circles.length) {
        this.currentActive = this.circles.length
      }
      this.updateDom()
    })
  }

  decreaseProgressBar(): void {
    this.prev.addEventListener('click', () => {
      this.currentActive--

      if (this.currentActive < 1) {
        this.currentActive = 1
      }
      this.updateDom()
    })
  }

  updateDom(): void {
    this.circles.forEach((circle, idx) => {
      if (idx < this.currentActive) {
        circle.classList.add('active')
      } else {
        circle.classList.remove('active')
      }
    })

    const actives = document.querySelectorAll('.active')
    this.progress.style.width =
      ((actives.length - 1) / (this.circles.length - 1)) * 100 + '%'

    if (this.currentActive === 1) {
      this.prev.disabled = true
    } else if (this.currentActive === this.circles.length) {
      this.next.disabled = true
    } else {
      this.prev.disabled = false
      this.next.disabled = false
    }
  }
}

const progressBar = new ProgressBar()

progressBar.increaseProgressBar()
progressBar.decreaseProgressBar()
