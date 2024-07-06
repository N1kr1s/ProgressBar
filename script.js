"use strict";
class ProgressBar {
    constructor() {
        this.progress = document.getElementById('progress');
        this.prev = document.getElementById('prev');
        this.next = document.getElementById('next');
        this.circles = document.querySelectorAll('.circle');
        this.currentActive = 1;
    }
    increaseProgressBar() {
        this.next.addEventListener('click', () => {
            this.currentActive++;
            if (this.currentActive > this.circles.length) {
                this.currentActive = this.circles.length;
            }
            this.updateDom();
        });
    }
    decreaseProgressBar() {
        this.prev.addEventListener('click', () => {
            this.currentActive--;
            if (this.currentActive < 1) {
                this.currentActive = 1;
            }
            this.updateDom();
        });
    }
    updateDom() {
        this.circles.forEach((circle, idx) => {
            if (idx < this.currentActive) {
                circle.classList.add('active');
            }
            else {
                circle.classList.remove('active');
            }
        });
        const actives = document.querySelectorAll('.active');
        this.progress.style.width =
            ((actives.length - 1) / (this.circles.length - 1)) * 100 + '%';
        if (this.currentActive === 1) {
            this.prev.disabled = true;
        }
        else if (this.currentActive === this.circles.length) {
            this.next.disabled = true;
        }
        else {
            this.prev.disabled = false;
            this.next.disabled = false;
        }
    }
}
const progressBar = new ProgressBar();
progressBar.increaseProgressBar();
progressBar.decreaseProgressBar();
