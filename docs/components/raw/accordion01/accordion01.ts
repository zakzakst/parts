'use strict';
import { gsap } from 'gsap';

export function accordion01() {
  const elList = document.getElementsByClassName('js-accordion-01');
  [...elList].forEach(el => {
    const accordion = new Accordion01(<HTMLElement>el);
    accordion.init();
  })
}

class Accordion01 {
  el: HTMLElement;
  headEl: HTMLElement;
  contentEl: HTMLElement;
  isOpen: Boolean;
  isRunning: Boolean;
  speed: number; // second
  cssAnimSpeed: number; // millisecond
  constructor(accordionEl: HTMLElement) {
    this.el = accordionEl;
    this.headEl = this.el.querySelector('.accordion-01__head');
    this.contentEl = this.el.querySelector('.accordion-01__content-wrapper');
    this.isOpen = false;
    this.isRunning = false;
    this.speed = .5;
    this.cssAnimSpeed = 300;
  }

  /**
   * Initialize accordion script
   */
  init(): void {
    this.onHeadClick();
  }

  /**
   * Open accordion content
   */
  openContent(): void {
    // In animation, end the process
    if (this.isRunning) return;
    // Open accordion content
    const self = this;
    this.isRunning = true;
    self.el.classList.add('is-open');
    gsap.to(this.contentEl, {
      duration: this.speed,
      height: 'auto',
      onComplete() {
        self.isOpen = true;
        self.isRunning = false;
      }
    });
  }

  /**
   * Close accordion content
   */
  closeContent(): void {
    // In animation, end the process
    if (this.isRunning) return;
    // Close accordion after CSS animation
    const self = this;
    this.isRunning = true;
    this.el.classList.remove('is-open');
    setTimeout(() => {
      gsap.to(this.contentEl, {
        duration: this.speed,
        height: 0,
        onComplete() {
          self.isOpen = false;
          self.isRunning = false;
        }
      });
    }, this.cssAnimSpeed);
  }

  /**
   * Toggle accordion content
   */
  toggleContent(): void {
    if (this.isOpen) {
      this.closeContent();
    } else {
      this.openContent();
    }
  }

  /**
   * Behavior settings when the heading is clicked
   */
  onHeadClick(): void {
    this.el.addEventListener('click', () => {
      this.toggleContent();
    });
  }
}
