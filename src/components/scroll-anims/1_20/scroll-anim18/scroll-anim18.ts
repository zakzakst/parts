'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const scrollAnim18 = () => {
  const anim = new Anim18('js-scroll-anim-18');
  anim.init();
}

class Anim18 {
  el: HTMLElement;
  sliderEl: HTMLElement;
  sliderItemEls: NodeListOf<HTMLElement>;
  imgLoadedNum: number;
  currentSliderIndex: number;
  duration: number;
  offsetParallax: number;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    if (!this.el) return;
    this.sliderEl = this.el.querySelector('.scroll-anim-18-kv__slider');
    this.sliderItemEls = this.sliderEl.querySelectorAll('.scroll-anim-18-kv__slider-item');
    this.imgLoadedNum = 0;
    this.currentSliderIndex = 0;
    this.duration = 6000;
    this.offsetParallax = 60;
  }

  init() {
    if (!this.el) return;
    this.parallax();
    this.onLoadHandler();
  }

  onLoadHandler() {
    this.sliderItemEls.forEach(el => {
      const imgWrapperEl = <HTMLElement>el.querySelector('.scroll-anim-18-kv__img-wrapper');
      const imgEl = imgWrapperEl.querySelector('img');
      imgEl.addEventListener('load', () => {
        const src = imgEl.getAttribute('src');
        imgWrapperEl.style.backgroundImage = `url(${ src })`;
        this.imgLoadedNum++;
        if (this.imgLoadedNum >= this.sliderItemEls.length) {
          this.startSlide();
        }
      });
    });
  }

  startSlide() {
    this.sliderItemEls[this.currentSliderIndex].classList.add('is-active');
    this.next();
  }

  next() {
    const self = this;
    setTimeout(() => {
      const prevIndex = self.currentSliderIndex === 0 ? self.sliderItemEls.length - 1 : self.currentSliderIndex - 1;
      const nextIndex = self.currentSliderIndex < self.sliderItemEls.length - 1 ? self.currentSliderIndex + 1 : 0;
      self.sliderItemEls[prevIndex].classList.remove('is-leave');
      self.sliderItemEls[self.currentSliderIndex].classList.remove('is-active');
      self.sliderItemEls[self.currentSliderIndex].classList.add('is-leave');
      self.sliderItemEls[nextIndex].classList.add('is-active');
      self.currentSliderIndex = nextIndex;
      self.next();
    }, this.duration);
  }

  parallax() {
    gsap.to(this.sliderEl, {
      scrollTrigger: {
        trigger: this.el,
        start: 'top top',
        end: 'bottom top',
        scrub: .3,
        // markers: true,
      },
      y: this.offsetParallax,
    });
  }
}
